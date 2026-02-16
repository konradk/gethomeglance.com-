# HomeGlance Website Design Review

Date: February 15, 2026  
Project: `gethomeglance.com`  
Reviewer lens: premium product marketing site (minimal, modern, conversion-focused)

## Snapshot of current state

Primary captures used in this review:

- Hero (desktop): `output/playwright/design-review-current-hero.png`
- Full page (desktop): `output/playwright/design-review-current-desktop-full.png`
- Full page (mobile): `output/playwright/design-review-current-mobile-full.png`

## Executive assessment

The site has a strong visual foundation and is already close to a polished "coming soon" launch page.  
Current quality level: **7.8/10**.

It succeeds on brand clarity, hero impact, and general cleanliness. The next step is to improve composition variety and pacing so the page feels less templated in the lower half. Right now, many sections share the same card style, which creates visual fatigue.

## What is working well

1. **Brand identity is clear immediately** (icon, wordmark, subtitle, warm accent palette).
2. **Hero hierarchy is strong** with a clear headline, concise supporting copy, and focused CTA.
3. **Visual style is consistent** across cards, borders, radii, and shadows.
4. **Color usage is restrained** and mostly tasteful for a minimal product page.
5. **Content structure is logical** (features -> capabilities -> workflow -> screenshot plan).
6. **Responsiveness is functional**, and the layout does not break on small screens.

## Key issues to fix (prioritized)

### P1 (high impact)

1. **Lower-page sections feel too repetitive.**  
`What you can control`, `How HomeGlance works`, and `Planned screenshot slots` all rely on very similar card compositions. This weakens visual rhythm and makes the page feel long and uniform.

2. **Card interiors still feel under-composed in several blocks.**  
Even after spacing improvements, many cards have large empty areas with short text, especially in workflow and controls. This reads as "placeholder layout" rather than deliberate editorial design.

3. **Section transitions need stronger pacing cues.**  
There is vertical spacing, but not enough contrast in layout pattern between sections (for example, no alternating alignment, no occasional full-width story block, no asymmetry).

### P2 (medium impact)

4. **Feature placeholders are visually heavier than live content.**  
Dashed boxes and placeholder labels draw too much attention for a production-facing page.

5. **Typography contrast can be refined in body copy.**  
Secondary text in cards and section intros is close in tone/value, making scannability weaker than it should be.

6. **CTA row in hero could align with cleaner input behavior.**  
The input and button work, but the pattern still feels "generic SaaS" vs premium product marketing.

### P3 (low impact)

7. **Micro-interaction layer is mostly absent.**  
No subtle hover/focus motion language across cards and CTA reduces perceived craft.

8. **Footer area is correct but visually quiet to the point of feeling unfinished.**

## Design direction for next iteration

## 1) Introduce section-level composition variety

Use three alternating section patterns instead of repeating 2-column card grids:

1. **Pattern A:** left text block + right 2-up cards.
2. **Pattern B:** full-width story band with 3 compact highlights.
3. **Pattern C:** asymmetric layout (2 cards on left, one tall media block on right).

This will immediately improve pacing and perceived sophistication.

## 2) Tighten card system for "intentional minimal"

Define a stricter component rhythm:

- Standard card min-height: `12.5rem` to `14rem` (avoid oversized emptiness).
- Standard card padding: `1.5rem` to `1.75rem`.
- Heading-to-body gap: `0.55rem` to `0.7rem`.
- Use one soft border treatment and one shadow recipe globally.

Goal: cards should look dense enough to feel intentional, but never cramped.

## 3) Reduce placeholder dominance

For screenshot placeholders:

- Lower label prominence (smaller, lighter).
- Reduce dashed stroke contrast.
- Add subtle neutral frame background, not accent-heavy gradient.

Keep placeholders useful for implementation planning without competing with primary messaging.

## 4) Improve typography hierarchy

- Slightly darken section intro body copy for better legibility.
- Keep display headlines bold, but reduce repeated large heading scale in lower sections by ~8-12%.
- Use tighter max line length for explanatory text (`~56-64ch` desktop).

## 5) Add restrained interaction polish

- CTA hover: minor lift + shadow bloom (120-180ms).
- Card hover: very subtle border tint and shadow increase.
- Focus styles for input/button should be clearly visible and elegant.

This creates a modern feel without visual noise.

## Suggested implementation roadmap

### Pass 1 (highest ROI)

1. Recompose lower-page section layouts into alternating patterns.
2. Normalize card heights and padding to remove empty zones.
3. De-emphasize screenshot placeholders.

### Pass 2

1. Typography tuning across section titles and intros.
2. Improve CTA/input row styling and interaction.

### Pass 3

1. Add micro-interactions and final polish.
2. Replace placeholder media with final product screenshots.

## Success criteria for final visual quality

1. No section should feel like a repeated block from the previous one.
2. Every card should look intentionally filled, not sparse.
3. Visual weight should stay in hero + key proof blocks, not placeholders.
4. Mobile should preserve hierarchy with clean breathing room and easy scanning.
5. Overall impression should be premium, calm, and product-first.

