"use client";

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

export default function AboutWork() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [timelineRef, timelineInView] = useInView<HTMLDivElement>(0.15);

  return (
    <Section
      id="how-we-work"
      className="relative bg-paper text-ink border-b border-hairline overflow-hidden"
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
              From idea to shipped, in four steps.
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            A clear, predictable delivery pipeline with rapid cycles, zero guesswork, and working code delivered at every phase.
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
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-1 z-0 overflow-hidden rounded-full"
          >
            <div className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-brand/45 blur-md" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand via-brand-bright to-brand shadow-[0_0_22px_rgba(255,81,0,0.5)]" />
            <div className="absolute inset-y-0 -left-1/3 w-1/3 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[process-beam_2.8s_linear_infinite]" />
          </div>

          <style jsx>{`
            @keyframes process-beam {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(400%);
              }
            }
          `}</style>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center relative z-10">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex flex-col items-center group cursor-default gap-6"
                >
                  {/* Circular Icon Node */}
                  <div className="w-20 h-20 rounded-full bg-surface border-2 border-brand/40 shadow-sm flex items-center justify-center text-brand transition-all duration-300 ease-out group-hover:border-brand group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(0,184,169,0.22)]">
                    <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-mist leading-relaxed font-light max-w-[240px]">
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
