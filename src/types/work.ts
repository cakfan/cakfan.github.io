export type WorkTier = 1 | 2 | 3;
export type WorkCategory = "client-work" | "engineering" | "experiment";

export interface WorkMetric {
  label: string;
  value: string;
}

export interface WorkItemTranslations {
  tagline?: string;
  metric?: WorkMetric;
  context?: string;
  approach?: string;
  challenges?: string[];
  results?: string;
  clientMeta?: {
    address?: string;
    hours?: string;
    phone?: string;
  };
}

export interface WorkItem {
  slug: string;
  tier: WorkTier;
  category: WorkCategory;
  title: string;
  tagline: string;
  metric?: WorkMetric;
  context?: string;
  approach?: string;
  challenges?: string[];
  results?: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  clientMeta?: {
    address?: string;
    hours?: string;
    phone?: string;
  };
  translations?: {
    id?: WorkItemTranslations;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  bullets: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  positioningTagline: string;
  availability: string;
  social: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  cvUrl: string;
}
