
import { Heart, Users, Target, Lightbulb } from "lucide-react";

export const RazonDeSerPillars = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] rounded-lg flex items-center justify-center flex-shrink-0">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Tecnología Humana</h3>
          <p className="text-gray-600 text-sm">Desarrollamos soluciones que priorizan las personas y sus necesidades reales.</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-[#2e4bce] rounded-lg flex items-center justify-center flex-shrink-0">
          <Target className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Impacto Real</h3>
          <p className="text-gray-600 text-sm">Medimos nuestro éxito por el valor tangible que generamos para nuestros clientes.</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-gradient-to-br from-[#2e4bce] to-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Conexión de Talentos</h3>
          <p className="text-gray-600 text-sm">Unimos a los mejores profesionales para crear equipos excepcionales.</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 transition-colors shadow-sm">
        <div className="w-12 h-12 bg-gradient-to-br from-sky-300 to-[#2e4bce] rounded-lg flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Innovación Continua</h3>
          <p className="text-gray-600 text-sm">Buscamos constantemente nuevas formas de resolver desafíos complejos.</p>
        </div>
      </div>
    </div>
  );
};
