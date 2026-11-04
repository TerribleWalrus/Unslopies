---
name: unslop-design-1-5
description: Unslop Design 1.5. Design and build front ends that look like a specific studio made them for this subject, and that feel warm, alive and easy to live in. Covers websites and apps alike, including landing pages, web apps, app shells, chat UIs, dashboards, settings screens, mobile layouts, skins and themes for existing apps, mockups, redesigns and design reviews. It replaces unslop-design 1.0, so use this one whenever both apply. Also use it when the user only says "make it look good", "it feels lifeless", "too many lines", "it's cold", "restyle this" or "it's hard to use".
---

# Unslop Design 1.5

A design is good when it looks like a specific studio made it for this subject and the people who use it are comfortable
in it for hours. Version 1.0 fought generic looks. 1.5 keeps that and adds what 1.0 missed: designs that pass every
ban and still feel dead, built from stripes and divider lines, with no sense of how the thing is used.

**What changed from 1.0**
- You decide first whether you are building a **site** (visited) or an **app** (lived in). Apps start from tasks and
  frequency, not from concepts, and they have no forced hero.
- The bans target the cliché, not the tool. Soft shadows on layers that float, italics the content needs, and rounded
  cards that group a real unit are all allowed.
- **Divider lines as the main structure are banned.** A separation ladder (Phase 3) replaces them.
- Layout comes from the shape of the content and the tasks (Phase 3), not from a section template.
- New phases: warmth and life (4), phone posture (7), feel and performance (9), test by use (10), record taste (11).

## The philosophy (read once, apply everywhere)

1. **People live in an interface, they don't only look at it.** Comfort beats rigour. A screen that impresses for
   five seconds and tires the eye after an hour has failed.
2. **The content is the life, and the chrome recedes.** Faces, names, the user's words and the user's colours carry
   the warmth. Never override a content setting the user chose (their text colours, fonts, sizes).
3. **A feature that isn't used is clutter.** A permanent panel the user never asked for makes the app worse, however
   pretty it is. "I don't use this" is a design verdict.
4. **Separate with space and surfaces, not lines.** Lines make a layout look like a form. Space and tonal surfaces
   make it look composed.
5. **Warmth comes from light and accent, not from brown.** Dark brown reads as black. Warmth needs a lifted reading
   surface, a hue-biased neutral and one warm accent.
6. **Feel is part of the design.** A 30 ms stall on each tap, a drag that lags the finger or a panel that vanishes
   instead of closing all read as cheap, whatever the palette.
7. **A phone is a different posture.** The user holds it with a thumb, in a bus, in the dark. A desktop layout made
   narrower is not a phone design.
8. **Behaviour is part of the design.** Where focus lands, what Escape does and what a button says while it works are
   design decisions. Leave them undecided and they become frustrations.
9. **What the user sees is the real test.** Their data, their settings, their device and network, their cache.
   Your clean test page is only a proxy.
10. **Taste is evidence, so write it down.** Every verdict the user gives is a rule for next time.
11. **Consistency comes from one source.** One icon set, one token file, one motion curve and one shared kit. If
    something is defined twice, it will drift.
12. **Compare details, not impressions.** When matching a reference, go detail by detail with pass or fail. "Looks
    about right" hides the twenty small misses that make it feel off.

## Phase 0. Read the room

Run the phases in order. The written steps (the task table or concepts, the rejection lists, the scorecard) are what
make the output different, so write them in the planning notes rather than keeping them in your head.

**Read the project's taste record first.** Look for PROJECT_MEMORY.md, DESIGN.md, PRODUCT.md, `.ui-craft/brief.md`,
CLAUDE.md and any notes on earlier rounds. The user's recorded words outrank this skill. If they asked for a hero,
build one. If they banned something this skill allows, it's banned. Other design pipelines (Impeccable, ui-craft)
can run the process, and this skill's bans and checks apply on top.

**Pick the mode** and write one line on why:

