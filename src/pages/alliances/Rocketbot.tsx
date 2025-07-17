
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Bot, BarChart3, Users, CheckCircle, Target, Award, TrendingUp, Building2, FileText, Database, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { RocketbotInsights } from "@/components/insights/RocketbotInsights";

const Rocketbot = () => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rocketbotProducts = [
    {
      icon: Zap,
      name: "Rocketbot Studio",
      tagline: "Crea robots en minutos, no en semanas",
      description: "Desarrollamos automatizaciones con la plataforma RPA más intuitiva de Latinoamérica. Interfaz visual 100% en español que permite crear robots complejos sin programación avanzada.",
      ideal: "Ideal para Hyperautomation, BPO y Software Factory",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Bot,
      name: "Rocketbot Orchestrator",
      tagline: "Administra tu ejército de robots desde un solo lugar",
      description: "Gestiona, programa y monitorea todos tus robots desde una consola centralizada diseñada para equipos latinoamericanos con soporte 24/7 en español.",
      ideal: "Perfecto para Apps Managed e Infraestructura",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: BarChart3,
      name: "Rocketbot Analytics",
      tagline: "Mide el impacto real de tu automatización",
      description: "Obtén métricas detalladas del rendimiento de tus robots, ROI en tiempo real y reportes ejecutivos que demuestran el valor de la automatización.",
      ideal: "Enfocado en AI & Data Science y Turnkey Projects",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      name: "Rocketbot Community",
      tagline: "La comunidad RPA más grande de Latinoamérica",
      description: "Accede a librerías pre-construidas, plantillas regionales y una comunidad activa de desarrolladores que comparten soluciones para desafíos locales.",
      ideal: "Base para QA, TaaS y consultoría colaborativa",
      color: "from-blue-600 to-blue-700"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Expertise Regional",
      description: "Entendemos los desafíos únicos de Latinoamérica y sabemos cómo Rocketbot resuelve problemas específicos de nuestra región."
    },
    {
      icon: Users,
      title: "Implementación Ágil",
      description: "Metodología probada que acelera la adopción de Rocketbot con entrenamiento completo en español para tus equipos."
    },
    {
      icon: Award,
      title: "Soporte Continuo",
      description: "Acompañamiento post-implementación con optimizaciones constantes y evolución de tus automatizaciones."
    },
    {
      icon: TrendingUp,
      title: "ROI Acelerado",
      description: "Estrategias específicas para maximizar el retorno de inversión de Rocketbot en contextos empresariales latinos."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Automatización Administrativa Integral",
      description: "Robots que manejan procesamiento de nóminas, gestión de personal, reportes regulatorios y comunicaciones internas con perfecta integración a sistemas locales.",
      technologies: ["Rocketbot Studio", "Orchestrator", "Analytics"],
      benefits: ["70% reducción tiempo RRHH", "99% precisión en nóminas", "ROI 350% en 6 meses"]
    },
    {
      icon: FileText,
      title: "Procesamiento de Documentos Regionales",
      description: "Automatización especializada para facturación electrónica, reportes tributarios, declaraciones gubernamentales y documentos específicos de cada país de Latinoamérica.",
      technologies: ["Rocketbot Studio", "OCR Integration", "Community Libraries"],
      benefits: ["85% menos tiempo manual", "Cumplimiento 100% normativo", "0 errores tributarios"]
    },
    {
      icon: Database,
      title: "Integración con Sistemas ERP Locales",
      description: "Conectividad nativa con los ERP más usados en Latinoamérica: SAP, Tango, Bejerman, ContaPlus y sistemas gubernamentales como AFIP, SII, DIAN.",
      technologies: ["Rocketbot Studio", "API Connectors", "Custom Modules"],
      benefits: ["Integración sin modificar ERP", "Datos actualizados 24/7", "40% menos costos IT"]
    },
    {
      icon: Shield,
      title: "Automatización de Compliance Regional",
      description: "Robots especializados en normativas locales que aseguran cumplimiento automático con regulaciones de cada país, reportes a entes gubernamentales y auditorías.",
      technologies: ["Rocketbot Orchestrator", "Compliance Templates", "Analytics"],
      benefits: ["100% cumplimiento local", "Reportes automáticos", "Auditorías sin stress"]
    }
  ];

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg mr-4 border border-gray-100">
                <img 
                  src="/lovable-uploads/6ed03b69-bebf-467d-87e6-43291b26cdd3.png" 
                  alt="Rocketbot logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-4xl font-bold text-gray-400 mx-4">+</span>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100">
                <img 
                  src="/lovable-uploads/835a2cb1-35f3-4025-82b1-9b151a6ec94d.png" 
                  alt="KPaz logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Automatización que habla<br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                nuestro idioma empresarial
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia regional con el poder de Rocketbot para crear <strong>soluciones de automatización que entienden los desafíos únicos de Latinoamérica</strong>, con soporte completo en español y metodologías probadas en nuestra región.
            </p>
            
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Descubre la automatización latina <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Rocketbot Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-600 border-blue-200 font-medium">
              <Zap className="w-4 h-4 mr-2" />
              RPA Latinoamericano
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de Rocketbot. <span className="text-blue-600">Potenciado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rocketbotProducts.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200/50 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-3">{product.tagline}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                  <p className="text-sm font-medium text-blue-600">🚀 {product.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KPaz Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué <span className="text-blue-600">KPaz + Rocketbot</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyKPaz.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-green-50 text-green-700 border-green-200 font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Casos de éxito
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automatización <span className="text-blue-600">Rocketbot</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos robots inteligentes para resolver desafíos específicos de Latinoamérica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200/50 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{useCase.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-600 text-blue-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2">Resultados clave:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rocketbot Insights Section */}
      <RocketbotInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para automatizar con la plataforma<br />
            <span className="text-blue-200">que realmente entiende Latinoamérica?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Te mostramos cómo Rocketbot puede transformar tus procesos con la experiencia KPaz.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Explorar automatización regional <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Rocketbot;
