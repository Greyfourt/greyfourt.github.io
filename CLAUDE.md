# CLAUDE.md - Greyfourt Portfolio

## Project Overview
Personal portfolio website for Nazli, a Creative Designer & Developer based in Lyon, France. Bilingual (EN/FR), deployed on GitHub Pages via GitHub Actions.

## Tech Stack
- **Framework:** Next.js 14 (App Router) with static export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** SASS/SCSS with CSS custom properties for theming
- **i18n:** next-intl (locales: `en` default, `fr` with `/fr` prefix)
- **Analytics:** Matomo (self-hosted, cookie-consent gated)
- **Fonts:** Nunito (via next/font)
- **Hosting:** GitHub Pages

## Commands
- `npm run dev` — Local dev server (port 3000)
- `npm run build` — Production build (outputs to `./out/`)
- `npm run lint` — ESLint check
- `npm start` — Serve production build
- `npm run clean` — Clear `.next` cache
- `npm run dev:clean` — Clear cache and start dev server

## Project Structure
```
src/
├── app/
│   ├── [locale]/           # Localized routes (en, fr)
│   │   ├── layout.tsx      # Root layout (metadata, SEO, FOHT script)
│   │   ├── page.tsx        # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx    # Projects listing + filters
│   │   │   └── [projectURL]/page.tsx  # Case study pages
│   │   ├── legal/page.tsx
│   │   └── privacy/page.tsx
│   ├── (root)/             # Fallback non-localized routes
│   └── styles/
│       ├── App.scss        # Main entry — imports all partials
│       ├── utils/
│       │   ├── _themes.scss    # Dark/light theme CSS custom properties
│       │   ├── _variables.scss # (legacy, emptied — colors now in _themes.scss)
│       │   └── _mixins.scss    # SCSS mixins (flex, icon)
│       └── base/
│           ├── _base.scss      # Nav, buttons, footer, cookie banner, legal pages
│           ├── _typography.scss # Font styles
│           ├── _home.scss      # Homepage sections (header, about)
│           ├── _projects.scss  # Project cards, filters, tags
│           └── _casestudy.scss # Case study page styles
├── components/
│   ├── Navigation.tsx      # Nav bar + full-screen hamburger menu (client component)
│   ├── ThemeToggle.tsx     # Dark/light theme toggle (client component)
│   ├── Icons.tsx           # SVG icon component (renders from registry)
│   ├── iconRegistry.ts     # Icon data registry (all SVG paths as plain objects)
│   ├── About.tsx           # About sections (uses CSS mask-image for SVG icons)
│   ├── Projects.tsx        # Project cards grid
│   ├── CaseStudy.tsx       # Case study page component
│   ├── Filters.tsx         # Project tag filters
│   ├── Tag.tsx             # Tag badge component
│   └── CookieBanner.tsx    # Cookie consent banner
├── i18n/                   # next-intl config (routing.ts, request.ts)
├── types.ts                # TypeScript type definitions
└── utils/                  # Matomo analytics setup
messages/
├── en.json                 # English content + project data
└── fr.json                 # French content + project data
scripts/
└── convert-to-webp.mjs    # PNG → WebP conversion (uses sharp)
public/
├── articles/               # Project thumbnail images (WebP format, e.g., WebsiteEST.webp)
├── images/                 # Case study images (WebP format, Problem-*, Proposal-*, etc.)
├── icons/                  # SVG icons for About sections (colored via CSS mask-image)
└── animations/             # Lottie animation files
```

## Theming System

### CSS Custom Properties
All colors are defined as CSS custom properties in `src/app/styles/utils/_themes.scss`. There are **no SCSS color variables** — everything uses `var(--name)` for runtime theme switching.

Key tokens:
- `--bg`, `--bg-elevated`, `--bg-hover`, `--bg-tag` — background layers
- `--text`, `--text-muted` — text colors
- `--accent`, `--accent-soft` — primary accent (blue/indigo)
- `--pop`, `--pop-soft`, `--pop-hover` — secondary accent (orange)
- `--border`, `--shadow-sm`, `--shadow-md`, `--shadow-overlay` — UI chrome
- `--tag-logo`, `--tag-website`, `--tag-mobileApp`, `--tag-webApp`, `--tag-graphics` — project tag colors

