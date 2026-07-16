export interface Project {
  name: string;
  description: string;
  demo: string | null;
  github: string;
  slug: string | null;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
}

export interface LocalBusinessItem {
  name: string;
  category: string;
  description: string;
  address: string;
  hours: string;
  phone: string;
  demo: string;
  slug: string;
}

export interface CvLocalBusinessItem {
  name: string;
  category: string;
  description: string;
  demo: string;
}
