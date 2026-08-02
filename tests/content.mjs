import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const requiredFiles = [
  "index.html",
  "th/index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "resume/Sawawee-Sareh-esor-Resume.pdf",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(dist, file)), `Missing build artifact: ${file}`);
}

const english = readFileSync(join(dist, "index.html"), "utf8");
const thai = readFileSync(join(dist, "th/index.html"), "utf8");

const englishChecks = [
  "Sawawee Sareh-esor",
  "Senior Cloud Platform &amp; Infrastructure Engineer",
  "Secure platforms. Clear delivery. Production ready.",
  "3-node",
  "Cloudflare Tunnel",
  "application/ld+json",
  'hreflang="th"',
  "+66 92-799-4723",
];

const thaiChecks = [
  'lang="th"',
  "แพลตฟอร์มปลอดภัย",
  "ผลงานที่คัดเลือก",
  "ประสบการณ์",
  'hreflang="en"',
];

for (const value of englishChecks) {
  assert.ok(english.includes(value), `English page is missing: ${value}`);
}

for (const value of thaiChecks) {
  assert.ok(thai.includes(value), `Thai page is missing: ${value}`);
}

const astroAssets = readdirSync(join(dist, "_astro"));
assert.ok(astroAssets.some((file) => file.endsWith(".avif")), "No generated AVIF image found");
assert.ok(astroAssets.some((file) => file.endsWith(".webp")), "No generated WebP image found");

console.log(`Content checks passed (${requiredFiles.length} required artifacts, EN/TH parity, AVIF/WebP).`);
