
import { Badge } from "@/components/ui/badge";
import { KeyStats } from "../KeyStats";

export const ServicesHeader = () => {
  return (
    <div className="text-center mb-20">
      <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
        💼 Soluciones Empresariales
      </Badge>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Servicios que Impulsan la
        <span className="block text-[#2e4bce]">Innovación Empresarial</span>
      </h2>
      
      <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
        Conectamos tecnología, talento y estrategia en servicios diseñados específicamente para líderes IT y responsables de área.
      </p>
      
      <KeyStats />
    </div>
  );
};
