
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Star } from "lucide-react";

export const NombreSection = () => {
  return (
    <section className="mb-20">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-8 h-8 bg-[#2e4bce] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-sm font-bold">3</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">El por qué de nuestro nombre</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Nuestro nombre no es casualidad. Es una síntesis de quiénes somos, de dónde venimos y hacia dónde queremos ir.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-[#2e4bce] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#2e4bce]" />
                  Nos sentimos KPaces
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Somos una comunidad de personas capaces, comprometidas y con fortalezas diversas. 
                  Nos sentimos KPaces de impulsar a nuestros clientes, agregando valor real a través 
                  del conocimiento, la experiencia y la cercanía.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#2e4bce] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#2e4bce]" />
                  Un mensaje de equilibrio
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  El componente "Paz" refleja nuestra forma de trabajar: cercana, colaborativa, 
                  orientada a resultados, pero también al respeto, la empatía y la sostenibilidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#2e4bce] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#2e4bce]" />
                  Un homenaje con sentido
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  KPaz nace del nombre Karin Paz, una hermosa joven con Síndrome de Down, hija de uno de los fundadores, 
                  cuya historia nos recuerda cada día que la tecnología debe estar al servicio de las personas.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#2e4bce]/10 to-slate-900/10 rounded-xl p-6">
            <p className="text-lg text-gray-800 leading-relaxed font-medium text-center">
              KPaz no solo es nuestro nombre. Es nuestro compromiso: usar la tecnología con propósito, 
              poner a las personas al centro y construir un futuro más humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
