import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';

const DIRS = ['public/articles', 'public/images'];
const QUALITY = 80;

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  const files = readdirSync(dir).filter(f => /\.png$/i.test(f));

  for (const file of files) {
    const filePath = join(dir, file);
    const webpPath = filePath.replace(/\.png$/i, '.webp');
    const before = statSync(filePath).size;
    totalBefore += before;

    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const after = statSync(webpPath).size;
    totalAfter += after;
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`${file} → ${file.replace(/\.png$/i, '.webp')}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (−${saved}%)`);

    // Remove original PNG
    unlinkSync(filePath);
  }
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (−${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
