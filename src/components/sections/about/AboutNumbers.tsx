"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

function AnimatedNumber({ value, suffix, decimals = 0, trigger }: { value: number; suffix: string; decimals?: number; trigger: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;

    hasAnimated.current = true;

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const nextValue = value * eased;

      setDisplayValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(tick);
  }, [trigger, value]);

  const formattedValue = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <span>
      {formattedValue}
      {suffix}
    </span>
  );
}

export default function AboutNumbers() {
  const [statsRef, statsInView] = useInView<HTMLDivElement>(0.2);

  const stats: StatItem[] = [
    { value: 4, suffix: "+", label: "Products shipped" },
    { value: 8, suffix: "+", label: "Clients served" },
    { value: 100, suffix: "%", label: "Client retention" },
    { value: 2, suffix: " wks", label: "Avg. to first prototype" },
  ];

  return (
    <Section bg="void" className="relative border-b border-hairline">
      <div className="max-w-3xl mb-14 md:mb-18">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            06 — BY THE NUMBERS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-[1.12]">
          Small team, real momentum.
        </h2>

        <p className="mt-5 text-lg md:text-xl text-mist font-light leading-relaxed max-w-2xl">
          Lean execution, fast feedback, and measurable outcomes — all without the usual agency bloat.
        </p>
      </div>

      <div
        ref={statsRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch transition-all duration-700 ease-out ${
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border border-hairline bg-surface hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(6,6,7,0.10)] hover:border-hairline-strong transition-all duration-300 ease-out cursor-default group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-hairline/60 flex items-center justify-center text-ink group-hover:text-brand transition-colors mb-6">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/80">
                  {i + 1}
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-bold font-sans text-ink tracking-tight leading-none mb-3">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} trigger={statsInView} />
              </div>

              <div className="text-lg font-bold text-ink mb-0 tracking-tight">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}