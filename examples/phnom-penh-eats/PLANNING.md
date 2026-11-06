# Nham — planning notes (Unslop Design 1.6 test run)

## Phase 1. Interview summary (the user's words)
- **What and who:** "The site is for users trying to find restaurants/coffee to eat or drink at Phnom Penh. Most of
  them are on phones, deciding where to eat tonight. They will just randomly choose the best places or popular places
  as well as price filter."
- **How far:** Rethink (new build).
- **Animation:** Expressive. The one big moment is the random pick. Everything else stays calm.
- **Sound:** sound effects and background music, both synthesized in the browser. Off on first visit.
- **Fixed:** nothing. The user said "you decide", so the craft defaults above are assumptions.
- **Round 2 (after the first result):** "Push Nham further." The feel is "Lively, like a night market". Theme:
  "Follow the phone". The pick: "add all of this and make the option picker creative, impress me", meaning names
  flicking past, shaking, drawing a card and spinning, all four.

## Phase 0. Mode
**App.** People come back to it whenever they're deciding where to eat, and repeat the same 3 tasks fast. There's
no forced hero. The signature is the core loop: filter, then "Pick for me".

## Phase 2A. Task table
| Task | How often | Steps now | Target |
|---|---|---|---|
| Let it pick a place | most visits | — | 1 tap |
| Filter by price | most visits | — | 1 tap |
| Food or coffee | most visits | — | 1 tap |
| Sort by popular or top rated | often | — | 1 change |
| See a place's details and area | after every pick | — | 1 tap |
| Only places open now | often | — | 1 tap |
| Narrow to an area | sometimes | — | 1 tap (scrolling chips) |

Placement: "Pick for me" sits in the bottom third on phones, inside thumb reach. Filters sit at the top because
they're set once and then left alone. Details open as a bottom sheet you can drag to close.

Data inventory: 16 sample places (invented names, labelled as samples on the page), the longest name
("Kampot Pepper Crab House by the River"), the empty state (filters that match nothing), closed places, and places
that close after midnight.

## Phase 6. Rejection
- **Fonts, first 10 that come to mind (all out):** Inter, Roboto, Poppins, Montserrat, DM Sans, Space Grotesk,
  Manrope, Plus Jakarta Sans, Playfair Display, Fraunces. **Chosen:** Kantumruy Pro. It was designed for Khmer and
  Latin together, so the Khmer name ញ៉ាំ ("eat") and the English UI share one family.
- **Layouts, first 5 (all out):** hero plus 3 cards, map-first split screen, a swipe-card stack, a bento grid of
  categories, a full-screen search box. **Chosen:** filters, then a list, with the pick button in the thumb zone. A
  more novel layout would add steps to the top task.
- **Theme from a real material:** Phnom Penh street-name plates (white on blue), the river at dusk (deep blue-green),
  and the marigold offerings seen outside shops and homes (the one warm accent). Dark is the default because people
  decide at night. Light is designed separately.

## Phase 7. Motion
Tokens are copied from the skill. By how often each happens:
- Chips, segments, sort: tens of times a visit, so colour only (160 ms) plus the press scale.
- List after a filter change: a quick 120 ms crossfade, with no stagger.
- First load: the first 6 cards stagger 30 ms apart (under 300 ms in total).
- Sheet: rises with `--ease-drawer` in 380 ms and leaves in 280 ms, back the way it came. It drags 1:1 and closes on
  30% of its height or a flick.
- Music popover: scales from the music button (0.95 to 1, 200 ms in, 150 ms out).
- **The Expressive moment, the pick:** names flick past like a departures board and slow down. Then the pick lands
  on a small spring and the details settle in. Tapping the reel stops it at once, and nothing blocks input.
- Reduced motion: no reel and no slides. The result fades in.

## Phase 8. Sound map
| Action | Sound |
|---|---|
| Press any button or chip | a soft tick (30 ms) |
| Turn a filter on / off | two notes, up / down |
| Open / close a sheet | a filtered swish, quieter on close |
| Reel step | a pentatonic tick that falls in pitch as the reel slows |
| Pick lands | a rising two-note chime |
| Typing, scrolling, hovering | nothing |

Music is a synthesized, generative pentatonic loop at 84 bpm. Food mode is a little livelier, and coffee mode is
sparser and lower. The change happens on the next bar. The music ducks while the reel spins, then plays a short
resolving phrase when the pick lands.

