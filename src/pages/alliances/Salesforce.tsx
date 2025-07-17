
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Cog, BarChart3, Zap, CheckCircle, Target, Users, Award, TrendingUp, Building2, FileText, Database, Shield, Brain } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { SalesforceInsights } from "@/components/insights/SalesforceInsights";

const Salesforce = () => {
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

  const salesforceProducts = [
    {
      icon: Cloud,
      name: "Lightning Platform",
      tagline: "Crea aplicaciones empresariales sin código tradicional",
      description: "Desarrollamos aplicaciones CRM personalizadas usando Lightning Platform que se adaptan perfectamente a tus procesos de negocio, eliminando la necesidad de programación compleja y acelerando el time-to-market.",
      ideal: "Ideal para Low-Code Development y Software Factory",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: Cog,
      name: "Einstein AI & Automation",
      tagline: "Inteligencia artificial que trabaja para tu negocio 24/7",
      description: "Implementamos Einstein AI para automatizar procesos, predecir comportamientos de clientes y optimizar estrategias de venta con machine learning integrado directamente en tu CRM.",
      ideal: "Perfecto para AI & Data Science y Hyperautomation",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: BarChart3,
      name: "Tableau CRM Analytics",
      tagline: "Insights predictivos que transforman datos en decisiones",
      description: "Creamos dashboards inteligentes y análisis predictivos que revelan patrones ocultos en tus datos, permitiendo tomar decisiones estratégicas basadas en evidencia real y proyecciones precisas.",
      ideal: "Enfocado en AI & Data Science y Business Intelligence",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Brain,
      name: "MuleSoft Integration",
      tagline: "Conecta todo tu ecosistema tecnológico sin fricciones",
      description: "Integramos Salesforce con todos tus sistemas empresariales usando MuleSoft, creando un flujo de datos unificado que elimina silos de información y mejora la eficiencia operacional.",
      ideal: "Ideal para Infraestructura Ops y Turnkey Projects",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Especialización Salesforce",
      description: "Somos expertos certificados en Salesforce con experiencia comprobada en implementaciones complejas y soluciones personalizadas."
    },
    {
      icon: Users,
      title: "Implementación end-to-end",
      description: "Te acompañamos desde el análisis inicial hasta la adopción completa, asegurando que tu equipo aproveche al máximo la plataforma."
    },
    {
      icon: Award,
      title: "ROI comprobado",
      description: "Metodología probada que garantiza retorno de inversión medible en los primeros 6 meses de implementación."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad empresarial",
      description: "Arquitecturas robustas que crecen contigo, desde implementaciones básicas hasta ecosistemas empresariales completos."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "CRM Inteligente para Ventas",
      description: "Implementación completa de Sales Cloud con Einstein AI para predecir oportunidades, automatizar follow-ups y optimizar el pipeline de ventas con análisis predictivo.",
      technologies: ["Sales Cloud", "Einstein AI", "Lightning Platform"],
      benefits: ["75% mejora en conversión", "50% reducción tiempo de venta", "ROI 350% en 10 meses"]
    },
    {
      icon: FileText,
      title: "Automatización de Marketing Digital",
      description: "Marketing Cloud personalizado que automatiza campañas, segmenta audiencias inteligentemente y mide ROI en tiempo real con analytics avanzado.",
      technologies: ["Marketing Cloud", "Einstein Analytics", "Journey Builder"],
      benefits: ["85% automatización campañas", "40% mejora engagement", "60% reducción costos marketing"]
    },
    {
      icon: Database,
      title: "Centro de Atención al Cliente 360°",
      description: "Service Cloud integrado que unifica todos los canales de atención, automatiza resoluciones con IA y proporciona vista completa del cliente.",
      technologies: ["Service Cloud", "Einstein Case", "Lightning Platform"],
      benefits: ["90% automatización casos", "50% mejora satisfacción", "70% reducción tiempo resolución"]
    },
    {
      icon: Shield,
      title: "Integración Empresarial Completa",
      description: "Conectamos Salesforce con ERP, sistemas legados y aplicaciones terceras usando MuleSoft para crear un ecosistema tecnológico unificado.",
      technologies: ["MuleSoft", "API Management", "Data Integration"],
      benefits: ["100% sincronización datos", "0% downtime integraciones", "45% reducción costos IT"]
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
                  src="/lovable-uploads/1387d343-ba06-404f-ab81-117907606d7e.png" 
                  alt="Salesforce logo"
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
              Transforma tu negocio<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                con el CRM #1 del mundo
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en desarrollo low-code con el poder de Salesforce para crear <strong>soluciones CRM inteligentes</strong> que automatizan procesos, predicen oportunidades y transforman la experiencia de tus clientes.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Descubre el potencial de Salesforce <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Salesforce Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Cloud className="w-4 h-4 mr-2" />
              Customer Relationship Management
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de Salesforce. <span className="text-[#2e4bce]">Implementado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {salesforceProducts.map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200/50 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-lg font-semibold text-[#2e4bce] mb-3">{product.tagline}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-[#2e4bce]">
                  <p className="text-sm font-medium text-[#2e4bce]">⚡ {product.ideal}</p>
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz + Salesforce</span>?
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
              Soluciones <span className="text-[#2e4bce]">Salesforce</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos el ecosistema Salesforce para resolver desafíos empresariales complejos.
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

      {/* Salesforce Insights Section */}
      <SalesforceInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu gestión de clientes<br />
            <span className="text-blue-200">con el CRM más poderoso del mundo?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Podemos ayudarte a diseñar una solución Salesforce que se adapte perfectamente a tu negocio.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Explorar soluciones Salesforce <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Salesforce;
