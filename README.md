# greyfourt.github.io

Personal portfolio website for **Nazli Ozcubukcuoglu** — Creative Designer & Developer.

Live at **https://greyfourt.github.io**

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: SASS/SCSS
- **i18n**: next-intl (English + French)
- **Analytics**: Matomo (self-hosted, cookie-consent gated)
- **Font**: Nunito (Google Fonts, optimized via next/font)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

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
        page.tsx           # Projects listing with tag filters
        [projectURL]/
          page.tsx         # Individual project / case study
      legal/page.tsx       # Legal notice
      privacy/page.tsx     # Privacy policy
    (root)/                # Fallback non-localized layout
    styles/                # SCSS files (variables, mixins, base styles)
    sitemap.ts             # Auto-generated sitemap
    robots.ts              # robots.txt generation
    manifest.ts            # PWA manifest
  components/              # React components (About, Projects, CaseStudy, Navigation, etc.)
  i18n/                    # Internationalization config (routing, request)
  types.ts                 # TypeScript type definitions
  utils/                   # Matomo analytics setup
messages/
  en.json                  # English translations + project data
  fr.json                  # French translations + project data
public/
  articles/                # Project thumbnail images
  images/                  # Case study images
  icons/                   # SVG icons for About sections
  animations/              # Lottie animation files
```

## Content Management

All content lives in `messages/en.json` and `messages/fr.json` — the single source of truth for UI text, project data, and case studies.

### Projects: 23 total

| Year | Projects |
|------|----------|
| 2026 | Vita Alma |
| 2025 | Ecco-eco Architecture, DGV Consulting, Gruppo Bertone |
| 2024 | surfcamp.it, Christel Rubinel, Delphine Chartier, Harfang Therapeutics (website) |
| 2023 | Harfang Therapeutics (logo), Epic Stories, TEB Health (website + logo), La Commanderie des Templiers, Floof App, Knotbook App |
| 2022 | Corpo Karma, La Mare a Toto, Bookipe |
| 2021 | Valensi Patrimoine (website + graphics + logo), Contacts App |
| 2020 | ODB Renovation |

**Case studies**: Floof App, Knotbook App

## Internationalization

Two locales: `en` (default) and `fr`. English routes have no prefix (`/`, `/projects`), French routes are prefixed (`/fr`, `/fr/projects`).

## Adding a Project

1. Add a thumbnail image to `public/articles/` (naming: `{Tag}{Name}.png`, e.g. `WebsiteMyProject.png`)
2. Add a new entry to the `projectslist` array in **both** `messages/en.json` and `messages/fr.json`
3. If the project has a case study, set `hasCaseStudy: true`, add a `projectURL` slug, include the `projectCaseStudy` object, and add case study images to `public/images/`
4. For case studies, also update the `projectsWithCaseStudy` array in `src/app/sitemap.ts`

## Deployment

### Workflow

```
dev branch -> PR to main -> CI check (lint + build) -> merge -> create Release -> deploy to GitHub Pages
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
4. When ready to ship: go to **Releases** > **Draft a new release** > create a tag (e.g. `v1.4.0`) > **Publish**
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

## Roadmap

### Short-term
- [ ] Add more case studies (Corpo Karma, Vita Alma, DGV Consulting)
- [ ] Use Next.js `<Link>` for internal navigation (client-side transitions)
- [ ] Use Next.js `<Image>` for lazy loading and layout shift prevention
- [ ] Derive sitemap case study slugs from data instead of hardcoding
- [ ] Add dedicated OG image for better social media previews

### Medium-term
- [ ] Add lightweight project detail view for non-case-study projects (modal or page with screenshots + description)
- [ ] Add scroll animations (fade-in on scroll for project cards and sections)
- [ ] Richer JSON-LD structured data (sameAs, CreativeWork collection)
- [ ] Improve image optimization (compress thumbnails, add WebP variants)

### Long-term
- [ ] Upgrade to Next.js 15
- [ ] Add a blog/articles section
- [ ] Add project filtering by year in addition to tag
- [ ] Dark/light theme toggle
