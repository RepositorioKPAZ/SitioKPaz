
import { Globe } from "lucide-react";

export const PresenciaSection = () => {
  return (
    <section className="mb-20">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-8 h-8 bg-[#2e4bce] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-sm font-bold">4</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra presencia</h2>
          <div className="bg-gradient-to-r from-[#2e4bce]/5 to-slate-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-[#2e4bce]" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">+170 KPaces</h3>
                <p className="text-gray-700">en toda Latinoamérica</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Con sede en Santiago (<strong>Chile</strong>), Lima (<strong>Perú</strong>) y Bogotá (<strong>Colombia</strong>), y presencia de clientes en toda Latinoamérica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
