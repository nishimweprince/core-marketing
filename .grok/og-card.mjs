import { chromium } from "playwright";

const html = "file:///workspace/.grok/og-card.html";
const out = "/workspace/.grok/og-card.png";

const browser = await chromium.launch({
  args: ["--disable-web-security", "--allow-file-access-from-files"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto(html, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all([...document.fonts].map((f) => f.load()));
});
await page.waitForTimeout(800);
const fontCheck = await page.evaluate(() => {
  const loaded = [...document.fonts].map((f) => ({
    family: f.family,
    status: f.status,
    weight: f.weight,
    style: f.style,
  }));
  const core = getComputedStyle(document.querySelector(".core"));
  const mkt = getComputedStyle(document.querySelector(".marketing"));
  const tag = getComputedStyle(document.querySelector(".tag"));
  return {
    loaded,
    core: { family: core.fontFamily, weight: core.fontWeight, size: core.fontSize },
    mkt: { family: mkt.fontFamily, weight: mkt.fontWeight, size: mkt.fontSize },
    tag: { family: tag.fontFamily, style: tag.fontStyle, size: tag.fontSize },
  };
});
console.log(JSON.stringify(fontCheck, null, 2));
await page.screenshot({ path: out, type: "png", omitBackground: false });
await browser.close();
console.log("wrote", out);
