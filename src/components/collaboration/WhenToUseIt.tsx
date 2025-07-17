
import { CheckCircle } from "lucide-react";

interface WhenToUseItProps {
  useCases: string[];
}

export const WhenToUseIt = ({ useCases }: WhenToUseItProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          ¿Cuándo conviene usarlo?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
