// node silhouette.js <url> [width=1280]
// Prints the page as a sequence of beats: alignment class, height in screens, ground colour.
// Classes: C centred, L left/ragged, F full-bleed, LR side-by-side pair, G grid (3+ across).
// Flags: same class+ground as the neighbour, a class 3x in a row, LR over a third of beats, no XL beat.
const { chromium } = require("playwright");
const [url, W = "1280"] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch({ ...(process.env.CHROME ? { executablePath: process.env.CHROME } : {}) });
  const p = await b.newPage({ viewport: { width: +W, height: 860 } });
  await p.goto(url, { waitUntil: "load" }); await p.waitForTimeout(1500);
  const f = p.frames().find(x => x !== p.mainFrame() && x.parentFrame() === p.mainFrame() && !/^about:/.test(x.url())) || p.mainFrame();
  const beats = await f.evaluate(() => {
    const vw = innerWidth, vh = innerHeight;
    // beats = direct children of main (or body) that are tall enough, flattening wrappers that hold several sections
    let root = document.querySelector("main") || document.body;
    const kids = el => [...el.children].filter(c => { const r = c.getBoundingClientRect(); return r.height > 120 && r.width > vw * 0.5 && getComputedStyle(c).position !== "fixed"; });
    let list = kids(root);
    while (list.length === 1 && kids(list[0]).length > 1) list = kids(list[0]);
    if (root !== document.body) { const before = [], after = []; let seenMain = false;
      for (const c of kids(document.body)) { if (c.contains(root)) { seenMain = true; continue; } (seenMain ? after : before).push(c); }
      list = [...before.filter(x => x.tagName !== "HEADER"), ...list, ...after]; }
    const bg = el => { for (let e = el; e; e = e.parentElement) { const c = getComputedStyle(e).backgroundColor; if (!/rgba\(0, 0, 0, 0\)|transparent/.test(c)) return c; } return "rgb(255,255,255)"; };
    return list.map(sec => {
      const R = sec.getBoundingClientRect(), y0 = R.top + scrollY;
      // content blocks: elements wider than 18% of the section, not containing another such block
      const all = [...sec.querySelectorAll("*")].filter(e => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e);
        return r.width > R.width * 0.18 && r.height > 36 && cs.display !== "contents" && cs.visibility !== "hidden" && (e.children.length === 0 || /^(IMG|PICTURE|VIDEO|SVG|CANVAS|P|H[1-6]|FORM|UL|OL|TABLE|FIGURE|BUTTON|A|LABEL|IFRAME)$/i.test(e.tagName) || e.querySelector(":scope > img, :scope > p, :scope > h1, :scope > h2, :scope > h3")); });
      const blocks = all.filter(e => !all.some(o => o !== e && e.contains(o) && o.getBoundingClientRect().width > R.width * 0.18)).map(e => e.getBoundingClientRect());
      // rows: group blocks whose vertical ranges overlap; count side-by-side columns per row
      let maxCols = 1; const rows = [];
      for (const r of blocks) { let row = rows.find(rw => rw.some(q => Math.min(q.bottom, r.bottom) - Math.max(q.top, r.top) > Math.min(q.height, r.height) * 0.5)); if (!row) rows.push(row = []); row.push(r); }
      let splitRows = 0, gridRows = 0;
      for (const row of rows) { const xs = row.sort((a, c) => a.left - c.left); let cols = 1, right = xs[0].right;
        for (const r of xs.slice(1)) if (r.left >= right - 4) { cols++; right = r.right; } else right = Math.max(right, r.right);
        maxCols = Math.max(maxCols, cols); if (cols === 2) splitRows++; if (cols >= 3) gridRows++; }
      const wide = blocks.reduce((m, r) => r.width > m.width ? r : m, { width: 0 });
      let cls;
      if (gridRows && gridRows >= splitRows) cls = "G";
      else if (splitRows) cls = "LR";
      else if (wide.width >= vw * 0.9) cls = "F";
      else { const lm = wide.left - R.left, rm = R.right - wide.right; cls = Math.abs(lm - rm) < R.width * 0.08 ? "C" : "L"; }
      return { tag: sec.tagName.toLowerCase() + (sec.id ? "#" + sec.id : sec.className ? "." + String(sec.className).split(" ")[0] : ""), cls, h: +(R.height / vh).toFixed(2), bg: bg(sec), y: Math.round(y0) };
    });
  });
  const name = c => c.replace(/\s/g, "");
  const seq = beats.map(b => `${b.cls}${b.h >= 1.5 ? "·XL" : b.h >= 1 ? "·L" : b.h >= 0.5 ? "·M" : "·S"}`);
  console.log(`SILHOUETTE ${url} @${W}px\n  ${seq.join("  ")}`);
  beats.forEach((b, i) => console.log(`  ${String(i + 1).padStart(2)} ${b.cls.padEnd(2)} ${String(b.h).padStart(5)} screens  ${name(b.bg).padEnd(22)} ${b.tag}`));
  const flags = [];
  beats.forEach((b, i) => { const a = beats[i - 1]; if (a && a.cls === b.cls && name(a.bg) === name(b.bg)) flags.push(`beats ${i} and ${i + 1}: same alignment (${b.cls}) and same ground`); });
  for (let i = 2; i < beats.length; i++) if (beats[i].cls === beats[i - 1].cls && beats[i].cls === beats[i - 2].cls) flags.push(`beats ${i - 1}-${i + 1}: ${beats[i].cls} three times in a row`);
  const lr = beats.filter(b => b.cls === "LR").length; if (lr > beats.length / 3) flags.push(`${lr} of ${beats.length} beats are side-by-side splits (over a third)`);
  if (!beats.some(b => b.h >= 1.5)) flags.push("no XL beat (nothing gets 1.5 screens to itself)");
  const grounds = new Set(beats.map(b => name(b.bg))).size; if (grounds < 2) flags.push("one ground for the whole page");
  console.log(flags.length ? "FLAGS\n  " + flags.join("\n  ") : "FLAGS none");
  await b.close();
})();
