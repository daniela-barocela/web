import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// GitHub Pages (proyecto en /nombre-repo/): en CI define VITE_BASE_PATH=/nombre-repo/
// (rutas absolutas desde la raíz del dominio). No uses base "./": sin "/" al final en la URL
// el navegador resuelve mal ./assets/… y el JS no carga (título sí, pantalla en blanco).
const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig(({ mode }) => ({
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
}));
