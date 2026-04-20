import HeroSection from "@/components/HeroSection";
import CaminoAdentroMark from "@/components/CaminoAdentroMark";
import ExperienceSection from "@/components/ExperienceSection";
import ForWhomSection from "@/components/ForWhomSection";
import AboutSection from "@/components/AboutSection";
import ModalitySection from "@/components/ModalitySection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <ExperienceSection />
    <ForWhomSection />
    <AboutSection />
    <ModalitySection />
    <ClosingSection />
    <footer className="relative overflow-hidden py-12 px-6 text-center">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[hsl(270_32%_94%/0.22)] to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-lg flex-col items-center">
        <CaminoAdentroMark variant="footer" />
        <p className="mt-6 text-xs font-sans tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} · Camino Adentro
        </p>
        <p className="mt-2 text-[11px] font-sans tracking-wide text-muted-foreground/80">
          Compassionate Inquiry
        </p>
      </div>
    </footer>
  </main>
);

export default Index;
