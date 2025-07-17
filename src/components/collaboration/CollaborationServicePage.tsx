
import { CollaborationServiceData } from "@/types/collaborationServices";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
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
import { ServiceSoftwareBrands } from "@/components/service/ServiceSoftwareBrands";

interface CollaborationServicePageProps {
  data: CollaborationServiceData;
  showExperts?: boolean;
}

export const CollaborationServicePage = ({ data, showExperts = true }: CollaborationServicePageProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Transform data to match existing component interfaces
  const service = {
    icon: data.hero.icon,
    title: data.hero.title,
    impact: data.hero.subtitle,
    description: data.hero.description,
    color: data.hero.gradient
  };

  const benefits = data.benefits.map(benefit => benefit.title);
  const useCases = data.useCases.map(useCase => ({
    title: useCase.title,
    description: useCase.description
  }));
  const technologies = data.technologies.map(tech => tech.name);
  const testimonial = {
    text: data.testimonial.quote,
    author: data.testimonial.author,
    company: data.testimonial.company
  };

  // Software brands data (todas las marcas del submenú + KPaces excepto Platzi)
  const softwareBrands = [
    { name: "Microsoft", color: "from-blue-600 to-blue-800", slug: "microsoft", logo: "/lovable-uploads/1b177d8d-a769-49b0-b875-3ac51815f856.png" },
    { name: "Google", color: "from-blue-500 to-blue-700", slug: "google", logo: "/lovable-uploads/5a34cf9e-d40b-4e71-ae24-aad95f18b330.png" },
    { name: "Amazon", color: "from-slate-600 to-blue-800", slug: "amazon", logo: "/lovable-uploads/072d1358-7dfd-4c2b-9031-784976a5eb0c.png" },
    { name: "UiPath", color: "from-indigo-600 to-blue-700", slug: "uipath", logo: "/lovable-uploads/00948265-d10e-4da2-b99d-021709cd2942.png" },
    { name: "Rocketbot", color: "from-sky-500 to-blue-600", slug: "rocketbot", logo: "/lovable-uploads/6ed03b69-bebf-467d-87e6-43291b26cdd3.png" },
    { name: "Kore.AI", color: "from-blue-700 to-indigo-800", slug: "kore-ai", logo: "/lovable-uploads/d3d675ba-accf-4280-a463-c54b44d94cdb.png" },
    { name: "OutSystems", color: "from-cyan-600 to-blue-700", slug: "outsystems", logo: "/lovable-uploads/dd69f607-b6a5-4964-9f74-f466ad2a3521.png" },
    { name: "Genexus", color: "from-blue-800 to-slate-800", slug: "genexus", logo: "/lovable-uploads/8a2c3d86-4608-40da-bd4d-c5d989ab1d7c.png" },
    { name: "Salesforce", color: "from-sky-600 to-blue-700", slug: "salesforce", logo: "/lovable-uploads/1387d343-ba06-404f-ab81-117907606d7e.png" }
  ];

  // Only show software brands section for Software Licensing Service
  const showSoftwareBrands = data.hero.title === "Software Licensing Service";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation scrollToSection={scrollToSection} />
      <FloatingButtons />
      
      <ServiceHero service={service} heroDescription={data.hero.description} />
      <ServiceWhyKey whyKeyTitle={data.whatIs.title} whyKeyDescription={data.whatIs.description} />
      <ServiceIncludes serviceIncludes={data.includes} />
      <ServiceBenefits benefits={benefits} />
      {showSoftwareBrands && <ServiceSoftwareBrands brands={softwareBrands} />}
      <ServiceUseCases useCases={useCases} />
      <ServiceTestimonial testimonial={testimonial} />
      <ServiceTechnologies technologies={technologies} />
      {showExperts && <ServiceExperts expertRoles={data.experts} />}
      <ServiceFAQs faqs={data.faqs} />
      <ServiceCTA />
      <Footer />
    </div>
  );
};
