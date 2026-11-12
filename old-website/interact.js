const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ channel: 'chrome' });
  const errs = [];
  // FAQ interactions (desktop)
  let ctx = await b.newContext({ viewport: { width: 1200, height: 900 } });
  let p = await ctx.newPage();
  p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
  await p.goto('http://localhost:8765/faq.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(600);
  await p.click('.faq-q');                       // open first question
  await p.waitForTimeout(500);
  const open = await p.$eval('.faq-item', el => el.classList.contains('open'));
  const ansH = await p.$eval('.faq-a', el => el.style.maxHeight);
  await p.screenshot({ path: 'build-shots/_faq-open.png' });
  await p.click('.faq-tab[data-tab="additional"]'); // switch tab
  await p.waitForTimeout(400);
  const addlActive = await p.$eval('#additional', el => el.classList.contains('active'));
  console.log('FAQ accordion open:', open, '| answer maxHeight:', ansH, '| Additional tab active:', addlActive);

  // Form submit (home)
  await p.goto('http://localhost:8765/index.html', { waitUntil: 'networkidle' });
  await p.fill('#em', 'buyer@example.com');
  await p.click('.btn-send');
  await p.waitForTimeout(400);
  const thanks = await p.$eval('.form__thanks', el => getComputedStyle(el).display !== 'none');
  console.log('Form thanks shown:', thanks);
  await ctx.close();

  // Mobile menu
  ctx = await b.newContext({ viewport: { width: 390, height: 800 }, isMobile: true });
  p = await ctx.newPage();
  await p.goto('http://localhost:8765/index.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(500);
  await p.screenshot({ path: 'build-shots/_mobile-closed.png' });
  await p.click('.burger');
  await p.waitForTimeout(500);
  const navOpen = await p.$eval('.nav', el => el.classList.contains('open'));
  await p.screenshot({ path: 'build-shots/_mobile-open.png' });
  console.log('Mobile nav open:', navOpen);
  await ctx.close();

  if (errs.length) console.log('ERRORS:', errs.join('; ')); else console.log('no page errors');
  await b.close();
})();
