# Buffalo50.co — Cloudflare Pages static site

Ready-to-deploy static website. No build step is required.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository and upload **the contents of this folder** (not the ZIP itself).
2. In Cloudflare: Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Framework preset: **None**.
5. Build command: leave empty.
6. Build output directory: `/` (repository root).
7. Deploy.
8. Attach the custom domain `buffalo50.co`.
9. In Google Search Console add/verify the property. The verification meta tag is already present on every page.

## Affiliate redirect
All CTA buttons link to `/go/`. Cloudflare Pages `_redirects` sends `/go/` via HTTP 301 to the affiliate URL:

`https://refpa94475.com/L?tag=d_6051184m_67279c_&site=6051184&ad=67279&r=en/registration`

To change the affiliate URL later, edit `_redirects` only.

## Content
Main pages: `/`, `/how-to-play/`, `/free-play/`. Technical/footer pages: `/terms/`, `/privacy-policy/`, `/responsible-gaming/`.

## SEO
Includes canonical tags, meta descriptions, OG/Twitter metadata, Google Search Console verification, robots.txt, sitemap.xml, structured data, semantic headings and internal navigation.
