// Textos y estilo alineados con src/components/HeroSection.tsx — si cambia el hero, actualizá aquí también.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement as h } from "react";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

// Peso 400: mejor legibilidad en miniaturas (WhatsApp); Satori pinta mal algunos hsl() — usamos hex en estilos.
const FONT = {
  cormorant: {
    normal: path.join(
      repoRoot,
      "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff",
    ),
    italic: path.join(
      repoRoot,
      "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff",
    ),
  },
  dmSans: {
    normal: path.join(
      repoRoot,
      "node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff",
    ),
    italic: path.join(
      repoRoot,
      "node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-italic.woff",
    ),
  },
};

const HERO_JPG = path.join(repoRoot, "src/assets/hero-bg.jpg");

function loadFonts() {
  return [
    {
      name: "Cormorant Garamond",
      data: fs.readFileSync(FONT.cormorant.normal),
      weight: 400,
      style: "normal",
    },
    {
      name: "Cormorant Garamond",
      data: fs.readFileSync(FONT.cormorant.italic),
      weight: 400,
      style: "italic",
    },
    {
      name: "DM Sans",
      data: fs.readFileSync(FONT.dmSans.normal),
      weight: 400,
      style: "normal",
    },
    {
      name: "DM Sans",
      data: fs.readFileSync(FONT.dmSans.italic),
      weight: 400,
      style: "italic",
    },
  ];
}

async function heroDataUrl() {
  const buf = await sharp(HERO_JPG)
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 88 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

function heroContent(dataUrl) {
  const title = "#2a2420";
  const muted = "#5e574c";
  const lines = ["Lo que hoy te duele", "alguna vez", "te protegió."].map((text, i) =>
    h(
      "div",
      {
        key: `t${i}`,
        style: {
          fontFamily: "Cormorant Garamond",
          fontSize: 56,
          fontWeight: 400,
          color: title,
          lineHeight: 1.1,
          letterSpacing: -0.3,
          textAlign: "center",
        },
      },
      text,
    ),
  );

  const subtitle = h(
    "div",
    {
      key: "subtitle",
      style: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        fontFamily: "DM Sans",
        fontSize: 22,
        fontWeight: 400,
        color: muted,
        textAlign: "center",
        lineHeight: 1.5,
        maxWidth: 780,
        gap: 4,
      },
    },
    [
      h("span", { key: "s1" }, "Acompañamiento terapéutico online basado en "),
      h(
        "span",
        {
          key: "s2",
          style: {
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            fontSize: 24,
            fontWeight: 400,
            color: title,
          },
        },
        "Compassionate Inquiry",
      ),
      h("span", { key: "s3" }, ", el enfoque desarrollado por Gabor Maté."),
    ],
  );

  const card = h(
    "div",
    {
      key: "card",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fffcf7",
        padding: "40px 52px",
        borderRadius: 12,
        maxWidth: 940,
        gap: 18,
      },
    },
    [
      h(
        "div",
        {
          key: "title",
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          },
        },
        lines,
      ),
      h("div", {
        key: "rule",
        style: {
          display: "flex",
          width: 56,
          height: 2,
          backgroundColor: "#8a8278",
        },
      }),
      subtitle,
    ],
  );

  return h(
    "div",
    {
      style: {
        width: 1200,
        height: 630,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0ebe3",
        overflow: "hidden",
      },
    },
    [
      h("img", {
        key: "bg",
        src: dataUrl,
        alt: "",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: 1200,
          height: 630,
          objectFit: "cover",
          opacity: 0.38,
        },
      }),
      h("div", {
        key: "scrim",
        style: {
          position: "absolute",
          display: "flex",
          top: 0,
          left: 0,
          width: 1200,
          height: 630,
          backgroundColor: "rgba(35, 30, 26, 0.14)",
        },
      }),
      h(
        "div",
        {
          key: "content",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 40px",
          },
        },
        [card],
      ),
    ],
  );
}

export async function generateOgImage(outPath) {
  const dataUrl = await heroDataUrl();
  const fonts = loadFonts();
  const svg = await satori(heroContent(dataUrl), {
    width: 1200,
    height: 630,
    fonts,
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
    font: {
      loadSystemFonts: true,
      fontFiles: [
        FONT.cormorant.normal,
        FONT.cormorant.italic,
        FONT.dmSans.normal,
        FONT.dmSans.italic,
      ],
    },
  });
  const png = resvg.render().asPng();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, png);
}

const isMain = process.argv[1]?.endsWith("generate-og-image.mjs");
if (isMain) {
  const out =
    process.argv[2] || path.join(repoRoot, "dist/og-preview.png");
  generateOgImage(out).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
