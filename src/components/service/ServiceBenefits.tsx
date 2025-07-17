
import { 
  TrendingUp, 
  Zap, 
  DollarSign, 
  ArrowUp, 
  Link, 
  BarChart3, 
  Trophy,
  Users,
  User,
  WifiOff,
  RotateCcw,
  Clock,
  Smartphone,
  Shield,
  CheckCircle,
  Lock,
  Settings,
  TrendingDown,
  Bug
} from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

const getBenefitIcon = (benefit: string) => {
  const lowerBenefit = benefit.toLowerCase();
  
  // Performance and efficiency icons
  if (lowerBenefit.includes('eficiencia') || lowerBenefit.includes('productividad')) {
    return Zap;
  }
  if (lowerBenefit.includes('aceleración') && (lowerBenefit.includes('ciclos') || lowerBenefit.includes('release'))) {
    return Zap;
  }
  if (lowerBenefit.includes('deployment') && (lowerBenefit.includes('rápido') || lowerBenefit.includes('ci/cd'))) {
    return Zap;
  }
  
  // Cost and savings icons
  if (lowerBenefit.includes('reducción de costos') || lowerBenefit.includes('reducción') && lowerBenefit.includes('costos')) {
    return DollarSign;
  }
  if (lowerBenefit.includes('eliminación') && lowerBenefit.includes('errores') || lowerBenefit.includes('reducción') && lowerBenefit.includes('errores')) {
    return TrendingDown;
  }
  if (lowerBenefit.includes('disminución') && lowerBenefit.includes('tickets') || lowerBenefit.includes('reducción') && lowerBenefit.includes('tickets')) {
    return TrendingDown;
  }
  if (lowerBenefit.includes('menor dependencia') || lowerBenefit.includes('reducción') && lowerBenefit.includes('dependencia')) {
    return TrendingDown;
  }
  if (lowerBenefit.includes('flexibilidad') && (lowerBenefit.includes('cambios') || lowerBenefit.includes('evoluciones'))) {
    return Clock;
  }
  if (lowerBenefit.includes('costos') || lowerBenefit.includes('reducción') && lowerBenefit.includes('tiempo')) {
    return Clock;
  }
  if (lowerBenefit.includes('costos') || lowerBenefit.includes('ahorro')) {
    return DollarSign;
  }
  
  // Growth and scaling icons
  if (lowerBenefit.includes('escalabilidad') && lowerBenefit.includes('automática') && lowerBenefit.includes('sin intervención')) {
    return Settings;
  }
  if (lowerBenefit.includes('escalabilidad') || lowerBenefit.includes('crecimiento')) {
    return ArrowUp;
  }
  
  // Integration and connectivity icons
  if (lowerBenefit.includes('integración') || lowerBenefit.includes('conexión') || lowerBenefit.includes('sincronización')) {
    return Link;
  }
  if (lowerBenefit.includes('sincronización')) {
    return RotateCcw;
  }
  
  // ROI and business value icons  
  if (lowerBenefit.includes('roi') || lowerBenefit.includes('retorno') || lowerBenefit.includes('inversión')) {
    return BarChart3;
  }
  if (lowerBenefit.includes('forecasting') || lowerBenefit.includes('precisión') && lowerBenefit.includes('forecasting')) {
    return DollarSign;
  }
  
  // Competitive advantage icons
  if (lowerBenefit.includes('ventaja') || lowerBenefit.includes('competitiv')) {
    return Trophy;
  }
  
  // Mobile and accessibility icons
  if (lowerBenefit.includes('offline') || lowerBenefit.includes('sin conexión')) {
    return WifiOff;
  }
  if (lowerBenefit.includes('móvil') || lowerBenefit.includes('bolsillo') || lowerBenefit.includes('24/7')) {
    return Smartphone;
  }
  
  // Quality and security icons
  if (lowerBenefit.includes('disponibilidad') && lowerBenefit.includes('garantizada') && lowerBenefit.includes('sla')) {
    return Shield;
  }
  if (lowerBenefit.includes('bugs') && (lowerBenefit.includes('reducción') || lowerBenefit.includes('críticos'))) {
    return Bug;
  }
  if (lowerBenefit.includes('optimización') && lowerBenefit.includes('procesos') && lowerBenefit.includes('evidencia')) {
    return Settings;
  }
  if (lowerBenefit.includes('bugs') || lowerBenefit.includes('defectos') || lowerBenefit.includes('calidad')) {
    return Shield;
  }
  if (lowerBenefit.includes('eliminación') && lowerBenefit.includes('downtime')) {
    return CheckCircle;
  }
  if (lowerBenefit.includes('seguridad') || lowerBenefit.includes('compliance')) {
    return Lock;
  }
  if (lowerBenefit.includes('automatización') || lowerBenefit.includes('validación')) {
    return Settings;
  }
  
  // Team and collaboration icons
  if (lowerBenefit.includes('democratización') || lowerBenefit.includes('usuarios de negocio')) {
    return User;
  }
  if (lowerBenefit.includes('equipos') || lowerBenefit.includes('campo')) {
    return Users;
  }
  
  // Default icon
  return TrendingUp;
};

export const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Beneficios clave
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = getBenefitIcon(benefit);
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <IconComponent className="w-8 h-8 text-[#2e4bce] mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
