---
name: unslop-design-1-6
description: Unslop Design 1.6. Design and build front ends that look like a specific studio made them for this subject, feel warm, alive and easy to use, and move and sound smooth and calm in the spirit of Apple's design, built to ship with real content. Covers websites and apps alike, including landing pages, web apps, app shells, chat UIs, dashboards, settings screens, mobile layouts, skins and themes for existing apps, redesigns, design reviews, animation passes and adding sound effects or music. It replaces unslop-design 1.5 and 1.0. Also use it when the user only says "make it look good", "it looks AI-made", "it feels lifeless", "too many lines", "it's cold", "restyle this", "it's hard to use", "it's not creative enough", "make the animations smoother", "it feels janky" or "add sounds".
---

# Unslop Design 1.6

A design is good when it looks like a specific studio made it for this subject, the people who use it are
comfortable in it for hours, and it is ready to ship. People use this skill to make their product stop looking
AI-made without making it harder to use, so every rule here serves both: a unique character and the user first.

## How to run this skill

1. **Read the room** (Phase 0): the taste record, the design system, the deploy target and the real content.
2. **Interview the user** (Phase 1) until what they want is clear and confirmed.
3. **Plan on paper:**
   - the task table or concepts (Phase 2);
   - the feeling table (Phase 5);
   - the rejection lists and tokens (Phase 6);
   - the sound map, if there is sound (Phase 8).
4. **Show 2 or 3 takes of the first screen** and let the user pick or mix them (Phase 1, "Help them see it").
5. **Build,** following Phases 3–12.
6. **Review in a real browser** (Phase 13), fix, and repeat.
7. **Record the user's taste and report** (Phase 14).

**The scope decides how much runs.** The user picks it in the interview:

| | Polish | Refine | Rethink |
|---|---|---|---|
| What changes | spacing, type, colour, states, motion, sound | layouts within the current structure and navigation | the concept and structure; the content and wiring are kept |
| Interview | short: scope, animation, sound, what must stay | full | full |
| Tasks or concepts (2) | skip | task table only | full |
| Feeling table (5) | warmth and life checks only | full | full |
| Rejection (6) | tokens only; keep the fonts and layout unless asked | fonts if asked; layouts within the structure | full |
| First-screen takes | before and after of one screen | yes | yes |
| Everything else (3, 4, 7–14) | yes | yes | yes |

**Planning notes** go in your reply or in the project's design file (DESIGN.md or the brief), never in the shipped
product. Write them down rather than keeping them in your head: the written steps are what make the output
different.

**Reference files.** Load them when the step needs them:
- `references/motion.md`: before writing any animation, transition or gesture.
- `references/sound.md`: when the user said yes to sound.
- `references/review.md`: before the browser review, and for the scorecard.

## The philosophy

1. **Ask what they want, don't pitch.** What it is, who it is for and what they want from it are the user's ideas.
   Draw them out with a few specialised questions that make them think, and let them answer in their own words.
   Don't ask how it should feel: people can't answer that. Read the feeling from what they want, and let them judge
   it in the takes. Claude's own ideas are the generic ones.
2. **Build for deploy, not for a demo.** People will rely on what ships: the data is real, the links go somewhere and
   the copy is final. A good-looking demo with invented content isn't finished work.
3. **Users first, character kept.** When a creative choice hurts usability, change the form of the idea until it
   serves the user. Don't throw the idea away for a template, and don't keep it as it is at the user's expense.
4. **People live in an interface.** Comfort beats rigour. A screen that impresses for five seconds and tires the eye
   after an hour has failed. A feature nobody uses is clutter: "I don't use this" is a design verdict.
5. **The content is the life, and the chrome recedes.** Faces, names, real things and the user's words carry the
   warmth. Never override a content setting the user chose (their text colours, fonts, sizes).
6. **Separate with space and surfaces, not lines.** Lines make a layout look like a form.
7. **Warmth is a temperature, not a feature list.** It lives in the ground, the surfaces, the type and the voice. A
   cool shell with a warm accent and a few friendly badges still reads cold.
