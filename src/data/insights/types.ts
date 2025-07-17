
export interface InsightArticle {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  partner?: 'microsoft' | 'google' | 'amazon' | 'uipath' | 'rocketbot' | 'kore-ai' | 'outsystems' | 'genexus' | 'salesforce';
}
