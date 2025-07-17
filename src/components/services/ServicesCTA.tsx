
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServicesCTAProps {
  scrollToSection: (sectionId: string) => void;
}

export const ServicesCTA = ({ scrollToSection }: ServicesCTAProps) => {
  return (
    <div className="text-center mb-20">
      <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Listo para Acelerar su Transformación Digital?
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Nuestro equipo de especialistas está preparado para diseñar la solución perfecta para sus objetivos empresariales.
        </p>
        <Button 
          size="lg"
          className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
          onClick={() => scrollToSection('contacto')}
        >
          Diseñemos tu Solución <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
