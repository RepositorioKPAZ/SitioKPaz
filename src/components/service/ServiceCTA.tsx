import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
export const ServiceCTA = () => {
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

  return <section className="py-16 bg-gradient-to-br from-[#2e4bce] to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para transformar tu negocio?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8">
          Conversemos sobre tu proyecto y diseñemos juntos la solución perfecta
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/56982340300" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#2e4bce] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2">
              Conversemos ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
          
          <button 
            onClick={handleContactClick}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            Agenda una reunión
          </button>
        </div>
      </div>
    </section>;
};