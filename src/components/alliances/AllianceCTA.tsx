
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface AllianceCTAProps {
  partnerName: string;
}

export const AllianceCTA = ({ partnerName }: AllianceCTAProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Si ya estamos en la homepage, hacer scroll directo
      const element = document.getElementById('contacto');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estamos en otra página, navegar a homepage y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contacto');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          ¿Te interesa explorar soluciones con {partnerName}?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Conversemos cómo esta alianza puede generar impacto en tu organización.
        </p>
        
        <Button 
          size="lg"
          className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleContactClick}
        >
          Solicita una asesoría <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
