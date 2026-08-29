"use client";

import { useEffect, useRef, useState, RefObject } from "react";

function useInView(
  threshold: number = 0.2
): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function AboutBelief() {
  const [quoteRef, quoteInView] = useInView();
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <section className="bg-[#fafafa] py-[clamp(6rem,12vw,10rem)] relative z-[2] overflow-hidden">
      <div className="px-[clamp(1.5rem,5vw,4rem)] max-w-[1980px] mx-auto">
        {/* Label */}
        <div
          ref={leftRef}
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ease-out ${
            leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF4400] flex-shrink-0" />
          <span className="text-[#999] text-sm uppercase tracking-[0.15em] font-medium">
            Why We Exist
          </span>
        </div>

        {/* Big statement */}
        <p
          ref={quoteRef}
          className={`text-[#1e1e21] font-light m-0 max-w-[1400px] text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.25] tracking-[-0.03em] transition-all duration-700 ease-out ${
            quoteInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The AI industry got very good at{" "}
          <span className="text-[#999]">demos</span> and very bad at{" "}
          <span className="text-[#999]">delivery</span>. Every company we
          talked to had already sat through a pitch, watched a slick
          proof-of-concept, and then waited months for something that never
          actually shipped.
        </p>

        {/* Supporting two-column narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-16 pt-[clamp(2rem,4vw,3rem)] border-t border-[#e5e5e5]">
          <div
            ref={rightRef}
            className={`transition-all duration-700 ease-out ${
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-[#1e1e21] font-light text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.4] tracking-[-0.02em] mb-4">
              So we built the company we wished existed.
            </h3>
            <p className="text-[#777] text-[clamp(0.95rem,1.2vw,1.0625rem)] leading-[1.7] m-0">
              One that treats a model as a component, not a product. One that
              measures success in production uptime and business outcomes,
              not in how impressive a screen recording looks. Xpiderz was
              built for the last mile, the unglamorous part where research
              meets reality.
            </p>
          </div>

          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              rightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-[#1e1e21] font-light text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.4] tracking-[-0.02em] mb-4">
              That belief still runs everything we do.
            </h3>
            <p className="text-[#777] text-[clamp(0.95rem,1.2vw,1.0625rem)] leading-[1.7] m-0">
              We don&apos;t sell AI. We sell working software that happens to use
              AI where it earns its place. If a simpler solution gets you
              there faster and cheaper, we&apos;ll build that instead, even if
              it means a smaller invoice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}