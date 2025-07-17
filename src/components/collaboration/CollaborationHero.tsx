
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface CollaborationHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

export const CollaborationHero = ({ title, subtitle, description, icon: Icon, gradient }: CollaborationHeroProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    // Primero buscar elemento contacto en la página actual
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/') {
      // Si estamos en home y no hay elemento, no hacer nada
      console.log('Elemento contacto no encontrado en página principal');
    } else {
      // Si no estamos en home y no hay elemento, ir a home
      navigate('/');
      setTimeout(() => {
        const homeElement = document.getElementById('contacto');
        homeElement?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}>
              <Icon className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            🤝 Modelo de Colaboración
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-[#2e4bce] font-semibold mb-6 max-w-4xl mx-auto">
            {subtitle}
          </p>
          
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/56951748603" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversemos
              </Button>
            </a>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Agendar reunión <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
