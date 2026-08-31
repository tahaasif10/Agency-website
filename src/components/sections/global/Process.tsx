"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import type { ElementType } from "react";

interface StepItem {
  title: string;
  description: string;
  icon: ElementType;
}

const STEPS: StepItem[] = [
  {
    title: "Understand & Assess",
    description: "Gather data, pinpoint needs, define success metrics.",
    icon: Search,
  },
  {
    title: "Design & Conceptualize",
    description: "Sketch solutions, create mockups, validate approach.",
    icon: PenTool,
  },
  {
    title: "Execute & Refine",
    description: "Develop features, optimize functionality, iterate fast.",
    icon: Code2,
  },
  {
    title: "Deliver & Support",
    description: "Deploy product, provide maintenance, ensure success.",
    icon: Rocket,
  },
];

// Total time for the beam to travel through all four phases (~1.6s, within the 1.4–2.0s target).
const STEP_DURATION_MS = 400;

export default function AboutWork() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [timelineRef, timelineInView] = useInView<HTMLDivElement>(0.25);

  // -1 = process not yet started. 0..3 = index of the most recently activated phase.
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

  // Fraction of the beam that should be in its active/accent state.
  const progress = activeStep === -1 ? 0 : ((activeStep + 1) / STEPS.length) * 100;

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
              From idea to shipped. No black boxes.
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            A clear, predictable delivery pipeline with rapid cycles and working code at every phase — not a status update, actual code.
          </p>
        </div>

        {/* 4-Step Connecting Timeline */}
        <div
          ref={timelineRef}
          className={`relative transition-all duration-700 ease-out delay-100 ${
            timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Connecting Beam (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-10 right-[calc(25%-4rem)] h-[2px] z-0 overflow-hidden rounded-full"
          >
            {/* Muted/inactive base track */}
            <div className="absolute inset-0 rounded-full bg-ink/10" />
            {/* Active/progressed portion, drawn left to right in sync with each phase */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-brand ease-out"
              style={{
                width: `${progress}%`,
                transitionProperty: "width",
                transitionDuration: `${STEP_DURATION_MS}ms`,
              }}
            />
          </div>

          {/* Connecting Line (Mobile / Tablet) */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-0 bottom-0 left-10 w-px z-0 overflow-hidden"
          >
            {/* Muted/inactive base track */}
            <div className="absolute inset-0 bg-ink/10" />
            {/* Active/progressed portion, drawn top to bottom in sync with each phase */}
            <div
              className="absolute inset-x-0 top-0 bg-brand ease-out"
              style={{
                height: `${progress}%`,
                transitionProperty: "height",
                transitionDuration: `${STEP_DURATION_MS}ms`,
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const num = String(index + 1).padStart(2, "0");
              const isActive = activeStep >= index;

              return (
                <div
                  key={step.title}
                  className="flex items-start gap-5 lg:flex-col lg:items-start lg:gap-6 group cursor-default"
                >
                  {/* Icon Node — corner-bracket frame instead of full circle */}
                  <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center text-brand transition-transform duration-300 ease-out group-hover:scale-105">
                    <div className="absolute inset-0 bg-surface" />
                    {/* corner brackets */}
                    <span
                      className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-500 group-hover:border-brand ${
                        isActive ? "border-brand" : "border-brand/50"
                      }`}
                    />
                    <span
                      className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors duration-500 group-hover:border-brand ${
                        isActive ? "border-brand" : "border-brand/50"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-colors duration-500 group-hover:border-brand ${
                        isActive ? "border-brand" : "border-brand/50"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-500 group-hover:border-brand ${
                        isActive ? "border-brand" : "border-brand/50"
                      }`}
                    />

                    <span
                      className={`absolute -top-2.5 -right-2.5 font-mono text-[10px] font-semibold bg-paper px-1 border rounded-sm transition-all duration-500 ease-out ${
                        isActive
                          ? "text-brand border-brand/60 scale-100"
                          : "text-mist border-hairline scale-100"
                      }`}
                    >
                      {num}
                    </span>

                    <Icon
                      className={`w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  <div className="flex flex-col gap-2 pt-1 lg:pt-0">
                    {/* Title */}
                    <h3
                      className={`text-xl font-bold text-ink tracking-tight text-left transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2.5"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm text-mist leading-relaxed font-light max-w-[240px] text-left transition-all duration-500 ease-out delay-100 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-1.5"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}