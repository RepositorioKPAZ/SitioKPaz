
import { Badge } from "@/components/ui/badge";

export const InsightsHeader = () => {
  return (
    <div className="text-center mb-16">
      <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
        💡 Insights Tecnológicos
      </Badge>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Conocimiento que Impulsa
        <span className="block text-[#2e4bce]">la Innovación</span>
      </h2>
      
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
        Mantente al día con las últimas tendencias tecnológicas, casos de éxito y estrategias que están transformando el panorama empresarial.
      </p>
    </div>
  );
};
