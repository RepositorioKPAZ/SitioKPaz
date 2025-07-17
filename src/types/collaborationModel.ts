import { LucideIcon } from "lucide-react";

export interface CollaborationComparison {
  model: string;
  timeToStart: string;
  commitment: string;
  bestFor: string;
  responsibility: string;
}

export interface CollaborationBenefit {
  title: string;
  description: string;
  icon: "zap" | "shield" | "users" | "trending";
}

export interface CollaborationExample {
  industry: string;
  description: string;
  results: string;
}

export interface CollaborationFAQ {
  question: string;
  answer: string;
}

export interface CollaborationModelData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  gradient: string;
  useCases: string[];
  benefits: CollaborationBenefit[];
  examples: CollaborationExample[];
  whyKPaz: {
    title: string;
    description: string;
    highlights: string[];
  };
  faqs: CollaborationFAQ[];
  cta: {
    title: string;
    description: string;
  };
}