## Phase 13. Browser review findings (fixed)
| Issue | Where | Who it hurts | Fix |
|---|---|---|---|
| Page scrolled sideways at 390 px | the list, caused by the longest name | every phone user | grid column `minmax(0, 1fr)`, card children `min-width: 0`, name truncates |
| Price read as "$$$" on every card | the cards | anyone filtering by price | unused `$` dimmed to 40% |
| "Show area on map" wrapped to two lines | the sheet | phone users | shortened to "Area map" |
| The empty state didn't say which filters caused it | "No places match" | anyone stacking filters | it now names them, for example "Coffee · $$$" |
| Volume slider 34 px tall | the music popover | thumbs | 44 px |
| Card title used an `h3` inside a `<button>` | the cards | screen readers (invalid markup) | changed to a span |

Checks run in Chromium at 390 and 1280 px, in dark and light: no horizontal scroll, no console errors, all text
4.5:1 or better, focus moves into the sheet and returns to the card on Escape, tapping the reel stops it, the sound
setting survives a reload, and with reduced motion the pick lands at once. At 10% speed the sheet's top edge went
668 → 473 → 423 → 401 → 392 → 387 → 385 px: a fast start and a soft settle, with no jumps.

Not checked here: how the sound actually sounds (headless Chromium has no speakers) and a real phone's touch drag.

## Round 2 build: lively, four ways to pick
**Lively, like a night market,** taken from what a night market actually has rather than adding decoration:
- A string of bulbs across the top, in flat colours with no glow. They switch on one by one, once per load.
- A live line: the day, the time in Phnom Penh, and how many places are open right now.
- Each place gets its own colour and initials, like an avatar, so the list reads as places and not as rows.
- A "how busy" meter (Quiet, Steady, Lively), shown as a word plus bars so colour is never the only signal.

**Four ways to pick**, each with an object you handle directly, and a button for keyboards and laptops:
| Mode | Object from the street | Direct manipulation | Button |
|---|---|---|---|
| Flick | a departures-style board of names | swipe the board up; a harder swipe spins longer | "Flick the board" |
| Shake | a temple fortune-stick cup (siem si) | hold, drag the cup, or shake the phone; one stick rises | "Hold to shake" |
| Draw | a fanned deck of cards | tap any card; it lifts, centres and flips | "Draw for me" |
| Spin | the lazy Susan on a restaurant's round table | flick it round by finger, momentum carries on, ticks per slice | the hub, "Spin" |

**The mode picker** is a 4-way segmented control. An accent puck slides between modes (`--ease-in-out`, 280 ms),
each icon plays a one-off move when chosen (the board flicks, the cup wobbles, the card flips, the wheel turns),
and the stage swaps with a short blur crossfade. The last mode used is remembered.

**After the pick lands,** the controls step aside and the result takes their place, so the sheet fits a phone screen
without scrolling. "Pick again" brings the controls back.

**Sound per mode:** the board ticks fall in pitch as it slows, the sticks rattle like wood, cards swish as they're
dealt and snap when flipped, the wheel ticks faster the faster it spins, and every pick lands on the same chime and
a short vibration (where supported, with sound on).

## Round 2 browser review findings (fixed)
| Issue | Where | Who it hurts | Fix |
|---|---|---|---|
| Fanned cards showed only a 38 px strip each, so tapping a card's middle picked its neighbour | Draw | everyone on a phone | the fan spreads to fit the stage, leaving at least 58 px of every card tappable (measured) |
| The cards that weren't picked stayed on screen | Draw | everyone | inline opacity overrode the exit; they now fade and drop away |
| The hint text sat on top of the wheel and the cup, and the cup was cut off | Spin, Shake | everyone | the objects are smaller and sit above the hint |
| Grabbing the spinning table to stop it left it stuck with no result | Spin | anyone who brakes by hand | a grab with no flick now counts as a brake and lands where it stops |
| The pick could choose a place that is closed right now | all modes | someone deciding where to go now | picks favour places that are open (closed ones keep 12% weight); the stat says "opens 16:00" |

Checks run in Chromium at 390 and 1280 px, in dark and light:
- Every mode lands from its button: Flick in about 2.5 s, Shake 1.6 s, Draw 1.1 s, Spin 4 to 4.5 s.
- Spin lands from a finger flick, Flick lands from a swipe, and Draw lands from tapping a card.
- Keyboard only: arrows change the mode and Space starts it.
- With reduced motion, every mode lands within 150 ms.
- After landing, the controls step aside, focus moves to "Pick again", and the sheet doesn't scroll.
- No horizontal scroll, no text under 4.5:1, and no console errors.

Not checked here: what the sounds sound like, real phone shaking (the devicemotion API), and touch drag on a real
device.
