"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-paper px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Elevated Dark Panel with Ambient Brand Radial Glow */}
        <div
          className="w-full rounded-3xl px-6 md:px-16 py-20 md:py-28 text-center relative overflow-hidden shadow-[0_20px_50px_-20px_rgba(6,6,7,0.18)]"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 15% 0%, rgba(255,81,0,0.24) 0%, transparent 65%), #060607",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Subtle Ambient Grid in background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Eyebrow / Label */}
          <div className="inline-flex items-center gap-2 mb-8 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold tracking-[0.18em] uppercase text-white/60">
              Start a project
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[48px] font-light text-white tracking-tight leading-[1.08] mb-6 relative z-10 max-w-3xl mx-auto">
            Stop waiting for demos.{" "}
            <span className="text-brand font-medium">Build software that ships.</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/60 max-w-xl mx-auto mb-16 relative z-10 font-light">
            No sales scripts or junior account handoffs. Talk directly with senior AI engineers to scope, prototype, and deploy your production system.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-bold text-white tracking-tight leading-none mb-3">
                4<span className="text-[#fafafa]">+</span>
              </div>
              <div className="text-sm md:text-base font-semibold text-white/70">
                Products shipped
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-bold text-white tracking-tight leading-none mb-3">
                8<span className="text-[#fafafa]">+</span>
              </div>
              <div className="text-sm md:text-base font-semibold text-white/70">
                Clients served
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-bold text-white tracking-tight leading-none mb-3">
                100<span className="text-[#fafafa]">%</span>
              </div>
              <div className="text-sm md:text-base font-semibold text-white/70">
                Client retention
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-bold text-white tracking-tight leading-none mb-3">
                2<span className="text-[#fafafa]"> wks</span>
              </div>
              <div className="text-sm md:text-base font-semibold text-white/70">
                Avg. to first prototype
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-ink text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand hover:text-white hover:shadow-[0_0_32px_rgba(255,81,0,0.4)] hover:scale-[1.03] active:scale-100"
            >
              <span>Talk to an engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
