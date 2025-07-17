import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Cog, BarChart3, Zap, CheckCircle, Target, Users, Award, TrendingUp, Building2, FileText, Database, Shield, Brain } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { UiPathInsights } from "@/components/insights/UiPathInsights";

const UiPath = () => {
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

  const uipathProducts = [
    {
      icon: Bot,
      name: "UiPath Studio",
      tagline: "Crea robots inteligentes que trabajan 24/7 por ti",
      description: "Diseñamos y desarrollamos robots de software que automatizan tareas repetitivas, eliminan errores humanos y liberan a tu equipo para tareas de mayor valor estratégico.",
      ideal: "Ideal para Hyperautomation, BPO y Software Factory",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: Cog,
      name: "UiPath Orchestrator",
      tagline: "Gestiona y escala tu fuerza laboral digital",
      description: "Implementamos la plataforma central para desplegar, monitorear y administrar todos tus robots de automatización desde un único panel de control empresarial.",
      ideal: "Perfecto para Apps Managed y Infraestructura",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: BarChart3,
      name: "UiPath AI Computer Vision",
      tagline: "Robots que ven y procesan documentos como humanos",
      description: "Integramos capacidades de visión artificial e IA para que tus robots puedan procesar documentos complejos, facturas, formularios y cualquier contenido visual.",
      ideal: "Enfocado en AI & Data Science y Turnkey Projects",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Brain,
      name: "UiPath Agentic AI",
      tagline: "Agentes de IA que toman decisiones autónomas inteligentes",
      description: "Implementamos agentes de IA que van más allá de la automatización tradicional, tomando decisiones complejas, adaptándose a cambios y resolviendo problemas de forma autónoma.",
      ideal: "Revolucionario para AI & Data Science y consultoría avanzada",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Especialización RPA",
      description: "Somos expertos certificados en UiPath con experiencia comprobada en automatización de procesos críticos."
    },
    {
      icon: Users,
      title: "Implementación integral",
      description: "Te acompañamos desde el análisis inicial hasta la adopción completa y escalamiento de tu fuerza laboral digital."
    },
    {
      icon: Award,
      title: "ROI garantizado",
      description: "Metodología probada que asegura retorno de inversión medible en los primeros 6 meses de implementación."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad empresarial",
      description: "Arquitecturas robustas que crecen contigo, desde procesos simples hasta automatización empresarial completa."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Automatización de Procesos Financieros",
      description: "Robots que manejan conciliaciones bancarias, procesamiento de facturas, reportes contables y validaciones financieras con precisión del 99.9%.",
      technologies: ["UiPath Studio", "Orchestrator", "AI Computer Vision"],
      benefits: ["80% reducción tiempo procesos", "99.9% precisión en datos", "ROI 400% en 8 meses"]
    },
    {
      icon: FileText,
      title: "Procesamiento Inteligente de Documentos",
      description: "Automatización completa del ciclo de vida documental: extracción, clasificación, validación y almacenamiento con IA integrada.",
      technologies: ["Document Understanding", "AI Computer Vision", "Orchestrator"],
      benefits: ["90% menos tiempo manual", "Procesamiento 24/7", "0% errores de transcripción"]
    },
    {
      icon: Database,
      title: "Integración y Migración de Sistemas",
      description: "Robots que conectan sistemas legacy con nuevas plataformas, realizan migraciones de datos y mantienen sincronización en tiempo real.",
      technologies: ["UiPath Studio", "API Integration", "Agentic AI"],
      benefits: ["Integración sin downtime", "Datos siempre actualizados", "50% menos costos IT"]
    },
    {
      icon: Shield,
      title: "Automatización de Compliance y Auditoría",
      description: "Procesos automatizados que aseguran cumplimiento normativo, generan reportes de auditoría y mantienen trazabilidad completa.",
      technologies: ["Orchestrator", "UiPath Insights", "Process Mining"],
      benefits: ["100% cumplimiento normativo", "Auditorías automáticas", "Trazabilidad completa"]
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
                  src="/lovable-uploads/00948265-d10e-4da2-b99d-021709cd2942.png" 
                  alt="UiPath logo"
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
              Libera el potencial humano<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                con robots que nunca duermen
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en automatización con el poder de UiPath para crear <strong>robots inteligentes que trabajan 24/7</strong>, eliminan errores humanos y transforman tu operación en una ventaja competitiva.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Descubre tu potencial de automatización <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* UiPath Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Bot className="w-4 h-4 mr-2" />
              Robotic Process Automation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de UiPath. <span className="text-[#2e4bce]">Implementado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {uipathProducts.map((product, index) => (
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
                  <p className="text-sm font-medium text-[#2e4bce]">🤖 {product.ideal}</p>
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz + UiPath</span>?
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
              Automatización <span className="text-[#2e4bce]">UiPath</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos robots inteligentes para resolver desafíos operativos complejos.
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

      {/* UiPath Insights Section */}
      <UiPathInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Y si tu equipo se enfocara en lo estratégico<br />
            <span className="text-blue-200">mientras la rutina la ejecuta un robot?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Podemos ayudarte a identificar procesos ideales para automatizar y mostrar el ROI potencial.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Analizar mi potencial de automatización <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UiPath;
