
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToActionSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-12 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          ¿Quieres ser nuestro próximo caso de éxito?
        </h3>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Conversemos cómo la tecnología de KPaz puede potenciar tu negocio y generar resultados transformadores.
        </p>
        <Button 
          size="lg"
          className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
          onClick={scrollToContact}
        >
          👉 Hablemos <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
