# Date + Proposal Flow Revision Task

Revise the existing the Date Invitation, Date Selection, Girlfriend Proposal, and Ring Reveal sections.

## IMPORTANT

- Keep the same overall coquette romantic visual style.
- Use the attached reference images and assets as the visual source of truth.
- I will attach assets for:
  1. date section background
  2. proposal section background
  3. date pass background
  4. date thumbnails / references

## GENERAL STYLE

- Dark plum / black / deep burgundy base
- Soft pink glow, subtle gold accents
- Elegant romantic coquette look
- Clean, premium, dreamy, not childish
- Smooth, slow, graceful transitions
- Add lightweight floating particles / petals / sparkles, but keep performance optimized
- Avoid laggy effects
- Use opacity + transform animations only
- All animations should feel slow, soft, and intentional, never abrupt

## MAIN TASK

Fix and improve the whole Date Invitation + Proposal flow so it feels more romantic, more polished, and more “effort”.

## 1. DATE INVITATION SECTION

Revise the current “Can we go on a date?” section.

Fix these issues:
- “on a date?” script styling is too weak and not readable enough. Make it elegant but clearer.
- “Will you, sayang?” currently feels like a random fallback font. Make it visually intentional and consistent.
- CTA button moves / breaks position on hover. Fix button hover state so it stays stable.
- The “GAK! PULANG SANAI” button must work as a playful No button.
- Clicking the No button should cycle through playful rejection-resistant states and gently force the user toward accepting the invitation.
- The No button must never fully reject the flow.

Behavior:
- Primary button: “YES! Mau banget 🥺”
- Secondary No button: yg sudah ku tentukan sebelumnya
- The section transition into the next step must be slow and romantic

Animation:
- Fade in headline first
- Then subtext
- Then buttons
- Add subtle floating particles / tiny sparkles
- Keep everything slow and smooth

## 2. DATE SELECTION SECTION

Use the layout style like the reference I attached: card-based date selection, cleaner composition, more polished hierarchy.

Keep the tone / color mood similar to the darker romantic reference.

Date options:
- Lunch/Dinner Date
- Photobox Date
- Mall + Jajan Date
- Night Walk Date
- Movie Date
- Request

For each date card:
- Add a proper thumbnail image
- I will attach the reference images / assets
- Cards should feel clickable, elegant, and premium
- Selected card should glow softly, not too harsh

For “Request” card:
- User can type a custom request
- Button text: “Kirim Date Request”
- When clicked, open WhatsApp to this number:
  085604017731
- Use this template text:
  “babyyy, aku mau request date [isi requestnya]”

Tiny Date Mood:
- Replace the current cringe / AI-able mood texts
- Use short, natural, Gen Z but sweet lines
- Make them feel personal, simple, and not over-written

Examples of vibe:
- “yang penting sama kamu”
- “jajan dulu baru mikir pulang”
- “mau yang simple tapi lama”
- “asal jangan buru-buru pulangnya”
- “temenin aku yaa”

Mini Plan area:
- Show a small preview based on the selected date
- Keep it visually clean and not too busy

Transition:
- Clicking “Lanjut” should not instantly hard-cut
- It should slowly transition into the proposal section with soft fade + slight upward motion
- Existing elements should gently fade out first, then proposal fades in

## 3. GIRLFRIEND PROPOSAL SECTION

This section needs major improvement.

Goal:
Make it feel romantic, dramatic, curious, and memorable.
The animation must be SLOW, soft, and emotional.

Structure:
- Show cinematic text intro line by line
- Then reveal the main question
- “girlfriend” must be the main visual highlight
- Use better typography hierarchy
- Make the question feel intentional, not like random giant text

Improve:
- Better font pairing
- Better spacing
- Better composition
- Better entrance animations
- Add subtle particles / sparkles / glow
- Make it feel like a real highlight moment

Main question:
“What do you think about being my girlfriend?”

Buttons:
- “YESS!! I’d love to be your GIRLFRIEND 🥺”
- “GAK!! maksudnya gak mau nolak”

Both buttons go to confirmation state.

Confirmation step:
Text:
“BENERAN GAK? coba pikir dua kali, tiga kali, empat kali, jutaan kali duluhawuuahhaha”

Button:
“IYAA GANTENG!!”

When clicked:
- Trigger romantic celebration effect
- Soft confetti / sparkles from left, center, and right
- Short, lightweight, optimized, not laggy
- Then transition into Ring Reveal

## 4. RING REVEAL SECTION

Use the attached assets only:
- ring box closed
- ring box open
- ring PNG

Current issue:
This section feels flat and not exciting enough.
Make it feel special and magical.

Flow:

Stage 1:
- Show closed ring box
- Soft glow, particles, anticipation
- User taps to continue

Stage 2:
- Show open ring box
- Use the attached open box asset correctly
- Make sure it actually appears properly
- Add soft sparkle / floating particle reveal
- User taps again

Stage 3:
- Show the ring PNG as the hero focus
- This stage should be more dramatic
- Make the ring feel premium and special
- Add subtle glow, sparkles, tiny floating particles
- No flat presentation

CTA:
“Claim the promise ring”

Final stage:
Show a beautiful final message:
“then it’s official. you’re my girlfriend now.”

Make sure:
- Title and subhead are emotionally aligned with the moment
- No stiff / awkward / generic wording
- Composition feels centered and premium
- The animation into this final message must be soft and satisfying

## 5. PERFORMANCE + UI RULES

- Keep all effects lightweight
- Use transform + opacity animations
- Avoid heavy blur animation loops
- Avoid too many random floating icons
- Improve icon placement overall
- Do not let hover states break layout
- Make card hover states clean and stable
- Avoid text cropping, font mismatch, and fallback-looking typography
- Script font should only be larger where needed, especially highlighted romantic words
- Make all section transitions feel seamless with no obvious visual separation

## 6. CODING APPROACH

- Reuse existing components where possible
- Refactor only the Date Invitation, Date Selection, Proposal, and Ring Reveal sections
- Keep the site responsive
- Preserve the current site structure as much as possible
- Do not overcomplicate the code
- Make the final result feel polished, smooth, and emotionally rich

Please implement the revised UI and interaction flow based on the attached assets and references.
