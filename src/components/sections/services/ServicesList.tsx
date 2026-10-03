import type { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Motion — CSS only, so this stays a server component.                */
/* Small cards sit still until hovered/focused. Only the featured      */
/* card loops on its own. Reduced-motion users get a static frame.     */
/* ------------------------------------------------------------------ */

const CSS = `
@keyframes svc-dot{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-3px);opacity:1}}
@keyframes svc-pick{0%,30%{opacity:1}34%,100%{opacity:0}}
@keyframes svc-sweep{0%{transform:translateX(-100%);opacity:1}100%{transform:translateX(300%);opacity:1}}
@keyframes svc-bar{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.55)}}
@keyframes svc-box{0%,25%{transform:translate(4px,14px)}33%,58%{transform:translate(78px,10px)}66%,91%{transform:translate(142px,16px)}100%{transform:translate(4px,14px)}}
@keyframes svc-blink{0%,100%{opacity:1}40%{opacity:.2}}
@keyframes svc-wave{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes svc-draw{0%{stroke-dashoffset:1}65%,100%{stroke-dashoffset:0}}
@keyframes svc-s1{0%,6%{opacity:0}10%,86%{opacity:1}94%,100%{opacity:0}}
@keyframes svc-s2{0%,24%{opacity:0}28%,86%{opacity:1}94%,100%{opacity:0}}
@keyframes svc-s3{0%,42%{opacity:0}46%,86%{opacity:1}94%,100%{opacity:0}}
@keyframes svc-s4{0%,60%{opacity:0}64%,86%{opacity:1}94%,100%{opacity:0}}

.group:hover .svc-dot,.group:focus-visible .svc-dot{animation:svc-dot 1.1s ease-in-out infinite}
.group:hover .svc-pick,.group:focus-visible .svc-pick{animation:svc-pick 1.8s linear infinite}
.group:hover .svc-sweep,.group:focus-visible .svc-sweep{animation:svc-sweep 1.4s linear infinite}
.group:hover .svc-bar,.group:focus-visible .svc-bar{animation:svc-bar 1.2s ease-in-out infinite}
.group:hover .svc-box,.group:focus-visible .svc-box{animation:svc-box 4.2s ease-in-out infinite}
.group:hover .svc-blink,.group:focus-visible .svc-blink{animation:svc-blink 1.2s ease-in-out infinite}
.group:hover .svc-wave,.group:focus-visible .svc-wave{animation:svc-wave .9s ease-in-out infinite}
.group:hover .svc-draw,.group:focus-visible .svc-draw{animation:svc-draw 2.4s ease-out infinite}

.svc-live-s1{animation:svc-s1 7s linear infinite}
.svc-live-s2{animation:svc-s2 7s linear infinite}
.svc-live-s3{animation:svc-s3 7s linear infinite}
.svc-live-s4{animation:svc-s4 7s linear infinite}

@media (prefers-reduced-motion:reduce){
  [class*="svc-"]{animation:none!important}
  .svc-lit{opacity:1!important}
}
`;

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */

const ArrowIcon: FC<{ className?: string }> = ({ className = "" }) => (
  <ArrowUpRight
    className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${className}`}
  />
);

const Bar: FC<{ w: string }> = ({ w }) => (
  <span className="block h-1.5 bg-ink/10" style={{ width: w }} />
);

const DOT_GRID_STYLE = {
  backgroundImage: "radial-gradient(rgba(6,6,7,0.09) 1px, transparent 1px)",
  backgroundSize: "20px 20px",
  WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
  maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
} as const;

/* ------------------------------------------------------------------ */
/* Mini visuals (hover to play, still frame by default)                */
/* ------------------------------------------------------------------ */

// Chatbots: a question, then the reply being typed.
const ChatVisual: FC = () => (
  <div className="flex w-full max-w-[200px] flex-col gap-2">
    <div className="flex flex-col gap-1.5 self-start border border-hairline bg-surface px-2.5 py-2">
      <Bar w="64px" />
      <Bar w="40px" />
    </div>
    <div className="flex items-center gap-1 self-end bg-ink px-2.5 py-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="svc-dot block h-1 w-1 bg-white/80"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

// LLM & RAG: a query pulls from your sources, one chunk at a time.
const RagVisual: FC = () => (
  <div className="flex w-full max-w-[210px] flex-col gap-1.5">
    <div className="border border-hairline bg-surface px-2.5 py-1.5">
      <Bar w="60%" />
    </div>
    {["80%", "64%", "72%"].map((w, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="relative h-2 w-2 flex-shrink-0 bg-ink/15">
          <span
            className={`svc-pick absolute inset-0 bg-brand ${i === 0 ? "" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        </span>
        <Bar w={w} />
      </div>
    ))}
  </div>
);

