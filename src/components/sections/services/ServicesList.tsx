import type { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/data/services";

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

// Product & Platform Engineering: browser window / code layout visual
const PlatformVisual: FC = () => (
  <div className="flex w-full max-w-[200px] flex-col gap-2">
    <div className="flex items-center gap-1.5 border-b border-hairline pb-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
      <span className="ml-auto block h-1 w-12 bg-ink/10" />
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      <div className="border border-hairline bg-surface p-1.5">
        <Bar w="100%" />
        <span className="mt-1 block h-1 bg-brand/40" style={{ width: "60%" }} />
      </div>
      <div className="col-span-2 border border-hairline bg-surface p-1.5">
        <Bar w="80%" />
        <span className="mt-1 block h-1 bg-ink/15" style={{ width: "40%" }} />
      </div>
    </div>
    <div className="flex items-center gap-1 self-end bg-ink px-2.5 py-1.5">
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

// Custom Internal Platforms: modular dashboard / CRM UI blocks
const InternalPlatformVisual: FC = () => (
  <div className="flex w-full max-w-[200px] flex-col gap-1.5">
    <div className="flex items-center justify-between border border-hairline bg-surface px-2.5 py-1.5">
      <Bar w="45%" />
      <span className="h-2 w-2 bg-brand/60" />
    </div>
    <div className="grid grid-cols-2 gap-1.5">
      <div className="border border-hairline bg-surface p-2">
        <span className="block h-2 w-6 bg-brand/20 mb-1" />
        <Bar w="80%" />
      </div>
      <div className="border border-hairline bg-surface p-2">
        <span className="block h-2 w-6 bg-ink/15 mb-1" />
        <Bar w="70%" />
      </div>
    </div>
  </div>
);

// Data Engineering & Pipelines: pipeline ingestion & transformation
const PipelineVisual: FC = () => (
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

// Systems Integration & API Engineering: connected nodes with traveling data pulse
const IntegrationVisual: FC = () => (
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

// Cloud Modernization & Migration: cloud telemetry and cluster nodes
const CloudVisual: FC = () => (
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

// Mobile & Field Apps: phone frame with sync pulse
const MobileVisual: FC = () => (
  <div className="relative h-[84px] w-[140px] border border-hairline bg-surface p-2 mx-auto flex flex-col justify-between">
    <div className="flex justify-between items-center border-b border-hairline pb-1">
      <span className="h-1 w-6 bg-ink/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
    </div>
    <div className="flex flex-col gap-1.5">
      <Bar w="85%" />
      <Bar w="60%" />
      <span className="svc-sweep block h-1 w-1/2 bg-brand/50" />
    </div>
    <div className="h-1 w-8 bg-ink/20 self-center rounded-full" />
  </div>
);

// Security & Compliance: shield boundary with inspection blinks
const SecurityVisual: FC = () => {
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

// Managed Support & Continuous Improvement: monitoring waveform & SLA health
const SupportVisual: FC = () => {
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

// Featured: an agent run, stepping from plan to human handoff on a loop.
const AgentTrace: FC = () => {
  const steps = [
    { label: "Plan", note: "Deconstruct multi-step task" },
    { label: "Tool call", note: "Query systems & execute tools" },
    { label: "Result", note: "Verify against safety guardrails" },
    { label: "Human handoff", note: "Escalate critical decisions" },
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
/* Visual mapping helper                                               */
/* ------------------------------------------------------------------ */

const visualMap: Record<string, ReactNode> = {
  "product-platform-engineering": <PlatformVisual />,
  "custom-internal-platforms": <InternalPlatformVisual />,
  "data-engineering-pipelines": <PipelineVisual />,
  "systems-integration-api-engineering": <IntegrationVisual />,
  "cloud-modernization-migration": <CloudVisual />,
  "mobile-field-apps": <MobileVisual />,
  "security-compliance-by-design": <SecurityVisual />,
  "managed-support-continuous-improvement": <SupportVisual />,
};

const BADGE =
  "inline-flex w-fit items-center gap-2 border border-brand/25 bg-brand/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand";

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

const FeaturedServiceCard: FC<{
  badge: string;
  title: string;
  description: string;
}> = ({ badge, title, description }) => (
  <div className="group block no-underline">
    <div className="grid bg-surface lg:grid-cols-[1fr_1.05fr]">
      <div className="flex flex-col justify-between gap-12 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6">
          <span className={BADGE}>
            <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
            {badge}
          </span>
          <h3 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-4xl">
            {title}
          </h3>
          <p className="max-w-[44ch] text-[15px] leading-relaxed text-mist">
            {description}
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-brand"
        >
          Start a project
          <ArrowIcon />
        </a>
      </div>

      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-hairline bg-paper p-6 sm:p-10 lg:border-l lg:border-t-0">
        <div aria-hidden="true" className="absolute inset-0" style={DOT_GRID_STYLE} />
        <AgentTrace />
      </div>
    </div>
  </div>
);

const ServiceCardItem: FC<{
  visual: ReactNode;
  badge: string;
  title: string;
  description: string;
}> = ({ visual, badge, title, description }) => (
  <div className="group block h-full no-underline">
    <div className="flex h-full flex-col gap-5 bg-surface p-5">
      <div className="flex h-28 items-center justify-center overflow-hidden border border-hairline bg-paper px-4">
        {visual}
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
          {badge}
        </span>
        <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
        <p className="text-[13px] leading-relaxed text-mist">{description}</p>
      </div>

      <a
        href="/contact"
        className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink/70 group-hover:text-brand"
      >
        Inquire now
        <ArrowIcon />
      </a>
    </div>
  </div>
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
      href="/contact"
      className="group relative flex flex-col gap-5 p-6 no-underline sm:p-8 lg:p-10"
    >
      <span className={BADGE}>
        <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
        Strategy &amp; Engineering
      </span>
      <h3 className="max-w-[26ch] text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-3xl">
        From AI strategy to production, we own the full lifecycle.
      </h3>
      <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">
        Readiness assessment, architecture design, build, and deployment. One team, zero handoffs, real business outcomes.
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-brand">
        Start a project
        <ArrowIcon />
      </span>
    </a>

    <a
      href="/work"
      className="group relative flex flex-col gap-5 border-t border-white/10 p-6 no-underline sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
    >
      <span className="h-1.5 w-1.5 bg-brand" aria-hidden="true" />
      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-3xl">
        See our work in action
      </h3>
      <p className="max-w-[46ch] text-sm leading-relaxed text-white/70">
        Every engagement starts with a working prototype, not a pitch deck. Talk to us about your project and we&apos;ll show you how we&apos;d approach it.
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
  // First service is featured ("AI Agents & LLM Applications")
  const featured = servicesData[0];
  // Next 8 services rendered in grid
  const gridServices = servicesData.slice(1);

  return (
    <div className="bg-[#fafafa] p-4 sm:p-6 md:p-10" id="svc-cards">
      <style>{CSS}</style>

      {/* One editorial tray, same language as the process section */}
      <div className="flex flex-col gap-1 border border-hairline bg-ink/[0.06] p-1">
        {featured && (
          <FeaturedServiceCard
            badge={featured.badge}
            title={featured.title}
            description={featured.shortDescription}
          />
        )}

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {gridServices.map((service) => (
            <ServiceCardItem
              key={service.slug}
              badge={service.badge}
              visual={visualMap[service.slug] ?? <PipelineVisual />}
              title={service.title}
              description={service.shortDescription}
            />
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