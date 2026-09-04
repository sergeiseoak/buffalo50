import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buffalo50.co',
  output: 'static',
  integrations: [sitemap()],
});