// Workflow automation: a pulse travelling through connected steps.
const WorkflowVisual: FC = () => (
  <div className="flex w-full max-w-[210px] items-center">
    <span className="h-3.5 w-3.5 flex-shrink-0 border border-ink/30 bg-surface" />
    <span className="relative h-[2px] flex-1 overflow-hidden bg-ink/15">
      <span className="svc-sweep absolute inset-y-0 left-0 w-1/3 bg-brand opacity-0" />
    </span>
    <span className="h-3.5 w-3.5 flex-shrink-0 bg-brand" />
    <span className="relative h-[2px] flex-1 overflow-hidden bg-ink/15">
      <span
        className="svc-sweep absolute inset-y-0 left-0 w-1/3 bg-brand opacity-0"
        style={{ animationDelay: "0.7s" }}
      />
    </span>
    <span className="h-3.5 w-3.5 flex-shrink-0 border border-ink/30 bg-surface" />
  </div>
);

// Infrastructure & LLMOps: a monitoring strip that breathes.
const InfraVisual: FC = () => (
  <div className="flex h-16 items-end gap-1.5">
    {[40, 65, 50, 80, 55, 70, 45, 60].map((h, i) => (
      <span
        key={i}
        className={`svc-bar w-2 origin-bottom ${i === 3 ? "bg-brand" : "bg-ink/20"}`}
        style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
      />
    ))}
  </div>
);

// Computer vision: a detection box hopping between objects.
const VisionVisual: FC = () => (
  <div className="relative h-[84px] w-[200px]">
    <span className="absolute bg-ink/10" style={{ left: 12, top: 20, width: 36, height: 44 }} />
    <span className="absolute bg-ink/10" style={{ left: 82, top: 10, width: 44, height: 56 }} />
    <span className="absolute bg-ink/10" style={{ left: 152, top: 26, width: 32, height: 36 }} />
    <span
      className="svc-box absolute left-0 top-0 h-14 w-[52px] border-[1.5px] border-brand"
      style={{ transform: "translate(4px, 14px)" }}
    />
  </div>
);

