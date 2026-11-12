---
name: unslop-design
description: Unslop Design 1.7. Design and build front ends that look like a bold, specific studio made them for this subject, feel warm, lived-in, detailed and easy to use, and move and sound smooth and calm in the spirit of Apple's design, built to ship with real content. Covers websites and apps alike, including landing pages, web apps, app shells, chat UIs, dashboards, settings screens, mobile layouts, skins and themes for existing apps, redesigns, design reviews, animation passes and adding sound effects or music. It replaces unslop-design 1.65, 1.6, 1.5 and 1.0. Also use it when the user only says "make it look good", "it looks AI-made", "it feels lifeless", "too many lines", "it's cold", "restyle this", "it's hard to use", "it's not creative enough", "make the animations smoother", "it feels janky", "it looks mundane", "it's too safe", "it lacks detail" or "add sounds".
---

# Unslop Design 1.7

A design is good when it looks like a specific studio made it for this subject, the people who use it are
comfortable in it for hours, and it is ready to ship. People use this skill to make their product stop looking
AI-made without making it harder to use, so every rule here serves both: a unique character and the user first.

## The aim (read this first; every rule below serves it)

Make front ends that a person with taste would be proud to have designed, and that nobody could get from a one-line
prompt to an AI. Three things at once:
1. **Unique to this subject:** it could not be reskinned for another product unchanged, and it doesn't look like
   Claude's other work.
2. **Good taste when the user brings none:** most people can't describe what they want visually. Bring a point of
   view on type, colour, rhythm, motion and detail, and commit to it.
3. **Good to live with:** easy for a first-time visitor, and fast and comfortable for a power user on their
   hundredth hour. A look that wins on day one and slows people down on day thirty is a failure, not a style.

When a rule here seems to conflict with the aim, the aim wins; write down why.

**What 1.65 fixed.** Builds under 1.6 were usable but timid: ideas that could have gone much further stopped at the
first workable version; screens looked clean, new and empty, with nothing worn, handled or small to discover; and
mockups were treated as chores. Three new phases close this: the bold pass (5B), the lived-in detail system (5C) and
the rival critique (13B). They are not optional, and they run at every scope except "Small changes".

**What 1.7 adds.** Foundations from outside sources (`references/foundations.md`), and two named looks to step
away from for serious tools: civic admin and the SaaS starter pack (Phase 3B).

## How to run this skill

1. **Read the room** (Phase 0): the taste record, the design system, the deploy target and the real content.
2. **Interview the user** (Phase 1) until what they want is clear and confirmed.
3. **Plan on paper:**
   - the task table or concepts (Phase 2);
   - the feeling table (Phase 5);
   - the rejection lists and tokens (Phase 6);
   - the sound map, if there is sound (Phase 8).
   - the bold pass: the world inventory, the escalation ladder and the signature details (Phase 5B);
   - the detail inventory at three zoom levels (Phase 5C).
4. **Show 2 or 3 takes of the first screen** and let the user pick or mix them (Phase 1, "Help them see it"). At
   least one take sits on the highest rung of the ladder that clears the usability bar.
5. **Build,** following Phases 3–12, as seriously as a paid client build (the serious-build bar in 13B).
6. **Review in a real browser** (Phase 13), then **critique it like a rival studio** (Phase 13B) for at least two
   rounds, fixing between rounds, before the user sees it.
7. **Record the user's taste and report** (Phase 14).

**The scope decides how much runs.** The user picks it with the interview's first questions (Phase 1):

| | New look | Small changes | Keep the layout | Change the layout | Full redesign |
|---|---|---|---|---|---|
| What changes | colour, type, shapes, motion, sound; the layout and the parts stay | spacing, type, colour, states, motion; fixes | the parts inside each section (their form, controls and states); the layout and navigation stay | the layout of each screen, within the current pages and navigation | the concept and structure; the content and wiring are kept |
| Interview | the first questions, what stays, then general and specific | the first questions, the fix list, what stays | full | full | full |
| Tasks or concepts (2) | skip | skip | task table | task table | full |
| Usability bar (2A) | yes | yes | yes | yes | yes |
| Feeling table (5) | full | warmth and life checks only | full | full | full |
| Rejection (6) | fonts, palette and shapes; layouts untouched | tokens only; keep the fonts and layout unless asked | fonts if asked; the forms of the parts | fonts if asked; layouts within the structure | full |
| First-screen takes | 2 or 3 looks on the same layout | before and after of one screen | yes | yes | yes |
| Everything else (3, 4, 7–14) | yes | yes | yes | yes | yes |

