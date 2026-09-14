#!/usr/bin/env node
/**
 * Renders public/brand/print-book.html to a stakeholder-ready A4 PDF.
 * Embeds fonts and inlines photography so the file is self-contained.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRAND = join(ROOT, "public/brand");
const FONTS = "/tmp/cm-fonts";
const PDF_NAME = "Core-Marketing-Brand-Book.pdf";

function dataUri(path, mime) {
  const buf = readFileSync(path);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function fontFace() {
  const faces = [
    ["cormorant-light.woff2", "Cormorant Garamond", 300, "normal"],
    ["cormorant-regular.woff2", "Cormorant Garamond", 400, "normal"],
    ["cormorant-light-italic.woff2", "Cormorant Garamond", 300, "italic"],
    ["cormorant-italic.woff2", "Cormorant Garamond", 400, "italic"],
    ["manrope-latin.woff2", "Manrope", "400 700", "normal"],
  ];
  return faces
    .map(([file, family, weight, style]) => {
      const uri = dataUri(join(FONTS, file), "font/woff2");
      return `@font-face{font-family:"${family}";font-style:${style};font-weight:${weight};font-display:block;src:url(${uri}) format("woff2")}`;
    })
    .join("\n");
}

function prepareHtml() {
  let html = readFileSync(join(BRAND, "print-book.html"), "utf8");
  html = html.replace(
    /<link rel="preconnect"[\s\S]*?display=swap" \/>/,
    `<style>\n${fontFace()}\n</style>`,
  );

  const images = [
    "aperture.jpg",
    "studio.jpg",
    "gallery.jpg",
    "stationery.jpg",
    "city.jpg",
    "desk.jpg",
    "reception.jpg",
  ];
  for (const name of images) {
    const uri = dataUri(join(BRAND, name), "image/jpeg");
    html = html.replaceAll(`src="${name}"`, `src="${uri}"`);
  }
  return html;
}

export async function buildBrandBook() {
  const html = prepareHtml();
  const staged = "/tmp/cm-brand-book-print.html";
  writeFileSync(staged, html);

  const chrome =
    "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
  const browser = await chromium.launch({
    executablePath: chrome,
    args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
  });
  const page = await browser.newPage();
  await page.goto(`file://${staged}`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);

  const kitDir = join(BRAND, "kit/05-brand-book");
  mkdirSync(kitDir, { recursive: true });
  const kitPdf = join(kitDir, PDF_NAME);
  await page.pdf({
    path: kitPdf,
    printBackground: true,
    preferCSSPageSize: true,
    width: "210mm",
    height: "297mm",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();

  const publicPdf = join(BRAND, PDF_NAME);
  copyFileSync(kitPdf, publicPdf);
  mkdirSync(join(ROOT, "artifacts"), { recursive: true });
  copyFileSync(kitPdf, join(ROOT, "artifacts", PDF_NAME));
  console.log("pdf", kitPdf);
  return kitPdf;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await buildBrandBook();
}
