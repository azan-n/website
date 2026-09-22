import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/site.config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [icon(), sitemap()],
  redirects: {
    "/playlists": "https://www.youtube.com/@azan-n0",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
