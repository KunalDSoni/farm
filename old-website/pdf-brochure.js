const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const p = await b.newPage();
  await p.goto('http://localhost:8766/_brochure-src.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.pdf({ path: 'mango-farm-export/assets/docs/mango-farm-export-brochure.pdf', format: 'A4', printBackground: true });
  await b.close();
  console.log('brochure PDF generated');
})();
