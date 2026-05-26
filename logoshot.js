const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const p = await (await b.newContext({ deviceScaleFactor: 2 })).newPage();
  await p.goto('http://localhost:8765/_logo-render.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(900);
  const el = await p.$('#badge');
  await el.screenshot({ path: 'mango-farm/assets/images/mf-logo-badge.png', omitBackground: true });
  console.log('logo badge saved');
  await b.close();
})();
