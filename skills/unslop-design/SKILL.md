---
name: "unslop-design"
description: "Unslop Design 1.77: usability first, then bold, lively, human-made front ends whose whole-page composition (not only the hero) comes from the subject, checked with a page storyboard and a silhouette script so pages stop converging on alternating left/right sections. Use when the user asks for 1.77 or 1.76, Unslop Design, or wants a site or app designed, restyled or reviewed so it does not look AI-made, generic or bland."
---

# Unslop Design 1.77

Built on 1.76, which was built on 1.7e. 1.77 adds hard gates for the interview, for redesign depth, for the
Expressive animation floor and for music, after a redesign shipped with no questions, no music and no new
structure. Run it instead of 1.76, 1.7, 1.7e or 1.75e, never together with them. `CHANGELOG.md` says what changed.

It covers websites and apps alike: landing pages, web apps, app shells, chat UIs, dashboards, settings screens,
mobile layouts, posters, skins and themes for existing apps, redesigns, design reviews, animation passes and sound.

## The aim

Make front ends that people are comfortable using every day and every hour, that a person with taste would be
proud to have designed, and that nobody could get from a one-line prompt to an AI. In this order:

1. **Good to live with.** Easy for a first-time visitor, fast and calm for someone on their hundredth hour. Easy to
   navigate, easy to understand, easy to use, never a burden. This is the main feature. A look that wins on day one
   and slows people down on day thirty is a failure, not a style.
2. **Unique to this subject.** It could not be reskinned for another product unchanged, and it does not look like
   other AI work, including other work made with this skill.
3. **Good taste when the user brings none.** Most people can't describe what they want visually. Bring a point of
   view on type, colour, rhythm, motion and detail, and commit to it.

**Order of authority.** The user's words, then the project's existing design system, then the usability bar
(Phase 1), then everything else in this file. When two rules here conflict, the one that makes the product easier
to live with wins. Write down why.

**How to read examples in this file.** Every example is an illustration from a subject that is not yours. Never
reuse one. If a detail in your plan also appears as an example anywhere in this file, replace it: it came from the
file, not from the subject. Where this file could have listed examples, it asks questions instead. Answer the
questions for this subject.

## Pick the tier, then the scope

**The tier decides how much process runs.** Pick it yourself, say which in one line, and let the user change it.

| | Quick | Standard | Full |
|---|---|---|---|
| For | one component, one state, a copy fix, one screen tweak, a review comment | one screen or a few, a restyle, small changes across a project | a new product, a full redesign, a multi-page site |
| Interview (2) | at most one question, only if a wrong guess is costly | first questions, then one round | until the frontier is empty |
| Tasks or concepts (3) | skip | task table, or 3 concepts | full |
| Page storyboard (6S) | skip | sites: yes | sites: yes, plus whole-page takes |
| Feeling table (7) | skip; match what exists | yes | yes |
| Bold pass and detail (8, 9) | skip | yes, sized by context | yes, sized by context |
| First-screen takes | none; before and after | 2 | 2 or 3 |
| Rival critique (18) | one pass | one round | two rounds |
| Always | usability bar (1), convergence check (4), behaviour (13), accessibility (15), the review script, the silhouette check on sites, and looking at the result (17) | same | same |

**The scope decides what may change** (existing projects; the user picks it in the first questions):

| Scope | What changes | What stays |
|---|---|---|
| New look | colour, type, shapes, motion, sound | the layout and the parts |
| Small changes | spacing, type, colour, states, motion, fixes | fonts and layout unless asked |
| Keep the layout | the parts inside each section: form, controls, states | layout and navigation |
| Change the layout | the layout of each screen | pages and navigation |
| Full redesign | concept and structure | content and wiring |

Nothing outside the scope changes without a yes.

**The question gate (Standard and Full, no exceptions).** The first reply to a redesign, a new site or app, or
anything made for one person is questions, not code. In that turn no files are written, no artifact is published
and no build starts. Use the host's question tool when there is one. The first round always includes the scope
question (existing projects) and both craft questions (animation level and sound, Phase 2), even when the request
looks clear. "Just build it" skips the open questions, never the craft ones: ask those two in one short message,
then build. If an earlier round in this conversation built without asking, say so and ask now. Skipping the
gate is the most common way this skill fails, so check it before every first build.

**"Redesign" means the structure can change.** A build that keeps the old section order and the old components
and changes only colour, type, texture or adds a theme switcher is a reskin. Delivering a reskin when the user
said redesign is a failed build, however polished. If it is unclear which they mean, that is the scope question.
For a Full redesign, compare the silhouette (17) of the old page with the new one in the report: if they match
beat for beat, it is not done.

## How to run

1. **Read the room** (Phase 0): taste record, used log, design system, deploy target, real content.
2. **Hold the usability bar** (Phase 1) from the first sketch to the last fix.
3. **Interview** (Phase 2) as far as the tier says.
4. **Plan on paper:** tasks or concepts (3), convergence check (4), context (5), feeling table (7), bold pass (8),
   detail budget and life (9), rejection and tokens (10), sound map if there is sound (12).
5. **Storyboard the whole page** (6S, sites): every section as a beat with its height, alignment, ground and
   density, before any code. The creativity goes into the sequence, not only into the first screen.
6. **Show takes** of the first screen and of the whole-page silhouette, and let the user pick or mix.
7. **Build** (Phases 6 to 16) as seriously as a paid client build. Run the silhouette check after the first
   full build, not only at the end: the left/right reflex comes back while you build.
8. **Review in a real browser** (17), then **critique like a rival studio** (18).
9. **Record and report** (19): the taste record, the used log with the silhouette, the scorecard.

Planning notes go in your reply or the project's design file, never in the shipped product. Write them down: the
written steps are what make the output different.

References next to this file: `references/foundations.md` (read when planning a screen), `references/review.md`
(the review script and the scorecard), `references/motion.md` (before any animation), `references/sound.md` (only if
the user said yes). Scripts: `scripts/review.js` and `scripts/silhouette.js`.

## Principles

1. **People live in an interface.** Comfort beats rigour and beats spectacle. Judge every idea on the hundredth use.
2. **Ask what they want, don't pitch.** What it is, who it is for and what they want from it are the user's ideas.
3. **Build for deploy, not for a demo.** Real data, real links, final copy.
4. **Creative in the form, plain in the words and the controls.** When a creative choice hurts usability, change
   the form of the idea until it serves the user. Don't drop it for a template, and don't keep it at the user's
   expense.
5. **The content is the life, and the chrome recedes.** Never override a content setting the user chose.
6. **Separate with space and surfaces, not lines.**
7. **Temperature belongs to the ground,** not to an accent or a badge.
8. **Motion is physics, sound is feedback.** If the user waits for either, or notices it on the hundredth use, it
   is wrong.
