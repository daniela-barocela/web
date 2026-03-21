import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// GitHub Pages proyecto: base = /nombre-repo/ (p. ej. /web/). Ver .env.production y workflow CI.
// Prioridad: variable de entorno (GitHub Actions) > .env.[mode] > "/".
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base =
    process.env.VITE_BASE_PATH || env.VITE_BASE_PATH || "/";

  return {
    base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
});
