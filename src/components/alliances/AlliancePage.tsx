
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AllianceHero } from "./AllianceHero";
import { AllianceDescription } from "./AllianceDescription";
import { AllianceProblems } from "./AllianceProblems";
import { AllianceUseCases } from "./AllianceUseCases";
import { AllianceExpertise } from "./AllianceExpertise";
import { AllianceResources } from "./AllianceResources";
import { AllianceCTA } from "./AllianceCTA";

interface AlliancePageProps {
  partner: {
    name: string;
    color: string;
    logo: string;
    heroTitle: string;
    heroSubtitle: string;
    description: string;
    problems: string[];
    useCases: string[];
    expertise: {
      years: string;
      projects: string;
      team: string;
      certifications: string;
    };
    resources?: {
      caseStudies?: string[];
      articles?: string[];
      testimonial?: {
        text: string;
        author: string;
        position: string;
      };
    };
  };
}

export const AlliancePage = ({ partner }: AlliancePageProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToSection={scrollToSection} />
      
      <AllianceHero partner={partner} />
      <AllianceDescription description={partner.description} />
      <AllianceProblems problems={partner.problems} />
      <AllianceUseCases partnerName={partner.name} useCases={partner.useCases} />
      <AllianceExpertise partnerName={partner.name} expertise={partner.expertise} />
      <AllianceResources resources={partner.resources} />
      <AllianceCTA partnerName={partner.name} />

      <Footer />
    </div>
  );
};
