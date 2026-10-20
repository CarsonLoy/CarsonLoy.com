import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://carsonloy.github.io",
  base: "/CarsonLoy.com",
  output: "static",
  trailingSlash: "always",
  markdown: {
    processor: unified(),
  },
});
