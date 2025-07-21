
import { useState, useEffect } from "react";
import { perfilesService, Perfil } from "@/services/api";

export interface TeamMember {
  id: string;
  role: string;
  seniority: string;
  quantity: number;
}

export const useTeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: '1', role: 'software-developer', seniority: 'mid', quantity: 2 }
  ]);
  
  const [availableRoles, setAvailableRoles] = useState<string[]>([]);
  const [availableSeniorities, setAvailableSeniorities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar roles y seniorities desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🔄 Iniciando carga de datos desde la API...');
        
        // Verificar salud del servidor primero
        console.log('🏥 Verificando salud del servidor...');
        const isHealthy = await perfilesService.healthCheck();
        console.log('Servidor saludable:', isHealthy);
        
        if (!isHealthy) {
          throw new Error('Servidor no responde');
        }
        
        // Cargar roles únicos
        console.log('📋 Cargando roles únicos...');
        const uniqueRoles = await perfilesService.getUnique();
        const roles = uniqueRoles.map(profile => profile.rol);
        console.log('Roles obtenidos de la API:', roles);
        setAvailableRoles(roles);
        
        // Cargar seniorities únicos
        console.log('👥 Cargando seniorities únicos...');
        const uniqueSeniorities = await perfilesService.getSeniorities();
        const seniorities = uniqueSeniorities.map(profile => profile.seniority);
        console.log('Seniorities obtenidos de la API:', seniorities);
        setAvailableSeniorities(seniorities);
        
        console.log('✅ Datos cargados exitosamente');
        console.log('Roles disponibles:', roles);
        console.log('Seniorities disponibles:', seniorities);
        
      } catch (err) {
        console.error('❌ Error cargando datos:', err);
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);
        
        // Fallback a datos hardcodeados si hay error
        console.log('🔄 Usando datos de fallback...');
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
        setAvailableRoles(fallbackRoles);
        
        const fallbackSeniorities = ['junior', 'mid', 'senior'];
        setAvailableSeniorities(fallbackSeniorities);
        
        console.log('✅ Datos de fallback aplicados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addTeamMember = () => {
    if (teamMembers.length < 5) {
      const defaultRole = availableRoles.length > 0 ? availableRoles[0] : 'software-developer';
      const defaultSeniority = availableSeniorities.length > 0 ? availableSeniorities[0] : 'mid';
      console.log('➕ Agregando miembro con rol:', defaultRole, 'seniority:', defaultSeniority);
      setTeamMembers(prev => [...prev, {
        id: Date.now().toString(),
        role: defaultRole,
        seniority: defaultSeniority,
        quantity: 1
      }]);
    }
  };

  const removeTeamMember = (id: string) => {
    console.log('➖ Removiendo miembro con ID:', id);
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  const updateTeamMember = (id: string, field: keyof TeamMember, value: string | number) => {
    console.log('✏️ Actualizando miembro:', id, field, value);
    setTeamMembers(prev => prev.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  return {
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember,
    availableRoles,
    availableSeniorities,
    loading,
    error
  };
};
