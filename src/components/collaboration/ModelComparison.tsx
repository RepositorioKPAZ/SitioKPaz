
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComparisonData {
  model: string;
  timeToStart: string;
  commitment: string;
  bestFor: string;
  responsibility: string;
}

interface ModelComparisonProps {
  currentModel: string;
  comparisons: ComparisonData[];
}

export const ModelComparison = ({ currentModel, comparisons }: ModelComparisonProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Comparación con otros modelos
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Modelo</th>
                <th className="px-6 py-4 text-left font-semibold">Tiempo de inicio</th>
                <th className="px-6 py-4 text-left font-semibold">Compromiso</th>
                <th className="px-6 py-4 text-left font-semibold">Ideal para</th>
                <th className="px-6 py-4 text-left font-semibold">Responsabilidad</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                    comparison.model === currentModel ? 'bg-blue-50 font-medium' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className={comparison.model === currentModel ? 'text-[#2e4bce] font-semibold' : 'text-gray-900'}>
                      {comparison.model}
                      {comparison.model === currentModel && ' ⭐'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{comparison.timeToStart}</td>
                  <td className="px-6 py-4 text-gray-700">{comparison.commitment}</td>
                  <td className="px-6 py-4 text-gray-700">{comparison.bestFor}</td>
                  <td className="px-6 py-4 text-gray-700">{comparison.responsibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
