import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // Scan every route up front, so Vite doesn't discover new dependencies on
  // the first navigation and reload the page mid-routing (which briefly showed
  // the error page on a fresh start).
  optimizeDeps: {
    entries: ["./app/**/*.tsx"],
  },
});
