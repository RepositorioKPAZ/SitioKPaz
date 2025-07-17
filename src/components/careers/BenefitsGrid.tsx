
import { Card } from "@/components/ui/card";
import { benefits } from "@/data/jobsData";

export const BenefitsGrid = () => {
  return (
    <div className="grid md:grid-cols-5 gap-6 mb-16">
      {benefits.map((benefit, index) => (
        <Card key={index} className="text-center p-6 border border-gray-200 hover:border-[#2e4bce]/30 hover:shadow-xl transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <benefit.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-3 text-sm leading-tight group-hover:text-[#2e4bce] transition-colors duration-300">{benefit.title}</h3>
          <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
        </Card>
      ))}
    </div>
  );
};
