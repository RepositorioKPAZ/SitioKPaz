import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, MessageSquare, Zap, Users, CheckCircle, Target, Award, TrendingUp, Headphones, Brain, Phone, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { KoreAIInsights } from "@/components/insights/KoreAIInsights";

const KoreAI = () => {
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

  const koreAIProducts = [
    {
      icon: Bot,
      name: "Kore.AI Conversational Platform",
      tagline: "Inteligencia conversacional que comprende y responde",
      description: "Plataforma completa de IA conversacional que permite crear chatbots y asistentes virtuales inteligentes con capacidades avanzadas de procesamiento de lenguaje natural y aprendizaje automático.",
      ideal: "Ideal para Hyperautomation y Apps Managed",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: MessageSquare,
      name: "Kore.AI Smart Bots",
      tagline: "Chatbots que evolucionan con cada conversación",
      description: "Bots inteligentes que aprenden de las interacciones, se adaptan al contexto del usuario y proporcionan respuestas personalizadas en tiempo real para mejorar continuamente la experiencia.",
      ideal: "Perfecto para BPO y Contact Centers",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: Zap,
      name: "Kore.AI Process Automation",
      tagline: "Automatización inteligente de procesos empresariales",
      description: "Integración perfecta entre conversación y automatización que permite a los usuarios ejecutar procesos complejos a través de interfaces conversacionales naturales.",
      ideal: "Enfocado en Software Factory y Turnkey Projects",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: Users,
      name: "Kore.AI Analytics & Insights",
      tagline: "Inteligencia de negocios conversacional",
      description: "Análisis profundo de interacciones conversacionales que proporciona insights sobre comportamiento del usuario, tendencias y oportunidades de mejora en tiempo real.",
      ideal: "Base para AI & Data Science y consultoría estratégica",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Expertise en IA Conversacional",
      description: "Especialistas certificados en Kore.AI con experiencia probada en implementaciones exitosas de chatbots y asistentes virtuales empresariales."
    },
    {
      icon: Users,
      title: "Implementación Estratégica",
      description: "Metodología integral que incluye análisis de necesidades, diseño conversacional, desarrollo, testing y optimización continua post-lanzamiento."
    },
    {
      icon: Award,
      title: "Soporte Especializado",
      description: "Equipo dedicado para mantenimiento, evolución y optimización de tus soluciones conversacionales con monitoreo 24/7."
    },
    {
      icon: TrendingUp,
      title: "ROI Demostrable",
      description: "Métricas claras de impacto: reducción de costos operativos, mejora en satisfacción del cliente y aumento en eficiencia del equipo de soporte."
    }
  ];

  const useCases = [
    {
      icon: Headphones,
      title: "Asistentes Virtuales para Contact Centers",
      description: "Chatbots inteligentes que atienden consultas 24/7, resuelven problemas comunes automáticamente y escalan casos complejos a agentes humanos con contexto completo.",
      technologies: ["Kore.AI Platform", "NLP Engine", "CRM Integration"],
      benefits: ["80% reducción consultas repetitivas", "95% disponibilidad 24/7", "60% mejora satisfacción cliente"]
    },
    {
      icon: Brain,
      title: "Automatización Conversacional de Procesos",
      description: "Interfaces conversacionales que permiten a empleados y clientes ejecutar procesos empresariales complejos mediante diálogos naturales con sistemas backend.",
      technologies: ["Kore.AI Automation", "API Connectors", "Workflow Engine"],
      benefits: ["70% reducción tiempo procesos", "Interfaz 100% intuitiva", "50% menos errores humanos"]
    },
    {
      icon: Phone,
      title: "Asistentes de Ventas Conversacionales",
      description: "Bots especializados que califican leads, programan reuniones, proporcionan información de productos y nutren prospectos con conversaciones personalizadas.",
      technologies: ["Kore.AI Smart Bots", "CRM Integration", "Analytics Dashboard"],
      benefits: ["40% más leads calificados", "Respuesta inmediata 24/7", "300% ROI en 12 meses"]
    },
    {
      icon: Settings,
      title: "Autoservicio Inteligente Empresarial",
      description: "Plataformas self-service que permiten a empleados resolver consultas de IT, RRHH, finanzas y operaciones através de conversaciones naturales con sistemas empresariales.",
      technologies: ["Kore.AI Platform", "Enterprise Integrations", "Knowledge Base"],
      benefits: ["85% resolución automática", "Reducción tickets soporte", "Empleados más productivos"]
    }
  ];

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(46,75,206,0.04),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg mr-4 border border-gray-100">
                <img 
                  src="/lovable-uploads/d3d675ba-accf-4280-a463-c54b44d94cdb.png" 
                  alt="Kore.AI logo"
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
              Inteligencia Conversacional que<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                transforma la experiencia
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en IA con el poder de Kore.AI para crear <strong>asistentes virtuales y chatbots inteligentes que revolucionan la atención al cliente</strong>, automatizan procesos complejos y generan experiencias conversacionales excepcionales.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Descubre la IA conversacional <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Kore.AI Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Bot className="w-4 h-4 mr-2" />
              IA Conversacional Avanzada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de Kore.AI. <span className="text-[#2e4bce]">Potenciado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {koreAIProducts.map((product, index) => (
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
                  <p className="text-sm font-medium text-blue-600">🤖 {product.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KPaz Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué <span className="text-[#2e4bce]">KPaz + Kore.AI</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyKPaz.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] rounded-xl flex items-center justify-center mb-4">
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
              IA Conversacional <span className="text-[#2e4bce]">Kore.AI</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos soluciones conversacionales inteligentes que transforman la experiencia del cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200/50 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110">
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
                      <Badge key={techIndex} variant="outline" className="border-[#2e4bce] text-[#2e4bce]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-[#2e4bce]">
                  <h4 className="text-sm font-semibold text-[#2e4bce] mb-2">Resultados clave:</h4>
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

      {/* Kore.AI Insights Section */}
      <KoreAIInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para revolucionar tu atención al cliente<br />
            <span className="text-blue-200">con inteligencia conversacional?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Te mostramos cómo Kore.AI puede transformar la experiencia de tus clientes con la experiencia KPaz.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Explorar IA conversacional <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KoreAI;
