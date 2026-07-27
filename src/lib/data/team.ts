// src/lib/data/team.ts
import { TeamMember, Milestone } from "@/types";

export const teamData: TeamMember[] = [
  {
    id: "senior-ai-engineers",
    count: "06",
    role: "Senior AI Systems Engineers",
    name: "Core Systems Engineering",
    bio: "Former engineers from leading AI labs and cloud infrastructure providers with deep expertise in PyTorch, vLLM, and agentic framework orchestration.",
    tags: ["LLM Fine-Tuning", "vLLM & Inference", "LangGraph", "Vector DBs"],
    footnote: "Every engineer on your project has shipped at least 3 production AI systems.",
    highlight: true,
  },
  {
    id: "fullstack-architects",
    count: "04",
    role: "Full-Stack Product Architects",
    name: "Interface & API Engineering",
    bio: "TypeScript and Python specialists building clean, high-performance web applications, streaming interfaces, and resilient microservices.",
    tags: ["Next.js", "React 19", "FastAPI", "PostgreSQL", "TailwindCSS"],
    footnote: "Zero handoffs—the person who scopes your architecture writes the code.",
    highlight: false,
  },
  {
    id: "mlops-security",
    count: "03",
    role: "MLOps & Security Specialists",
    name: "Infrastructure & Data Security",
    bio: "Focusing strictly on HIPAA, SOC2, and data isolation protocols. They ensure your AI models run securely on dedicated enterprise infrastructure.",
    tags: ["Docker & K8s", "SOC 2 & HIPAA", "Private VPC", "Guardrails"],
    footnote: "Your data stays isolated inside your network. We never train on client inputs.",
    highlight: false,
  },
];

export const companyMilestones: Milestone[] = [
  {
    year: "2024",
    title: "Agency Foundation & Core Focus",
    description: "Founded with a strict mission: build production AI systems that run natively inside real enterprise workloads, not superficial API wrappers.",
  },
  {
    year: "2025",
    title: "50+ Systems Milestone & Agentic AI Expansion",
    description: "Expanded engineering team and successfully deployed over 50 custom LLM, RAG, and multi-agent platforms for fintech, healthcare, and SaaS clients.",
  },
  {
    year: "2026",
    title: "Local-First & On-Premise Enterprise AI",
    description: "Pioneered local-first, quantized open-weights deployments for enterprise clients demanding total data privacy and zero cloud dependencies.",
  },
];

export const companyValues = [
  {
    title: "Production Over Demo",
    description: "We don't sell pitch decks or fragile sandboxes. What we build is tested under real load, edge cases, and continuous operation.",
  },
  {
    title: "Data Sovereignty",
    description: "Your data is your moat. We build architectures that ensure zero data leaks, zero vendor lock-in, and complete client IP ownership.",
  },
  {
    title: "Senior Hands Only",
    description: "No junior delegation. Your team consists exclusively of senior engineers who take personal accountability for shipping results.",
  },
];
