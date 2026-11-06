---
name: unslop-design-1-6
description: Unslop Design 1.6. Design and build front ends that look like a specific studio made them for this subject, that feel warm, alive and easy to live in, and whose motion and sound feel smooth and calm, in the spirit of Apple's design. Covers websites and apps alike, including landing pages, web apps, app shells, chat UIs, dashboards, settings screens, mobile layouts, skins and themes for existing apps, mockups, redesigns, design reviews, animation passes and adding sound effects or background music. It replaces unslop-design 1.5 and 1.0, so use this one whenever more than one applies. Also use it when the user only says "make it look good", "it feels lifeless", "too many lines", "it's cold", "restyle this", "it's hard to use", "make the animations smoother", "it feels janky" or "add sounds".
---

# Unslop Design 1.6

A design is good when it looks like a specific studio made it for this subject and the people who use it are comfortable
in it for hours. Version 1.0 fought generic looks. 1.5 added warmth, structure without lines, and a sense of how the
thing is used. 1.6 keeps all of that and adds what 1.5 left vague: asking the user before deciding, motion that feels
smooth and physical, sound that answers the user's actions, and a browser review of the result before reporting.

**What changed from 1.5**
- **Interview first (Phase 1).** Before designing, ask the user numbered questions in rounds, each with a recommended
  answer: who it is for, how much animation, how far to go and whether they want sound. If they sent a project that
  already exists, ask whether they want a redesign or only fixes.
- **Motion is its own phase (Phase 7)**, with exact curves and durations, a frequency rule for when not to animate,
  and rules for interrupting animations, transform origins, presses and exits. These are strong defaults. The
  interview's animation answer turns them up or down.
- **Sound is its own phase (Phase 8).** Sound effects are opt-in, have a visible toggle, and each one is mapped to a
  user action. Sounds are synthesized by default, the user can supply their own, and background music is played only
  when the user asks for it.
- **Browser review loop (Phase 13).** After building or fixing, drive the result in a real browser. Take screenshots,
  play the transitions in slow motion and list what is hard to use. Fix it and check again before reporting.

## The philosophy (read once, apply everywhere)

1. **Ask, don't assume.** Who it is for, how much motion, how far to go and whether there is sound are the user's
   decisions. Settle them up front instead of guessing them and redoing the work later.
2. **People live in an interface, they don't only look at it.** Comfort beats rigour. A screen that impresses for
   five seconds and tires the eye after an hour has failed.
3. **The content is the life, and the chrome recedes.** Faces, names, the user's words and the user's colours carry
   the warmth. Never override a content setting the user chose (their text colours, fonts, sizes).
4. **A feature that isn't used is clutter.** A permanent panel the user never asked for makes the app worse, however
   pretty it is. "I don't use this" is a design verdict.
5. **Separate with space and surfaces, not lines.** Lines make a layout look like a form. Space and tonal surfaces
   make it look composed.
6. **Warmth comes from light and accent, not from brown.** Dark brown reads as black. Warmth needs a lifted reading
   surface, a hue-biased neutral and one warm accent.
7. **Motion is physics, not decoration.** Things come from somewhere and go back there. They respond the moment the
   user touches them, follow the finger, and can be interrupted halfway. If the user waits for an animation, it is too
   slow. If they notice it on the hundredth use, it shouldn't be there.
8. **Sound is feedback, not a soundtrack.** A sound confirms what the hand just did. It is quiet, short, opt-in and
   never the only signal.
9. **A phone is a different posture.** The user holds it with a thumb, in a bus, in the dark. A desktop layout made
   narrower is not a phone design.
10. **Behaviour is part of the design.** Where focus lands, what Escape does and what a button says while it works are
    design decisions. Leave them undecided and they become frustrations.
11. **What the user sees is the real test.** Their data, their settings, their device and network, their cache.
    Your clean test page is only a proxy, so look at the result in a browser before you call it done.
12. **Taste is evidence, so write it down.** Every verdict the user gives is a rule for next time.
13. **Consistency comes from one source.** One icon set, one token file, one motion language, one sound palette and
    one shared kit. If something is defined twice, it will drift.
14. **Compare details, not impressions.** When matching a reference, go detail by detail with pass or fail. "Looks
    about right" hides the twenty small misses that make it feel off.

## Phase 0. Read the room

Run the phases in order. The written steps (the interview summary, the task table or concepts, the rejection lists,
the sound map, the review findings, the scorecard) are what make the output different, so write them in the planning
notes rather than keeping them in your head.

**Read the project's taste record first.** Look for PROJECT_MEMORY.md, DESIGN.md, PRODUCT.md, `.ui-craft/brief.md`,
CLAUDE.md and any notes on earlier rounds. The user's recorded words outrank this skill. If they asked for a hero,
build one. If they banned something this skill allows, it's banned. Other design pipelines (Impeccable, ui-craft)
can run the process, and this skill's bans and checks apply on top.

