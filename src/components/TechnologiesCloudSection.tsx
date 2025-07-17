
import { useState, useEffect } from "react";
import { technologiesRow1, technologiesRow2 } from "@/data/technologiesData";
import { TechnologyRow } from "@/components/TechnologyRow";
import { TechnologiesAnimations } from "@/components/TechnologiesAnimations";
import { TechnologiesHeader } from "@/components/TechnologiesHeader";
import { TechnologiesFooter } from "@/components/TechnologiesFooter";

export const TechnologiesCloudSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <TechnologiesAnimations />
      
      <section className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(46,75,206,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(46,75,206,0.02),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <TechnologiesHeader />

          {/* Technologies Carousel */}
          <div className="relative min-h-[200px] flex flex-col justify-center">
            <TechnologyRow technologies={technologiesRow1} direction="left" />
            <TechnologyRow technologies={technologiesRow2} direction="right" />
          </div>

          <TechnologiesFooter />
        </div>
      </section>
    </>
  );
};
