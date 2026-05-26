const { chromium } = require('playwright');
const fs = require('fs');
const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const pages = args.filter(a => !a.startsWith('--'));
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const ctx = await b.newContext(mobile
    ? { viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 2 }
    : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  const errs = [];
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  fs.mkdirSync('export-shots', { recursive: true });
  for (const pg of pages) {
    const name = pg.replace('.html','') + (mobile ? '-m' : '');
    await p.goto('http://localhost:8766/' + pg, { waitUntil: 'networkidle', timeout: 30000 });
    await p.waitForTimeout(700);
    // force-reveal so static screenshot shows final state
    await p.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in')));
    await p.waitForTimeout(300);
    await p.screenshot({ path: `export-shots/${name}.png`, fullPage: true });
    console.log('shot', name);
  }
  console.log(errs.length ? 'ERRORS:\n'+errs.join('\n') : 'no console errors');
  await b.close();
})();
