# greyfourt.github.io

Personal portfolio website for Nazli Ozcubukcuoglu — Creative Designer & Developer.

Live at **https://greyfourt.github.io**

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: SASS
- **i18n**: next-intl (English + French)
- **Analytics**: Matomo
- **Font**: Nunito (Google Fonts, optimized via next/font)
- **Hosting**: GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
  app/
    [locale]/              # Localized routes (en, fr)
      layout.tsx           # Root layout (metadata, SEO, JSON-LD)
      page.tsx             # Homepage
      projects/
        page.tsx           # Projects listing
        [projectURL]/
          page.tsx         # Individual project / case study
    (root)/                # Fallback non-localized layout
    sitemap.ts             # Auto-generated sitemap
    robots.ts              # robots.txt generation
    manifest.ts            # PWA manifest
  components/              # React components (About, Projects, CaseStudy, etc.)
  i18n/                    # Internationalization config
  utils/                   # Matomo analytics setup
messages/
  en.json                  # English translations + project data
  fr.json                  # French translations + project data
public/
  images/                  # Case study images
  articles/                # Project thumbnail images
  icons/                   # SVG icons
  animations/              # Lottie animations
```

## Internationalization

Two locales: `en` (default) and `fr`. English routes have no prefix (`/`, `/projects`), French routes are prefixed (`/fr`, `/fr/projects`).

All content — including project data and case studies — lives in `messages/en.json` and `messages/fr.json`.

## Adding a Project

Add a new entry to the `projectslist` array in both `messages/en.json` and `messages/fr.json`. If the project has a case study, set `hasCaseStudy: true`, add a `projectURL` slug, and include the `projectCaseStudy` object.

For case study projects, also add the slug to `generateStaticParams()` in `src/app/[locale]/projects/[projectURL]/page.tsx` and to the `projectsWithCaseStudy` array in `src/app/sitemap.ts`.

## Deployment

### Workflow

```
dev branch → PR to main → CI check (lint + build) → merge → create Release → deploy to GitHub Pages
```

### GitHub Actions

Two workflows in `.github/workflows/`:

| Workflow | File | Trigger | What it does |
|----------|------|---------|-------------|
| **CI** | `ci.yml` | Pull requests to `main` | Runs `lint` and `build` to catch errors before merging |
| **Deploy** | `nextjs.yml` | GitHub Release published (or manual dispatch) | Builds the site and deploys to GitHub Pages |

### How to deploy

1. Work on a feature branch (or `dev`)
2. Open a PR to `main` — CI runs automatically
3. Once CI passes, merge the PR
4. When ready to ship: go to **Releases** > **Draft a new release** > create a tag (e.g. `v1.3.0`) > **Publish**
5. The deploy workflow triggers and the site goes live

You can also trigger a deploy manually from the **Actions** tab > **Deploy Next.js site to Pages** > **Run workflow**.

### Setup required

For the CI check to be enforced, enable branch protection on `main` in **Settings > Branches > Branch protection rules**:
- Require pull request before merging
- Require status checks to pass (select the `check` job from CI)

## Scripts

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start dev server               |
| `npm run build` | Build static export to `./out` |
| `npm run lint`  | Run ESLint                     |
