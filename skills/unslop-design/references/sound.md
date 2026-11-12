# Sound reference

Read this when the user said yes to sound. If they said no, ship no audio code at all.

## The toggle

- **A visible sound button** sits in the header or where settings live.
  - It has an icon, a label ("Sound on" or "Sound off") and `aria-pressed`.
  - Sound is **off on the first visit** unless the user chose otherwise.
  - The choice is remembered in `localStorage`, with every read and write wrapped in `try`/`catch`.
- **Music has its own control,** separate from sound effects, with play or pause and a volume slider. A user can
  keep effects and silence music, or the other way round.
- **Nothing makes sound before the user's first tap or key.** Browsers block it anyway. Create or resume the
  `AudioContext` inside that first gesture.

## The sound map (write it before coding)

Every sound is tied to an action and follows the same frequency rule as motion:

| User action | Sound | Character |
|---|---|---|
| Press a button | a tick | 20–40 ms, very quiet, high and soft |
| Toggle on / off | two notes | up for on, down for off |
| Open / close a sheet or menu | a soft swish | filtered noise, 120–200 ms, quieter on close |
| Pick up / drop (drag) | a lift and a settle | the drop lands when the item settles |
| Success (saved, sent, added) | a rising two-note chime | 150–300 ms |
| Error | a low, soft double tap | never harsh, never a buzzer |
| A rare milestone or the signature moment | a short phrase | only under "Expressive" |
| Typing, scrolling, hover, keyboard navigation | **none** | too frequent |

- **The sound happens at the same moment as the visual.**
  - The press tick fires on pointer-down, together with the press scale.
  - The success chime fires when the success state appears, not when the click happens.
  - A success sound never plays for something that didn't succeed.
- **One sound palette.** Tune every sound to one musical scale; a pentatonic scale never clashes when sounds overlap.
  Take the character from the subject's materials (wood, clay, glass, paper, metal). A noodle stall and a banking app
  should not share sounds.
- **Quiet by default.** Effects sit far below normal media volume, with a master gain around 0.1–0.2. Give them an
  attack of 2–5 ms and a fast exponential decay, so nothing clicks or drags on.
- **Spam-safe.** Limit how many sounds play at once (about 4), and don't retrigger the same sound within 40 ms. Ten
  fast taps should sound like ten taps, not like a crash.
- **Haptics follow the same map,** where the platform allows them. Use one short pulse on the signature moment or a
  success, tied to the sound toggle, and never on every tap.

## Where the sounds come from

1. **The user's own files,** if they have them. Decode each one once into an `AudioBuffer`, trim the silence, keep
   effects under about 300 ms and match their loudness.
2. **Synthesized (the default).** Use the Web Audio API to generate tones and filtered noise. There is nothing to
   download, no licence to check, and every sound can be tuned to the palette exactly.

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

   Filtered noise makes the material sounds: a band-pass sweep through a short noise buffer gives a swish, a rattle
   or a clay "clack".
3. **Found files,** only if the user asks you to find sounds or music.
   - Use CC0 or clearly royalty-free sources, and verify the licence on the source page.
   - Download the file into the project rather than linking to it.
   - Write a `SOUNDS.md` listing each file's source URL, author and licence.

## Background music (only if asked)

- **It never autoplays.** It starts when the user presses play, fades in over about 600 ms and fades out over about
  300 ms. It starts at about 30% volume.
- **It loops without a gap and pauses when the tab is hidden** (`visibilitychange`). It ducks briefly under important
  effects and spoken audio.
- **Interactive music,** if the user wants it, responds to state rather than to every click.
  - Fade in a layer when the user progresses.
  - Change the key, tempo or density for a new section or filter.
  - Resolve on completion, and duck during a long signature moment.
  - Keep every change on the beat or bar, so it never sounds broken.

## Accessibility

- **Sound is never the only signal.** Every sound has a visual state and, where it matters, an `aria-live`
  announcement. A user who can't hear loses nothing.
- **Respect mute.** Follow the system and app mute settings.
- **Reduce sound to the essentials when asked.** A "reduce sound" or reduced-motion preference lowers effects to
  success and error only.

## Checking sound

- **Each mapped action plays its sound once,** in time with its visual.
- **Silence where there should be:** nothing plays before the first gesture or with the toggle off.
- **The setting sticks:** the toggle survives a reload.
- **Spam-safe:** ten fast taps don't distort.
- **Music:** it pauses when the tab is hidden and fades rather than cutting.
- **Headless browsers can't judge how it sounds.** Say so in the report, and ask the user to listen on a real device.
