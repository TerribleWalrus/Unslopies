# Unslop Design 1.76: what changed from 1.7e

Why: comparing 1.7e, 1.75e and no-skill builds with the 12 human-made Contra Labs designs showed every AI build
converging on the same skeleton (`LR G LR G`, one ground, no XL beat), creativity spent on one hero widget, and
the rest of the page falling back to the median. The 1.7e rules that caused it: "one signature moment, then calm",
a bold-pass ladder pointed at interaction rather than composition, bans that got met by renaming, the ban on
full-width bands (one ground for the whole scroll), and checks that measured everything except layout.

Tested on Pu Nha Hotpot 9999 v1 (silhouette `F L F L L LR L G F F`) and v2 (user: v1 hero "pretty good, unique",
rest "bland" → v2 added the life budget; first v2 build still drifted to 4–5 LR beats and the silhouette check
caught it mid-build).

## New
- Principles 15–17: the page is a sequence; calm in behaviour, not composition; lively means alive with real things.
- Phase 3S 1b: sections from the subject; template sections (how it works, testimonials, FAQ, stats, CTA band…) justified one by one.
- Phase 4.7: the two-column reflex, why it happens and five ways to use the empty half without a second column.
- Phase 5: the liveliness dial (Quiet, Warm, Lively).
- Phase 6S: the page storyboard (beats with height, alignment, ground, density, live detail) and its rules; whole-page takes.
- Phase 9: the life budget, kinds of life, and "addictive by curiosity, never by pressure".
- Phase 17: `scripts/silhouette.js` and the scroll test.
- Used log records the silhouette.

## Changed
- 4.1: "flat, even build" redefined; the alternating split, the micro-split, hero-only creativity and equal-weight bands added; centred stacks, threes and splits allowed when proportion and sequence make them the subject's.
- 4.1: rolling text (marquees, tickers, drifting word strips) added as a cliché: almost never, a typical AI-design tell (user verdict, 2026-11-21).
- 4.5: the habits 1.76's own builds introduced (giant wordmark with a photo cut in, LED ticker, 3D toy, confetti, scroll meter).
- Phase 5 Occasional: "one signature moment, then calm" → calm in behaviour after it, never in composition.
- Phase 8: climb the ladder in composition for every beat, not only the hero.
- Phase 10: set aside first layout ideas per beat.
- Phase 11: ambient loops pause off screen and have a pause control.
- Sound: the repo's music rules kept (three plain sound options, music is a deliverable when chosen, the synthesized loop and its checks in `references/sound.md`).
- Appendices moved to `references/`; the review script to `scripts/review.js` (accepts `CHROME=`).
