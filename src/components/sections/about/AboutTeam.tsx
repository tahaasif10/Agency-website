"use client";

import { useInView } from "@/lib/hooks/useInView";
import { teamData } from "@/lib/data/team";
import { agencyData } from "@/lib/data/agency";
import { Code, Cpu, Server, UserX } from "lucide-react";

const ICON_MAP: Record<number, React.ElementType> = {
  0: Cpu,
  1: Code,
  2: Server,
};

export default function AboutTeam(): JSX.Element {
  const [labelRef, labelInView] = useInView<HTMLDivElement>(0.2);
  const [headingRef, headingInView] = useInView<HTMLHeadingElement>(0.2);

  return (
    <section className="bg-void text-ink py-24 px-6 md:px-12 border-b border-hairline relative z-[2]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div
            ref={labelRef}
            className={`flex items-center gap-2 mb-3 transition-all duration-700 ease-out ${
              labelInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              Engineering Collective
            </span>
          </div>

          <h2
            ref={headingRef}
            className={`font-light text-ink m-0 leading-[1.15] text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out ${
              headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The {agencyData.name} Engineering Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamData.map((member, i) => {
            const Icon = ICON_MAP[i] || Cpu;
            return (
              <div
                key={member.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  member.highlight
                    ? "border border-brand/40 bg-surface-2 shadow-[0_0_30px_rgba(255,81,0,0.12)]"
                    : "border border-hairline bg-surface hover:border-brand/30"
                }`}
              >
                <div>
                  {/* Icon & Count */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-3xl font-light text-brand">{member.count}</span>
                  </div>

                  {/* Role */}
                  <h3 className="text-xl font-medium text-ink mb-2">{member.role}</h3>

                  {/* Bio */}
                  <p className="text-mist text-sm leading-relaxed mb-6">{member.bio}</p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-hairline mb-4">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-mist bg-surface-2 border border-hairline px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {member.footnote && (
                    <p className="text-brand text-xs font-mono leading-relaxed">
                      💡 {member.footnote}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}