8. **Motion is physics, and sound is feedback.** Things come from somewhere and go back there, respond the moment
   they're touched, and can be interrupted halfway. A sound confirms what the hand just did. If the user waits for
   either one, or notices it on the hundredth use, it's wrong.
9. **Behaviour and posture are design.** Where focus lands, what Escape does and what a button says while it works
   are design decisions. A phone is held with a thumb, on a bus, in the dark: a narrower desktop is not a phone
   design.
10. **What the user sees is the real test.** That means their data, device, settings and network, judged detail by
    detail rather than by impression.
11. **One source, and taste is evidence.** One token file, one icon set, one motion language, one sound palette.
    Every verdict the user gives is a rule for next time, so write it down.

## Phase 0. Read the room

- **The taste record.** Look for PROJECT_MEMORY.md, DESIGN.md, PRODUCT.md, `.ui-craft/brief.md`, CLAUDE.md and notes
  from earlier rounds. The user's recorded words outrank this skill. If they asked for something this skill bans,
  build it. If they banned something this skill allows, it's banned.
- **The existing design system.** Reuse its tokens, components and conventions, and use this skill to fill the gaps.
  Precedence runs: the user's words, then the project's system, then this skill. Other design pipelines (Impeccable,
  ui-craft) can run the process, and this skill's bans and checks apply on top.
- **An existing project.** Before the interview, run it, take screenshots at 390 px and 1280 px, try its main tasks
  and note the worst 3 to 5 problems. These answer the interview's redesign-or-fixes question with evidence.
- **The deploy target.** Find out where it ships: a website, an app shell, a sandboxed embed or artifact, a webview,
  an email. Then check what that target blocks:
  - autoplay;
  - motion sensors and other device APIs;
  - pop-ups;
  - external fonts and scripts;
  - storage.

  Plan a fallback for every interaction that depends on one of these. Put the tokens wherever the project keeps them:
  CSS custom properties, the Tailwind theme, or a constants file for Framer Motion or a native app.
- **The audience's language.** If the audience reads another script (Khmer, Thai, Arabic, Chinese, and so on), choose
  faces that cover it, test the longest real words, and use the local currency, date and number formats.
- **Real content, verified.** Build with the user's real content. When the product needs real-world facts (places,
  products, prices, people, events), research them and check each one against at least one current, reliable source.
  Keep the sources and give them to the user.
  - **Never invent facts and present them as real:** ratings, review counts, opening hours, prices, quotes,
    testimonials, statistics or people.
  - **If a fact can't be verified, leave it out** and link to a live source instead (a maps link for hours, the
    official site for prices). Say on the page that it can change.
  - **If the user has the data, ask for it** rather than guessing.
  - **Placeholder content is only for a mockup the user asked for.** Label it as a mockup, and never ship it.
- **Pick the mode,** and write one line on why:

  | | Site | App |
  |---|---|---|
  | Who | a first-time visitor, for minutes | a returning user, often, for longer |
  | Their job | understand and act once | do the same few tasks fast, many times |
  | You start from | real-world moments and concepts (2S) | tasks and how often they happen (2A) |
  | Signature | one detailed, interactive hero | the core loop done beautifully, on the first screen |
  | Freshness test | "Did they see this layout on another site this week?" | "Is this annoying on the 100th use?" |

  A product with both (an app plus its marketing page) gets each surface in its own mode.
- **Reskinning an existing app.** List the hooks first: the IDs, classes, attributes and events its code binds to.
  Change the appearance, keep the wiring, and test the original's interactions before and after. Turning the skin
  off must restore the original look.

## Phase 1. Interview the user

The interview draws out what the user wants and helps them see it. It asks rather than proposes, and keeps asking
until you both agree on what is being built. It starts with what they want, never with how it should feel.

