"use client";

import { Section } from "@/components/ui/Section";
import { useInView } from "@/lib/hooks/useInView";

export default function AboutStory() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [narrativeRef, narrativeInView] = useInView<HTMLDivElement>(0.15);

  return (
    <Section bg="void" className="relative overflow-hidden border-b border-hairline">
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
        <h2 className="text-[55px] font-semibold leading-[1.15] tracking-tight text-ink max-w-5xl">
          The Software industry got very good at{" "}
          <span className="text-faint font-semibold">demos</span> and very bad at{" "}
          <span className="text-faint font-semibold">delivery</span>.
        </h2>

        {/* 3. Supporting Paragraph */}
        <p className="mt-8 md:mt-10 text-xl md:text-2xl text-mist font-light leading-relaxed max-w-3xl">
          Every company we talked to had seen the pitch. The polished demo. The proof of concept that looked promising — right up until it had to work inside a real business.
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
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-ink tracking-tight leading-[1.2]">
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
            &ldquo;We don't build software for the sake of building it. We build what needs to exist — and make sure it works in the real world.&rdquo;
          </p>
        </div>
      </div>
    </Section>
  );
}