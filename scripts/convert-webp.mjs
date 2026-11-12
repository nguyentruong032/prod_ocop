import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const TARGET_DIRS = [
  'apps/web-shell/public',
  'apps/ocop-stories/public',
  'apps/tourism-destinations/public',
  'apps/news-events/public',
  'apps/products/public',
  'images',
  'public',
];

const ROOT_FILES = [
  'logo.png',
  'anh_phong_canh.png',
];

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

function findImagesInDir(dirPath) {
  const results = [];
  if (!fs.existsSync(dirPath)) return results;

  function traverse(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        // Skip node_modules or .next if encountered
        if (entry.name !== 'node_modules' && entry.name !== '.next') {
          traverse(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (IMAGE_EXTENSIONS.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  }

  traverse(dirPath);
  return results;
}

async function convertImage(srcPath) {
  const ext = path.extname(srcPath);
  const destPath = srcPath.slice(0, -ext.length) + '.webp';

  const originalStats = fs.statSync(srcPath);
  const originalSize = originalStats.size;

  await sharp(srcPath)
    .webp({ quality: 82 })
    .toFile(destPath);

  const webpStats = fs.statSync(destPath);
  const webpSize = webpStats.size;

  const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

  return {
    srcPath,
    originalSize,
    destPath,
    webpSize,
    savedPercent,
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  console.log('=== CONVERTING IMAGES TO WEBP (Quality: 82) ===\n');

  const allFiles = new Set();

  for (const dir of TARGET_DIRS) {
    const files = findImagesInDir(dir);
    for (const f of files) allFiles.add(f);
  }

  for (const f of ROOT_FILES) {
    if (fs.existsSync(f)) {
      allFiles.add(f);
    }
  }

  const fileList = Array.from(allFiles).sort();
  if (fileList.length === 0) {
    console.log('No images found to convert.');
    return;
  }

  const results = [];
  for (const file of fileList) {
    try {
      const res = await convertImage(file);
      results.push(res);
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
    }
  }

  console.log('| STT | Đường dẫn file gốc | Dung lượng gốc | Đường dẫn file .webp | Dung lượng .webp | Tỷ lệ giảm |');
  console.log('| :---: | :--- | :---: | :--- | :---: | :---: |');

  let totalOriginal = 0;
  let totalWebp = 0;

  results.forEach((r, idx) => {
    totalOriginal += r.originalSize;
    totalWebp += r.webpSize;
    console.log(`| ${idx + 1} | \`${r.srcPath}\` | ${formatBytes(r.originalSize)} | \`${r.destPath}\` | ${formatBytes(r.webpSize)} | -${r.savedPercent}% |`);
  });

  const totalSavedPercent = ((totalOriginal - totalWebp) / totalOriginal * 100).toFixed(1);
  console.log(`| **TỔNG** | **${results.length} file** | **${formatBytes(totalOriginal)}** | **${results.length} file WebP** | **${formatBytes(totalWebp)}** | **-${totalSavedPercent}%** |`);
}

main().catch(err => {
  console.error('Fatal error in convert-webp.mjs:', err);
  process.exit(1);
});