**Two kinds of question**
- **Want questions** are answered by the user, in their own words, never by Claude: what they need done, who it is
  for, what gets in the way today, and what "right" looks like when it's finished.
  - They are open. Give no options, no leading examples and no recommended answer, and don't suggest a subject,
    audience or concept.
  - **Never ask how it should feel.** No mood words to pick from ("calm, lively, cosy or sharp?"), no "what should it
    feel like?", no "what style do you like?". Most people can't answer that, and the answer they give is a guess.
    The feeling is read from what they want (Phase 5) and judged by the user in the takes.
- **Craft questions** get a recommended answer, worded so that "yes" accepts it: the scope, the animation level,
  sound, and where sounds come from.

**How to ask**
- **What they want comes first.** Round 1 is want questions only. Craft questions wait until round 2, once the want
  is clear, because the right scope, motion and sound depend on it.
- **Specialised, not generic.** Build every question from their project: a screen they have, a task they named, a
  word they used, a real moment from their week. A good question could only be asked of this user. "When you open
  Home in the morning, what do you look at first, and what do you do straight after?" beats "Who is your
  audience?" or "What are your goals?"
- **Make them think.** Ask about real moments and real decisions, not opinions or taste:
  - the last time they did the task, where it slowed them down, and what they did instead;
  - what they would keep if they could keep only three things on the screen;
  - what someone watching over their shoulder would see them struggle with;
  - what would make them say "that's it" the first time they open the finished thing.

  Each question is one concrete thing, answered in a sentence or two. Never ask "describe your vision".
- **Let them answer.** Ask, then stop and wait. Don't answer for them, don't offer a default, and don't rephrase their
  answer into your own words. If an answer is short or vague, ask one follow-up about that answer ("You said it
  gets messy. Messy where: the list, the buttons, or the numbers?") instead of filling the gap yourself.
- **Grow questions from answers.** Each answer opens one or two smaller follow-ups. For example, "a price filter"
  leads to "what counts as cheap for you?", which leads to "riel, dollars or both?". Stop when the answer would no
  longer change what you build.
- **Ask in rounds.** Round 1 is 3 or 4 want questions. Later rounds are 3 to 5 questions, with the ones that change
  the most work first. Wait for the replies, then build the next round.
- **Look up facts yourself.** Ask the user only for what only they know. Don't ask what you can check (the framework,
  whether a file exists), and don't ask what the prompt or the taste record already answers.
- **Number every question,** and add the ➡ line to craft questions only:

  ```
  ❓ **Q1** - **<short title>**: <an open want question built from their project>

  ---

  ❓ **Q2** - **<short title>**: <a craft question>

  ➡ <your recommended answer, and one line on why>
  ```

- **Help them see it.** Before the full build, always show 2 or 3 quick takes of the first screen, built from what
  they want, the feeling table and the rejection lists. Each take reads the feeling a different way. These are
  rough but real screenshots, and the user picks or mixes: that pick is how the feeling gets decided, not a question.
  A "you decide" covers craft choices, not the look. The takes are the cheapest place to find out that a design
  lacks life.
- **Stop when nothing is left undecided.** Write a five-line summary in the user's own words and ask them to confirm
  it.
  - If the user says "just build it", take the craft recommendations and list them as assumptions.
  - Want questions they skipped stay open: build from what they did say, and ask again with the takes.

**Round 1: what they want.** Ask 3 or 4, built from their project. Drop anything the prompt already answers.

| What to learn | Ask it like this (fill in their screen, task or words) |
|---|---|
| The first job | "When you open <screen>, what is the first thing you need done, and what do you do straight after?" |
| What gets in the way today | "Think of the last time you <task>. Where did it slow you down or annoy you?" |
| What finished looks like | "It's finished and you're using it on a normal day. What is on the screen that isn't there now?" |
| What matters most | "If <screen> could only keep three things, which three? What would you never miss?" |
| Who else and where | Only if you can't tell: "Who else opens this, and where are they when they do: at a desk, on a phone, in a hurry?" |
| What must stay | "Any colours, fonts, logo or content that must stay? Anything you already dislike?" |

**Round 2: craft.** Once the want is clear, ask these with a recommendation each.

