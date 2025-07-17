
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

// Import optimized expert images
import expert1 from "@/assets/experts/expert-1.webp";
import expert2 from "@/assets/experts/expert-2.webp";
import expert3 from "@/assets/experts/expert-3.webp";
import expert4 from "@/assets/experts/expert-4.webp";
import expert5 from "@/assets/experts/expert-5.webp";
import expert6 from "@/assets/experts/expert-6.webp";
import expert7 from "@/assets/experts/expert-7.webp";
import expert8 from "@/assets/experts/expert-8.webp";

interface ServiceExpertsProps {
  expertRoles: string[];
}

export const ServiceExperts = ({ expertRoles }: ServiceExpertsProps) => {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  // Array de imágenes de personas profesionales optimizadas
  const expertImages = [
    expert1,
    expert2,
    expert3,
    expert4,
    expert5,
    expert6,
    expert7,
    expert8
  ];

  // Mapeo de descripciones por rol
  const roleDescriptions: { [key: string]: string } = {
    // Development Roles
    "Frontend Developers": "Especialistas en crear interfaces de usuario atractivas y funcionales usando React, Angular, Vue.js y tecnologías web modernas.",
    "Arquitectos de Software": "Profesionales que diseñan la arquitectura y estructura técnica de sistemas complejos, definiendo patrones y mejores prácticas.",
    "Front End Developers": "Especialistas en crear interfaces de usuario atractivas y funcionales usando React, Angular, Vue.js y tecnologías web modernas.",
    "Backend Developers": "Expertos en desarrollo del lado del servidor, APIs, bases de datos y lógica de negocio usando Node.js, Python, Java, .NET.",
    "Back End Developers": "Expertos en desarrollo del lado del servidor, APIs, bases de datos y lógica de negocio usando Node.js, Python, Java, .NET.",
    "Full Stack Developers": "Desarrolladores versátiles que dominan tanto frontend como backend, capaces de crear aplicaciones completas end-to-end.",
    "Mobile Developers": "Especialistas en desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android con React Native, Flutter, Swift, Kotlin.",
    "Low-Code Developers": "Expertos en plataformas low-code como Power Platform, Salesforce y OutSystems para acelerar el desarrollo de aplicaciones.",
    
    // DevOps & Infrastructure
    "DevOps Engineers": "Especialistas en automatización, CI/CD, infraestructura como código y gestión de deployments usando AWS, Azure, Docker, Kubernetes.",
    "Cloud Architects": "Expertos en diseño de arquitecturas cloud escalables y seguras en AWS, Azure, GCP con optimización de costos y performance.",
    "SRE Specialists": "Site Reliability Engineers enfocados en disponibilidad, performance y confiabilidad de sistemas críticos.",
    "Infrastructure Engineers": "Especialistas en gestión de infraestructura, servidores, redes y sistemas operativos para aplicaciones empresariales.",
    "Security Engineers": "Expertos en ciberseguridad, implementación de controles de seguridad y evaluación de vulnerabilidades en sistemas.",
    
    // Data & AI
    "Data Scientists": "Profesionales que transforman datos en insights usando machine learning, estadística y análisis predictivo con Python, R.",
    "ML Engineers": "Ingenieros especializados en implementar y desplegar modelos de machine learning en producción con MLOps.",
    "Data Engineers": "Expertos en pipelines de datos, ETL, big data y arquitecturas de datos usando Spark, Kafka, data warehouses.",
    "AI Researchers": "Investigadores enfocados en desarrollo de algoritmos de inteligencia artificial y técnicas avanzadas de ML.",
    "AI/ML Engineers": "Ingenieros que combinan conocimientos de AI/ML con skills de ingeniería para crear soluciones inteligentes escalables.",
    
    // Quality Assurance
    "QA Engineers": "Especialistas en aseguramiento de calidad que diseñan estrategias de testing y garantizan la calidad del software.",
    "Test Automation Engineers": "Expertos en automatización de pruebas usando Selenium, Cypress, y frameworks de testing para acelerar QA.",
    "Performance Testing Specialists": "Especialistas en pruebas de performance, carga y stress testing para garantizar escalabilidad de aplicaciones.",
    "Security Testing Experts": "Expertos en testing de seguridad, penetration testing y evaluación de vulnerabilidades en aplicaciones.",
    "Mobile QA Engineers": "Especialistas en testing de aplicaciones móviles, compatibility testing y UX testing en dispositivos móviles.",
    "API Testing Specialists": "Expertos en testing de APIs, servicios web, integration testing y validation de contratos de APIs.",
    "QA Automation": "Profesionales enfocados en automatización de procesos de QA y creación de frameworks de testing.",
    
    // Design & UX
    "UX/UI Designers": "Diseñadores enfocados en experiencia de usuario e interfaces intuitivas usando Figma, Adobe XD, investigación UX.",
    "UI/UX Designers": "Diseñadores enfocados en experiencia de usuario e interfaces intuitivas usando Figma, Adobe XD, investigación UX.",
    "Product Designers": "Diseñadores que combinan research, UX y UI para crear productos digitales centrados en el usuario.",
    "User Researchers": "Especialistas en investigación de usuarios, usability testing y análisis de comportamiento para mejorar UX.",
    "UX/UI Mobile Designers": "Diseñadores especializados en experiencias móviles nativas, patrones de interacción y usabilidad móvil.",
    "Visual Designers": "Especialistas en diseño visual, branding, sistemas de diseño y creación de identidades visuales coherentes.",
    
    // Business & Analysis
    "Business Analysts": "Profesionales que conectan necesidades de negocio con soluciones tecnológicas, definiendo requerimientos y procesos.",
    "Solution Architects": "Arquitectos que diseñan soluciones completas integrando múltiples tecnologías para resolver problemas de negocio.",
    "Product Managers": "Gestores de producto que definen roadmaps, priorizan features y coordinan equipos para crear productos exitosos.",
    "Tech Leads": "Líderes técnicos que guían equipos de desarrollo, toman decisiones arquitectónicas y mentorean desarrolladores.",
    "Process Analysts": "Especialistas en análisis y optimización de procesos de negocio para identificar oportunidades de mejora.",
    
    // Automation & RPA
    "RPA Developers": "Desarrolladores especializados en automatización robótica de procesos usando UiPath, Power Automate, Blue Prism.",
    "Automation Developers": "Especialistas en creación de soluciones de automatización para optimizar procesos operacionales repetitivos.",
    
    // Specialized
    "Database Administrators": "Administradores de bases de datos especialistas en performance, seguridad y mantenimiento de sistemas de datos.",
    "Integration Specialists": "Expertos en integración de sistemas, APIs, middleware y soluciones de conectividad entre aplicaciones.",
    "Change Management": "Especialistas en gestión del cambio organizacional y adopción de nuevas tecnologías y procesos.",
    "Training Specialists": "Profesionales enfocados en capacitación técnica, desarrollo de contenidos educativos y transferencia de conocimiento.",
    "Monitoring Specialists": "Expertos en monitoreo de sistemas, observabilidad, alerting y análisis de performance de aplicaciones.",
    "Performance Engineers": "Ingenieros especializados en optimización de performance de aplicaciones y sistemas distribuidos."
  };

  // Función para obtener descripción de un rol
  const getRoleDescription = (role: string): string => {
    return roleDescriptions[role] || "Profesional especializado con experiencia comprobada en su área de expertise, listo para contribuir al éxito de tu proyecto.";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-[#2e4bce] rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestro equipo de expertos
          </h2>
          <p className="text-gray-600 mt-4">
            Profesionales certificados listos para tu proyecto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertRoles.map((role, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => setExpandedRole(expandedRole === index ? null : index)}
            >
              <div className="mb-4">
                <Avatar className="w-16 h-16 mx-auto ring-2 ring-[#2e4bce]/20 group-hover:ring-[#2e4bce]/40 transition-all duration-300">
                  <AvatarImage 
                    src={expertImages[index % expertImages.length]} 
                    alt={role}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#2e4bce] text-white text-lg font-semibold">
                    {role.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <span className="text-gray-700 font-medium text-sm leading-relaxed block mb-2">
                {role}
              </span>
              
              {/* Description slide-down */}
              <div className={`overflow-hidden transition-all duration-500 ease-out ${
                expandedRole === index 
                  ? 'max-h-32 opacity-100 mt-3' 
                  : 'max-h-0 opacity-0 mt-0'
              }`}>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-[10px] text-gray-600 leading-tight">
                    {getRoleDescription(role)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
