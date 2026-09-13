/**
 * One-time image optimizer for public/images.
 *
 * Source photos are straight off a camera (up to 7808px wide, ~13MB each) but are
 * displayed at a few hundred pixels. This resizes each file in place to a sane
 * master size chosen by how the image is actually used on the site.
 *
 * Run with:  node scripts/optimize-images.mjs --dry
 *            node scripts/optimize-images.mjs --apply
 */

import sharp from "sharp";
import { readdir, stat, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES = path.join(ROOT, "public", "images");

const APPLY = process.argv.includes("--apply");

// Subteam graphics on the team page: rendered at most ~448px wide, currently
// 1.5MB PNGs. These are the only files whose extension changes (-> .webp), so
// the five paths in the `boxes` array in src/app/team/page.js change with them.
const SUBTEAM_PNGS = new Set([
  "team/auto.png",
  "team/bizops.png",
  "team/electrical.png",
  "team/emb.png",
  "team/mech.png",
]);

const SKIP = new Set([
  "ourcars/car_running.mp4",
  "sponsors/altair.jpg",
  "sponsors/altium.jpg",
  "sponsors/logo-700x400-Altium.png",
  "sponsors/siemens-logo.png",
]);

/** Returns { width, format, quality } for a repo-relative path under public/images. */
function ruleFor(rel) {
  if (SUBTEAM_PNGS.has(rel)) return { width: 900, format: "webp", quality: 82 };
  if (rel === "evlogo.png") return { width: 180, format: "png" };
  if (rel === "about/shelleco.png") return { width: 1024, format: "jpeg", quality: 82 };
  if (rel === "contacts/classiccarcropped.jpg") return { width: 2560, format: "jpeg", quality: 80 };

  const ext = path.extname(rel).toLowerCase();
  const keep = ext === ".png" ? "png" : "jpeg";

  // Headshots: rendered in a 256px circle at most.
  if (rel.startsWith("team/")) return { width: 512, format: keep, quality: 82 };
  // Cars timeline: rendered at 600x450.
  if (rel.startsWith("ourcars/")) return { width: 1200, format: keep, quality: 80 };
  // Everything else is a full-width banner or content photo.
  return { width: 2048, format: keep, quality: 80 };
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const fmt = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

async function main() {
  const files = (await walk(IMAGES)).sort();
  const rows = [];
  let before = 0;
  let after = 0;

  for (const file of files) {
    const rel = path.relative(IMAGES, file).split(path.sep).join("/");
    const ext = path.extname(rel).toLowerCase();

    if (SKIP.has(rel) || ext === ".svg" || ext === ".mp4") continue;

    const sizeBefore = (await stat(file)).size;
    const rule = ruleFor(rel);

    // .rotate() with no argument applies the EXIF orientation before we drop
    // metadata, so phone photos don't come out sideways.
    let pipeline = sharp(file)
      .rotate()
      .resize({ width: rule.width, withoutEnlargement: true });

    if (rule.format === "webp") pipeline = pipeline.webp({ quality: rule.quality });
    else if (rule.format === "png") pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    else pipeline = pipeline.jpeg({ quality: rule.quality, mozjpeg: true });

    const buf = await pipeline.toBuffer();
    const { width, height } = await sharp(buf).metadata();

    // Extension only changes when the format changes (subteam PNGs, shelleco).
    // .jpeg/.JPG already are the jpeg format, so they keep their spelling and no
    // src path in the app has to move.
    const alreadyCorrect =
      rule.format === "jpeg" ? ext === ".jpg" || ext === ".jpeg" : ext === `.${rule.format}`;
    const newExt = rule.format === "jpeg" ? ".jpg" : `.${rule.format}`;
    const destRel = alreadyCorrect ? rel : rel.slice(0, -ext.length) + newExt;
    const dest = path.join(IMAGES, destRel);

    // A few already-small files re-encode larger than the original. Leave those alone.
    if (destRel === rel && buf.length >= sizeBefore) {
      before += sizeBefore;
      after += sizeBefore;
      continue;
    }

    before += sizeBefore;
    after += buf.length;
    rows.push({ rel, destRel, sizeBefore, sizeAfter: buf.length, width, height });

    if (APPLY) {
      // Write to a temp file first so a crash can't leave a half-written image
      // where the original used to be.
      const tmp = `${dest}.tmp`;
      await writeFile(tmp, buf);
      if (dest !== file) await unlink(file);
      await rename(tmp, dest);
    }
  }

  rows.sort((a, b) => b.sizeBefore - a.sizeBefore);
  console.log(APPLY ? "APPLIED\n" : "DRY RUN (pass --apply to write)\n");
  for (const r of rows) {
    const pct = Math.round((1 - r.sizeAfter / r.sizeBefore) * 100);
    const renamed = r.destRel !== r.rel ? `  ->  ${r.destRel}` : "";
    console.log(
      `${fmt(r.sizeBefore).padStart(9)} -> ${fmt(r.sizeAfter).padStart(9)}  ${String(pct).padStart(3)}%  ` +
        `${String(r.width) + "x" + r.height}`.padEnd(12) +
        `  ${r.rel}${renamed}`
    );
  }
  console.log(`\n${rows.length} files: ${fmt(before)} -> ${fmt(after)} (${Math.round((1 - after / before) * 100)}% smaller)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