| What to decide | Ask it like this | Recommendation |
|---|---|---|
| Redesign or fixes (existing projects) | Show the worst findings from Phase 0, then: "Redesign, fixes only, or fixes first and then decide?" | fixes first when the bones are sound; redesign when the layout itself causes the problems |
| Scope | Polish, Refine or Rethink (see the scope table) | Polish for "small fixes", Refine for an unclear request, Rethink for a new build or a redesign |
| Animation level | **Calm:** feedback and state changes · **Standard:** adds menus, sheets, toasts and page transitions · **Expressive:** adds one choreographed signature moment and playful springs | Calm for tools used daily, Standard for most products, Expressive for marketing or anything game-like |
| Sound | No · sound effects · effects and background music | No, unless the subject is playful, musical, a game or for children |

**Later rounds grow from the answers.** For example:
- **Each feature they name:** what it does first, its edge cases, and how they would use it themselves.
- **A reference they bring up** (an app, a place, an object): "What do you like about it?", in their words, then
  show takes on it and ask which is closest.
- **A redesign:** what must stay (the name, URLs, a beloved feature).
- **Fixes only:** confirm the fix list, ordered by how much each problem hurts the user. Anything beyond it needs a
  yes.
- **Sound:** their own files or synthesized; on or off on first visit (recommend off).
- **Music:** their track, a CC0 or royalty-free one you find, or a synthesized loop; whether it reacts to what the
  user does. Its mood comes from what they want, shown as a short sample, not asked as a word.
- **Expressive motion:** which single moment gets the most motion.

## Phase 2A. App: start from the tasks

1. **Who and where.** The device, the posture (desk, sofa, one-handed phone), the session length, the lighting and
   the network. Is it installed or opened in a tab?
2. **The task table.** List the top five tasks, how often each happens, and its step count now and the target:

   | Task | How often | Steps now | Target |
   |---|---|---|---|
   | Send a message | every turn | 2 | 1 |

   The "How often" column also decides motion and sound: the more often an action happens, the less it animates and
   the quieter it sounds.
3. **Place by frequency.** What's used every turn stays visible and within reach. Daily tasks are one step away,
   weekly tasks two, and rare ones go in a menu or search. Anything that stays on screen must serve a top task, or it
   becomes on demand.
4. **Put the main action where the hand is.** On a phone, that's the bottom third. On a desk, it's next to where the
   eyes already are.
5. **Take a real data inventory.** The longest name, a 200-item list, the empty state, a single item, an error and a
   slow load. Design for these, not for four tidy rows.
6. **Design the dominant state first.** That's the state the app spends the most time in (a reply streaming in, a
   list loading), because it's what the user stares at.

## Phase 2S. Site: concept, then prototype

1. **Real-world moments.** List 8 or more physical moments, objects or places from the subject's world that people
   already have feelings about, across the senses. Sounds count: they become the sound palette.
2. **Five concepts, built from the interview.** Start from the user's words and references, not from your own
   favourites. Each concept is:
   - one metaphor the page lives inside;
   - its hero mechanic, meaning what the visitor does with their hands;
   - how every section maps onto the metaphor.
3. **Score and pick.** Rate each concept from 1 to 5 on fascination, fit, clarity, accessibility, feasibility and
   freshness. Write one line on why the runner-up lost.
4. **Prototype the risky part first.** Build the hero mechanic alone. It must:
   - run smoothly;
   - pass the ban list;
   - read at phone width;
   - have a keyboard path and a reduced-motion path.
5. **The hero.** There is exactly one, and it comes from the subject: a tool, an object or a ritual from its world.
   - It has many small states and teaches or sells something real.
   - Its test: would someone play with it for 30 seconds without a reason?
   - It has a full keyboard and screen-reader path, and a pause control if it moves on its own for more than 5
     seconds.
   - Everything else stays calm.
6. **Multi-page sites.** Use a shared header, footer, stylesheet and script, and mark the current page with
   `aria-current="page"`. Each page has one job and its own `<title>`. The hero lives on the home page only.

## Phase 3. Ban list: the clichés, not the tools

