# Technical Design Specification: Mushroom Temple Meditation Portal

## Meta-Prompt:

Integrate this into the existing Jekyll site structure. The site uses a custom theme and layout system. The new page should follow the existing design patterns and use the existing Jekyll template system and typography/colors/design system. If anything in this document conflicts with the existing site design, prioritize the existing site design. The new page should be accessible at `/mushroom-temple-lightbox/`.

## Project Overview

**Page Purpose**: Landing page for QR code visitors from physical art exhibition, providing access to day/night meditation videos with animated light box art and nature sounds.

**Target Platform**: Jekyll static site (existing site integration)

**Primary User Flow**: QR scan → Landing page → Toggle day/night → Click play → YouTube video opens

**Design Philosophy**: Mobile-first, minimal, meditative aesthetic with smooth transitions

---

## Page Structure & Layout

### Component Hierarchy

```
1. Hero Section
   - Background gradient (dynamic)
   - Title
   - Subtitle/tagline

2. Mode Selection
   - Day/Night toggle switch with icons

3. Video Preview
   - Dynamic thumbnail image
   - Video title (changes with mode)
   - Play button (CTA)

4. About Section (collapsible)
   - Brief artist statement
   - Process description
```

---

## Responsive Breakpoints

**Approach**: Mobile-first using min-width media queries [uversedigital](https://uversedigital.com/blog/responsive-web-design-2026/)

**Breakpoints**:

- **Base (Mobile)**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

**Layout Behavior**:

- Mobile: Single column, full-width components, vertical stacking
- Tablet: Slightly increased padding, larger touch targets
- Desktop: Max-width container (800px), centered, increased spacing

---

## Color Scheme

### Day Mode

- **Background Gradient**: `linear-gradient(180deg, #FFF5E6 0%, #FFE4B5 50%, #FFDAA0 100%)`
  - Warm amber sunrise tones
- **Text Primary**: `#2C1810` (dark brown)
- **Text Secondary**: `#5C4033` (medium brown)
- **Accent/CTA**: `#D4860F` (golden)
- **Toggle Active**: `#FFB347` (bright sun orange)

### Night Mode

- **Background Gradient**: `linear-gradient(180deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)`
  - Deep twilight purple to navy
- **Text Primary**: `#E8E8E8` (off-white)
- **Text Secondary**: `#B8B8B8` (light gray)
- **Accent/CTA**: `#7B68EE` (medium purple)
- **Toggle Active**: `#4A5568` (moon gray)

### Neutral Elements

- **Toggle Background**: `#E2E8F0` (light gray)
- **Toggle Border**: `#CBD5E0`
- **Shadow (Day)**: `rgba(0, 0, 0, 0.1)`
- **Shadow (Night)**: `rgba(0, 0, 0, 0.3)`

---

## Typography

### Font Stack

```css
--font-primary: "Crimson Text", "Georgia", serif;
--font-secondary:
  "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Type Scale (Mobile → Desktop)

**Title (H1)**:

- Mobile: `font-size: clamp(2rem, 5vw, 3rem);`
- `font-weight: 400;`
- `font-family: var(--font-primary);`
- `letter-spacing: 0.02em;`
- `line-height: 1.2;`

**Subtitle/Tagline**:

- Mobile: `font-size: clamp(1rem, 3vw, 1.25rem);`
- `font-weight: 300;`
- `font-family: var(--font-primary);`
- `font-style: italic;`
- `line-height: 1.5;`

**Video Title**:

- Mobile: `font-size: clamp(1.125rem, 3vw, 1.5rem);`
- `font-weight: 500;`
- `font-family: var(--font-secondary);`
- `line-height: 1.4;`

**CTA Button**:

- `font-size: 1rem;`
- `font-weight: 600;`
- `font-family: var(--font-secondary);`
- `text-transform: uppercase;`
- `letter-spacing: 0.05em;`

**Body Text**:

- `font-size: 1rem;`
- `font-weight: 400;`
- `font-family: var(--font-secondary);`
- `line-height: 1.6;`

---

## Component Specifications

### 1. Hero Section

**Mobile**:

- `padding: 3rem 1.5rem 2rem;`
- `text-align: center;`

**Desktop**:

- `padding: 4rem 2rem 3rem;`

**Content**:

```
Title: "Welcome to the Mushroom Temple"
Subtitle: "A meditative journey through light and nature"
```

**Behavior**: Background gradient transitions smoothly (0.6s ease) when mode changes

---

### 2. Toggle Switch Component

**Dimensions**:

- Mobile: `width: 280px; height: 56px;`
- Desktop: `width: 320px; height: 64px;`

**Structure**:

```html
<div class="mode-toggle-container">
  <label class="toggle-label">Mode</label>
  <div class="toggle-switch">
    <button class="toggle-option" data-mode="day">
      <span class="toggle-icon">☀️</span>
      <span class="toggle-text">Day</span>
    </button>
    <button class="toggle-option" data-mode="night">
      <span class="toggle-icon">🌙</span>
      <span class="toggle-text">Night</span>
    </button>
    <div class="toggle-slider"></div>
  </div>
</div>
```

**Styling**:

- Border radius: `9999px` (pill shape)
- Background: `var(--toggle-bg)`
- Active state has sliding background pill
- Smooth transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Touch Target**: Minimum 48px height for accessibility [keelis](https://www.keelis.com/blog/responsive-web-design-in-2026:-trends-and-best-practices)

**Default State**: Day mode selected on page load

---

### 3. Video Preview Section

**Mobile**:

- `padding: 2rem 1.5rem;`
- `margin: 0 auto;`
- `max-width: 100%;`

**Desktop**:

- `padding: 3rem 2rem;`
- `max-width: 600px;`

**Thumbnail Container**:

- Aspect ratio: `16:9`
- Border radius: `12px`
- Box shadow: Day mode `0 4px 12px rgba(0,0,0,0.1)`, Night mode `0 4px 20px rgba(0,0,0,0.3)`
- Transition: `opacity 0.4s ease, transform 0.4s ease`

**Thumbnail Images**:

- Day: `mushroom-temple-lightbox-day.jpg` (user provides)
- Night: `mushroom-temple-lightbox-night.jpg` (user provides)
- Alt text: "Mushroom Temple light box art - [Day/Night] mode"
- `object-fit: cover;`
- `width: 100%;`

**Video Title** (appears below thumbnail):

- Day: "Day Meditation - Birds & Forest Sounds"
- Night: "Night Meditation - Crickets & Evening Calm"
- `margin-top: 1rem;`
- Fade transition when switching: `0.3s ease`

**Play Button (CTA)**:

```css
.play-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Day mode */
.play-button.day {
  background: linear-gradient(135deg, #d4860f, #ffb347);
  color: #1a1a1a;
  box-shadow: 0 4px 12px rgba(212, 134, 15, 0.3);
}

/* Night mode */
.play-button.night {
  background: linear-gradient(135deg, #7b68ee, #9b86ff);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(123, 104, 238, 0.3);
}

.play-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.play-button:active {
  transform: translateY(0);
}
```

**Button Text**: "Begin Journey" with play icon (▶)

**Behavior**: Opens YouTube URL in new tab

- Day video URL: `https://youtube.com/watch?v=[DAY-VIDEO-ID]`
- Night video URL: `https://youtube.com/watch?v=[NIGHT-VIDEO-ID]`

---

### 4. About Section (Collapsible)

**Position**: Below video section

**Trigger**: "About This Piece ↓" text button

- `font-size: 0.875rem;`
- `color: var(--text-secondary);`
- `text-decoration: underline;`
- `cursor: pointer;`

**Content** (expandable):

```
This 3D paper-cut light box combines watercolor art with illuminated layers
to create depth and atmosphere. Each layer reveals sacred geometry, mushrooms,
and natural elements surrounding a mystical temple at the center.

Use these videos for meditation, relaxation, or peaceful background ambiance.
```

**Animation**: Slide down with `max-height` transition (0.3s ease)

---

## Interactive Behaviors

### Toggle Switch Interaction

**On Click/Tap**:

1. Slider animates to selected option (0.3s cubic-bezier)
2. Background gradient transitions (0.6s ease)
3. Video thumbnail crossfades (0.4s ease)
4. Video title fades out/in with new text (0.3s ease)
5. Play button color updates (0.3s ease)

**State Management**: Use data attribute or class on `<body>` or root container

- `<body class="mode-day">` or `<body class="mode-night">`

### Play Button Interaction

**Behavior**:

```javascript
// Pseudo-code for functionality
playButton.addEventListener("click", () => {
  const currentMode = document.body.classList.contains("mode-day")
    ? "day"
    : "night";
  const videoUrl = currentMode === "day" ? dayVideoUrl : nightVideoUrl;
  window.open(videoUrl, "_blank");
});
```

**Accessibility**:

- Button has `aria-label="Play [Day/Night] meditation video"`
- Focus visible outline: `2px solid` accent color with `4px offset`

---

## Animations & Transitions

### Page Load

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  animation: fadeInUp 0.6s ease-out;
}

.mode-toggle-container {
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.video-preview {
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}
```

### Mode Transition

- All color changes: `transition: all 0.6s ease;`
- Background gradient: `transition: background 0.6s ease;`
- Text colors: `transition: color 0.4s ease;`

### Hover States

- Buttons: `transform: translateY(-2px)` with shadow increase
- Links: Underline with `0.2s ease` transition

---

## Mobile Optimization

### Touch Interactions [keelis](https://www.keelis.com/blog/responsive-web-design-in-2026:-trends-and-best-practices)

- Minimum touch target: `48px × 48px`
- Increased padding around interactive elements
- Remove hover states on touch devices (use `@media (hover: hover)`)

### Performance

- Lazy load video thumbnails with `loading="lazy"`
- Preload critical fonts
- Minimize CSS/JS bundle size
- Use system fonts as fallback

### Viewport Meta Tag

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
/>
```

---

## Technical Requirements

### Jekyll Integration

**File Structure**:

```
_includes/
  mushroom-temple-lightbox/
    hero.html
    toggle.html
    video-preview.html

_layouts/
  mushroom-temple-lightbox.html

assets/
  css/
    mushroom-temple-lightbox.css
  js/
    mushroom-temple-lightbox.js
  images/
    mushroom-temple-lightbox/
      day-thumbnail.jpg
      night-thumbnail.jpg


**Front Matter** (`mushroom-temple-lightbox.md`):
day_video_url: "https://youtu.be/lmtunWbJhPM?si=73aLI5wM_VfVaZmL"
night_video_url: "https://youtu.be/Nc-yLCf0h_Q?si=psddcbDLSYKF22ts"
---
```

### JavaScript Requirements

**Functionality**:

1. Toggle switch state management
2. Mode switching (day/night)
3. Dynamic class application to body/root
4. Video URL handling
5. Optional: localStorage to remember user preference

**Vanilla JS** (no dependencies):

```javascript
// Core toggle functionality
const toggleButtons = document.querySelectorAll(".toggle-option");
const body = document.body;

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    body.className = `mode-${mode}`;
    // Update active state, slider position, etc.
  });
});
```

### CSS Approach

- Use CSS custom properties for theme values
- Single stylesheet with mode-specific overrides
- Mobile-first media queries with `min-width` [browserstack](https://www.browserstack.com/guide/what-are-css-and-media-query-breakpoints)

**Example**:

```css
:root {
  /* Day mode defaults */
  --bg-gradient: linear-gradient(180deg, #fff5e6 0%, #ffe4b5 50%, #ffdaa0 100%);
  --text-primary: #2c1810;
  --accent: #d4860f;
}

body.mode-night {
  --bg-gradient: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  --text-primary: #e8e8e8;
  --accent: #7b68ee;
}
```

---

## Asset Requirements

### Images Needed

1. **Day thumbnail**: High-quality photo of light box in daylight
   - Format: JPG (optimized)
   - Dimensions: 1920×1080px (16:9)
   - File size: <500KB

2. **Night thumbnail**: High-quality photo of light box with lights at night
   - Format: JPG (optimized)
   - Dimensions: 1920×1080px (16:9)
   - File size: <500KB

### Optional Assets

- Custom sun/moon icons (SVG) instead of emoji
- Favicon with mushroom temple symbol
- Open Graph image for social sharing (1200×630px)

---

## Accessibility Requirements

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- `<main>` landmark for primary content
- `<button>` for interactive elements (not `<div>`)

### ARIA Labels

```html
<button aria-label="Switch to day mode" data-mode="day">...</button>
<button aria-label="Play day meditation video">Begin Journey</button>
```

### Keyboard Navigation

- Tab order follows visual flow
- Focus visible on all interactive elements
- Enter/Space activates buttons

### Color Contrast

- Text meets WCAG AA standards (4.5:1 for normal text)
- Day mode: Dark brown on light amber background
- Night mode: Off-white on dark navy background

---

## SEO & Metadata

```html
<title>
  Mushroom Temple Meditation Portal - Immersive Light & Sound Journey
</title>
<meta
  name="description"
  content="Experience a meditative journey through an illuminated paper-cut mushroom temple with nature sounds. Choose day or night meditation videos."
/>

<!-- Open Graph -->
<meta property="og:title" content="Mushroom Temple Meditation Portal" />
<meta
  property="og:description"
  content="Meditative journey through light and nature"
/>
<meta property="og:image" content="[URL to preview image]" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

---

## QR Code Implementation

**QR Code URL**: `https://[your-domain]/mushroom-temple/`

**Recommendations**:

- Use dynamic QR code service (Bitly, QR Code Generator, etc.) for analytics
- Test QR code at multiple sizes (minimum 2×2 inches printed)
- Include error correction level H (30% recovery)
- High contrast (black on white background)

---

## Testing Checklist

### Functionality

- [ ] Toggle switches between day/night modes
- [ ] All colors/gradients update correctly
- [ ] Video thumbnail changes
- [ ] Video title updates
- [ ] Play button opens correct YouTube URL in new tab
- [ ] About section expands/collapses (if implemented)

### Responsive

- [ ] Test on iPhone SE (375px)
- [ ] Test on iPhone 14 Pro (390px)
- [ ] Test on iPad (768px)
- [ ] Test on desktop (1024px+)
- [ ] Landscape orientation on mobile

### Performance

- [ ] Page loads in <2 seconds on 3G
- [ ] Images optimized and compressed
- [ ] CSS/JS minified for production

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader announces mode changes
- [ ] Color contrast passes WCAG AA
- [ ] Touch targets minimum 48px

### Browser Compatibility

- [ ] Chrome/Edge (latest)
- [ ] Safari iOS (latest)
- [ ] Firefox (latest)
- [ ] Samsung Internet

---

## Implementation Notes

### Priority 1 (Core Functionality)

- Hero section with title/subtitle
- Day/night toggle switch
- Video thumbnail display
- Play button with YouTube links
- Responsive layout (mobile → desktop)

### Priority 2 (Enhanced Experience)

- Smooth transitions/animations
- Gradient background changes
- About section (collapsible)
- localStorage for mode preference

### Priority 3 (Nice-to-Have)

- Custom SVG icons for sun/moon
- Parallax background effect
- Share functionality

---

## Deployment

**Jekyll Build**:

```bash
bundle exec jekyll build
```

**Test Locally**:

```bash
bundle exec jekyll serve
```

**Static Files**: Output to `_site/mushroom-temple-lightbox/`

**CDN/Hosting**: Ensure images are served with appropriate caching headers

---

## Future Enhancements

- Add audio preview (short clip) before opening YouTube
- Implement time-based auto-selection (day mode during daylight hours)
- Add more meditations as collection grows
- Integrate commenting/feedback system
- Create embeddable widget version for other sites

---

**End of Specification**

This document provides complete design and technical specifications for the Mushroom Temple Meditation Portal landing page. All measurements, colors, and behaviors are defined for direct implementation into your Jekyll site. [slack](https://slack.com/intl/en-sg/templates/technical-specifications)
