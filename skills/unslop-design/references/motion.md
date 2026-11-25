# Motion
The aim is motion that is immediate, continuous, interruptible and quiet. These values are strong defaults; the
animation level sets how much of them to use, and the user's words override them.

### Tokens

```css
:root {
  --ease-out:    cubic-bezier(0.23, 1, 0.32, 1);    /* entering, exiting, most UI */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* something already on screen moving or morphing */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* sheets and drawers */
  --dur-press:   120ms;  /* press feedback */
  --dur-micro:   160ms;  /* hover, colour, toggles, tooltips */
  --dur-small:   200ms;  /* dropdowns, popovers, menus */
  --dur-medium:  280ms;  /* toasts, cards, tab content */
  --dur-large:   380ms;  /* sheets, drawers, modals: the only UI allowed past 300 ms (500 ms at most) */
  --dur-hero:    600ms;  /* the one signature moment only */
}
```

- **Pick the curve by what is happening.** `--ease-out` for entering or leaving; `--ease-in-out` for moving across
  the screen; plain `ease` for a hover colour; `linear` only for constant motion such as progress.
- **Never `ease-in` on UI.** It starts slowly at the moment the user is watching.
- **Exits are faster than entrances** (about 70 to 80%) and leave the way they came in.

### When to animate: the frequency rule

| How often the user does it | Motion |
|---|---|
| 100+ times a day (shortcuts, command palette, typing, keyboard list navigation) | none |
| Tens of times a day (hover, selecting rows, switching tabs, filters) | 120 to 160 ms, colour or opacity only, or nothing |
| Occasionally (modals, sheets, menus, toasts) | standard, using the tokens |
| Rarely or once (onboarding, a first success, the signature moment) | room for delight, under Expressive only |

- **Name the purpose** of every animation: feedback, continuity, state, softening, or explanation (onboarding and
  marketing only). "It looks nice" is a reason to delete it when the user sees it every few seconds.
- **Never animate an action the user started from the keyboard.**
- **Data the user reads or acts on doesn't move for style.**

### How to animate

- **Presses press.** `transition: transform var(--dur-press) var(--ease-out)` and `:active { transform:
  scale(0.97) }` (0.95 to 0.98). Feedback starts on pointer-down.
- **Hover only where hover exists.** Wrap hover effects in `@media (hover: hover) and (pointer: fine)`.
- **Nothing appears from nothing.** Enter from `scale(0.95)` and `opacity: 0`, never `scale(0)`. Short slides
  travel 8 to 16 px or the element's own size.
- **Scale from the trigger.** Menus and popovers set `transform-origin` to the side of what opened them.
- **Interruptible by default.** Use transitions, not keyframes, for anything that can be triggered again quickly.
  A second tap works at once. Something running for seconds stops and lands when tapped.
- **Springs for gestures.** Drags, swipes and anything with momentum. Bounce between 0 and 0.3, only where a
  physical object would bounce. On release, carry the pointer's velocity into the settle.
- **Drags follow 1:1.** Write `element.style.transform` on pointer move. A sheet dismisses past about 30% of its
  height or on a fast flick. Grabbing something that is moving stops it.
- **Stagger with restraint.** 30 to 60 ms apart, under about 300 ms in total, the first 5 to 8 items only. Never
  stagger menus or command palettes.
- **Crossfade with a hint of blur** (under 5 px) when content swaps in place.
- **Things that leave free their space at once,** so neighbours close the gap while it fades.
- **Instant after the first.** Once one tooltip is open, the next ones show with no delay.
- **Inline styles beat classes.** If a script sets a property inline for an entrance, the exit must set it inline
  too.

### Animation levels

- **Calm:** presses, toggles, state changes, sheets and modals opening and closing. Nothing animates on page load.
- **Standard:** Calm plus menus, toasts, tab and page transitions, list items added and removed, one short stagger
  on first load.
- **Expressive:** Standard plus the signature moment's choreography, onboarding moments and springs with a little
  bounce. One moment gets the most motion; everything around it stays calm.

### Seen-once moments (gifts, invitations, launch moments)

The tokens above are for controls and UI people use again and again. A piece seen once or twice (Phase 5) can
give its content moments more time, because the moment is the content:

- **The signature moment** may run 1 to 3 seconds of choreography: several elements in sequence, each with its own
  curve, with sound on the same beats. It can be skipped with a tap and never blocks scrolling once it ends.
- **Reveals that are the subject's own process** (something developing, filling, printing, blooming) may take up to
  about 8 seconds, as long as the visitor can keep scrolling, can tap to finish it, and sees the result straight
  away under reduced motion.
- **Things that hang, swing, fall or float run on physics,** not keyframes: a spring with damping, impulses from the
  pointer or from scroll velocity, settling to rest. Run the loop only while the section is on screen.
- **Springs may bounce (0.2 to 0.4)** where a real object would: a card snapping back, a cord released, a print
  landing.
- **Every touchable thing follows the finger 1:1** and carries the release velocity into the throw or the settle.
- **Each beat gets its own kind of motion.** If every section moves the same way (all fade up, all slide in), the
  motion is decoration. Pick the motion from what the thing on that beat would do in the subject's world.

### Reduced motion

`prefers-reduced-motion: reduce` means fewer and gentler animations, not none. Keep opacity and colour changes.
Remove movement, scale and parallax. Collapse staggers. Long sequences jump to their result. Honour the app's own
setting too.

### Checking motion

- **Watch it at 10% speed** (the snippet in `references/review.md`). Look for things that pop, scale from the wrong corner,
  exit a different way from how they entered, overshoot, or leave a gap that snaps shut.
- **Trigger each one twice quickly.** It must reverse, not restart.
- **Search the source** for `ease-in`, `transition: all`, `scale(0)` and animated `width`, `height`, `top` or
  `left`. Each needs a reason or it goes.


---
