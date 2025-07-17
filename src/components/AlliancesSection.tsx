import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Import optimized logos
import microsoftLogo from "@/assets/logos/microsoft-logo.webp";
import googleLogo from "@/assets/logos/google-logo.webp";
import amazonLogo from "@/assets/logos/amazon-logo.webp";
import salesforceLogo from "@/assets/logos/salesforce-logo.webp";
import uipathLogo from "@/assets/logos/uipath-logo.webp";
import rocketbotLogo from "@/assets/logos/rocketbot-logo.webp";
import outsystemsLogo from "@/assets/logos/outsystems-logo.webp";
import genexusLogo from "@/assets/logos/genexus-logo.webp";
import koreaiLogo from "@/assets/logos/koreai-logo.webp";
import platziLogo from "@/assets/logos/platzi-logo.webp";

export const AlliancesSection = () => {
  const alliances = [
    { 
      name: "Microsoft", 
      color: "from-blue-600 to-blue-800",
      logo: "/lovable-uploads/1b177d8d-a769-49b0-b875-3ac51815f856.png",
      route: "/alianzas/microsoft"
    },
    { 
      name: "Google", 
      color: "from-blue-500 to-blue-700",
      logo: googleLogo,
      route: "/alianzas/google"
    },
    { 
      name: "Amazon", 
      color: "from-slate-600 to-blue-800",
      logo: amazonLogo,
      route: "/alianzas/amazon"
    },
    { 
      name: "Salesforce", 
      color: "from-sky-600 to-blue-700",
      logo: salesforceLogo,
      route: "/alianzas/salesforce"
    },
    { 
      name: "UiPath", 
      color: "from-indigo-600 to-blue-700",
      logo: "/lovable-uploads/00948265-d10e-4da2-b99d-021709cd2942.png",
      route: "/alianzas/uipath"
    },
    { 
      name: "Rocketbot", 
      color: "from-sky-500 to-blue-600",
      logo: rocketbotLogo,
      route: "/alianzas/rocketbot"
    },
    { 
      name: "OutSystems", 
      color: "from-cyan-600 to-blue-700",
      logo: outsystemsLogo,
      route: "/alianzas/outsystems"
    },
    { 
      name: "Genexus", 
      color: "from-blue-800 to-slate-800",
      logo: genexusLogo,
      route: "/alianzas/genexus"
    },
    { 
      name: "Kore.AI", 
      color: "from-blue-700 to-indigo-800",
      logo: koreaiLogo,
      route: "/alianzas/kore-ai"
    },
    { 
      name: "Platzi", 
      color: "from-blue-600 to-indigo-700",
      logo: platziLogo
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Duplicamos los logos para crear un efecto de loop infinito
  const duplicatedAlliances = [...alliances, ...alliances];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(46,75,206,0.04),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(46,75,206,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            🤝 Alianzas Estratégicas
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Alianzas que potencian tu
            <span className="block text-[#2e4bce]">transformación tecnológica</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
            Nuestras alianzas con líderes tecnológicos globales amplifican lo que hacemos: 
            <span className="text-[#2e4bce] font-semibold"> más capacidad, más innovación, más resultados.</span>
          </p>
        </div>

        {/* Carrusel Automático */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedAlliances.map((alliance, index) => (
              <div
                key={`${alliance.name}-${index}`}
                className="flex-shrink-0 mx-4 lg:mx-6"
              >
                {alliance.route ? (
                  <Link to={alliance.route} className="group relative bg-white rounded-3xl p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2e4bce]/20 transform hover:-translate-y-2 w-36 lg:w-40 border border-gray-100 block cursor-pointer">
                    {/* Logo Container */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 mb-3 lg:mb-4 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border border-gray-100">
                        {alliance.logo ? (
                          <OptimizedImage 
                            src={alliance.logo} 
                            alt={`${alliance.name} logo`}
                            className="w-10 h-10 lg:w-12 lg:h-12"
                            objectFit="contain"
                            width={48}
                            height={48}
                            sizes="48px"
                          />
                        ) : (
                          <span className="text-gray-600 font-bold text-base lg:text-lg">
                            {alliance.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <h3 className="text-gray-800 font-bold text-sm text-center group-hover:text-[#2e4bce] transition-colors duration-300">
                        {alliance.name}
                      </h3>
                    </div>
                  </Link>
                ) : (
                  <div className="group relative bg-white rounded-3xl p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2e4bce]/20 transform hover:-translate-y-2 w-36 lg:w-40 border border-gray-100">
                    {/* Logo Container */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 mb-3 lg:mb-4 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 border border-gray-100">
                        {alliance.logo ? (
                          <OptimizedImage 
                            src={alliance.logo} 
                            alt={`${alliance.name} logo`}
                            className="w-10 h-10 lg:w-12 lg:h-12"
                            objectFit="contain"
                            width={48}
                            height={48}
                            sizes="48px"
                          />
                        ) : (
                          <span className="text-gray-600 font-bold text-base lg:text-lg">
                            {alliance.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <h3 className="text-gray-800 font-bold text-sm text-center group-hover:text-[#2e4bce] transition-colors duration-300">
                        {alliance.name}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tecnologías de clase mundial, <span className="text-[#2e4bce]">implementación local</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Combinamos lo mejor de cada plataforma con nuestro conocimiento del mercado local para entregar soluciones que realmente funcionan en tu contexto empresarial.
            </p>
          </div>
        </div>

        {/* Licensing Information */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#2e4bce]/5 via-white/50 to-[#2e4bce]/5 rounded-3xl p-8 max-w-5xl mx-auto border border-[#2e4bce]/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShoppingCart className="h-6 w-6 text-[#2e4bce]" />
              <h3 className="text-2xl font-bold text-gray-900">
                Partner Autorizado para Licenciamiento
              </h3>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              Como partners autorizados, ofrecemos <span className="font-semibold text-[#2e4bce]">licenciamiento oficial</span> de software 
              de todas nuestras marcas aliadas. Obtén las mejores condiciones comerciales y soporte técnico especializado 
              para maximizar tu inversión tecnológica.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg font-semibold"
              onClick={scrollToContact}
            >
              Consultar Licenciamiento <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
