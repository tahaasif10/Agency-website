"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import { caseStudiesData } from "@/lib/data/caseStudies";

export default function WorkGrid(): React.JSX.Element {
  return (
    <section className="py-24 px-6 md:px-12 bg-void text-ink border-b border-hairline">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gradient-brand block mb-3">
            Case Studies &amp; Engineering Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-ink max-w-3xl leading-[1.1] mb-6">
            Production AI systems shipped for <span className="font-normal text-gradient-brand">real enterprises.</span>
          </h1>
          <p className="text-mist text-lg max-w-2xl leading-relaxed">
            Real systems, operating in production under heavy load, backed by measurable business metrics.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudiesData.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group block rounded-3xl border border-hairline bg-surface p-8 transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_30px_rgba(255,81,0,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Client & Industry Tag */}
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-mist">
                  <span className="text-brand font-semibold">{item.client}</span>
                  <span className="text-faint uppercase">{item.industry}</span>
                </div>

                {/* Case Study Title */}
                <h2 className="text-xl font-medium mb-3 text-ink leading-snug group-hover:text-brand transition-colors">
                  {item.name}
                </h2>

                {/* Key Result Metric */}
                <div className="mb-4 inline-block px-3 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-mono font-semibold">
                  ⚡ {item.results[0]?.metric} — {item.results[0]?.label}
                </div>

                {/* Summary */}
                <p className="text-mist text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-hairline bg-surface-2 text-mist px-2.5 py-1 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Case Study Link */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-semibold text-ink group-hover:text-brand transition-colors pt-4 border-t border-hairline">
                <span>Explore Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="bg-surface-2 border border-hairline rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-ink mb-2">
              Have a custom system in mind?
            </h2>
            <p className="text-mist text-sm max-w-lg">
              Tell us what you&apos;re trying to solve—we&apos;ll evaluate if AI is the right tool for it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand text-ink px-8 py-4 rounded-full text-xs font-mono font-semibold uppercase tracking-wider hover:bg-brand-bright transition-all shadow-[0_0_20px_rgba(255,81,0,0.25)]"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}