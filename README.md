# Souti GitHub Pages Site

This folder is ready to deploy to GitHub Pages with custom domain `souti.ca`.

## App Store URLs
- Support URL: `https://souti.ca/support/`
- Marketing URL: `https://souti.ca/marketing/`
- Privacy Policy URL: `https://souti.ca/privacy/`

## Structure
- `index.html` main marketing website
- `marketing/index.html` commercial material landing page
- `support/index.html` support page
- `privacy/index.html` privacy policy
- `terms/index.html` terms of use
- `assets/media/*` commercial images/videos (including iPad creatives and `Souti.mov`)
- `CNAME` custom domain for GitHub Pages

## Deploy steps
1. Create a new GitHub repo (for example: `souti-site`).
2. Copy all files in this folder into that repo.
3. Push to `main`.
4. In GitHub repo settings, enable Pages from branch `main` (root).
5. In your DNS provider, point `souti.ca` to GitHub Pages:
   - `A` records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` for `www` to `<your-github-username>.github.io`
6. Wait for DNS propagation and verify `https://souti.ca`.

## Notes
- Replace placeholder links like App Store URL with your live app link.
- If you add new files, append filenames to `mediaAssets` in `marketing/index.html`.
