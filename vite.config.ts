import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { pathToFileURL } from "node:url";
import { componentTagger } from "lovable-tagger";

/** Genera dist/og-preview.png (hero + textos) para Open Graph / WhatsApp. */
function emitOgImage(): Plugin {
  return {
    name: "emit-og-image",
    async closeBundle() {
      const mod = await import(
        pathToFileURL(path.resolve(__dirname, "scripts/generate-og-image.mjs"))
          .href
      );
      await mod.generateOgImage(path.resolve(__dirname, "dist/og-preview.png"));
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
      const cacheBust =
        process.env.VITE_OG_CACHE_BUST?.slice(0, 7) ||
        env.VITE_OG_CACHE_BUST?.slice(0, 7) ||
        "";
      const imageUrl = cacheBust
        ? `${root}${pathPrefix}/og-preview.png?v=${cacheBust}`
        : `${root}${pathPrefix}/og-preview.png`;
      const block = `
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:secure_url" content="${imageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
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
