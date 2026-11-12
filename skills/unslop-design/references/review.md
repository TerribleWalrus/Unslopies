# Review reference

Read this before Phase 13 and before reporting. It has the full review loop, scripts you can run, the findings table
and the scorecard.

## The review loop

Run it after every build or round of fixes, in a real browser (Playwright with Chromium where available), on real
data. Look at the result as the user would.

1. **Do the top tasks yourself,** scripted. Count the steps and compare them with the task table.
2. **Screenshot every screen you changed:**
   - at 390 px and 1280 px, or the user's real device size if you know it;
   - in both themes;
   - in the states that matter: empty, loading, full, error, a menu open, a sheet open, the longest name, a
     200-item list.

   Look at each screenshot yourself. Automated checks miss the problems that matter most: text sitting on top of
   objects, things cut off at an edge, a dish drawn twice, a label wrapping onto two lines.
3. **Walk through each screen:**
   - **The cold read:** show a screenshot to a sub-agent with a fresh context and no explanation. Ask what the
     screen is, what is happening and what to do next. Any wrong answer is a finding.
   - **The usability bar** (SKILL.md Phase 2A), line by line: plain names, one obvious next action, status spelled
     out, the metaphor explains or it goes, conventions kept, steps counted.
   - **First 5 seconds:** is the main action obvious?
   - **Load:** is anything on screen that the next decision doesn't need?
   - **The 100th use (apps):** what will annoy them?
   - **Ban list:** does anything on it appear?
4. **Check the feeling.**
   - Put the first screen next to the feeling table and go row by row.
   - Blur the screenshot heavily and hide all text. Would a stranger guess the subject and the feeling from shape,
     colour and rhythm alone?
   - Run the template test: swap in a different subject's name and content. Does the screen still work unchanged?
   - If any of these checks fail, the build fails, however clean it is.
5. **Watch the motion slowed down.** See "Checking motion" in `motion.md`.
6. **Check sound,** if there is any. See "Checking sound" in `sound.md`.
7. **Use it the way people do:**
   - phone one-handed, with every top task in thumb reach and every gesture with a visible alternative;
   - keyboard only, with focus visible and landing where expected after anything opens or closes;
   - the obvious wrong moves: tap what looks tappable, press Escape, press back, double-tap submit.
8. **Check the extremes:** empty, error, a slow network, the longest name, a 200-item list.
9. **Check what the user actually sees:**
   - their settings, custom CSS, data, device and network;
   - caches and service workers that may serve stale files.

   When the user reports something you can't reproduce, suspect the gap between your test and their setup before
   declaring it fixed.
10. **Check it's ready to ship:**
    - no demo leftovers;
    - every link opens;
    - every fact matches its source list;
    - the page height on a phone is reasonable;
    - no console errors.
11. **Compare with any reference** (a mockup, a comp, the original) detail by detail, with pass or fail for each.
12. **Write the findings table, worst first, then fix and repeat** until nothing serious is left. Under "Small changes",
    fix what was agreed, and bring anything new to the user as a proposal.

    | Issue | Where | Who it hurts | Fix |
    |---|---|---|---|

## Scripts

Save the page checks as a file in your scratch folder and run them with Node. They report the problems that can be
measured, and they save screenshots for you to look at.

```js
// review.js: node review.js <url>
const { chromium } = require("playwright");
const url = process.argv[2], out = "./review-shots/";
require("fs").mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch(), findings = [];
  for (const scheme of ["dark", "light"]) for (const [w, h] of [[390, 844], [1280, 860]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, colorScheme: scheme, hasTouch: w < 500 });
    const page = await ctx.newPage(), tag = `${scheme}-${w}`, errors = [];
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", m => m.type() === "error" && errors.push(m.text()));
    await page.goto(url); await page.waitForTimeout(1200);
    await page.screenshot({ path: `${out}${tag}.png` });

    const r = await page.evaluate(() => {
      const parse = c => (c.match(/[\d.]+/g) || [0, 0, 0]).map(Number);
      const lum = ([r, g, b]) => { const f = v => (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const bgOf = el => { for (; el; el = el.parentElement) { const p = parse(getComputedStyle(el).backgroundColor); if (!(p.length === 4 && p[3] < 0.5)) return p; } return [255, 255, 255]; };
      const lowContrast = [], smallTargets = [];
      for (const el of document.querySelectorAll("body *")) {
        const box = el.getBoundingClientRect();
        if (!box.width || box.bottom < 0 || box.right < 0) continue;                     // off screen, like a skip link at rest
        if (el.checkVisibility && !el.checkVisibility({ opacityProperty: true, visibilityProperty: true })) continue; // closed menus
        const ownText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
        if (ownText) {
          const cs = getComputedStyle(el), big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && +cs.fontWeight >= 700);
          const a = lum(parse(cs.color)), b = lum(bgOf(el)), ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
          if (ratio < (big ? 3 : 4.5)) lowContrast.push(`${el.textContent.trim().slice(0, 24)} ${ratio.toFixed(2)}`);
        }
        if (el.matches("button, a[href], input, select, [role=button]") && innerWidth < 500 && (box.width < 44 || box.height < 44))
          smallTargets.push(`${(el.textContent.trim() || el.getAttribute("aria-label") || el.tagName).slice(0, 20)} ${Math.round(box.width)}x${Math.round(box.height)}`);
      }
      const text = document.body.innerText.toLowerCase();
      return {
        sideScroll: document.documentElement.scrollWidth > innerWidth,
        screens: (document.documentElement.scrollHeight / innerHeight).toFixed(1),
        lowContrast, smallTargets,
        leftovers: ["sample", "demo", "lorem", "placeholder", "todo", "test data"].filter(w => text.includes(w)),
        unlabelled: [...document.querySelectorAll("button, a[href]")].filter(b => !b.textContent.trim() && !b.getAttribute("aria-label")).length,
      };
    });
    findings.push(`${tag}: ${r.screens} screens tall, side scroll ${r.sideScroll}, unlabelled controls ${r.unlabelled}`);
    if (r.lowContrast.length) findings.push(`${tag} low contrast: ${r.lowContrast.join(" | ")}`);
    if (r.smallTargets.length) findings.push(`${tag} targets under 44px: ${r.smallTargets.join(" | ")}`);
    if (r.leftovers.length) findings.push(`${tag} demo leftovers: ${r.leftovers.join(", ")}`);
    if (errors.length) findings.push(`${tag} console errors: ${errors.join(" | ")}`);
    await ctx.close();
  }
  console.log(findings.join("\n"));
  await browser.close();
})();
```

