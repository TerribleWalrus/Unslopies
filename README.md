# Unslop Design (v1.6)

A foundation skill for front-end design and web page builds. Its goal is output that looks designed by a specific studio for a specific subject, with no recognizable AI design patterns, and that feels smooth, calm and easy to use, in the spirit of Apple's design.

## What this skill is

Unslop Design is a foundation, not a finished design system. It sets the process and the hard rules. It does not decide the look of your project. The subject, concept, palette, fonts, layout and hero element come from the prompt you give it and from your answers to its questions.

Think of it as the scaffolding: the steps every design goes through, plus the guardrails that keep the result from looking generic or feeling hard to use.

## What's new in 1.6

- **It asks before it designs, and it doesn't pitch.** It asks small, easy questions built from your own prompt or existing design, and each answer leads to smaller follow-ups. You answer the vision questions (what it is, who it's for, how it should feel), and it helps you see your idea with quick visual takes such as palettes, type samples and rough wireframes. The craft questions (how far to go, how much animation, sound) come with a recommended answer you can accept with "yes". If you send a project that already exists, it looks at it first and asks whether you want a redesign or only fixes.
- **Smoother, Apple-like motion.** It uses exact easing curves and durations, and most UI animations stay under 300 ms. Actions you repeat many times a day don't animate. Things scale from the button that opened them, leave the way they came in, can be interrupted halfway, and follow your finger when dragged. Reduced-motion settings keep fades and drop movement. The motion rules draw on [Emil Kowalski's animation skills](https://github.com/emilkowalski/skills).
- **Interactive sound, if you want it.** Sound effects are opt-in and sit behind a visible on/off button. Each sound is tied to an action (a tap, a toggle, success, an error, opening a sheet) and plays at the same moment as the visual change. By default the sounds are synthesized in the browser. You can also supply your own files, or ask for royalty-free ones, whose sources and licences are listed in `SOUNDS.md`. Background music is added only when you ask for it, never autoplays, and has its own controls.
- **A browser review before reporting.** It opens the result in a real browser, takes screenshots at phone and desktop widths in both themes, and plays transitions in slow motion. It lists what is hard to use in a findings table, fixes those issues and checks again.

## What the foundation provides

- **Interview.** Small questions in rounds that grow from your answers. Vision questions are yours to answer, and craft questions come with a recommendation. It ends with a short summary in your words for you to confirm.
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
- Your answers to the interview. Say "you decide" to accept every recommended answer.

## How to use it

1. Give your subject and the pages you need, or point it at your existing project.
2. Answer the interview rounds. Confirm the summary.
3. Review the concepts (sites) or the task table (apps), and the prototype of anything risky.
4. Read the browser review findings and the scorecard at the end. Any failed rule should be explained or fixed.

## Notes

- Fonts and layouts are chosen to avoid the usual defaults, so they may not match what you expected. Ask for a specific font or layout if you need one.
- If you want a brand look kept exactly, say so, or choose "Fixes only" or "Polish" in the interview.
- Sound is off on first visit unless you choose otherwise. Your choice is remembered per browser.
