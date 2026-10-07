// whyus.tsx
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { Section } from "@/components/ui/Section";

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */

function Corners() {
  return (
    <>
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand" />
    </>
  );
}

function CheckBox() {
  return (
    <span className="w-4 h-4 bg-brand flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-paper" fill="none">
        <path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </span>
  );
}

function Skeleton({ w }: { w: string }) {
  return <span className="block h-1.5 bg-ink/10" style={{ width: w }} />;
}

/* ------------------------------------------------------------------ */
/* Visuals — drawn in code, no images, no numbers to defend            */
/* ------------------------------------------------------------------ */

// 1. Senior engineers only: the same person scopes, builds and ships.
function SeniorVisual() {
  const rows = ["Scoped the project", "Built it", "Shipped it"];
  return (
    <div className="w-full max-w-sm">
      {rows.map((label, i) => (
        <div key={label} className="flex items-stretch gap-4">
          <div className="flex flex-col items-center">
            <span className="w-3 h-3 bg-brand flex-shrink-0" />
            {i < rows.length - 1 && <span className="w-px flex-1 min-h-6 bg-ink/15" />}
          </div>
          <div className="flex-1 flex items-center justify-between border border-hairline bg-surface px-4 py-3 mb-3">
            <span className="text-sm text-ink">{label}</span>
            <span className="w-4 h-4 bg-ink" aria-hidden="true" />
          </div>
        </div>
      ))}
      <p className="mt-2 pl-7 font-mono text-xs text-mist">One engineer, start to finish.</p>
    </div>
  );
}

// 2. Direct access: no account manager in the middle.
function DirectVisual() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-3">
      <div className="self-start max-w-[85%] border border-hairline bg-surface px-4 py-3">
        <p className="font-mono text-[10px] text-mist mb-1">You</p>
        <p className="text-sm text-ink">Can we change the checkout flow?</p>
      </div>

      <div className="self-center border border-dashed border-ink/20 px-3 py-1.5 font-mono text-[10px] text-ink/30 line-through">
        Account manager
      </div>

      <div className="self-end max-w-[85%] bg-ink px-4 py-3">
        <p className="font-mono text-[10px] text-paper/60 mb-1">Engineer</p>
        <p className="text-sm text-paper">Yes. Pushing it to staging now.</p>
      </div>
    </div>
  );
}

// 3. Production-grade: the unglamorous checklist.
function ProductionVisual() {
  const checks = ["Tests passing", "Monitoring live", "Error tracking on", "Backups scheduled"];
  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      {checks.map((label) => (
        <div
          key={label}
          className="flex items-center justify-between border border-hairline bg-surface px-4 py-3"
        >
          <span className="text-sm text-ink">{label}</span>
          <CheckBox />
        </div>
      ))}
    </div>
  );
}

// 4. Fast, transparent iteration: something shipped at every phase.
function IterationVisual() {
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => {
          const done = i < 3;
          return (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex items-center">
                <span className={`w-3 h-3 flex-shrink-0 ${done ? "bg-brand" : "bg-ink/15"}`} />
                {i < 3 && <span className="h-px flex-1 bg-ink/15" />}
              </div>
              <div
                className={`flex flex-col gap-2 p-3 h-24 ${
                  done
                    ? "border border-hairline bg-surface"
                    : "border border-dashed border-ink/20"
                }`}
              >
                <Skeleton w="70%" />
                <Skeleton w="45%" />
                <Skeleton w="60%" />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-5 font-mono text-xs text-mist">Working code at every phase.</p>
    </div>
  );
}

// 5. Scoped, not stretched: a fixed box, and what sits outside it.
function ScopeVisual() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div className="relative bg-surface border border-hairline p-6">
        <Corners />
        <p className="font-mono text-[10px] text-mist mb-4">In scope</p>
        <div className="flex flex-col gap-3">
          {["80%", "65%", "72%"].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-brand flex-shrink-0" />
              <Skeleton w={w} />
            </div>
          ))}
        </div>
      </div>

      <div className="border border-dashed border-ink/20 px-4 py-3">
        <p className="font-mono text-[10px] text-ink/40">Not in scope. Agreed separately.</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface Advantage {
  title: string;
  description: string;
  visual: ReactNode;
}

