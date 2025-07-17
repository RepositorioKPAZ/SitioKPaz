
import { Code } from "lucide-react";

interface ServiceTechnologiesProps {
  technologies: string[];
}

export const ServiceTechnologies = ({ technologies }: ServiceTechnologiesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Code className="w-12 h-12 text-[#2e4bce] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">
            Tecnologías que dominamos
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-[#2e4bce] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
