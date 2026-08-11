import type { FC, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  Shared bits                                                               */
/* -------------------------------------------------------------------------- */

const ArrowIcon: FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
  >
    <path d="M5 15.5L15 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.875 5.5H15V13.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Card variants                                                             */
/* -------------------------------------------------------------------------- */

const FeatureCardLink: FC<FeatureCard> = ({ href, badgeIcon, badgeLabel, title, description }) => (
  <a
    href={href}
    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#060607]/10 bg-white p-8 no-underline transition-all duration-200 hover:border-[#ff5100]/40 hover:shadow-[0_8px_30px_-12px_rgba(6,6,7,0.15)]"
  >
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff5100]/25 bg-[#ff5100]/5 px-3 py-1.5 text-[#ff5100]">
        {badgeIcon}
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em]">{badgeLabel}</span>
      </div>
      <h3 className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-[#060607]">
        {title}
      </h3>
      <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-[#060607]/60">{description}</p>
    </div>
    <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#060607]">
      Learn more
      <ArrowIcon />
    </span>
  </a>
);

const MiniCardLink: FC<MiniCard> = ({ href, icon, title, description }) => (
  <a
    href={href}
    className="group flex h-full flex-col rounded-xl border border-[#060607]/10 bg-white p-5 no-underline transition-all duration-200 hover:border-[#ff5100]/40 hover:shadow-[0_8px_30px_-12px_rgba(6,6,7,0.15)]"
  >
    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#060607]/[0.04] text-[#060607] transition-colors duration-200 group-hover:bg-[#ff5100]/10 group-hover:text-[#ff5100]">
      {icon}
    </div>
    <p className="text-[15px] font-semibold text-[#060607]">{title}</p>
    <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[#060607]/55">{description}</p>
    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#060607]/70 group-hover:text-[#ff5100]">
      Read more
      <ArrowIcon />
    </span>
  </a>
);

const TallCardLink: FC<TallCard> = ({ href, icon, title, description, dark, ctaLabel }) => (
  <a
    href={href}
    className={
      dark
        ? "group col-span-full flex min-h-[220px] flex-col rounded-xl bg-[#060607] p-5 no-underline transition-all duration-200 hover:bg-[#0f0f10] sm:min-h-[240px] sm:p-6"
        : "group flex h-full flex-col p-1 no-underline transition-colors duration-200 sm:p-2"
    }
  >
    {icon && (
      <div
        className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 ${
          dark
            ? "bg-white/10 text-white"
            : "bg-transparent text-[#060607] group-hover:text-[#ff5100]"
        }`}
      >
        {icon}
      </div>
    )}
    <h4 className={`text-[15px] font-semibold ${dark ? "text-white" : "text-[#060607]"}`}>{title}</h4>
    <p className={`mt-1.5 flex-1 text-[13px] leading-relaxed ${dark ? "text-white/50" : "text-[#060607]/55"}`}>
      {description}
    </p>
    {dark ? (
      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#ff5100]">
        {ctaLabel}
        <ArrowIcon />
      </span>
    ) : (
      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#060607]/70 group-hover:text-[#ff5100]">
        Read more
        <ArrowIcon />
      </span>
    )}
  </a>
);

/* -------------------------------------------------------------------------- */
/*  Icons                                                                     */
/* -------------------------------------------------------------------------- */

const icons = {
  genAi: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  consulting: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  agents: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 8V4H8" />
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M2 12h20" />
      <path d="M12 2v20" />
    </svg>
  ),
  rag: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  chatbots: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  llm: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  vision: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  nlp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  voice: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
    </svg>
  ),
  fineTuning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  conversational: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
  ),
  fullService: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  predictive: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  whiteLabel: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  dedicatedTeam: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const genAiMiniCards: MiniCard[] = [
  {
    href: "/services/ai-agent-development-services",
    icon: icons.agents,
    title: "AI Agents",
    description: "Autonomous agents that reason, plan, and execute complex workflows.",
  },
  {
    href: "/services/rag-development-company",
    icon: icons.rag,
    title: "RAG Systems",
    description: "RAG systems that connect LLMs to your business data for accurate answers.",
  },
  {
    href: "/services/ai-chatbot-development-company",
    icon: icons.chatbots,
    title: "AI Chatbots",
    description: "Intelligent chatbots for customer support, lead gen, and internal ops.",
  },
  {
    href: "/services/llm-development-services",
    icon: icons.llm,
    title: "LLM Development",
    description: "Custom LLM apps, fine-tuned models, and enterprise AI assistants.",
  },
];

const consultingMiniCards: MiniCard[] = [
  {
    href: "/services/computer-vision-development-company",
    icon: icons.vision,
    title: "Computer Vision",
    description: "Object detection, OCR, classification, and visual inspection systems.",
  },
  {
    href: "/services/nlp-development-services",
    icon: icons.nlp,
    title: "NLP & Text AI",
    description: "Text classification, NER, summarization, and semantic search.",
  },
  {
    href: "/services/voice-ai-agent-development",
    icon: icons.voice,
    title: "Voice AI",
    description: "Voice assistants for customer service, call workflows, and apps.",
  },
  {
    href: "/services/fine-tuned-llm-development-services",
    icon: icons.fineTuning,
    title: "Model Fine-Tuning",
    description: "Domain-specific model fine-tuning with LoRA and QLoRA techniques.",
  },
];

const tallCards: TallCard[] = [

  {
    href: "/case-studies",
    title: "See our work in action",
    description: "50+ AI systems shipped across healthcare, legal, e-commerce, and education.",
    dark: true,
    ctaLabel: "View case studies",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

const ServicesGrid: FC = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#fafafa] p-4 sm:gap-6 sm:p-6 md:p-10" id="svc-cards">
      {/* Row 1: Generative AI feature + AI Agents / RAG / Chatbots / LLM minis */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <FeatureCardLink
          href="/services/generative-ai-development-services"
          badgeIcon={icons.genAi}
          badgeLabel="Generative AI"
          title="Build intelligent products powered by large language models."
          description="LLM-powered apps, copilots, content engines, code assistants, and custom AI workflows designed for production."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {genAiMiniCards.map((card) => (
            <MiniCardLink key={card.href} {...card} />
          ))}
        </div>
      </div>

      {/* Row 2: Computer Vision / NLP / Voice / Fine-Tuning minis + Consulting feature */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-2 gap-4 sm:gap-6 lg:order-1">
          {consultingMiniCards.map((card) => (
            <MiniCardLink key={card.href} {...card} />
          ))}
        </div>
        <div className="order-1 h-full lg:order-2">
          <FeatureCardLink
            href="/services/ai-consulting-services"
            badgeIcon={icons.consulting}
            badgeLabel="Strategy & Consulting"
            title="From AI strategy to production, we own the full lifecycle."
            description="Readiness assessment, architecture design, build, and deployment. One team, zero handoffs, real business outcomes."
          />
        </div>
      </div>

      {/* Row 3: Tall cards */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-7">
        {tallCards.map((card) => (
          <TallCardLink key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;