"use client";

import { useInView } from "@/lib/hooks/useInView";
import { Bot, Database, Cpu, Layout } from "lucide-react";

interface Capability {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Autonomous Agents & Workflows",
    description:
      "Multi-agent orchestration, stateful task execution, tool use, and self-correcting logic built with human-in-the-loop safety controls.",
    tags: ["LangGraph", "Tool Execution", "Multi-Agent", "Human-in-the-loop"],
    icon: Bot,
  },
  {
    number: "02",
    title: "Enterprise RAG & Knowledge Systems",
    description:
      "Hybrid vector search, semantic parsing, re-ranking, and access-controlled retrieval for zero-hallucination enterprise data engines.",
    tags: ["Hybrid Search", "Vector Databases", "Document Ingestion", "RBAC"],
    icon: Database,
  },
  {
    number: "03",
    title: "Custom Model Fine-Tuning & MLOps",
    description:
      "Domain-specific open-weights tuning (Llama, DeepSeek, Qwen) using LoRA/QLoRA for total IP ownership and private VPC/on-prem deployment.",
    tags: ["LoRA / QLoRA", "vLLM / Ollama", "Model Quantization", "Private VPC"],
    icon: Cpu,
  },
  {
    number: "04",
    title: "Full-Stack AI Interfaces & Systems",
    description:
      "Production Next.js frontends, low-latency streaming backends, real-time observability, and schema-enforced validation pipelines.",
    tags: ["Next.js & React", "FastAPI", "Telemetry & Evals", "Schema Validation"],
    icon: Layout,
  },
];

export default function AboutWhatWeDo() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [gridRef, gridInView] = useInView<HTMLDivElement>(0.15);

  return (
    <section id="what-we-do" className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-12 border-b border-hairline">
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
              02 — WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-tight leading-[1.12]">
            Engineering the systems around modern intelligence.
          </h2>

          <p className="mt-5 text-lg md:text-xl text-mist font-light leading-relaxed max-w-2xl">
            We don&apos;t build toy wrappers. We architect and deploy the end-to-end infrastructure, agentic workflows, and domain models that power real operations.
          </p>
        </div>

        {/* Capabilities 2x2 Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch transition-all duration-700 ease-out delay-100 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.number}
                className="relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border border-hairline bg-surface hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(6,6,7,0.10)] hover:border-hairline-strong transition-all duration-300 ease-out cursor-default group"
              >
                <div>
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-hairline/60 flex items-center justify-center text-ink transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                      {cap.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-medium text-ink mb-3 tracking-tight">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-mist leading-relaxed font-light mb-8">
                    {cap.description}
                  </p>
                </div>

                {/* Pill Tags Footer */}
                <div className="pt-4 border-t border-hairline">
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 text-xs font-medium text-mist bg-surface-2 rounded-full tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
