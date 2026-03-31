import fs from "node:fs";
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** Copia el hero a dist/og-image.jpg en cada build (debe existir en el repo; WhatsApp pide URL absoluta al archivo). */
function emitOgImage(): Plugin {
  const src = path.resolve(__dirname, "src/assets/hero-bg.jpg");
  const dest = path.resolve(__dirname, "dist/og-image.jpg");
  return {
    name: "emit-og-image",
    closeBundle() {
      fs.copyFileSync(src, dest);
    },
  };
}

/** URLs absolutas para og:image / og:url (WhatsApp, Facebook, etc.). Sin esto no hay preview con imagen. */
function injectOgMeta(opts: { base: string; siteUrl: string }): Plugin {
  const { base, siteUrl } = opts;
  return {
    name: "inject-og-meta",
    transformIndexHtml(html) {
      if (!siteUrl) return html;
      const pathPrefix = base === "/" ? "" : base.replace(/\/$/, "");
      const root = siteUrl.replace(/\/$/, "");
      const canonical = `${root}${pathPrefix}/`;
      const imageUrl = `${root}${pathPrefix}/og-image.jpg`;
      const block = `
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:secure_url" content="${imageUrl}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image:alt" content="Compassionate Inquiry · Acompañamiento terapéutico" />
    <meta name="twitter:image" content="${imageUrl}" />`;
      return html.replace("</head>", `${block}\n  </head>`);
    },
  };
}

// https://vitejs.dev/config/
// GitHub Pages proyecto: base = /nombre-repo/ (p. ej. /web/). Ver .env.production y workflow CI.
// Prioridad: variable de entorno (GitHub Actions) > .env.[mode] > "/".
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base =
    process.env.VITE_BASE_PATH || env.VITE_BASE_PATH || "/";
  const siteUrl = (
    process.env.VITE_SITE_URL ||
    env.VITE_SITE_URL ||
    ""
  ).trim();

  return {
    base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    emitOgImage(),
    injectOgMeta({ base, siteUrl }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
});
