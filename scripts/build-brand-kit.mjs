#!/usr/bin/env node
/**
 * Builds the Core Marketing download kit: logos, lockups, editable
 * stationery, a print PDF of the brand book, and a zip of everything.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public/brand/kit");
const FONTS = "/tmp/cm-fonts";

const INK = "#0C0B0A";
const VELLUM = "#F3EFE8";
const LIMESTONE = "#B7AFA3";
const JUNIPER = "#2F7A4E";
const ASH = "#6F6B64";

mkdirSync(OUT, { recursive: true });

const manrope = readFileSync(join(FONTS, "manrope.woff2")).toString("base64");
const cormorant = readFileSync(join(FONTS, "cormorant.woff2")).toString("base64");

const FONT_CSS = `
@font-face{font-family:Manrope;font-weight:400 700;font-style:normal;src:url(data:font/woff2;base64,${manrope}) format("woff2")}
@font-face{font-family:"Cormorant Garamond";font-weight:300;font-style:normal;src:url(data:font/woff2;base64,${cormorant}) format("woff2")}
`.trim();

function mark({ outer, inner, core, title }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" role="img">
  <title>${title}</title>
  <circle cx="40" cy="40" r="31.5" stroke="${outer}" stroke-width="1.2"/>
  <circle cx="40" cy="40" r="18.5" stroke="${inner}" stroke-width="1.2"/>
  <circle cx="40" cy="40" r="6" fill="${core}"/>
</svg>
`;
}

function lockup({ field, filename }) {
  const onInk = field === "ink";
  const bg = onInk ? INK : VELLUM;
  const coreFill = onInk ? VELLUM : INK;
  const mkt = LIMESTONE;
  const outer = onInk ? VELLUM : INK;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 120" width="420" height="120" role="img">
  <title>Core Marketing lockup — on ${field}</title>
  <style>
    ${FONT_CSS}
    .core{font-family:Manrope,sans-serif;font-weight:600;font-size:32px;letter-spacing:0.18em;fill:${coreFill};text-transform:uppercase}
    .mkt{font-family:Manrope,sans-serif;font-weight:400;font-size:23px;letter-spacing:0.32em;fill:${mkt};text-transform:uppercase}
  </style>
  <rect width="420" height="120" fill="${bg}"/>
  <g transform="translate(16 24)">
    <circle cx="36" cy="36" r="28.4" stroke="${outer}" stroke-width="1.15" fill="none"/>
    <circle cx="36" cy="36" r="16.7" stroke="${LIMESTONE}" stroke-width="1.15" fill="none"/>
    <circle cx="36" cy="36" r="5.4" fill="${JUNIPER}"/>
  </g>
  <text class="core" x="100" y="54">CORE</text>
  <text class="mkt" x="100" y="86">MARKETING</text>
</svg>
`;
}

function lockupTransparent({ field }) {
  const onInk = field === "ink";
  const coreFill = onInk ? VELLUM : INK;
  const outer = onInk ? VELLUM : INK;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100" role="img">
  <title>Core Marketing lockup — transparent, for ${field} fields</title>
  <style>
    ${FONT_CSS}
    .core{font-family:Manrope,sans-serif;font-weight:600;font-size:32px;letter-spacing:0.18em;fill:${coreFill};text-transform:uppercase}
    .mkt{font-family:Manrope,sans-serif;font-weight:400;font-size:23px;letter-spacing:0.32em;fill:${LIMESTONE};text-transform:uppercase}
  </style>
  <g transform="translate(8 14)">
    <circle cx="36" cy="36" r="28.4" stroke="${outer}" stroke-width="1.15" fill="none"/>
    <circle cx="36" cy="36" r="16.7" stroke="${LIMESTONE}" stroke-width="1.15" fill="none"/>
    <circle cx="36" cy="36" r="5.4" fill="${JUNIPER}"/>
  </g>
  <text class="core" x="92" y="44">CORE</text>
  <text class="mkt" x="92" y="76">MARKETING</text>
</svg>
`;
}

function cardFront() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="3.5in" height="2in" viewBox="0 0 350 200" role="img">
  <title>Core Marketing business card — front. Editable in Figma, Illustrator, Affinity.</title>
  <style>
    ${FONT_CSS}
    .core{font-family:Manrope,sans-serif;font-weight:600;font-size:18px;letter-spacing:0.18em;fill:${VELLUM};text-transform:uppercase}
    .mkt{font-family:Manrope,sans-serif;font-weight:400;font-size:13px;letter-spacing:0.32em;fill:${LIMESTONE};text-transform:uppercase}
  </style>
  <rect width="350" height="200" fill="${INK}"/>
  <g transform="translate(28 68)">
    <circle cx="22" cy="22" r="17.3" stroke="${VELLUM}" stroke-width="1.05" fill="none"/>
    <circle cx="22" cy="22" r="10.2" stroke="${LIMESTONE}" stroke-width="1.05" fill="none"/>
    <circle cx="22" cy="22" r="3.3" fill="${JUNIPER}"/>
  </g>
  <text class="core" x="82" y="90">CORE</text>
  <text class="mkt" x="82" y="112">MARKETING</text>
</svg>
`;
}

function cardBack() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="3.5in" height="2in" viewBox="0 0 350 200" role="img">
  <title>Core Marketing business card — back. Edit the name, role, and contact lines.</title>
  <style>
    ${FONT_CSS}
    .name{font-family:"Cormorant Garamond",serif;font-weight:300;font-size:26px;fill:${INK}}
    .role{font-family:Manrope,sans-serif;font-weight:400;font-size:9px;letter-spacing:0.28em;fill:${ASH};text-transform:uppercase}
    .meta{font-family:Manrope,sans-serif;font-weight:400;font-size:9px;fill:${ASH}}
  </style>
  <!-- EDITABLE TEXT — change these three lines in any vector editor -->
  <rect width="350" height="200" fill="${VELLUM}"/>
  <text id="name" class="name" x="28" y="52">Your Name</text>
  <text id="role" class="role" x="28" y="72">Partner</text>
  <text id="email" class="meta" x="28" y="154">studio@core.marketing</text>
  <text id="phone" class="meta" x="28" y="168">+250 000 000 000</text>
  <text id="web" class="meta" x="28" y="182">core.marketing</text>
  <g transform="translate(286 148)">
    <circle cx="18" cy="18" r="14.2" stroke="${INK}" stroke-width="0.95" fill="none"/>
    <circle cx="18" cy="18" r="8.4" stroke="${LIMESTONE}" stroke-width="0.95" fill="none"/>
    <circle cx="18" cy="18" r="2.7" fill="${JUNIPER}"/>
  </g>
</svg>
`;
}

function letterhead() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" viewBox="0 0 210 297" role="img">
  <title>Core Marketing letterhead — A4. Editable.</title>
  <style>
    ${FONT_CSS}
    .core{font-family:Manrope,sans-serif;font-weight:600;font-size:4.2px;letter-spacing:0.18em;fill:${INK};text-transform:uppercase}
    .mkt{font-family:Manrope,sans-serif;font-weight:400;font-size:3px;letter-spacing:0.32em;fill:${ASH};text-transform:uppercase}
    .meta{font-family:Manrope,sans-serif;font-weight:400;font-size:2.6px;fill:${ASH}}
    .rule{stroke:${INK};stroke-opacity:0.12;stroke-width:0.2}
  </style>
  <rect width="210" height="297" fill="${VELLUM}"/>
  <g transform="translate(18 16)">
    <circle cx="5.5" cy="5.5" r="4.3" stroke="${INK}" stroke-width="0.28" fill="none"/>
    <circle cx="5.5" cy="5.5" r="2.5" stroke="${LIMESTONE}" stroke-width="0.28" fill="none"/>
    <circle cx="5.5" cy="5.5" r="0.85" fill="${JUNIPER}"/>
  </g>
  <text class="core" x="32" y="20">CORE</text>
  <text class="mkt" x="32" y="25">MARKETING</text>
  <text class="meta" x="150" y="18">By appointment · Kigali</text>
  <text class="meta" x="150" y="22">studio@core.marketing</text>
  <text class="meta" x="150" y="26">core.marketing</text>
  <line class="rule" x1="18" y1="36" x2="192" y2="36"/>
  <line class="rule" x1="18" y1="272" x2="192" y2="272"/>
  <text class="meta" x="18" y="282">Confidential  ·  Volume 01</text>
  <text class="meta" x="150" y="282">The architecture of attention.</text>
</svg>
`;
}

function envelope() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="220mm" height="110mm" viewBox="0 0 220 110" role="img">
  <title>Core Marketing envelope — DL. Editable.</title>
  <style>
    ${FONT_CSS}
    .core{font-family:Manrope,sans-serif;font-weight:600;font-size:5px;letter-spacing:0.18em;fill:${INK};text-transform:uppercase}
    .mkt{font-family:Manrope,sans-serif;font-weight:400;font-size:3.6px;letter-spacing:0.32em;fill:${ASH};text-transform:uppercase}
    .meta{font-family:Manrope,sans-serif;font-weight:400;font-size:3.2px;fill:${ASH}}
  </style>
  <rect width="220" height="110" fill="${VELLUM}"/>
  <polygon points="0,0 220,0 110,48" fill="${VELLUM}" stroke="${INK}" stroke-opacity="0.08" stroke-width="0.3"/>
  <g transform="translate(14 58)">
    <circle cx="6" cy="6" r="4.7" stroke="${INK}" stroke-width="0.3" fill="none"/>
    <circle cx="6" cy="6" r="2.8" stroke="${LIMESTONE}" stroke-width="0.3" fill="none"/>
    <circle cx="6" cy="6" r="0.9" fill="${JUNIPER}"/>
  </g>
  <text class="core" x="28" y="64">CORE</text>
  <text class="mkt" x="28" y="70">MARKETING</text>
  <text class="meta" x="140" y="64">By appointment</text>
  <text class="meta" x="140" y="70">Kigali</text>
  <text class="meta" x="140" y="76">core.marketing</text>
</svg>
`;
}

const files = {
  "01-logo-only/Core-Mark-On-Ink.svg": mark({
    outer: VELLUM,
    inner: LIMESTONE,
    core: JUNIPER,
    title: "Core Marketing mark — on ink",
  }),
  "01-logo-only/Core-Mark-On-Vellum.svg": mark({
    outer: INK,
    inner: LIMESTONE,
    core: JUNIPER,
    title: "Core Marketing mark — on vellum",
  }),
  "01-logo-only/Core-Mark-Mono.svg": mark({
    outer: INK,
    inner: INK,
    core: INK,
    title: "Core Marketing mark — single colour",
  }),
  "02-logo-with-words/Core-Lockup-On-Ink.svg": lockup({ field: "ink" }),
  "02-logo-with-words/Core-Lockup-On-Vellum.svg": lockup({ field: "vellum" }),
  "02-logo-with-words/Core-Lockup-On-Ink-Transparent.svg": lockupTransparent({ field: "ink" }),
  "02-logo-with-words/Core-Lockup-On-Vellum-Transparent.svg": lockupTransparent({ field: "vellum" }),
  "03-business-cards/Core-Business-Card-Front.svg": cardFront(),
  "03-business-cards/Core-Business-Card-Back.svg": cardBack(),
  "04-stationery/Core-Letterhead-A4.svg": letterhead(),
  "04-stationery/Core-Envelope-DL.svg": envelope(),
};

for (const [rel, body] of Object.entries(files)) {
  const dest = join(OUT, rel);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, body);
}

mkdirSync(join(OUT, "06-tokens"), { recursive: true });
copyFileSync(join(ROOT, "public/brand/tokens.json"), join(OUT, "06-tokens/tokens.json"));

writeFileSync(
  join(OUT, "README.txt"),
  `CORE MARKETING  —  Brand Kit  ·  Volume 01
The architecture of attention.

01  LOGO ONLY
    SVG marks. Use On-Ink on dark fields, On-Vellum on paper.
    Mono is for single-colour print (foil, emboss, newsprint).
    PNG rasters sit beside the SVGs for quick drop-in.

02  LOGO WITH WORDS
    Horizontal lockup: mark to the left, CORE large, MARKETING smaller.
    Transparent versions have no background — place them on the correct field.
    Do not rearrange, recolour the nucleus, or change the tracking of CORE.

03  BUSINESS CARDS
    3.5 × 2 in. SVG is the editable file (Figma, Illustrator, Affinity, Inkscape).
    Open the back and change the text with ids: name, role, email, phone, web.
    Fonts are embedded. PDF is print-ready.

04  STATIONERY
    Letterhead A4 and DL envelope. SVG, editable.

05  BRAND BOOK
    Core-Marketing-Brand-Book.pdf — 16 pages, A4. The document of record.
    Share this with stakeholders. Do not screenshot chapters.

06  TOKENS
    tokens.json — hex, construction, lockup rules.

Juniper (the nucleus)  #2F7A4E
Ink                    #0C0B0A
Vellum                 #F3EFE8
Limestone              #B7AFA3

studio@core.marketing
`,
);

writeFileSync(
  join(OUT, "03-business-cards/HOW-TO-EDIT.txt"),
  `EDITING THE BUSINESS CARD

1. Open Core-Business-Card-Back.svg in Figma, Illustrator, Affinity, or Inkscape.
2. The back has five text objects with ids:
     name    —  Your Name
     role    —  Partner
     email   —  studio@core.marketing
     phone   —  +250 000 000 000
     web     —  core.marketing
3. Do not move the mark or change Juniper (#2F7A4E).
4. Front is the lockup only. Leave it as-is.
5. Export PDF from your editor, or use the PDF already in this folder.
6. Print 3.5 × 2 in, uncoated or soft-touch stock, ink and vellum.
`,
);

function pngStageHtml() {
  const items = [
    ["mark-ink", files["01-logo-only/Core-Mark-On-Ink.svg"], INK, 800, 800],
    ["mark-vellum", files["01-logo-only/Core-Mark-On-Vellum.svg"], VELLUM, 800, 800],
    ["lockup-ink", files["02-logo-with-words/Core-Lockup-On-Ink.svg"], INK, 1260, 360],
    ["lockup-vellum", files["02-logo-with-words/Core-Lockup-On-Vellum.svg"], VELLUM, 1260, 360],
    ["card-front", files["03-business-cards/Core-Business-Card-Front.svg"], INK, 1050, 600],
    ["card-back", files["03-business-cards/Core-Business-Card-Back.svg"], VELLUM, 1050, 600],
  ];
  const pages = items
    .map(
      ([id, svg, bg, w, h]) => `
<section id="${id}" style="width:${w}px;height:${h}px;background:${bg};display:flex;align-items:center;justify-content:center;overflow:hidden">
  <div style="width:${id.startsWith("mark") ? "56%" : "100%"};height:${id.startsWith("mark") ? "56%" : "100%"}">${svg.replace(/<\?xml[^>]*>/, "")}</div>
</section>`,
    )
    .join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{margin:0;padding:0;background:#111}
    section svg{width:100%;height:100%;display:block}
  </style></head><body>${pages}</body></html>`;
}

writeFileSync("/tmp/cm-kit-raster.html", pngStageHtml());

const bookHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Core Marketing — Brand Book Volume 01</title>
<style>
  ${FONT_CSS}
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;background:${INK};color:${VELLUM};font-family:Manrope,sans-serif}
  @page{size:A4;margin:0}
  .page{width:210mm;height:297mm;padding:18mm 18mm 16mm;position:relative;page-break-after:always;overflow:hidden}
  .page.ink{background:${INK};color:${VELLUM}}
  .page.paper{background:${VELLUM};color:${INK}}
  .label{font-size:8pt;letter-spacing:0.32em;text-transform:uppercase;color:${LIMESTONE};font-weight:500}
  h1,h2,h3{font-family:"Cormorant Garamond",serif;font-weight:300;letter-spacing:-0.03em;margin:0}
  h1{font-size:42pt;line-height:0.95}
  h2{font-size:28pt;line-height:1.05}
  p{font-size:10pt;line-height:1.55;margin:10pt 0 0}
  .muted{color:${ASH}}
  .swatch{display:flex;align-items:flex-end;justify-content:space-between;padding:16pt 18pt;margin-top:8pt;border-radius:4pt;min-height:52pt}
  .lock{display:flex;align-items:center;gap:14pt;margin-top:28pt}
  .foot{position:absolute;left:18mm;right:18mm;bottom:12mm;display:flex;justify-content:space-between;font-size:7.5pt;letter-spacing:0.22em;text-transform:uppercase;color:${ASH}}
</style>
</head>
<body>
  <section class="page ink">
    <p class="label">The Brand Book  ·  Volume 01</p>
    <div class="lock" style="margin-top:42mm">
      <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="31.5" stroke="${VELLUM}" stroke-width="1.2"/>
        <circle cx="40" cy="40" r="18.5" stroke="${LIMESTONE}" stroke-width="1.2"/>
        <circle cx="40" cy="40" r="6" fill="${JUNIPER}"/>
      </svg>
      <div>
        <div style="font-weight:600;font-size:22pt;letter-spacing:0.18em">CORE</div>
        <div style="margin-top:6pt;font-size:16pt;letter-spacing:0.32em;color:${LIMESTONE}">MARKETING</div>
      </div>
    </div>
    <h1 style="margin-top:28mm;font-style:italic;font-size:36pt">Presence, made inevitable.</h1>
    <p class="muted" style="margin-top:14pt">Kigali  ·  A marketing studio  ·  Est. 2018</p>
    <div class="foot"><span>Core Marketing</span><span>01 / 07</span></div>
  </section>

  <section class="page paper">
    <p class="label">03  —  The Mark</p>
    <h2 style="margin-top:10pt">Ivory. Stone. Juniper.</h2>
    <p>Three tones, always in this order. An ivory outer ring. A limestone inner ring. A juniper nucleus. The mark sits to the left of the name. CORE is the larger line — semibold, tracked. MARKETING sits beneath it, smaller, regular, in limestone.</p>
    <div style="display:flex;gap:12pt;margin-top:22pt">
      <div style="flex:1;background:${INK};height:78mm;display:flex;align-items:center;justify-content:center;border-radius:4pt">
        <svg width="96" height="96" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="31.5" stroke="${VELLUM}" stroke-width="1.2"/>
          <circle cx="40" cy="40" r="18.5" stroke="${LIMESTONE}" stroke-width="1.2"/>
          <circle cx="40" cy="40" r="6" fill="${JUNIPER}"/>
        </svg>
      </div>
      <div style="flex:1;background:${INK}0F;height:78mm;display:flex;align-items:center;justify-content:center;border-radius:4pt">
        <svg width="96" height="96" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="31.5" stroke="${INK}" stroke-width="1.2"/>
          <circle cx="40" cy="40" r="18.5" stroke="${LIMESTONE}" stroke-width="1.2"/>
          <circle cx="40" cy="40" r="6" fill="${JUNIPER}"/>
        </svg>
      </div>
    </div>
    <p class="muted">Clear space equals one core-diameter on every side. Minimum size: 20px digital, 8mm print. The nucleus is always Juniper, except in single-colour reproduction.</p>
    <div class="foot"><span>The Mark</span><span>02 / 07</span></div>
  </section>

  <section class="page paper">
    <p class="label">04  —  Colour</p>
    <h2 style="margin-top:10pt">Six named colours. Juniper is used once.</h2>
    <div class="swatch" style="background:${INK};color:${VELLUM};margin-top:16pt"><div><strong>Ink</strong><div class="muted">The field.</div></div><div>#0C0B0A</div></div>
    <div class="swatch" style="background:#161513;color:${VELLUM}"><div><strong>Night</strong></div><div>#161513</div></div>
    <div class="swatch" style="background:${ASH};color:${VELLUM}"><div><strong>Ash</strong></div><div>#6F6B64</div></div>
    <div class="swatch" style="background:${LIMESTONE};color:${INK}"><div><strong>Limestone</strong></div><div>#B7AFA3</div></div>
    <div class="swatch" style="background:${JUNIPER};color:${VELLUM}"><div><strong>Juniper</strong><div style="opacity:.8">The nucleus. Used in the mark.</div></div><div>#2F7A4E</div></div>
    <div class="swatch" style="background:${VELLUM};color:${INK};outline:0.4pt solid ${INK}22"><div><strong>Vellum</strong></div><div>#F3EFE8</div></div>
    <div class="foot"><span>Colour</span><span>03 / 07</span></div>
  </section>

  <section class="page paper">
    <p class="label">05  —  Type</p>
    <h2 style="margin-top:10pt">A serif for the name. A sans for the work.</h2>
    <p>Cormorant Garamond carries the voice — light, editorial, unhurried. Manrope carries the information. Two families. No substitutes.</p>
    <p style="font-family:'Cormorant Garamond',serif;font-size:36pt;font-weight:300;margin-top:22pt;font-style:italic;line-height:1">Presence, made inevitable.</p>
    <p class="muted">Pull quote — Cormorant Italic</p>
    <p style="margin-top:22pt"><strong>Display</strong>  ·  Cormorant Garamond Light  ·  72–144px  ·  −0.03em</p>
    <p><strong>Headline</strong>  ·  Cormorant Garamond  ·  36–56px</p>
    <p><strong>Wordmark</strong>  ·  Manrope Semibold / Regular  ·  CORE 1em · MARKETING 0.72em  ·  0.18em / 0.32em</p>
    <p><strong>Label</strong>  ·  Manrope  ·  10–11px  ·  0.32em</p>
    <div class="foot"><span>Type</span><span>04 / 07</span></div>
  </section>

  <section class="page paper">
    <p class="label">08  —  Business</p>
    <h2 style="margin-top:10pt">Cards. 3.5 × 2 in.</h2>
    <p>Front is the lockup on ink. Back is paper — name, role, contact. Edit the SVG. Do not add a third colour, a QR code, or a tagline on the front.</p>
    <div style="display:flex;gap:10pt;margin-top:18pt">
      <div style="flex:1;background:${INK};height:62mm;border-radius:3pt;display:flex;align-items:center;padding:10pt">
        <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="31.5" stroke="${VELLUM}" stroke-width="1.2"/>
          <circle cx="40" cy="40" r="18.5" stroke="${LIMESTONE}" stroke-width="1.2"/>
          <circle cx="40" cy="40" r="6" fill="${JUNIPER}"/>
        </svg>
        <div style="margin-left:8pt;color:${VELLUM}">
          <div style="font-weight:600;font-size:9pt;letter-spacing:0.18em">CORE</div>
          <div style="margin-top:3pt;font-size:6.5pt;letter-spacing:0.32em;color:${LIMESTONE}">MARKETING</div>
        </div>
      </div>
      <div style="flex:1;background:${VELLUM};height:62mm;border-radius:3pt;padding:10pt;outline:0.4pt solid ${INK}18">
        <div style="font-family:'Cormorant Garamond',serif;font-size:14pt">Your Name</div>
        <div style="font-size:6.5pt;letter-spacing:0.28em;color:${ASH};margin-top:4pt">PARTNER</div>
        <div style="font-size:7pt;color:${ASH};margin-top:18pt">studio@core.marketing<br/>core.marketing</div>
      </div>
    </div>
    <p class="muted" style="margin-top:16pt">Also in the kit: A4 letterhead, DL envelope, and the lockup as SVG / PNG.</p>
    <div class="foot"><span>Business</span><span>05 / 07</span></div>
  </section>

  <section class="page paper">
    <p class="label">09  —  System</p>
    <h2 style="margin-top:10pt">Rules that keep the house standing.</h2>
    <p>Do not stretch, rotate, or skew the mark.</p>
    <p>Do not add fills, glows, drop shadows, or extra rings.</p>
    <p>Do not recolour the juniper nucleus except in single-colour reproduction.</p>
    <p>Do not place the mark on busy photography without a field.</p>
    <p>Do not offset, replace, or hollow the core.</p>
    <p>Do not rearrange the lockup or change the tracking of CORE.</p>
    <p style="margin-top:18pt" class="muted">Grid: twelve columns on desktop, four on mobile. Space: 4, 8, 12, 16, 24, 32, 48, 64. Motion: 150–250ms, ease-out, opacity and transform only.</p>
    <div class="foot"><span>System</span><span>06 / 07</span></div>
  </section>

  <section class="page ink">
    <p class="label">End matter</p>
    <h1 style="margin-top:28mm;font-style:italic">The architecture of attention.</h1>
    <p style="margin-top:16pt">studio@core.marketing<br/>core.marketing<br/>Kigali · By appointment</p>
    <p class="muted" style="margin-top:22pt">Est. 2018  ·  Volume 01</p>
    <div class="foot"><span>Core Marketing</span><span>07 / 07</span></div>
  </section>
</body>
</html>`;

writeFileSync("/tmp/cm-brand-book.html", bookHtml);
console.log("Wrote SVG kit and print HTML");

const chrome =
  "/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({
  executablePath: chrome,
  args: ["--no-sandbox", "--disable-gpu", "--font-render-hinting=none"],
});
const page = await browser.newPage();

await page.goto("file:///tmp/cm-kit-raster.html", { waitUntil: "load" });
await page.waitForTimeout(400);

async function shot(id, dest, w, h) {
  const el = page.locator(`#${id}`);
  await el.screenshot({ path: dest, type: "png" });
  console.log("png", dest);
}

mkdirSync(join(OUT, "01-logo-only"), { recursive: true });
mkdirSync(join(OUT, "02-logo-with-words"), { recursive: true });
mkdirSync(join(OUT, "03-business-cards"), { recursive: true });
mkdirSync(join(OUT, "05-brand-book"), { recursive: true });

await page.setViewportSize({ width: 1400, height: 900 });
await shot("mark-ink", join(OUT, "01-logo-only/Core-Mark-On-Ink.png"), 800, 800);
await shot("mark-vellum", join(OUT, "01-logo-only/Core-Mark-On-Vellum.png"), 800, 800);
await shot("lockup-ink", join(OUT, "02-logo-with-words/Core-Lockup-On-Ink.png"), 1260, 360);
await shot("lockup-vellum", join(OUT, "02-logo-with-words/Core-Lockup-On-Vellum.png"), 1260, 360);
await shot("card-front", join(OUT, "03-business-cards/Core-Business-Card-Front.png"), 1050, 600);
await shot("card-back", join(OUT, "03-business-cards/Core-Business-Card-Back.png"), 1050, 600);

await page.setViewportSize({ width: 1050, height: 600 });
await page.setContent(`<!doctype html><html><body style="margin:0">${files["03-business-cards/Core-Business-Card-Front.svg"].replace(/<\?xml[^>]*>/, "")}</body></html>`);
await page.pdf({
  path: join(OUT, "03-business-cards/Core-Business-Card-Front.pdf"),
  printBackground: true,
  width: "3.5in",
  height: "2in",
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await page.setContent(`<!doctype html><html><body style="margin:0">${files["03-business-cards/Core-Business-Card-Back.svg"].replace(/<\?xml[^>]*>/, "")}</body></html>`);
await page.pdf({
  path: join(OUT, "03-business-cards/Core-Business-Card-Back.pdf"),
  printBackground: true,
  width: "3.5in",
  height: "2in",
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();

const { buildBrandBook } = await import("./build-brand-book.mjs");
await buildBrandBook();

const zipPath = join(ROOT, "public/brand/Core-Marketing-Brand-Kit.zip");
rmSync(zipPath, { force: true });
execFileSync("python3", [
  "-c",
  `
import zipfile, os
root = ${JSON.stringify(OUT)}
out = ${JSON.stringify(zipPath)}
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for dirpath, _, files in os.walk(root):
        for f in files:
            p = os.path.join(dirpath, f)
            z.write(p, os.path.join("Core-Marketing-Brand-Kit", os.path.relpath(p, root)))
print("zip", os.path.getsize(out))
`,
]);
console.log("done");
