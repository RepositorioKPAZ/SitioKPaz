
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CareersCTA = () => {
  const navigate = useNavigate();

  const handleNuestraEsenciaClick = () => {
    navigate('/nuestra-esencia');
  };

  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿No encuentras la posición perfecta?
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Envíanos tu CV y nos pondremos en contacto contigo cuando tengamos una oportunidad que se ajuste a tu perfil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Enviar CV Espontáneo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-8 py-4 rounded-xl"
            onClick={handleNuestraEsenciaClick}
          >
            Conocer Más sobre KPaz
          </Button>
        </div>
      </div>
    </div>
  );
};
