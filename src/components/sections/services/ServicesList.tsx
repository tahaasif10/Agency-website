import type { FC, ReactNode } from "react";
import {
  ArrowUpRight,
  AudioLines,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cpu,
  Database,
  Gauge,
  MessageSquareQuote,
  MessageSquareText,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Card, CardIcon } from "@/components/ui/Card";

interface MiniCard {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureCard {
  href: string;
  badgeIcon: ReactNode;
  badgeLabel: string;
  title: string;
  description: string;
}

interface TallCard {
  href: string;
  icon?: ReactNode;
  title: string;
  description: string;
  dark?: boolean;
  ctaLabel?: string;
}

const ArrowIcon: FC<{ className?: string }> = ({ className = "" }) => (
  <ArrowUpRight className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`} />
);

const FeatureCardLink: FC<FeatureCard> = ({ href, badgeIcon, badgeLabel, title, description }) => (
  <a href={href} className="group block h-full no-underline">
    <Card className="h-full gap-5 p-5 sm:p-6">
      <div className="flex flex-col gap-2.5">
        <CardIcon highlight>{badgeIcon}</CardIcon>
        {badgeLabel ? (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
            {badgeLabel}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[1.7rem]">{title}</h3>
        <p className="max-w-[38ch] text-[14px] leading-relaxed text-mist">{description}</p>
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        Learn more
        <ArrowIcon />
      </span>
    </Card>
  </a>
);

const MiniCardLink: FC<MiniCard> = ({ href, icon, title, description }) => (
  <a href={href} className="group block h-full no-underline">
    <Card className="h-full gap-3 p-4 sm:p-4.5">
      <CardIcon>{icon}</CardIcon>
      <div className="flex flex-col gap-1.5">
        <p className="text-[15px] font-semibold tracking-tight text-ink">{title}</p>
        <p className="text-[13px] leading-relaxed text-mist">{description}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink/70 group-hover:text-brand">
        Read more
        <ArrowIcon />
      </span>
    </Card>
  </a>
);

const TallCardLink: FC<TallCard> = ({ href, icon, title, description, dark, ctaLabel }) => (
  <a href={href} className={dark ? "group col-span-full block h-full no-underline" : "group block h-full no-underline"}>
    <Card
      className={
        dark
          ? "h-full min-h-55 overflow-hidden bg-gradient-to-br from-[#0b0b0c] via-[#050505] to-[#ff5b1f]/30 p-5 text-white shadow-[0_18px_54px_-20px_rgba(255,91,31,0.42)] sm:min-h-60 sm:p-6"
          : "h-full p-4 sm:p-5"
      }
    >
      {icon ? (
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-white/10 text-white" : "bg-surface-2 text-ink"}`}>
          {icon}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col">
        <h4 className={`text-base font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>{title}</h4>
        <p className={`mt-2 text-[13px] leading-relaxed ${dark ? "text-white/70" : "text-mist"}`}>{description}</p>
        {dark ? (
          <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-white/55">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        ) : null}
      </div>

      <span className={`mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] ${dark ? "text-brand" : "text-ink/70 group-hover:text-brand"}`}>
        {dark ? ctaLabel : "Read more"}
        <ArrowIcon className={dark ? "text-brand" : "text-current"} />
      </span>
    </Card>
  </a>
);

const icons = {
  genAi: <Sparkles className="h-5 w-5" />,
  consulting: <BriefcaseBusiness className="h-5 w-5" />,
  agents: <Bot className="h-5 w-5" />,
  rag: <Database className="h-5 w-5" />,
  chatbots: <MessageSquareText className="h-5 w-5" />,
  llm: <BrainCircuit className="h-5 w-5" />,
  vision: <Cpu className="h-5 w-5" />,
  nlp: <MessageSquareQuote className="h-5 w-5" />,
  voice: <AudioLines className="h-5 w-5" />,
  fineTuning: <Zap className="h-5 w-5" />,
  workflow: <Workflow className="h-5 w-5" />,
  systems: <Network className="h-5 w-5" />,
  infrastructure: <Gauge className="h-5 w-5" />,
  modernization: <Building2 className="h-5 w-5" />,
  security: <ShieldCheck className="h-5 w-5" />,
};

const genAiMiniCards: MiniCard[] = [
  {
    href: "",
    icon: icons.agents,
    title: "AI Chatbots & Conversational Support",
    description: "Support bots built around what customers actually ask, not a generic FAQ script — with a human handoff that never feels like a wall.",
  },
  {
    href: "",
    icon: icons.rag,
    title: "LLM & RAG Systems",
    description: "Retrieval pipelines that connect your models to your own data, so answers come from what you know — not a guess.",
  },
  {
    href: "/services/ai-chatbot-development-company",
    icon: icons.chatbots,
    title: "AI Workflow Automation",
    description: "We wire AI into the tools you already run — CRMs, helpdesks, databases — so automation works inside real workflows, not a demo.",
  },
  {
    href: "/services/llm-development-services",
    icon: icons.llm,
    title: "AI Infrastructure & LLMOps",
    description: "Deployment, monitoring, and evaluation that keep AI systems reliable in production, long after launch day.",
  },
];

const consultingMiniCards: MiniCard[] = [
  {
    href: "/services/computer-vision-development-company",
    icon: icons.vision,
    title: "Computer Vision",
    description: "Detection, OCR, and inspection systems built for real-world conditions, not a clean demo dataset.",
  },
  {
    href: "/services/nlp-development-services",
    icon: icons.nlp,
    title: "Natural Language Systems",
    description: "AI assistants and language workflows tuned for real business context, messy inputs, and usable output.",
  },
  {
    href: "/services/voice-ai-agent-development",
    icon: icons.voice,
    title: "Voice AI Agents",
    description: "Human-sounding conversational experiences that fit your current tools, workflows, and customer journeys.",
  },
  {
    href: "/services/fine-tuned-llm-development-services",
    icon: icons.fineTuning,
    title: "Fine-Tuning & Optimization",
    description: "Smaller, faster, cheaper models tuned for real tasks — built to perform where your business actually needs it.",
  },
];

const tallCards: TallCard[] = [
  {
    href: "/case-studies",
    title: "See our work in action",
    description: "Every engagement starts with a working prototype, not a pitch deck. Talk to us about your project and we'll show you how we'd approach it.",
    dark: true,
    ctaLabel: "View case studies",
  },
];

const ServicesGrid: FC = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#fafafa] p-4 sm:gap-6 sm:p-6 md:p-10" id="svc-cards">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <FeatureCardLink
          href="/services/generative-ai-development-services"
          badgeIcon={icons.genAi}
          badgeLabel="AI agents"
          title="AI Agent Development"
          description="Autonomous agents that plan, act, and complete real multi-step work — not scripted chat flows. We build the reasoning, tool access, and guardrails an agent needs to operate reliably inside your systems, with a clear handoff back to a human when it matters."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {genAiMiniCards.map((card) => (
            <MiniCardLink key={card.title} {...card} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-4 sm:gap-6 lg:order-1">
          {consultingMiniCards.map((card) => (
            <MiniCardLink key={card.title} {...card} />
          ))}
        </div>
        <div className="order-1 h-full lg:order-2">
          <FeatureCardLink
            href="/services/ai-consulting-services"
            badgeIcon={icons.consulting}
            badgeLabel="Strategy & consulting"
            title="From AI strategy to production, we own the full lifecycle."
            description="Readiness assessment, architecture design, build, and deployment. One team, zero handoffs, real business outcomes."
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-7">
        {tallCards.map((card) => (
          <TallCardLink key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;