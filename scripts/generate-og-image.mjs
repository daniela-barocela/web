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

const FONT = {
  cormorant: {
    normal: path.join(
      repoRoot,
      "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff",
    ),
    italic: path.join(
      repoRoot,
      "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-italic.woff",
    ),
  },
  dmSans: {
    normal: path.join(
      repoRoot,
      "node_modules/@fontsource/dm-sans/files/dm-sans-latin-300-normal.woff",
    ),
    italic: path.join(
      repoRoot,
      "node_modules/@fontsource/dm-sans/files/dm-sans-latin-300-italic.woff",
    ),
  },
};

const HERO_JPG = path.join(repoRoot, "src/assets/hero-bg.jpg");

function loadFonts() {
  return [
    {
      name: "Cormorant Garamond",
      data: fs.readFileSync(FONT.cormorant.normal),
      weight: 300,
      style: "normal",
    },
    {
      name: "Cormorant Garamond",
      data: fs.readFileSync(FONT.cormorant.italic),
      weight: 300,
      style: "italic",
    },
    {
      name: "DM Sans",
      data: fs.readFileSync(FONT.dmSans.normal),
      weight: 300,
      style: "normal",
    },
    {
      name: "DM Sans",
      data: fs.readFileSync(FONT.dmSans.italic),
      weight: 300,
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
  const title = "hsl(30, 10%, 22%)";
  const muted = "hsl(30, 8%, 50%)";
  const lines = ["Lo que hoy te duele", "alguna vez", "te protegió."].map((text, i) =>
    h(
      "div",
      {
        key: `t${i}`,
        style: {
          fontFamily: "Cormorant Garamond",
          fontSize: 52,
          fontWeight: 300,
          color: title,
          lineHeight: 1.12,
          letterSpacing: -0.5,
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
        fontSize: 21,
        fontWeight: 300,
        color: muted,
        textAlign: "center",
        lineHeight: 1.55,
        maxWidth: 820,
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
            fontSize: 23,
          },
        },
        "Compassionate Inquiry",
      ),
      h("span", { key: "s3" }, ", el enfoque desarrollado por Gabor Maté."),
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
        backgroundColor: "#f7f4ee",
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
          opacity: 0.32,
        },
      }),
      h("div", {
        key: "grad1",
        style: {
          position: "absolute",
          display: "flex",
          top: 0,
          left: 0,
          right: 0,
          height: 240,
          background:
            "linear-gradient(to bottom, hsla(270, 42%, 92%, 0.35), hsla(275, 35%, 95%, 0.08), transparent)",
        },
      }),
      h("div", {
        key: "grad2",
        style: {
          position: "absolute",
          display: "flex",
          top: 0,
          left: 0,
          width: 1200,
          height: 630,
          background:
            "radial-gradient(ellipse 95% 65% at 50% -5%, hsla(268, 38%, 88%, 0.18), transparent 58%)",
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
            padding: "40px 56px",
            gap: 20,
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
                gap: 4,
              },
            },
            lines,
          ),
          h("div", {
            key: "rule",
            style: {
              display: "flex",
              width: 48,
              height: 1,
              backgroundColor: "hsla(30, 10%, 22%, 0.28)",
            },
          }),
          subtitle,
        ],
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
  });
  const png = resvg.render().asPng();
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, png);
}

const isMain = process.argv[1]?.endsWith("generate-og-image.mjs");
if (isMain) {
  const out =
    process.argv[2] || path.join(repoRoot, "dist/og-image.png");
  generateOgImage(out).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
