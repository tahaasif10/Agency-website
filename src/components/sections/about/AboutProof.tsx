"use client";

import { useInView } from "@/lib/hooks/useInView";
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
    label: "Code & IP Handover",
    description:
      "You own all repositories, pipeline code, and fine-tuned weights with zero vendor lock-in.",
    icon: ShieldCheck,
  },
  {
    value: "99.9%",
    label: "Production Uptime SLA",
    description:
      "Engineered with automated fallbacks, retries, and high-availability vector infrastructure.",
    icon: Cpu,
  },
  {
    value: "< 2 Wks",
    label: "To Working Prototype",
    description:
      "See a functional, stress-tested prototype running on your use case before prolonged contracts.",
    icon: Zap,
  },
  {
    value: "0",
    label: "Data Retention / Leakage",
    description:
      "Strict zero-data-retention APIs and private VPC/on-prem deployments ensuring enterprise privacy.",
    icon: Lock,
  },
];

export default function AboutProof() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [metricsRef, metricsInView] = useInView<HTMLDivElement>(0.15);

  return (
    <section id="credibility" className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-12 border-b border-hairline">
      <div className="max-w-7xl mx-auto">
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
              06 — PROOF & STANDARDS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-tight leading-[1.12]">
            Battle-tested infrastructure and uncompromising standards.
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
              <div
                key={index}
                className="relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border border-hairline bg-surface hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(6,6,7,0.10)] hover:border-hairline-strong transition-all duration-300 ease-out cursor-default group"
              >
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
