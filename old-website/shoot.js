const { chromium } = require('playwright');
const fs = require('fs');
const pages = process.argv.slice(2);
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errs = [];
  page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  page.on('pageerror', e => errs.push('PAGEERR: ' + e.message));
  fs.mkdirSync('build-shots', { recursive: true });
  for (const p of pages) {
    const name = p.replace('.html', '');
    await page.goto('http://localhost:8765/' + p, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(800);
    await page.evaluate(async () => { await new Promise(r => { let y=0; const t=setInterval(()=>{window.scrollBy(0,800);y+=800; if(y>=document.body.scrollHeight){clearInterval(t);r();}},60);}); });
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: `build-shots/${name}.png`, fullPage: true });
    console.log('shot', name);
  }
  if (errs.length) console.log('CONSOLE ERRORS:\n' + errs.join('\n')); else console.log('no console errors');
  await browser.close();
})();