**Planning notes** go in your reply or in the project's design file (DESIGN.md or the brief), never in the shipped
product. Write them down rather than keeping them in your head: the written steps are what make the output
different.

**Reference files.** Load them when the step needs them:
- `references/motion.md`: before writing any animation, transition or gesture.
- `references/sound.md`: when the user said yes to sound.
- `references/review.md`: before the browser review, and for the scorecard.
- `references/foundations.md`: when planning any screen, and in the rival critique. Hierarchy, Gestalt grouping,
  OKLCH colour, type, tables, heuristics and why AI designs converge, from outside sources.

## The philosophy

1. **Ask what they want, general first, don't pitch.** What it is, who it is for and what they want from it are the
   user's ideas. Start by asking what kind of change they want, then a few open, general questions built from their
   project that they answer in their own words; then grill the specifics, each with a recommended answer. Don't ask how it should feel: people can't answer
   that. Read the feeling from what they want, and let them judge it in the takes. Claude's own ideas are the generic
   ones.
2. **Build for deploy, not for a demo.** People will rely on what ships: the data is real, the links go somewhere and
   the copy is final. A good-looking demo with invented content isn't finished work.
3. **Easy to use first, then as creative as possible.** Every screen first clears the usability bar (Phase 2A):
   understood in five seconds, plain names, one obvious next action. Creativity then goes as far as it can in the
   form, the materials and the motion, never in the words or the controls. When a creative choice hurts usability,
   change the form of the idea until it serves the user. Don't throw the idea away for a template, and don't keep it
   as it is at the user's expense.
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
12. **Delight that lasts.** Judge every idea on the hundredth use, not the first. A gimmick that looks good once and
    slows a power user down is worse than plain. Spectacle belongs where people look once; in tools people live in,
    the craft is the character.
13. **Be the bolder studio.** The first workable idea is the floor, not the answer. When a visual could clearly
    extend into something unique, extend it without being asked, as far as the usability bar allows. Proposing the
    bolder version and building it is part of the job; waiting to be told is not.
14. **Lived in, not brand new.** The things people love show use: marks, notes, wear, stamps, dates, the owner's
    hand, things slightly out of line. A screen with nothing to discover up close looks like a template, however
    clean it is. Detail is information and character from the subject's world, never ornament.
15. **Every mockup is a real build.** Build it as if a paying client will use it tomorrow: every state, real
    interactions, the hard part built rather than faked. Then look at it critically, as a rival would. Interest
    shows in the work; "good enough" is a reason to do another round.

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

The interview draws out what the user wants and helps them see it. It works like a grilling: map the decisions as a
tree, start at the root with general questions, and work down the branches round by round until nothing is left
undecided. It asks rather than proposes, and it never asks how the design should feel.

**The decision tree**
- **The root is the kind of change.** For an existing project the very first question is whether the user wants a
  redesign or a new look, and everything after is built off that answer (see "The first questions" below). A new
  build, with nothing to change, skips straight to the general questions.
- **Then general:** what this is for, who uses it and how often, the one job it must get right, and why it is being
  made or changed now. Ask only what the project and the first answers don't already tell you.
- **The branches get specific:** each answer opens the decisions that depend on it: a task's steps, a screen's main
  action, what a status means, an edge case, what must stay.
- **The frontier** is every open decision whose parent is already answered. Each round asks the whole frontier (3 to
  5 questions, the ones that change the most work first), then waits. A decision whose parent is still open waits for
  a later round. After each round, work out the new frontier.
- **Done** when the frontier is empty and nothing is silently assumed. Confirm a short summary before building.

**Four kinds of question**
- **Choice questions** (the first questions) decide what kind of change this is and what stays. Each offers 2 to 4
  options with a one-line description, and always room for something else; "what stays" allows several picks. Ask
  them with the host's question tool when there is one, so the user can tap an answer; otherwise as a numbered list
  of options. Give no recommendation unless the user's own words already point to an option: then mark it and quote
  those words.
