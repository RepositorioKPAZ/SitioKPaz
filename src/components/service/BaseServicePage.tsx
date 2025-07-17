
import { Service } from "@/types/services";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ContactSection } from "@/components/ContactSection";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceWhyKey } from "@/components/service/ServiceWhyKey";
import { ServiceIncludes } from "@/components/service/ServiceIncludes";
import { ServiceBenefits } from "@/components/service/ServiceBenefits";
import { ServiceUseCases } from "@/components/service/ServiceUseCases";
import { ServiceTestimonial } from "@/components/service/ServiceTestimonial";
import { ServiceTechnologies } from "@/components/service/ServiceTechnologies";
import { ServiceExperts } from "@/components/service/ServiceExperts";
import { ServiceFAQs } from "@/components/service/ServiceFAQs";
import { ServiceCTA } from "@/components/service/ServiceCTA";

export interface BaseServicePageData {
  service: Service;
  heroDescription: string;
  whyKey: {
    title: string;
    description: string;
  };
  includes: string[];
  benefits: string[];
  useCases: { title: string; description: string }[];
  testimonial?: { text: string; author: string; company: string };
  technologies: string[];
  expertRoles: string[];
  faqs?: { question: string; answer: string }[];
  collaborationSection?: React.ReactNode;
  showServiceCTA?: boolean;
  showContactSection?: boolean;
  showFooter?: boolean;
}

interface BaseServicePageProps {
  data: BaseServicePageData;
}

export const BaseServicePage = ({ data }: BaseServicePageProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const {
    service,
    heroDescription,
    whyKey,
    includes,
    benefits,
    useCases,
    testimonial,
    technologies,
    expertRoles,
    faqs,
    collaborationSection,
    showServiceCTA = false,
    showContactSection = true,
    showFooter = true
  } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation scrollToSection={scrollToSection} />
      <FloatingButtons />
      
      <ServiceHero service={service} heroDescription={heroDescription} />
      <ServiceWhyKey whyKeyTitle={whyKey.title} whyKeyDescription={whyKey.description} />
      <ServiceIncludes serviceIncludes={includes} />
      <ServiceBenefits benefits={benefits} />
      <ServiceUseCases useCases={useCases} />
      <ServiceTestimonial testimonial={testimonial} />
      <ServiceTechnologies technologies={technologies} />
      <ServiceExperts expertRoles={expertRoles} />
      {collaborationSection}
      <ServiceFAQs faqs={faqs} />
      {showServiceCTA && <ServiceCTA />}
      {showContactSection && <ContactSection />}
      {showFooter && <Footer />}
    </div>
  );
};
