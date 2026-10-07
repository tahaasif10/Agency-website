"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";

interface StepItem {
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    title: "Understand",
    description: "We start with your business, your users, and the problem you're trying to solve.",
  },
  {
    title: "Shape & Validate",
    description: "We turn the problem into a clear product, system, and technical direction.",
  },
  {
    title: "Build",
    description: "We design, engineer, test, and ship in close collaboration with you.",
  },
  {
    title: "Evolve",
    description: "We keep improving what we build as your needs, users, and business change.",
  },
];

// Time between each card lighting up (~1.6s total for four phases).
const STEP_DURATION_MS = 400;

export default function AboutWork() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [timelineRef, timelineInView] = useInView<HTMLDivElement>(0.25);

  // -1 = not started. 0..3 = index of the most recently activated phase.
  const [activeStep, setActiveStep] = useState(-1);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!timelineInView || hasPlayed.current) return;
    hasPlayed.current = true;

    const timers: ReturnType<typeof setTimeout>[] = [];
    STEPS.forEach((_, i) => {
      timers.push(
        setTimeout(() => setActiveStep(i), i === 0 ? 0 : i * STEP_DURATION_MS)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [timelineInView]);

  return (
    <Section
      id="how-we-work"
      className="relative bg-paper text-ink overflow-hidden"
    >
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Section Header (2-Column Grid: Heading on Left, Paragraph on Right) */}
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
                03 - HOW WE WORK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.12]">
              Good software starts with understanding the problem.
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            We don't begin by choosing a technology. We begin by understanding what needs to change.
          </p>
        </div>

        {/* Stat-style card grid: one framed tray, four cards separated by thin gaps */}
        <div
          ref={timelineRef}
          className={`transition-opacity duration-700 ease-out ${
            timelineInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-ink/[0.06] border border-hairline">
            {STEPS.map((step, index) => {
              const num = String(index + 1).padStart(2, "0");
              const isActive = activeStep >= index;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col bg-surface p-6 md:p-8 min-h-[300px] overflow-hidden"
                >
                  {/* Pixel marker: dim until its phase is reached, then brand */}
                  <span
                    aria-hidden="true"
                    className={`block w-3.5 h-3.5 transition-colors duration-500 ease-out ${
                      isActive ? "bg-brand" : "bg-ink/15"
                    }`}
                  />


                  {/* Big figure */}
                  <p
                    className={`mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-none transition-colors duration-500 ease-out ${
                      isActive ? "text-ink" : "text-ink/15"
                    }`}
                  >
                    {num}
                  </p>
                  {/* Label */}
                  <h3 className="mt-8 text-lg font-medium text-ink tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm text-mist font-light leading-relaxed max-w-[240px]">
                    {step.description}
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