- **General questions** (after the first questions) are open and answered in the user's own words.
  - Give no options, no recommended answer and no examples that lead. Don't suggest a subject, audience or concept.
  - Ask, then stop and wait. Don't answer for them, and don't rephrase their answer into your own words. If an
    answer is short or vague, the next round asks about that answer.
- **Specific questions** (after the general ones) grow from their answers, and each one gets a ➡ recommended answer, worded
  so that "yes" accepts it, with room to say something else.
  - The recommendation comes from their own earlier answers and the Phase 0 evidence, never from taste. Say which
    answer or finding it comes from.
  - What belongs to the user alone gets no recommendation: names, their content, what must stay.
- **Craft questions** (animation level, sound, where sounds come from) are specific questions too: each gets a
  recommendation, and they come after the general questions.
- **Never ask how it should feel.** No mood words to pick from ("calm, lively, cosy or sharp?"), no "what should it
  feel like?", no "what style do you like?". Most people can't answer that, and the answer they give is a guess. The
  feeling is read from what they want (Phase 5) and judged by the user in the takes.

**How to ask**
- **Specialised, not generic.** Even general questions are built from their project: its name, a screen they have, a
  task or a word they used. A good question could only be asked of this user. "What is Heang's Tool for, and what
  would you lose if it disappeared tomorrow?" beats "What are your goals?"
- **Make them think.** Ask about real moments and real decisions, not opinions or taste: the last time something
  went wrong, what they did instead, what they would keep if they could keep only one thing. Each question is one
  concrete thing, answered in a sentence or two. Never ask "describe your vision".
- **Grow questions from answers.** For example, "a price filter" leads to "what counts as cheap for you?", which leads
  to "riel, dollars or both? ➡ both, since you said your friends pay in riel". Stop when the answer would no longer
  change what you build.
- **Look up facts yourself.** Ask the user only for what only they know. Don't ask what you can check (the framework,
  whether a file exists, how many steps a task takes now). When a fact takes digging, send a sub-agent with a fresh
  context to find it, and keep asking the questions that don't depend on it.
- **Number every question,** and add the ➡ line to specific and craft questions only:

  ```
  ❓ **Q1** - **<short title>**: <an open general question built from their project>

  ---

  ❓ **Q2** - **<short title>**: <a specific or craft question>

  ➡ <your recommended answer, and the answer or finding it comes from>
  ```

- **Help them see it.** Before the full build, always show 2 or 3 quick takes of the first screen, built from what
  they want, the usability bar (Phase 2A), the feeling table and the rejection lists. Each take reads the feeling a
  different way, and every take passes the usability bar. These are rough but real screenshots, and the user picks
  or mixes: that pick is how the feeling gets decided, not a question. A "you decide" covers craft choices, not the
  look.
- **Stop when the frontier is empty.** Write a five-line summary in the user's own words and ask them to confirm it.
  - If the user says "just build it", take the recommendations and list them as assumptions.
  - General questions they skipped stay open: build from what they did say, and ask again with the takes.

**The first questions: what kind of change** (existing projects). Look at the project first (Phase 0) and show
the worst 3 to 5 findings, then ask, one at a time, building each question off the last answer:

1. **Redesign or new look?**
   - **Redesign:** change how it is laid out or how it works.
   - **New look:** keep the layout and the parts, and give it a new visual style.
2. **If redesign: how big?**
   - **Full redesign:** a new concept and structure; the content and wiring are kept.
   - **Change the layout:** the same pages and content, arranged differently on each screen.
   - **Keep the layout:** the same layout and navigation, with the parts inside each section redesigned.
   - **Small changes:** spacing, type, colour, states and fixes only.
3. **If new look: how far?**
   - **A whole new style:** new colours, fonts, shapes and motion.
   - **Same brand, fresher:** keep the colours and logo, and change the rest.
   - **Polish only:** the current style, made cleaner and more consistent.
4. **What must stay?** (several picks) Options taken from what the project has: its logo, colours, fonts, light and
   dark themes, its page names, a feature the user mentioned.
5. **Small changes only:** confirm the fix list, worst first. Anything beyond it needs a yes.

The answers pick the column in the scope table, and every later question is built off them. For example, "change the
layout" leads to "which screen gets in your way most?", and "a whole new style" leads to what must stay and then the
general questions.

**Next: general, open.** Ask 2 to 4, in the user's terms, built off the first answers. Drop anything the prompt already answers.

