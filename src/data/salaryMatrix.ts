
export const salaryMatrix = {
  'software-developer': { junior: 65000, mid: 85000, senior: 110000, lead: 140000 },
  'software-architect': { junior: 90000, mid: 120000, senior: 150000, lead: 180000 },
  'devops-engineer': { junior: 70000, mid: 90000, senior: 115000, lead: 145000 },
  'qa-tester': { junior: 55000, mid: 70000, senior: 90000, lead: 115000 },
  'data-scientist': { junior: 80000, mid: 105000, senior: 130000, lead: 160000 },
  'data-engineer': { junior: 75000, mid: 95000, senior: 120000, lead: 150000 },
  'cloud-engineer': { junior: 75000, mid: 95000, senior: 125000, lead: 155000 },
  'product-manager': { junior: 85000, mid: 110000, senior: 140000, lead: 170000 },
  'ui-ux-designer': { junior: 60000, mid: 80000, senior: 100000, lead: 130000 },
  'mobile-developer': { junior: 70000, mid: 90000, senior: 115000, lead: 145000 }
} as const;

export type RoleType = keyof typeof salaryMatrix;
export type SeniorityType = keyof typeof salaryMatrix[RoleType];
