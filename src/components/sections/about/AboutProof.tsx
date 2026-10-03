"use client";

import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";

interface ProofMetric {
  value: string;
  label: string;
  description: string;
}

const METRICS: ProofMetric[] = [
  {
    value: "100%",
    label: "Full IP handover",
    description:
      "You own every repository, pipeline, and model weight. No vendor lock-in, ever.",
  },
  {
    value: "0%",
    label: "Zero data retention",
    description:
      "Zero-retention APIs and private VPC or on-prem deployment, standard on every engagement.",
  },
  {
    value: "< 3 Wks",
    label: "Working prototype before contract",
    description:
      "You see functioning code on your actual use case before signing anything long-term.",
  },
  {
    value: "1",
    label: "Direct engineer access",
    description:
      "No account managers. You talk to the person building your system, from day one.",
  },
];

// "< 3 Wks" -> big "< 3" plus a small muted "Wks". Plain values like "100%" stay whole.
function splitValue(value: string): { main: string; unit?: string } {
  const match = value.match(/^(.*\d%?)\s+([A-Za-z]+)$/);
  return match ? { main: match[1], unit: match[2] } : { main: value };
}

export default function AboutProof() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [metricsRef, metricsInView] = useInView<HTMLDivElement>(0.15);

  return (
    <Section id="credibility" bg="void" className="relative border-b border-hairline">
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Header — same structure as the other editorial sections */}
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
                07 — PROOF &amp; STANDARDS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.12]">
              What we commit to, not just what we claim.
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            We don&apos;t risk client operations on unproven hype. We deploy on resilient, enterprise-grade architecture with zero proprietary lock-in.
          </p>
        </div>

        {/* Standards tray: four flat cards separated by thin gaps */}
        <div
          ref={metricsRef}
          className={`transition-opacity duration-700 ease-out ${
            metricsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-ink/[0.06] border border-hairline">
            {METRICS.map((item, i) => {
              const { main, unit } = splitValue(item.value);

              return (
                <div
                  key={item.label}
                  className="flex flex-col bg-surface p-6 md:p-8 min-h-[320px] cursor-default"
                >
                  {/* Pixel marker: lights up in sequence as the section scrolls in */}
                  <span
                    aria-hidden="true"
                    className={`block w-3.5 h-3.5 transition-colors duration-500 ease-out ${
                      metricsInView ? "bg-brand" : "bg-ink/15"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  />

                  <p className="mt-8 whitespace-nowrap text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-none">
                    {main}
                    {unit && (
                      <span className="ml-2 text-lg md:text-xl font-normal tracking-normal text-mist">
                        {unit}
                      </span>
                    )}
                  </p>

                  <h3 className="mt-5 text-lg font-medium text-ink tracking-tight">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-sm text-mist font-light leading-relaxed max-w-[34ch]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}