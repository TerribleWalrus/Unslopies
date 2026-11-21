// review.js (Unslop Design 1.76)  ·  node review.js <url> [outDir]
const { chromium } = require("playwright");
const fs = require("fs");
const url = process.argv[2], out = (process.argv[3] || "./review-out") + "/";
if (!url) { console.error("usage: node review.js <url> [outDir]"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
const SIZES = [[320, 640], [390, 844], [768, 1024], [1280, 860], [1920, 1080]];

const inPage = () => {
  const cv = Object.assign(document.createElement("canvas"), { width: 1, height: 1 });
  const cx = cv.getContext("2d", { willReadFrequently: true }), cache = new Map();
  const rgba = c => {
    if (cache.has(c)) return cache.get(c);
    cx.clearRect(0, 0, 1, 1); cx.fillStyle = "#000"; cx.fillStyle = c; cx.fillRect(0, 0, 1, 1);
    const d = cx.getImageData(0, 0, 1, 1).data, v = [d[0], d[1], d[2], d[3] / 255];
    cache.set(c, v); return v;
  };
  const over = (t, b) => [0, 1, 2].map(i => t[i] * t[3] + b[i] * (1 - t[3]));
  const lum = c => { const f = v => (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]); };
  const darkCanvas = matchMedia("(prefers-color-scheme: dark)").matches && /dark/.test(getComputedStyle(document.documentElement).colorScheme);
  const ground = el => {
    const chain = []; for (let e = el; e; e = e.parentElement) chain.unshift(e);
    let bg = darkCanvas ? [18, 18, 18] : [255, 255, 255], onImage = false;
    for (const e of chain) {
      const cs = getComputedStyle(e), c = rgba(cs.backgroundColor);
      if (cs.backgroundImage !== "none") onImage = true; else if (c[3] > 0.95) onImage = false;
      bg = over(c, bg);
    }
    return { bg, onImage };
  };
  const seen = { families: new Set(), sizes: new Set(), radii: new Set() };
  const n = { elements: 0, borders: 0, shadows: 0, gradients: 0, pills: 0, italics: 0, monoOutsideCode: 0, smallCaps: 0, backdropBlur: 0, emoji: 0, textOnImage: 0 };
  const low = [], tiny = [], small = [], noName = [];
  const INTERACTIVE = "button, a[href], input:not([type=hidden]), select, textarea, [role=button], [role=link], [role=tab], [role=switch], [role=checkbox], [tabindex]:not([tabindex='-1'])";
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height || r.bottom < 0 || r.right < 0) continue;
    if (el.checkVisibility && !el.checkVisibility({ opacityProperty: true, visibilityProperty: true })) continue;
    const cs = getComputedStyle(el); n.elements++;
    if (["Top", "Right", "Bottom", "Left"].some(s => parseFloat(cs[`border${s}Width`]) > 0 && cs[`border${s}Style`] !== "none" && rgba(cs[`border${s}Color`])[3] > 0.05)) n.borders++;
    if (cs.boxShadow !== "none") n.shadows++;
    if (/gradient/.test(cs.backgroundImage)) n.gradients++;
    if (cs.backdropFilter && cs.backdropFilter !== "none") n.backdropBlur++;
    const raw = cs.borderTopLeftRadius, half = Math.min(r.width, r.height) / 2;
    const rad = raw.includes("%") ? half * 2 * parseFloat(raw) / 100 : parseFloat(raw) || 0;
    if (rad >= half - 0.5 && rad > 0) { if (r.width > r.height * 1.4) n.pills++; } else if (rad) seen.radii.add(Math.round(rad));

    const own = [...el.childNodes].filter(x => x.nodeType === 3).map(x => x.textContent).join("").trim();
    if (own) {
      const px = parseFloat(cs.fontSize), fam = cs.fontFamily.split(",")[0].replace(/["']/g, "").trim();
      seen.families.add(fam); seen.sizes.add(Math.round(px));
      if (cs.fontStyle === "italic") n.italics++;
      if (/mono|courier|consolas|menlo/i.test(fam) && !el.closest("code, pre, kbd, samp")) n.monoOutsideCode++;
      if (cs.textTransform === "uppercase" && px <= 13) n.smallCaps++;
      if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(own)) n.emoji++;
      if (!el.closest(":disabled, [aria-disabled=true]")) {
        const g = ground(el), fg = over(rgba(cs.color), g.bg), a = lum(fg), b = lum(g.bg);
        const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05), big = px >= 24 || (px >= 18.66 && +cs.fontWeight >= 700);
        if (g.onImage) n.textOnImage++; else if (ratio < (big ? 3 : 4.5)) low.push(`"${own.slice(0, 24)}" ${ratio.toFixed(2)}:1`);
      }
    }
    if (el.matches(INTERACTIVE)) {
      const byId = (el.getAttribute("aria-labelledby") || "").split(" ").map(i => document.getElementById(i)?.textContent || "").join(" ");
      const name = (el.getAttribute("aria-label") || byId || [...(el.labels || [])].map(l => l.textContent).join(" ") || el.textContent || el.getAttribute("title")
        || el.querySelector("img[alt]")?.alt || (/^(submit|button|reset)$/.test(el.type) ? el.value : "") || "").trim();
      const ph = el.getAttribute("placeholder"), id = (name || ph || el.tagName.toLowerCase()).slice(0, 20);
      if (!name) noName.push(id + (ph ? " (placeholder is not a label)" : ""));
      if (cs.display !== "inline" && !(el.labels && el.labels.length && /^(checkbox|radio)$/.test(el.type))) {
        const dim = `${id} ${Math.round(r.width)}x${Math.round(r.height)}`;
        if (r.width < 24 || r.height < 24) tiny.push(dim); else if (innerWidth < 800 && (r.width < 44 || r.height < 44)) small.push(dim);
      }
    }
  }
  const hs = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter(h => h.getClientRects().length).map(h => +h.tagName[1]);
  const structure = [], h1 = hs.filter(h => h === 1).length;
  if (h1 !== 1) structure.push(`${h1} h1 (want exactly 1)`);
  hs.forEach((h, i) => { if (i && h - hs[i - 1] > 1) structure.push(`heading jumps h${hs[i - 1]} to h${h}`); });
  if (!document.querySelector("main, [role=main]")) structure.push("no <main> landmark");
  if (!document.documentElement.lang) structure.push("no lang on <html>");
  if (!document.title.trim()) structure.push("no <title>");
  const noAlt = document.querySelectorAll("img:not([alt])").length; if (noAlt) structure.push(`${noAlt} img without alt`);
  const leftovers = [...new Set(document.body.innerText.toLowerCase().match(/\b(lorem|placeholder|todo|sample data|test data|demo|coming soon|john doe|jane doe|acme)\b/g) || [])];
  return {
    sideScroll: document.documentElement.scrollWidth > innerWidth + 1, screens: +(document.documentElement.scrollHeight / innerHeight).toFixed(1),
    low: [...new Set(low)], tiny: [...new Set(tiny)], small: [...new Set(small)], noName: [...new Set(noName)], structure, leftovers,
    census: { ...n, families: [...seen.families], sizes: [...seen.sizes].sort((a, b) => a - b), radii: [...seen.radii].sort((a, b) => a - b) },
  };
};

