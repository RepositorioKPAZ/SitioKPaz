
import { useState } from "react";

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

  const addTeamMember = () => {
    if (teamMembers.length < 5) {
      setTeamMembers(prev => [...prev, {
        id: Date.now().toString(),
        role: 'software-developer',
        seniority: 'mid',
        quantity: 1
      }]);
    }
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  const updateTeamMember = (id: string, field: keyof TeamMember, value: string | number) => {
    setTeamMembers(prev => prev.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  return {
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember
  };
};