9. **Behaviour and posture are design.** Where focus lands, what Escape does, what a button says while it works. A
   phone is held with a thumb, on a bus, in the dark.
10. **Be the bolder studio, inside the bar.** The first workable idea is the floor. Extend it without being asked,
    as far as the context allows (Phase 5).
11. **Detail is information or the subject's character, never ornament,** and never a quota to fill.
12. **One source.** One token file, one icon set, one motion language, one sound palette.
13. **What the user sees is the real test.** Their data, device, settings and network. Measure, then look.
14. **Taste is evidence.** Every verdict the user gives is a rule for next time. Write it down.
15. **The page is a sequence, not a screen.** Most of a site is below the first screen. Proportion, scale, pacing,
    grounds and emptiness across the scroll are a creative lever as strong as any interaction. A designed hero over
    a template body is a template.
16. **Calm in behaviour, not in composition.** Calm means nothing nags, blinks or blocks. It never means "fall back
    to the default layout".
17. **Lively means alive with real things.** Energy comes from the subject's own live facts, things the visitor can
    do with their hands, and rewards for curiosity. Never from pressure, fake urgency or ornament.

## Phase 0. Read the room

- **The taste record.** Look for PROJECT_MEMORY.md, DESIGN.md, PRODUCT.md, CLAUDE.md, a brief and notes from
  earlier rounds. If the user asked for something this skill bans, build it. If they banned something this skill
  allows, it is banned.
- **The used log.** Look for `UNSLOP_LOG.md` in the project, in the skill's own folder or repo, or pasted by the
  user. It lists what earlier builds used (Phase 19 has the format). Nothing in its last five entries is reused:
  not the fonts, the palette source, the main-view form, the hero mechanic or the signature details. If there is no
  log and no way to keep one, say so in the report and print the new entry for the user to save.
- **The existing design system.** Reuse its tokens, components and conventions. This skill fills the gaps.
- **An existing project.** Run it, screenshot it at 390 px and 1280 px, try its main tasks, run the review script
  on it, and note the worst 3 to 5 problems. These are the evidence for the first questions.
- **The deploy target.** A website, an app shell, a sandboxed embed or artifact, a webview, an email. Check what it
  blocks (autoplay, device APIs, pop-ups, external fonts and scripts, storage) and plan a fallback for each
  interaction that depends on one.
- **The audience's language.** If they read another script, choose faces that cover it, test the longest real
  words, and use the local currency, date and number formats.
- **Real content, verified.** Build with the user's content. Research real-world facts and check each against a
  current, reliable source; keep the sources.
  - Never invent facts and present them as real: ratings, hours, prices, quotes, testimonials, statistics, people.
  - If a fact can't be verified, leave it out and link to a live source.
  - If the user has the data, ask for it.
  - Placeholder content is only for a mockup the user asked for, labelled as one.
- **Pick the mode,** with one line on why. A product with both gets each surface in its own mode.

  | | Site | App |
  |---|---|---|
  | Who | a first-time visitor, for minutes | a returning user, often, for longer |
  | Their job | understand and act once | do the same few tasks fast, many times |
  | Start from | the subject's world and concepts (3S) | tasks and how often they happen (3A) |
  | Freshness test | "Did they see this layout on another site this week?" | "Is this annoying on the 100th use?" |

- **Reskinning an existing app.** List the hooks its code binds to (IDs, classes, attributes, events). Change the
  appearance, keep the wiring, test the original's interactions before and after. Turning the skin off restores the
  original look.

## Phase 1. The usability bar (sites and apps, every tier)

Every screen clears this before any creative choice is judged. A take that fails it is reshaped before it is shown.

**At first sight**
- **The five-second test.** A first-time viewer can say what this is, what is happening now and what to do next.
- **Plain names.** Headings, labels and buttons use the words people already use. The concept lives in the form,
  never in renamed labels or jargon from a metaphor. If a label needs the concept explained, it fails.
- **One obvious next action** per zone, and one primary action per screen where the screen allows it.
- **Status is spelled out.** Every state has a word, every number a label and a unit. Nothing means something by
  colour or metaphor alone.
- **The metaphor explains or it goes.** A creative element must make the information easier to read than a plain
  version would. If it has to be decoded, reshape it.
- **Conventions where people expect them.** People spend most of their time in other products. Navigation where
  navigation goes; links look like links; a control that behaves like a switch looks like one.
- **Details on demand.** What the next decision doesn't need is one step away, not on screen.
- **Count the steps.** A creative layout never adds a step to a top task.

**On the hundredth hour** (apps, and any site people return to)
- **Resume.** Reopening puts people where they left off: the same place, scroll position, filters, tab and draft.
- **Nothing is lost.** Drafts save themselves and say so. A failed submit keeps everything typed. Going offline
  keeps the work and says what will happen.
- **Undo beats "are you sure?".** Destructive actions are undoable (a short undo, a trash). A confirmation dialog
  is only for what truly can't be reversed, and it names the thing being destroyed.
- **Good defaults.** The last-used or most common value is already chosen.
- **Stable.** Nothing moves under the pointer. Layout doesn't shift when data arrives. Lists keep their order unless
  the user sorts them. The same thing is in the same place under the same word on every screen.
- **Quiet.** No badge, banner, tip or notification unless the user must act on it. Nothing nags twice.
- **Fast paths.** The top tasks have keyboard shortcuts, shown where the action is. Rare things are found by
  search. Repeated work can be done in bulk.
- **Forms respect the person.**
  - A visible label above every field; a placeholder is not a label.
  - The right input type, `inputmode` and `autocomplete`, so keyboards and autofill help.
  - Validate when the field is left, not on every keystroke; say what is wrong and how to fix it, next to the
    field, in words.
  - Never clear input on an error. Never block paste. Never disable submit without saying what is missing.
  - Ask only for what is needed. Long forms are split into steps that save as they go.

## Phase 2. Interview the user

The interview draws out what the user wants. It asks rather than proposes, and it never asks how the design should
feel: people can't answer that. The feeling is read from what they want (Phase 7) and judged in the takes.

**The decision tree**
- **Root (existing projects): what kind of change.** Show the worst 3 to 5 findings from Phase 0, then ask one at
  a time: redesign or new look; how big or how far; what must stay (several picks, taken from what the project
  has); for small changes, confirm the fix list worst first. The answers pick the scope.
- **Then general.** What this is for, who uses it and how often and where, the one job it must get right, why now.
  Ask only what the project and earlier answers don't already tell you.
- **Then specific.** Each answer opens the decisions that depend on it: a task's steps, a screen's main action,
  what a status means, an edge case.
- **The frontier** is every open decision whose parent is answered. Each round asks the whole frontier (3 to 5
  questions, the ones that change the most work first), then waits.
