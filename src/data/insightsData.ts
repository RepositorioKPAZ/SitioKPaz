
import { InsightArticle } from './insights/types';
import { microsoftInsights } from './insights/microsoftInsights';
import { uipathInsights } from './insights/uipathInsights';
import { outsystemsInsights } from './insights/outsystemsInsights';
import { genexusInsights } from './insights/genexusInsights';
import { salesforceInsights } from './insights/salesforceInsights';
import { rocketbotInsights } from './insights/rocketbotInsights';
import { koreaiInsights } from './insights/koreaiInsights';
import { googleInsights } from './insights/googleInsights';

// Combine all insights into a single array
export const insights: InsightArticle[] = [
  ...microsoftInsights,
  ...googleInsights,
  ...uipathInsights,
  ...outsystemsInsights,
  ...genexusInsights,
  ...salesforceInsights,
  ...rocketbotInsights,
  ...koreaiInsights
];

// Function to get all insights
export const getAllInsights = (): InsightArticle[] => {
  return insights;
};

// Function to get insights by partner
export const getInsightsByPartner = (partner: string): InsightArticle[] => {
  return insights.filter(insight => insight.partner === partner);
};

// Export individual partner insights for direct access
export {
  microsoftInsights,
  googleInsights,
  uipathInsights,
  outsystemsInsights,
  genexusInsights,
  salesforceInsights,
  rocketbotInsights,
  koreaiInsights
};
