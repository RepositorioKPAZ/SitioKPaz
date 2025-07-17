
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface AllianceExpertiseProps {
  partnerName: string;
  expertise: {
    years: string;
    projects: string;
    team: string;
    certifications: string;
  };
}

export const AllianceExpertise = ({ partnerName, expertise }: AllianceExpertiseProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-[#2e4bce] border-blue-200 font-medium">
            <Users className="w-4 h-4 mr-2" />
            Nuestro expertise con {partnerName}
          </Badge>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Experiencia comprobada
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{expertise.years}</h3>
              <p className="text-gray-600">de experiencia</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{expertise.projects}</h3>
              <p className="text-gray-600">proyectos exitosos</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{expertise.team}</h3>
              <p className="text-gray-600">especialistas certificados</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{expertise.certifications}</h3>
              <p className="text-gray-600">certificaciones activas</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
