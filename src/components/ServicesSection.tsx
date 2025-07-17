
import { ServicesHeader } from "./services/ServicesHeader";
import { ServicesGrid } from "./services/ServicesGrid";
import { ServicesCTA } from "./services/ServicesCTA";

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(46,75,206,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ServicesHeader />
        <ServicesGrid />
        <ServicesCTA scrollToSection={scrollToSection} />
      </div>
    </section>
  );
};
