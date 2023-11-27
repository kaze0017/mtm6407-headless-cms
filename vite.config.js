import { fileURLToPath } from "url";

import { defineConfig } from "vite";
// import mkcert from "vite-plugin-mkcert";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(), mkcert()],
  plugins: [vue()],
  server: { https: true },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
