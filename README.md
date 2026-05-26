# Mango Farm — Website Rebuild

A static website rebuild for [The Backyard Group](https://www.thebackyardgroup.com), a Kesar mango products company. The workflow scrapes the original Wix site using Playwright, then delivers a clean, framework-free HTML/CSS/JS site.

## Project Structure

```
Farm/
├── mango-farm/              # Rebuilt static website (deliverable)
│   ├── index.html
│   ├── about-us.html
│   ├── faq.html
│   ├── gallery.html
│   ├── kesar-mango.html
│   ├── mango-powder.html
│   ├── mango-pulp.html
│   ├── other-varieties.html
│   └── assets/
│       ├── css/style.css
│       ├── js/main.js
│       └── images/
├── mango-farm-export/       # Single-file export version
├── original/                # Scraped content from live site
│   ├── shots/               # Full-page screenshots of original pages
│   ├── *.json               # Extracted text, images, colors, fonts per page
│   └── *.txt                # Body copy per page
├── crawl/                   # Raw crawled HTML from original site
├── build-shots/             # Screenshots of rebuilt pages for QA
├── extract.js               # Scrape all pages — text, images, styles, screenshots
├── extract2.js              # Targeted re-scrape for specific pages
├── shoot.js                 # Screenshot local build pages
├── interact.js              # Test interactive UI (FAQ, form, mobile nav)
├── logoshot.js              # Render logo badge SVG → PNG
├── wordshot.js              # Render wordmark SVG → PNG
├── package.json
└── package-lock.json
```

## Prerequisites

- Node.js 18+
- Google Chrome installed (Playwright uses the `chrome` channel)

## Setup

```bash
npm install
npx playwright install chrome
```

## Workflow

### 1. Scrape the original site

Crawls all pages, captures full-page screenshots, and extracts text content, images, colors, and fonts into `original/`.

```bash
node extract.js
```

To re-scrape specific pages only:

```bash
node extract2.js
```

### 2. Serve the rebuilt site locally

Any static file server works. Example using `npx`:

```bash
npx serve mango-farm -l 8765
# or
npx http-server mango-farm -p 8765
```

### 3. Screenshot the build

Takes full-page screenshots of each rebuilt page and saves them to `build-shots/`.

```bash
node shoot.js index.html about-us.html faq.html gallery.html kesar-mango.html mango-powder.html mango-pulp.html other-varieties.html
```

### 4. Test interactive features

Verifies FAQ accordion, email form submission, and mobile burger menu behavior.

```bash
node interact.js
```

### 5. Render logo assets

Generate PNG logo assets from HTML/SVG renders (requires local server running):

```bash
node logoshot.js   # saves mango-farm/assets/images/mf-logo-badge.png
node wordshot.js   # saves mango-farm/assets/images/mf-word.png
```

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About Us | `about-us.html` |
| Kesar Mango | `kesar-mango.html` |
| Mango Pulp | `mango-pulp.html` |
| Mango Powder | `mango-powder.html` |
| Other Varieties | `other-varieties.html` |
| Gallery | `gallery.html` |
| FAQ | `faq.html` |

## Tech Stack

- **Scraping / QA automation**: Playwright (headless Chrome)
- **Site**: Vanilla HTML, CSS, JavaScript — no framework, no build step
- **Viewport**: Designed at 1440px desktop, responsive down to 390px mobile
