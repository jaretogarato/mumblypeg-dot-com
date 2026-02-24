# Mumblypeg Brand Guidelines

Brand guidelines for **Mumblypeg**, a single-purpose website hosting the album **"Underbelly"** in an immersive, fullscreen music player.

---

## Brand Personality

Mumblypeg is **bold, playful, and eclectic** — just like the music. The album spans rock, pop, funk, disco, and indie, and the brand should feel like all of those genres colliding in a joyful, confident way. Inspired by the vibrant, color-obsessed aesthetic of Yinka Ilori Studio, Mumblypeg uses saturated pastels, geometric patterns, and clean typography to create something that feels alive and inviting.

**Brand keywords:** Vibrant, Playful, Eclectic, Bold, Immersive, Confident

---

## Color Palette

A bold, saturated pastel palette inspired by Yinka Ilori's signature use of color. These colors should be used generously — backgrounds, patterns, UI elements, and accents should all pull from this system.

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Lilac** | `#B8A9E8` | Primary brand color, backgrounds, large surface areas |
| **Hot Pink** | `#FF6B9D` | Primary accent, active states, call-to-action elements |
| **Sunflower** | `#FFD23F` | Highlights, progress bars, hover states |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Sky Blue** | `#56C1E8` | Secondary backgrounds, alternating sections |
| **Coral Red** | `#FF5E5B` | Alerts, emphasis, playback controls |
| **Spearmint** | `#5CE0B8` | Success states, secondary accents |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Deep Ink** | `#1A1A2E` | Primary text, dark backgrounds when needed |
| **Soft White** | `#FAF7F2` | Light text on dark, light backgrounds |
| **Warm Gray** | `#B8B5B0` | Muted text, disabled states, subtle borders |

### Color Usage Rules

- **Backgrounds should be bold.** Default to using primary or secondary palette colors for large surfaces, not neutrals. White/dark backgrounds are the exception, not the rule.
- **Pair warm and cool.** Always balance warm tones (pink, yellow, coral) with cool tones (lilac, sky blue, spearmint) in any composition.
- **High contrast for text.** Use Deep Ink on light backgrounds, Soft White on dark or saturated backgrounds. Always verify legibility.
- **Color blocking is encouraged.** Adjacent sections or UI panels can use different bold background colors, Ilori-style.
- **No more than 3 palette colors in a single view.** Bold doesn't mean chaotic — pick a dominant, a secondary, and an accent per screen/state.

---

## Typography

Clean, geometric sans-serif typography that stays legible against bold color backgrounds. The type should feel modern and confident without competing with the color and pattern work.

### Font Stack

