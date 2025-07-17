
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  industry: string;
  clients: string[];
  color: string;
  icon: LucideIcon;
}

export const IndustryCard = ({ industry, clients, color, icon: Icon }: IndustryCardProps) => {
  return (
    <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:border-[#2e4bce]/30 transition-all duration-300 hover:scale-105">
      <div className="text-center mb-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#2e4bce] flex items-center justify-center">
          <Icon 
            size={32}
            className="text-white drop-shadow-sm"
            strokeWidth={1.5}
          />
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-4">{industry}</h4>
      </div>
      
      <div className="space-y-2">
        {clients.map((client, clientIndex) => (
          <div key={clientIndex} className="text-center py-2 px-4 bg-white/50 rounded-lg text-sm font-medium text-gray-700 hover:bg-white/70 transition-colors duration-200">
            {client}
          </div>
        ))}
      </div>
    </div>
  );
};
