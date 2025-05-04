import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true, // opens report automatically in browser
      filename: "stats.html", // optional: save report file
      gzipSize: true, // shows gzipped sizes
      brotliSize: true, // shows brotli sizes
    }),
  ],
});
