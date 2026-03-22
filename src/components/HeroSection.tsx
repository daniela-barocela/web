import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    {/* Toques sutiles de lila en la parte superior */}
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[38%] min-h-[100px] max-h-[280px] bg-gradient-to-b from-[hsl(270_42%_92%/0.28)] via-[hsl(275_35%_95%/0.08)] to-transparent"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[55%] bg-[radial-gradient(ellipse_95%_65%_at_50%_-5%,hsl(268_38%_88%/0.14),transparent_58%)]"
      aria-hidden
    />
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-8">
        Lo que hoy te duele
        <br />
        alguna vez
        <br />
        te protegió.
      </h1>
      <div className="w-12 h-px bg-foreground/30 mx-auto mb-8" />
      <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-muted-foreground max-w-lg mx-auto">
        Acompañamiento terapéutico online basado en{" "}
        <em className="font-serif">Compassionate Inquiry</em>, el enfoque
        desarrollado por Gabor Maté.
      </p>
    </div>
  </section>
);

export default HeroSection;
