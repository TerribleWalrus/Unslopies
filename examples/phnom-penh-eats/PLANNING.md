# Nham — planning notes (Unslop Design 1.6 test run)

## Phase 1. Interview summary (the user's words)
- **What and who:** "The site is for users trying to find restaurants/coffee to eat or drink at Phnom Penh. Most of
  them are on phones, deciding where to eat tonight. They will just randomly choose the best places or popular places
  as well as price filter."
- **How far:** Rethink (new build).
- **Animation:** Expressive. The one big moment is the random pick. Everything else stays calm.
- **Sound:** sound effects and background music, both synthesized in the browser. Off on first visit.
- **Fixed:** nothing. The user said "you decide", so the craft defaults above are assumptions.
- **Still open (ask after the first result):** the look and feel. The user didn't describe one, so this build
  takes its look from the city itself (blue street-name plates, evening light) and asks again with screenshots.

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