### Dark Mode (default)
- Background: `#171719`, accent: `#AEB8FE`, pop: `#E88D67`
- Applied via `:root` (default) and `[data-theme="dark"]` (explicit override)

### Light Mode
- Background: `#EAEAED`, accent: `#4E5CB5`, pop: `#AE471A`
- Applied via `@media (prefers-color-scheme: light)` on `:root:not([data-theme])` (system preference) and `[data-theme="light"]` (explicit override)
- All colors pass WCAG AA contrast (4.5:1 minimum for text)

### Hydration-Safe Theme Strategy
Theme colors are defined as SCSS mixins (`@mixin dark-theme`, `@mixin light-theme`) to avoid duplication. The cascade:
1. `:root` — dark theme as default (no attribute needed)
2. `@media (prefers-color-scheme: light)` on `:root:not([data-theme])` — respects system preference when no manual override
3. `[data-theme="dark"]` / `[data-theme="light"]` — manual overrides set by user toggle

This avoids hydration mismatches because the server-rendered `<html>` has **no `data-theme` attribute** — CSS media queries handle system preference without JS.

### FOHT Prevention (Flash of Wrong Theme)
An inline `<script>` in `layout.tsx` reads `localStorage` and sets `data-theme` **only if a stored preference exists**. If the user has never toggled the theme, CSS `@media (prefers-color-scheme)` handles it natively — no flash, no hydration mismatch.

### Theme Toggle
`ThemeToggle.tsx` is a `'use client'` component that:
- On mount: reads `localStorage`; if no stored preference, syncs display to `prefers-color-scheme` without setting `data-theme`
- On toggle: sets `data-theme` attribute on `<html>`, persists choice to `localStorage`
- Shows sun/moon icon with "Light"/"Dark" label

### Tag Colors with Transparency
Since `rgba()` doesn't work with CSS custom properties, tag backgrounds use:
```scss
background: color-mix(in srgb, var(--tag-xxx) 15%, transparent);
```

## Icon System

### Icon Registry (`iconRegistry.ts`)
All SVG icon data lives in a plain TypeScript object — no JSX, just path data. Each icon has:
- `viewBox`, `style` (`"filled"` or `"outlined"`), `paths[]`, optional `circles[]` and `rects[]`

### Icon Component (`Icons.tsx`)
Renders SVGs from the registry using `currentColor` for theme-aware coloring:
- `<Icon name="sun" />` — looks up the icon by name in the registry
- Filled icons: `fill: currentColor`, Outlined icons: `stroke: currentColor`

### About Section SVG Icons
External SVGs in `public/icons/` have hardcoded stroke colors. The About component uses CSS `mask-image` instead of `<img>` to control color via CSS:
```tsx
<div className="icon" style={{ maskImage: `url(/icons/${key}.svg)` }} />
```
```scss
.icon { background-color: var(--accent); mask-size: contain; }
```

## Layout System
All major containers share unified SCSS layout variables for consistent alignment:
```scss
$layout-max: 1050px;
$layout-pad: 1.5rem;
$layout-pad-mobile: 1.5rem;
```
Applied to: `nav`, `.navMenu`, `.bodyContainer`, `footer`. Each uses `max-width: $layout-max` and `padding: ... $layout-pad`, ensuring brand, menu items, content, and footer all share the same left/right edges at all screen sizes.

## Navigation

### Always-Hamburger Design
The nav uses a hamburger menu at all screen sizes (no desktop nav links). The bar shows only:
- **Left:** "greyfourt" brand link
- **Right:** Hamburger button (animates to X when open)

### Full-Screen Menu
Clicking the hamburger opens a full-screen overlay (`position: fixed; inset: 0`) containing:
- **Links:** Home, Projects, CV (download), Contact (mailto)
- **Footer:** Social icons (mail, LinkedIn, GitHub) + theme toggle + language switcher, separated by a `border-top` divider
- **Animation:** Links fade in with staggered delays, footer fades in after

