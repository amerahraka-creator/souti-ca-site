# Souti AAC — Redesigned site (deploy package)

Redesign of souti.ca: new home, media gallery, support (searchable FAQ), privacy, terms, and 404 pages. Bilingual EN/AR with full RTL, WCAG AA contrast, focus rings, `aria-expanded`, and `prefers-reduced-motion` support.

## Contents

```
index.html              → replaces repo root index.html
marketing/index.html    → replaces marketing/index.html
support/index.html      → replaces support/index.html
privacy/index.html      → replaces privacy/index.html
terms/index.html        → replaces terms/index.html
404.html                → replaces 404.html
styles.css              → replaces styles.css  (full rewrite, new class names)
site.js                 → NEW shared file (i18n dictionary + FAQ/media/lang behaviors)
```

## Deploy instructions (for the repo amerahraka-creator/souti-ca-site)

1. Copy every file in this folder into the repo root, preserving folder structure. Overwrite existing files.
2. `site.js` is new — add it at the repo root (all pages load `/site.js`).
3. The old `i18n.js` is no longer referenced by these pages; it can stay (harmless) or be deleted.
4. Assets are NOT included — pages reference the repo's existing `/assets/media/*` files by absolute path. Do not move the assets folder.
5. Commit and push to `main`; GitHub Pages will redeploy.

## Notes

- Video links point to `/assets/media/<name>.mp4` exactly as named in the repo (including `A add symbpls.mp4` and `E zooming and Layout..mp4` typos). If those filenames are ever cleaned up, update the `data-href-en` / `data-href-ar` attributes in `index.html` and `marketing/index.html`.
- Language preference persists via `localStorage("preferred-lang")` — same key the old site used.
- Recommended follow-up: compress the JPGs in `assets/media/` (currently 0.8–1.5 MB each) to ≤200 KB.