| What to learn | Ask it like this (fill in their project, screen or words) |
|---|---|
| What it is for | "In a sentence or two, what is <project> for, and what would you lose if it disappeared tomorrow?" |
| Who and how often | "Who opens <project>, how often, and where are they when they do?" |
| The one job | "If <screen> got only one thing right, what would it be?" |
| Why now | "What made you want to change it now? What happened the last time it let you down?" |
| What must stay | "Any colours, fonts, logo, words or content that must stay? Anything you already dislike?" |

**Then: specific, with a recommendation.** Built from the general answers. For example:
- **The top tasks they named:** "You said you check the running movie first. Should its progress be the biggest thing
  on Home? ➡ Yes: it's the first thing you look at."
- **Steps:** "Starting a movie takes 3 steps now (paste, Set up, Start). Should it take 2? ➡ Yes, if the preset you
  picked is right most of the time, as you said."
- **What they find hard:** "You said you lose track of which part is which. Should every part show its movie's title
  next to its number? ➡ Yes."
- **Animation level:** **Calm** (feedback and state changes) · **Standard** (adds menus, sheets, toasts and page
  transitions) · **Expressive** (adds one choreographed signature moment and playful springs). ➡ Calm for tools used
  daily, Standard for most products, Expressive for marketing or anything game-like.
- **Sound:** ask as three plain options: **none** · **sound effects only** · **sound effects and background music**.
  ➡ None, unless the subject is playful, musical, a game or for children. Then: their own files or synthesized; on or
  off on first visit (➡ off). Repeat the choice back in the summary ("effects and music"), because it decides what
  gets built.
- **A reference they bring up** (an app, a place, an object): "What do you like about it?", then show takes on it.
- **Music:** their track, a CC0 or royalty-free one you find, or a synthesized loop; whether it reacts to what the
  user does. Its mood comes from what they want, shown as a short sample.
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

**The usability bar.** Every screen clears this before any creative choice is judged. A take that fails it is
reshaped before it is shown, however good it looks.
- **The five-second test.** Someone opening the screen for the first time can say what it is, what is happening right
  now and what to do next, without being told.
- **Plain names.** Headings, labels and buttons use the words people already use for these things, and the app's own
  names stay (Home, Now making, Needs you). The concept lives in the form, never in renamed labels or in jargon from
  the metaphor ("On the program monitor", "day-break strip", "tally"). If a label needs the concept explained, it
  fails.
- **One obvious next action** per zone, and one primary action per screen where the screen allows it.
- **Status is spelled out.** Every state has a word, every number has a label and a unit ("about 4 min left in this
  part"), and nothing means something by colour or by metaphor alone.
- **The metaphor explains or it goes.** A creative element must make the information easier to read than a plain
  version would: progress you can see at a glance, a part you can find by its colour. If it has to be decoded, reshape
  it until it reads at once, keeping its character.
- **Conventions where people expect them.** Navigation where navigation goes, links that look like links, toggles that
  look like toggles, the main action where the eye and the hand already are.
- **Details on demand.** What the next decision doesn't need is one step away, not on screen.
- **Count the steps.** The task table's targets hold. A creative layout never adds a step to a top task.

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
   - Around it, the controls and words stay calm, but the surfaces don't go plain: the signature details and the
     lived-in layer (5B, 5C) run through every section.
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

## Phase 3B. Claude's own habits (detect them in your plan and your screenshots)

These are not wrong in themselves; they are the moves Claude reaches for by default, so a design built from them
looks like every other Claude design. Each one needs a written reason from this subject, or it goes.

| Habit | What to do instead |
|---|---|
| Grid, dot or graph-paper backgrounds; fine noise "grain" on every surface | a plain ground; texture only where the subject's material really has it |
| The paper costume: tilted sheets, pins, tape, stamps, handwriting fonts as "warmth" | lived-in signs taken from this subject's own use (5C), not from stationery |
| The header formula: logo left, greeting, a search pill, a primary button right | ask what the top of this screen is for; often it needs one thing, or nothing |
| Three panes: nav list left, content centre, inspector right | one dominant view; secondary views as places you go to, or drawers on demand |
| A serif display face paired with a grotesk body, by reflex | pick faces for the reading task; a superfamily or a single family is fine |
| Every item a rounded card with a soft shadow; chat bubbles with avatars | typeset content directly on the ground; separate with space and type |
| A row of icon buttons under every item, always visible | actions appear where the eye already is, on hover and focus, as words |
| Chips and pills for every tag, filter and status | words in the sentence, or a single quiet label |
| Toggle-switch lists and slider-with-bubble settings | settings written as plain terms with exact values you can type |
| The bottom-centre toast for every action | confirm in place, next to what changed |
| A cream, beige or parchment ground as the default "warm" | temperature from the subject; warm can be dark, grey or saturated |
| "Example data" pills, eyebrow labels, legend lines under bars | label once, in context, in sentence case |

Audit: before building, list the habits your plan contains. After the first screenshot, list the ones that slipped
in. Both lists go in the report.

**Paradigms Claude overuses (banned).** Unless the subject *is* this thing, or the user asks for it, never use:
- transit and metro maps, route lines with stations, "you are here" lines, tickets and boarding passes;
- museum and gallery labels, plinths, exhibits;
- the workshop-paper costume: order tickets on hooks, pinned papers, stamps, chalk, tape, receipts and spikes;
- terminals, CRT scanlines, blueprint grids, newspaper broadsheets;
- a "hand-drawn" or "sketch" look applied to a digital product.

A paradigm is not a concept. If the first idea is a familiar real-world metaphor laid over the data, it is usually
one of these; go back to the subject and the user's work.

**Named looks to step away from (low priority, not banned).** These are the default looks Claude lands on for
serious tools. They are usable, which is why they keep appearing, and generic, which is why they read as AI. If a
plan or a first screenshot matches one, don't polish it: take a different path from the start (new surface model,
new type, new colour roles), keeping only the layout logic that serves the task.