**If the user sent an existing project,** look at it before the interview. Run it, take screenshots at 390 px and
1280 px, try its main tasks, and note the worst 3 to 5 problems. You bring this list to the interview (Phase 1, Q2)
so the user can choose between a redesign and fixes based on what is really there.

**Pick the mode** and write one line on why:

| | Site | App |
|---|---|---|
| Who | a first-time visitor, for minutes | a returning user, for hours, daily |
| Their job | understand and act once | do the same few tasks fast, many times |
| You start from | real-world moments and concepts (Phase 2S) | tasks and how often they happen (Phase 2A) |
| Hero | exactly one, detailed and interactive | none forced: the core loop done beautifully is the signature |
| Boldness goes into | the hero, the paradigm, the layout | comfort, the core loop, the small details |
| Freshness test | "Did they see this layout on another site this week?" | "Is this annoying on the 100th use?" |

A product with both (an app plus its marketing page) gets each surface in its own mode.

**Reskinning an existing app:** list the hooks first (the IDs, classes, attributes and events its code binds to).
Change appearance, keep the wiring. Turning the skin off must restore the original look. Test the original's
interactions before and after.

## Phase 1. Interview the user

Interview the user until you both agree on what is being built, then build it. Treat the open decisions as a tree in
which each answer opens the questions that depend on it.

**How to ask**
- **Ask in rounds.** Each round asks every question that can be answered now without knowing the answer to another
  open question. Wait for the replies, then work out the next round. A question that depends on an answer still
  pending waits for a later round.
- **Number every question and give a recommended answer**, worded so that "yes" accepts the recommendation. Use this
  format:

  ```
  ❓ **Q1** - **Who is it for**: <the question, with options if there are any>

  ➡ <your recommended answer, and one line on why>

  ---

  ❓ **Q2** - ...
  ```

- **Look up facts yourself and ask the user only for decisions.** Don't ask what framework the project uses or whether
  a file exists, because you can check. Don't ask anything the prompt or the taste record already answers.
- **Keep rounds short:** about 6 questions at most, with the most important first. Ask the questions that change the
  most work first.
- **Stop when nothing is left undecided.** Then write a five-line summary of the decisions and ask the user to confirm
  it before you build. If the user says "just build it" or "you decide", take your recommended answers, list them as
  assumptions at the top of your reply, and go ahead.

**Round 1: the questions to start from.** Drop any that are already answered:

| # | Question | Options | Usual recommendation |
|---|---|---|---|
| Q1 | **Who is it for?** Who uses it, on what device, how often and for how long? | free text | Name the most likely user from the prompt, for example "regular customers, mostly on phones, a few minutes a week" |
| Q2 | **New or existing?** Existing projects only: should this be a redesign, or fixes to what is there? Show your 3 to 5 worst findings from Phase 0. | Redesign · Fixes only · Fixes first, then decide | "Fixes first" when the bones are sound, "Redesign" when the layout itself causes the problems |
| Q3 | **How far should I go?** | **Polish:** spacing, type, colour, states and motion, no layout changes · **Refine:** rework layouts within the current structure and navigation · **Rethink:** a new concept and structure that keeps the content and the wiring | Polish for "small fixes", Refine for an unclear request, Rethink for a new build or a redesign |
| Q4 | **How much animation?** | **Calm:** feedback and state changes only, nothing animates in for show · **Standard:** adds menus, sheets, toasts and page transitions · **Expressive:** adds hero choreography, onboarding moments and playful springs | Calm for tools used daily, Standard for most products, Expressive for a marketing site or a game-like experience |
| Q5 | **Sound effects?** Sounds that answer taps, toggles, success and errors, behind a visible on/off button. | No · Yes, sound effects · Yes, sound effects and background music | No, unless the subject is playful, musical, a game or a kids' product |
| Q6 | **Anything fixed?** Brand colours, fonts, logo, content, or anything you liked or disliked in earlier versions. | free text | "Nothing fixed beyond what is in the prompt" |

**Later rounds depend on the answers:**
- **A redesign or "Rethink":** what must stay (the name, content, URLs, a beloved feature)? Is there a reference the
  user likes?
- **Fixes only:** confirm the fix list. Recommend your Phase 0 findings, ordered by how much they hurt the user.
  Anything beyond the list needs the user's yes.
- **Yes to sound:** do they have their own sound files? If not, recommend synthesized sounds, with no downloads and no
  licence questions. Should sound be on or off on first visit? Recommend off, with a clear button to turn it on.
- **Yes to music:** will they supply the track, or should you find one? If you find one, it must be CC0 or royalty-free
  with the licence written down. Should the music react to what the user does (Phase 8)? What is its mood, in one or
  two words?
- **Expressive animation:** which single moment deserves the most motion? Everything else stays calm.

Record the answers in the taste record (Phase 14) so the next session doesn't ask again.

## Phase 2A. App: start from the tasks

Write this in the planning notes before any visual work:

