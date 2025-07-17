
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Cog, BarChart3, Cloud, CheckCircle, Target, Users, Award, TrendingUp, Building2, Smartphone, Database, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { OutSystemsInsights } from "@/components/insights/OutSystemsInsights";

const OutSystems = () => {
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

  const outsystemsProducts = [
    {
      icon: Zap,
      name: "OutSystems Studio",
      tagline: "Desarrolla 10x más rápido con visual development",
      description: "Plataforma de desarrollo visual que permite crear aplicaciones empresariales completas sin escribir código, con capacidades avanzadas de integración y escalabilidad automática.",
      ideal: "Ideal para Software Factory, Turnkey Projects y Low-Code Development",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Cog,
      name: "OutSystems Service Center",
      tagline: "Gestiona y escala tus aplicaciones con control total",
      description: "Centro de comando para administrar, monitorear y optimizar todas tus aplicaciones OutSystems, con herramientas avanzadas de DevOps y gestión de ciclo de vida.",
      ideal: "Perfecto para Apps Managed e Infraestructura",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: BarChart3,
      name: "OutSystems AI Mentor Studio",
      tagline: "Desarrollo asistido por inteligencia artificial",
      description: "IA integrada que analiza tu código, sugiere mejores prácticas, detecta patrones y optimiza automáticamente el rendimiento de tus aplicaciones.",
      ideal: "Enfocado en AI & Data Science y desarrollo avanzado",
      color: "from-purple-600 to-indigo-700"
    },
    {
      icon: Cloud,
      name: "OutSystems Cloud",
      tagline: "Infraestructura cloud-native lista para producción",
      description: "Plataforma cloud completa con escalabilidad automática, seguridad empresarial, backup automático y alta disponibilidad para aplicaciones críticas.",
      ideal: "Base robusta para BPO, Hyperautomation y Apps Managed",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Especialización Low-Code",
      description: "Especialistas certificados en OutSystems con experiencia comprobada en desarrollo rápido de aplicaciones empresariales."
    },
    {
      icon: Users,
      title: "Implementación Ágil",
      description: "Metodología integral que incluye análisis, diseño, desarrollo, testing y despliegue con entregas iterativas cada 2 semanas."
    },
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description: "Track record exitoso con empresas líderes en banca, retail, salud, educación y sector público."
    },
    {
      icon: TrendingUp,
      title: "ROI Acelerado",
      description: "Desarrollo 10x más rápido que métodos tradicionales con reducción de 70% en tiempo de entrega y costos de desarrollo."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Aplicaciones Empresariales Core",
      description: "Desarrollo de sistemas críticos como ERP, CRM, plataformas de gestión y aplicaciones de proceso core con alta performance y escalabilidad.",
      technologies: ["OutSystems Studio", "Service Center", "Cloud Platform"],
      benefits: ["Desarrollo 10x más rápido", "99.9% uptime garantizado", "ROI 400% en 8 meses"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles Nativas",
      description: "Desarrollo de apps móviles nativas iOS y Android con experiencia de usuario superior, integración con APIs y funcionalidades offline.",
      technologies: ["OutSystems Mobile", "Native Plugins", "PWA Capabilities"],
      benefits: ["Apps nativas verdaderas", "Desarrollo cross-platform", "50% menos tiempo de desarrollo"]
    },
    {
      icon: Database,
      title: "Portales de Autoservicio Digital",
      description: "Plataformas web y móviles que permiten a clientes y empleados gestionar servicios, realizar transacciones y acceder a información 24/7.",
      technologies: ["OutSystems Portal", "Integration Studio", "User Management"],
      benefits: ["Reducción 80% consultas soporte", "Mejora satisfacción cliente", "Disponibilidad 24/7"]
    },
    {
      icon: Shield,
      title: "Modernización de Sistemas Legacy",
      description: "Migración y modernización de aplicaciones legacy hacia OutSystems, manteniendo funcionalidad crítica con tecnología moderna.",
      technologies: ["Integration Studio", "REST/SOAP APIs", "Database Connectors"],
      benefits: ["Migración sin downtime", "Preservación de datos", "Modernización gradual"]
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
                  src="/lovable-uploads/dd69f607-b6a5-4964-9f74-f466ad2a3521.png" 
                  alt="OutSystems logo"
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
              Acelera tu transformación digital<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                con desarrollo low-code
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en desarrollo ágil con el poder de OutSystems para crear <strong>aplicaciones empresariales hasta 10 veces más rápido</strong>, con menos código, mayor calidad y capacidad de evolución continua.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Acelera tu desarrollo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* OutSystems Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Low-Code Development
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de OutSystems. <span className="text-[#2e4bce]">Potenciado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {outsystemsProducts.map((product, index) => (
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz + OutSystems</span>?
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
              Desarrollo <span className="text-[#2e4bce]">OutSystems</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos soluciones low-code que transforman la velocidad de desarrollo empresarial.
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

      {/* OutSystems Insights Section */}
      <OutSystemsInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para desarrollar 10x más rápido<br />
            <span className="text-blue-200">con la potencia de OutSystems?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Te mostramos cómo OutSystems puede acelerar tu desarrollo con la experiencia KPaz.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Acelerar mi desarrollo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OutSystems;
