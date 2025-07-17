
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface ServiceSoftwareBrandsProps {
  brands: Array<{
    name: string;
    color: string;
    slug: string;
    logo?: string;
  }>;
}

export const ServiceSoftwareBrands = ({ brands }: ServiceSoftwareBrandsProps) => {
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
    <section id="marcas-software" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Marcas de Software que Comercializamos
        </h2>
        
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Como partners oficiales, te ofrecemos acceso directo a las mejores tecnologías del mercado con precios preferenciales y soporte especializado.
        </p>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl">
            {brands.map((brand, index) => (
              <Link 
                key={brand.name} 
                to={`/alianzas/${brand.slug}`}
                className="block"
              >
                <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-100">
                      {brand.logo ? (
                        <OptimizedImage 
                          src={brand.logo} 
                          alt={`${brand.name} logo`}
                          className="w-12 h-12"
                          objectFit="contain"
                          width={48}
                          height={48}
                          sizes="48px"
                        />
                      ) : (
                        <span className="text-gray-600 font-bold text-lg">
                          {brand.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#2e4bce] transition-colors duration-300">
                      {brand.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿No tienes claridad sobre qué licencias necesitas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestros consultores especializados te ayudan a identificar y elegir las tecnologías que generen mayor impacto en tu negocio y operación.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-[#2e4bce] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1e3a9e] transition-colors shadow-lg"
            >
              Agenda tu consultoría gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

