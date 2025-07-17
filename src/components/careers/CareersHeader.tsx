import { Badge } from "@/components/ui/badge";
export const CareersHeader = () => {
  return <div className="text-center mb-16">
      <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
        🚀 Carreras en KPaz
      </Badge>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Únete al Futuro de la
        <span className="block text-[#2e4bce]">Tecnología en Latinoamérica</span>
      </h2>
      
      <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
        Forma parte de un equipo excepcional que está transformando la industria tecnológica. Trabajamos con las mejores empresas del mundo desde Latinoamérica.
      </p>
    </div>;
};