1. **Who and where.** Devices, posture (desk, sofa, one-handed phone), session length, lighting, network (local or a
   slow tunnel), and whether it is installed or opened in a browser tab. Start from the interview's Q1.
2. **The task table.** List the top five tasks with how often each happens and its step count today and target:

   | Task | How often | Steps now | Target |
   |---|---|---|---|
   | Send a message | every turn | 2 | 1 |
   | Switch to a recent chat | several times a day | 4 | 2 |

   The "How often" column also decides motion and sound (Phases 7 and 8): the more often an action happens, the less
   it animates and the quieter it sounds.
3. **Place by frequency.** Anything used every turn stays visible and within reach. Daily tasks are one step away,
   weekly tasks two, and rare ones go in a menu or search. Anything that stays on screen must serve a top task. Run
   the "I don't use this" test on it, and if it fails, make it on demand and dismissible.
4. **Put the main action where the hand is.** On a phone that is the bottom third. On a desk it sits next to where
   the eyes already are (the composer under the conversation, the save button by the form it saves).
5. **Take a real data inventory.** Find the longest name, a 200-item list, the empty state, a single item, an error
   and a slow load. Design for these, not for the four tidy rows in your head.
6. **Design the dominant state first.** Find the state the app spends the most time in (a reply streaming in, a
   list loading, a sync running) and design it before the idle screen. It is what the user stares at.

## Phase 2S. Site: concept, then prototype

1. **Real-world moments.** List 8 or more physical moments, objects or places from the subject's world that people
   already have feelings about, across the senses and before, during and after use. Sounds count: they become the
   sound palette if the user said yes to sound.
2. **Five concepts.** Each concept is one metaphor the page lives inside, plus its hero mechanic (what the visitor
   does with their hands), how every section maps onto it, and the paradigm.
3. **Score and pick.** Rate each from 1 to 5 on fascination, fit, clarity (does the main job still get done?),
   accessibility path, feasibility and freshness. Write one line on why the runner-up lost.
4. **Prototype the risky part first.** Build the hero mechanic alone. Check that it works at a smooth frame rate,
   looks right in a screenshot against the ban list, reads at phone width, and has a keyboard and reduced-motion
   path. Try 2 or 3 variations of anything uncertain.
5. **The hero.** There is exactly one. It comes from the subject (a tool, object or ritual from its world) and has
   many small states. It teaches or sells something real. Its test: would someone play with it for 30 seconds
   without a reason? It gets there through something rarely seen on a website, such as a real simulation, an object
   that comes apart or a hidden behaviour. It needs a full keyboard and screen-reader path, and a pause control if
   it moves on its own for more than 5 seconds. Everything else stays calm.
6. **Multi-page.** Use one shared header, footer, stylesheet and script, and mark the current page with
   `aria-current="page"`. Each page has one job, its own `<title>` and one useful interactive tool. The hero lives on
   the home page only.

## Phase 3. Ban list: the clichés, not the tools

Never ship these unless the user asks for them. The right-hand column says where the underlying tool is fine.

| Banned cliché | The tool is fine when |
|---|---|
| **Lines as the main structure:** a hairline or `<hr>` between every row, section, header and sidebar, or a 1px stripe wherever two areas meet | dense data tables, an input's outline, a scroll edge that needs a hint (Phase 4, rung 5) |
| **Boxes for everything:** every group a bordered card, boxes inside boxes | a card groups one thing the user acts on as a unit (a message, a person, a file) |
| **A flat, even build:** every area the same weight, full-width bands stacked down the page | never |
| Decorative gradients on backgrounds, text, buttons, borders or glows | a scrim that keeps text legible over an image, or a fade at a scroll edge, so long as nobody sees it as a gradient |
| Glow, pulsing or floating orbs and blobs, glossy ball particles | never (render particles flat) |
| A shadow on every card, hover lift plus shadow | a soft shadow on something that really floats: menus, sheets, dialogs, a dragged item |
| Pills on everything, `rounded-full` cards, a radius picked per element | toggles, tags, chips, round icon buttons and avatars, plus large radii on sheets and dialogs within a concentric scale |
| Coloured accent bars on the side of cards, a sidebar in a loud accent | a small marker that carries meaning (unread, current speaker, error) |
| Italic as decoration (taglines, captions, "elegant" labels) | the content's own meaning: narration or actions in roleplay, quotes, titles of works, the user's own formatting |
| Monospace for numbers, labels or "tech" flavour | code, commands, keys and anything the user types exactly; numbers use `font-variant-numeric: tabular-nums` |
| Kickers or eyebrows above headings | never |
| Generic site layouts: hero plus 3 cards, bento grid, a centred column of stacked sections, split hero, logo cloud, testimonial carousel | never |
| Generic app layouts: settings as one long list of label rows split by rules, a dashboard of identical cards, sidebar, header and content in one grey with borders between, a permanent panel nobody asked for | never |
| Motion "because": fade-up on every section, scroll-reveal from opacity 0, everything animating in | the motion explains a change of state (Phase 7) |
| Janky motion: `ease-in` on UI, growing from `scale(0)`, `transition: all`, animating width, height, top or left, a bounce on every element, animations that block input until they finish | never (Phase 7 has the replacements) |
| Animating actions repeated 100+ times a day: keyboard shortcuts, command palette open and close, typing, list navigation by keyboard | never |
| Sound that autoplays, plays on hover, on every keystroke or scroll, background music with no pause, or a sound that is the only signal | never (Phase 8) |
| Grey on grey: secondary text so dim the app reads as disabled | never (see the text floors in Phase 5) |
| Emoji as icons | never |
| Purple-blue, cream plus terracotta, black plus one neon accent, brown on brown sold as "warm" | never |

