
import { Badge } from "@/components/ui/badge";
import { SuccessCase } from "./SuccessCase";
import { IndustryCard } from "./IndustryCard";
import { CallToActionSection } from "./CallToActionSection";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { successCases, clientsByIndustry } from "@/data/clientsData";
import { useEffect, useState } from "react";

export const ClientsSection = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-advance carousel every 4 seconds
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Go back to first slide
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(46,75,206,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            🏆 Casos de Éxito
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ellos ya confiaron en KPaz.
            <span className="block text-[#2e4bce]">Y los resultados hablan por sí solos.</span>
          </h2>
        </div>

        {/* Success Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {successCases.map((case_, index) => (
            <SuccessCase key={index} {...case_} />
          ))}
        </div>

        {/* Clients by Industry - Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Confianza de líderes en múltiples industrias
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Más de 200 empresas han transformado sus operaciones con nuestra tecnología y metodología.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {clientsByIndustry.map((industry, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <IndustryCard {...industry} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {clientsByIndustry.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#2e4bce] transition-colors duration-200"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <CallToActionSection />
      </div>
    </section>
  );
};
