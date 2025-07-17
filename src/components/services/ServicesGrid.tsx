
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ServiceCard } from "../ServiceCard";
import { services } from "@/data/services";

export const ServicesGrid = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices ? services : services.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {displayedServices.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {services.length > 6 && (
        <div className="text-center mb-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAllServices(!showAllServices)}
            className="border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white transition-all duration-300 px-8 py-3 rounded-xl font-semibold"
          >
            {showAllServices ? (
              <>
                Ver Menos Servicios <ChevronUp className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                Ver Todos los Servicios <ChevronDown className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      )}
    </>
  );
};