// Natural language: entities picked out of running text.
const NlpVisual: FC = () => {
  const rows: { w: number; ent?: boolean }[][] = [
    [{ w: 28 }, { w: 18 }, { w: 34, ent: true }, { w: 22 }],
    [{ w: 20 }, { w: 30 }, { w: 16, ent: true }, { w: 26 }],
    [{ w: 24, ent: true }, { w: 32 }, { w: 18 }],
  ];
  let n = 0;
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((row, r) => (
        <div key={r} className="flex gap-1.5">
          {row.map((word, c) => {
            const delay = word.ent ? `${(n++ * 0.35).toFixed(2)}s` : undefined;
            return (
              <span
                key={c}
                className={`block h-2 ${word.ent ? "svc-blink bg-brand/40" : "bg-ink/10"}`}
                style={{ width: word.w, animationDelay: delay }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

// Voice AI: a waveform that starts moving.
const VoiceVisual: FC = () => {
  const heights = [0.3, 0.5, 0.8, 0.4, 0.9, 0.6, 1, 0.7, 0.45, 0.85, 0.55, 0.35, 0.65, 0.4, 0.25];
  return (
    <div className="flex h-14 items-center gap-1">
      {heights.map((h, i) => (
        <span
          key={i}
          className={`svc-wave h-full w-1 flex-shrink-0 ${i === 6 ? "bg-brand" : "bg-ink/25"}`}
          style={{ transform: `scaleY(${h})`, animationDelay: `${-i * 0.13}s` }}
        />
      ))}
    </div>
  );
};

// Fine-tuning: loss curve that redraws as it settles.
const TuningVisual: FC = () => (
  <svg
    viewBox="0 0 200 72"
    className="h-16 w-full max-w-[200px] text-brand"
    fill="none"
    aria-hidden="true"
  >
    <path d="M0 71.5H200" stroke="currentColor" className="text-ink/15" strokeWidth="1" />
    <path d="M0.5 0V72" stroke="currentColor" className="text-ink/15" strokeWidth="1" />
    <path
      className="svc-draw"
      d="M4 6 C 30 6, 36 54, 80 60 S 150 64, 196 64"
      stroke="currentColor"
      strokeWidth="2"
      pathLength={1}
      strokeDasharray={1}
      strokeDashoffset={0}
    />
    <rect x="193" y="61" width="6" height="6" fill="currentColor" />
  </svg>
);

// Featured: an agent run, stepping from plan to human handoff on a loop.
const AgentTrace: FC = () => {
  const steps = [
    { label: "Plan", note: "Break the request into steps" },
    { label: "Tool call", note: "Query your systems" },
    { label: "Result", note: "Check output against guardrails" },
    { label: "Human handoff", note: "Escalate when it matters" },
  ];
  return (
    <div className="relative w-full max-w-sm">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">Agent run</p>
      <div className="flex flex-col gap-1.5">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="relative flex items-center gap-3 border border-hairline bg-surface px-4 py-3"
          >
            <span
              aria-hidden="true"
              className={`svc-lit svc-live-s${i + 1} pointer-events-none absolute inset-0 border border-brand opacity-0`}
            />
            <span className="relative h-3 w-3 flex-shrink-0 bg-ink/15">
              <span
                aria-hidden="true"
                className={`svc-lit svc-live-s${i + 1} absolute inset-0 bg-brand opacity-0`}
              />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm text-ink">{step.label}</span>
              <span className="font-mono text-[10px] text-mist">{step.note}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Data (copy and links unchanged)                                     */
/* ------------------------------------------------------------------ */

interface MiniCard {
  href: string;
  visual: ReactNode;
  title: string;
  description: string;
}

const miniCards: MiniCard[] = [
  {
    href: "",
    visual: <ChatVisual />,
    title: "AI Chatbots & Conversational Support",
    description:
      "Support bots built around what customers actually ask, not a generic FAQ script — with a human handoff that never feels like a wall.",
  },
  {
    href: "",
    visual: <RagVisual />,
    title: "LLM & RAG Systems",
    description:
      "Retrieval pipelines that connect your models to your own data, so answers come from what you know — not a guess.",
  },
  {
    href: "/services/ai-chatbot-development-company",
    visual: <WorkflowVisual />,
    title: "AI Workflow Automation",
    description:
      "We wire AI into the tools you already run — CRMs, helpdesks, databases — so automation works inside real workflows, not a demo.",
  },
  {
    href: "/services/llm-development-services",
    visual: <InfraVisual />,
    title: "AI Infrastructure & LLMOps",
    description:
      "Deployment, monitoring, and evaluation that keep AI systems reliable in production, long after launch day.",
  },
  {
    href: "/services/computer-vision-development-company",
    visual: <VisionVisual />,
    title: "Computer Vision",
    description:
      "Detection, OCR, and inspection systems built for real-world conditions, not a clean demo dataset.",
  },
  {
    href: "/services/nlp-development-services",
    visual: <NlpVisual />,
    title: "Natural Language Systems",
    description:
      "AI assistants and language workflows tuned for real business context, messy inputs, and usable output.",
  },
  {
    href: "/services/voice-ai-agent-development",
    visual: <VoiceVisual />,
    title: "Voice AI Agents",
    description:
      "Human-sounding conversational experiences that fit your current tools, workflows, and customer journeys.",
  },
  {
    href: "/services/fine-tuned-llm-development-services",
    visual: <TuningVisual />,
    title: "Fine-Tuning & Optimization",
    description:
      "Smaller, faster, cheaper models tuned for real tasks — built to perform where your business actually needs it.",
  },
];

const BADGE =
  "inline-flex w-fit items-center gap-2 border border-brand/25 bg-brand/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand";

const CARD_FRAME =
  "";

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

const FeaturedCard: FC = () => (
  <a href="/services/generative-ai-development-services" className="group block no-underline">
    <div className={`grid bg-surface lg:grid-cols-[1fr_1.05fr] ${CARD_FRAME}`}>
      <div className="flex flex-col justify-between gap-12 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6">
          <span className={BADGE}>
            <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
            AI agents
          </span>
          <h3 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-4xl">
            AI Agent Development
          </h3>
          <p className="max-w-[44ch] text-[15px] leading-relaxed text-mist">
            Autonomous agents that plan, act, and complete real multi-step work — not scripted chat flows. We build the reasoning, tool access, and guardrails an agent needs to operate reliably inside your systems, with a clear handoff back to a human when it matters.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-brand">
          Learn more
          <ArrowIcon />
        </span>
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-hairline bg-paper p-6 sm:p-10 lg:border-l lg:border-t-0">
        <div aria-hidden="true" className="absolute inset-0" style={DOT_GRID_STYLE} />
        <AgentTrace />
      </div>
    </div>
  </a>
);

const MiniCardLink: FC<MiniCard> = ({ href, visual, title, description }) => (
  <a href={href} className="group block h-full no-underline">
    <div className={`flex h-full flex-col gap-5 bg-surface p-5 ${CARD_FRAME}`}>
      <div className="flex h-28 items-center justify-center overflow-hidden border border-hairline bg-paper px-4">
        {visual}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
        <p className="text-[13px] leading-relaxed text-mist">{description}</p>
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink/70 group-hover:text-brand">
        Read more
        <ArrowIcon />
      </span>
    </div>
  </a>
);

// Closing band: the strategy offer and the case-studies CTA, side by side.
const ClosingBand: FC = () => (
  <div className="relative grid overflow-hidden bg-[#0b0b0c] text-white lg:grid-cols-2">
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        WebkitMaskImage: "radial-gradient(ellipse at 100% 100%, black 10%, transparent 70%)",
        maskImage: "radial-gradient(ellipse at 100% 100%, black 10%, transparent 70%)",
      }}
    />

    <a
      href="/services/ai-consulting-services"
      className="group relative flex flex-col gap-5 p-6 no-underline sm:p-8 lg:p-10"
    >
      <span className={BADGE}>
        <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
        Strategy &amp; consulting
      </span>
      <h3 className="max-w-[26ch] text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-3xl">
        From AI strategy to production, we own the full lifecycle.
      </h3>
      <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">
        Readiness assessment, architecture design, build, and deployment. One team, zero handoffs, real business outcomes.
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-brand">
        Learn more
        <ArrowIcon />
      </span>
    </a>

    <a
      href="/case-studies"
      className="group relative flex flex-col gap-5 border-t border-white/10 p-6 no-underline sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
    >
      <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-3xl">
        See our work in action
      </h3>
      <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">
        Every engagement starts with a working prototype, not a pitch deck. Talk to us about your project and we'll show you how we'd approach it.
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-brand">
        View case studies
        <ArrowIcon className="text-brand" />
      </span>
    </a>
  </div>
);

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

const ServicesGrid: FC = () => {
  return (
    <div className="bg-[#fafafa] p-4 sm:p-6 md:p-10" id="svc-cards">
      <style>{CSS}</style>

      {/* One editorial tray, same language as the process section */}
      <div className="flex flex-col gap-1 border border-hairline bg-ink/[0.06] p-1">
  <FeaturedCard />

  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
    {miniCards.map((card) => (
      <MiniCardLink key={card.title} {...card} />
    ))}
  </div>
</div>

<div className="mt-6 border border-hairline bg-ink/[0.06] p-1 md:mt-10">
  <ClosingBand />
</div>
    </div>
  );
};

export default ServicesGrid;