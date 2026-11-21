# Review: the script and the scorecard
### The script

Run `node scripts/review.js <url> [outDir]`. It needs Playwright with Chromium. It loads the page at 320, 390, 768, 1280 and
1920 px in both themes and reports:

- **contrast**, with colours resolved through a canvas so OKLCH, `color-mix()` and alpha are read correctly (text
  over an image or gradient is counted as unchecked: look at it yourself);
- **targets** under 24 px (fails) and under 44 px on touch (comfort), **controls with no accessible name**;
- **structure:** headings, `<main>`, `lang`, `<title>`, `alt`;
- **reflow** at 320 px, sideways scroll, page height in phone screens;
- **a keyboard walk:** tab order, missing focus indicators, focus covered or off screen;
- **movement still running under reduced motion;**
- **load:** LCP, layout shift, weight, script weight, font files;
- **a census** for the Phase 4 audit: borders, shadows, gradients, pills, families, type sizes, radii, small
  uppercase labels, emoji, monospace outside code;
- **`a11y-tree.txt`** for the blind walk, screenshots per size and theme, and `review.json`.

Findings in capitals must be fixed. A page fragment needs a full document wrapper with a doctype first, or the
browser renders in quirks mode and the measurements are wrong.

The script ships next to this skill as `scripts/review.js`. Run `node scripts/review.js <url> [outDir]`
(set `CHROME=/path/to/chrome` if Playwright's own Chromium isn't installed).


The script loads one URL in its resting state. For other states (a menu open, a sheet open, an error, the longest
name, a 200-item list), script the steps with Playwright, screenshot each, and look.

**Slowed-down motion.** Slow every animation to 10% and capture frames while a transition runs:

```js
const cdp = await page.context().newCDPSession(page);
await cdp.send("Animation.enable");
await cdp.send("Animation.setPlaybackRate", { playbackRate: 0.1 });
await page.click("#open-sheet");                       // the transition you are checking
for (let i = 0; i < 8; i++) { await page.waitForTimeout(400); await page.screenshot({ path: `slow-${i}.png` }); }
```

**Overlapping targets.** In stacked or rotated layouts, scan across and count how much of each item is tappable:

```js
const widths = await page.evaluate(() => {
  const box = document.querySelector(".stack").getBoundingClientRect(), y = box.top + box.height * 0.6, seen = {};
  for (let x = box.left; x < box.right; x++) { const el = document.elementFromPoint(x, y)?.closest("[data-k]"); if (el) seen[el.dataset.k] = (seen[el.dataset.k] || 0) + 1; }
  return seen;
});
```

### Scorecard

Report after building, pass or fail with evidence. Mark rows that don't apply as n/a; the Quick tier reports only
the rows marked Q.

| Rule | Result | Evidence |
|---|---|---|
| Tier, scope and context (Q) | | which, and why; nothing changed beyond the scope without a yes |
| Usability bar (Q) | | cold-read answers, task-walk clicks, steps before and after, plain names kept |
| Hundredth hour | | resume, autosave, undo, defaults, form behaviour: how each was tested |
| Interview | | rounds asked, the confirmed summary, the assumptions listed |
| Taste record, used log, design system | | files read, rules and tokens reused, what the log ruled out |
| Ready to deploy (Q) | | real content and its sources, nothing invented, links checked, target's limits handled |
| Convergence audit (Q) | | Phase 4 items in the plan and in the screenshot, with reasons; the census numbers |
| Tasks (app) or concepts (site) | | the table, or the concepts and scores |
| Takes | | the takes shown and which the user picked |
| Feeling | | the feeling table, the template test, the blur test |
| Page storyboard and silhouette (sites) | | the storyboard table; `scripts/silhouette.js` output at 1280 (and 390 if planned); flags fixed or explained; dropped template sections |
| Life budget | | the liveliness dial, each beat's live detail and the real fact or decision behind it; the pressure-pattern check |
| Bold pass and detail budget | | the rung built, what stopped higher rungs, details against the context's ceiling, extras built |
| Rejection and tokens | | font requirements and candidates, layouts set aside, palette source, the token scales |
| Structure | | lines remaining and why, the zones and which dominates, reading width |
| Motion | | level, frequency rule, durations, interruptible, reduced motion, slowed-down check |
| Sound | | n/a if declined; otherwise the toggle, the sound map, sources |
| Behaviour (Q) | | each control's working, success and failure feedback; focus on open and close |
| Every size | | 320, 390, 768, 1280, 1920: what was checked, page height in phone screens |
| Accessibility (Q) | | script findings cleared, the blind walk, keyboard walk, forced colours |
| Performance | | LCP, layout shift, weight; frame time under 4x CPU throttling |
| Rival critique | | the rounds, each critique list, scores before and after |
| Review loop (Q) | | screenshots looked at, findings table, what was fixed, what couldn't be checked |
| Recorded | | the taste record and the used-log entry, and where |


---
