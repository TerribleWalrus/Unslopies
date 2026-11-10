# Unslop Design (v1.7)

A foundation skill for front-end design and web page builds. Its goal is output that looks designed by a specific studio for a specific subject, with no recognizable AI design patterns, and that stays easy to use for a first-time visitor and for a power user on their hundredth hour.

## What this skill is

Unslop Design is a foundation, not a finished design system. It sets the process and the hard rules. It does not decide the look of your project. The subject, concept, palette, fonts, layout and hero element come from the prompt you give it and from your answers to its questions. When you bring no visual direction, it brings a point of view and commits to it.

Think of it as the scaffolding: the steps every design goes through, plus the guardrails that keep the result from looking generic or feeling hard to use.

## The aim

Every rule serves three things at once:

1. **Unique to the subject.** The result could not be reskinned for another product unchanged, and it doesn't look like Claude's other work.
2. **Good taste when you bring none.** Most people can't describe what they want visually, so the skill makes confident choices on type, colour, rhythm, motion and detail.
3. **Good to live with.** A look that wins on day one and slows people down on day thirty counts as a failure, not a style.

## What's new in 1.7

- **Foundations from real sources.** A new reference, `references/foundations.md`, collects design principles read from outside sources rather than habit: NN/g's visual design principles and usability heuristics, Laws of UX, Refactoring UI, Practical Typography, data table guidance, the GOV.UK Design System, Linear's 2026 interface refresh, and research on why AI-made interfaces all converge. It covers hierarchy, grouping without boxes, OKLCH colour systems with tinted neutrals, type for reading, dense tables, and how to steer away from the median look. Every source is listed.
- **Two named looks to step away from.** The skill now names the looks Claude falls into for serious tools, so it can spot them early:
  - **Civic admin:** white boxed panels on light grey, a coloured flag or crest top-left, underline tabs with count badges and key chips, zebra tables, little status icons, Franklin or Arial.
  - **SaaS starter pack:** a dark sidebar with icon nav, a search pill and avatar, a row of KPI cards, rounded shadowed cards, Inter, zinc greys and one indigo accent.

  They aren't banned. If a plan or a first screenshot matches one, the skill takes a different path from the start instead of polishing it, keeping only the layout logic that serves the task.
- **What "modern and clean" means for serious tools.** Structure felt, not seen: space and tone before lines, navigation that recedes so the work comes forward, one primary action per view, about three type sizes per region, and related things joined visually rather than boxed.

## New since 1.6 (added in 1.65)