- **Done** when the frontier is empty or the tier's limit is reached. Confirm a five-line summary in the user's own
  words. Whatever was not asked is listed as an assumption.

**Kinds of question**
- **Choice questions** (the root): 2 to 4 options with a one-line description each, and room for something else.
  Use the host's question tool when there is one. No recommendation unless the user's own words already point to
  an option; then mark it and quote those words.
- **General questions:** open, answered in their own words. No options, no recommended answer, no leading examples.
  Ask, then wait. Don't rephrase their answer into your words.
- **Specific and craft questions:** each gets a recommended answer, worded so that "yes" accepts it. The
  recommendation comes from their earlier answers and the Phase 0 evidence, never from taste; say which. What
  belongs to the user alone (names, content, what must stay) gets no recommendation.
- **Craft questions to cover (always, Phase 2 gate):** animation level (Calm, Standard, Expressive; recommend Calm
  for tools used daily, Standard for most products, Expressive for marketing, anything game-like, and anything made
  for one person: an anniversary, a birthday, a proposal, an invitation, a memorial), and sound, asked as three
  plain options: none, sound effects only, sound effects and background music. Recommend none for tools; recommend
  effects and music for gifts, celebrations, invitations and memory pages, and for anything playful, musical, a
  game or for children. Ask where the music comes from (their own file, a free CC0 track you find, or a
  synthesized loop). Repeat the choices back in the summary ("Expressive, effects and music"), because they decide
  what gets built and what the build is checked against.

**How to ask**
- **Built from their project.** A good question could only be asked of this user: it uses their project's name, a
  screen they have, a word they used.
- **About real moments, not opinions.** The last time something went wrong, what they did instead, what they would
  keep if they could keep only one thing. One concrete thing per question. Never "describe your vision".
- **Grow questions from answers.** Stop when the answer would no longer change what you build.
- **Look up facts yourself.** Ask only for what only they know.
- **Number every question.** Give the recommended answer on its own line under specific and craft questions.
- **"Just build it"** means take the recommendations, list them as assumptions, and ask again with the takes.

**Help them see it.** Before the full build (Standard and Full), show quick takes of the first screen. Each reads
the feeling a different way, each passes the usability bar, and at least one sits on the highest rung the context
allows (Phase 8). They are rough but real screenshots. The user's pick decides the feeling.

## Phase 3A. App: start from the tasks

1. **Who and where.** Device, posture (desk, sofa, one-handed phone), session length, lighting, network, installed
   or in a tab.
2. **The task table.** The top five tasks, how often each happens, its step count now and the target.

   | Task | How often | Steps now | Target |
   |---|---|---|---|

   "How often" also decides motion, sound and decoration: the more often, the less of each.
3. **Place by frequency.** Used every turn: visible and within reach. Daily: one step away. Weekly: two. Rare: a
   menu or search. Anything that stays on screen serves a top task.
4. **Put the main action where the hand is.** On a phone, the bottom third. On a desk, next to where the eyes are.
5. **Take a real data inventory.** The longest name, a 200-item list, the empty state, a single item, an error, a
   slow load. Design for these, not for four tidy rows.
6. **Design the dominant state first:** the one the app spends the most time in.
7. **Walk the route.** Write how someone gets to every task from a cold start and back. Two to four top-level
   places is plenty. Every place says where you are, and "back" always works the same way.

## Phase 3S. Site: concept, then prototype

1. **The subject's world.** Answer the generator questions in Phase 8 for this subject.
2. **Sections from the subject, not the template.** Write the list of sections this site would have if no website
   template had ever existed: what does a visitor of this world need to see, decide and do, in what order? Then
   take the usual sections one by one (how it works, features in three cards, testimonials, FAQ, stats band, logo
   cloud, call-to-action band, newsletter) and keep each only with a reason from this subject and real content to
   fill it. Most go. Write which were dropped.
3. **Concepts from the interview** (3 for Standard, 5 for Full). Start from the user's words, not your favourites.
   Each is one idea the page is organised around, what the visitor does with their hands, and how each section
   follows from it. At least one concept has no metaphor at all: its character comes from type, colour,
   composition and the content itself.
4. **Score and pick.** Rate 1 to 5 on clarity, accessibility, fit, freshness (against the used log and Phase 4),
   fascination and feasibility. Clarity and accessibility under 4 disqualify. One line on why the runner-up lost.
5. **Prototype the risky part first,** alone. It must run smoothly, read at phone width, pass Phase 4, and have a
   keyboard path and a reduced-motion path.
6. **The signature moment.** One main one, from the subject. It teaches or sells something real, has a full
   keyboard and screen-reader path, and a pause control if it moves on its own for more than 5 seconds. A site
   whose visitors come to do one thing quickly (book, pay, find the hours) may need none: then the craft is the
   signature. The signature never excuses the rest of the page: every other beat still gets its own form (6S)
   and, in a lively build, its own live detail (9).
7. **Multi-page sites.** Shared header, footer, stylesheet and script; `aria-current="page"`; one job and one
   `<title>` per page.

## Phase 4. Convergence: what to step away from

Models sample the middle of what they have seen. Four layers of default follow, from the web's to this skill's
own. Check the plan against all four before building, and the first screenshot after.

### 4.1 Clichés (never ship unless the user asks)

