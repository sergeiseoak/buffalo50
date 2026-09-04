# Buffalo 50 — buffalo50.co

Static site (Astro) on Cloudflare Pages. Warm, vintage "field guide" design —
intentionally distinct from any other project in this account (no dark/neon
theme, no angular shapes, different fonts and components).

## Site structure

**Content pages** (cross-linked with each other, shown in the main nav):

- `index.md` → `/`
- `free-play.md` → `/free-play/`
- `how-to-play.md` → `/how-to-play/`

**Legal/utility pages** (footer-only, intentionally excluded from all
cross-linking and from the main navigation, per requirement):

- `responsible-gaming.md` → `/responsible-gaming/`
- `privacy-policy.md` → `/privacy-policy/`
- `terms.md` → `/terms/`

## Editing content

Edit the Markdown body in `src/content/pages/*.md` for article text, and the
frontmatter for SEO fields (`metaTitle`, `metaDescription`, `h1`) and the
"Field Notes" fact card (`specs: [{ label, value }]`).

FAQ: add a `faqItems: [{ q, a }]` list to any page's frontmatter and an
accordion + `FAQPage` structured data appear automatically.

No `.astro` file needs to be touched to change text.

## Adding a new content page

1. Create `src/content/pages/new-page.md` (copy an existing content page's
   frontmatter as a template).
2. Create `src/pages/new-page/index.astro` (copy `free-play/index.astro`).
3. Add it to `navItems` in `src/layouts/BaseLayout.astro` if it should appear
   in the main nav and participate in `RelatedLinks` cross-links.

Legal pages should **not** be added to `navItems` or to any `RelatedLinks`
list — link them only from the footer (already wired up).

## Referral link

`src/lib/referral.ts` exports `REF_URL = '/info/'`, which every `<CTAButton />`
and the floating CTA use. The real destination is set in `public/_redirects`:

```
/info/ https://refpa94475.com/L?tag=d_6051184m_67279c_&site=6051184&ad=67279&r=en/registration 301
```

Change only that file to update the destination — no rebuild required.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment — GitHub + Cloudflare Pages

1. `git add . && git commit -m "..." && git push`
2. Cloudflare Pages: Build command `npm run build`, output directory `dist`
3. Google Search Console verification is already wired up in `BaseLayout.astro`