## Phase 4. Structure: space first, lines last

### The separation ladder
To separate two things, climb this ladder and stop at the first rung that works:

1. **Space.** Proximity is grouping. Keep the gap inside a group at most half the gap between groups. Most "needs a
   line" problems are really "the gaps are all the same size".
2. **Alignment.** Shared edges and baselines make columns and groups visible without drawing anything.
3. **Tonal surface.** Set the group on a surface one step off the ground. Adjacent surfaces need a lightness gap of
   at least 5 L\* (CIELAB), because a smaller step disappears on a flat screen. Cards step up and inputs step down
   (inset).
4. **Elevation.** Use a soft, wide, low-opacity shadow, and only for something that overlaps other content.
5. **Line.** Use a line only for dense tables, input outlines and scroll edges. Derive it from its parent surface
   (about +6 L\* for subtle and +14 L\* for strong), never as pure black or one fixed grey everywhere.

Every `border`, `outline` used as a border, `<hr>` and `box-shadow` in the CSS needs a reason you could write down.
Grep for them before you finish and justify or delete each one.

### Layout from content geometry
- **Prose sets its own width.** Keep reading columns at 60–75 characters (`max-width` in `ch`), whatever the
  viewport.
- **Lists are as wide as their names.** Size a sidebar to its typical name and truncate long names with the full
  name still available. Don't use a fixed third of the screen.
- **Use 3–5 zones of different weight.** One dominant zone holds the thing the user came to do, and the others
  recede. Equal weight everywhere is the "no layout" look.
- **Let the tasks decide the placement.** The task table from Phase 2A says what is visible, what is one step away
  and what is hidden.
- **Blur test.** Blur a screenshot by about 8 px, or squint. You should see a few shapes of different sizes. If you
  see stripes of equal height, the layout is a list of sections, so go back.

## Phase 5. Warmth and life

Check each item and write the evidence:

- **Neutrals with a hue bias** toward the accent, not pure mid-grey. Pure white or near-black grounds are fine when
  chosen on purpose.
- **Warmth from light and accent.** Use one warm accent in a few deliberate places. Brown surfaces below about
  L\* 12 read as black, so lift the reading surface (around L\* 19–22 on dark themes) before you expect any hue to
  show. Low-opacity noise texture can add material warmth, but a gradient can't.
- **Rounded and concentric** (Phase 6), soft but not bubbly.
- **Text that is comfortable for hours.** Body text is 16–17 px with a line height near 1.5. For apps, aim for
  contrast floors of about 10:1 for primary text, 7:1 for secondary and 4.6:1 for tertiary, and avoid stark pure
  white on pure black for long reading. Body prose must never be the dimmest thing on screen.
- **Signs of life:** the content's own faces and colours (avatars, a colour per speaker), relative times ("2 min
  ago"), unread dots, typing and streaming indicators, real names, and empty states that say what to do next.
- **Human copy.** Buttons are verbs ("Save changes", not "Submit"), and messages are plain sentences that say what
  happened and what to do.
- **Motion that responds** to the user: presses press, drags follow, things settle (Phase 7).
- **Both themes designed**, not inverted. Check the taste record for which one is the default.

## Phase 6. Rejection protocol and the detail system

### Rejection (write it down before any code)
1. **Fonts.** List the first 10 fonts that come to mind. All 10 are out, so pick from outside the list. Each face
   must read well at 16 px, with clear `Il1` and `0O`, and cover the weights you need. Check the taste record for
   faces the user already rejected.
2. **Layouts.** List the first 5 layout ideas and reject them all. A site's candidate comes from the subject's own
   world. An app's candidate must serve the task table, so a fresh layout that adds steps loses. Under "Polish"
   (Phase 1, Q3) skip this step and keep the layout.
3. **Paradigm (sites).** Pick one not used in the last design: tabletop, isometric, page-as-a-place, paper cut-out,
   blueprint, printed matter, signage, instrument panel, cartographic, museum label, transit map, packaging dieline,
   or another. Apps can keep the paradigm quiet. Their identity lives in the theme, type and core loop.
4. **Theme.** Take the palette from a real material in the subject (a broth, a metal, a paper stock) or from the
   content itself. Use 4–6 colour tokens, with both themes designed.

