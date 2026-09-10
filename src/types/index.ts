export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: "Live Product" | "In Development" | "Beta";
  url: string;
  externalUrl?: string;
  featured: boolean;
  category: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  badgeColor?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  features: string[];
  gridSpan: "col-span-1" | "col-span-1 md:col-span-2" | "col-span-1 md:col-span-2 lg:col-span-2" | "col-span-1 md:col-span-1 lg:col-span-1";
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}
