export type ServiceCategory =
  | "consulting"
  | "development"
  | "design"
  | "marketing"
  | "support";

export interface Service {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  category: ServiceCategory;
  features: string[];
  technologies: Technology[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  faq: FAQItem[];
  order: number;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud";
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSummary {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  category: ServiceCategory;
}

export interface CreateServiceInput {
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  category: ServiceCategory;
  features: string[];
  technologies: Technology[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  faq: FAQItem[];
  order?: number;
}