| Cliché | The tool is fine when |
|---|---|
| Lines as the main structure: a hairline between every row, section, header and sidebar | dense tables, an input's outline, a scroll edge |
| Boxes for everything: every group a bordered card, boxes inside boxes | a card groups one thing the user acts on as a unit |
| A flat, even build: every section about one screen tall, the same weight, the same ground, the same alignment | never |
| The alternating split: a heading or text block on one side and a picture, list or form on the other, section after section (silhouette `LR LR LR` or `LR G LR G`) | a split where two things are genuinely compared, at most a third of the beats |
| The micro-split: every section head set as heading left, paragraph right | the paragraph is a real second thing (a live status, a price), not the heading's lead |
| Creativity spent on the first screen, then the median below it | never |
| Bands of equal weight: every section a full-width stripe of the same height and density | bands that change height, density and ground to pace the page (6S) |
| The template app reskinned: header, chips, a list of rounded cards, a bottom button | the user asked for plain, or the content is a dense working list |
| Generic site layouts: hero plus 3 cards, bento grid, split hero, logo cloud, testimonial carousel | never as the page's skeleton. The primitives themselves (a centred stack, three of something, a split) are allowed where proportion, scale and sequence make them this subject's; the silhouette decides, not the name |
| Generic app layouts: a dashboard of identical cards, one grey with borders between everything | never |
| Creativity hidden behind a button while the first screen stays generic | never |
| Decoration as life: stickers, badges, meters or ornaments on an unchanged generic structure | the element carries real information |
| A cool grey shell under a warm subject | the subject itself is cool |
| Decorative gradients on backgrounds, text, buttons, borders, glows | a scrim over an image or a scroll-edge fade nobody sees as a gradient |
| Glowing, pulsing or floating orbs and blobs, glossy particles | never |
| A shadow on every card, hover lift plus shadow | something that really floats: menus, sheets, dialogs, a dragged item |
| Pills on everything, a radius picked per element | within one concentric radius scale |
| Coloured accent bars on the side of cards | a small marker that carries meaning (unread, current, error) |
| Italic as decoration | the content's own meaning |
| Monospace for numbers, labels or "tech" flavour | code and anything typed exactly; numbers use `tabular-nums` |
| Eyebrows: a small uppercase label above every heading | a lead-in that is part of the copy |
| Motion "because": fade-up on every section, scroll-reveal from opacity 0 | the motion explains a change of state, or a reveal on a few chosen elements that still read with motion off |
| Rolling text: marquees and scrolling strips of words (a band of item names or slogans sliding across the page, an endless ticker under the header, outlined giant words drifting by) used as "energy" | almost never. Moving text can't be read, can't be scanned, and is now one of the surest signs of an AI-made page. Allowed only when the moving content is information people would wait for (a live departures board, a real feed of changes) or the subject literally is a ticker; then it is pausable, stops under reduced motion and the same content is readable as still text. Give energy with scale, colour, a live fact standing still, or a thing the visitor can move |
| Janky motion: `ease-in` on UI, `scale(0)`, `transition: all`, animating width, height, top or left, input blocked | never |
| Animating actions repeated 100+ times a day | never |
| Sound that autoplays or plays on hover, keystroke or scroll; sound as the only signal | never |
| Grey on grey: secondary text so dim the app reads as disabled | never |
| The same tall card repeated for screen after screen on a phone | never; reshape it (Phase 14) |
| Invented facts shown as real; demo leftovers | a mockup the user asked for, clearly labelled |
| Emoji as icons | never |
| Purple-blue, cream plus terracotta, black plus one neon accent, brown on brown sold as "warm" | never |

### 4.2 Claude's visual habits (each needs a written reason from this subject, or it goes)

- Grid, dot or graph-paper backgrounds; fine noise on every surface.
- A cream, beige or parchment ground as the default "warm".
- A serif display face over a grotesk body, by reflex.
- Every item a rounded card with a soft shadow.
- Chips and pills for every tag, filter and status.
- The header formula: logo left, greeting, search pill, primary button right.
- Three panes by reflex: nav list, content, inspector.
- A legend, caption or "example data" label under everything.

For each one found, don't swap in a stock replacement. Ask what this part is for on this screen, and whether it is
needed at all.

### 4.3 Conventions to keep (change the skin, never the behaviour)

These look familiar because they work. Restyle them freely; don't replace them with something cleverer.

- **Switches** for settings that are on or off and apply at once. Exact typed values only where precision matters.
- **Actions people need are visible** or behind one clearly marked "more" control. Hover may add shortcuts on a
  desktop; it never hides the only way to do something, and touch always has the same actions.
- **Who said what** is unmistakable in a conversation, by position, name or both.
- **Confirm in place** when the change is on screen. A transient message is right for something with no place on
  screen, and it carries Undo when the action can be undone.
- **Standard gestures and keys** do the standard thing: Escape closes, Enter submits, back goes back.

### 4.4 Paradigms Claude overuses (banned unless the subject is this thing, or the user asks)

- transit and metro maps, route lines with stations, tickets and boarding passes;
- museum labels, plinths, exhibits;
- the paper costume: tilted sheets, pins, tape, stamps, chalk, receipts, handwriting fonts, torn or deckled edges;
- terminals, CRT scanlines, blueprint grids, newspaper broadsheets;
- a "hand-drawn", "sketch" or wobbly-line look applied to a digital product.

A paradigm is not a concept. If the first idea is a familiar real-world metaphor laid over the data, it is usually
one of these.

### 4.5 This skill's own habits

A skill that pushes away from the median creates a second median. These are the moves earlier versions of this
skill pulled toward. Each is allowed only with a reason that comes from this subject and that would not apply to
the last project:

- a theme or style switcher offered instead of a decision (three skins of one layout is a reskin, not a
  redesign; pick one direction and commit, and put the other ideas in the takes);
- the main view turned into a physical object or place (skeuomorphism as the default answer to "be bold");
- a warm dark ground with one earthy accent;
- signs of wear, marks and "imperfection" added to make a screen feel lived in;
- one interactive toy as the hero of every site;
- settings and filters rewritten as sentences;
- a characterful display face over a quiet body face;
- a material texture on every surface;
- the brand name or number set at full screen width with a photo cut into it;
- a dot-matrix or LED ticker, or any scrolling strip of words, as the "live" layer (see rolling text in 4.1);
- a 3D object to play with as the main moment;
- confetti as the reward;
- a thermometer, progress line or other scroll meter on the page edge.

### 4.6 Named looks for serious tools (don't polish them; take a different path from the start)

| Look | How to spot it |
|---|---|
| **Civic admin** | white panels on light grey, each boxed with a 1px rule; a coloured band top-left; underline tabs with count badges; zebra tables with a coloured selected-row bar; status icons in front of coloured words; a default system or civic sans |
| **SaaS starter pack** | dark or zinc sidebar with icon and label nav; top bar with search pill and avatar; a row of KPI cards; rounded cards with soft shadows; a default geometric sans; zinc greys; one indigo, violet or blue accent |

"Modern and clean" for a serious tool means: structure felt, not seen; navigation that recedes; tinted neutrals
built from this product's own hue; one primary action per view; hierarchy from weight and colour; things that
belong together joined rather than boxed. The character comes from a pinned design language (a type system, a
colour model, one or two signature parts), not from a costume.

### 4.7 The two-column reflex (why pages converge on left/right)

The chain is mechanical, not taste: prose is capped at a readable line length, so on a wide screen half the width
is empty; the empty half gets filled with a paired thing; repeated per section, the page becomes `LR LR LR`.
Banning "split hero" doesn't stop it, it only gets renamed (photos turned into radio buttons are still a split).

Solve the empty half without a second column:
- **scale:** the one thing gets bigger (type as the layout, a full-bleed picture, a giant number);
- **emptiness:** a narrow column with real margins, off-centre or centred, is a decision, not a gap;
- **overlap and pinning:** put the text, controls or cards onto the object they belong to (labels on a map,
  a score panel over the game, prices on the photo of the counter);
- **stacking:** heading, then the line under it, then the thing, each at its own width;
- **the content's own form:** a timeline, a ruler, a plan, a calendar strip that wants the full width.

A split stays when two things are genuinely being compared or used together and the eye needs both at once.

**The audit.** Before building, list which items from 4.1 to 4.7 your plan contains. After the first screenshot,
run the review script and read its census (borders, shadows, gradients, pills, families, sizes, radii, small
uppercase labels, emoji) against the plan, and run the silhouette check (17). All three go in the report.

