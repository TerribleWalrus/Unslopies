# Foundations
### 1. Hierarchy

- **Size is the loudest lever, so use it least.** Most hierarchy comes from weight and colour. Emphasise by
  de-emphasising what is around the important thing.
- **Labels are often unnecessary.** If the format says what it is, drop the label or fold it into the value
  ("12 days left", not "Days left: 12").
- **Design in greyscale first.** If the hierarchy only works because of colour, it doesn't work.
- **One primary action per view.** Secondary actions are quieter; tertiary actions look like links. A destructive
  action is red when it is the primary one, not automatically.

### 2. Grouping without boxes

- **Proximity first.** The gap inside a group is clearly smaller than the gap between groups.
- **Common region second.** A shared background groups more strongly than proximity, so spend it on real groups.
- **Similarity and alignment.** Things that look alike are read as alike; a shared edge reads as a column.
- **Connectedness.** Things joined visually (a selected row that runs into its detail, a tab joined to its panel)
  read as one. Use this instead of a line where one thing belongs to another.

### 3. Colour as a system

- **Build it in OKLCH.** Equal lightness steps look equal, so tonal scales and hover states are predictable.
  Lower the chroma toward white and black.
- **Tinted neutrals.** A tiny chroma (about 0.005 to 0.015) toward the product's own hue.
- **Roles.** One primary with a few shades; a neutral scale of 9 to 11 steps; semantic colours with 2 or 3 shades
  each.
- **Heavy transparency is a sign of an incomplete palette.** Define real surface colours.

### 4. Type

- The numbers are in Phase 6.
- **All caps** only for short labels, letterspaced 5 to 12%.
- **Numbers that are compared** use tabular figures and are right-aligned.

### 5. Tables and dense tools

- Left-align text, right-align numbers, align headers with their data.
- Row heights of about 32 px (condensed), 40 (regular), 48 to 56 (relaxed). Offer a density switch.
- Zebra stripes only for large read-only tables; otherwise a hover row and space.
- Sticky header; header actions in predictable places; the selection and its bulk actions always visible.

### 6. Usability heuristics (Nielsen)

1. Show system status promptly. 2. Speak the user's language. 3. Give control: undo and cancel. 4. Be consistent
with the product and with conventions. 5. Prevent errors before they happen. 6. Recognition over recall. 7.
Shortcuts for experts that don't confuse novices. 8. Remove what doesn't serve the task. 9. Errors name the
problem and the fix in plain words. 10. Help that is searchable and task-shaped.

Laws worth naming in a plan: **Jakob** (people expect your product to work like the ones they know), **Fitts**
(frequent targets big and near), **Hick** (fewer choices, faster decisions), **Doherty** (respond in under about
400 ms), **aesthetic-usability** (beauty can hide problems in testing), **peak-end** (the best and the last moment
are remembered), **Tesler** (complexity has to live somewhere; take it on so the user doesn't).

### 7. Why AI designs converge

Models sample the middle of what they've seen, and component kits deepen it. Ban lists move the middle; they
don't remove it. What works:
- **Pin a concrete design language** with exact values before writing code.
- **Explore several distinct directions** before committing.
- **Derive choices from requirements and the subject,** not from a list of approved alternatives.
- **Keep a memory** of what was used, and don't repeat it.
- **Theme the system, not each component.**

### Sources

NN/g (visual design principles, the 10 heuristics, data tables); Laws of UX (Yablonski); Refactoring UI (Wathan
and Schoger); Practical Typography (Butterick); WCAG 2.2; Björn Ottosson on OKLab and CSS Color 4; GOV.UK Design
System. Check them when a rule is unclear.


---