### Detail system (define as tokens before building)
- **Scales, not noise.** Use about 6 type sizes, 5 radii, 3 control heights and one spacing scale, and actually use
  them. Seventeen fractional font sizes is a design without a system.
- **Concentric radius.** A child's radius equals the parent's radius minus the padding between them, so no child is
  rounder than its parent. A typical scale runs from outer panel to card to control (about 24 → 16 → 10 px).
- **One motion language.** Define the curves and durations from Phase 7 as tokens. Every transition uses them.
- **Hidden symmetry.** Build on a module tied to the subject and reuse it in spacing, grid and ornament.
- **Consistent edges.** Siblings share inner padding, baseline and alignment.
- **One meaning per token.** If the accent means selection, brand and error at once, it means nothing. Reserve a
  hue for errors.
- **Icons from one set**, with one stroke width and one size grid, and a visible label or tooltip on every icon
  button. Draw custom SVG icons from simple geometry, then check each twice: trace the coordinates, and ask what a
  stranger would call it. Redraw if either check fails.
- **Images only of real content.** No stock filler.

## Phase 7. Motion: smooth, physical, out of the way

The aim is motion that feels like Apple's: immediate, continuous, interruptible and quiet. Each element moves from
where it came from and back again, follows the finger, and never makes the user wait. These values are strong
defaults. The interview's animation answer (Q4) sets how much of them to use, and the user's own words override them.

### Motion tokens
```css
:root {
  --ease-out:    cubic-bezier(0.23, 1, 0.32, 1);    /* entering, exiting, most UI */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* something already on screen moving or morphing */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* sheets and drawers, iOS-like */
  --dur-press:   120ms;  /* press feedback */
  --dur-micro:   160ms;  /* hover, colour, toggles, tooltips */
  --dur-small:   200ms;  /* dropdowns, popovers, menus */
  --dur-medium:  280ms;  /* toasts, cards, tab content */
  --dur-large:   380ms;  /* modals, sheets, drawers (500ms at most) */
  --dur-hero:    600ms;  /* the one hero or onboarding moment only */
}
```
- **Pick the curve by what is happening.** Use `--ease-out` for anything entering or leaving, `--ease-in-out` for
  something moving across the screen, plain `ease` for hover colour, and `linear` only for constant motion such as
  progress. **Never use `ease-in` on UI**, because it starts slowly at exactly the moment the user is watching. The
  built-in `ease-out` is too weak, so use the token.
- **Product UI stays under 300 ms.** A 180 ms dropdown feels faster than a 400 ms one, and so does the whole app.
- **Exits are faster than entrances**, about 70–80% of the entrance duration, and leave the way they came in. A
  sheet that rose from the bottom goes back down. A toast that slid in from the right leaves to the right.

### When to animate: the frequency rule
Read the "How often" column of the task table (Phase 2A):

| How often the user does it | Motion |
|---|---|
| 100+ times a day (keyboard shortcuts, command palette, typing, list navigation by keyboard) | **none** |
| Tens of times a day (hover, selecting rows, switching tabs) | nearly invisible: 120–160 ms, colour or opacity only, or nothing |
| Occasionally (modals, sheets, menus, toasts) | standard, using the tokens |
| Rarely or once (onboarding, a first success, a celebration) | room for delight, under "Expressive" only |

Every animation must name its purpose: **feedback** (the press pressed), **continuity** (where it came from and went),
**state** (what changed), **softening** (avoiding a jarring jump) or **explanation** (onboarding and marketing only).
"It looks nice" on something the user sees every few seconds is a reason to delete it. Never animate an action the
user started from the keyboard. Data the user reads or acts on doesn't move for style.

### How to animate
- **Presses press.** Pressable elements get `transition: transform var(--dur-press) var(--ease-out)` and
  `:active { transform: scale(0.97) }` (keep it between 0.95 and 0.98). Feedback starts on pointer-down, not on
  release.
- **Hover only where hover exists.** Wrap hover effects in `@media (hover: hover) and (pointer: fine)` so taps on a
  phone don't leave stuck hover states.
- **Nothing appears from nothing.** Enter from `scale(0.95)` and `opacity: 0`, never `scale(0)`. Short slides use
  8–16 px or the element's own size (`translateY(100%)` for sheets), never a long flight across the screen.
- **Scale from the trigger.** Menus, popovers and tooltips set `transform-origin` to the side of the button that
  opened them. Only centred modals scale from the centre.
- **Interruptible by default.** Use CSS transitions, not keyframes, for anything the user can trigger again quickly
  (toggles, toasts, open and close). A transition reverses from where it is, while a keyframe animation restarts from
  zero. Never block input while something animates. A second tap must work at once.
- **Springs for gestures.** Use springs for drags, swipes and anything that carries momentum. A good default is
  `{ type: "spring", duration: 0.5, bounce: 0.2 }`. Keep the bounce between 0 and 0.3, and use it only where a
  physical object would bounce (drag to dismiss, a playful toggle). On release, the drag carries the pointer's
  velocity into the settle.
