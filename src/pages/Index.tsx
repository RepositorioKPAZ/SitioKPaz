
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CollaborationModelsSection } from "@/components/CollaborationModelsSection";
import { TechnologiesCloudSection } from "@/components/TechnologiesCloudSection";
import { ClientsSection } from "@/components/ClientsSection";
import { AlliancesSection } from "@/components/AlliancesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SavingsCalculatorSection } from "@/components/SavingsCalculatorSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle navigation from other pages with scroll target
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        scrollToSection(state.scrollTo);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection scrollToSection={scrollToSection} />
      <CollaborationModelsSection scrollToSection={scrollToSection} />
      <TechnologiesCloudSection />
      <ClientsSection />
      <AlliancesSection />
      <BenefitsSection />
      <SavingsCalculatorSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
