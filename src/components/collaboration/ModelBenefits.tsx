
import { Zap, Shield, Users, TrendingUp } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  icon: "zap" | "shield" | "users" | "trending";
}

interface ModelBenefitsProps {
  benefits: Benefit[];
}

const iconMap = {
  zap: Zap,
  shield: Shield,
  users: Users,
  trending: TrendingUp
};

export const ModelBenefits = ({ benefits }: ModelBenefitsProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Principales beneficios del modelo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