## Phase 5. Context decides everything else

Pick the context. It sets the ceiling for spectacle, the bold pass (8), the detail budget (9) and the critique
weights (18).

| Context | For instance | Spectacle | Where the character comes from |
|---|---|---|---|
| Seen once | a poster, an invitation, a launch page | as much as the idea can carry | concept, motion, materials |
| Occasional | a marketing site, a report, onboarding | one signature moment; calm in behaviour after it, never in composition | the first screen's idea; a page sequence with varied beats; type and colour throughout |
| Daily | a portal, a chat client | none in the path of a task | type, colour, rhythm, voice, perfect states |
| All day | case work, dashboards, editors, admin | none; speed is the delight | typography, density done well, a colour system, states, shortcuts |

**The long-use test.** For every metaphor, signature form or unusual component, answer in the plan:
- **Day 1:** is it clear?
- **Day 30:** is it at least as fast as the plain version? Can it be scanned in a second?
- **Real data:** does it hold 200 items, long names, empty and error states without breaking its form?
- **Power user:** can it be driven entirely by keyboard, with no animation in the way?

If it only wins on day 1, it belongs in a seen-once context. A metaphor the user has to translate back into data
is a gimmick.

**Made for one person.** An anniversary page, a birthday, a proposal, a wedding invitation, a memorial, a
"made this for you" gift is Seen once and Lively by default, however many photos or words it holds. It is read
slowly, once or twice, by the person it is for, and the waiting and discovering are part of the gift. A long list
of photos with a fade-in is the template for this context; the subject's own world (how these memories were
made, kept and found) decides the sequence instead.

**The liveliness dial.** Separate from the context: how much energy the user asked for. Quiet (the default for
daily and all-day tools), Warm (most sites), Lively (the user asked for energy, play, "addictive", "fun", or the
subject is food, entertainment, a game, children). The dial sets the life budget in Phase 9. It never lowers the
usability bar, and Lively in a daily tool still keeps every task path quiet.

**The 10-minute test.** Imagine the screen in front of you for 10 minutes of real use. Is the body text
comfortable, not maximum contrast? Is anything moving, blinking or pulsing that you would want to switch off? Are
the margins quiet? Fix what fails before adding detail.

## Phase 6. Structure: space first, lines last

**The separation ladder.** Stop at the first rung that works:
1. **Space.** The gap inside a group is at most half the gap between groups.
2. **Alignment.** Shared edges and baselines.
3. **Tonal surface.** One step off the ground, a lightness gap of at least 5 L\*.
4. **Elevation.** A soft, wide, low-opacity shadow, only for something that overlaps other content.
5. **Line.** Only for dense tables, input outlines and scroll edges, derived from its parent surface.

Every `border`, `<hr>` and `box-shadow` needs a reason you could write down.

**Layout from content geometry**
- **Zones.** 3 to 5 zones of different weight per screen: one dominant, the rest receding. This is a rule for
  one screen, not a reason to put several things side by side in every section.
- **Lists are as wide as their names.** Truncate long names, with the full name available.
- **Blur test.** Blur a screenshot by about 8 px. You should see a few shapes of different sizes, not stripes.

**One set of numbers** (used everywhere in this file)

| | Floor (never below) | Comfort target |
|---|---|---|
| Body text size | 16 px | 16 to 18 px |
| Line height, body | 1.4 | 1.45 to 1.6 |
| Line length, prose | 45 to 90 characters | 60 to 75 (`max-width` in `ch`) |
| Contrast, body text | 4.5:1 | about 10:1 primary, 7:1 secondary, never pure black on pure white for long reading |
| Contrast, large text and UI parts | 3:1 | 4.5:1 |
| Targets | 24 px | 44 px on touch |
| Type sizes | | about 6 in the product, about 3 per region |

## Phase 6S. The page storyboard (sites; before any code)

Plan the scroll as a sequence of beats, the way an editor paces a magazine or a film. One table, one row per
section, every row filled:

| # | Beat: the one thing it shows | Height | Alignment | Ground | Density | Its live detail (9) |
|---|---|---|---|---|---|---|

- **Height:** S (under half a screen), M (half to one), L (one to one and a half), XL (more than one and a half, or
  one full screen of a single thing).
- **Alignment:** centred, left-heavy, full-bleed, side-by-side pair, grid of three or more, overlapping or pinned.
- **Ground:** the surface colour; bands are allowed and are the main pacing tool.
- **Density:** sparse, medium, dense.

**Rules** (they force variation; they are not a menu of approved moves)
1. No two neighbouring beats share alignment **and** ground.
2. No alignment three times in a row.
3. At least one XL beat that is a single thing at full size, and at least one S beat. Heights vary.
4. Side-by-side pairs only where two things are genuinely compared or used together, at most a third of the beats.
5. At least three grounds across the page unless the subject has one colour; write the reason if so.
6. Each beat's form comes from its content (a counter is a counter, a schedule is a timeline). Write where it
   comes from in one line. If the answer is "it's a section", redo the row.
7. Section heads vary too: not every head is heading-left, paragraph-right.

Do not write the vocabulary into a house style. If two projects in the used log share a silhouette, change this one.

**Whole-page takes** (Full tier; Standard when the user wants to compare): show each take as a strip of
thumbnails of the whole page next to its silhouette, not only the first screen. The humans' advantage is the
scroll.

## Phase 7. Feeling, warmth and life

**The feeling table.** Before any code, write 2 or 3 feeling words taken from the user's answers, and quote the
answer each comes from. Then write how they change the base of every layer, not what gets added on top.

| Layer | What the feeling decides |
|---|---|
| Temperature and colour | the ground and surfaces, not only the accent; saturation |
| Type | the faces, their size, weight and width; how loud headings are against the body |
| Rhythm and density | tight or airy; regular or deliberately uneven |
| Shape language | where its shapes come from in this subject |
| The first screen's form | what the main view is |
| Motion character | which one moment gets the most motion |
| Copy voice | how someone from this world would say it, plain and clear |
| Sound | the material the sounds are made of |

- **One feeling, every layer.** If a row doesn't change, say why in one line.
- **Decoration is not life.** Remove every ornament: if the feeling disappears with them, it was never built in.
- **The template test.** Swap in a different subject's name and content. If the screen still works unchanged, it
  isn't designed yet.

**Warmth**
- Temperature matches the subject. Warm can be dark, grey or saturated. Keep the neutrals' hue within about 40° of
  the accent's, or write the reason.
- Neutrals carry a little of the product's hue. Very dark warm surfaces read as black; lift the reading surface.
- Both themes are designed, not inverted.

