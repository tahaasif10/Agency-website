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

function AnimatedNumber({
  value,
  suffix,
  decimals = 0,
  trigger,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  trigger: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;

    hasAnimated.current = true;

    // Skip the count-up for people who ask for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setDisplayValue(value * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(tick);
  }, [trigger, value]);

  const formattedValue =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  // Symbols (+, %) stay full size. Words (wks) drop to a small muted unit.
  const isWord = /[a-z]/i.test(suffix);

  return (
    <span className="tabular-nums">
      {formattedValue}
      {isWord ? (
        <span className="ml-2 text-lg font-normal tracking-normal text-mist md:text-xl">
          {suffix.trim()}
        </span>
      ) : (
        suffix
      )}
    </span>
  );
}

export default function AboutNumbers() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [statsRef, statsInView] = useInView<HTMLDivElement>(0.2);

  const stats: StatItem[] = [
    { value: 4, suffix: "+", label: "Products shipped" },
    { value: 8, suffix: "+", label: "Clients served" },
    { value: 100, suffix: "%", label: "Client retention" },
    { value: 2, suffix: " wks", label: "Avg. to first prototype" },
  ];

  return (
    <Section bg="void" className="relative border-b border-hairline">
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
                06 — BY THE NUMBERS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.12]">
              Small team, real momentum.
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            Lean execution, fast feedback, and measurable outcomes — all without the usual agency bloat.
          </p>
        </div>

        {/* Stat tray: four flat cards separated by thin gaps */}
        <div
          ref={statsRef}
          className={`transition-opacity duration-700 ease-out ${
            statsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-ink/[0.06] border border-hairline">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col bg-surface p-6 md:p-8 min-h-[240px] cursor-default"
              >
                {/* Pixel marker: lights up in sequence as the numbers count */}
                <span
                  aria-hidden="true"
                  className={`block w-3.5 h-3.5 transition-colors duration-500 ease-out ${
                    statsInView ? "bg-brand" : "bg-ink/15"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                />

                <h3 className="mt-8 text-lg font-medium text-ink tracking-tight">
                  {stat.label}
                </h3>

                <p className="mt-auto pt-8 text-5xl md:text-6xl font-semibold text-ink tracking-tight leading-none">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    trigger={statsInView}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}