| Look | How to spot it | Usually lands on |
|---|---|---|
| **Civic admin** (the GOV.UK/USWDS descendant) | white panels on a light grey ground, each boxed with a 1px rule; a coloured square or band top-left with a crest or house icon; underline tabs with count badges and kbd chips; zebra table with a coloured selected-row bar; little status icons in front of coloured words; bordered selects, a black "pressed" segmented control; Franklin, Public Sans or Arial | government, council, compliance, case work, back office |
| **SaaS starter pack** (the shadcn/Tailwind default) | dark or zinc sidebar with icon + label nav; a top bar with search pill and avatar; a row of KPI cards; rounded cards with soft shadows; Inter or Geist; zinc greys; one indigo, violet or blue accent | dashboards, admin, analytics, any "internal tool" |

What "modern and clean" means instead, for a serious tool (`references/foundations.md`): structure felt, not seen
(space and tone before lines); navigation that recedes so the work comes forward; tinted neutrals built in OKLCH
from this product's own hue; one primary action per view; hierarchy from weight and colour, about three sizes per
region; things that belong together joined visually rather than boxed. The character comes from a pinned design
language (a type system, a colour model, one or two signature parts from the subject), not from a costume.

## Context decides how much spectacle

| Context | Example | Spectacle | Where the character comes from |
|---|---|---|---|
| Seen once | poster, invitation, launch page, a campaign | as much as the idea can carry: 3D, kinetic type, a world to play in | the concept, the motion, the materials |
| Occasional | marketing site, a report, onboarding | one signature moment, then calm | the concept on the first screen, type and colour throughout |
| Daily | a student portal, a chat client | none in the path of a task | type, colour, rhythm, detail, the voice |
| All day, power users | case work, dashboards, editors, admin | none; speed is the delight | precise typography, density done well, a colour system, perfect states, shortcuts |

**The long-use test (the gimmick check).** For every metaphor, signature form or unusual component, answer in the
plan:
- **Day 1:** is it clear and delightful?
- **Day 30, the 50th use:** is it at least as fast as the plain version? Can it be scanned in a second?
- **Real data:** does it hold 200 items, long names, empty and error states, without breaking its form?
- **Power user:** can it be driven entirely by keyboard, with no animation in the way?

If it only wins on day 1, it belongs in a one-time context or behind a toggle; the working view is the fast plain
one, and its character comes from craft. A metaphor the user has to translate back into data is a gimmick.

## Navigation and the 10-minute test

- **Walk the route.** Write how someone gets to every task from a cold start, and back: how many places there are,
  what each is called, and the keyboard path. Two to four top-level places is plenty. Every place says where you
  are, and "back" always works the same way.
