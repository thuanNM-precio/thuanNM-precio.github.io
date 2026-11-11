import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://thuannm-precio.github.io",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { inlineStylesheets: "always" },
});
