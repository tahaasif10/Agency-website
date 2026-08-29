// src/lib/data/agency.ts
import { AgencyInfo } from "@/types";

export const agencyData: AgencyInfo = {
  name: "Fostyn",
  legalName: "Fostyn Ltd.",
  tagline: "Code with AI that thinks, edits, and runs natively in production.",
  description:
    "We build custom AI infrastructure, enterprise LLM workflows, autonomous agents, and RAG architectures that run directly within your operations with zero handoffs and maximum data control.",
  email: "info@fostyn.com",
  phone: "021 332110198",
  address: "Karachi, Pakistan",
  stats: [
    {
      value: "50+",
      label: "AI Systems Deployed",
      description: "In production across fintech, healthcare, and enterprise SaaS.",
    },
    {
      value: "99.9%",
      label: "Uptime & Accuracy",
      description: "Guaranteed SLA for enterprise RAG and agentic workflows.",
    },
    {
      value: "3.5x",
      label: "Average ROI",
      description: "Delivered within the first 90 days of deployment.",
    },
    {
      value: "0",
      label: "Vendor Locks",
      description: "You own 100% of code, fine-tuned weights, and IP.",
    },
  ],
  socialLinks: [
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      iconName: "linkedin",
    },
    {
      href: "https://twitter.com",
      label: "X (Twitter)",
      iconName: "twitter",
    },
    {
      href: "https://github.com",
      label: "GitHub",
      iconName: "github",
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      iconName: "instagram",
    },
  ],
  navLinks: [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};
