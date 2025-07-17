import { CheckCircle, Clock, Users, Heart, Code, Database, Server, User, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

// Import optimized role images
import softwareDeveloperImg from "@/assets/roles/software-developer.webp";
import softwareArchitectImg from "@/assets/roles/software-architect.webp";
import devopsEngineerImg from "@/assets/roles/devops-engineer.webp";
import qaTesterImg from "@/assets/roles/qa-tester.webp";
import dataScientistImg from "@/assets/roles/data-scientist.webp";
import cloudEngineerImg from "@/assets/roles/cloud-engineer.webp";
import automationDeveloperImg from "@/assets/roles/automation-developer.webp";
import businessAnalystImg from "@/assets/roles/business-analyst.webp";

export const BenefitsSection = () => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const benefits = [
    {
      icon: CheckCircle,
      title: "Talento validado, desde el día uno",
      subtitle: "Creamos equipos listos para impactar.",
      description: "Seleccionamos profesionales con experiencia comprobada, habilidades actualizadas y actitud colaborativa, listos para integrarse y aportar desde el primer momento."
    },
    {
      icon: Clock,
      title: "Flexibilidad sin fricciones",
      subtitle: "Tú defines el ritmo, nosotros armamos el equipo.",
      description: "Adaptamos la composición, el tamaño y los perfiles según las necesidades cambiantes de tu negocio, sin burocracia ni demoras."
    },
    {
      icon: Users,
      title: "Acompañamiento que marca la diferencia",
      subtitle: "No solo enviamos talento: lo potenciamos.",
      description: "Monitoreamos desempeño, facilitamos retroalimentación y damos soporte continuo para asegurar resultados sostenibles en el tiempo."
    },
    {
      icon: Heart,
      title: "Cultura KPaz: tecnología con propósito",
      subtitle: "Equipos comprometidos con lo humano y lo digital.",
      description: "Más que skills técnicos, llevamos una forma de trabajar colaborativa, cercana y alineada con los valores de nuestros clientes."
    }
  ];

  const roles = [
    { 
      name: "Software\nDeveloper", 
      image: softwareDeveloperImg,
      description: "Expertos en desarrollo de aplicaciones web, móviles y sistemas. Dominan múltiples lenguajes y frameworks para crear soluciones escalables y eficientes."
    },
    { 
      name: "Software\nArchitect", 
      image: softwareArchitectImg,
      description: "Diseñan la estructura técnica de sistemas complejos. Definen patrones, tecnologías y mejores prácticas para garantizar escalabilidad y mantenibilidad."
    },
    { 
      name: "DevOps\nEngineer", 
      image: devopsEngineerImg,
      description: "Especialistas en automatización, CI/CD y gestión de infraestructura. Optimizan procesos de desarrollo y deployment para acelerar la entrega de valor."
    },
    { 
      name: "QA\nTester", 
      image: qaTesterImg,
      description: "Garantizan la calidad del software mediante testing manual y automatizado. Identifican bugs, validan funcionalidades y aseguran experiencias excepcionales."
    },
    { 
      name: "Data Scientist\n& Engineer", 
      image: dataScientistImg,
      description: "Transforman datos en insights accionables. Desarrollan modelos de machine learning y pipelines de datos para impulsar decisiones basadas en información."
    },
    { 
      name: "Cloud\nEngineer", 
      image: cloudEngineerImg,
      description: "Expertos en plataformas cloud (AWS, Azure, GCP). Diseñan, implementan y mantienen infraestructuras escalables, seguras y cost-effective en la nube."
    },
    { 
      name: "Automation\nDeveloper", 
      image: automationDeveloperImg,
      description: "Crean robots y workflows inteligentes para automatizar procesos repetitivos. Utilizan RPA, IA y herramientas low-code para maximizar eficiencia operacional."
    },
    { 
      name: "Business\nAnalyst", 
      image: businessAnalystImg,
      description: "Conectan necesidades de negocio con soluciones tecnológicas. Analizan procesos, definen requerimientos y facilitan la comunicación entre stakeholders."
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-white rounded-3xl p-12 relative overflow-hidden mb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,75,206,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(46,75,206,0.05),transparent_50%)]"></div>
      
      <div className="relative">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-[#2e4bce]/10 text-[#2e4bce] border-[#2e4bce]/20">
            <User className="w-4 h-4 mr-2" />
            Talento Adecuado
          </Badge>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            El talento adecuado no solo ejecuta:
            <span className="block text-[#2e4bce]">transforma.</span>
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            En KPaz, formar equipos tecnológicos es simple, ágil y estratégico. Conectamos personas expertas, cultura colaborativa y acompañamiento continuo para generar resultados reales, desde el primer día.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-white/40 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#2e4bce] rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-[#2e4bce] font-semibold mb-3 text-lg">
                    {benefit.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-12">
          <div className="text-center mb-10">
            <h4 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Personas clave para proyectos que avanzan.
            </h4>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              En KPaz, no solo entregamos tecnología: conformamos equipos que entienden el negocio, colaboran con agilidad y generan impacto real. Estos son algunos de los perfiles que marcan la diferencia en nuestros proyectos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center">
            {roles.map((role, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-gradient-to-br from-[#2e4bce]/20 via-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-[#2e4bce]/20 hover:border-[#2e4bce]/60 transition-all duration-500 hover:scale-110 hover:z-10 hover:shadow-2xl hover:shadow-[#2e4bce]/30 text-center group relative transform w-full max-w-[140px] cursor-pointer"
                onClick={() => setExpandedRole(expandedRole === index ? null : index)}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2e4bce]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#2e4bce] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-3xl bg-white border-2 border-gray-200 overflow-hidden group-hover:scale-110 group-hover:border-[#2e4bce]/40 transition-all duration-500 flex items-center justify-center shadow-xl relative">
                    <OptimizedImage 
                      src={role.image} 
                      alt={`Professional ${role.name.replace('\n', ' ')}`}
                      className="w-full h-full rounded-3xl"
                      objectFit="cover"
                      width={96}
                      height={96}
                      sizes="96px"
                      placeholder="blur"
                    />
                    {/* Overlay gradient for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2e4bce]/20 to-transparent rounded-3xl"></div>
                  </div>
                  <p className="text-gray-800 text-xs font-bold leading-tight group-hover:text-[#2e4bce] transition-colors duration-300 whitespace-pre-line">
                    {role.name}
                  </p>
                  
                  {/* Description slide-down */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedRole === index 
                      ? 'max-h-40 opacity-100 mt-3' 
                      : 'max-h-0 opacity-0 mt-0'
                  }`}>
                    <div className="bg-slate-100/80 backdrop-blur-sm rounded-2xl p-2 border border-[#2e4bce]/20 shadow-lg">
                      <p className="text-[9px] text-gray-700 leading-tight">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
