/* Static page generator for the MODERN HARVEST export site.
   Shares header/footer/floats so every page is consistent. */
const fs = require('fs');
const OUT = 'docs';

const NAV = [
  ['products', 'Products'],
  ['certifications', 'Certifications'],
  ['export-process', 'Export Process'],
  ['packaging', 'Packaging'],
  ['global-markets', 'Global Markets'],
  ['about', 'About'],
  ['contact', 'Contact'],
];

const WA = 'https://wa.me/919213022464';

const waIconHeader = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.45L.06 24zM6.6 20.1l.37.22a9.9 9.9 0 1 0-3.4-3.42l.24.38-1 3.66 3.8-.84z"/><path d="M9.5 7.3c-.2-.46-.42-.47-.62-.48h-.53c-.18 0-.48.07-.73.35s-.96.94-.96 2.3.98 2.66 1.12 2.85c.14.18 1.92 3.07 4.74 4.18 2.34.92 2.82.74 3.33.7.5-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32s-1.64-.81-1.9-.9c-.25-.1-.43-.14-.62.14s-.71.9-.87 1.08c-.16.18-.32.2-.6.07s-1.18-.44-2.25-1.4c-.83-.74-1.4-1.65-1.56-1.93s-.02-.43.12-.57c.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49S9.7 7.76 9.5 7.3z"/></svg>`;

function header(active) {
  const links = NAV.map(([href, label]) =>
    `<a href="${href}"${href === active ? ' class="active"' : ''}>${label}</a>`).join('\n      ');
  return `<header class="site-header" id="header">
  <div class="header-inner">
    <a class="brand" href="./" aria-label="MODERN HARVEST home">
      <span class="brand__mark"><img src="assets/images/mark-green.png" alt=""></span>
      <span class="brand__name">MODERN HARVEST</span>
    </a>
    <nav class="nav" aria-label="Primary">
      ${links}
    </nav>
    <div class="header-cta">
      <a class="btn btn--outline" href="${WA}" target="_blank" rel="noopener" aria-label="WhatsApp" style="padding:.7rem .9rem">${waIconHeader}</a>
      <a class="btn btn--gold" href="bulk-inquiry">Bulk Inquiry</a>
    </div>
    <button class="menu-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</header>`;
}

const FOOTER = `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="./"><span class="brand__mark"><img src="assets/images/mark-green.png" alt=""></span><span class="brand__name">MODERN HARVEST</span></a>
        <p>Premium exporter of GI-tagged Gir Kesar mangoes, aseptic pulp and freeze-dried powder. Modern orchards in Talala, Gir since 2026.</p>
      </div>
      <div><h4>Company</h4><a href="about">About Us</a><a href="certifications">Certifications</a><a href="global-markets">Global Markets</a><a href="contact">Contact</a></div>
      <div><h4>Export</h4><a href="products">Products</a><a href="export-process">Export Process</a><a href="packaging">Packaging</a><a href="bulk-inquiry">Bulk Inquiry</a></div>
      <div><h4>Get in touch</h4><a href="mailto:exports@mangofarm.com">exports@mangofarm.com</a><a href="tel:+919213022464">+91 92130 22464</a><a href="${WA}" target="_blank" rel="noopener">WhatsApp Sales</a><p style="font-size:.86rem;margin-top:.6rem">Talala, Gir, Dist: Junagadh,<br>Gujarat 362150, India</p></div>
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> MODERN HARVEST. All rights reserved.</span>
      <span>Marketed &amp; manufactured by Modern Milk · APEDA Registered · FSSAI Compliant · GI-Tagged Gir Kesar</span>
    </div>
  </div>
</footer>`;

const FLOATS = `<div class="floats">
  <a class="float-btn float-wa" href="${WA}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" fill="#fff"><path d="M.06 24l1.7-6.2A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.45L.06 24zM6.6 20.1l.37.22a9.9 9.9 0 1 0-3.4-3.42l.24.38-1 3.66 3.8-.84z"/><path d="M9.5 7.3c-.2-.46-.42-.47-.62-.48h-.53c-.18 0-.48.07-.73.35s-.96.94-.96 2.3.98 2.66 1.12 2.85c.14.18 1.92 3.07 4.74 4.18 2.34.92 2.82.74 3.33.7.5-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32s-1.64-.81-1.9-.9c-.25-.1-.43-.14-.62.14s-.71.9-.87 1.08c-.16.18-.32.2-.6.07s-1.18-.44-2.25-1.4c-.83-.74-1.4-1.65-1.56-1.93s-.02-.43.12-.57c.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49S9.7 7.76 9.5 7.3z"/></svg></a>
  <button class="float-btn float-top" aria-label="Back to top" onclick="window.scrollTo({top:0,behavior:'smooth'})"><svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>
</div>`;

