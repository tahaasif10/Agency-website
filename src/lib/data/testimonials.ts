// src/lib/data/testimonials.ts
import { Testimonial, FaqItem } from "@/types";

export const testimonialsData: Testimonial[] = [
  {
    id: "nexus-fintech",
    quote:
      "Apex AI delivered a production financial monitoring system that stopped millions in fraud losses while dropping false positive alerts by 62%. They own the full pipeline with absolute technical rigor.",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "Nexus Financial Technologies",
    metric: "62% Fraud Reduction",
  },
  {
    id: "omni-health",
    quote:
      "Our physicians went from spending 3 hours every night charting to completing documentation automatically before leaving the room. Apex built a true HIPAA-compliant ambient assistant that transformed our clinics.",
    name: "Dr. Elena Rostova",
    role: "Chief Medical Information Officer",
    company: "OmniHealth Medical Network",
    metric: "3.2x Onboarding Speed",
  },
  {
    id: "cloudpulse-saas",
    quote:
      "We brought in Apex to build a custom RAG support copilot. Within two weeks of launch, our support backlog completely vanished and average ticket resolution dropped from days to 4 minutes.",
    name: "David Chen",
    role: "Head of Customer Experience",
    company: "CloudPulse SaaS",
    metric: "40% Fewer Escalations",
  },
  {
    id: "lexis-counsel",
    quote:
      "Most AI agencies sell a quick API wrap that breaks on real documents. Apex built a custom legal parser that understands our contract guidelines with 99%+ accuracy.",
    name: "Sarah Jenkins",
    role: "Managing Partner",
    company: "Lexis Counsel Group",
    metric: "5 Hours Saved/Contract",
  },
];

export const faqData: FaqItem[] = [
  {
    id: "data-privacy",
    question: "How do you handle data privacy and security?",
    answer:
      "We enforce strict enterprise data isolation. Your data is processed exclusively within your private VPC or on-premise infrastructure. We implement zero-data-retention agreements and never train public models on your proprietary inputs.",
  },
  {
    id: "timeline",
    question: "What is your typical project timeline?",
    answer:
      "Production Proof of Concept (PoC) builds typically take 2–3 weeks. Full-scale production deployment—including evaluation suites, integrations, and deployment monitoring—is delivered in 6–10 weeks.",
  },
  {
    id: "code-ownership",
    question: "Who owns the code and fine-tuned model weights?",
    answer:
      "You own 100% of all intellectual property, source code, data pipelines, and fine-tuned model weights. We hand over the entire codebase with zero ongoing vendor locks.",
  },
  {
    id: "maintenance",
    question: "Do you provide post-launch maintenance and SLA support?",
    answer:
      "Yes. We offer dedicated SLA support packages covering prompt drift monitoring, model updates, latency optimization, and 24/7 incident response for critical AI infrastructure.",
  },
  {
    id: "build-vs-buy",
    question: "How do you decide between third-party APIs and open-source models?",
    answer:
      "During our discovery phase, we evaluate your latency, privacy, and cost requirements. When speed to market is key, we leverage frontier APIs (OpenAI/Anthropic) with strict guardrails. When data privacy or token costs dominate, we deploy fine-tuned open-weights models (Llama 3/DeepSeek) on dedicated servers.",
  },
];
