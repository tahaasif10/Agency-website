"use client";

import { useInView } from "@/lib/hooks/useInView";

interface Principle {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Problem first",
    description:
      "We start with the business problem, not a predetermined technology stack.",
  },
  {
    number: "02",
    title: "Production matters",
    description:
      "A successful prototype means nothing if it can't survive real users, real data and real workloads.",
  },
  {
    number: "03",
    title: "Outcomes over hype",
    description:
      "We measure what we build by the value it creates, not how impressive the demo looks.",
  },
];

export default function AboutStory() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [narrativeRef, narrativeInView] = useInView<HTMLDivElement>(0.15);
  const [principlesRef, principlesInView] = useInView<HTMLDivElement>(0.15);

  return (
    <section className="relative bg-paper text-ink py-24 md:py-36 px-6 md:px-12 border-b border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Block: Eyebrow + Large Opening Statement + Supporting Paragraph */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* 1. Eyebrow */}
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="w-1.5 h-1.5 rounded-full gradient flex-shrink-0" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] gradient-text">
              01 — WHY WE EXIST
            </span>
          </div>

          {/* 2. Large Opening Statement */}
          <h2 className="text-[clamp(2.2rem,4.5vw,4.25rem)] font-light leading-[1.15] tracking-tight text-ink max-w-5xl">
            The AI industry got very good at{" "}
            <span className="text-faint font-normal">demos</span> and very bad at{" "}
            <span className="text-faint font-normal">delivery</span>.
          </h2>

          {/* 3. Supporting Paragraph */}
          <p className="mt-8 md:mt-10 text-xl md:text-2xl text-mist font-light leading-relaxed max-w-3xl">
            Every company we talked to had already sat through a pitch, watched a
            polished proof-of-concept, and then waited months for something that
            never actually shipped.
          </p>
        </div>

        {/* Middle Block: Asymmetrical Narrative & Philosophy */}
        <div
          ref={narrativeRef}
          className={`mt-20 md:mt-28 pt-16 md:pt-20 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start transition-all duration-700 ease-out delay-100 ${
            narrativeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* 4 & 5. Secondary Heading & Supporting Explanation */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-ink tracking-tight leading-[1.2]">
              So we built the company we wished existed.
            </h3>
            <p className="text-base md:text-lg text-mist leading-relaxed font-light">
              Fostyn exists to close the gap between a model performing in a
              sandbox and software working inside a real business. We build the
              systems around the intelligence — the integrations, interfaces,
              infrastructure, automation and workflows that turn AI into something
              people can actually use.
            </p>
          </div>

          {/* 6. Strong Philosophy Statement Callout */}
          <div className="lg:col-span-5 bg-surface border border-hairline rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_-10px_rgba(6,6,7,0.04)]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] gradient-text block mb-4">
              Core Philosophy
            </span>
            <p className="text-lg md:text-xl font-normal text-ink leading-relaxed tracking-tight">
              &ldquo;We don&apos;t sell AI. We build working software that happens
              to use AI where it earns its place.&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom Block: 7. Three Concise Principles */}
        <div
          ref={principlesRef}
          className={`mt-20 md:mt-28 pt-16 border-t border-hairline transition-all duration-700 ease-out delay-150 ${
            principlesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="flex flex-col justify-start border-l border-hairline pl-6 py-2 group transition-colors duration-300 hover:border-l-2 hover:[border-image:linear-gradient(to_bottom,var(--color-brand-from),var(--color-brand-to))_1]"
              >
                <span className="font-mono text-xs font-semibold gradient-text tracking-widest mb-3">
                  {principle.number}
                </span>
                <h4 className="text-lg font-medium text-ink mb-2 tracking-tight">
                  {principle.title}
                </h4>
                <p className="text-sm text-mist leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}