function pageHero(title, lead, img, crumbs) {
  return `<section class="page-hero">
    <div class="page-hero__bg"><img src="assets/images/${img}" alt=""></div>
    <div class="container">
      <nav class="breadcrumb"><a href="./">Home</a> / ${crumbs}</nav>
      <h1>${title}</h1>
      <p class="lead">${lead}</p>
    </div>
  </section>`;
}

function shell({ title, desc, active, schema = '', body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>document.documentElement.className+=' js'</script>
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="assets/images/hero-banner.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="assets/images/mark-green.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  ${schema}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(active)}
<main id="main">
${body}
</main>
${FOOTER}
${FLOATS}
<script src="assets/js/main.js"></script>
</body>
</html>`;
}

/* ---------- shared form snippets ---------- */
const exportInquiryForm = (id) => `<form class="form" data-form id="${id}">
  <div class="form-row">
    <div class="field"><label for="${id}-n">Full name *</label><input id="${id}-n" required></div>
    <div class="field"><label for="${id}-c">Company *</label><input id="${id}-c" required></div>
  </div>
  <div class="form-row">
    <div class="field"><label for="${id}-e">Work email *</label><input id="${id}-e" type="email" required></div>
    <div class="field"><label for="${id}-p">Phone / WhatsApp</label><input id="${id}-p" type="tel"></div>
  </div>
  <div class="form-row">
    <div class="field"><label for="${id}-co">Destination country *</label><input id="${id}-co" required></div>
    <div class="field"><label for="${id}-ci">Destination city</label><input id="${id}-ci" placeholder="e.g. Dubai, London"></div>
  </div>
  <div class="form-row">
    <div class="field"><label for="${id}-pr">Product of interest</label>
      <select id="${id}-pr"><option>Fresh Gir Kesar</option><option>Fresh Alphonso</option><option>Other fresh varieties</option><option>Aseptic mango pulp</option><option>Mango powder</option><option>Multiple / not sure</option></select></div>
    <div class="field"><label for="${id}-q">Estimated quantity</label><input id="${id}-q" placeholder="e.g. 2 x 40ft reefer / 5 MT"></div>
  </div>
  <div class="field"><label for="${id}-i">Preferred incoterm</label>
    <select id="${id}-i"><option>FOB</option><option>CIF</option><option>CFR</option><option>Not sure</option></select></div>
  <div class="field"><label for="${id}-m">Message</label><textarea id="${id}-m" placeholder="Tell us about your market, packaging needs and timelines."></textarea></div>
  <button class="btn btn--gold btn--lg" type="submit" style="width:100%">Send export inquiry</button>
  <p class="form__note">We reply within one business day. Your details are used only to respond to your inquiry.</p>
  <div class="form__ok">Thank you — your inquiry has been received. Our export team will contact you within one business day.</div>
</form>`;

/* =========================================================
   PAGE CONTENT
   ========================================================= */
const pages = {};

/* ---------- ABOUT ---------- */
pages['about.html'] = {
  title: 'About MODERN HARVEST | Modern Mango Orchards in Talala, Gir Since 2026',
  desc: 'MODERN HARVEST is a modern Gir Kesar mango grower and exporter founded in 2026 in Talala, Gir — supplying GI-tagged fruit, pulp and powder to 10+ countries with full APEDA compliance.',
  active: 'about',
  body: `${pageHero('A modern orchard, built as a global export house', 'Modern Gir Kesar orchards in Talala — combined with full compliance, packaging and logistics for international buyers.', 'about-banner.jpg', 'About')}
  <section class="section section--cream">
    <div class="container split">
      <div class="split__media" data-reveal><img src="assets/images/gallery-05.jpg" alt="MODERN HARVEST orchards in Gir"></div>
      <div data-reveal data-delay="1">
        <p class="eyebrow">Who we are</p>
        <h2 class="h2">Rooted in Talala, Gir. Built for export.</h2>
        <p>MODERN HARVEST is a modern mango orchard and export house established in 2026 in Talala, in the heart of Gir — the region globally recognised for the Kesar mango and its Geographical Indication (GI) tag. We were built from day one as a structured, compliance-first export operation.</p>
        <p>We grow and source exclusively from the Gir belt, then grade, process, pack and ship to importers, distributors, retail chains and food manufacturers worldwide — with documentation and quality control at every step.</p>
      </div>
    </div>
  </section>
  <section class="section section--green">
    <div class="container">
      <div class="stats">
        <div class="stat"><b data-count="250" data-suffix="+">0</b><span>Acres Under Orchard</span></div>
        <div class="stat"><b data-count="10" data-suffix="+">0</b><span>Export Markets</span></div>
        <div class="stat"><b data-count="1200" data-suffix="+">0</b><span>MT Annual Capacity</span></div>
        <div class="stat"><b data-count="4">0</b><span>GI Varieties</span></div>
      </div>
    </div>
  </section>
  <section class="section section--cream">
    <div class="container">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center">What we stand for</p><h2 class="h2">Our operating principles</h2></div>
      <div class="grid grid-3">
        <div class="feature-card" data-reveal><h3>Quality first</h3><p>Every lot is graded to export standard and held to consistent specifications, season after season.</p></div>
        <div class="feature-card" data-reveal data-delay="1"><h3>Compliance &amp; traceability</h3><p>APEDA-registered, FSSAI-compliant, with lot-level traceability and complete export documentation.</p></div>
        <div class="feature-card" data-reveal data-delay="2"><h3>Reliability at scale</h3><p>Season-long volume, dependable logistics and a single accountable team from inquiry to delivery.</p></div>
      </div>
    </div>
  </section>
  <section class="section section--cream">
    <div class="container">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center">Our varieties</p><h2 class="h2">The stories behind our mangoes</h2></div>
      <div class="grid grid-3">
        <div class="feature-card" data-reveal><h3>Gir Kesar — Talala, Gir</h3><p>Grown in the GI-recognised Talala belt of Gir, our flagship Kesar is saffron-coloured, intensely aromatic and fibre-free — the benchmark for premium Indian mangoes and the heart of everything we ship.</p></div>
        <div class="feature-card" data-reveal data-delay="1"><h3>Alphonso — the King of Mangoes</h3><p>Sourced through vetted partner orchards, Alphonso brings its rich, creamy texture and signature fragrance — a globally sought-after GI variety we offer alongside our Kesar for buyers wanting India's finest.</p></div>
        <div class="feature-card" data-reveal data-delay="2"><h3>Other GI-tagged varieties</h3><p>Beyond Kesar and Alphonso, we supply select GI specialties — Dashehari, Bhagalpuri Zardalu and Laxman Bhog — each tied to its own region and protected origin, graded to the same export standard.</p></div>
      </div>
    </div>
  </section>
  <section class="section section--cream2">
    <div class="container narrow">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center">Our journey</p><h2 class="h2">From orchard to global markets</h2></div>
      <div data-reveal>
        ${[['2026','Modern mango orchards established in Talala, Gir.'],['Sourcing','Grower partnerships built across the Gir belt for Kesar and select GI varieties.'],['Export-ready','APEDA registration and first international export shipments.'],['Processed range','Aseptic pulp and freeze-dried powder added to the export range.'],['Today','Supplying GI-tagged Kesar, pulp and powder to 10+ countries.']].map(([y,t])=>`<div style="display:grid;grid-template-columns:160px 1fr;gap:1.4rem;padding:1.2rem 0;border-bottom:1px solid var(--line)"><b style="font-family:var(--display);font-size:1.4rem;color:var(--green-800)">${y}</b><p style="margin:0;color:var(--muted)">${t}</p></div>`).join('')}
      </div>
      <div class="center mt-3" data-reveal><a class="btn btn--gold" href="bulk-inquiry">Partner with us</a></div>
    </div>
  </section>
  <section class="section section--green">
    <div class="container">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center" style="color:var(--gold)">In India</p><h2 class="h2" style="color:#fff">Our domestic presence</h2><p class="lead" style="color:rgba(255,255,255,.8)">Beyond exports, we serve the Indian market through our corporate base in Ahmedabad and distribution into major metro cities.</p></div>
      <div class="grid grid-3">
        <div data-reveal><h3 style="color:#fff">Ahmedabad</h3><p style="color:rgba(255,255,255,.78)">Corporate office and domestic sales hub, coordinating supply across Gujarat and beyond.</p></div>
        <div data-reveal data-delay="1"><h3 style="color:#fff">Mumbai</h3><p style="color:rgba(255,255,255,.78)">Metro distribution for fresh fruit, pulp and powder to retailers, HoReCa and processors.</p></div>
        <div data-reveal data-delay="2"><h3 style="color:#fff">Metro cities</h3><p style="color:rgba(255,255,255,.78)">Growing presence across India's major metros, including modern retail and e-commerce channels.</p></div>
      </div>
    </div>
  </section>`
};

/* ---------- PRODUCTS ---------- */
const productBlock = (img, tag, name, desc, specs, reverse) => `<div class="split${reverse?' split--reverse':''}" style="margin-bottom:3.5rem">
    <div class="split__media" data-reveal><img src="assets/images/${img}" alt="${name}"></div>
    <div data-reveal data-delay="1">
      <span class="variety-card__body" style="padding:0"><span style="display:inline-block;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;background:var(--gold-100);color:var(--green-800);padding:.3rem .7rem;border-radius:var(--r-pill);font-weight:700;margin-bottom:.8rem">${tag}</span></span>
      <h2 class="h2">${name}</h2>
      <p>${desc}</p>
      <ul style="list-style:none;padding:0;margin:1rem 0 1.4rem">${specs.map(s=>`<li style="display:flex;gap:.6rem;padding:.4rem 0;border-bottom:1px solid var(--line)"><span class="text-gold">✓</span> ${s}</li>`).join('')}</ul>
      <a class="btn btn--outline" href="bulk-inquiry">Request a quote</a>
    </div>
  </div>`;
pages['products.html'] = {
  title: 'Products | Gir Kesar Mangoes, Mango Pulp & Powder for Export',
  desc: 'Export-grade Gir Kesar and Alphonso mangoes, aseptic mango pulp and freeze-dried mango powder — graded, certified and packed to your market specifications.',
  active: 'products',
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"ItemList","itemListElement":[{"@type":"Product","name":"Gir Kesar Mango","description":"GI-tagged export-grade Kesar mango from Gir, Gujarat."},{"@type":"Product","name":"Aseptic Mango Pulp"},{"@type":"Product","name":"Mango Powder"}]}</script>`,
  body: `${pageHero('Our product range', 'Premium Gir Kesar at the core — plus select GI varieties, aseptic pulp and freeze-dried powder, all export-ready.', 'home-split-mangoes.jpg', 'Products')}
  <section class="section section--cream">
    <div class="container">
      ${productBlock('kesar-1.jpg','Signature · GI Tag','Gir Kesar Mango','Our flagship — saffron-coloured, intensely aromatic and fibre-free, grown in the GI-recognised Gir region. The benchmark for premium Indian mangoes.',['Grades: A / B by count &amp; weight','Pack: ventilated 4 kg &amp; bulk cartons','Season: March – July (fresh)','Brix: 18–24°, naturally ripened, carbide-free'],false)}
      ${productBlock('variety-alphonso.jpg','GI · Maharashtra','Alphonso &amp; Other Varieties','Beyond Kesar, we supply Alphonso, Dashehari, Bhagalpuri Zardalu and Laxman Bhog through trusted grower partnerships — each a regional GI specialty.',['Alphonso, Dashehari, Zardalu, Laxman Bhog','Sourced via vetted partner orchards','Consistent grading &amp; QC','Seasonal availability — ask for schedule'],true)}
      ${productBlock('pulp-2.png','Processed','Aseptic Mango Pulp','Smooth, ripe Kesar and Totapuri pulp processed and canned to retain natural colour, flavour and nutrition — ideal for beverages, dairy, bakery and food manufacturing.',['Kesar &amp; Totapuri varieties','Aseptic cans &amp; drums (food-processing grade)','Available year-round','Private-label &amp; bulk options'],false)}
      ${productBlock('powder-1.png','Processed','Freeze-Dried Mango Powder','100% natural freeze-dried Kesar powder — non-GMO, additive-free and shelf-stable, for smoothies, confectionery, bakery and nutraceuticals.',['100% Kesar, no additives or preservatives','Resealable barrier pouches &amp; bulk','Shelf-stable, year-round supply','Custom &amp; private-label packing'],true)}
    </div>
  </section>
  <section class="section section--green">
    <div class="container narrow center" data-reveal>
      <h2 class="h2">Need specifications?</h2>
      <p class="lead">Share your market and volume — we'll send grade sheets, packing options and a certificate of analysis.</p>
      <div class="cta-band__btns" style="margin-top:1.4rem"><a class="btn btn--gold btn--lg" href="bulk-inquiry">Request specifications</a><a class="btn btn--ghost-light btn--lg" href="${WA}" target="_blank" rel="noopener">WhatsApp us</a></div>
    </div>
  </section>`
};