Never ship these unless the user asks for them. The right-hand column says when the underlying tool is fine.

| Banned cliché | The tool is fine when |
|---|---|
| **Lines as the main structure:** a hairline or `<hr>` between every row, section, header and sidebar | dense tables, an input's outline, a scroll edge that needs a hint |
| **Boxes for everything:** every group a bordered card, boxes inside boxes | a card groups one thing the user acts on as a unit |
| **A flat, even build:** every area the same weight, full-width bands stacked down the page | never |
| **The template app, reskinned:** a header, rows of chips, a list of rounded cards and a bottom button, in the subject's colours | the user asked for plain, or the content is a dense working list (mail, files, logs) |
| Generic site layouts: hero plus 3 cards, bento grid, centred stack of sections, split hero, logo cloud, testimonial carousel | never |
| Generic app layouts: settings as one long ruled list, a dashboard of identical cards, everything one grey with borders between | never |
| **Creativity hidden behind a button:** the one inventive idea lives in a sheet while the first screen stays generic | never: the first screen carries the idea |
| **Decoration as life:** bunting, stickers, badges, coloured initials or meters on an unchanged generic structure | the element carries real information and the structure already carries the feeling |
| **A cool shell under a warm subject:** grey, slate or grey-teal grounds for food, home, people, evenings, celebrations | the subject itself is cool (a lab, ice, the sea, a bank vault) |
| Decorative gradients on backgrounds, text, buttons, borders or glows | a scrim over an image, or a fade at a scroll edge, so long as nobody sees it as a gradient |
| Glow, pulsing or floating orbs and blobs, glossy particles | never (render particles flat) |
| A shadow on every card, hover lift plus shadow | a soft shadow on something that really floats: menus, sheets, dialogs, a dragged item |
| Pills on everything, `rounded-full` cards, a radius picked per element | toggles, chips, tags, round buttons and avatars, within a concentric scale |
| Coloured accent bars on the side of cards, a sidebar in a loud accent | a small marker that carries meaning (unread, current, error) |
| Italic as decoration | the content's own meaning: quotes, titles of works, narration, the user's own formatting |
| Monospace for numbers, labels or "tech" flavour | code and anything typed exactly; numbers use `font-variant-numeric: tabular-nums` |
| Eyebrows: a small uppercase category label above every heading | a lead-in that is part of the copy ("Tonight, I'd go for…") |
| Motion "because": fade-up on every section, scroll-reveal from opacity 0 | the motion explains a change of state |
| Janky motion: `ease-in` on UI, growing from `scale(0)`, `transition: all`, animating width, height, top or left, a bounce on everything, animations that block input | never |
| Animating actions repeated 100+ times a day (shortcuts, command palette, typing, keyboard list navigation) | never |
| Sound that autoplays, plays on hover, keystroke or scroll, music with no pause, or sound as the only signal | never |
| Grey on grey: secondary text so dim the app reads as disabled | never |
| **A list that scrolls forever on a phone:** the same tall card repeated for screen after screen | never; reshape it (Phase 10) |
| **Invented facts shown as real:** made-up ratings, review counts, hours, prices, quotes, testimonials, statistics | never; leave it out or link to a live source |
| **Demo leftovers:** "sample data", "demo", lorem ipsum, placeholder names, test notes, dead links | a mockup the user asked for, clearly labelled |
| Emoji as icons | never |
| Purple-blue, cream plus terracotta, black plus one neon accent, brown on brown sold as "warm" | never |

## Phase 4. Structure: space first, lines last

**The separation ladder.** To separate two things, climb the ladder and stop at the first rung that works:
1. **Space.** Keep the gap inside a group at most half the gap between groups. Most "needs a line" problems are
   really "all the gaps are the same size".
2. **Alignment.** Shared edges and baselines make groups visible without drawing anything.
3. **Tonal surface.** A surface one step off the ground needs a lightness gap of at least 5 L\* (CIELAB). Cards step
   up and inputs step down.
