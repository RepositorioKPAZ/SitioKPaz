
import { LucideIcon } from "lucide-react";

export interface CollaborationServiceData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
  };
  whatIs: {
    title: string;
    description: string;
    features: string[];
  };
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  whyChoose: {
    title: string;
    reasons: string[];
  };
  whenToUse: {
    title: string;
    scenarios: Array<{
      title: string;
      description: string;
    }>;
  };
  includes: string[];
  technologies: Array<{
    name: string;
    category: string;
  }>;
  useCases: Array<{
    title: string;
    description: string;
    results: string[];
  }>;
  experts: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}