### Z-Index Layering
- `nav`: z-index 200 (sticky bar)
- `.navBrand`, `.navHamburger`: z-index 201 (above overlay)
- `.navMenu`: z-index 199 (below nav bar items, above page content)

### Scroll Lock
Body scroll is disabled when the menu is open via `useEffect` toggling `document.body.style.overflow`.

## Content Management
All content lives in `messages/en.json` and `messages/fr.json`. These are the **single source of truth** for:
- UI labels, page text, footer, legal, privacy
- **Project data** in the `projectslist` array

### Adding a New Project
Add an entry to `projectslist` in **both** `en.json` and `fr.json`:
```json
{
  "title": "Project Name",
  "date": "2024",
  "tag": "website",
  "image": "/articles/WebsiteProjectName.webp",
  "link": "https://example.com/",
  "hasCaseStudy": false,
  "isSelected": false
}
```
- **tag options:** `logo`, `website`, `mobileApp`, `webApp`, `graphics`
- **image:** Thumbnail goes in `public/articles/` (naming: `{Tag}{Name}.webp`)
- **link:** External URL (omit if no live link)
- **projectURL:** URL slug for case study (only if `hasCaseStudy: true`)
- **isSelected:** `true` = shown on homepage "Featured Projects"
- Projects are displayed in the order they appear in the array (newest first)
- Both locale files must have the **same number of projects** in the same order

### Adding a Case Study
Set `hasCaseStudy: true`, add `projectURL` slug, and include a `projectCaseStudy` object with:
- Problem section: `problemImage`, `problemDescriptions[]`
- Research: `researchDescription`
- Brand Identity: logo images, propositions, typography, colors
- User Journeys: `userJourneyDescription`, `userJourneyImage`
- Outcome: `outComeDescriptions[]`, `outComeImages[]`

Case study images go in `public/images/` with naming:
- `Problem-{Name}.webp`, `Proposal-{Name}-{N}.webp`, `Logo-{Name}.webp`
- `UserJourney-{Name}.webp`, `Outcome-{Name}-{N}.webp`

### Adding a New Icon
1. Add the SVG path data to `src/components/iconRegistry.ts`
2. Use it anywhere with `<Icon name="yourIcon" />`
3. Icon automatically inherits text color from its parent via `currentColor`

## Image Naming Conventions
- **Format:** All images use WebP (converted from PNG for ~68% size reduction)
- Thumbnails: `public/articles/{Tag}{Name}.webp` (e.g., `WebsiteEST.webp`, `AppFloof.webp`, `LogoHarfang.webp`)
- Case study: `public/images/{Section}-{Name}.webp`
- All `<img>` tags use `loading="lazy"` for deferred offscreen loading

### Image Conversion Scripts
- `scripts/convert-to-webp.mjs` — Converts PNG files in `public/articles/` and `public/images/` to WebP using sharp (quality 80), deletes original PNGs
- Run with: `node scripts/convert-to-webp.mjs`
- `sharp` is a devDependency for image processing

## Deployment
- Push to `main` triggers GitHub Actions (`.github/workflows/nextjs.yml`)
- Builds with Node 20, runs `next build`, deploys static output to GitHub Pages
- Site URL: https://greyfourt.github.io

## Style Guide
- CSS custom properties for all colors (no SCSS `$color-` variables)
- SCSS used only for nesting, mixins, and `@for` loops
- `color-mix()` for transparent variants of CSS custom properties
- Path alias: `@/*` maps to `./src/*`

## Important Notes
- Image optimization is disabled (`unoptimized: true`) for GitHub Pages compatibility
- All images are WebP format with `loading="lazy"` for performance
- The `(root)` route group is a fallback — main content is under `[locale]`
- `fr.json` translations should match `en.json` structure exactly, with French text
- Case study states: EN uses "up to date" / "done", FR uses "à jour" / "terminé"
- macOS has case-insensitive filesystem — avoid files that differ only by case (e.g., `icons.ts` vs `Icons.tsx`)
- If the `.next` cache becomes stale after structural changes, run `npm run clean`