4. **Elevation.** A soft, wide, low-opacity shadow, only for something that overlaps other content.
5. **Line.** Only for dense tables, input outlines and scroll edges. Derive it from its parent surface (about +6 L\*
   subtle, +14 L\* strong).

Every `border`, `outline` used as a border, `<hr>` and `box-shadow` needs a reason you could write down. Grep for
them before you finish.

**Layout from content geometry**
- **Reading width.** Prose runs at 60–75 characters (`max-width` in `ch`) at any viewport.
- **Lists are as wide as their names.** Truncate long names, with the full name still available.
- **Zones.** Use 3–5 zones of different weight: one dominant zone for what the user came to do, the rest receding.
- **Placement.** The task table decides what is visible, what is one step away and what is hidden.
- **Blur test.** Blur a screenshot by about 8 px. You should see a few shapes of different sizes, not stripes of
  equal height.

## Phase 5. Feeling, warmth and life

A design can pass every ban and still feel like a template with the subject's colours poured in. This phase stops
that.

**The feeling table.** The user doesn't name the feeling; you read it from what they want. Before any code, write 2
or 3 feeling words taken from their answers (the first job, what gets in the way, what finished looks like, who and
where), and quote the answer each word comes from. Then write how they change the base of every layer, not what gets
added on top. The takes test the reading: each take reads it a little differently, and the user's pick confirms it.

| Layer | What the feeling decides |
|---|---|
| Temperature and colour | the ground and surfaces, not only the accent; saturation; how much colour the content brings |
| Type | the display face, its size, weight and width; how loud headings are against the body |
| Rhythm and density | tight and bustling, or airy and slow; regular or deliberately uneven |
| Shape language | soft, cut, hand-drawn, stamped, printed, taken from the subject's own objects |
| The first screen's form | what the main view *is* |
| Motion character | snappy, bouncy or drifting; which one moment gets the most motion |
| Copy voice | how someone from this world would say it, plain and clear |
| Sound | the material the sounds are made of |

- **Decoration is not life.** Remove every ornament: if the feeling disappears with them, it was never built in.
- **One feeling, every layer.** If a row doesn't change, explain why in one line.

**Warmth**
- **Temperature matches the subject.** For a warm subject, the ground and surfaces lean warm too. Keep the neutrals'
  hue within about 40° of the accent's hue, or write the reason.
- **Lift warm darks.** Neutrals never sit at pure mid-grey. Brown and wine surfaces below about L\* 12 read as black,
  so lift the reading surface to around L\* 19–22. Low-opacity noise or a paper grain adds material warmth; a
  gradient can't.
- **Text is comfortable for hours.** Body text is 16–17 px with a line height near 1.5. In apps, aim for about 10:1
  contrast for primary text, 7:1 for secondary and 4.6:1 for tertiary. Body prose is never the dimmest thing on
  screen.
- **Both themes are designed,** not inverted, and both are warm.

**Life**
- **The subject's own material** is on the first screen: drawings of its real objects, the user's real photos,
  textures, and the words of that world.
- **Signs of life carry information:** real faces and names, relative times, unread dots, typing indicators, and empty
  states that say what to do next.
- **Human copy.** Buttons are verbs ("Save changes"), and messages say what happened and what to do, in the feeling
  table's voice.

**Creativity lives on the first screen**
- **The first screen carries the idea.** Inventive moments behind a button are welcome extras.
- **Apps change the form, not the step count.** The main view can become something from the subject's world while
  every top task keeps its target step count.
- **The template test.** Swap in a different subject's name and content. If the screen still works unchanged, it
  isn't designed yet.

## Phase 6. Rejection protocol and the detail system

**Rejection** (write it down before any code)
1. **Fonts.** List the first 10 fonts that come to mind. All 10 are out.
   - Pair a display face with character (for the name, headings and the signature moment) with a calm body face.
     One family is allowed only if it carries the feeling on its own.
   - Each face reads well at 16 px, with clear `Il1` and `0O`, and covers the weights and scripts you need.
