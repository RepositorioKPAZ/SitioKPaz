
import { BaseServicePageData } from "@/components/service/BaseServicePage";
import { Service } from "@/types/services";

export const createServicePageData = (
  service: Service,
  config: {
    heroDescription: string;
    whyKeyTitle: string;
    whyKeyDescription: string;
    includes: string[];
    benefits: string[];
    useCases: { title: string; description: string }[];
    testimonial?: { text: string; author: string; company: string };
    technologies: string[];
    expertRoles: string[];
    faqs?: { question: string; answer: string }[];
    collaborationSection?: React.ReactNode;
    showServiceCTA?: boolean;
    showContactSection?: boolean;
    showFooter?: boolean;
  }
): BaseServicePageData => ({
  service,
  heroDescription: config.heroDescription,
  whyKey: {
    title: config.whyKeyTitle,
    description: config.whyKeyDescription
  },
  includes: config.includes,
  benefits: config.benefits,
  useCases: config.useCases,
  testimonial: config.testimonial,
  technologies: config.technologies,
  expertRoles: config.expertRoles,
  faqs: config.faqs,
  collaborationSection: config.collaborationSection,
  showServiceCTA: config.showServiceCTA ?? false,
  showContactSection: config.showContactSection ?? true,
  showFooter: config.showFooter ?? true
});
