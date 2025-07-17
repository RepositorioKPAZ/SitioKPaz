
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Service } from "@/types/services";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'y');
  
  return (
    <Card 
      key={index} 
      className="group hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] border-0 shadow-lg bg-white/70 backdrop-blur-sm overflow-hidden relative hover:border-[#2e4bce]/20"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2e4bce]/0 via-transparent to-[#2e4bce]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Top Border Animation */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2e4bce] to-[#1e3a9e] group-hover:w-full transition-all duration-700"></div>
      
      <CardHeader className="pb-6 relative z-10">
        <div className="flex items-start space-x-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2e4bce] to-[#1e3a9e] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
            <service.icon className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2e4bce] transition-colors duration-300">
              {service.title}
            </CardTitle>
            <div className="px-4 py-2 bg-gradient-to-r from-[#2e4bce]/10 to-[#2e4bce]/5 rounded-lg mb-4">
              <p className="text-sm font-semibold text-[#2e4bce] leading-tight">
                {service.impact}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 relative z-10">
        <CardDescription className="text-gray-700 leading-relaxed text-base mb-6">
          {service.description}
        </CardDescription>
        
        <Link to={`/servicios/${serviceSlug}`}>
          <Button 
            variant="outline" 
            className="w-full border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white transition-all duration-300 group/btn"
          >
            Conocer más 
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
