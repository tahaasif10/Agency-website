// whyus.tsx
"use client";

import { useInView } from "@/lib/hooks/useInView";
import { Section } from "@/components/ui/Section";

interface Advantage {
  code: string;
  title: string;
  description: string;
}

const FEATURED: Advantage[] = [
  {
    code: "ENG",
    title: "Senior engineers only",
    description: "No junior hand-offs — the people who scope it are the people who build it.",
  },
  {
    code: "DIR",
    title: "Direct access, no middlemen",
    description: "You talk to the engineer working on your project, not an account manager.",
  },
];

const SUPPORTING: Advantage[] = [
  {
    code: "PRD",
    title: "Production-grade from day one",
    description: "Built to survive real users and real data, not just a polished demo.",
  },
  {
    code: "ITR",
    title: "Fast, transparent iteration",
    description: "Working code shipped at every phase — no black-box months of silence.",
  },
  {
    code: "SCP",
    title: "Scoped, not stretched",
    description: "Clear deliverables agreed upfront, so scope doesn't quietly creep.",
  },
];

export default function AdvantageSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [gridRef, gridInView] = useInView<HTMLDivElement>(0.15);

  return (
    <Section bg="void" className="text-ink border-t border-hairline">
      <div
        ref={headerRef}
        className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ease-out ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] leading-none text-brand">[04]</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand font-mono">
              Why us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.12]">
            What makes us different
          </h2>
        </div>

        <p className="text-base text-mist font-light leading-relaxed max-w-sm md:text-right">
          Not a pitch about culture or values — five concrete things that
          change how your project actually gets delivered.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`flex flex-col gap-5 transition-all duration-700 ease-out delay-100 ${
          gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* featured pair — largest claims, get the only accent wash on the page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FEATURED.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between gap-8 rounded-2xl border border-brand/20 bg-brand/[0.04] p-8 transition-colors duration-300 hover:border-brand/40"
            >
              <div className="w-14 h-14 rounded-full border border-brand/30 bg-void flex items-center justify-center transition-colors duration-300 group-hover:border-brand">
                <span className="font-mono text-[10px] tracking-tight text-brand">
                  {item.code}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed font-normal max-w-xs">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* supporting three — same badge language, quieter treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SUPPORTING.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between gap-6 rounded-2xl border border-hairline p-6 transition-colors duration-300 hover:border-mist/40"
            >
              <div className="w-11 h-11 rounded-full border border-mist/40 bg-void flex items-center justify-center transition-colors duration-300 group-hover:border-brand">
                <span className="font-mono text-[9px] tracking-tight text-mist group-hover:text-brand transition-colors duration-300">
                  {item.code}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-mist leading-snug font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}