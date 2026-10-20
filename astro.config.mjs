import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://carsonloy.com",
  base: "/",
  output: "static",
  trailingSlash: "always",
  markdown: {
    processor: unified(),
  },
});
