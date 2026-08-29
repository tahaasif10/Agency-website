"use client";

import { useInView } from "@/lib/hooks/useInView";
import { Code2, Brain, Server, Users } from "lucide-react";

interface TeamRole {
  count: string;
  role: string;
  description: string;
  tags?: string[];
  highlightNote?: string;
  icon: React.ElementType;
  isFeatured?: boolean;
}

const TEAM_ROLES: TeamRole[] = [
  {
    count: "6",
    role: "Full-Stack Engineers",
    description:
      "Building the backend architecture, APIs, and applications your systems run on — from web to mobile, start to finish.",
    tags: ["React", "Next.js", "Node.js", "Python"],
    icon: Code2,
  },
  {
    count: "2",
    role: "AI/ML Engineers",
    description:
      "Embedding AI where it earns its place — agent systems, RAG pipelines, and fine-tuned models built to survive production, not just a demo.",
    tags: ["RAG architectures", "Model fine-tuning", "Prompt engineering"],
    icon: Brain,
  },
  {
    count: "2",
    role: "DevOps Engineers",
    description:
      "Deployment, monitoring, and infrastructure automation — so what we ship stays reliable after launch, not just at handoff.",
    tags: ["Docker", "Kubernetes", "CI/CD", "Infrastructure"],
    icon: Server,
  },
  {
    count: "0",
    role: "Salespeople",
    description:
      "Because the engineers who build your solution should be the ones you talk to from day one",
    highlightNote: "Engineers handle everything from discovery to deployment",
    icon: Users,
    isFeatured: true,
  },
];

export default function AboutTeam() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [gridRef, gridInView] = useInView<HTMLDivElement>(0.15);

  return (
    <section id="team" className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-12 border-b border-hairline">
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
              05 — THE TEAM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-ink tracking-tight leading-[1.12]">
            The Fostyn Engineering Team
          </h2>
          <h4>No account managers, no sales layer — every person on this team writes code.</h4>
        </div>

        {/* 4-Card Responsive Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch transition-all duration-700 ease-out delay-100 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {TEAM_ROLES.map((item, index) => {
            const Icon = item.icon;

            if (item.isFeatured) {
              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 bg-surface hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out cursor-default"
                  style={{
                    border: "2px solid transparent",
                    backgroundImage:
                      "linear-gradient(var(--color-surface), var(--color-surface)), var(--gradient-brand)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    boxShadow: "0 4px 24px -8px rgba(0,184,176,0.10)",
                  }}
                >
                  <div>
                    {/* Top Icon Squircle — gradient fill, white icon */}
                    <div
                      className="w-12 h-12 rounded-2xl shadow-sm flex items-center justify-center text-white mb-6"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Prominent Large Number */}
                    <div className="text-5xl sm:text-6xl font-bold font-sans gradient-text tracking-tight leading-none mb-3">
                      {item.count}
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">
                      {item.role}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-mist leading-relaxed font-normal mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Featured Highlight Footer */}
                  <div className="pt-5 border-t border-hairline">
                    <p className="text-sm font-semibold gradient-text leading-snug">
                      {item.highlightNote}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border border-hairline bg-surface hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_24px_48px_-12px_rgba(6,6,7,0.10)] hover:border-hairline-strong transition-all duration-300 ease-out cursor-default"
              >
                <div>
                  {/* Top Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-hairline/60 flex items-center justify-center text-ink mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Prominent Large Number */}
                  <div className="text-5xl sm:text-6xl font-bold font-sans text-ink tracking-tight leading-none mb-3">
                    {item.count}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-mist leading-relaxed font-normal mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Rounded Pill Tags Footer */}
                {item.tags && (
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 text-xs font-medium text-mist bg-surface-2 rounded-full tracking-tight"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}