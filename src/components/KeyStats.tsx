
import { TrendingUp, Zap, Shield } from "lucide-react";

export const KeyStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Reducción de Costos Operacionales"
    },
    {
      icon: Zap,
      value: "5x",
      label: "Velocidad de Desarrollo"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Disponibilidad Garantizada"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex items-center justify-center mb-3">
            <stat.icon className="h-6 w-6 text-[#2e4bce] mr-2" />
            <span className="text-3xl font-bold text-[#2e4bce]">{stat.value}</span>
          </div>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
