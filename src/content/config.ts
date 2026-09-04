import { defineCollection, z } from 'astro:content';

// Each file in src/content/pages/ is one full page.
// The filename's slug maps directly to the URL path (index.md -> "/").
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.string().default('en'),
    provider: z.string().optional(),
    game: z.string().optional(),
    primaryKeyword: z.string().optional(),
    secondaryKeywords: z.string().optional(),
    searchIntent: z.string().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    publishDate: z.date().default(() => new Date()),
    // When true, this page is a utility/legal page: no sidebar spec card,
    // no related-articles cross-linking, footer-only.
    legal: z.boolean().default(false),
    faqItems: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  }),
});

export const collections = { pages };