- **Drags follow 1:1.** Write `element.style.transform` directly on pointer move, not framework state on every frame.
  A sheet dismisses on distance (over about 30% of its height) or on a fast flick.
- **Stagger with restraint.** Space items 30–60 ms apart, keep the whole sequence under about 300 ms, and stagger only
  the first 5 to 8 items of a long list. Never stagger menus, dropdowns or command palettes. One container gets one
  entrance: don't animate the parent and stagger its children as well.
- **Crossfade with a hint of blur.** When content swaps in place, `filter: blur(2px)` plus a fade bridges the two
  states. Keep the blur under 5 px.
- **Things that leave free their space at once.** Take a leaving element out of the layout (`position: absolute` or
  `popLayout`) so its neighbours close the gap while it fades.
- **Instant after the first.** Once one tooltip is open, the next ones show with no delay and no animation.

### Animation level (from Q4)
- **Calm:** presses, toggles, state changes, and sheets or modals opening and closing. Nothing animates in on page load.
- **Standard:** Calm, plus menus, toasts, tab and page transitions, list insert and remove, and one short stagger on
  first load.
- **Expressive:** Standard, plus the hero's choreography, onboarding moments and springs with a little bounce, still
  following the frequency rule. One moment gets the most motion and everything around it stays calm.

### Reduced motion
`prefers-reduced-motion: reduce` means fewer and gentler animations, not none. Keep opacity and colour changes, which
help comprehension. Remove movement, scale and parallax. Collapse staggers so the group appears together. If the app
has its own reduced-motion setting, honour it too.

## Phase 8. Sound: interactive, quiet, opt-in

Run this phase only if the user said yes in the interview (Q5). If they said no, ship no audio code at all.

### The toggle
- **A visible sound button** sits where settings live or in the header, with an icon and a label ("Sound on" or
  "Sound off") and `aria-pressed`. Sound is **off on the first visit** unless the user chose otherwise. The choice is
  remembered in `localStorage`, with every read and write wrapped in `try`/`catch`.
- **Music has its own control,** separate from sound effects, with play or pause and a volume slider. A user can keep
  effects and silence music, or the other way round.
- **Nothing makes sound before the user's first tap or key.** Browsers block it anyway. Create or resume the
  `AudioContext` inside that first gesture.

### The sound map (write it before coding)
Every sound is tied to an action and follows the same frequency rule as motion:

| User action | Sound | Character |
|---|---|---|
| Press a button | a tick | 20–40 ms, very quiet, high and soft |
| Toggle on / off | two notes | up for on, down for off |
| Open / close a sheet or menu | a soft swish | filtered noise, 120–200 ms, quieter on close |
| Pick up / drop (drag) | a lift and a settle | the drop lands when the item settles |
| Success (saved, sent, added) | a rising two-note chime | 150–300 ms |
| Error | a low, soft double tap | never harsh, never a buzzer |
| A rare milestone | a short phrase | only under "Expressive" |
| Typing, scrolling, hover, keyboard navigation | **none** | too frequent |

- **The sound happens at the same moment as the visual.** The press tick fires on pointer-down with the press scale.
  The success chime fires when the success state appears, not when the click happens.
- **One sound palette.** Tune every sound to one musical scale (a pentatonic scale never clashes when sounds overlap)
  and take its character from the subject: wood, glass, paper, metal. A hotpot shop and a banking app should not
  share sounds.
- **Quiet by default.** Effects sit far below normal media volume (a master gain around 0.1–0.2) with an attack of
  2–5 ms and a fast exponential decay, so nothing clicks or drags on.
- **Spam-safe.** Limit how many sounds play at once (about 4), and don't retrigger the same sound within 40 ms. Ten
  fast taps should sound like ten taps, not like a crash.

### Where the sounds come from
1. **The user's own files** if they have them. Decode each one once into an `AudioBuffer`, trim the silence, keep
   effects under about 300 ms and match their loudness.
2. **Synthesized (the default).** Use the Web Audio API to generate tones and filtered noise. There is nothing to
   download, no licence to check, and the sound can be tuned to the palette exactly. A minimal voice:
   ```js
   function tone(ctx, out, freq, { dur = 0.08, type = "sine", gain = 0.15 } = {}) {
     const t = ctx.currentTime, osc = ctx.createOscillator(), amp = ctx.createGain();
     osc.type = type; osc.frequency.value = freq;
     amp.gain.setValueAtTime(0, t);
     amp.gain.linearRampToValueAtTime(gain, t + 0.004);          // 4 ms attack
     amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);     // quick decay
     osc.connect(amp).connect(out); osc.start(t); osc.stop(t + dur + 0.02);
   }
   ```
3. **Found files** only if the user asks you to find sounds or music. Use CC0 or clearly royalty-free sources, verify
   the licence on the source page, download the file into the project rather than linking to it, and write a
   `SOUNDS.md` with each file's source URL, author and licence.

