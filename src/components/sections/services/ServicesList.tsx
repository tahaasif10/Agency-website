"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Bot, Database, Cpu, Eye, Sliders, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Bot,
  Database,
  Cpu,
  Eye,
  Sliders,
};

export default function ServicesList() {
  return (
    <section className="py-24 px-6 md:px-12 bg-void text-ink border-b border-hairline">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand block mb-3">
            Capabilities &amp; Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-ink max-w-3xl leading-[1.1] mb-6">
            End-to-end AI capabilities built for <span className="font-normal text-brand">production scale.</span>
          </h1>
          <p className="text-mist text-lg max-w-2xl leading-relaxed">
            From foundational LLM architecture to autonomous multi-agent work streams and quantized local models.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Sparkles;
            return (
              <div
                key={service.slug}
                className="group flex flex-col justify-between rounded-3xl bg-surface border border-hairline p-8 hover:border-brand/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,81,0,0.12)]"
              >
                <div>
                  {/* Badge */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-2 border border-hairline px-3 py-1.5 text-xs font-mono text-brand">
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{service.badge}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-medium text-ink mb-3 leading-snug group-hover:text-brand transition-colors">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-mist text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-ink">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                        <span>{feat.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase font-semibold text-brand hover:text-brand-bright transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-surface-2 border border-hairline rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-ink mb-2">
              Have a custom AI requirement?
            </h3>
            <p className="text-mist text-sm max-w-lg">
              We build specialized architectures that fit directly into your existing infrastructure.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-ink font-mono text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-bright transition-all shadow-[0_0_20px_rgba(255,81,0,0.25)]"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}