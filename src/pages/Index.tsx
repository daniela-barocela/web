import HeroSection from "@/components/HeroSection";
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
    <footer className="py-8 px-6 text-center text-xs text-muted-foreground font-sans tracking-wide">
      © {new Date().getFullYear()} · Compassionate Inquiry
    </footer>
  </main>
);

export default Index;