const loadMetrics = () => new Promise(res => {
  let lcp = 0, cls = 0;
  try {
    new PerformanceObserver(l => { for (const e of l.getEntries()) lcp = e.startTime; }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; }).observe({ type: "layout-shift", buffered: true });
  } catch {}
  setTimeout(() => {
    const rs = [...performance.getEntriesByType("navigation"), ...performance.getEntriesByType("resource")];
    const kb = t => Math.round(rs.filter(t).reduce((s, e) => s + (e.transferSize || e.encodedBodySize || 0), 0) / 1024);
    res({ lcpMs: Math.round(lcp), cls: +cls.toFixed(3), totalKB: kb(() => true), scriptKB: kb(e => e.initiatorType === "script"),
      fontFiles: rs.filter(e => /\.(woff2?|ttf|otf)(\?|$)/.test(e.name)).length, requests: rs.length });
  }, 300);
});

async function tabWalk(page) {
  await page.evaluate(() => {
    window.__sig = el => { const c = getComputedStyle(el); return [c.outlineStyle, c.outlineWidth, c.outlineColor, c.boxShadow, c.borderColor, c.backgroundColor, c.textDecorationLine].join("|"); };
    window.__rest = new Map([...document.querySelectorAll("a[href], button, input, select, textarea, summary, [tabindex]")].map(e => [e, __sig(e)]));
  });
  const stops = [];
  for (let i = 0; i < 80; i++) {
    await page.keyboard.press("Tab"); await page.waitForTimeout(60);
    const s = await page.evaluate(() => {
      const el = document.activeElement; if (!el || el === document.body) return null;
      const r = el.getBoundingClientRect(), hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      return { name: (el.getAttribute("aria-label") || el.textContent || el.getAttribute("placeholder") || el.tagName).trim().replace(/\s+/g, " ").slice(0, 28),
        key: [...__rest.keys()].indexOf(el), ring: __rest.has(el) ? __rest.get(el) !== __sig(el) : true,
        covered: !!hit && !(el.contains(hit) || hit.contains(el)), off: !r.width || r.bottom <= 0 || r.top >= innerHeight || r.right <= 0 || r.left >= innerWidth };
    });
    if (!s || (stops.length && s.key >= 0 && s.key === stops[0].key)) break;
    stops.push(s);
  }
  return stops;
}

