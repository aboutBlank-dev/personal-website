import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    nodePolyfills(),
    svgr({ include: "**/*.svg?react" }),
  ],
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: {
      "@": "/src/assets",
    },
  },
});