const ADVANTAGES: Advantage[] = [
  {
    title: "Built around the problem",
    description: "We don't start with a technology looking for somewhere to use it. We start with what needs to be solved.",
    visual: <SeniorVisual />,
  },
  {
    title: "One team, end to end",
    description: "Product thinking, engineering, AI, data, infrastructure, and integrations can work together instead of becoming separate projects.",
    visual: <DirectVisual />,
  },
  {
    title: "Built to grow",
    description: "We think beyond the first release and build systems that can evolve with the business.",
    visual: <ProductionVisual />,
  },
  {
    title: "Use AI where it matters",
    description: "Not everything needs AI. When it does, we build it into the workflow so it creates real value.",
    visual: <IterationVisual />,
  },
  {
    title: "Build like we'll be here tomorrow",
    description: "Clean architecture, reliable systems, and decisions that won't become tomorrow's problems.",
    visual: <ScopeVisual />,
  },
];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function AdvantageSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [gridRef, gridInView] = useInView<HTMLDivElement>(0.15);
  const [active, setActive] = useState(0);

  return (
    <Section bg="void" className="text-ink">
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Header — same structure as "How we work" so the two read as one flow */}
        <div
          ref={headerRef}
          className={`grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-end transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full gradient flex-shrink-0" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] gradient-text">
                04 - WHY US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.12]">
              Serious software, without the unnecessary complexity
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            We believe good engineering should make things clearer, not harder.
          </p>
        </div>

        {/* Tray: list on the left, live visual on the right */}
        <div
          ref={gridRef}
          className={`transition-opacity duration-700 ease-out ${
            gridInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-1 p-1 bg-ink/[0.06] border border-hairline">
            {/* Left: the five points (all text always visible) */}
            <div className="flex flex-col gap-1">
              {ADVANTAGES.map((item, i) => {
                const isActive = active === i;

                return (
                  <div
                    key={item.title}
                    className={`transition-colors duration-300 motion-reduce:transition-none ${
                      isActive ? "bg-surface" : "bg-surface lg:bg-paper"
                    }`}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-current={isActive}
                      className="w-full flex items-start gap-5 p-6 md:p-7 text-left cursor-default lg:cursor-pointer"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 block w-3.5 h-3.5 flex-shrink-0 transition-colors duration-300 ${
                          isActive ? "bg-brand" : "bg-brand lg:bg-ink/15"
                        }`}
                      />
                      <span className="flex flex-col gap-2">
                        <span
                          className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${
                            isActive ? "text-ink" : "text-ink lg:text-ink/50"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span className="text-sm text-mist font-light leading-relaxed max-w-sm">
                          {item.description}
                        </span>
                      </span>
                    </button>

                    {/* Mobile / tablet: the visual sits right under its text, no hover needed */}
                    <div className="lg:hidden px-6 pb-8 flex justify-center">
                      {item.visual}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: visual panel (desktop only), crossfades with the active point */}
            <div className="relative hidden lg:block bg-surface min-h-[480px] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(6,6,7,0.09) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 35%, transparent 80%)",
                  maskImage:
                    "radial-gradient(ellipse at center, black 35%, transparent 80%)",
                }}
              />

              <div className="absolute top-6 left-7 z-10 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-brand" aria-hidden="true" />
                <span className="font-mono text-xs text-mist">{ADVANTAGES[active].title}</span>
              </div>

              {ADVANTAGES.map((item, i) => (
                <div
                  key={item.title}
                  aria-hidden={active !== i}
                  className={`absolute inset-0 flex items-center justify-center px-10 pt-16 pb-10 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                    active === i ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {item.visual}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}