
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AllianceHeroProps {
  partner: {
    name: string;
    color: string;
    heroTitle: string;
    heroSubtitle: string;
  };
}

export const AllianceHero = ({ partner }: AllianceHeroProps) => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(46,75,206,0.04),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-lg mr-4`}>
              <span className="text-white font-bold text-xl">
                {partner.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <span className="text-4xl font-bold text-gray-400 mx-4">+</span>
            <div className="w-16 h-16 bg-gradient-to-br from-[#2e4bce] via-[#1e3a9e] to-[#0f2657] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">K</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {partner.heroTitle}
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            {partner.heroSubtitle}
          </p>
          
          <Button 
            size="lg"
            className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Conversemos <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
