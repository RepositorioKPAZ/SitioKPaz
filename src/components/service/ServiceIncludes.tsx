
import { CheckCircle } from "lucide-react";

interface ServiceIncludesProps {
  serviceIncludes: string[];
}

export const ServiceIncludes = ({ serviceIncludes }: ServiceIncludesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Qué incluye el servicio?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {serviceIncludes.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