- **The 10-minute test.** Imagine the screen in front of you for 10 minutes straight, the way it is really used
  (reading, writing, waiting). Check: is the body text at a comfortable size and contrast, not maximum contrast? Is
  anything moving, blinking or pulsing that you would want to switch off? Are the margins quiet until needed? Is
  there a mode that removes everything but the task? Fix what fails before adding detail.

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
- **Creative in the form, plain in the words.** Push the form, the materials, the shapes and the motion as far as the
  subject allows. Keep every heading, label, button and status in the plain words the usability bar asks for.
- **Apps change the form, not the step count.** The main view can become something from the subject's world while
  every top task keeps its target step count.
- **The template test.** Swap in a different subject's name and content. If the screen still works unchanged, it
  isn't designed yet.

## Phase 5B. The bold pass: push the idea further

Run this after the feeling table and before any code. Write it in the planning notes.

1. **The world inventory.** List 15 or more nouns from the subject's world: objects, tools, materials, marks, rituals,
   containers, signage, sounds. Mark the ones with visible craft (a stamp, a stitch, a fold, a gauge, a ledger).
   These are the raw material for the form, the detail and the controls. Things only this subject has come first.
2. **The escalation ladder.** For the first screen, write four rungs:
   - **Rung 0, the safe version:** what a competent template would do.
   - **Rung 1:** the subject's material on a normal layout.
   - **Rung 2:** the main view *is* an object or place from the world, and the data lives on it.
   - **Rung 3:** the whole interaction is the world's ritual: you do the task the way people in that world do it,
     with plain labels and a plain alternative for every gesture.

   **The ladder depends on the context** (3B, "Context decides how much spectacle"). For one-time and occasional
   contexts it climbs as written. For daily and all-day tools it climbs in craft instead of metaphor: rung 1 a
   distinctive type and colour system; rung 2 information design that makes the user faster (density, alignment,
   states you can read at a glance); rung 3 an interaction model built around the power user's real rhythm
   (keyboard flow, batch actions, zero waiting), with the subject's character in the details. Every rung passes the
   long-use test.

   Build the highest rung that clears the usability bar (2A). If you stop below rung 2, write for each higher rung
   the specific usability failure that stopped it, and try one reshaping first. "Simpler", "cleaner" or "safer"
   are not reasons.
3. **Three signature details, not one.** Beyond the hero or main view, at least three more places get an inventive
   move taken from the inventory: a control drawn from a real tool, data shown as a real object, a transition that
   is a real action (tear, fold, stamp, pour, pin), an empty state that is a scene.
4. **Unprompted extras.** List five things the user didn't ask for that would make them say "oh, nice": a hidden
   detail at close zoom, a time-of-day or seasonal change, a thank-you moment, an object that reacts when you hover
   it, a status that's told the way the world tells it. Build at least two, and say which in the report.
5. **The studio test.** For each first screen, ask: would a design studio post this screenshot? Would a stranger
   guess the subject with the text hidden? If not, climb the ladder or deepen the material before building more.
6. **Boldness never costs usability.** Plain names, one obvious next action and the step counts from 2A still hold.
   A bold idea that hurts a task gets reshaped, not dropped.

## Phase 5C. Lived-in: warmth, intricacy and detail

A clean screen with nothing small in it reads as new, generic and cold. This phase builds the layer people discover.

**The zoom inventory.** For every main screen, list at least 12 details, at least 4 at each distance, every one taken
from the world inventory:

| Distance | What it is | Examples |
|---|---|---|
| Arm's length | composition and big shapes | the main object, overlaps, a dominant material, a rhythm of repeated items |
| Reading | the second and third typographic voices | index numbers, stamps, units, small captions, handwritten notes, labels in the world's own format |
| Magnifier | texture and edges | paper grain, weave, perforations, deckled or torn edges, pin heads, worn corners, ink bleed, tiny marks |

