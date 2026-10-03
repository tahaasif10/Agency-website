"use client";

import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";

interface TeamRole {
  count: string;
  role: string;
  description: string;
  highlightNote?: string;
  isFeatured?: boolean;
}

const TEAM_ROLES: TeamRole[] = [
  {
    count: "6",
    role: "Full-Stack Engineers",
    description:
      "Building the backend architecture, APIs, and applications your systems run on — from web to mobile, start to finish.",
  },
  {
    count: "2",
    role: "AI/ML Engineers",
    description:
      "Embedding AI where it earns its place — agent systems, RAG pipelines, and fine-tuned models built to survive production, not just a demo.",
  },
  {
    count: "2",
    role: "DevOps Engineers",
    description:
      "Deployment, monitoring, and infrastructure automation — so what we ship stays reliable after launch, not just at handoff.",
  },
  {
    count: "0",
    role: "Salespeople",
    description:
      "Because the engineers who build your solution should be the ones you talk to from day one",
    highlightNote: "Engineers handle everything from discovery to deployment",
    isFeatured: true,
  },
];

export default function AboutTeam() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [gridRef, gridInView] = useInView<HTMLDivElement>(0.15);

  return (
    <Section id="team" bg="void" className="relative border-b border-hairline">
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
                05 — THE TEAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.12]">
              The Fostyn Engineering Team
            </h2>
          </div>

          <p className="text-base md:text-lg text-mist font-light leading-relaxed">
            No account managers, no sales layer — every person on this team writes code.
          </p>
        </div>

        {/* Tray: three flat role cards, then the inverted "0 Salespeople" card */}
        <div
          ref={gridRef}
          className={`transition-opacity duration-700 ease-out ${
            gridInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] gap-1 p-1 bg-ink/[0.06] border border-hairline">
            {TEAM_ROLES.map((item) => {
              if (item.isFeatured) {
                return (
                  <div
                    key={item.role}
                    className="relative flex flex-col overflow-hidden bg-[#0b0b0c] p-6 md:p-8 min-h-[360px] cursor-default"
                  >
                    {/* Dot grid + soft brand glow, matching the services closing band */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at 100% 100%, black 10%, transparent 70%)",
                        maskImage:
                          "radial-gradient(ellipse at 100% 100%, black 10%, transparent 70%)",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at 100% 100%, rgba(255,91,31,0.35) 0%, rgba(255,91,31,0.12) 35%, transparent 70%)",
                      }}
                    />

                    <span aria-hidden="true" className="relative block w-3.5 h-3.5 bg-brand" />

                    <p className="relative mt-8 text-6xl md:text-7xl font-semibold text-brand tracking-tight leading-none">
                      {item.count}
                    </p>

                    <h3 className="relative mt-5 text-lg md:text-xl font-medium text-white tracking-tight">
                      {item.role}
                    </h3>

                    <p className="relative mt-3 text-sm text-white/70 font-light leading-relaxed max-w-[34ch]">
                      {item.description}
                    </p>

                    {item.highlightNote && (
                      <div className="relative mt-auto pt-8">
                        <div className="flex items-start gap-3 border-t border-white/10 pt-5">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 block w-2 h-2 flex-shrink-0 bg-brand"
                          />
                          <p className="text-sm font-medium text-white leading-snug">
                            {item.highlightNote}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div
                  key={item.role}
                  className="flex flex-col bg-surface p-6 md:p-8 min-h-[360px] cursor-default"
                >
                  <span aria-hidden="true" className="block w-3.5 h-3.5 bg-ink/20" />

                  <p className="mt-8 text-6xl md:text-7xl font-semibold text-ink tracking-tight leading-none">
                    {item.count}
                  </p>

                  <h3 className="mt-5 text-lg md:text-xl font-medium text-ink tracking-tight">
                    {item.role}
                  </h3>

                  <p className="mt-3 text-sm text-mist font-light leading-relaxed max-w-[34ch]">
                    {item.description}
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