**Life**
- The first screen carries the subject's own material: its real things, the user's real content, its words.
- Signs of life carry information: real names, relative times, what changed since last time, empty states that
  say what to do next.
- Copy is human. Buttons are verbs. Messages say what happened and what to do.

## Phase 8. The bold pass

Run after the feeling table, before code (Standard and Full).

1. **The world inventory.** Don't list what a designer would associate with the subject. Answer these for this
   subject, with at least two answers each, and prefer answers an insider would give and an outsider would miss:
   - What do people here hold, wear out, count, sign or pass to each other?
   - What leaves a mark here, and what does the mark record?
   - How are things ordered, numbered, named and dated here, in what format?
   - What changes between busy and quiet, morning and night, one season and the next?
   - What do people here check first, and what do they do when it is wrong?
   - What is this world's own way of showing that something is done, late, urgent or broken?

   If an answer would be equally true of ten other subjects, it is not specific enough.
2. **The ladder,** for the first screen. Which ladder depends on the context.

   | Rung | Seen once and occasional | Daily and all day |
   |---|---|---|
   | 0 | what a competent template would do | what a competent template would do |
   | 1 | the subject's material on a normal layout | a type and colour system no other product has |
   | 2 | the layout itself comes from how this world organises things | information design that makes the user faster: density, alignment, states readable at a glance |
   | 3 | the visitor does something the way people in this world do it, with plain labels and a plain alternative | an interaction model built around the power user's real rhythm: keyboard flow, bulk actions, no waiting |

   Build the highest rung that clears the usability bar and the long-use test. If you stop below rung 2, write the
   specific failure that stopped each higher rung, and try one reshaping first. "Simpler", "cleaner" or "safer"
   are not reasons. Turning the main view into a physical object is one way up the left ladder, never the default
   (4.5).
   **Climb in composition too.** For every beat in the storyboard ask: what is the biggest this one thing could
   be, and what would it look like if the layout came from the thing itself? A page whose only high rung is the
   hero is at rung 0 everywhere else.
3. **Signature details,** within the context's budget (Phase 9). Each comes from the inventory and does a job: a
   control, a way of showing data, a transition or an empty state that only this subject would have.
4. **Unprompted extras.** List things the user didn't ask for that would make their day easier or make them smile
   once: seen once and occasional contexts lean to delight; daily and all-day contexts lean to help (a shortcut, a
   smarter default, a remembered choice, a better empty state). Build at least two; say which in the report.
5. **The studio test.** Would a design studio post this screenshot? Would a stranger guess the subject with the
   text hidden? For daily and all-day tools, ask instead: would a designer screenshot this table, this form or
   this state to learn from it?

## Phase 9. Detail, inside a budget

A clean screen with nothing in it reads as generic. A screen with detail added to hit a number reads as costume.
The budget is a ceiling, not a target; the floor is the template test.

| Context | Signature details | Material and texture | "Lived in" means |
|---|---|---|---|
| Seen once | as many as the idea holds | welcome wherever the subject really has it | the subject's world, shown richly |
| Occasional | up to 3 signature details, plus the life budget for the dial | at the edges and in transitions, never under body text | the subject's world, lightly; live facts on every beat when Lively |
| Daily | up to 2, outside the path of any top task | almost none | the user's own traces |
| All day | at most 1 | none | the user's own traces |

**The life budget** (the liveliness dial, Phase 5). Lively builds give **every beat** one live detail, each tied
to a real fact or decision of this subject. Warm builds give most beats one. Quiet builds keep life to the user's
own traces. Kinds of life, with the job each must do (find this subject's version, never copy the example):
- **Live facts:** what is true right now: open or closed, today's price, the local time, what's left, what changed.
- **Toys that answer a real question:** the visitor does the subject's own job (works out the bill, plans the
  room, mixes the order, cooks the thing) and gets a real answer with plain labels.
- **Physics and response:** things that answer the pointer, press, settle, swing, fill; motion that shows cause.
- **Counts and reveals:** numbers that count up to the real figure; a chart that draws when reached.
- **One reward per real milestone,** once: a small celebration when the visitor reaches something true (a form
  sent, a total that proves the point). Never repeated, never for nothing.
- **Memory:** the page remembers what the visitor did (choices, drafts, what they built) and is there on return.
- **Live facts stand still.** Show them where they apply (a status next to the branch, a price on the price), not in
  a scrolling ticker.
- **Ambient motion,** only with a pause control and off under reduced motion; **sound** only opt-in (12).

**Addictive by curiosity, never by pressure.** No fake scarcity or countdowns, no streak guilt, no confirmshaming,
no nag that returns, no autoplay sound, no infinite feed, no hidden costs. The pull is "what happens if I touch
that?" and "it remembered me", not anxiety. Every live detail passes the 10-minute test (5) or gets a pause.

**The user's own traces** are what make a tool feel lived in without costume: where they left off, what they
opened last, what changed since they were here, their names for things, their drafts, their pinned and frequent
items, their density and theme choices. These are real, they are useful, and no template has them.

**Three distances.** Check each main screen at arm's length (composition, a few big shapes), at reading distance
(a second typographic voice: numbers, units, captions, the formats from the inventory) and up close (edges,
alignment, icon detail, how states are drawn). Each distance should hold something considered. That something can
be pure craft; it does not have to be an object.

**Rules that keep detail honest**
- Structure first. Strip the details and the structure must still carry the feeling.
- Every detail carries information or comes from an answer in the world inventory. Name the answer.
- No simulated wear, dirt, tilt or handwriting unless the subject is literally that object and the context is
  seen once or occasional.
- The task area keeps its contrast, its plain words and its calm.
- Frequency rule: what is used 100 times a day gets no decoration; what is seen once a day can carry some.

## Phase 10. Rejection with memory, and the token system

**Rejection** (write it down before any code)
1. **Fonts, from requirements.** Write the requirements first: the reading task, the scripts and weights needed,
   the subject's era, place and materials, how it must behave at 16 px (clear `Il1` and `0O`). Then find three
   candidates per role from a real catalogue (search one when you can) and pick with a reason tied to a
   requirement. Out: anything in the used log's last five entries, and whatever came to mind before the
   requirements were written. One family is fine. A superfamily is fine.
2. **Layouts.** Write the first three layout ideas and set them aside, the template included. Do it per beat, not
   only for the first screen. The candidate comes
   from the task table (app) or from how the subject's world organises things (site), and keeps the step counts.
   "A fresh layout would add steps" is a reason to reshape the layout, not to fall back to the template.
3. **Colour.** Take the palette from something real in the subject or from the content, and build it in OKLCH
   (`references/foundations.md`). 4 to 6 colour tokens plus a neutral scale. Not a palette family from the used log.
4. **Check against memory.** Compare the plan with the used log and Phase 4.5. Anything repeated is replaced.

