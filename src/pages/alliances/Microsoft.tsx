
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Cog, BarChart3, Cloud, CheckCircle, Target, Users, Award, TrendingUp, Building2, Zap, Database, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { MicrosoftInsights } from "@/components/insights/MicrosoftInsights";

const Microsoft = () => {
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

  const microsoftProducts = [
    {
      icon: Brain,
      name: "GitHub Copilot",
      tagline: "El copiloto que acelera tu desarrollo hasta 55%",
      description: "Ayudamos a tus equipos a integrar GitHub Copilot de forma segura y productiva en sus flujos de trabajo, reduciendo tiempos y aumentando la calidad del código.",
      ideal: "Ideal para TaaS, Turnkey Projects y Software Factory",
      color: "from-purple-600 to-indigo-700"
    },
    {
      icon: Cog,
      name: "Microsoft Power Platform",
      tagline: "Automatiza, construye y analiza sin escribir una sola línea de código",
      description: "Implementamos Power Apps, Power Automate, Power BI y Power Pages para resolver necesidades de negocio rápido, con bajo costo de desarrollo y alto nivel de adopción.",
      ideal: "Perfecto para Hyperautomation, Low-Code y BPO",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart3,
      name: "Microsoft Fabric",
      tagline: "Unifica tus datos, conéctalos a IA y toma mejores decisiones",
      description: "Microsoft Fabric transforma la forma en que tu empresa gestiona y explota sus datos, integrando BI, ingeniería, ciencia de datos y real time analytics en una sola plataforma.",
      ideal: "Enfocado en AI & Data Science y Apps Managed",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Cloud,
      name: "Microsoft Azure",
      tagline: "Infraestructura escalable para tu presente y tu futuro",
      description: "Desplegamos soluciones cloud-native sobre Azure: microservicios, APIs, servicios cognitivos, serverless, devops y seguridad empresarial.",
      ideal: "Base robusta para Turnkey, QA, Infraestructura y BPO",
      color: "from-blue-500 to-blue-700"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Especialización única",
      description: "Combinamos herramientas Microsoft con IA, automatización y diseño UX para crear soluciones diferenciadas."
    },
    {
      icon: Users,
      title: "Acompañamiento integral",
      description: "Te acompañamos de punta a punta: desde la estrategia hasta la adopción y el escalamiento."
    },
    {
      icon: Award,
      title: "Experiencia comprobada",
      description: "Experiencia real con empresas líderes en banca, retail, educación, seguros y energía."
    },
    {
      icon: TrendingUp,
      title: "Metodologías ágiles",
      description: "Talento validado y metodologías ágiles que aseguran impacto medible y escalabilidad."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Transformación Digital Empresarial",
      description: "Modernización completa de procesos usando Power Platform y Azure para automatizar workflows críticos y mejorar la experiencia del cliente.",
      technologies: ["Power Platform", "Azure", "Microsoft 365"],
      benefits: ["Reducción 60% en tiempo de procesos", "ROI 300% en 12 meses", "Adopción 90% del equipo"]
    },
    {
      icon: Zap,
      title: "Aceleración de Desarrollo",
      description: "Implementación de GitHub Copilot y Azure DevOps para equipos de desarrollo, optimizando la velocidad de entrega y calidad del código.",
      technologies: ["GitHub Copilot", "Azure DevOps", "Visual Studio"],
      benefits: ["55% más productividad", "40% menos bugs en producción", "Deploy diario vs semanal"]
    },
    {
      icon: Database,
      title: "Unificación de Datos e IA",
      description: "Migración y consolidación de datos dispersos hacia Microsoft Fabric con capacidades de IA integradas para analytics en tiempo real.",
      technologies: ["Microsoft Fabric", "Power BI", "Azure AI"],
      benefits: ["360° vista del negocio", "Decisiones en tiempo real", "Reducción 70% tiempo reportes"]
    },
    {
      icon: Shield,
      title: "Infraestructura Segura y Escalable",
      description: "Migración cloud-native a Azure con arquitectura de microservicios, seguridad avanzada y escalabilidad automática.",
      technologies: ["Azure", "Microsoft Defender", "Azure DevOps"],
      benefits: ["99.9% uptime garantizado", "Escalabilidad automática", "Seguridad enterprise"]
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
                  src="/lovable-uploads/1b177d8d-a769-49b0-b875-3ac51815f856.png" 
                  alt="Microsoft logo"
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
              Impulsamos tu transformación<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                con el ecosistema Microsoft
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en automatización, desarrollo y datos con el poder de las herramientas más avanzadas de Microsoft para acelerar tu negocio, con <strong>soluciones medibles, escalables y listas para evolucionar contigo</strong>.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Conversemos sobre tu proyecto <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Microsoft Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Target className="w-4 h-4 mr-2" />
              Herramientas de clase mundial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de Microsoft. <span className="text-[#2e4bce]">Potenciado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {microsoftProducts.map((product, index) => (
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
                  <p className="text-sm font-medium text-[#2e4bce]">👉 {product.ideal}</p>
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz</span>?
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
              Casos de uso
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluciones <span className="text-[#2e4bce]">Microsoft</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos las herramientas Microsoft para resolver desafíos empresariales reales.
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

      {/* Microsoft Insights Section */}
      <MicrosoftInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres aprovechar todo el potencial de Microsoft<br />
            <span className="text-blue-200">con un partner que transforma de verdad?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Podemos ayudarte a aterrizar la herramienta adecuada, con foco en impacto y resultados medibles.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Agendar reunión <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Microsoft;
