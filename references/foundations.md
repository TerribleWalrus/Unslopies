# Foundations: what makes a design good (from outside sources)

Read this when planning any screen, and again during the rival critique. These are paraphrased from practitioners
and researchers, not from habit. The sources are at the end; check them when a rule is unclear.

## 1. Hierarchy: one thing first, then the rest in order

- **Size is the loudest lever, so use it least.** Most hierarchy should come from weight and colour. A label next to
  a value gets smaller, lighter or greyer; the value stays plain. Emphasise by de-emphasising the things around it,
  not by making the important thing louder. (Refactoring UI)
- **Few sizes.** Keep each region to about three type sizes; more makes it hard to tell what is related. (NN/g,
  scale principle)
- **Labels are often unnecessary.** If the format says what it is (an email, a date, "£1,240"), drop the label, or
  fold it into the value ("12 days left", not "Days left: 12"). (Refactoring UI)
- **Design in grayscale first.** If the hierarchy only works because of colour, it doesn't work. Add colour last, for
  meaning. (Refactoring UI)
- **One primary action per view.** Secondary actions are quieter (tonal or outline); tertiary actions look like
  links. A destructive action is not automatically big and red; it is red when it is the primary one. (Refactoring UI)

## 2. Grouping without boxes (Gestalt)

- **Proximity first.** Things close together read as a group. The gap inside a group should be clearly smaller than
  the gap between groups. (NN/g, Gestalt)
- **Common region second.** A shared background or tonal area groups items more strongly than proximity, so a box
  is a strong signal: spend it only on real groups. (NN/g)
- **Similarity and alignment.** Items that look alike are read as alike; a shared left edge reads as a column.
- **Uniform connectedness.** Items joined visually (a selected row that runs into its detail panel, a tab joined to
  its sheet) read as one thing. Use this instead of a line where something "belongs to" something else.
- **"Structure should be felt, not seen."** Fewer and softer borders; separate with space and tone. Navigation
  should recede so the work comes forward: "don't compete for attention you haven't earned". (Linear, 2026 refresh)

## 3. Colour as a system, not decoration

- **Build it in a perceptual space (OKLCH).** Equal lightness steps look equal, so tonal scales and hover states
  are predictable. Lower the chroma toward white and black, or the extremes look garish.
- **Tinted neutrals.** Neutrals with a tiny chroma (about 0.005–0.015) toward the product's own hue feel cohesive;
  pure grey feels dead next to a coloured brand. The hue comes from this project, not from "cool = tech".
- **Roles.** One primary colour with a few shades; a neutral scale of 9–11 steps; semantic colours (danger,
  warning, success) with 2–3 shades each. Colour carries meaning; never use it alone (add text or shape).
- **Don't lower contrast to de-emphasise text.** Use a lighter colour that still passes (4.5:1 for body, 3:1 for
  large text and UI parts), not opacity. (NN/g, contrast principle; WCAG)
- **Heavy transparency is a sign of an incomplete palette;** define real surface colours instead.

## 4. Type for reading and scanning

- **Body text** on screens is about 15–25 px, line spacing 120–145%, lines of 45–90 characters. (Practical
  Typography)
- **All caps** only for short labels, and letterspaced 5–12%. (Practical Typography)
- **Numbers that are compared** use tabular figures and are right-aligned, so the digits line up. (data table
  guidance)

## 5. Data tables and dense tools

- Left-align text, right-align numbers, align headers with their data.
- Row heights: about 32 px (condensed), 40 (regular), 48–56 (relaxed). Offer a density switch for power users.
- Zebra stripes only for large read-only tables where the eye loses its row; otherwise use a hover row and space.
- Vertically centre cell content; keep the header sticky; keep header actions in predictable places.

## 6. Usability heuristics (Nielsen, still the checklist)

1. Show system status promptly. 2. Speak the user's language. 3. Give control: undo and cancel. 4. Be consistent
with the product and with conventions. 5. Prevent errors before they happen. 6. Recognition over recall: show the
options. 7. Shortcuts for experts without confusing novices. 8. Remove what doesn't serve the task. 9. Errors name
the problem and the fix in plain words. 10. Help that is searchable and task-shaped.

Laws of UX worth naming in a plan: **Jakob** (users expect your product to work like the ones they know),
**Fitts** (frequent targets big and near), **Hick** (fewer choices, faster decisions), **Doherty** (respond in under
about 400 ms), **aesthetic-usability** (people forgive more in a beautiful product, so beauty can hide problems in
testing), **peak-end** (the best moment and the last moment are remembered), **Tesler** (complexity has to live
somewhere; take it on so the user doesn't).

## 7. Why AI designs converge, and the fix

Models sample the middle of what they've seen, so without strong steering they all produce the same median page:
safe sans, purple or blue gradient, centred hero, rounded cards, zinc greys. Component kits deepen it: the same
spacing scale, radii, shadows, greys, inputs and tables everywhere ("the SaaS dashboard starter pack"). The fixes
that work:
- **Pin a concrete design language** with exact values (fonts, OKLCH tokens, radii, spacing) before writing code.
- **Explore several distinct directions** before committing to one.
- **Theme the system, not each component:** change the tokens and a few signature parts; keep the rest consistent.
- **Test one whole screen** (navigation, a table, a form, buttons) before extending the theme.

## Sources

- NN/g, "5 Principles of Visual Design in UX": nngroup.com/articles/principles-visual-design/
- NN/g, "10 Usability Heuristics for User Interface Design": nngroup.com/articles/ten-usability-heuristics/
- Laws of UX (Jon Yablonski): lawsofux.com
- Refactoring UI (Wathan and Schoger), and their "7 practical tips for cheating at design"
- Linear, notes on its 2026 interface refresh (linear.app)
- Pencil and Paper, "Data table design UX patterns"; UX Planet and NN/g on data tables
- GOV.UK Design System (colour, typography, layout): design-system.service.gov.uk
- Matthew Butterick, Practical Typography, "Summary of key rules": practicaltypography.com
- superdesign.dev on "distributional convergence" in AI-generated UI
- Design Systems Collective, "Is anyone else tired of every Tailwind/shadcn app looking the same?"
- OKLCH palette practice: Björn Ottosson, "A perceptual color space for image processing" (2020); CSS Color 4
