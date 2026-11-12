# Sound reference

Read this when the user said yes to sound. If they said no, ship no audio code at all.

**Know which choice they made.** "Sound effects only" ships effects and no music code. "Sound effects and background
music" ships both: the effects, **and** a music player with a real track behind its play button. Check the interview
summary before you build, and again before you report.

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

## Background music (when the user chose "effects and background music")

If they chose it, it ships. Never leave it out, never reduce it to a note in the report, and never ship the button
without a track behind it.

- **It never autoplays.** It starts when the user presses play, fades in over about 600 ms and fades out over about
  300 ms. It starts at about 30% volume.
- **A visible music control,** next to the sound toggle but separate from it: a play/pause button with `aria-pressed`
  and a label ("Music on" or "Music off"), and a volume slider. Pressing play also creates or resumes the
  `AudioContext`, so it works as the first gesture. Remember the choice in `localStorage` (inside `try`/`catch`) but
  still wait for a press after a reload, because browsers block audio until then.
- **Turning sound effects off doesn't silence music, and the reverse.** They are two controls.
- **It loops without a gap and pauses when the tab is hidden** (`visibilitychange`). It ducks briefly under important
  effects and spoken audio.
- **The source, in the same order as effects:** the user's track; a CC0 or royalty-free file you find and record in
  `SOUNDS.md` (downloaded into the project, with the licence checked); or a synthesized loop (below), which is the
  default when they bring nothing and ask you to find nothing.
- **Interactive music,** if the user wants it, responds to state rather than to every click.
  - Fade in a layer when the user progresses.
  - Change the key, tempo or density for a new section or filter.
  - Resolve on completion, and duck during a long signature moment.
  - Keep every change on the beat or bar, so it never sounds broken.

### A synthesized loop (the default track)

A calm loop of a slow chord pad and a sparse pentatonic melody, in the same scale as the effects, 8 to 16 bars long,
scheduled a little ahead of time so it never gaps or drifts. Take the scale, tempo and timbre from the subject (a slow
60–76 bpm; glass and sine for a quiet tool, plucked triangle for a workshop or a food stall).

```js
function startMusic(ctx, out, { bpm = 68, scale = [0, 2, 4, 7, 9], root = 220, chords = [[0, 4, 7], [-3, 0, 4], [-5, -1, 2], [-7, -3, 0]] } = {}) {
  const beat = 60 / bpm, bar = beat * 4, ahead = 0.4;
  const hz = (semi) => root * Math.pow(2, semi / 12);
  let next = ctx.currentTime + 0.05, barIndex = 0, timer = null;
  const bus = ctx.createGain(); bus.gain.value = 0; bus.connect(out);  // fade this bus, not the notes

  function note(t, semi, dur, type, level) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = hz(semi);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(level, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus); o.start(t); o.stop(t + dur + 0.05);
  }
  function scheduleBar(t, i) {
    chords[i % chords.length].forEach((s) => note(t, s, bar * 1.05, "sine", 0.05));      // pad
    for (let b = 0; b < 8; b++) {                                                         // sparse melody
      if (Math.random() < 0.45) note(t + b * beat / 2, scale[(Math.random() * scale.length) | 0] + 12, beat, "triangle", 0.04);
    }
  }
  function tick() {                                  // look-ahead scheduler: runs every 100 ms
    while (next < ctx.currentTime + ahead) { scheduleBar(next, barIndex++); next += bar; }
  }
  return {
    play() { ctx.resume(); tick(); timer = timer || setInterval(tick, 100); bus.gain.cancelScheduledValues(ctx.currentTime); bus.gain.setTargetAtTime(0.3, ctx.currentTime, 0.2); },   // ~600 ms fade in
    pause() { bus.gain.setTargetAtTime(0, ctx.currentTime, 0.1); setTimeout(() => { clearInterval(timer); timer = null; next = ctx.currentTime + 0.05; }, 400); },                // ~300 ms fade out
    volume(v) { bus.gain.setTargetAtTime(v, ctx.currentTime, 0.05); },
  };
}
```

Wire `play()` and `pause()` to the music button, call `pause()` on `visibilitychange` when the tab is hidden, and keep
the music bus on its own gain so the slider and the effects master never fight. For a found or user file, decode it
into an `AudioBuffer` or use an `<audio loop>` element through a `MediaElementSource`, and fade the same bus.

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
- **Music, if it was chosen:** the music control is on the page, pressing it makes sound (check that the `AudioContext`
  is `running` and the bus gain is above zero after the press), it fades in and out rather than cutting, it keeps
  playing across a normal interaction, and it pauses when the tab is hidden. If the music button exists but nothing
  plays, the build fails.
- **Music, if it wasn't chosen:** there is no music code and no music button.
- **Headless browsers can't judge how it sounds.** Say so in the report, and ask the user to listen on a real device.
