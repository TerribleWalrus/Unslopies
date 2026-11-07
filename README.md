# Unslop Design (v1.6)

A foundation skill for front-end design and web page builds. Its goal is output that looks designed by a specific studio for a specific subject, with no recognizable AI design patterns, and that feels smooth, calm and easy to use, in the spirit of Apple's design.

## What this skill is

Unslop Design is a foundation, not a finished design system. It sets the process and the hard rules. It does not decide the look of your project. The subject, concept, palette, fonts, layout and hero element come from the prompt you give it and from your answers to its questions.

Think of it as the scaffolding: the steps every design goes through, plus the guardrails that keep the result from looking generic or feeling hard to use.

## What's new in 1.6

- **It asks what you want before it designs, general first, and it doesn't pitch.** It never asks how the design should feel: most people can't answer that. Like a grilling, it maps your decisions as a tree. After the first questions about what kind of change you want, it asks a few open, general questions built from your project (what it's for, who uses it and how often, the one thing it must get right, why now), which you answer in your own words. Each later round asks the specific questions those answers open up, each with a recommended answer you can accept with "yes", until nothing is left undecided. The craft questions (how far to go, how much animation, sound) are part of those later rounds.
- **Smoother, Apple-like motion.** It uses exact easing curves and durations, and most UI animations stay under 300 ms. Actions you repeat many times a day don't animate. Things scale from the button that opened them, leave the way they came in, can be interrupted halfway, and follow your finger when dragged. Reduced-motion settings keep fades and drop movement. The motion rules draw on [Emil Kowalski's animation skills](https://github.com/emilkowalski/skills).
- **Interactive sound, if you want it.** Sound effects are opt-in and sit behind a visible on/off button. Each sound is tied to an action (a tap, a toggle, success, an error, opening a sheet) and plays at the same moment as the visual change. By default the sounds are synthesized in the browser. You can also supply your own files, or ask for royalty-free ones, whose sources and licences are listed in `SOUNDS.md`. Background music is added only when you ask for it, never autoplays, and has its own controls.
- **Life and warmth are built in, not added on.** The feeling is read from what you said you want, with each feeling word tied to one of your answers, and turned into decisions about the colour temperature, type, rhythm, the form of the first screen, motion, copy and sound before any code is written. Decoration on top of a generic layout doesn't count. Before the full build, you're shown 2 or 3 quick takes of the first screen to pick from, even if you said "you decide".
- **Easy to use first, then as creative as possible.** Every screen must pass a usability bar before its style is judged: a first-time user understands it in five seconds, labels keep their plain names, there is one obvious next action, and every status is spelled out. Creativity goes as far as it can in the form, the materials and the motion, never in renamed labels or a metaphor you have to decode. The review includes a cold read by a fresh sub-agent that has never seen the project.
- **Built to ship, users first.** Everything is built for real use. Real-world facts are researched and checked against sources, nothing is invented (no fake ratings, hours or reviews), and demo leftovers are banned. When a creative idea makes something harder to use, the idea is reshaped until it works for people, never swapped for a template. Long lists on phones are measured and reshaped, for example into a swipeable row.
- **A browser review before reporting.** It opens the result in a real browser, takes screenshots at phone and desktop widths in both themes, and plays transitions in slow motion. It lists what is hard to use in a findings table, fixes those issues and checks again. The skill includes a ready-to-run review script that measures contrast, tap target sizes, sideways scroll, page height and demo leftovers.
- **It asks what kind of change you want first.** For an existing project the first question is redesign or new look. A redesign then asks how big: full redesign, change the layout, keep the layout, or small changes. A new look asks how far: a whole new style, the same brand made fresher, or polish only. Then it asks what must stay, as options you tap. Each answer picks how much of the process runs, so a small fix doesn't go through the full concept process.
- **It respects what's already there and where it ships.** It reuses your existing design system and tokens, checks what your deploy target blocks (autoplay, motion sensors, external fonts) and plans fallbacks, and picks fonts that cover your audience's script.

## Files

- `SKILL.md`: the process and rules. It is always loaded.
- `references/motion.md`: motion tokens, the rules for each kind of motion, and how to check them. It is loaded before any animation work.
- `references/sound.md`: the sound toggle, sound map, synthesis, music and checks. It is loaded only when you want sound.
- `references/review.md`: the browser review loop, scripts and the scorecard. It is loaded before the review.

Keep the folder together when you install it, for example as `~/.claude/skills/unslop-design-1-6/`, so the reference files are found.

## What the foundation provides

- **Interview.** A grilling that starts general: open questions about what you want, then specific questions with recommended answers, round by round, until nothing is left undecided. It never asks how it should feel.
- **Concept phase (sites).** List real-world moments from the subject, write five metaphor-based concepts, score them, and prototype the risky parts before building the full page.
- **Task table (apps).** Top tasks, how often each happens, and step counts before and after.
- **Ban list.** Hard rules against common AI patterns: lines as the main structure, gradients, decorative italics, monospace as flavour, glossy orbs, generic hero-plus-three-cards layouts, janky motion and autoplaying sound.
- **Rejection protocol.** Force past the first obvious choices for fonts, layouts, visual paradigm and palette.
- **Detail system.** Tokens for type, concentric radius, spacing and one motion language.
- **Motion.** Curves, durations, a rule for how often something can animate, three animation levels (Calm, Standard, Expressive), and reduced-motion handling.
- **Sound.** A toggle, a sound map, synthesized or supplied sounds, and optional interactive music.
- **UI/UX states.** Every control gets four states: idle, working, success and failure.
- **Phone posture.** Thumb reach, bottom sheets, safe areas and gesture alternatives.
- **Accessibility.** WCAG 2.2 AA minimum: contrast, keyboard paths, live regions, reduced motion, and sound that is never the only signal.
- **Hero element (sites).** One detailed, interactive element that comes from the subject and is keyboard-accessible.
- **Browser review loop.** Screenshots, a slow-motion check of transitions, probes for hard-to-use spots, and a findings table.
- **Self-test scorecard.** A pass/fail table to confirm each rule was followed.

## What you supply

- The subject and audience (for example, a hotpot shop or a portfolio)
- The page or pages to build, or the existing project to improve
- Any brand constraints: colors, fonts, logos, or content you already have
- Functional requirements: forms, booking, live data, or other behavior
- Your answers to the interview. "You decide" accepts the recommended craft choices (scope, animation, sound). The look is still yours: you are shown 2 or 3 takes of the first screen to pick from.

## How to use it

1. Give your subject and the pages you need, or point it at your existing project.
2. Answer the interview rounds. Confirm the summary.
3. Pick from the 2 or 3 takes of the first screen, and review the concepts (sites) or the task table (apps).
4. Read the browser review findings and the scorecard at the end. Any failed rule should be explained or fixed.

## Notes

- Fonts and layouts are chosen to avoid the usual defaults, so they may not match what you expected. Ask for a specific font or layout if you need one.
- If you want a brand look kept exactly, say so, or choose "Small changes" or "New look → Polish only" in the interview.
- Real-world facts (places, prices, hours, ratings) are only shown when they can be verified. Anything that can't be is left out and linked to a live source instead.
- Sound is off on first visit unless you choose otherwise. Your choice is remembered per browser.
