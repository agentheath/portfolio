# CLAUDE.md

This file provides guidance for AI assistants working on this codebase.

## Project Overview

This is **Heath Reinhard's tech writing portfolio** — a static site built with Astro and Tailwind CSS, deployed to GitHub Pages. The site showcases technical writing samples, a process/methodology page, and an about page, positioning Heath as an AI-native, data-driven technical writer.

- **Live site**: https://agentheath.github.io/portfolio/
- **Framework**: Astro v4 (static output)
- **Styling**: Tailwind CSS v3
- **Content**: Markdown via Astro Content Collections
- **Deployment**: GitHub Actions → GitHub Pages (`deploy.yml`)

## Repository Structure

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage (hero, stats, featured work, CTA)
│   │   ├── about.astro          # About page with sidebar
│   │   ├── process.astro        # AI workflow + data-driven methodology
│   │   ├── 404.astro            # Haiku 404 page
│   │   └── work/
│   │       ├── index.astro      # Work grid (all projects)
│   │       └── [...slug].astro  # Dynamic project pages (case study + doc sample)
│   ├── layouts/
│   │   ├── Base.astro           # HTML shell, nav, footer, meta tags
│   │   └── WorkSample.astro     # Layout for standalone writing sample pages
│   ├── components/
│   │   ├── Nav.astro            # Sticky top nav with Resume button
│   │   ├── Footer.astro         # Footer with contact links
│   │   ├── ProjectCard.astro    # Work card with tags, metric, description
│   │   └── StatBar.astro        # Impact stats (250+, 6, 5, 4 stats)
│   ├── content/
│   │   ├── config.ts            # Content Collection schema (work collection)
│   │   └── work/
│   │       ├── mattermost.md
│   │       ├── meeting-recording-tool.md
│   │       ├── mobile-app.md
│   │       ├── url-shortener.md
│   │       └── published-writing.md
│   └── styles/
│       └── global.css           # Tailwind directives + CSS custom properties + .prose styles
├── public/
│   └── assets/
│       ├── Heath Reinhard Resume.pdf
│       └── img/logo.png
├── astro.config.mjs             # Astro config (base: '/portfolio', site, Tailwind integration)
├── tailwind.config.mjs          # Tailwind config (custom colors, fonts, breakpoints)
├── tsconfig.json                # TypeScript config with @components and @layouts aliases
├── package.json
└── .github/workflows/deploy.yml # GitHub Actions: build + deploy to GitHub Pages
```

## Development Workflow

### Setup

```sh
npm install
```

### Local Development

```sh
npm run dev   # Starts dev server at http://localhost:4321/portfolio/
```

### Build

```sh
npm run build    # Builds to dist/
npm run preview  # Preview built site at localhost:4321
```

The build generates a fully static site in `dist/`. The `dist/` directory is gitignored and should never be committed.

### CI / Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which:
1. Runs `npm ci`
2. Runs `npm run build`
3. Deploys `dist/` to GitHub Pages via `actions/deploy-pages`

## Content Structure

### Adding a New Project

1. Create `src/content/work/my-project.md` with required frontmatter:

```yaml
---
title: "Project Title"
description: "One-line description for cards and SEO."
tags: ["User Guide", "Enterprise"]   # 1–3 tags
metric: "250+"                        # optional key metric number
metricLabel: "meetings/day"           # optional metric label
problem: "Description of the challenge..."
approach: "How I tackled it..."
outcome: "What the result was..."
---
```

2. Add the body — the full writing sample in Markdown below the frontmatter.

3. Add a card to `src/pages/work/index.astro` (and optionally `src/pages/index.astro` for featured).

The slug is auto-derived from the filename (e.g., `my-project.md` → `/work/my-project`).

### Content Collection Schema

Defined in `src/content/config.ts`. Required fields:
- `title`, `description`, `tags`, `problem`, `approach`, `outcome`

Optional fields:
- `metric`, `metricLabel`

## Design System

### Color Palette (CSS custom properties)

| Variable | Value | Usage |
|---|---|---|
| `--color-bg` | `#FAFAF9` | Page background (warm off-white) |
| `--color-text` | `#1C1917` | Body text (warm near-black) |
| `--color-text-secondary` | `#57534E` | Secondary text, captions |
| `--color-accent` | `#0F766E` | Teal accent (links, buttons, highlights) |
| `--color-accent-light` | `#CCFBF1` | Teal-100 (badges, callouts, CTA backgrounds) |
| `--color-border` | `#E7E5E4` | Borders, dividers |

### Typography

- **Headings**: Plus Jakarta Sans (loaded from Google Fonts), weights 400/600/800
- **Body**: `system-ui, -apple-system, sans-serif`
- **Mono**: JetBrains Mono (loaded from Google Fonts), for code and kbd elements

### Key CSS Classes (`src/styles/global.css`)

- `.prose` — Styled markdown content (headings, lists, tables, code, blockquotes)
- `.section-label` — Small uppercase tracking label (e.g., "SELECTED WORK")
- `.stat-badge` — Teal impact stat pill with large number and small label
- `.project-card` — Hoverable project card with teal border on hover
- `.doc-tag` — Teal pill tag for document type labels
- `.btn-primary` — Teal filled button
- `.btn-secondary` — Outlined button

### Path Aliases (`tsconfig.json`)

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

## Base URL

Astro is configured with `base: '/portfolio'`. Always use `import.meta.env.BASE_URL` when constructing internal links in `.astro` files:

```astro
const base = import.meta.env.BASE_URL;
<a href={`${base}/work`}>Work</a>
```

## Key Constraints

- **Never hardcode `/portfolio/` paths** — use `import.meta.env.BASE_URL` so the base path stays configurable
- **`dist/` and `node_modules/` are gitignored** — never commit these
- **Assets belong in `public/`** — anything in `public/` is copied as-is to `dist/`
- **Content Collection entries must match the schema** in `src/content/config.ts` or the build will fail

## Legacy Jekyll Files

The original Jekyll theme files (`_layouts/`, `_sass/`, `_includes/`, `_config.yml`, `Gemfile`, etc.) remain in the repo for historical reference but are not used by the Astro build. They can be safely removed in a future cleanup commit.
