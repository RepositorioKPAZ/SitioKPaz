
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Brain, BarChart3, Cog, CheckCircle, Target, Users, Award, TrendingUp, Building2, Database, Shield, Cpu, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { AmazonInsights } from "@/components/insights/AmazonInsights";

const Amazon = () => {
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

  const awsProducts = [
    {
      icon: Brain,
      name: "Amazon SageMaker",
      tagline: "Machine Learning completo desde desarrollo hasta producción",
      description: "Implementamos soluciones de ML end-to-end con SageMaker que automatizan el ciclo completo desde preparación de datos hasta deployment de modelos, reduciendo el tiempo de desarrollo de IA en un 80%.",
      ideal: "Ideal para AI & Data Science y Machine Learning Avanzado",
      color: "from-[#2e4bce] to-[#1e3a9e]"
    },
    {
      icon: Database,
      name: "Amazon Bedrock & AI Services",
      tagline: "IA generativa y servicios de inteligencia artificial listos para usar",
      description: "Desarrollamos aplicaciones inteligentes usando Bedrock con modelos foundation de última generación, integrando capacidades de procesamiento de lenguaje natural y generación de contenido empresarial.",
      ideal: "Perfecto para AI & Data Science y Generative AI",
      color: "from-blue-600 to-indigo-700"
    },
    {
      icon: BarChart3,
      name: "Amazon Redshift & Analytics",
      tagline: "Data warehouse que escala a petabytes con análisis en tiempo real",
      description: "Creamos arquitecturas de datos modernas con Redshift que procesan consultas complejas en segundos, integrando QuickSight para visualizaciones inteligentes y analytics predictivo.",
      ideal: "Enfocado en Big Data y Business Intelligence",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Cog,
      name: "AWS Lambda & Serverless",
      tagline: "Arquitecturas serverless que escalan automáticamente sin servidor",  
      description: "Desarrollamos aplicaciones cloud-native con Lambda que eliminan la gestión de infraestructura, reducen costos operativos hasta 60% y escalan automáticamente según demanda real.",
      ideal: "Ideal para Cloud Architecture y Microservices",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const whyKPaz = [
    {
      icon: Target,
      title: "Especialización AWS",
      description: "Somos AWS Partner con certificaciones avanzadas en arquitecturas cloud, machine learning y soluciones serverless para empresas."
    },
    {
      icon: Users,
      title: "Implementación end-to-end",
      description: "Te acompañamos desde la migración inicial hasta la optimización continua, asegurando máximo aprovechamiento de la nube AWS."
    },
    {
      icon: Award,
      title: "ROI comprobado",
      description: "Metodología probada que garantiza retorno de inversión medible con reducción de costos IT hasta 50% y mejora de performance."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad automática",
      description: "Arquitecturas cloud-native que se adaptan a tu demanda sin intervención manual, optimizando costos y rendimiento."
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Data Lake Inteligente con ML Integrado",
      description: "Implementación completa de data lake en S3 con SageMaker integrado que automatiza la preparación de datos, entrenamiento de modelos y generación de insights predictivos para la toma de decisiones.",
      technologies: ["Amazon S3", "SageMaker", "Redshift", "QuickSight"],
      benefits: ["85% automatización análisis", "70% mejora predicciones", "60% reducción costos almacenamiento"]
    },
    {
      icon: Cpu,
      title: "Aplicaciones Serverless con IA Generativa",
      description: "Desarrollo de aplicaciones inteligentes usando Lambda y Bedrock que procesan lenguaje natural, generan contenido automáticamente y escalan según demanda sin gestión de infraestructura.",
      technologies: ["AWS Lambda", "Amazon Bedrock", "API Gateway", "DynamoDB"],
      benefits: ["90% reducción gestión infraestructura", "80% mejora time-to-market", "50% ahorro costos operación"]
    },
    {
      icon: Database,
      title: "Analytics en Tiempo Real a Escala",
      description: "Implementación de pipelines de datos que procesan millones de eventos por segundo usando Kinesis, almacenan en Redshift y visualizan insights críticos en tiempo real con QuickSight.",
      technologies: ["Amazon Kinesis", "Redshift", "QuickSight", "EMR"],
      benefits: ["Procesamiento tiempo real", "95% disponibilidad datos", "40% mejora decisiones operativas"]
    },
    {
      icon: Shield,
      title: "Migración Cloud Completa con Seguridad",
      description: "Migración integral de infraestructura on-premise a AWS con implementación de mejores prácticas de seguridad, backup automático y disaster recovery empresarial.",
      technologies: ["EC2", "RDS", "IAM", "CloudFormation"],
      benefits: ["99.9% disponibilidad", "100% compliance seguridad", "45% reducción costos infraestructura"]
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
                  src="/lovable-uploads/072d1358-7dfd-4c2b-9031-784976a5eb0c.png" 
                  alt="Amazon logo"
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
              Potencia tu negocio<br />
              <span className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] bg-clip-text text-transparent">
                con la nube más completa del mundo
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              En KPaz, combinamos nuestra experiencia en arquitecturas cloud con el poder de Amazon Web Services para crear <strong>soluciones empresariales escalables</strong> que aprovechan machine learning avanzado, analytics en tiempo real y arquitecturas serverless.
            </p>
            
            <Button 
              size="lg"
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              Descubre el poder de AWS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* AWS Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
              <Cloud className="w-4 h-4 mr-2" />
              Amazon Web Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo mejor de AWS. <span className="text-[#2e4bce]">Implementado por KPaz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awsProducts.map((product, index) => (
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
              ¿Por qué <span className="text-[#2e4bce]">KPaz + AWS</span>?
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
              Soluciones <span className="text-[#2e4bce]">AWS</span> en acción
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre cómo implementamos el ecosistema AWS para resolver desafíos empresariales complejos.
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

      {/* Amazon Insights Section */}
      <AmazonInsights />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para acelerar tu transformación digital<br />
            <span className="text-blue-200">con la nube más confiable del mundo?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Conversemos. Podemos ayudarte a diseñar una arquitectura AWS que potencie tu negocio con IA y analytics avanzado.
          </p>
          
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#2e4bce] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleContactClick}
          >
            Explorar soluciones AWS <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Amazon;
