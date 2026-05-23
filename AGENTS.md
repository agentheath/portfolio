# Repository Instructions

This is a Jekyll portfolio site deployed to GitHub Pages at:

```text
https://agentheath.github.io/portfolio/
```

## GitHub Pages Constraints

- The site uses the default GitHub Pages build, so assume Jekyll safe mode.
- Keep `url: "https://agentheath.github.io"` and `baseurl: "/portfolio"` in `_config.yml`.
- Respect the base URL for internal links. Use `relative_url` or `post.url | relative_url` in Liquid templates.
- Do not add unsupported plugins such as `jekyll-archives`.
- Do not add pagination or RSS unless explicitly requested. That means no `jekyll-paginate`, no `jekyll-feed`, and no pagination config.

## Blog Scaffolding

- Blog index: `blog/index.html`.
- Tags index: `tags/index.html`.
- Tag support is plugin-free. Posts declare `tags` in front matter, and `/tags/` groups posts with core Liquid via `site.tags`.
- There are no standalone generated tag archive pages in the default build.
- Keep real unpublished writing in `_drafts/` until it is ready.
- Use `published: false` for example posts or staged `_posts/` files that should not deploy.
- Do not add README files inside `_posts/`; Jekyll expects dated post filenames there.
- Author-facing publishing instructions live in `BLOGGING.md`.

## Local Environment

- Ruby is pinned by `.ruby-version`.
- Current project Ruby: `3.3.11`.
- Prefer `rbenv` for local Ruby version management on this machine.
- Use `bundle install` after changing Ruby versions or dependencies.
- Correct Git author email for this repo: `heath.reinhard@gmail.com`.

## Verification

Run a production build before declaring the site ready:

```sh
bundle exec jekyll build
```

To preview scaffolding examples locally:

```sh
bundle exec jekyll serve --drafts --unpublished
```

CI also runs `script/cibuild`, which performs:

1. `bundle exec jekyll build`
2. `bundle exec htmlproofer ./_site`
3. `bundle exec rubocop`
4. `bundle exec script/validate-html`

## CI Notes

- `htmlproofer` is v3.x. Use `--assume-extension` for bare relative links.
- Use `--http-status-ignore`, not `--ignore-status-codes`, for ignored HTTP status codes.
- Use `--url-ignore` for URLs that block bots.
- Rubocop enforces double-quoted strings for Ruby files.
- CI uses Ruby 3.3.

## Agent Instruction Files

- `AGENTS.md` is the source of truth for repo instructions.
- `CLAUDE.md` intentionally points to `AGENTS.md` instead of duplicating the same guidance.
