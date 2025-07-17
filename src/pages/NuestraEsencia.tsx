
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { NuestraEsenciaHeroSection } from "@/components/nuestra-esencia/HeroSection";
import { RazonDeSerSection } from "@/components/nuestra-esencia/RazonDeSerSection";
import { CulturaSection } from "@/components/nuestra-esencia/CulturaSection";
import { NombreSection } from "@/components/nuestra-esencia/NombreSection";
import { PresenciaSection } from "@/components/nuestra-esencia/PresenciaSection";
import { ValoresSection } from "@/components/nuestra-esencia/ValoresSection";
import { TestimoniosSection } from "@/components/nuestra-esencia/TestimoniosSection";
import { CTASection } from "@/components/nuestra-esencia/CTASection";

export default function NuestraEsencia() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToSection={scrollToSection} />
      <FloatingButtons />
      
      <NuestraEsenciaHeroSection />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <RazonDeSerSection />
        <CulturaSection />
        <NombreSection />
        <PresenciaSection />
        <ValoresSection />
        <TestimoniosSection />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
