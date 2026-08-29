"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Hero() {
  const [mounted, setMounted] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-svh flex items-center overflow-hidden bg-void">
      {/* dot-grid texture, faded toward center so it stays quiet behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(250,250,250,0.06) 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
        }}
      />

      <Section bg="none" className="w-full !py-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-20">
          <div>
            {/* Status marker */}
            <div
              className={`flex items-center gap-2 mb-6 transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
              <span className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-gradient-brand">
                Running locally
              </span>
            </div>

            {/* PLACEHOLDER COPY — rewrite before shipping */}
            <h1
              className={`font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.03em] max-w-2xl text-ink transition-all duration-700 ease-out delay-[80ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Code with AI that never leaves the building.
            </h1>

            {/* PLACEHOLDER COPY — rewrite before shipping */}
            <p
              className={`font-sans text-lg md:text-xl leading-[1.6] font-normal max-w-lg mt-8 text-mist transition-all duration-700 ease-out delay-[160ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              A coding agent that thinks, edits, and runs entirely on your
              hardware. Nothing routed, nothing rate-limited, nothing watching.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out delay-[240ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <Button href="/contact" variant="primary" size="lg">
                Join waitlist
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Our approach
              </Button>
            </div>
          </div>

          {/* Signature element — closed local loop */}
          <div
            className={`relative flex items-center justify-center h-[320px] lg:h-[400px] transition-all duration-700 ease-out delay-[200ms] ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-faint tracking-wide">
              input
            </span>
            <span className="absolute top-[42%] right-2 font-mono text-[11px] text-faint tracking-wide">
              local only
            </span>

            <motion.svg
              viewBox="0 0 320 320"
              className="w-full max-w-[340px] h-auto"
              aria-hidden="true"
              animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M 160 30 A 130 130 0 0 1 230 160"
                fill="none"
                stroke="#FF5100"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                opacity="0.55"
              />
              <path
                d="M 230 160 A 130 130 0 0 1 160 290"
                fill="none"
                stroke="#FF5100"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                opacity="0.55"
              />
              <path
                d="M 160 290 A 130 130 0 0 1 90 160"
                fill="none"
                stroke="#FF5100"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                opacity="0.55"
              />
              <path
                d="M 90 160 A 130 130 0 0 1 160 30"
                fill="none"
                stroke="#FF5100"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                opacity="0.55"
              />
            </motion.svg>

            <svg viewBox="0 0 320 320" className="absolute w-full max-w-[340px] h-auto">
              <circle cx="160" cy="30" r="5" fill="#FAFAFA" />
              <circle cx="230" cy="160" r="5" fill="#FAFAFA" />
              <circle cx="160" cy="290" r="5" fill="#FAFAFA" />
              <circle cx="90" cy="160" r="5" fill="#FAFAFA" />
              <circle
                cx="160"
                cy="160"
                r="38"
                fill="#0D0D0F"
                stroke="#232326"
                strokeWidth="1.5"
              />
              <text
                x="160"
                y="164"
                textAnchor="middle"
                fontFamily="ui-monospace, monospace"
                fontSize="11"
                fill="#FAFAFA"
              >
                cpu
              </text>
            </svg>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-surface border border-hairline rounded-md px-4 py-2 font-mono text-xs text-mist flex items-center gap-2 whitespace-nowrap">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
              network: <span className="text-ink">off</span>
              <span className="text-faint">·</span>
              latency: <span className="text-ink">4ms</span>
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}