// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://gabrii3lmao.github.io",
  base: "/Clone-liara",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