(async () => {
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {}), found = new Map(), report = { url, sizes: {} };
  const add = (kind, item, tag) => { const k = `${kind}: ${item}`; found.set(k, [...(found.get(k) || []), tag]); };
  for (const scheme of ["light", "dark"]) for (const [w, h] of SIZES) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, colorScheme: scheme, hasTouch: w < 800 });
    const page = await ctx.newPage(), tag = `${scheme}-${w}`, errors = [];
    page.on("pageerror", e => errors.push(e.message)); page.on("console", m => m.type() === "error" && errors.push(m.text()));
    await page.goto(url, { waitUntil: "load" }); await page.waitForTimeout(1200);
    await page.screenshot({ path: `${out}${tag}.png` });
    const r = await page.evaluate(inPage); report.sizes[tag] = r;
    if (r.sideScroll) add("SIDE SCROLL", w === 320 ? "fails reflow at 320 px" : "page is wider than the viewport", tag);
    r.low.forEach(x => add("LOW CONTRAST", x, tag)); r.tiny.forEach(x => add("TARGET UNDER 24px (fails AA)", x, tag));
    r.small.forEach(x => add("target under 44px (touch comfort)", x, tag)); r.noName.forEach(x => add("NO ACCESSIBLE NAME", x, tag));
    r.leftovers.forEach(x => add("demo leftover", x, tag)); errors.forEach(x => add("CONSOLE ERROR", x.slice(0, 120), tag));
    if (w === 390 && r.screens > 8) add("long page", `${r.screens} phone screens tall`, tag);
    if (scheme === "light" && w === 1280) {
      r.structure.forEach(x => add("STRUCTURE", x, tag));
      report.load = await page.evaluate(loadMetrics); report.census = r.census;
      try { fs.writeFileSync(`${out}a11y-tree.txt`, await page.locator("body").ariaSnapshot()); } catch (e) { report.a11yTree = "not available: " + e.message; }
      const stops = await tabWalk(page); report.tabOrder = stops.map(s => s.name);
      if (!stops.length) add("KEYBOARD", "Tab reaches nothing", tag);
      stops.forEach(s => { if (!s.ring) add("NO VISIBLE FOCUS", s.name, tag); if (s.covered) add("FOCUS COVERED", s.name, tag); if (s.off) add("FOCUS OFF SCREEN", s.name, tag); });
      await page.screenshot({ path: `${out}focus-last-stop.png` });
    }
    await ctx.close();
  }
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, reducedMotion: "reduce" }), page = await ctx.newPage();
  await page.goto(url, { waitUntil: "load" }); await page.waitForTimeout(1500);
  const moving = await page.evaluate(() => document.getAnimations().filter(a => a.playState === "running" && a.effect && a.effect.getKeyframes().some(k =>
    ["transform", "translate", "scale", "rotate", "top", "left", "offsetDistance"].some(p => p in k))).length);
  if (moving) add("REDUCED MOTION", `${moving} moving animation(s) still running`, "reduce-1280");
  await ctx.close(); await browser.close();

  fs.writeFileSync(`${out}review.json`, JSON.stringify(report, null, 2));
  const c = report.census, l = report.load, all = SIZES.length * 2;
  const lines = [...found].map(([k, tags]) => { const t = [...new Set(tags)]; return `${k}  [${t.length === all ? "every size, both themes" : t.join(", ")}]`; }).sort();
  console.log(`FINDINGS (${lines.length})\n` + (lines.join("\n") || "none measurable; now look at the screenshots"));
  console.log(`\nCENSUS (light, 1280): ${c.elements} visible elements | borders ${c.borders} | shadows ${c.shadows} | gradients ${c.gradients} | pills ${c.pills} | backdrop blur ${c.backdropBlur}`
    + ` | italics ${c.italics} | mono outside code ${c.monoOutsideCode} | small uppercase labels ${c.smallCaps} | emoji ${c.emoji} | text on an image (contrast unchecked) ${c.textOnImage}`
    + `\n  families: ${c.families.join(", ")}\n  type sizes (${c.sizes.length}): ${c.sizes.join(", ")}\n  radii (${c.radii.length}): ${c.radii.join(", ")}`);
  console.log(`\nLOAD: LCP ${l.lcpMs} ms | CLS ${l.cls} | ${l.totalKB} KB in ${l.requests} requests | script ${l.scriptKB} KB | font files ${l.fontFiles}`);
  console.log(`\nTAB ORDER (${report.tabOrder.length} stops): ${report.tabOrder.join(" > ")}`);
  console.log(`\nSaved to ${out}: screenshots per size and theme, a11y-tree.txt (for the blind walk), review.json`);
})();
