import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="relative z-10 max-w-2xl mx-auto px-6 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-8">
        Lo que duele no desaparece
        <br />
        <span className="italic font-light">cuando dejamos de mirarlo.</span>
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