| Role | Font | Fallback | Weight |
|------|------|----------|--------|
| **Headlines** | [Jost](https://fonts.google.com/specimen/Jost) | `'Futura', sans-serif` | 700 (Bold), 800 (ExtraBold) |
| **Body** | [Jost](https://fonts.google.com/specimen/Jost) | `'Futura', sans-serif` | 400 (Regular), 500 (Medium) |
| **Monospace / Data** | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | `'Courier New', monospace` | 400 |

> **Why Jost?** It's a free, open-source geometric sans-serif inspired by Futura (used on the Yinka Ilori site). It has excellent weight range and looks great at display sizes.

### Type Scale

| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| **Album title** | 64–96px | 800 | -0.02em | 1.0 |
| **Track title** | 32–48px | 700 | -0.01em | 1.1 |
| **Section heading** | 24–32px | 700 | 0 | 1.2 |
| **Body text** | 16–18px | 400 | 0.01em | 1.5 |
| **Caption / metadata** | 12–14px | 500 | 0.04em | 1.4 |
| **Timestamps / data** | 14px mono | 400 | 0.02em | 1.3 |

### Typography Rules

- **Headlines can be uppercase** for short labels (track numbers, section headers) but never for long text.
- **Tight letter-spacing on large type**, slightly open on small type.
- **Use weight contrast** rather than size contrast where possible — a bold 24px heading next to a regular 24px subheading reads cleaner than size variation alone.
- Timestamps, durations, and track numbers use the monospace font.

---

## Geometric Patterns

Inspired by Yinka Ilori's use of bold geometric pattern (itself drawn from West African textile traditions), patterns are a core part of the Mumblypeg visual identity. They add energy and texture without relying on photography or illustration.

### Pattern Library

Use these pattern types throughout the site:

- **Stripes** — Diagonal or horizontal, 2–3 colors, varying thickness. Good for borders, dividers, and background accents.
- **Circles / Dots** — Evenly spaced or overlapping. Good for loading states, album art surrounds, and decorative fills.
- **Checkerboard** — Two-tone grids at various scales. Good for section backgrounds and hover states.
- **Arches / Half-circles** — Stacked or tiled. Good for headers and hero sections.
- **Zigzag** — Sharp angles in alternating colors. Good for borders and visual energy.

### Pattern Usage Rules

- **Patterns use palette colors only.** Never introduce new colors through patterns.
- **One pattern type per section.** Don't mix stripes with checkerboard in the same area.
- **Patterns are background elements.** They should sit behind content at reduced opacity (10–30%) or in designated decorative areas, never competing with text or controls.
- **Scale patterns appropriately.** Large patterns for hero/background areas, small tight patterns for UI details and accents.
- **Patterns can be CSS-generated** (gradients, SVG, repeating backgrounds) for performance — avoid large image assets.

---

## Layout & Composition

The site is a **single-purpose immersive music player**. Layout should be fullscreen-first, with the album experience taking over the entire viewport.

### Core Layout Principles

- **Fullscreen canvas.** The player occupies 100vh. No traditional page scrolling for the core experience.
- **Color-blocked panels.** Different functional areas (now playing, tracklist, album info) use different background colors from the palette.
- **Generous whitespace within bold color.** Let color fill the space, but keep content areas breathable with ample padding (32–64px).
- **Center-weighted composition.** Album art and primary controls sit at the visual center. Secondary info radiates outward.
- **Responsive stacking.** On mobile, panels stack vertically. On desktop, use a split or grid layout.

### Spacing Scale

Use a consistent 8px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps, icon padding |
| `sm` | 8px | Inline spacing, small gaps |
| `md` | 16px | Component internal padding |
| `lg` | 32px | Section padding, card gaps |
| `xl` | 64px | Major section separation |
| `2xl` | 128px | Hero-level breathing room |

---

## Music Player UI

### Player Components

- **Album art** — Large, prominent, centered. Consider a subtle shadow or colored border from the palette. This is the visual anchor.
- **Track title & artist** — Immediately below or beside art. Use headline weight.
- **Progress bar** — Use Sunflower (`#FFD23F`) as the fill color on a muted track. Should feel chunky and tactile, not thin.
- **Playback controls** — Play/pause, skip forward/back, shuffle, repeat. Use simple geometric icon shapes. Active states use Hot Pink.
- **Tracklist** — Scrollable list with track number (monospace), title, and duration. Current track is highlighted with a bold background color.
- **Volume** — Optional, secondary. Can use a simple slider with palette colors.

### Player Interaction States

| State | Visual Treatment |
|-------|-----------------|
| **Idle** | Default palette colors, static |
| **Playing** | Active accent color on controls, subtle animation on album art or pattern |
| **Hovered track** | Background shifts to a lighter/darker palette variant |
| **Current track** | Bold background color block, text in contrasting color |
| **Buffering** | Animated dot pattern or stripe animation in palette colors |

---

## Motion & Animation

Keep animations playful but purposeful. Nothing should feel sluggish or gratuitous.

- **Transitions:** 200–300ms ease-out for UI state changes (hover, active, focus).
- **Page/panel transitions:** 400–600ms with subtle slide or fade.
- **Pattern animations:** Slow, ambient movement (rotating stripes, pulsing dots) at 3–8 second cycles. These are background texture, not attention-grabbing.
- **Playback feedback:** A gentle pulse or scale on the album art synced with playback start.
- **No bounce or elastic easing.** Keep it smooth — `ease-out` or `cubic-bezier(0.25, 0.1, 0.25, 1)`.

---

## Accessibility

Bold color requires extra care for accessibility.

- **All text must meet WCAG 2.1 AA contrast** (4.5:1 for body, 3:1 for large text). Test every color/background combination.
- **Don't rely on color alone** to convey state. Pair color changes with icons, labels, or shape changes.
- **Focus states** must be clearly visible — use a 2px solid outline in a contrasting palette color.
- **Keyboard navigation** for all player controls is mandatory.
- **Provide alt text** for album art and any decorative images.
- **Respect `prefers-reduced-motion`** — disable pattern animations and reduce transitions.

---

## Summary: The Mumblypeg Look

Imagine walking into a room where every wall is a different bold pastel color, geometric patterns tile the floor, clean modern type labels everything, and the music is loud. That's Mumblypeg. It's confident, colorful, eclectic, and fun — a visual identity that matches an album called "Underbelly" that refuses to sit in one genre.
