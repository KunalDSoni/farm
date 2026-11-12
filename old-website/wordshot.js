const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const p = await (await b.newContext({ deviceScaleFactor: 2 })).newPage();
  await p.goto('http://localhost:8765/_word-render.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(900);
  const el = await p.$('#w');
  await el.screenshot({ path: 'mango-farm/assets/images/mf-word.png', omitBackground: true });
  await b.close(); console.log('wordmark saved');
})();