**Slowed-down motion.** Slow every animation on the page to 10% and capture frames while a transition runs:

```js
const cdp = await page.context().newCDPSession(page);
await cdp.send("Animation.enable");
await cdp.send("Animation.setPlaybackRate", { playbackRate: 0.1 });
await page.click("#open-sheet");                       // the transition you are checking
for (let i = 0; i < 8; i++) { await page.waitForTimeout(400); await page.screenshot({ path: `slow-${i}.png` }); }
```

**Overlapping targets.** In fanned, stacked or rotated layouts, scan across them and count how much of each item is
actually tappable. Every item needs at least 44 px:

```js
const widths = await page.evaluate(() => {
  const box = document.querySelector(".deck").getBoundingClientRect(), y = box.top + box.height * 0.6, seen = {};
  for (let x = box.left; x < box.right; x++) { const el = document.elementFromPoint(x, y)?.closest(".card"); if (el) seen[el.dataset.k] = (seen[el.dataset.k] || 0) + 1; }
  return seen;
});
```

A page without its own document skeleton (an artifact fragment, a component) needs a wrapper for local testing:
`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>…</body></html>`.
Without the doctype, the browser renders in quirks mode and the measurements are wrong.

## Scorecard

Report this after building, with pass or fail for each row. Mark rows that don't apply as n/a.

| Rule | Result | Evidence |
|---|---|---|
| Interview | | the rounds asked, the confirmed summary, or the assumptions listed if the user said "you decide" |
| Scope respected | | the first answers (redesign or new look, how big, what stays), and nothing beyond them without a yes |
| Taste record and design system | | the files read, the rules and tokens reused |
| Ready to deploy | | real content and its sources, nothing invented, no demo leftovers, links checked, deploy target's limits handled |
| Usability bar | | the cold-read answers, labels that kept plain names, the one next action per zone, steps before and after |
| Task table (app) / concepts (site) | | top tasks with steps before and after / the concepts, scores and prototype |
| First-screen takes | | the takes shown and which the user picked |
| Feeling, warmth and life | | the feeling table, the neutrals' hue against the accent's, the template test, the blurred-screenshot test |
| Ban list clean | | grep for gradient, italic, monospace, `border`, `<hr`, `box-shadow`, radius, `ease-in`, `transition: all`, `scale(0)`, with a reason for each that remains |
| Structure | | lines remaining and why, ΔL\* between adjacent surfaces, reading width in ch, the zones and which dominates |
| Rejection and tokens | | the rejected fonts and layouts, the chosen faces, type sizes, radii, control heights, motion tokens |
| Motion | | animation level, frequency rule, durations, entrances and exits matched, interruptible, reduced motion, slowed-down check |
| Sound | | n/a if declined; otherwise the toggle, the sound map, each sound's source (and SOUNDS.md), music controls |
| Behaviour | | each control's working, success and failure feedback, focus on open and close |
| Phone | | thumb reach, sheets, safe areas, gesture alternatives, page height in screens |
| Accessibility | | contrast, keyboard, live regions, labels, reduced motion, sound never the only signal |
| Performance | | measured frame time and interaction cost under 4x CPU throttling |
| Bold pass (5B) | | the ladder rungs and the one built, the three signature details, the extras built |
| Lived-in (5C) | | the zoom inventory (12+ details), the signs of life used, the vernacular voice |
| Rival critique (13B) | | the rounds, each critique list, scores before and after |
| Review loop | | screenshots looked at, the findings table and what was fixed, and what couldn't be checked |
| Taste recorded | | what was written, and where |