| | Site | App |
|---|---|---|
| Who | a first-time visitor, for minutes | a returning user, for hours, daily |
| Their job | understand and act once | do the same few tasks fast, many times |
| You start from | real-world moments and concepts (Phase 1S) | tasks and how often they happen (Phase 1A) |
| Hero | exactly one, detailed and interactive | none forced: the core loop done beautifully is the signature |
| Boldness goes into | the hero, the paradigm, the layout | comfort, the core loop, the small details |
| Freshness test | "Did they see this layout on another site this week?" | "Is this annoying on the 100th use?" |

A product with both (an app plus its marketing page) gets each surface in its own mode.

**Reskinning an existing app:** list the hooks first (the IDs, classes, attributes and events its code binds to).
Change appearance, keep the wiring. Turning the skin off must restore the original look. Test the original's
interactions before and after.

## Phase 1A. App: start from the tasks

Write this in the planning notes before any visual work:

1. **Who and where.** Devices, posture (desk, sofa, one-handed phone), session length, lighting, network (local or a
   slow tunnel), and whether it is installed or opened in a browser tab.
2. **The task table.** List the top five tasks with how often each happens and its step count today and target:

   | Task | How often | Steps now | Target |
   |---|---|---|---|
   | Send a message | every turn | 2 | 1 |
   | Switch to a recent chat | several times a day | 4 | 2 |

3. **Place by frequency.** Anything used every turn stays visible and within reach. Daily tasks are one step away,
   weekly tasks two, and rare ones go in a menu or search. Anything that stays on screen must serve a top task. Run
   the "I don't use this" test on it, and if it fails, make it on demand and dismissible.
4. **Put the main action where the hand is.** On a phone that is the bottom third. On a desk it sits next to where
   the eyes already are (the composer under the conversation, the save button by the form it saves).
5. **Take a real data inventory.** Find the longest name, a 200-item list, the empty state, a single item, an error
   and a slow load. Design for these, not for the four tidy rows in your head.
6. **Design the dominant state first.** Find the state the app spends the most time in (a reply streaming in, a
   list loading, a sync running) and design it before the idle screen. It is what the user stares at.

## Phase 1S. Site: concept, then prototype

1. **Real-world moments.** List 8 or more physical moments, objects or places from the subject's world that people
   already have feelings about, across the senses and before, during and after use.
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

## Phase 2. Ban list: the clichés, not the tools

Never ship these unless the user asks for them. The right-hand column says where the underlying tool is fine.

| Banned cliché | The tool is fine when |
|---|---|
| **Lines as the main structure:** a hairline or `<hr>` between every row, section, header and sidebar, or a 1px stripe wherever two areas meet | dense data tables, an input's outline, a scroll edge that needs a hint (Phase 3, rung 5) |
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
| Motion "because": fade-up on every section, scroll-reveal from opacity 0, everything animating in | the motion explains a change of state (Phase 5) |
| Grey on grey: secondary text so dim the app reads as disabled | never (see the text floors in Phase 4) |
| Emoji as icons | never |
| Purple-blue, cream plus terracotta, black plus one neon accent, brown on brown sold as "warm" | never |

## Phase 3. Structure: space first, lines last

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
- **Let the tasks decide the placement.** The task table from Phase 1A says what is visible, what is one step away
  and what is hidden.
- **Blur test.** Blur a screenshot by about 8 px, or squint. You should see a few shapes of different sizes. If you
  see stripes of equal height, the layout is a list of sections, so go back.

## Phase 4. Warmth and life

Check each item and write the evidence:

- **Neutrals with a hue bias** toward the accent, not pure mid-grey. Pure white or near-black grounds are fine when
  chosen on purpose.
- **Warmth from light and accent.** Use one warm accent in a few deliberate places. Brown surfaces below about
  L\* 12 read as black, so lift the reading surface (around L\* 19–22 on dark themes) before you expect any hue to
  show. Low-opacity noise texture can add material warmth, but a gradient can't.
