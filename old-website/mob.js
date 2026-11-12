const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({channel:'chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844},isMobile:true,deviceScaleFactor:2})).newPage();
await p.goto('http://localhost:8766/index.html',{waitUntil:'networkidle'});await p.waitForTimeout(500);
await p.click('.menu-toggle');await p.waitForTimeout(500);
await p.screenshot({path:'export-shots/c/m_menu.png'});
console.log('menu open:', await p.$eval('.nav',e=>e.classList.contains('open')));
await b.close();})();