**Token system** (define before building)
- **Scales, not noise.** About 6 type sizes, 5 radii, 3 control heights, one spacing scale, all of them used.
- **Concentric radius.** A child's radius is the parent's minus the padding between them.
- **One meaning per token.** Reserve a hue for errors. An accent that means selection, brand and error means
  nothing.
- **Icons.** One set, one stroke width, one grid; every icon button has a visible label or tooltip. Check custom
  icons by asking what a stranger would call them.
- **Illustrations.** One consistent hand throughout. Check each shows what it claims to.
- **Images are only of real content.** No stock filler.

## Phase 11. Motion

Read `references/motion.md` before writing any animation. The essentials:
- **Use the tokens.** Controls stay under 300 ms, sheets under 400 ms. Never `ease-in` on UI.
- **The frequency rule.** Actions done 100+ times a day don't animate.
- **Physical.** Things enter from where they came and leave the same way, respond on pointer-down, follow the
  finger 1:1 and stay interruptible. Nothing blocks input.
- **Reduced motion** keeps fades and drops movement.
- **Expressive has a floor.** If the user picked Expressive, the build fails unless it has all of these, each
  written in the report with its purpose:
  - one choreographed signature moment: several elements in sequence over about 1 to 3 seconds, with sound if
    sound was chosen, at the moment that matters most (an unlock, an arrival, the ending);
  - at least three things the visitor can touch that answer with physics on a phone (drag, flick, throw, swing,
    pull, rub, tilt), each with a tap or key alternative;
  - on every beat of the storyboard, motion that shows cause: something reacts to the visitor or to a real fact.
    Scroll-reveal fades, hover lifts and a typing effect do not count toward the floor.
  Standard and Calm have no floor; they are the ceiling for those levels.
- **Seen-once pieces** may run longer than the UI tokens: see "Seen-once moments" in `references/motion.md`.
- **Ambient loops** (steam, bobbing, 3D; rolling text only where 4.1 allows it) pause when off screen and when the tab is hidden, and have a
  visible pause where they run for more than 5 seconds.

## Phase 12. Sound

Only if the user said yes. Read `references/sound.md`. Opt-in, off on first visit, a sound map tied to actions, never the
only signal. One exception: in a seen-once piece with a natural first gesture (an unlock, opening an envelope,
pressing start), the sound the user chose may start on that gesture, with the music control on screen from then on.
- **Music is a deliverable when chosen.** If the user picked "effects and background music", the build ships a
  working music player and a track (their file, a found CC0 file, or the synthesized loop in `references/sound.md`),
  with a play button the user can press. Effects without a music player is a failed build, not a smaller one. If
  they picked effects only, ship no music code.

## Phase 13. Behaviour: every action answers back

Write the four states of every interactive element before building it:
- **Idle:** looks interactive, clear label, visible focus ring.
- **Working:** anything over about 300 ms shows it is happening.
- **Success:** a visible confirmation, in place, with Undo when the action can be undone.
- **Failure:** what failed and how to fix it, next to the control, with the user's input intact.

Also:
- **Openings and closings are decided.** Focus moves into what opens and returns to what opened it. Escape, the X,
  a tap on the scrim and the back gesture close it the same way.
- **Limits are visible** (a stepper at its minimum shows it).
- **No faked outcomes.** If nothing was saved, say so.
- **Everything clickable is a real `<button>` or link,** with a pressed state.
- **The hundredth-hour rules of Phase 1 are built, not assumed:** resume, autosave, undo, defaults, forms.

## Phase 14. Every size, not two

- **Phone.** Primary actions in the bottom third. Secondary panels as bottom sheets. Gestures always have a
  visible alternative. Respect safe areas and the on-screen keyboard.
- **Measure the scroll.** If one repeated item fills more than about three phone screens, change its form (a
  compact row, groups that open, a snapping horizontal row with a visible hint), keeping its character.
- **In between** (around 768 px). Decide the layout; don't let it be a stretched phone or a squeezed desktop.
- **Wide** (1920 px and up). Content does not stretch to fill; reading width holds; extra space goes to margins or
  to a second useful zone.
- **Zoom and reflow.** At 320 CSS px wide (a desktop at 400% zoom) everything works with no sideways scroll. Sizes
  use rem. Text spacing can be increased without clipping.
- **Components adapt to their container,** not only to the viewport.

## Phase 15. Accessibility (WCAG 2.2 AA is the floor)

- **Structure.** One `<h1>`, headings in order, landmarks (`header`, `nav`, `main`, `footer`), `lang`, a real
  `<title>`. A screen-reader user should be able to do every top task from the accessibility tree alone.
- **Names.** Every control and input has an accessible name that matches its visible label. Images have `alt`
  (empty when decorative).
- **Contrast.** The floors in Phase 6, in both themes, accent pairs included. De-emphasise with a lighter colour
  that still passes, not with opacity.
- **Keyboard.** Every task works by keyboard alone, in a logical order, with no trap. Sites get a skip link.
- **Focus.** Always visible, at least 3:1 against what is around it, and never hidden under a sticky header, a
  sheet or a banner.
- **Targets.** At least 24 px, 44 px on touch.
- **No dragging required.** Anything done by dragging can also be done with single taps or keys.
- **Never colour alone.** Pair state colours with a word or an icon.
- **Announcements.** Dynamic results go through `aria-live` or `role="status"`. Errors are tied to their input
  with `aria-describedby` and `aria-invalid`.
- **Equivalents.** Anything visual-only (canvas, 3D, an SVG scene) has a text or control equivalent.
- **Motion and sound.** Honour reduced motion; a moving hero has a pause control. Sound is never the only signal.
- **Don't make people repeat or remember.** Don't ask twice for what was already entered. Never block paste or
  password managers. Help is in the same place on every page.
- **Forced colours and high contrast.** The product stays usable in `forced-colors: active`: don't convey state
  with background colour alone, and keep real borders on controls there.
- **Plain language.** Short sentences, common words, one idea per message.

## Phase 16. Performance: loading and feel

**Loading**
- **Budget.** On a mid-range phone on a normal connection: main content visible within about 2.5 s, layout shift
  under 0.1, response to a tap under 200 ms. A tool opened many times a day should feel instant on return.
- **Fonts.** As few files as the design needs, WOFF2, `font-display: swap` with a fallback matched in metrics so
  text doesn't jump.
- **Images.** Sized to their slot, with width and height set, lazy below the fold.
- **Heavy libraries** (3D, timelines, charts) load only for the moment that needs them, after the first paint,
  with a static fallback. They are never the price of reading the page.

**Feel**
- **Animate only `transform` and `opacity`** (plus `clip-path` and `filter` where composited). Never
  `transition: all`.
- **Keep the main thread free during motion.** Write transforms on the element; don't set framework state every
  frame. Use `will-change` only where you measured dropped frames.
