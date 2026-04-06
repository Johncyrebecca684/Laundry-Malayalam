import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

function formatMB(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2);
}

async function getImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => path.join(dir, e.name))
    .filter((file) => SUPPORTED.has(path.extname(file).toLowerCase()));
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const before = await fs.stat(filePath);

  const image = sharp(filePath, { failOn: 'none' }).rotate();
  const meta = await image.metadata();

  let pipeline = image;
  if ((meta.width && meta.width > MAX_WIDTH) || (meta.height && meta.height > MAX_HEIGHT)) {
    pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
      fit: 'inside',
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3
    });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      quality: 68,
      palette: true,
      effort: 10
    });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 72, effort: 6 });
  }

  const optimized = await pipeline.toBuffer();

  // Keep original if optimization does not improve size.
  if (optimized.length >= before.size) {
    return {
      file: path.basename(filePath),
      before: before.size,
      after: before.size,
      saved: 0,
      keptOriginal: true
    };
  }

  await fs.writeFile(filePath, optimized);

  return {
    file: path.basename(filePath),
    before: before.size,
    after: optimized.length,
    saved: before.size - optimized.length,
    keptOriginal: false
  };
}

async function main() {
  const files = await getImageFiles(IMAGES_DIR);
  if (!files.length) {
    console.log('No images found to optimize.');
    return;
  }

  const results = [];
  for (const file of files) {
    try {
      const result = await optimizeFile(file);
      results.push(result);
    } catch (error) {
      results.push({
        file: path.basename(file),
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  const ok = results.filter((r) => !r.error);
  const failed = results.filter((r) => r.error);
  const totalBefore = ok.reduce((sum, r) => sum + r.before, 0);
  const totalAfter = ok.reduce((sum, r) => sum + r.after, 0);
  const totalSaved = totalBefore - totalAfter;

  console.log(`Optimized ${ok.length} image(s).`);
  console.log(`Total before: ${formatMB(totalBefore)} MB`);
  console.log(`Total after : ${formatMB(totalAfter)} MB`);
  console.log(`Saved       : ${formatMB(totalSaved)} MB (${((totalSaved / totalBefore) * 100).toFixed(1)}%)`);

  const biggestSaves = ok
    .slice()
    .sort((a, b) => b.saved - a.saved)
    .slice(0, 8)
    .map((r) => `${r.file}: ${formatMB(r.saved)} MB saved${r.keptOriginal ? ' (kept original)' : ''}`);

  if (biggestSaves.length) {
    console.log('\nTop savings:');
    for (const line of biggestSaves) {
      console.log(`- ${line}`);
    }
  }

  if (failed.length) {
    console.log('\nFailed files:');
    for (const item of failed) {
      console.log(`- ${item.file}: ${item.error}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
