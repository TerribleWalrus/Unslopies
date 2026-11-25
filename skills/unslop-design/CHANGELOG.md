# Unslop Design 1.77: what changed from 1.76

Why: a "full redesign" of a two-year anniversary page (96 photos, a date lock and a closing letter) came back as
the same vertical polaroid list with a fade-in and a three-theme switcher. No questions were asked, no music
shipped, and nothing could be touched. The user's verdict: "too static and too simple, there was not enough
redesign... where is the animation, the music, the creative mindset, the questions." The rules to prevent each of
these were already in 1.76 but nothing forced them: the tier was picked silently, the craft questions could be
skipped, the sound recommendation defaulted to "none" for anything not playful, and `references/motion.md` was
written only for UI people use every day.

## New
- The question gate: on Standard and Full, the first reply is questions, with no files, artifacts or builds in that
  turn; the scope question and both craft questions are always asked, and "just build it" never skips the craft ones.
- "Redesign means the structure can change": a reskin delivered for a redesign is a failed build; compare old and
  new silhouettes in the report.
- Phase 5, made for one person: anniversaries, birthdays, proposals, invitations and memorials are Seen once and
  Lively by default.
- Phase 11, the Expressive floor: a choreographed signature moment, three or more touchable physics interactions
  on a phone, and cause-showing motion on every beat; scroll-reveal fades don't count.
- `references/motion.md`, seen-once moments: longer choreography and process reveals, physics loops, springs that
  bounce where real objects would, one kind of motion per beat.
- `references/sound.md`, found music in practice: check the source is alive, CC0 sources that work, the iOS Safari
  audio rules (gain node instead of `volume`, play inside the tap, `audioSession`).

## Changed
- Phase 2 craft questions: Expressive and "effects and music" are the recommendations for gifts, celebrations,
  invitations and memory pages; the question also asks where the music comes from.
- Phase 12 and `references/sound.md`: sound may start on a seen-once piece's natural first gesture.
- 4.5: a theme or style switcher in place of a decision is listed as one of this skill's habits.
- Phase 18 serious-build bar: the interview's choices (scope, the animation floor, sound) are checked item by item.
- Phase 19: verdicts of "too static", "too simple" or "not enough redesign" send the work back to the gate and the
  scope, not to more effects.

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
