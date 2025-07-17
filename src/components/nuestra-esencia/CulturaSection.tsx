
import { Handshake, Shield, Award, Network } from "lucide-react";

export const CulturaSection = () => {
  return (
    <section className="mb-20">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-8 h-8 bg-[#2e4bce] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-sm font-bold">2</span>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra cultura</h2>
          
          {/* Highlighted quote */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-[#2e4bce]/10 via-sky-50 to-[#2e4bce]/5 rounded-2xl p-8 border-l-4 border-[#2e4bce]">
              <blockquote className="text-2xl font-medium text-gray-800 leading-relaxed mb-4">
                "No entregamos recursos. Formamos equipos con propósito."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-[#2e4bce] to-sky-400 rounded-full"></div>
            </div>
          </div>

          {/* Main content */}
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4 mb-8">
            <p>
              En KPaz valoramos la cercanía, la responsabilidad y el profesionalismo. Nos tomamos en serio 
              el bienestar de quienes trabajan con nosotros y buscamos relaciones duraderas, tanto con 
              nuestros clientes como con nuestros colaboradores.
            </p>
            <p>
              Trabajamos en red, nos apoyamos en la confianza mutua y creemos en liderar con el ejemplo.
            </p>
          </div>

          {/* Cultural values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Cercanía</h3>
                </div>
                <p className="text-gray-600 text-sm">Construimos relaciones auténticas y duraderas con cada persona.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-[#2e4bce] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Responsabilidad</h3>
                </div>
                <p className="text-gray-600 text-sm">Asumimos nuestros compromisos con seriedad y dedicación.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2e4bce] to-sky-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Profesionalismo</h3>
                </div>
                <p className="text-gray-600 text-sm">Mantenemos los más altos estándares en todo lo que hacemos.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#2e4bce]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-300 to-[#2e4bce] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Network className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Trabajo en Red</h3>
                </div>
                <p className="text-gray-600 text-sm">Colaboramos y nos apoyamos mutuamente como una verdadera red.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
