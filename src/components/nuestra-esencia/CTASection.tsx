
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('contacto');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contacto');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleJoinUsClick = () => {
    navigate('/careers');
  };

  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Quieres trabajar con una empresa que combina tecnología y sentido?
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Conversemos y exploremos juntos cómo generar impacto real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
            onClick={handleContactClick}
          >
            Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold"
            onClick={handleJoinUsClick}
          >
            Únete a KPaz
          </Button>
        </div>
      </div>
    </section>
  );
};
