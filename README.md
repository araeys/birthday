# Cinta Birthday Gift Website

Interactive dark coquette birthday gift site for Cinta.

## Run Locally

The server is already running in this Codex session at:

```text
http://localhost:4173
```

To run it again later:

```powershell
& 'C:\Users\VICTUS\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' server.js
```

## Replace Photos Later

Put final photos in:

```text
cinta-birthday/assets/
```

Then replace the `Foto Cinta` placeholder blocks in `index.html` with image tags like:

```html
<img src="./assets/cinta-01.jpg" alt="Foto Cinta 01">
```

The layout is already prepared for photo cards, modal previews, and the lanyard card.

## Current Sections

- Gift gate
- Gift opening with head-photo placeholder and "Let's go!" SFX
- Stopwatch since 06 February 2026
- First DM bubble scene with a `seen` beat before Rey's reply
- Bubble reaction buttons with floating reaction bursts
- Name reveal hero
- Interactive layered lanyard card with drag and bouncy release
- Expandable reasons cards
- Liquid-glass wish capsules
- Cinta photo gallery placeholders
- Heart-shaped photo garden layout
- POV from me
- Envelope love letter
- Future memories carousel
- Interactive scratch card
- Interactive candle blowout with gold confetti
- Interactive vinyl player widget
- Happy Birthday audio wired to the vinyl player and music toggle
- Intro gift SFX uses `assets/lets-go-birthday-girl.mp3`
- Official Birthday Pass certificate download/share
- Final birthday scene with stronger confetti
- Confetti SFX and upward/downward burst particles
- WhatsApp reply button for Cinta to send a prefilled message back to Reyhan

## Personal Names

- Birthday girl: Cinta Ayu Wulandari, shown as `19 July`
- Sender: Reyhan, nicknamed Rey

## WhatsApp Number

Set Reyhan's WhatsApp number in `app.js`:

```js
whatsappNumber: "628380401771"
```

Use international format without `+`, spaces, or dashes.
