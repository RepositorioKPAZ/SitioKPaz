
import { ArrowRight } from "lucide-react";

interface ServiceUseCasesProps {
  useCases: { title: string; description: string }[];
}

export const ServiceUseCases = ({ useCases }: ServiceUseCasesProps) => {
  return (
    <section id="casos-uso" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Casos de uso típicos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-[#2e4bce]" />
                <h3 className="font-semibold text-gray-900">{useCase.title}</h3>
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
