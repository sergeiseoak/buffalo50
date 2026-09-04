# Buffalo50.co — v2 realistic game-inspired static site

This version is intentionally built as plain static HTML/CSS/JS for a Desktop folder -> GitHub -> Cloudflare Pages workflow.

## Structure
- `index.html` — homepage
- `how-to-play/`
- `free-play/`
- `terms/`
- `privacy-policy/`
- `responsible-gaming/`
- `assets/` — CSS, JS and visual assets
- `_redirects` — `/go/` 301 redirect to the supplied affiliate URL
- `_headers` — basic security/cache headers
- `robots.txt` and `sitemap.xml`

## Deploy
1. Replace your existing local Buffalo50 folder with this folder.
2. Commit and push the files to the existing GitHub repository.
3. Cloudflare will deploy the updated static files.
4. Purge cache only if an old asset remains visible after deployment.

No Astro, npm build or package manager is required.

## Important
The game screenshots used in the visual design are the supplied Buffalo 50 screenshots. The site is informational and independent from the game developer.
