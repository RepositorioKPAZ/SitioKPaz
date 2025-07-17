
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Cog, BarChart3, Cloud, CheckCircle, Target, Users, Award, TrendingUp, Building2, Smartphone, Database, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { GenexusInsights } from "@/components/insights/GenexusInsights";

const Genexus = () => {
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

  const genexusProducts = [
    {
      icon: Zap,
      name: "Genexus Studio",
      tagline: "Desarrollo que evoluciona automáticamente con tu negocio",
      description: "Plataforma de desarrollo inteligente que genera automáticamente aplicaciones multiplataforma y evoluciona el software conforme cambian los requerimientos empresariales.",
      ideal: "Ideal para Software Factory, Turnkey Projects y Modernización Legacy",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: Cog,
      name: "Genexus Server",
      tagline: "Gestión centralizada y despliegue automático",
      description: "Servidor de administración que facilita el despliegue, versionado y gestión de aplicaciones Genexus en múltiples entornos con control granular de usuarios y permisos.",
      ideal: "Perfecto para Apps Managed e Infraestructura empresarial",
      color: "from-emerald-600 to-teal-700"
    },
    {
      icon: BarChart3,
      name: "Genexus AI Assistant",
      tagline: "Inteligencia artificial para desarrollo optimizado",
      description: "Asistente de IA que analiza patrones de uso, sugiere optimizaciones y ayuda en la toma de decisiones arquitectónicas basadas en mejores prácticas y experiencia acumulada.",
      ideal: "Enfocado en AI & Data Science y optimización continua",
      color: "from-purple-600 to-violet-700"
    },
    {
      icon: Cloud,
      name: "Genexus Cloud",
      tagline: "Plataforma cloud nativa con escalabilidad automática",
      description: "Infraestructura cloud optimizada para aplicaciones Genexus con escalabilidad automática, alta disponibilidad y herramientas de monitoreo y análisis integradas.",
      ideal: "Base robusta para BPO, Hyperautomation y Apps Cloud-Native",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Especialización Genexus",
      description: "Especialistas certificados en Genexus con experiencia comprobada en desarrollo de aplicaciones que evolucionan automáticamente."
    },
    {
      icon: Users,
      title: "Metodología Evolutiva",
      description: "Metodología integral que aprovecha la capacidad de evolución automática de Genexus para entregas iterativas y adaptación continua."
    },
    {
      icon: Award,
      title: "Experiencia Latinoamericana",
      description: "Track record exitoso con empresas de la región en sectores como manufactura, retail, gobierno y servicios financieros."
    },
    {
      icon: TrendingUp,
      title: "ROI Sostenible",
      description: "Desarrollo rápido con evolución automática que reduce costos de mantenimiento en 70% y acelera el time-to-market."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Sistemas ERP Empresariales",
      description: "Desarrollo de sistemas de gestión empresarial completos que evolucionan automáticamente según cambios en procesos de negocio, normativas y requerimientos organizacionales.",
      technologies: ["Genexus Studio", "Server Administration", "Cloud Platform"],
      benefits: ["Evolución automática", "Reducción 70% mantenimiento", "Adaptación a cambios normativos"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Multiplataforma",
      description: "Desarrollo simultáneo de aplicaciones web, móviles y de escritorio desde una sola base de conocimiento, con sincronización automática de cambios.",
      technologies: ["Genexus Mobile", "Web Generation", "Smart Devices"],
      benefits: ["Una sola base de código", "Despliegue multiplataforma", "Sincronización automática"]
    },
    {
      icon: Database,
      title: "Modernización de Sistemas Legacy",
      description: "Migración inteligente de sistemas legacy manteniendo la lógica de negocio y agregando capacidades modernas como APIs, interfaces web y móviles.",
      technologies: ["Data Migration Tools", "API Generation", "Legacy Integration"],
      benefits: ["Migración sin pérdida funcional", "Preservación de inversión", "Modernización gradual"]
    },
    {
      icon: Shield,
      title: "Aplicaciones Reguladas y Críticas",
      description: "Desarrollo de sistemas para sectores altamente regulados donde la trazabilidad, auditoría y evolución controlada son fundamentales para el cumplimiento.",
      technologies: ["Audit Trail", "Version Control", "Compliance Tools"],
      benefits: ["Trazabilidad completa", "Cumplimiento automático", "Auditoría integrada"]
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
                  src="/lovable-uploads/8a2c3d86-4608-40da-bd4d-c5d989ab1d7c.png" 
                  alt="Genexus logo"
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
              Software que evoluciona<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                automáticamente con tu negocio
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, aprovechamos el poder de Genexus para crear <strong>aplicaciones que se adaptan automáticamente</strong> a los cambios de tu negocio, reduciendo costos de mantenimiento y acelerando la innovación continua.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Evoluciona tu software <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Genexus Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Desarrollo Evolutivo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de Genexus. <span className="text-[#2e4bce]">Potenciado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {genexusProducts.map((product, index) => (
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
                  <p className="text-sm font-medium text-[#2e4bce]">🚀 {product.ideal}</p>
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz + Genexus</span>?
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
              Desarrollo <span className="text-[#2e4bce]">Genexus</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos soluciones que evolucionan automáticamente con tu negocio.
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

      {/* Genexus Insights Section */}
      <GenexusInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para software que evoluciona<br />
            <span className="text-blue-200">automáticamente con tu negocio?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Te mostramos cómo Genexus puede transformar tu desarrollo con la experiencia KPaz.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Evolucionar mi software <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Genexus;
