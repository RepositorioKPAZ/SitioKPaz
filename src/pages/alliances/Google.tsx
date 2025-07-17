
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Brain, BarChart3, Database, CheckCircle, Target, Users, Award, TrendingUp, Building2, Cpu, Globe, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleInsights } from "@/components/insights/GoogleInsights";

const Google = () => {
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

  const googleProducts = [
    {
      icon: Brain,
      name: "Vertex AI",
      tagline: "Inteligencia artificial generativa y machine learning unificado",
      description: "Implementamos soluciones de IA avanzada con Vertex AI para crear modelos predictivos, procesamiento de lenguaje natural y computer vision que transforman datos en insights accionables y automatización inteligente.",
      ideal: "Ideal para AI & Data Science y Analytics Predictivo",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: Database,
      name: "BigQuery & Analytics",
      tagline: "Data warehouse serverless que escala automáticamente",
      description: "Desarrollamos arquitecturas de datos modernas con BigQuery que procesan petabytes de información en segundos, creando pipelines de datos inteligentes y dashboards en tiempo real para decisiones basadas en evidencia.",
      ideal: "Perfecto para Big Data y Business Intelligence",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: Cloud,
      name: "Google Kubernetes Engine",
      tagline: "Orquestación de contenedores a escala empresarial",
      description: "Migramos y desplegamos aplicaciones cloud-native con GKE, implementando arquitecturas de microservicios resilientes que escalan automáticamente y optimizan costos operacionales.",
      ideal: "Enfocado en DevOps e Infraestructura Cloud",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Globe,
      name: "Google Workspace & AppSheet",
      tagline: "Productividad empresarial y desarrollo no-code",
      description: "Transformamos la colaboración empresarial con Google Workspace y creamos aplicaciones empresariales personalizadas con AppSheet, eliminando barreras tecnológicas y acelerando la innovación.",
      ideal: "Ideal para Low-Code Development y Collaboration",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Expertise Google Cloud",
      description: "Somos Google Cloud Partner con certificaciones avanzadas en IA, BigQuery y arquitecturas cloud-native para implementaciones empresariales."
    },
    {
      icon: Users,
      title: "Implementación integral",
      description: "Te acompañamos desde la migración inicial hasta la optimización continua, asegurando máximo aprovechamiento de la plataforma Google."
    },
    {
      icon: Award,
      title: "ROI comprobado",
      description: "Metodología probada que garantiza retorno de inversión medible con reducción de costos IT hasta 40% y mejora de performance."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad automática",
      description: "Arquitecturas serverless y auto-escalables que se adaptan a tu demanda sin intervención manual ni sobrecostos."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Data Lake Inteligente con BigQuery",
      description: "Implementación completa de data lake empresarial que unifica todas las fuentes de datos con BigQuery, creando una única fuente de verdad con analytics en tiempo real y ML integrado.",
      technologies: ["BigQuery", "Cloud Storage", "Dataflow", "Looker Studio"],
      benefits: ["90% reducción tiempo consultas", "70% mejora en insights", "50% reducción costos almacenamiento"]
    },
    {
      icon: Cpu,
      title: "IA Generativa para Atención al Cliente",
      description: "Desarrollo de chatbots inteligentes con Vertex AI que entienden contexto, resuelven consultas complejas y escalan automáticamente según demanda del negocio.",
      technologies: ["Vertex AI", "PaLM API", "Dialogflow", "Cloud Functions"],
      benefits: ["85% automatización consultas", "60% mejora satisfacción", "40% reducción costos operación"]
    },
    {
      icon: Globe,
      title: "Modernización de Aplicaciones Cloud-Native",
      description: "Migración y refactoring de aplicaciones legacy a arquitecturas modernas con GKE, implementando CI/CD automatizado y monitoreo inteligente.",
      technologies: ["GKE", "Cloud Build", "Cloud Monitoring", "Istio"],
      benefits: ["99.9% disponibilidad", "70% mejora performance", "50% reducción tiempo deployment"]
    },
    {
      icon: Shield,
      title: "Plataforma Low-Code Empresarial",
      description: "Implementación de Google Workspace con AppSheet para crear aplicaciones empresariales sin código, integrando workflows automáticos y analytics incorporado.",
      technologies: ["AppSheet", "Google Workspace", "Apps Script", "Sheets API"],
      benefits: ["80% aceleración desarrollo", "60% reducción dependencia IT", "90% adopción usuarios"]
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
                  src="/lovable-uploads/5a34cf9e-d40b-4e71-ae24-aad95f18b330.png" 
                  alt="Google logo"
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
                con Google Cloud Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en desarrollo cloud-native con el poder de Google Cloud para crear <strong>soluciones empresariales inteligentes</strong> que aprovechan IA generativa, analytics masivo y escalabilidad automática.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Descubre el poder de Google Cloud <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Google Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Cloud className="w-4 h-4 mr-2" />
              Google Cloud Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de Google Cloud. <span className="text-[#2e4bce]">Implementado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {googleProducts.map((product, index) => (
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz + Google Cloud</span>?
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
              Soluciones <span className="text-[#2e4bce]">Google Cloud</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos el ecosistema Google Cloud para resolver desafíos empresariales complejos.
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

      {/* Google Insights Section */}
      <GoogleInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para acelerar tu transformación digital<br />
            <span className="text-blue-200">con Google Cloud Platform?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Podemos ayudarte a diseñar una arquitectura cloud que potencie tu negocio con IA y analytics avanzado.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Explorar soluciones Google Cloud <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Google;