- **Rounded and concentric** (Phase 5), soft but not bubbly.
- **Text that is comfortable for hours.** Body text is 16–17 px with a line height near 1.5. For apps, aim for
  contrast floors of about 10:1 for primary text, 7:1 for secondary and 4.6:1 for tertiary, and avoid stark pure
  white on pure black for long reading. Body prose must never be the dimmest thing on screen.
- **Signs of life:** the content's own faces and colours (avatars, a colour per speaker), relative times ("2 min
  ago"), unread dots, typing and streaming indicators, real names, and empty states that say what to do next.
- **Human copy.** Buttons are verbs ("Save changes", not "Submit"), and messages are plain sentences that say what
  happened and what to do.
- **Motion that responds** to the user: presses press, drags follow, things settle (Phase 9).
- **Both themes designed**, not inverted. Check the taste record for which one is the default.

## Phase 5. Rejection protocol and the detail system

### Rejection (write it down before any code)
1. **Fonts.** List the first 10 fonts that come to mind. All 10 are out, so pick from outside the list. Each face
   must read well at 16 px, with clear `Il1` and `0O`, and cover the weights you need. Check the taste record for
   faces the user already rejected.
2. **Layouts.** List the first 5 layout ideas and reject them all. A site's candidate comes from the subject's own
   world. An app's candidate must serve the task table, so a fresh layout that adds steps loses.
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
- **One motion language.** Use one easing curve and two or three durations (about 160 ms for micro, 280 ms for
  components and 600 ms for a hero). Every transition uses them.
- **Purposeful motion only.** Each animation explains a state change: selecting, moving, revealing or closing.
- **Hidden symmetry.** Build on a module tied to the subject and reuse it in spacing, grid and ornament.
- **Consistent edges.** Siblings share inner padding, baseline and alignment.
- **One meaning per token.** If the accent means selection, brand and error at once, it means nothing. Reserve a
  hue for errors.
- **Icons from one set**, with one stroke width and one size grid, and a visible label or tooltip on every icon
  button. Draw custom SVG icons from simple geometry, then check each twice: trace the coordinates, and ask what a
  stranger would call it. Redraw if either check fails.
- **Images only of real content.** No stock filler.

## Phase 6. Behaviour: every action answers back

Write down the four states of every interactive element before building it:

- **Idle:** it looks interactive, with a clear label and a visible focus ring.
- **Working:** anything that takes more than about 300 ms shows it is happening (the label changes, progress text
  appears, the control is disabled while busy).
- **Success:** a visible confirmation in place, near where the user acted.
- **Failure:** what failed and how to fix it, next to the control. It never fails silently.

Also:
- **Openings and closings are decided.** When something opens, focus moves into it (usually to its close control or
  first field). When it closes, focus returns to what opened it. Escape, the X, a tap on the scrim and the back
  gesture all close it the same way.
- **Keyboard focus shows a focus ring, not the hover shade.** A focused button keeps its own colour.
- **Limits are visible.** A stepper at 1 shows it can't go lower.
- **Navigation is obvious.** The user always knows where they are and how to get back.
- **No faked outcomes.** If nothing was sent or saved, say so.
- **Every control has a pressed state**, and every clickable row, chip or pill is a real `<button>` or link.

## Phase 7. Phone posture

Design the phone as its own layout, not as a squeezed desktop:

- Primary actions sit in the bottom third, within thumb reach. Secondary panels open as bottom sheets you can drag
  down to close, and navigation goes in a drawer or a bottom bar.
- Gestures (swipe, long-press, drag) always have a visible alternative.
- Respect safe areas (`env(safe-area-inset-*)`) and the on-screen keyboard. The composer or form stays visible above
  the keyboard.
- Targets are at least 44 px, and spacing tightens less than you'd think: thumbs are bigger than cursors.
- Test at the real device size of the user's phone if you know it, and at 390 px if you don't.

