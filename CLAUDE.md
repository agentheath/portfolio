# Portfolio Site — Claude Notes

## Stack

Jekyll site with GitHub Pages deployment. CI runs via `.github/workflows/ci.yaml`.

## CI Pipeline

The `script/cibuild` script runs four steps in sequence:

1. `bundle exec jekyll build`
2. `bundle exec htmlproofer ./_site` — link and HTML validation
3. `bundle exec rubocop` — Ruby style linting
4. `bundle exec script/validate-html` — W3C HTML/CSS validation

### Known CI gotchas

**htmlproofer flags (v3.x):**
- Use `--assume-extension` so bare relative links like `(mac_client)` resolve to `mac_client.html`
- Use `--http-status-ignore` (not `--ignore-status-codes`) to suppress specific HTTP codes
- Use `--url-ignore` to skip specific URLs that block bots (LinkedIn returns 404/999 randomly; slant.co returns 403)

**Rubocop:**
- This repo enforces double-quoted strings (`Style/StringLiterals`)
- Avoid redundant `.to_s` in `puts` calls (`Lint/RedundantStringCoercion`)

**Ruby version:**
- Requires Ruby >= 3.2 (bundler dropped Ruby 2.7 support). CI uses Ruby 3.3.
