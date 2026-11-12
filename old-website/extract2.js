const { chromium } = require('playwright');
const fs = require('fs');

const PAGES = {
  'about-us': 'https://www.thebackyardgroup.com/about-us',
  'about-3': 'https://www.thebackyardgroup.com/about-3',
  'kesar-mango': 'https://www.thebackyardgroup.com/kesar-mango',
  'mango-pulp': 'https://www.thebackyardgroup.com/copy-of-mango-pulp',
  'gallery': 'https://www.thebackyardgroup.com/gallery',
  'projects': 'https://www.thebackyardgroup.com/s-projects-side-by-side',
};

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  fs.mkdirSync('original/shots', { recursive: true });

  for (const [name, url] of Object.entries(PAGES)) {
    try {
      console.log('Loading', name);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(6000);
      await page.evaluate(async () => {
        await new Promise(res => {
          let y = 0; const step = 600;
          const t = setInterval(() => { window.scrollBy(0, step); y += step;
            if (y >= document.body.scrollHeight) { clearInterval(t); res(); } }, 120);
        });
      });
      await page.waitForTimeout(2000);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);
      await page.screenshot({ path: `original/shots/${name}.png`, fullPage: true });

      const data = await page.evaluate(() => {
        const imgs = [];
        document.querySelectorAll('img').forEach(im => {
          if (im.src && im.naturalWidth > 30) imgs.push({ src: im.src, alt: im.alt, w: im.naturalWidth, h: im.naturalHeight });
        });
        const colorCount = {}, bgCount = {}, fontCount = {};
        document.querySelectorAll('*').forEach(el => {
          const s = getComputedStyle(el);
          colorCount[s.color] = (colorCount[s.color]||0)+1;
          if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') bgCount[s.backgroundColor] = (bgCount[s.backgroundColor]||0)+1;
          fontCount[s.fontFamily] = (fontCount[s.fontFamily]||0)+1;
        });
        const top = o => Object.entries(o).sort((a,b)=>b[1]-a[1]).slice(0,12);
        return { title: document.title, imgs, colors: top(colorCount), bgs: top(bgCount), fonts: top(fontCount), bodyText: document.body.innerText };
      });
      fs.writeFileSync(`original/${name}.json`, JSON.stringify(data, null, 2));
      fs.writeFileSync(`original/${name}.txt`, data.bodyText);
      console.log('  done', name, '- imgs:', data.imgs.length);
    } catch (e) {
      console.log('  ERROR', name, e.message);
    }
  }
  await browser.close();
  console.log('ALL DONE');
})();
