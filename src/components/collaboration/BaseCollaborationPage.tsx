import { Navigation } from "@/components/Navigation";
import { FloatingButtons } from "@/components/FloatingButtons";
import { CollaborationHero } from "@/components/collaboration/CollaborationHero";
import { WhatIsThisModel } from "@/components/collaboration/WhatIsThisModel";
import { WhenToUseIt } from "@/components/collaboration/WhenToUseIt";
import { ModelBenefits } from "@/components/collaboration/ModelBenefits";
import { ModelComparison } from "@/components/collaboration/ModelComparison";
import { RealExamples } from "@/components/collaboration/RealExamples";
import { WhyKPaz } from "@/components/collaboration/WhyKPaz";
import { CollaborationCTA } from "@/components/collaboration/CollaborationCTA";
import { ServiceFAQs } from "@/components/service/ServiceFAQs";
import { Footer } from "@/components/Footer";
import { CollaborationModelData } from "@/types/collaborationModel";
import { collaborationComparisons } from "@/data/collaborationModels";

interface BaseCollaborationPageProps {
  data: CollaborationModelData;
}

export const BaseCollaborationPage = ({ data }: BaseCollaborationPageProps) => {
  const scrollToSection = () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation scrollToSection={scrollToSection} />
      <FloatingButtons />
      
      <CollaborationHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        icon={data.icon}
        gradient={data.gradient}
      />
      
      <WhatIsThisModel
        title={data.title}
        description={data.description}
        image={data.image}
        icon={data.icon}
        gradient={data.gradient}
      />
      
      <WhenToUseIt useCases={data.useCases} />
      
      <ModelBenefits benefits={data.benefits} />
      
      <ModelComparison 
        currentModel={data.title}
        comparisons={collaborationComparisons}
      />
      
      <RealExamples examples={data.examples} />
      
      <WhyKPaz
        title={data.whyKPaz.title}
        description={data.whyKPaz.description}
        highlights={data.whyKPaz.highlights}
      />
      
      <ServiceFAQs faqs={data.faqs} />
      
      <CollaborationCTA
        title={data.cta.title}
        description={data.cta.description}
      />
      
      <Footer />
    </div>
  );
};