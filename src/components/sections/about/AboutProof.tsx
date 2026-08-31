"use client";

import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Cpu, Zap, Lock } from "lucide-react";

interface ProofMetric {
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const METRICS: ProofMetric[] = [
  {
    value: "100%",
    label: "Full IP handover",
    description:
      "You own every repository, pipeline, and model weight. No vendor lock-in, ever.",
    icon: ShieldCheck,
  },
  {
    value: "0%",
    label: "Zero data retention",
    description:
      "Zero-retention APIs and private VPC or on-prem deployment, standard on every engagement.",
    icon: Cpu,
  },
  {
    value: "< 3 Wks",
    label: "Working prototype before contract",
    description:
      "You see functioning code on your actual use case before signing anything long-term.",
    icon: Zap,
  },
  {
    value: "1",
    label: "Direct engineer access",
    description:
      "No account managers. You talk to the person building your system, from day one.",
    icon: Lock,
  },
];

export default function AboutProof() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [metricsRef, metricsInView] = useInView<HTMLDivElement>(0.15);

  return (
    <Section id="credibility" bg="void" className="relative border-b border-hairline">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`max-w-3xl mb-14 md:mb-18 transition-all duration-700 ease-out ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            07 — PROOF & STANDARDS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-[1.12]">
          What we commit to, not just what we claim.
        </h2>

        <p className="mt-5 text-lg md:text-xl text-mist font-light leading-relaxed max-w-2xl">
          We don&apos;t risk client operations on unproven hype. We deploy on resilient, enterprise-grade architecture with zero proprietary lock-in.
        </p>
      </div>

      {/* 4 Metric / Standards Cards */}
      <div
        ref={metricsRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch transition-all duration-700 ease-out delay-100 ${
          metricsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {METRICS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card key={index}>
              <div>
                {/* Top Squircle Icon */}
                <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-hairline/60 flex items-center justify-center text-ink group-hover:text-brand transition-colors mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Stat Value */}
                <div className="text-4xl sm:text-5xl font-bold font-sans text-ink tracking-tight leading-none mb-3">
                  {item.value}
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-ink mb-2 tracking-tight">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-mist leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}