- **The bold pass.** The first workable idea is the floor. Before any code, the skill lists 15+ things from the subject's world and writes an escalation ladder for the first screen, from the safe template up to the subject's own ritual. It builds the highest rung that still clears the usability bar, adds three signature details and a few unprompted extras, and asks "would a studio post this screenshot?"
- **Lived-in detail.** A clean screen with nothing small in it reads as generic. Every main screen gets at least 12 details across three zoom levels (arm's length, reading, magnifier), plus signs of use and time, all taken from the subject, never ornament.
- **Rival critique.** After the first build, the skill critiques its own work as a rival studio would, scores boldness, warmth, detail, craft and usability, and does at least two rounds of fixes before you see it.
- **Context decides the spectacle.** A poster seen once can be loud (3D, kinetic type, a world to play in). A tool used all day gets its character from craft: precise type, density done well, a colour system, perfect states and shortcuts. Every unusual idea must pass the long-use test: still clear on day 1, at least as fast as the plain version by day 30, intact with real data, and drivable by keyboard.
- **Claude's own habits, named.** Grid-paper backgrounds, the paper costume, the header formula, three-pane layouts, cards with bubbles, chips everywhere, bottom toasts and cream grounds each need a reason from the subject or they go. Transit maps, museum labels, the workshop-paper costume, terminals and blueprints are banned unless the subject is that thing.
- **Navigation and the 10-minute test.** It walks the route to every task and back, and imagines the screen in use for 10 minutes straight before adding detail.
- **A toolbox for higher quality.** three.js, the Web Animations API or GSAP, D3, variable fonts and Playwright are used when the idea needs them, with notes on shipping them inside sandboxed artifacts.

## Still here from 1.6

- **An interview before it designs.** General questions first, answered in your own words, then specific ones with a recommended answer, round by round. It never asks how the design should feel. You pick from 2 or 3 quick takes of the first screen instead.
- **It asks what kind of change you want first:** redesign or new look, how big, and what must stay. Each answer decides how much of the process runs.
- **Easy to use first, then as creative as possible.** Every screen passes a usability bar (understood in five seconds, plain labels, one obvious next action, status spelled out) before its style is judged.
- **Built to ship.** Real facts are checked against sources, nothing is invented, and demo leftovers are banned.
- **Smooth, Apple-like motion** with exact curves and durations, and **opt-in sound** tied to actions, synthesized by default.
- **A browser review before reporting,** with screenshots at phone and desktop widths, slow-motion transitions, a cold read by a fresh sub-agent, and a ready-to-run audit script.

## Files

- `SKILL.md`: the process and rules. It is always loaded.
- `references/foundations.md`: design principles from outside sources, with the source list. It is loaded when planning screens and during the rival critique.
- `references/motion.md`: motion tokens, the rules for each kind of motion, and how to check them. It is loaded before any animation work.
- `references/sound.md`: the sound toggle, sound map, synthesis, music and checks. It is loaded only when you want sound.
- `references/review.md`: the browser review loop, scripts and the scorecard. It is loaded before the review.

Keep the folder together when you install it, for example as `~/.claude/skills/unslop-design-1-7/`, so the reference files are found. It replaces 1.65, 1.6, 1.5 and 1.0, so turn older versions off to stop them competing.

## What the foundation provides

- **Interview.** A grilling that starts general and ends specific, until nothing is left undecided.
- **Concept phase (sites).** Real-world moments from the subject, five metaphor-based concepts, scoring, and a prototype of the risky part.
- **Task table (apps).** Top tasks, how often each happens, and step counts before and after.
- **Ban list and habit audit.** Hard rules against common AI patterns, plus Claude's own reflexes, overused paradigms and the two named looks.
- **Foundations.** Hierarchy, Gestalt grouping, OKLCH colour, type, tables and heuristics, from cited sources.
- **Bold pass and lived-in layer.** The escalation ladder, signature details, unprompted extras and the zoom inventory.
- **Rejection protocol and detail system.** Force past the first fonts, layouts, paradigm and palette; tokens for type, concentric radius, spacing and motion.
- **Motion and sound.** Curves, durations, the frequency rule, three animation levels, reduced motion; a sound toggle, sound map and optional music.
- **UI/UX states, phone posture and accessibility.** Idle, working, success and failure for every control; thumb reach and sheets; WCAG 2.2 AA minimum.
- **Review and critique.** A browser review loop, rival-studio critique rounds and a self-test scorecard.

## What you supply

- The subject and audience (for example, a hotpot shop, a council case desk or a release poster)
- The page or pages to build, or the existing project to improve
- Any brand constraints: colours, fonts, logos, or content you already have
- Functional requirements: forms, booking, live data, or other behaviour
- Your answers to the interview. "You decide" accepts the recommended craft choices. The look is still yours: you pick from 2 or 3 takes of the first screen.

## How to use it

1. Give your subject and the pages you need, or point it at your existing project.
2. Answer the interview rounds. Confirm the summary.
3. Pick from the takes of the first screen, and review the concepts (sites) or the task table (apps).
4. Read the browser review findings, the critique rounds and the scorecard at the end. Any failed rule should be explained or fixed.

## Notes

- Fonts and layouts are chosen to avoid the usual defaults, so they may not match what you expected. Ask for a specific font or layout if you need one.
- If you want a brand look kept exactly, say so, or choose "Small changes" or "New look → Polish only" in the interview.
- Tools you use all day stay calm and fast; the big, playful ideas are saved for things you look at once, like posters and launch pages.
- Real-world facts (places, prices, hours, ratings) are only shown when they can be verified. Anything that can't be is left out and linked to a live source instead.
- Sound is off on first visit unless you choose otherwise. Your choice is remembered per browser.
