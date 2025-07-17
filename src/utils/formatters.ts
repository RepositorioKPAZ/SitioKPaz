
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getRoleLabel = (roleValue: string, roles: { value: string; label: string }[]) => {
  return roles.find(role => role.value === roleValue)?.label || roleValue;
};

export const getSeniorityLabel = (seniorityValue: string, seniorities: { value: string; label: string }[]) => {
  return seniorities.find(seniority => seniority.value === seniorityValue)?.label || seniorityValue;
};

export const calculateTeamTotalMembers = (teamMembers: Array<{ quantity: number }>) => {
  return teamMembers.reduce((total, member) => total + member.quantity, 0);
};

export const formatProjectDuration = (months: number) => {
  if (months === 1) return '1 mes';
  if (months < 12) return `${months} meses`;
  if (months === 12) return '1 año';
  return `${Math.floor(months / 12)} año${Math.floor(months / 12) > 1 ? 's' : ''} ${months % 12 > 0 ? `y ${months % 12} mes${months % 12 > 1 ? 'es' : ''}` : ''}`;
};
