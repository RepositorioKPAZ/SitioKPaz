
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils/formatters";

interface SavingsDisplayProps {
  totalSavings: number;
  totalInternalCost: number;
  totalOutsourcingCost: number;
  savingsPercentage: number;
}

export const SavingsDisplay = React.memo(({
  totalSavings,
  totalInternalCost,
  totalOutsourcingCost,
  savingsPercentage
}: SavingsDisplayProps) => {
  return (
    <Card className="border-2 border-[#1e3a9e] bg-gradient-to-br from-[#1e3a9e] to-[#0f2557] shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white text-center">
          Resultados del Cálculo
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-sm text-gray-600 mb-2">Ahorro Total</div>
            <div className="text-4xl font-bold text-green-600">
              {formatCurrency(totalSavings)}
            </div>
            <div className="text-lg text-green-500 font-semibold mt-2">
              {savingsPercentage}% de ahorro
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-xs text-gray-500 mb-1">Costo Interno</div>
              <div className="text-xl font-bold text-red-600">
                {formatCurrency(totalInternalCost)}
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-xs text-gray-500 mb-1">Costo con KPaz</div>
              <div className="text-xl font-bold text-blue-600">
                {formatCurrency(totalOutsourcingCost)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

SavingsDisplay.displayName = 'SavingsDisplay';