- **SVG filters are expensive.** Keep them on static elements.
- **Measure, don't assume.** On the longest real data, with 4x CPU throttling.
- **Feel fast.** Respond at once (optimistic updates, skeletons in the real layout) and never block input.

## Phase 17. Review in a real browser

Read `references/review.md` for the script and the scorecard. The loop:
1. **Run the review script** (`scripts/review.js`). Fix every finding in capitals. Read the census against
   Phase 4.
2. **Run the silhouette check** on sites: `node scripts/silhouette.js <url> 1280`, and again at 390 if the phone
   layout was planned separately. It prints the page as beats (`C` centred, `L` left-heavy, `F` full-bleed, `LR`
   side-by-side pair, `G` grid of three or more, with S/M/L/XL height and the ground) and flags neighbours with the
   same alignment and ground, an alignment three times in a row, splits on over a third of beats, no XL beat and a
   single ground. Compare it with the storyboard; every flag is fixed or explained. It is a heuristic: a marquee's
   two halves, a page built in one wrapper, or a centred heading over a list can misread. Read its per-beat output
   before arguing with it, and never "fix" the classifier instead of the page.
3. **The scroll test.** Look at a thumbnail strip of the whole page (full-page screenshot scaled to about 260 px
   wide) at both sizes. You should see shapes of different sizes, grounds that change, and one or two moments that
   stop the eye. Stripes of the same shape are a finding.
4. **Look at every screenshot yourself:** each size, both themes, every state you changed. Overlaps, clipping and
   wrapping only show up to the eye.
5. **Do the top tasks yourself,** scripted, and count the steps against the task table.
6. **The cold read.** Give a first-screen screenshot to a sub-agent with a fresh context and no explanation. Ask
   what this is, what is happening and what to do next. Every wrong answer is a finding.
7. **The task walk.** Give a fresh sub-agent the running page and one top task in the user's own words, nothing
   else. It reports every click and every hesitation. Each wrong click is a finding, worst first.
8. **The blind walk.** Give a fresh sub-agent only `a11y-tree.txt` from the script and the same task. If it can't
   say how to do the task from the tree, a screen-reader user can't either.
9. **The feeling check:** the feeling table row by row, the blur test, the template test.
10. **Use it the way people do:** phone one-handed, keyboard only, the obvious wrong moves (Escape, back,
    double-tap submit), the extremes (empty, error, slow network, longest name, 200 items).
11. **The return visit.** Reload in the middle of a task. Is the work still there, in the same place?
12. **Ready to ship:** no demo leftovers, links open, facts match their sources, no console errors.
13. **A findings table,** worst first; fix; repeat until nothing serious is left.

    | Issue | Where | Who it hurts | Fix |
    |---|---|---|---|

14. **What couldn't be checked** (how sound actually sounds, touch on a real device, a real screen reader) is
    stated plainly in the report.

Where sub-agents aren't available, do the cold read, task walk and blind walk yourself from the screenshot or the
tree alone, before looking at your own code, and say so in the report.

## Phase 18. Critique like a rival studio

After the browser review, before the user sees it.

1. **The usability gate.** The cold read, the task walk, the blind walk and the script's capital findings must be
   clean first. Nothing below is scored until they are.
2. **Crop four regions of each main screen at 2x.** Each should hold something considered. A generic crop is a
   finding.
3. **Write the rival's critique.** A design director at a rival studio who wants this to fail lists at least five
   things that look default, cheap, timid, unfinished, generic or tiring to use, worst first, each with a concrete
   fix. At least one item is about the page below the first screen: the beat that is most template. Add a second voice: someone who has used the product for a month lists what now annoys them.
4. **Score with evidence, 1 to 10,** on what the context asks for:

   | Context | Scored on |
   |---|---|
   | Seen once, occasional | clarity, boldness, detail, craft and finish, freshness against Phase 4 and the used log |
   | Daily, all day | speed of the top tasks, clarity at a glance, calm over ten minutes, craft and finish, a character of its own in type and colour |

   Anything under 8 gets another round.
5. **The serious-build bar.** Before reporting, all of this is true:
   - the interview's choices are in the build, checked item by item: the scope (a redesign changed the structure),
     the animation level's floor (11) and the sound choice (12, a working play button with a real track behind it
     when music was chosen);
   - every interactive element has hover, focus, pressed, working, success and failure where they apply;
   - empty, loading, long-data and error states are designed, not left to the browser;
   - the interactions are real: data changes, persists for the session, and the screen answers;
   - the hardest part of the idea is built, not replaced by a picture of it;
   - no placeholder boxes, no lorem, no "coming soon" in place of a feature the design shows.
6. **Report the rounds:** the critique lists, the scores before and after, what changed.

## Phase 19. Record, log, report

**The taste record.** Write every verdict the user gives into the project's memory file, in their words, with the
date and the rule it implies. When a verdict says the design lacks life or creativity, go back to the feeling
table, the storyboard (6S) and the first screen's form; more ornament on the same structure is not a fix. When a
verdict says "too static", "too simple" or "not enough redesign", go back to the question gate and the scope:
the fix is a new structure and new things to touch (the Expressive floor), never more effects on the old layout. When a
verdict praises one part and calls the rest bland, carry that part's initiative into every beat (6S, 9) instead of
polishing the part they liked. When a verdict says it is
tiring, confusing or slow, go back to Phase 1.

**The used log.** Append one entry to `UNSLOP_LOG.md` (create it if the project allows; otherwise print it):

```
## <date> · <subject> · <context>
- Fonts: <families and roles>
- Colour: <what the palette was taken from; ground and accent hues in OKLCH>
- Main view / layout: <one line>
- Silhouette at 1280: <sequence from scripts/silhouette.js>, flags: <none or list>
- Signature moment and details: <one line each>
- Ladder rung built: <n>, <one line>
- Phase 4 items present, with reasons: <list>
- User verdicts: <their words>
```

**Report** the scorecard from `references/review.md` with evidence, then the link or files, the sources for real content, the
assumptions made, and what couldn't be checked.

## Toolbox

The baseline is hand-written HTML, CSS and SVG. Go further when the idea and the context call for it:
- **3D and shaders** (three.js, custom GLSL) for seen-once and occasional contexts, loaded late with a fallback.
- **Timelines and physics:** the Web Animations API or a timeline library for choreography; hand-written spring
  maths for anything the pointer touches; FLIP for layout changes.
- **Data:** D3 scales and shapes for honest charts; never a chart library's default look.
- **Generative texture:** canvas or SVG filters, rendered once and cached.
- **Type:** variable fonts, real small caps, tabular figures.
- **Modern CSS:** container queries, `:has()`, view transitions, anchor positioning, native `<dialog>` and
  popover, where the deploy target supports them.
- **Sandboxed deploys:** bundle libraries and fonts into the page or load them from allowed CDNs.
