// src/types/index.ts
import { ReactNode } from "react";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  iconName: "linkedin" | "instagram" | "facebook" | "twitter" | "github";
}

export interface AgencyStat {
  value: string;
  label: string;
  description?: string;
}

export interface AgencyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  stats: AgencyStat[];
  socialLinks: SocialLink[];
  navLinks: NavLink[];
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  href: string;
  badge: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: ServiceFeature[];
  deliverables: string[];
  techStack: string[];
  featured?: boolean;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  client: string;
  industry: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  results: CaseStudyResult[];
  tags: string[];
  techStack: string[];
  featured?: boolean;
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  count?: string;
  tags: string[];
  footnote?: string;
  highlight?: boolean;
  avatar?: string;
}

export interface TechStackItem {
  name: string;
  category: "AI & LLMs" | "Vector DBs & Search" | "Frameworks & Runtime" | "Cloud & Security";
  description: string;
  iconName?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  metric?: string;
  avatar?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  service: string;
  message: string;
}