**Signs of life and time.** Use at least four:
- handwriting or marks by the owner (notes, ticks, circles, chalk);
- wear where use happens (a softened corner, a faded tab, a smudge near the most-used control);
- stamps, numbering and dates in the world's format;
- the time of day or the season showing (light, a greeting, what's open);
- real-object edges: perforated, pinned, folded, taped, stacked;
- overlap and stacking instead of a perfect grid of separate boxes;
- small imperfection inside a strict system: a 0.5–1.5° tilt on a pinned paper, an uneven stamp, a hand-drawn line.

**Material, not flat.** Every surface says what it is made of through texture, edge and how it holds light (SVG
patterns, fine noise, real edge shapes), at low contrast so text stays comfortable. Body text always sits on a calm
area of the material.

**Voices.** Besides the display and body faces, give the world its own vernacular voice where it has one (a
stamp face, a hand, a gauge's numerals, a script the audience reads). Use it for labels and marks, never for body
text or controls.

**Warm copy.** Microcopy is written by someone from this world: how they greet, what they call things, how they say
"done". It stays plain and clear.

**Rules that keep detail honest.**
- Structure first, then detail: the 1.6 test still holds. Strip the details and the structure must still carry the
  feeling; the details then make it lived-in.
- Every detail carries information or the subject's character. A generic flourish (a random squiggle, sparkles,
  stock ornaments) is decoration and is banned.
- Detail sits at the edges and in the materials. The task area keeps its contrast, its plain words and its calm.
- Frequency rule: what is used 100 times a day gets the least decoration, what is looked at once a day gets the most.

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
3. **Paradigm (sites).** Pick one not used in the last design and not on the overused list in 3B: tabletop,
   isometric, page-as-a-place, paper cut-out, signage, instrument panel, cartographic, packaging dieline,
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
- **Music is a deliverable when chosen.** If the user picked "effects and background music", the build must ship a
  working music player and a track (their file, a found CC0 file, or the synthesized loop in `references/sound.md`),
  with a play button the user can press. Effects without a music player is a failed build, not a smaller one. If
  they picked effects only, ship no music code.
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
- **The cold read.** Give a screenshot of each first screen to a sub-agent with a fresh context and no explanation,
  and ask what the screen is, what is happening and what to do next. Every answer it gets wrong is a usability
  finding, worst first.
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

## Phase 13B. Critique like a rival studio, then build seriously

After the first full build and its browser review, and before showing the user:

1. **Screenshot every main screen and state,** then crop four regions of each at 2x. Each crop should hold something
   worth looking at. A blank or generic crop is a finding.
2. **Write the rival's critique.** Play a design director at a rival studio who wants this to fail. List at least
   five things that look default, cheap, timid, unfinished or generic, worst first, each with a concrete fix. Name
   what the generic version of each part would be; if a part matches it, that part is a finding.
3. **Score** with evidence, 1 to 10: boldness, warmth and lived-in-ness, detail and intricacy, craft and finish,
   usability. Anything under 8 gets another round. Usability under 8 is fixed first.
4. **Fix and repeat.** At least two rounds. Each round's screenshots are looked at again, not assumed.
5. **The serious-build bar.** Before reporting, everything here is true:
   - every interactive element has hover, focus, pressed, working, success and failure where they apply;
   - empty, loading, long-data and error states are built and designed, not left to the browser;
   - the interactions are real: data changes, persists for the session, and the screen answers;
   - the hardest part of the idea is built, not replaced by a picture of it;
   - no placeholder boxes, no lorem, no "coming soon" in place of a feature the design shows.
6. **Report the rounds:** the critique lists, the scores before and after, and what changed.

## Toolbox: reach for these when they raise the quality

The baseline is hand-written HTML, CSS and SVG. Go further when the idea needs it:
- **3D and shaders:** three.js (inflatable or extruded type with `TTFLoader`, physical materials with
  `RoomEnvironment` reflections, post-processing, custom GLSL), for one-time and occasional contexts.
- **Timelines and physics:** the Web Animations API or GSAP for choreographed sequences; spring maths written by
  hand for anything the pointer touches; FLIP for layout changes.
- **Data:** D3 scales and shapes for honest charts; never a chart library's default look.
- **Generative and texture:** canvas or SVG filters, rendered once and cached, never every frame on scroll.
- **Type:** variable fonts animated on their axes; real small caps, tabular figures, hanging punctuation.
- **Review scripts:** Playwright for screenshots at several sizes, frame captures of motion, contrast and target-size
  audits, and scripted walks through every task. Measure; don't eyeball.
- **Sandboxed deploys** (artifacts, embeds): bundle libraries and fonts into the page or load them from the allowed
  CDNs; binary assets go inside the bundle as base64 if the host refuses their file type.

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
