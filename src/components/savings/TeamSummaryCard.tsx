
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMember } from "@/hooks/useSavingsCalculator";
import { formatCurrency, getRoleLabel, getSeniorityLabel, calculateTeamTotalMembers } from "@/utils/formatters";
import { roles, seniorities } from "@/data/calculatorData";

interface TeamSummaryCardProps {
  teamMembers: TeamMember[];
}

export const TeamSummaryCard = React.memo(({ teamMembers }: TeamSummaryCardProps) => {
  const totalMembers = calculateTeamTotalMembers(teamMembers);

  return (
    <Card className="border-2 border-blue-100 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del equipo</h3>
        <div className="space-y-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-between items-center text-sm">
              <span className="text-gray-700">
                {member.quantity}x {getRoleLabel(member.role, roles)} ({getSeniorityLabel(member.seniority, seniorities)})
              </span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between items-center font-medium">
              <span>Total profesionales:</span>
              <span className="text-[#2e4bce]">
                {totalMembers}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

TeamSummaryCard.displayName = 'TeamSummaryCard';
