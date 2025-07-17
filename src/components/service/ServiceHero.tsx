
import { Service } from "@/types/services";
import { useNavigate, useLocation } from "react-router-dom";

interface ServiceHeroProps {
  service: Service;
  heroDescription: string;
}

export const ServiceHero = ({ service, heroDescription }: ServiceHeroProps) => {
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

  const handleUseCasesClick = () => {
    // Añadir un pequeño delay para asegurar que el elemento existe
    setTimeout(() => {
      const element = document.getElementById('casos-uso');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log('Elemento casos-uso no encontrado');
      }
    }, 100);
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#2e4bce] to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactClick}
              className="bg-white text-[#2e4bce] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Conversemos sobre tu proyecto
            </button>
            <button 
              onClick={handleUseCasesClick}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Ver casos de uso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
