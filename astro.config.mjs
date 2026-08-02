import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portfolio.infratest.click",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  compressHTML: true,
});
