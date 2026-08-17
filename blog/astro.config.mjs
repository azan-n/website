// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
