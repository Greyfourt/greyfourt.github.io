import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const DIRS = ['public/articles', 'public/images'];
const QUALITY = 80;

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  const files = readdirSync(dir).filter(f => /\.png$/i.test(f));

  for (const file of files) {
    const filePath = join(dir, file);
    const before = statSync(filePath).size;
    totalBefore += before;

    await sharp(filePath)
      .png({ quality: QUALITY, compressionLevel: 9, effort: 10 })
      .toBuffer()
      .then(async (buffer) => {
        // Only overwrite if smaller
        if (buffer.length < before) {
          await sharp(buffer).toFile(filePath);
          const after = statSync(filePath).size;
          totalAfter += after;
          const saved = ((1 - after / before) * 100).toFixed(1);
          console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (−${saved}%)`);
        } else {
          totalAfter += before;
          console.log(`${file}: ${(before / 1024).toFixed(0)}KB (already optimal)`);
        }
      });
  }
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (−${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
