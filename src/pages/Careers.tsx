
import { Navigation } from "@/components/Navigation";
import { CareersHeader } from "@/components/careers/CareersHeader";
import { BenefitsGrid } from "@/components/careers/BenefitsGrid";
import { JobOpeningsList } from "@/components/careers/JobOpeningsList";
import { CareersCTA } from "@/components/careers/CareersCTA";
import { Footer } from "@/components/Footer";

const Careers = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation scrollToSection={scrollToSection} />
      
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(46,75,206,0.03),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <CareersHeader />
            <BenefitsGrid />
            <JobOpeningsList />
            <CareersCTA />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