### Background music (only if asked)
- **It never autoplays.** It starts when the user presses play or turns music on, fades in over about 600 ms and
  fades out over about 300 ms. It starts at about 30% volume.
- **It loops without a gap,** pauses when the tab is hidden (`visibilitychange`), and lowers briefly under important
  effects and spoken audio.
- **Interactive music,** if the user wants it, responds to state rather than to every click. Fade in a layer when the
  user progresses, change the key or tempo for a new section, and resolve on completion. Keep every change on the
  beat or bar so it never sounds broken.

### Accessibility
Sound is never the only signal. Every sound has a visual state and, where it matters, an `aria-live` announcement. A
user who can't hear loses nothing. Respect the system and app mute. A "reduce sound" or reduced-motion preference
lowers effects to success and error only.

## Phase 9. Behaviour: every action answers back

Write down the four states of every interactive element before building it:

- **Idle:** it looks interactive, with a clear label and a visible focus ring.
- **Working:** anything that takes more than about 300 ms shows it is happening (the label changes, progress text
  appears, the control is disabled while busy).
- **Success:** a visible confirmation in place, near where the user acted.
- **Failure:** what failed and how to fix it, next to the control. It never fails silently.

Also:
- **Openings and closings are decided.** When something opens, focus moves into it (usually to its close control or
  first field). When it closes, focus returns to what opened it. Escape, the X, a tap on the scrim and the back
  gesture all close it the same way, with the same exit animation.
- **Keyboard focus shows a focus ring, not the hover shade.** A focused button keeps its own colour.
- **Limits are visible.** A stepper at 1 shows it can't go lower.
- **Navigation is obvious.** The user always knows where they are and how to get back.
- **No faked outcomes.** If nothing was sent or saved, say so, and don't play the success sound.
- **Every control has a pressed state**, and every clickable row, chip or pill is a real `<button>` or link.

## Phase 10. Phone posture

Design the phone as its own layout, not as a squeezed desktop:

- Primary actions sit in the bottom third, within thumb reach. Secondary panels open as bottom sheets you can drag
  down to close (Phase 7: `--ease-drawer`, 1:1 drag, flick to dismiss), and navigation goes in a drawer or a bottom
  bar.
- Gestures (swipe, long-press, drag) always have a visible alternative.
- Respect safe areas (`env(safe-area-inset-*)`) and the on-screen keyboard. The composer or form stays visible above
  the keyboard.
- Targets are at least 44 px, and spacing tightens less than you'd think: thumbs are bigger than cursors.
- Test at the real device size of the user's phone if you know it, and at 390 px if you don't.

## Phase 11. Accessibility (WCAG 2.2 AA minimum)

- Text contrast is at least 4.5:1, and 3:1 for large text and UI borders, in both themes, accent pairs included.
- Every task works by keyboard alone in a logical order with a visible focus ring. Sites get a skip link.
- Anything visual-only (canvas, 3D, SVG scene) has a text or control equivalent.
- Colour is never the only signal. Pair state colours with a word or an icon.
- Dynamic results are announced through `aria-live` or `role="status"`.
- Every input has a label, with errors tied to it through `aria-describedby` and `aria-invalid` on the input.
- Sizes use rem so text zoom works.
- Motion honours `prefers-reduced-motion` and any reduced-motion setting the app already has (Phase 7). Sites with a
  moving hero also get an in-page Effects toggle.
- Sound follows Phase 8: never autoplayed, a visible toggle, never the only signal.

## Phase 12. Feel and performance

- **Animate only `transform` and `opacity`** (plus `clip-path` and `filter` where they are composited). Width,
  height, top, left, margin and padding go through layout and stutter on a 120 Hz screen. Swap them: size becomes
  `scale()`, position becomes `translate()`. Animate height only for an accordion.
- **Never `transition: all`.** List the exact properties.
- **Budget for 120 Hz.** One frame is 8 ms at 120 Hz, so design against that, not against 16.7 ms.
- **Keep the main thread free during motion.** Don't set framework state on every frame of a drag, scroll or pointer
  move. Changing a CSS variable on a parent restyles every child, so write the transform on the element itself. Add
  `will-change: transform` only to something you measured dropping frames, and never to large containers.
- **Measure, don't assume.** On the longest real data, with 4x CPU throttling, measure frame time while scrolling and
  dragging, and the style and layout cost of one typical interaction. A single bad CSS selector can make every
  interaction restyle the whole page. A `:has()` that reads an inline `style` attribute did exactly that in one app,
  at 30 ms per write, and nothing looked wrong until it was measured.
- **Feel fast.** Respond at once (optimistic updates, skeletons in the real layout) and never block input while
  working. Audio decoding and synthesis must not delay the visual response.

## Phase 13. Test by use, then review in the browser

Run these; don't assume:

1. **Do the top tasks yourself**, scripted in a real browser on real data (or a copy of it). Count the steps and
   compare them with the task table.
