
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react";

interface JobCardProps {
  job: {
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
    featured?: boolean;
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 group ${job.featured ? 'border-2 border-[#2e4bce] bg-gradient-to-r from-blue-50/50 to-white' : 'border border-gray-200 hover:border-[#2e4bce]/30'}`}>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2e4bce] transition-colors">
                {job.title}
              </h3>
              {job.featured && (
                <Badge className="bg-[#2e4bce] text-white">
                  Destacado
                </Badge>
              )}
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {job.description}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, reqIndex) => (
                <Badge key={reqIndex} variant="outline" className="text-xs border-[#2e4bce]/30 text-[#2e4bce]">
                  {req}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              size="lg" 
              className="bg-[#2e4bce] hover:bg-[#1e3a9e] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Aplicar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white px-6 py-3 rounded-xl"
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