2. **Layouts.** List the first 5 layout ideas and reject them all. For an app, the template (a header, chips, a list
   of cards and a bottom button) always counts as one of the five.
   - An app's candidate keeps the task table's step counts by changing the form, not by adding steps. "A fresh layout
     would add steps" is never a reason to fall back to the template.
   - A site's candidate comes from the subject's own world.
3. **Paradigm (sites).** Pick one not used in the last design: tabletop, isometric, page-as-a-place, paper cut-out,
   blueprint, printed matter, signage, instrument panel, cartographic, museum label, transit map, packaging dieline,
   or another.
4. **Theme.** Take the palette from a real material in the subject (a broth, a metal, a paper stock, a painted sign)
   or from the content. Use 4–6 colour tokens.

**Detail system** (define as tokens before building)
- **Scales, not noise.** About 6 type sizes, 5 radii, 3 control heights and one spacing scale, all of them used.
- **Concentric radius.** A child's radius equals the parent's minus the padding between them, for example
  24 → 16 → 10 px.
- **One meaning per token.** Reserve a hue for errors. An accent that means selection, brand and error at once means
  nothing.
- **Consistent edges and hidden symmetry.** Siblings share padding, baseline and alignment. Build on a module tied to
  the subject.
- **Icons.** Use one set with one stroke width and one grid, and give every icon button a visible label or tooltip.
  Draw custom icons from simple geometry, then check each one twice: trace the coordinates, and ask what a stranger
  would call it.
- **Illustrations.** Draw them from simple shapes in one consistent hand: the same stroke, palette and finish
  throughout. For a hand-made feel, an ink outline plus a slight displacement wobble works well. Check each drawing
  shows what it claims to.
- **Images are only of real content.** No stock filler.

## Phase 7. Motion

Read `references/motion.md` before writing any animation. The essentials:
- **Use the tokens.** Three curves (ease-out to enter and leave, ease-in-out to move, a drawer curve for sheets) and
  set durations. Controls stay under 300 ms, sheets under 400 ms. Never `ease-in` on UI.
- **The frequency rule.** Actions done 100+ times a day don't animate. Tens of times a day get colour or opacity
  only. The animation level sets how far the rest goes.
- **Physical.** Things enter from where they came and leave the same way, scale from their trigger, press on
  pointer-down, follow the finger 1:1, and stay interruptible. Nothing ever blocks input.
- **Reduced motion** keeps fades and drops movement. Long sequences jump to their result.

## Phase 8. Sound

Only if the user said yes. Read `references/sound.md`. The essentials:
- **Opt-in.** Sound is off on first visit, behind a visible toggle, and nothing plays before the first gesture.
  Music has its own play button and volume.
- **A sound map.** Every sound belongs to an action, plays at the same moment as the visual, and follows the
  frequency rule. There is no sound for typing, scrolling or hover.
- **The sources.** Synthesized by default; the user's files if they have them; found files only on request, with
  their licences recorded.
- **Never the only signal.**

## Phase 9. Behaviour: every action answers back

Write down the four states of every interactive element before building it:
- **Idle:** it looks interactive, with a clear label and a visible focus ring.
- **Working:** anything over about 300 ms shows it is happening (the label changes, the control disables).
- **Success:** a visible confirmation, in place, near where the user acted.
- **Failure:** what failed and how to fix it, next to the control. It never fails silently.

Also:
- **Openings and closings are decided.** When something opens, focus moves into it. When it closes, focus returns to
  what opened it. Escape, the X, a tap on the scrim and the back gesture all close it the same way.
- **Focus shows a focus ring,** not the hover shade.
- **Limits are visible.** For example, a stepper at its minimum shows it can't go lower.
- **The user always knows where they are,** and how to get back.
- **No faked outcomes.** If nothing was saved, say so, and play no success sound.
- **Every control has a pressed state,** and everything clickable is a real `<button>` or link.

## Phase 10. Phone posture

- **Thumb reach.** Primary actions sit in the bottom third. Secondary panels open as bottom sheets that drag down to
  close, and navigation goes in a drawer or a bottom bar.
