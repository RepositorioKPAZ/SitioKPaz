
import { useState } from "react";
import { useTeamManagement } from "./useTeamManagement";
import { useSavingsCalculations } from "./useSavingsCalculations";

export { type TeamMember } from "./useTeamManagement";

export const useSavingsCalculator = () => {
  const [projectDuration, setProjectDuration] = useState([12]);
  const [hiringDelay, setHiringDelay] = useState(3); // Meses de demora en contratación interna
  
  const {
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember,
    availableRoles,
    availableSeniorities,
    loading: teamLoading,
    error
  } = useTeamManagement();

  const {
    totalInternalCost,
    totalSavings,
    totalOutsourcingCost,
    savingsPercentage,
    getTeamSummary,
    loading: calculationsLoading,
    perfilesData // Exponer los datos de perfiles
  } = useSavingsCalculations(teamMembers, projectDuration, hiringDelay);

  return {
    projectDuration,
    setProjectDuration,
    hiringDelay,
    setHiringDelay,
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember,
    totalInternalCost,
    totalSavings,
    totalOutsourcingCost,
    savingsPercentage,
    getTeamSummary,
    availableRoles,
    availableSeniorities,
    loading: teamLoading || calculationsLoading,
    error,
    perfilesData // Exponer los datos de perfiles
  };
};
