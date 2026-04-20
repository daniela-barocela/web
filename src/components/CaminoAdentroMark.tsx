import { cn } from "@/lib/utils";

const BRAND = "#9A8A7A";

type CaminoAdentroMarkProps = {
  variant?: "hero" | "footer";
  className?: string;
};

/** Espiral tipo referencia: desde el centro hacia afuera, ~2.5 vueltas horarias y cola suelta al final. */
const SPIRAL_PATH =
  "M24.94 23.66L25 23.44L25 23.19L24.95 22.93L24.85 22.67L24.67 22.42L24.44 22.19L24.15 22L23.81 21.86L23.43 21.78L23.02 21.77L22.59 21.84L22.16 21.99L21.74 22.23L21.36 22.55L21.02 22.96L20.75 23.43L20.56 23.97L20.45 24.55L20.45 25.16L20.56 25.79L20.79 26.41L21.12 27.01L21.57 27.56L22.12 28.03L22.77 28.43L23.49 28.71L24.27 28.87L25.09 28.9L25.93 28.79L26.76 28.54L27.56 28.14L28.29 27.6L28.95 26.92L29.49 26.13L29.9 25.24L30.17 24.26L30.27 23.24L30.2 22.19L29.95 21.14L29.53 20.12L28.92 19.17L28.16 18.32L27.24 17.59L26.2 17.01L25.05 16.61L23.83 16.39L22.56 16.38L21.29 16.58L20.05 16.99L18.87 17.62L17.79 18.44L16.85 19.45L16.07 20.62L15.49 21.93L15.12 23.33L14.99 24.8L15.1 26.29L15.46 27.77L16.06 29.19L16.91 30.51L17.98 31.69L19.24 32.7L20.67 33.49L22.24 34.05L23.9 34.34L25.61 34.36L27.32 34.1L28.98 33.55L30.56 32.73L32 31.64L33.26 30.32L34.29 28.79L35.07 27.09L35.57 25.26L35.76 23.35L35.64 21.41L35.2 19.49L34.43 17.65L33.37 15.95L32.03 14.42L30.43 13.11L28.62 12.08L26.65 11.34L24.56 10.94L22.41 10.88L20.25 11.17L18.15 11.83L16.16 12.83L14.34 14.15L12.75 15.77L11.43 17.65L10.43 19.74L9.77 21.98L9.49 24.33L9.6 26.72L10.1 29.07L8.97 27.96";

function SpiralGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={SPIRAL_PATH}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CaminoAdentroMark = ({ variant = "hero", className }: CaminoAdentroMarkProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "pointer-events-none flex select-none items-center gap-0 md:gap-px",
        isHero ? "justify-start" : "justify-center",
        isHero
          ? "opacity-[0.42] md:opacity-[0.48]"
          : "opacity-[0.88] md:opacity-90",
        className
      )}
      style={{ color: BRAND }}
      aria-hidden
    >
      <SpiralGlyph
        className={cn(
          isHero ? "h-9 w-9 md:h-10 md:w-10" : "h-7 w-7 md:h-8 md:w-8"
        )}
      />
      <span
        className={cn(
          "font-serif font-light tracking-[0.12em] text-inherit -ml-0.5 md:-ml-px",
          isHero
            ? "text-lg md:text-xl lg:text-2xl"
            : "text-base md:text-lg"
        )}
      >
        Camino Adentro
      </span>
    </div>
  );
};

export default CaminoAdentroMark;
