
import { useMemo } from "react";
import { salaryMatrix, RoleType, SeniorityType } from "@/data/salaryMatrix";
import { TeamMember } from "./useTeamManagement";

export const useSavingsCalculations = (teamMembers: TeamMember[], projectDuration: number[]) => {
  // Memoizar los cálculos principales para evitar re-cálculos innecesarios
  const calculations = useMemo(() => {
    const totalInternalCost = teamMembers.reduce((total, member) => {
      const salary = salaryMatrix[member.role as RoleType]?.[member.seniority as SeniorityType] || 85000;
      return total + (salary * member.quantity * (projectDuration[0] / 12));
    }, 0);

    const savingsPercentage = 27.8;
    const totalSavings = totalInternalCost * (savingsPercentage / 100);
    const totalOutsourcingCost = totalInternalCost - totalSavings;

    return {
      totalInternalCost,
      totalSavings,
      totalOutsourcingCost,
      savingsPercentage
    };
  }, [teamMembers, projectDuration]);

  // Memoizar el resumen del equipo por separado
  const getTeamSummary = useMemo(() => {
    return teamMembers.map(member => ({
      ...member,
      monthlySalary: salaryMatrix[member.role as RoleType]?.[member.seniority as SeniorityType] || 85000
    }));
  }, [teamMembers]);

  return {
    ...calculations,
    getTeamSummary
  };
};
