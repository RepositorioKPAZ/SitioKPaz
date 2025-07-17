
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface CollaborationCTAProps {
  title: string;
  description: string;
}

export const CollaborationCTA = ({ title, description }: CollaborationCTAProps) => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              onClick={handleContactClick}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar una reunión
            </Button>
            <a href="https://wa.me/56951748603" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                size="lg"
                className="border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversemos sin compromiso
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
