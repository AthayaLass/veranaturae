const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'images');
const DEST = path.join(ROOT, 'images', 'vero_new_design', 'web');

const JOBS = [
  { src: 'mindfulness01.jpg', dest: 'mindfulness01.jpg' },
  { src: 'plants_02.jpeg', dest: 'plants-02.jpg' },
  { src: 'fish02.JPG', dest: 'fish02.jpg' },
  { src: 'fafa04.jpg', dest: 'fafa04.jpg' },
  { src: 'Veronica_ayurv-massage.jpg', dest: 'ayurv-massage.jpg' },
  { src: 'food_01.jpg', dest: 'food-01.jpg' },
  { src: 'Veronica_yoga-private.jpg', dest: 'yoga-private.jpg' },
  { src: 'Veronica_about.jpg', dest: 'about-veronica.jpg' },
  { src: 'yoga_room.jpg', dest: 'yoga-room.jpg' },
];

const MAX = 1400;

async function convert(job) {
  const input = path.join(SRC, job.src);
  const output = path.join(DEST, job.dest);
  const before = fs.statSync(input).size;
  const meta = await sharp(input).metadata();
  await sharp(input)
    .rotate()
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(output);
  const after = fs.statSync(output).size;
  const outMeta = await sharp(output).metadata();
  console.log(
    `${job.src} ${meta.width}x${meta.height} ${Math.round(before / 1024)}KB -> ` +
      `${job.dest} ${outMeta.width}x${outMeta.height} ${Math.round(after / 1024)}KB`
  );
  return { before, after };
}

(async () => {
  fs.mkdirSync(DEST, { recursive: true });
  let before = 0;
  let after = 0;
  for (const job of JOBS) {
    const r = await convert(job);
    before += r.before;
    after += r.after;
  }
  console.log(
    `TOTAL ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB ` +
      `(saved ${Math.round((1 - after / before) * 100)}%)`
  );
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
