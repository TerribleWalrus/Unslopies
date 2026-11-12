# Motion reference

Read this before writing any animation, transition or gesture. SKILL.md Phase 7 has the principles. This file has
the values, the rules for each kind of motion, and how to check them.

The aim is motion that feels like Apple's: immediate, continuous, interruptible and quiet. These values are strong
defaults. The interview's animation level sets how much of them to use, and the user's own words override them.

## Tokens

Put these where the project keeps its tokens: CSS custom properties, the Tailwind theme (`transitionTimingFunction`,
`transitionDuration`), or a shared constants file for Framer Motion, React Native or SwiftUI. Every transition uses
them. Nothing hard-codes its own curve.

```css
:root {
  --ease-out:    cubic-bezier(0.23, 1, 0.32, 1);    /* entering, exiting, most UI */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* something already on screen moving or morphing */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* sheets and drawers, iOS-like */
  --dur-press:   120ms;  /* press feedback */
  --dur-micro:   160ms;  /* hover, colour, toggles, tooltips */
  --dur-small:   200ms;  /* dropdowns, popovers, menus */
  --dur-medium:  280ms;  /* toasts, cards, tab content */
  --dur-large:   380ms;  /* sheets, drawers, modals: the only UI allowed past 300 ms (500 ms at most) */
  --dur-hero:    600ms;  /* the one signature moment only */
}
```

- **Pick the curve by what is happening.**
  - `--ease-out` for anything entering or leaving.
  - `--ease-in-out` for something moving across the screen.
  - Plain `ease` for a hover colour.
  - `linear` only for constant motion, such as progress.
- **Never use `ease-in` on UI.** It starts slowly at the very moment the user is watching. The browser's built-in
  `ease-out` is too weak, so use the token.
- **Durations.** Controls, menus, toasts and tab content stay under 300 ms. A 180 ms dropdown feels faster than a
  400 ms one, and so does the whole app. Sheets, drawers and modals cover a large distance and may take up to 400 ms
  (500 ms at most).
- **Exits are faster than entrances,** at about 70–80% of the entrance duration, and leave the way they came in. A
  sheet that rose from the bottom goes back down. A toast that slid in from the right leaves to the right.

## When to animate: the frequency rule

Read the "How often" column of the task table:

| How often the user does it | Motion |
|---|---|
| 100+ times a day (keyboard shortcuts, command palette, typing, list navigation by keyboard) | **none** |
| Tens of times a day (hover, selecting rows, switching tabs, filters) | nearly invisible: 120–160 ms, colour or opacity only, or nothing |
| Occasionally (modals, sheets, menus, toasts) | standard, using the tokens |
| Rarely or once (onboarding, a first success, a celebration, the signature moment) | room for delight, under "Expressive" only |

- **Name the purpose.** Every animation has one:
  - **feedback:** the press pressed;
  - **continuity:** where it came from and where it went;
  - **state:** what changed;
  - **softening:** avoiding a jarring jump;
  - **explanation:** onboarding and marketing only.
- **"It looks nice" is a reason to delete it** when the user sees it every few seconds.
- **Never animate an action the user started from the keyboard.**
- **Data the user reads or acts on doesn't move for style.**

## How to animate

- **Presses press.**
  - Pressable elements get `transition: transform var(--dur-press) var(--ease-out)` and
    `:active { transform: scale(0.97) }`. Keep the scale between 0.95 and 0.98.
  - Feedback starts on pointer-down, not on release.
- **Hover only where hover exists.** Wrap hover effects in `@media (hover: hover) and (pointer: fine)` so taps on a
  phone don't leave stuck hover states.
- **Nothing appears from nothing.**
  - Enter from `scale(0.95)` and `opacity: 0`, never from `scale(0)`.
  - Short slides travel 8–16 px, or the element's own size (`translateY(100%)` for sheets). Never a long flight across
    the screen.
- **Scale from the trigger.** Menus, popovers and tooltips set `transform-origin` to the side of the button that
  opened them. Only centred modals scale from the centre.
- **Interruptible by default.**
  - Use CSS transitions, not keyframes, for anything the user can trigger again quickly: toggles, toasts, open and
    close. A transition reverses from where it is, while a keyframe animation restarts from zero.
  - Never block input while something animates. A second tap must work at once.
  - Something running for seconds (a reel, a spin, a long reveal) stops and lands when the user taps it.
- **Springs for gestures.**
  - Use springs for drags, swipes and anything that carries momentum. A good default is
    `{ type: "spring", duration: 0.5, bounce: 0.2 }`.
  - Keep the bounce between 0 and 0.3, and use it only where a physical object would bounce: drag to dismiss, a
    playful toggle, a pick landing.
  - On release, the drag carries the pointer's velocity into the settle.
- **Drags follow 1:1.**
  - Write `element.style.transform` directly on pointer move, not framework state on every frame.
  - A sheet dismisses on distance (over about 30% of its height) or on a fast flick.
  - Grabbing something that is moving stops it where it is.
- **Stagger with restraint.**
  - Space items 30–60 ms apart, keep the whole sequence under about 300 ms, and stagger only the first 5 to 8 items of
    a long list.
  - Never stagger menus, dropdowns or command palettes.
  - One container gets one entrance: don't animate the parent and stagger its children as well.
- **Crossfade with a hint of blur.** When content swaps in place, `filter: blur(2px)` plus a fade bridges the two
  states. Keep the blur under 5 px.
- **Things that leave free their space at once.** Take a leaving element out of the layout (`position: absolute` or
  `popLayout`) so its neighbours close the gap while it fades.
- **Instant after the first.** Once one tooltip is open, the next ones show with no delay and no animation.
- **Inline styles beat classes.** If a script sets `opacity` or a custom property inline (for a deal-in or a
  stagger), the exit must set it inline too. A CSS class alone won't override it.

## Animation levels

- **Calm:** presses, toggles, state changes, and sheets or modals opening and closing. Nothing animates in on page
  load.
- **Standard:** everything in Calm, plus:
  - menus, toasts, and tab and page transitions;
  - list items being added and removed;
  - one short stagger on first load.
- **Expressive:** everything in Standard, plus:
  - the signature moment's choreography;
  - onboarding moments;
  - springs with a little bounce.

  The frequency rule still applies. One moment gets the most motion, and everything around it stays calm.

## Reduced motion

`prefers-reduced-motion: reduce` means fewer and gentler animations, not none.
- **Keep:** opacity and colour changes, which help comprehension.
- **Remove:** movement, scale and parallax.
- **Collapse:** staggers, so the group appears together.
- **Finish at once:** long sequences (reels, spins, deals) jump straight to their result.
- **App settings:** if the app has its own reduced-motion setting, honour it too.

## Checking motion

- **Watch it slowed down.**
  - Slow the animations to about 10% speed through the DevTools protocol's `Animation.setPlaybackRate` (the script is
    in `review.md`), and capture frames of every transition you touched.
  - Look for things that pop instead of moving, scale from the wrong corner, exit in a different direction from how
    they entered, overshoot, or leave a gap that snaps shut.
- **Trigger each one twice quickly.** It must reverse smoothly instead of restarting.
- **Grep before finishing** for `ease-in`, `transition: all`, `scale(0)`, and animated `width`, `height`, `top` or
  `left`. Each one needs a reason, or it goes.
