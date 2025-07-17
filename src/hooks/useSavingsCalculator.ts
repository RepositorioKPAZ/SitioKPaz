
import { useState } from "react";
import { useTeamManagement } from "./useTeamManagement";
import { useSavingsCalculations } from "./useSavingsCalculations";

export { type TeamMember } from "./useTeamManagement";

export const useSavingsCalculator = () => {
  const [projectDuration, setProjectDuration] = useState([12]);
  
  const {
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember
  } = useTeamManagement();

  const {
    totalInternalCost,
    totalSavings,
    totalOutsourcingCost,
    savingsPercentage,
    getTeamSummary
  } = useSavingsCalculations(teamMembers, projectDuration);

  return {
    projectDuration,
    setProjectDuration,
    teamMembers,
    addTeamMember,
    removeTeamMember,
    updateTeamMember,
    totalInternalCost,
    totalSavings,
    totalOutsourcingCost,
    savingsPercentage,
    getTeamSummary
  };
};
