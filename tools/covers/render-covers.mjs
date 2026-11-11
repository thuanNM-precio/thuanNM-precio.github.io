// Renders every cover from one HTML template with the locally installed Chrome.
// Usage: npm run covers   (writes covers/upwork-*.png and public/og/*.png)
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright-core";
import { COVERS } from "./covers.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const template = pathToFileURL(join(here, "template.html")).href;
const outCovers = join(root, "covers");
const outOg = join(root, "public", "og");
mkdirSync(outCovers, { recursive: true });
mkdirSync(outOg, { recursive: true });

const SIZES = {
  upwork: { width: 1000, height: 750, dir: outCovers, name: (s) => `upwork-${s}.png` },
  og: { width: 1200, height: 630, dir: outOg, name: (s) => `${s}.png` },
};

const browser = await chromium.launch({ channel: "chrome" });
try {
  for (const cover of COVERS) {
    for (const kind of Object.keys(SIZES)) {
      if (!cover[kind]) continue;
      const size = SIZES[kind];
      const page = await browser.newPage({ viewport: { width: size.width, height: size.height } });
      await page.addInitScript((data) => {
        window.COVER = data;
      }, cover);
      await page.goto(template);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(() => [...document.images].every((img) => img.complete));
      const file = join(size.dir, size.name(cover.slug));
      await page.screenshot({ path: file });
      await page.close();
      console.log(`${kind.padEnd(6)} ${size.width}x${size.height}  ${file}`);
    }
  }
} finally {
  await browser.close();
}