2. **Extremes:** a 200-item list, the longest name, empty, error, a slow network.
3. **The phone, one-handed,** at the real device size. Can the thumb reach every top task? Does each gesture have an
   alternative?
4. **Keyboard only** for every top task. Check that focus is visible and lands where expected after anything opens
   or closes.
5. **Both themes, both widths,** no horizontal scroll at 390 px or 1280 px, no console errors, and a contrast check
   of every text pair.
6. **What the user actually sees.** Use their settings, custom CSS, data, device and network, and look for caches
   and service workers serving stale files. When the user reports something you can't reproduce, suspect the gap
   between your test and their setup before declaring it fixed.
7. **Side by side.** When matching a reference (a mockup, a comp, the original), list the details in a table and
   mark each one pass or fail.

### The browser review loop
After every build or round of fixes, open the result in a real browser (Playwright with Chromium where available)
and look at it as the user would:

1. **Screenshot every screen you changed** at 390 px and 1280 px, in both themes, and in the states that matter:
   empty, loading, full, error, a menu open, a sheet open. Look at each one. Check it against the ban list, do the
   blur test, and walk through it:
   - **First 5 seconds:** is the main action obvious?
   - **Feeling:** does it create the intended emotion?
   - **Load:** is anything on screen that the next decision doesn't need?
   - **The 100th use (apps):** what will annoy them?
2. **Watch the motion slowed down.** Slow the animations to about 10% speed (through the DevTools protocol's
   `Animation.setPlaybackRate`) and capture frames of every transition you touched. Look for things that pop instead
   of moving, scale from the wrong corner, exit in a different direction from how they entered, overshoot, or leave
   a gap that snaps shut. Then trigger each one twice quickly to check that it reverses smoothly instead of
   restarting.
3. **Check sound,** if there is any: each mapped action plays its sound once, nothing plays before the first gesture
   or with the toggle off, the toggle survives a reload, and ten fast taps don't distort.
4. **Probe what is hard to use.** Script checks for targets under 44 px on a phone, text under 4.5:1, focus that gets
   lost or trapped, controls without a visible label, and horizontal scroll. Try the obvious wrong move as a new
   user would: tap the thing that looks tappable, press Escape, press back, double-tap submit.
5. **List the findings** in a table, worst first:

   | Issue | Where | Who it hurts | Fix |
   |---|---|---|---|

6. **Fix, then repeat the loop** until nothing serious is left. Under "Fixes only" (Phase 1, Q2), fix what was
   agreed, and bring anything new to the user as a proposal instead of fixing it unasked.

## Phase 14. Record taste, then report

**Write down every verdict** in the project's memory file (PROJECT_MEMORY.md, DESIGN.md or the brief): the interview
answers, the user's words, the date and the rule each implies. "I do not use this", "brown isn't warm", "too many
lines", "the animation is too slow" and "the click sound is annoying" are each worth more than any rule in this skill.

**Report a scorecard** after building, with pass or fail for each row. Mark rows that don't apply to the mode as n/a.

| Rule | Result | Evidence |
|---|---|---|
| Interview | | the rounds asked, the confirmed summary, or the assumptions listed if the user said "you decide" |
| Scope respected | | redesign, fixes or polish, and nothing beyond it without a yes |
| Mode chosen | | site or app, and why |
| Taste record read | | the file, the rules applied from it |
| Task table (app) | | top five tasks, frequency, steps before and after |
| Concepts and prototype (site) | | the 5 concepts and scores, what was prototyped, the variations |
| Ban list clean | | grep for gradient, italic, monospace, `border`, `<hr`, `box-shadow`, radius, `ease-in`, `transition: all`, `scale(0)`, with a reason for each that remains |
| Separation ladder | | how many lines remain and why, ΔL\* between adjacent surfaces |
| Layout from content | | measure in ch, sidebar width, the zones and which one dominates, blur test result |
| Warmth and life | | each checklist item |
| Fonts and layouts rejected | | the lists, the chosen faces and layout |
| Scales and tokens | | type sizes, radii, control heights, motion curves and durations |
| Motion | | animation level, the frequency rule applied, durations under 300 ms, entrances and exits matched, interruptible, transform origins |
| Sound | | n/a if declined, otherwise the toggle, the sound map, the source of each sound (and SOUNDS.md for found files), music controls |
| Icons | | the set, the double-checks |
| Four states | | each control's working, success and failure feedback |
| Phone posture | | thumb reach, sheets, safe areas, gesture alternatives |
| Accessibility | | contrast, keyboard, live regions, reduced motion, sound never the only signal |
| Feel and performance | | measured numbers (frame time, interaction cost, throttle) |
| Tested by use | | tasks run with step counts, extremes, keyboard, phone, the user's real setup |
| Browser review | | screenshots taken, slowed-motion check, the findings table and what was fixed |
| Hero (site) | | what it is, its states, its keyboard path, why it fascinates |
| Taste recorded | | what was written, and where |
