
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Calculator, TrendingUp, Users, Plus, X, Clock } from "lucide-react";
import { TeamMember } from "@/hooks/useSavingsCalculator";
import { useState } from "react";

interface TeamConfigurationProps {
  projectDuration: number[];
  setProjectDuration: (value: number[]) => void;
  hiringDelay: number;
  setHiringDelay: (value: number) => void;
  teamMembers: TeamMember[];
  addTeamMember: () => void;
  removeTeamMember: (id: string) => void;
  updateTeamMember: (id: string, field: keyof TeamMember, value: string | number) => void;
  availableRoles?: string[];
  availableSeniorities?: string[];
  loading?: boolean;
  error?: string | null;
}

export const TeamConfiguration = ({
  projectDuration,
  setProjectDuration,
  hiringDelay,
  setHiringDelay,
  teamMembers,
  addTeamMember,
  removeTeamMember,
  updateTeamMember,
  availableRoles = [],
  availableSeniorities = [],
  loading = false,
  error = null
}: TeamConfigurationProps) => {
  const [hasHiringDelay, setHasHiringDelay] = useState(hiringDelay > 0);

  // Roles de fallback si no hay datos de la API
  const fallbackRoles = [
    'Software Developer',
    'QA Tester', 
    'DevOps Engineer',
    'Business Analyst',
    'Data Scientist',
    'Cloud Engineer',
    'Software Architect',
    'UX/UI Designer'
  ];

  // Seniorities de fallback si no hay datos de la API
  const fallbackSeniorities = ['junior', 'mid', 'senior'];

  const roles = availableRoles.length > 0 ? availableRoles : fallbackRoles;
  const seniorities = availableSeniorities.length > 0 ? availableSeniorities : fallbackSeniorities;

  // Actualizar hiring delay cuando cambia el switch
  const handleHiringDelayChange = (checked: boolean) => {
    setHasHiringDelay(checked);
    if (!checked) {
      setHiringDelay(0);
    } else if (hiringDelay === 0) {
      setHiringDelay(3); // Valor por defecto
    }
  };

  if (loading) {
    return (
      <div className="p-8 space-y-8">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-600">Cargando datos disponibles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 space-y-8">
        <div className="text-center py-8">
          <div className="text-red-600 mb-2">⚠️ Error al cargar datos</div>
          <p className="text-sm text-gray-600">{error}</p>
          <p className="text-xs text-gray-500 mt-2">Usando datos de respaldo</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      {/* Team Members */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#2e4bce]" />
            Miembros del equipo
          </Label>
          {teamMembers.length < 5 && (
            <Button
              onClick={addTeamMember}
              variant="outline"
              size="sm"
              className="text-[#2e4bce] border-[#2e4bce] hover:bg-[#2e4bce] hover:text-white"
            >
              <Plus className="w-4 h-4 mr-1" />
              Agregar rol
            </Button>
          )}
        </div>

        {teamMembers.map((member, index) => (
          <div key={member.id} className="bg-gray-50 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Rol #{index + 1}</h4>
              {teamMembers.length > 1 && (
                <Button
                  onClick={() => removeTeamMember(member.id)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Rol
                </Label>
                <Select 
                  value={member.role} 
                  onValueChange={(value) => updateTeamMember(member.id, 'role', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Seniority
                </Label>
                <Select 
                  value={member.seniority} 
                  onValueChange={(value) => updateTeamMember(member.id, 'seniority', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {seniorities.map((seniority) => (
                      <SelectItem key={seniority} value={seniority}>
                        {seniority}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Cantidad
                </Label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={member.quantity}
                  onChange={(e) => updateTeamMember(member.id, 'quantity', parseInt(e.target.value) || 1)}
                  className="border-2 border-gray-200 focus:border-[#2e4bce]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Duration */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#2e4bce]" />
          Duración del proyecto: {projectDuration[0]} meses
        </Label>
        <Slider
          value={projectDuration}
          onValueChange={setProjectDuration}
          max={36}
          min={1}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>1 mes</span>
          <span>36+ meses</span>
        </div>
      </div>

      {/* Hiring Delay */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#2e4bce]" />
            ¿Tiene demoras en la contratación interna?
          </Label>
          <Switch
            checked={hasHiringDelay}
            onCheckedChange={handleHiringDelayChange}
            className="data-[state=checked]:bg-[#2e4bce]"
          />
        </div>

        {hasHiringDelay && (
          <div className="ml-7 flex items-center gap-4">
            <Label className="text-sm font-medium text-gray-700">
              Tiempo de demora
            </Label>
            <Select 
              value={hiringDelay.toString()} 
              onValueChange={(value) => setHiringDelay(parseInt(value))}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 mes</SelectItem>
                <SelectItem value="2">2 meses</SelectItem>
                <SelectItem value="3">3 meses</SelectItem>
                <SelectItem value="4">4 meses</SelectItem>
                <SelectItem value="6">6 meses</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};