/* ---------- CERTIFICATIONS ---------- */
const certCard = (img, name, body) => `<div class="feature-card" data-reveal style="display:flex;gap:1.2rem;align-items:flex-start">
    <img src="assets/images/${img}" alt="${name}" style="height:54px;width:auto;flex:0 0 auto;object-fit:contain">
    <div><h3 style="font-size:1.1rem">${name}</h3><p>${body}</p></div>
  </div>`;
pages['certifications.html'] = {
  title: 'Certifications & Compliance | APEDA, FSSAI, GI-Tagged | MODERN HARVEST',
  desc: 'APEDA-registered, FSSAI-compliant and GI-tagged Gir Kesar. Full export documentation — phytosanitary certificates, certificates of analysis and residue testing.',
  active: 'certifications',
  body: `${pageHero('Certified, compliant, traceable', 'Trust is built on paperwork done right. Our farms, pack-house and shipments meet the standards international buyers require.', 'gallery-09.jpg', 'Certifications')}
  <section class="section section--cream">
    <div class="container">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center">Accreditations</p><h2 class="h2">Recognised standards &amp; registrations</h2></div>
      <div class="grid grid-2">
        ${certCard('cert-apeda-leaf.png','APEDA Registered','Registered with the Agricultural &amp; Processed Food Products Export Development Authority — the Government of India body governing agri-exports.')}
        ${certCard('cert-fssai.png','FSSAI Compliant','Compliant with the Food Safety and Standards Authority of India for safe food handling and processing.')}
        ${certCard('cert-apeda-text.png','GI-Tagged Gir Kesar','Our Kesar carries the Geographical Indication tag verifying authentic origin in the Gir region of Gujarat.')}
        ${certCard('cert-emblem.webp','IEC / DGFT','Registered with the Directorate General of Foreign Trade with a valid Importer-Exporter Code for international trade.')}
        ${certCard('cert-msme.png','MSME Registered','Recognised under the Ministry of MSME, Government of India.')}
      </div>
    </div>
  </section>
  <section class="section section--cream2">
    <div class="container split">
      <div data-reveal>
        <p class="eyebrow">Export documentation</p>
        <h2 class="h2">Every shipment, fully documented</h2>
        <p class="lead">We prepare the complete set of export documents so your consignment clears customs without surprises.</p>
      </div>
      <div data-reveal data-delay="1">
        <ul style="list-style:none;padding:0;margin:0">
          ${['Phytosanitary certificate','Certificate of Analysis (COA)','Pesticide residue test reports','Certificate of Origin','Commercial invoice &amp; packing list','Bill of Lading / Airway Bill','Fumigation certificate (as required)','Lot-level traceability records'].map(d=>`<li style="display:flex;gap:.7rem;padding:.7rem 0;border-bottom:1px solid var(--line)"><span class="text-gold">✓</span> ${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  </section>
  <section class="section section--green"><div class="container narrow center" data-reveal><h2 class="h2">Need our certificates on file?</h2><p class="lead">We'll share current certifications and a sample documentation pack for your compliance team.</p><div class="cta-band__btns" style="margin-top:1.4rem"><a class="btn btn--gold btn--lg" href="contact">Request documents</a></div></div></section>`
};

/* ---------- EXPORT PROCESS ---------- */
const stepRow = (n, title, body, img, reverse) => `<div class="split${reverse?' split--reverse':''}" style="margin-bottom:3rem;align-items:center">
    <div class="split__media" data-reveal><img src="assets/images/${img}" alt="${title}"></div>
    <div data-reveal data-delay="1"><div style="font-family:var(--display);font-size:2.4rem;color:var(--gold);line-height:1">${n}</div><h2 class="h3" style="margin:.4rem 0 .6rem">${title}</h2><p style="color:var(--muted)">${body}</p></div>
  </div>`;
pages['export-process.html'] = {
  title: 'Export Process | From Gir Orchard to Your Port | MODERN HARVEST',
  desc: 'Our end-to-end mango export process: sourcing, grading, quality control, APEDA compliance, cold-chain packaging and global logistics on FOB or CIF terms.',
  active: 'export-process',
  body: `${pageHero('From orchard block to your port', 'A controlled, documented process at every stage — engineered for quality, compliance and on-time delivery.', 'gallery-08.jpeg', 'Export Process')}
  <section class="section section--cream">
    <div class="container">
      ${stepRow('01','Sourcing &amp; grading','Fruit is hand-picked at optimal maturity from GI-tagged Gir orchards, then graded by size, weight, brix and appearance to a consistent export specification.','gallery-01.jpg',false)}
      ${stepRow('02','Quality control &amp; compliance','Residue testing, hot-water treatment and phytosanitary handling, with APEDA documentation prepared for the destination market.','gallery-13.jpg',true)}
      <!-- TODO: replace step-03 image (pulp-1.png) with a new box-packing/dispatch photo -->
      ${stepRow('03','Box packing &amp; dispatch','Pre-cooling, box packing to market specification and controlled-atmosphere storage preserve firmness and shelf life, with consignments dispatched to schedule.','pulp-1.png',false)}
      ${stepRow('04','Logistics &amp; documentation','Reefer container or air-freight loading with full export documentation — shipped on FOB or CIF terms with live status updates.','gallery-10.jpg',true)}
    </div>
  </section>
  <section class="section section--green">
    <div class="container">
      <div class="grid grid-2">
        <div data-reveal><h3 style="color:#fff">Lead times</h3><p style="color:rgba(255,255,255,.78)">Fresh fruit dispatched within days of harvest; pulp and powder available for year-round scheduling.</p></div>
        <div data-reveal data-delay="1"><h3 style="color:#fff">Payment</h3><p style="color:rgba(255,255,255,.78)">Advance &amp; balance against documents or L/C — confirmed per order and market.</p></div>
      </div>
      <div class="center mt-3" data-reveal><a class="btn btn--gold btn--lg" href="bulk-inquiry">Start an export inquiry</a></div>
    </div>
  </section>`
};

/* ---------- PACKAGING ---------- */
pages['packaging.html'] = {
  title: 'Packaging & Private Label | Export-Grade Mango Packaging | MODERN HARVEST',
  desc: 'Export-grade, food-safe mango packaging — ventilated cartons, aseptic cans and drums, barrier pouches and full private-label options for global retail and food service.',
  active: 'packaging',
  body: `${pageHero('Packaging built for global transit', 'Protective, food-safe and brand-ready — with full private-label flexibility for your market.', 'powder-2.png', 'Packaging')}
  <section class="section section--cream">
    <div class="container">
      <div class="section-head" data-reveal><p class="eyebrow">Standards</p><h2 class="h2">Specifications &amp; formats</h2></div>
      <div class="grid grid-3">
        <div class="feature-card" data-reveal><h3>Fresh fruit</h3><p>Ventilated corrugated cartons in 4 kg retail and bulk formats, with protective trays and liners for long-haul integrity.</p></div>
        <div class="feature-card" data-reveal data-delay="1"><h3>Aseptic pulp</h3><p>Food-processing-grade aseptic cans and 215 kg drums for beverage, dairy and bakery manufacturers.</p></div>
        <div class="feature-card" data-reveal data-delay="2"><h3>Mango powder</h3><p>Resealable, high-barrier pouches and bulk packs that protect aroma and shelf life.</p></div>
      </div>
      <div class="section-head mt-3" data-reveal style="margin-top:4rem"><p class="eyebrow">Harvest &amp; box formats</p><h2 class="h2">Grades and pack sizes</h2></div>
      <div class="grid grid-2">
        <div class="feature-card" data-reveal><h3>Regular harvest</h3><p>Dependable, export-grade Kesar for volume buyers — consistent grading and value-led pricing for retail and wholesale programmes.</p></div>
        <div class="feature-card" data-reveal data-delay="1"><h3>Premium harvest</h3><p>Hand-selected, top-grade fruit picked at peak maturity for premium retail, gifting and high-end food service.</p></div>
      </div>
      <div class="grid grid-4" style="margin-top:1.4rem">
        <div class="feature-card" data-reveal><h3>3 kg box</h3><p>Retail-ready carton for premium counters and direct gifting.</p></div>
        <div class="feature-card" data-reveal data-delay="1"><h3>5 kg box</h3><p>Versatile pack for retail and food service.</p></div>
        <div class="feature-card" data-reveal data-delay="2"><h3>10 kg box</h3><p>Bulk format for wholesale and distribution.</p></div>
        <div class="feature-card" data-reveal data-delay="3"><h3>Dozen boxes</h3><p>Count-based dozen packs in different packaging styles to suit each market.</p></div>
      </div>
      <div class="section-head mt-3" data-reveal style="margin-top:4rem"><p class="eyebrow">Gallery</p><h2 class="h2">Packaging gallery</h2></div>
      <div class="pack-grid" data-reveal>
        <figure class="wide tall"><img src="assets/images/pulp-2.png" alt="MODERN HARVEST branded mango pulp tin"></figure>
        <figure><img src="assets/images/powder-1.png" alt="Mango powder pouch"></figure>
        <figure><img src="assets/images/powder-2.png" alt="Mango powder pack, nutrition"></figure>
        <figure class="wide"><img src="assets/images/pulp-1.png" alt="Canned pulp export cartons"></figure>
        <figure><img src="assets/images/powder-3.png" alt="Freeze-dried mango powder"></figure>
        <figure><img src="assets/images/home-split-pulp.jpg" alt="Mango pulp"></figure>
        <figure class="wide"><img src="assets/images/pulp-center.png" alt="Mango product"></figure>
      </div>
    </div>
  </section>
  <section class="section section--cream2">
    <div class="container split">
      <div data-reveal><p class="eyebrow">Private label</p><h2 class="h2">Your brand, our quality</h2><p class="lead">From artwork and labelling to retail-ready cartons and custom pulp/powder packs — we build to your market's regulatory and brand requirements.</p><div class="mt-2"><a class="btn btn--gold" href="bulk-inquiry">Discuss private label</a></div></div>
      <div data-reveal data-delay="1"><ul style="list-style:none;padding:0;margin:0">${['Custom artwork &amp; multilingual labelling','Retail, food-service &amp; bulk formats','Regulatory-compliant nutrition &amp; origin info','Container loadability optimised for cost'].map(s=>`<li style="display:flex;gap:.7rem;padding:.7rem 0;border-bottom:1px solid var(--line)"><span class="text-gold">✓</span> ${s}</li>`).join('')}</ul></div>
    </div>
  </section>`
};

/* ---------- GLOBAL MARKETS ---------- */
const regionCard = (title, countries) => `<div class="feature-card" data-reveal><h3>${title}</h3><div class="country-chips" style="margin-top:.6rem">${countries.map(c=>`<span class="chip" style="background:var(--cream-200);border-color:var(--line)">${c}</span>`).join('')}</div></div>`;
pages['global-markets.html'] = {
  title: 'Global Markets | Mango Export to 10+ Countries | MODERN HARVEST',
  desc: 'MODERN HARVEST exports Gir Kesar mangoes, pulp and powder to 10+ countries across the Middle East, Europe, North America and Asia-Pacific via major Indian ports.',
  active: 'global-markets',
  body: `${pageHero('Trusted across 10+ countries', 'From the Gulf to Europe, North America and Asia-Pacific — reliable supply to importers, distributors and retail chains.', 'hero-banner.jpg', 'Global Markets')}
  <section class="section section--dark">
    <div class="container">
      <div class="markets">
        <div data-reveal>
          <p class="eyebrow">Where we ship</p>
          <h2 class="h2">A worldwide buyer network</h2>
          <p class="lead">We serve established importers and new partners alike, shipping via Mundra, Nhava Sheva and Pipavav with reefer and air-freight options.</p>
          <div class="country-chips">${['🇦🇪 UAE','🇸🇦 Saudi Arabia','🇶🇦 Qatar','🇰🇼 Kuwait','🇬🇧 UK','🇩🇪 Germany','🇺🇸 USA','🇨🇦 Canada','🇸🇬 Singapore','🇳🇿 New Zealand','+ more'].map(c=>`<span class="chip">${c}</span>`).join('')}</div>
        </div>
        <div class="map-wrap" data-reveal data-delay="1" aria-hidden="true">
          <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,.15)"/><ellipse cx="100" cy="100" rx="92" ry="34" fill="none" stroke="rgba(255,255,255,.12)"/><ellipse cx="100" cy="100" rx="92" ry="68" fill="none" stroke="rgba(255,255,255,.12)"/><ellipse cx="100" cy="100" rx="40" ry="92" fill="none" stroke="rgba(255,255,255,.12)"/><ellipse cx="100" cy="100" rx="72" ry="92" fill="none" stroke="rgba(255,255,255,.12)"/><line x1="8" y1="100" x2="192" y2="100" stroke="rgba(255,255,255,.12)"/><line x1="100" y1="8" x2="100" y2="192" stroke="rgba(255,255,255,.12)"/><circle class="map-dot" cx="120" cy="108" r="4"/><circle class="map-dot" cx="135" cy="96" r="3.5" style="animation-delay:.4s"/><circle class="map-dot" cx="92" cy="78" r="3.5" style="animation-delay:.8s"/><circle class="map-dot" cx="70" cy="92" r="3.5" style="animation-delay:1.2s"/><circle class="map-dot" cx="150" cy="120" r="3.5" style="animation-delay:1.6s"/></svg>
        </div>
      </div>
      <div class="stats mt-3" style="margin-top:4rem" data-reveal>
        <div class="stat"><b data-count="10" data-suffix="+">0</b><span>Countries Served</span></div>
        <div class="stat"><b data-count="4">0</b><span>Continents</span></div>
        <div class="stat"><b data-count="3">0</b><span>Export Ports</span></div>
        <div class="stat"><b data-count="100" data-suffix="%">0</b><span>Traceable Lots</span></div>
      </div>
    </div>
  </section>
  <section class="section section--cream">
    <div class="container">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center">By region</p><h2 class="h2">Markets we serve</h2></div>
      <div class="grid grid-4">
        ${regionCard('Middle East',['UAE','Saudi Arabia','Qatar','Kuwait'])}
        ${regionCard('Europe',['UK','Germany'])}
        ${regionCard('North America',['USA','Canada'])}
        ${regionCard('Asia-Pacific',['Singapore','New Zealand'])}
      </div>
      <div class="center mt-3" data-reveal><a class="btn btn--gold" href="bulk-inquiry">Enquire for your market</a></div>
    </div>
  </section>`
};

/* ---------- CONTACT ---------- */
pages['contact.html'] = {
  title: 'Contact MODERN HARVEST | Mango Export Sales — India',
  desc: 'Contact the MODERN HARVEST export team for Gir Kesar mangoes, pulp and powder. Email, phone, WhatsApp and export inquiry form. We reply within one business day.',
  active: 'contact',
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are your minimum order quantities?","acceptedAnswer":{"@type":"Answer","text":"Fresh Kesar ships by full or part container load; pulp and powder from a single pallet."}},{"@type":"Question","name":"Do you provide samples?","acceptedAnswer":{"@type":"Answer","text":"Yes, samples of fresh fruit, pulp or powder are available with specifications and certificate of analysis."}}]}</script>`,
  body: `${pageHero('Talk to our export team', 'Tell us your market and volumes — we respond within one business day with pricing, specs and a sampling plan.', 'gallery-06.jpeg', 'Contact')}
  <section class="section section--cream">
    <div class="container split">
      <div data-reveal>
        <p class="eyebrow">Get in touch</p>
        <h2 class="h2">Export &amp; domestic inquiries</h2>
        <p class="lead">Direct lines to our team — no call centres, no delays.</p>
        <div style="margin-top:1.6rem">
          <h3 class="h3" style="font-size:1.1rem;margin-bottom:.4rem">Export detail</h3>
          <p><b>Email</b><br><a href="mailto:exports@mangofarm.com" style="color:var(--green)">exports@mangofarm.com</a></p>
          <p><b>Phone / WhatsApp</b><br><a href="tel:+919213022464" style="color:var(--green)">+91 92130 22464</a></p>
          <p><b>Pack-house &amp; farms</b><br>Talala, Gir, Dist: Junagadh, Gujarat 362150, India</p>
          <p><b>Ports &amp; terms</b><br>FOB / CIF via Mundra, Nhava Sheva &amp; Pipavav</p>
        </div>
        <div style="margin-top:1.6rem">
          <h3 class="h3" style="font-size:1.1rem;margin-bottom:.4rem">Domestic detail</h3>
          <p><b>Corporate office</b><br>A4, Park Elegant, Nr. Congress Bhawan, Ellisbridge, Paldi, Ahmedabad 380007, Gujarat, India</p>
          <p><b>Cities served</b><br>Ahmedabad, Mumbai &amp; major metro cities</p>
          <p><b>E-Commerce</b><br>Available on leading online marketplaces</p>
          <p><b>Marketed &amp; manufactured by</b><br>Modern Milk</p>
        </div>
        <div style="margin-top:1.6rem">
          <h3 class="h3" style="font-size:1.1rem;margin-bottom:.4rem">Connect with us</h3>
          <!-- TODO: add scannable WhatsApp & Instagram QR images here (e.g. assets/images/qr-whatsapp.png, assets/images/qr-instagram.png) -->
          <div class="cta-band__btns" style="justify-content:flex-start;margin-top:.4rem"><a class="btn btn--wa" href="${WA}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn--outline" href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a></div>
        </div>
        <div class="cta-band__btns" style="justify-content:flex-start;margin-top:1rem"><a class="btn btn--outline" href="assets/docs/mango-farm-export-brochure.pdf" download>Download brochure</a></div>
      </div>
      <div data-reveal data-delay="1">
        <h3 class="h3" style="margin-bottom:1rem">Send an inquiry</h3>
        ${exportInquiryForm('contact')}
      </div>
    </div>
  </section>
  <section class="section section--cream2">
    <div class="container narrow">
      <div class="section-head section-head--center" data-reveal><p class="eyebrow eyebrow--center">FAQ</p><h2 class="h2">Common questions</h2></div>
      <div data-reveal>
        ${[['What are your minimum order quantities (MOQ)?','Fresh Kesar typically ships by full or part container load; pulp and powder are available from a single pallet. Share your target volume and we will advise the most efficient configuration.'],['Do you provide samples before a bulk order?','Yes — samples of fresh fruit, pulp or powder are available with specifications and a certificate of analysis.'],['Which ports and incoterms do you use?','We ship FOB or CIF via Mundra, Nhava Sheva and Pipavav, with air freight for premium fresh consignments.'],['How quickly do you respond?','Our export team replies to inquiries within one business day.']].map(([q,a])=>`<div class="faq-item"><button class="faq-q" aria-expanded="false">${q}<span class="pm"></span></button><div class="faq-a"><p>${a}</p></div></div>`).join('')}
      </div>
    </div>
  </section>`
};

/* ---------- BULK INQUIRY ---------- */
pages['bulk-inquiry.html'] = {
  title: 'Bulk & Export Inquiry | Request a Mango Quote | MODERN HARVEST',
  desc: 'Request a bulk export quote for Gir Kesar mangoes, aseptic pulp or mango powder. Tell us your market, volume and incoterm — we reply within one business day.',
  active: '',
  body: `${pageHero('Request an export quote', 'For importers, wholesalers, retail chains and food manufacturers. Share your requirement and our export team will respond within one business day.', 'about-banner.jpg', 'Bulk Inquiry')}
  <section class="section section--cream">
    <div class="container split">
      <div data-reveal>
        <p class="eyebrow">Why inquire</p>
        <h2 class="h2">A straightforward path to supply</h2>
        <ul style="list-style:none;padding:0;margin:1.2rem 0 0">
          ${[['Fast response','A real reply from our export team within one business day.'],['Clear specifications','Grade sheets, packing options and certificates of analysis.'],['Flexible terms','FOB or CIF, with private-label and custom packing.'],['Reliable supply','Season-long volume backed by transparent logistics.']].map(([t,d])=>`<li style="display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--line)"><span class="text-gold" style="font-size:1.2rem">✓</span><span><b style="display:block">${t}</b><span style="color:var(--muted)">${d}</span></span></li>`).join('')}
        </ul>
        <div class="cta-band__btns" style="justify-content:flex-start;margin-top:1.4rem"><a class="btn btn--wa" href="${WA}" target="_blank" rel="noopener">Prefer WhatsApp?</a></div>
      </div>
      <div data-reveal data-delay="1">
        <h3 class="h3" style="margin-bottom:1rem">Export &amp; bulk inquiry</h3>
        ${exportInquiryForm('bulk')}
      </div>
    </div>
  </section>`
};

/* ---------- write all ---------- */
let count = 0;
for (const [file, def] of Object.entries(pages)) {
  fs.writeFileSync(`${OUT}/${file}`, shell(def));
  count++;
  console.log('generated', file);
}
console.log('TOTAL', count, 'pages');
