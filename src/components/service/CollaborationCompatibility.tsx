
import { CheckCircle, X } from "lucide-react";

interface CollaborationModel {
  name: string;
  compatible: boolean;
  description: string;
}

interface CollaborationCompatibilityProps {
  models: CollaborationModel[];
  title: string;
  subtitle: string;
}

export const CollaborationCompatibility = ({ models, title, subtitle }: CollaborationCompatibilityProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Modelo de Colaboración
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Compatibilidad
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {models.map((model, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{model.name}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {model.compatible ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-6 w-6 text-gray-400 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600 text-sm">{model.description}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            ¿No estás seguro de qué modelo necesitas?{" "}
            <a href="#contacto" className="text-[#2e4bce] font-medium hover:underline">
              Conversemos y diseñemos la mejor estrategia para tu proyecto
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
