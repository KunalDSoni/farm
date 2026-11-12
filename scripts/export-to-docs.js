// Copies the static Next.js build (out/) into docs/, which GitHub Pages serves.
// Keeps the custom domain (CNAME) and disables Jekyll processing.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'out');
const docs = path.join(root, 'docs');

if (!fs.existsSync(out)) throw new Error('out/ not found — run `next build` first');

fs.rmSync(docs, { recursive: true, force: true });
fs.cpSync(out, docs, { recursive: true });
fs.writeFileSync(path.join(docs, 'CNAME'), 'modernharvest.in\n');
fs.writeFileSync(path.join(docs, '.nojekyll'), '');
console.log('Exported site to docs/');