- **Gestures always have a visible alternative.**
- **Safe areas and the keyboard.** Respect `env(safe-area-inset-*)` and the on-screen keyboard, so forms stay visible
  above it.
- **Target size.** Targets are at least 44 px, including the visible part of anything that overlaps.
- **Measure the scroll.** If one repeated item fills more than about three phone screens, change its form, keeping
  the item's character in the new form:
  - a compact row;
  - groups the user can open;
  - a horizontal row that snaps one item at a time, with a visible swipe hint and position dots.
- **Test at the real device size,** or at 390 px if you don't know it.

## Phase 11. Accessibility (WCAG 2.2 AA minimum)

- **Contrast:** text is at least 4.5:1, and large text and UI borders 3:1, in both themes, accent pairs included.
- **Keyboard:** every task works by keyboard alone, in a logical order, with a visible focus ring. Sites get a skip
  link.
- **Equivalents:** anything visual-only (canvas, 3D, an SVG scene) has a text or control equivalent.
- **Never colour alone:** pair state colours with a word or an icon.
- **Announcements:** dynamic results are announced through `aria-live` or `role="status"`.
- **Labels:** every input has one. Errors are tied to the input with `aria-describedby`, and the input gets
  `aria-invalid`.
- **Text zoom:** sizes use rem so it works.
- **Motion:** honour reduced motion, and give a moving hero an in-page Effects toggle.
- **Sound:** never the only signal.

## Phase 12. Feel and performance

- **Animate only `transform` and `opacity`** (plus `clip-path` and `filter` where they are composited). Swap size for
  `scale()` and position for `translate()`. Animate height only for an accordion. Never `transition: all`.
- **Budget for 120 Hz.** One frame is 8 ms.
- **Keep the main thread free during motion.**
  - Don't set framework state on every frame. Write the transform on the element itself.
  - A CSS variable changed on a parent restyles every child.
  - Use `will-change` only where you measured dropped frames.
- **SVG filters are expensive.** Displacement, turbulence and blur cost a lot. Put them on static elements, not on
  things that scroll or animate every frame.
- **Measure, don't assume.** On the longest real data, with 4x CPU throttling, measure frame time while scrolling and
  dragging, and the cost of one typical interaction. One bad selector can restyle the whole page on every write.
- **Feel fast.** Respond at once (optimistic updates, skeletons in the real layout) and never block input. Audio must
  not delay the visual response.

## Phase 13. Review in a real browser

Read `references/review.md` for the full loop, the scripts and the scorecard. The loop must cover:
- **The top tasks,** done yourself, with the steps counted.
- **Screenshots** at phone and desktop width, both themes, every state you changed. Look at each one yourself:
  overlaps, clipping and wrapping only show up to the eye.
- **The feeling check:** the feeling table, the blurred screenshot and the template test.
- **Motion slowed down,** and sound if there is any.
- **Phone one-handed, keyboard only, the extremes,** and the user's real setup.
- **Ready to ship:** no demo leftovers, links open, facts match their sources, the page height on a phone is
  reasonable, no console errors.
- **A findings table,** worst first, then fixes, then the loop again until nothing serious is left. Under "Fixes
  only", anything new goes to the user as a proposal.
- **What couldn't be checked,** such as how the sound actually sounds or touch on a real device, stated plainly in the
  report.

## Phase 14. Record taste, then report

**Write down every verdict** in the project's memory file (PROJECT_MEMORY.md, DESIGN.md or the brief): the interview
answers, the user's words, the date and the rule each one implies. Verdicts like these are worth more than any rule
in this skill:
- "I don't use this"
- "brown isn't warm"
- "too many lines"
- "it lacks life and warmth"
- "the scroll is way too long"
- "the animation is too slow"
- "the click sound is annoying"

When a verdict says the design lacks life or creativity, go back to the feeling table and the first screen's form.
More ornament on the same structure is not a fix.

**Report** the scorecard from `references/review.md`, with evidence for each row. Then give the link or files, the
sources used for real content, and anything that couldn't be checked.