## Phase 8. Accessibility (WCAG 2.2 AA minimum)

- Text contrast is at least 4.5:1, and 3:1 for large text and UI borders, in both themes, accent pairs included.
- Every task works by keyboard alone in a logical order with a visible focus ring. Sites get a skip link.
- Anything visual-only (canvas, 3D, SVG scene) has a text or control equivalent.
- Colour is never the only signal. Pair state colours with a word or an icon.
- Dynamic results are announced through `aria-live` or `role="status"`.
- Every input has a label, with errors tied to it through `aria-describedby` and `aria-invalid` on the input.
- Sizes use rem so text zoom works.
- Motion honours `prefers-reduced-motion` and any reduced-motion setting the app already has. Sites with a moving
  hero also get an in-page Effects toggle.
- Sound never autoplays and always has a visible toggle. Effects confirm actions (an item added, a task done, an
  error) and never decorate.

## Phase 9. Feel and performance

- **Motion follows the finger.** A drag tracks the pointer 1:1, and on release it carries the pointer's velocity
  into the settle, using the same curve as everything else.
- **Exits as well as entrances.** Anything that animates in also animates out. A sheet slides away, it doesn't
  vanish.
- **Animate only `transform` and `opacity`.** Anything that touches layout stutters on a 120 Hz screen.
- **Measure, don't assume.** On the longest real data, with 4x CPU throttling, measure frame time while scrolling and
  dragging, and the style and layout cost of one typical interaction. A single bad CSS selector can make every
  interaction restyle the whole page. A `:has()` that reads an inline `style` attribute did exactly that in one app,
  at 30 ms per write, and nothing looked wrong until it was measured.
- **Feel fast.** Respond at once (optimistic updates, skeletons in the real layout) and never block input while
  working.

## Phase 10. Test by use

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
8. **Look at every screen you changed** in a screenshot. Check it against the ban list, do the blur test, and walk
   through it:
   - **First 5 seconds:** is the main action obvious?
   - **Feeling:** does it create the intended emotion?
   - **Load:** is anything on screen that the next decision doesn't need?
   - **The 100th use (apps):** what will annoy them?

## Phase 11. Record taste, then report

**Write down every verdict** in the project's memory file (PROJECT_MEMORY.md, DESIGN.md or the brief): the user's
words, the date and the rule it implies. "I do not use this", "brown isn't warm" and "too many lines" are each worth
more than any rule in this skill.

**Report a scorecard** after building, with pass or fail for each row. Mark rows that don't apply to the mode as n/a.

| Rule | Result | Evidence |
|---|---|---|
| Mode chosen | | site or app, and why |
| Taste record read | | the file, the rules applied from it |
| Task table (app) | | top five tasks, frequency, steps before and after |
| Concepts and prototype (site) | | the 5 concepts and scores, what was prototyped, the variations |
| Ban list clean | | grep for gradient, italic, monospace, `border`, `<hr`, `box-shadow`, radius, with a reason for each that remains |
| Separation ladder | | how many lines remain and why, ΔL\* between adjacent surfaces |
| Layout from content | | measure in ch, sidebar width, the zones and which one dominates, blur test result |
| Warmth and life | | each checklist item |
| Fonts and layouts rejected | | the lists, the chosen faces and layout |
| Scales and tokens | | type sizes, radii, control heights, motion curve and durations |
| Icons | | the set, the double-checks |
| Four states | | each control's working, success and failure feedback |
| Phone posture | | thumb reach, sheets, safe areas, gesture alternatives |
| Accessibility | | contrast, keyboard, live regions, reduced motion |
| Feel and performance | | measured numbers (frame time, interaction cost, throttle) |
| Tested by use | | tasks run with step counts, extremes, keyboard, phone, the user's real setup |
| Hero (site) | | what it is, its states, its keyboard path, why it fascinates |
| Taste recorded | | what was written, and where |
