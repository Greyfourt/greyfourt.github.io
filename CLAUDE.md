# CLAUDE.md - Greyfourt Portfolio

## Project Overview
Personal portfolio website for Nazli, a Creative Designer & Developer based in Lyon, France. Bilingual (EN/FR), deployed on GitHub Pages via GitHub Actions.

## Tech Stack
- **Framework:** Next.js 14 (App Router) with static export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** SASS/SCSS (variables in `src/app/styles/utils/_variables.scss`)
- **i18n:** next-intl (locales: `en` default, `fr` with `/fr` prefix)
- **Analytics:** Matomo (self-hosted, cookie-consent gated)
- **Fonts:** Nunito (via next/font)
- **Hosting:** GitHub Pages

## Commands
- `npm run dev` — Local dev server (port 3000)
- `npm run build` — Production build (outputs to `./out/`)
- `npm run lint` — ESLint check
- `npm start` — Serve production build

## Project Structure
```
src/
├── app/
│   ├── [locale]/           # Localized routes (en, fr)
│   │   ├── page.tsx        # Homepage
│   │   ├── projects/
│   │   │   ├── page.tsx    # Projects listing + filters
│   │   │   └── [projectURL]/page.tsx  # Case study pages
│   │   ├── legal/page.tsx
│   │   └── privacy/page.tsx
│   ├── (root)/             # Fallback non-localized routes
│   └── styles/             # SCSS files
├── components/             # React components
├── i18n/                   # next-intl config (routing.ts, request.ts)
├── types.ts                # TypeScript type definitions
└── utils/                  # Matomo analytics setup
messages/
├── en.json                 # English content + project data
└── fr.json                 # French content + project data
public/
├── articles/               # Project thumbnail images (e.g., WebsiteEST.png, AppFloof.png)
├── images/                 # Case study images (Problem-*, Proposal-*, Outcome-*, etc.)
├── icons/                  # SVG icons for About sections
└── animations/             # Lottie animation files
```

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
  "image": "/articles/WebsiteProjectName.png",
  "link": "https://example.com/",
  "hasCaseStudy": false,
  "isSelected": false
}
```
- **tag options:** `logo`, `website`, `mobileApp`, `webApp`, `graphics`
- **image:** Thumbnail goes in `public/articles/` (naming: `{Tag}{Name}.png`)
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
- `Problem-{Name}.png`, `Proposal-{Name}-{N}.png`, `Logo-{Name}.png`
- `UserJourney-{Name}.png`, `Outcome-{Name}-{N}.png`

## Image Naming Conventions
- Thumbnails: `public/articles/{Tag}{Name}.png` (e.g., `WebsiteEST.png`, `AppFloof.png`, `LogoHT.png`)
- Case study: `public/images/{Section}-{Name}.png`

## Deployment
- Push to `main` triggers GitHub Actions (`.github/workflows/nextjs.yml`)
- Builds with Node 20, runs `next build`, deploys static output to GitHub Pages
- Site URL: https://greyfourt.github.io

## Style Guide
- Dark theme: background `#171719`, primary `#AEB8FE`, secondary `#E88D67`
- SCSS with BEM-inspired naming
- Mobile-responsive design
- Path alias: `@/*` maps to `./src/*`

## Important Notes
- Image optimization is disabled (`unoptimized: true`) for GitHub Pages compatibility
- The `(root)` route group is a fallback — main content is under `[locale]`
- `fr.json` translations should match `en.json` structure exactly, with French text
- Case study states: EN uses "up to date" / "done", FR uses "à jour" / "terminé"
