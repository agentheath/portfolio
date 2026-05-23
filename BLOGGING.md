# Blogging

Use `_drafts/` for unpublished work. Draft filenames do not need dates, for example:

```text
_drafts/my-series-part-one.md
```

Preview drafts locally:

```sh
bundle exec jekyll serve --drafts
```

When a post is ready to publish, move it to `_posts/` and rename it with Jekyll's required date prefix:

```text
_posts/YYYY-MM-DD-title.md
```

Use this front matter:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
tags: [tag-one, tag-two]
---
```

Keep `published: false` on example or staged posts that should not appear in the production GitHub Pages build. Remove that line when a post is ready to publish.

Do not add README files inside `_posts/`; Jekyll expects post files there to use dated filenames.
