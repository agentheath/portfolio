# CLAUDE.md

This file provides guidance for AI assistants working on this codebase.

## Project Overview

This is **Heath Reinhard's tech writing portfolio** — a static site built with Jekyll and hosted on GitHub Pages. The site showcases technical writing samples and serves as a professional portfolio.

- **Live site**: https://agentheath.github.io/portfolio/
- **Theme**: `jekyll-theme-minimal` (v0.2.0, locally customized)
- **Markdown processor**: kramdown with GFM input

## Repository Structure

```
portfolio/
├── _config.yml              # Jekyll site config (title, theme, markdown settings)
├── _layouts/
│   ├── default.html         # Main layout with header/footer/sidebar
│   └── post.html            # Blog post layout (date, author, tags)
├── _includes/
│   ├── head-custom.html     # Custom <head> additions (fonts, etc.)
│   └── head-custom-google-analytics.html
├── _sass/
│   ├── jekyll-theme-minimal.scss  # Theme entry point
│   ├── minimal.scss               # Core styles
│   ├── fonts.scss                 # Font imports
│   └── rouge-github.scss          # Syntax highlighting
├── assets/
│   ├── css/style.scss       # Main stylesheet (imports _sass files)
│   ├── fonts/               # Self-hosted Noto Sans font variants
│   ├── img/                 # Logo and images
│   ├── js/scale.fix.js      # Viewport fix script
│   └── *.pdf                # Resume files
├── writing/                 # Writing samples (organized by project)
│   ├── index.md
│   ├── mattermost/          # Mattermost user guide docs
│   ├── meeting_recording_tool/
│   ├── mobile_app/          # Governance framework + checklist
│   └── url_shortener/
├── index.md                 # Homepage
├── 404.md                   # 404 page
├── Gemfile                  # Ruby dependencies
├── jekyll-theme-minimal.gemspec  # Gem spec (this repo is also a theme)
├── .rubocop.yml             # RuboCop config (inherits rubocop-github)
├── script/
│   ├── bootstrap            # Install dependencies
│   ├── cibuild              # Full CI build + test
│   ├── release              # Release script
│   └── validate-html        # W3C validation for index.html and style.css
└── .github/workflows/ci.yaml  # GitHub Actions CI
```

## Development Workflow

### Setup

```sh
script/bootstrap   # gem install bundler && bundle install
```

### Local Development

```sh
bundle exec jekyll serve   # Serve at http://localhost:4000
```

### CI / Build

```sh
script/cibuild
```

This runs in sequence:
1. `bundle exec jekyll build` — builds `_site/`
2. `bundle exec htmlproofer ./_site --check-html --check-sri` — validates links and HTML
3. `bundle exec rubocop -D --config .rubocop.yml` — lints Ruby files
4. `bundle exec script/validate-html` — W3C validates `_site/index.html` and `_site/assets/css/style.css`
5. `gem build jekyll-theme-minimal.gemspec` — verifies gem builds cleanly

CI runs on every push and PR via GitHub Actions (`.github/workflows/ci.yaml`) using Ruby 2.7.

## Content Conventions

### Front Matter

All content pages use YAML front matter. Minimum required:

```yaml
---
layout: default
---
```

Optional fields:
- `title` — sets page `<title>` and SEO tags
- `date`, `author`, `tags` — used by the `post` layout

### Content Files

- All content is written in **Markdown** (`.md`)
- kramdown with GFM input is used — GitHub Flavored Markdown syntax is supported
- `hard_wrap: false` — newlines within a paragraph do NOT create `<br>` tags
- TOC generation uses heading levels 2–3 (`toc_levels: 2..3`)

### Navigation / Linking

- Use relative links between pages: `[text](./relative/path)`
- "Back" links use `[back](../)` pattern (not `{{ site.url }}` — see commented-out alternatives in files)
- External links use `<a href="..." target="_blank">` HTML for new-tab behavior

### Writing Sample Organization

Writing samples live under `writing/` organized by project. Each project has its own subdirectory with an `index.md` as the entry point. All identifying/proprietary details in samples are fictionalized.

## Ruby / Linting

- RuboCop config inherits from `rubocop-github` defaults
- `Layout/LineLength` is disabled
- `_site/` and `vendor/` are excluded from linting
- Ruby files must pass RuboCop before CI passes

## Theme Gem

This repo doubles as the `jekyll-theme-minimal` gem. The gemspec includes only files under `_includes/`, `_layouts/`, `_sass/`, `assets/`, and `LICENSE`/`README`. When editing theme files, keep in mind changes affect both the portfolio site and the gem artifact.

## Key Constraints

- **Do not add dependencies** without updating both `Gemfile` and `jekyll-theme-minimal.gemspec` as appropriate
- **Do not break htmlproofer** — all internal links must resolve, all external `<link>` tags need valid SRI hashes if `--check-sri` is active
- **W3C validation** runs against built HTML/CSS — avoid non-standard markup
- The `_site/` directory is generated and should never be committed (it is gitignored)
