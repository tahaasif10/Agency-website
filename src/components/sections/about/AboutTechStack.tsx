"use client";

import { useRef, useEffect, useState, RefObject } from "react";

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

const ROW_1: string[] = [
  "OpenAI",
  "Anthropic",
  "LangChain",
  "AWS",
  "Vercel",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Pinecone",
  "Next.js",
];

const ROW_2: string[] = [
  "Python",
  "TypeScript",
  "Supabase",
  "Redis",
  "GitHub Actions",
  "Terraform",
  "Hugging Face",
  "FastAPI",
  "Node.js",
  "GCP",
];

interface LogoChipProps {
  name: string;
}

function LogoChip({ name }: LogoChipProps) {
  return (
    <div className="flex items-center gap-2.5 px-6 whitespace-nowrap flex-shrink-0 group">
      <span className="w-1.5 h-1.5 rounded-full bg-[#ccc] group-hover:bg-[#FF4400] transition-colors duration-300 flex-shrink-0" />
      <span className="text-[clamp(1.1rem,2vw,1.6rem)] font-light tracking-[-0.02em] text-[#c4c4c4] group-hover:text-[#1e1e21] transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: MarqueeRowProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex items-center"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((name, i) => (
          <LogoChip key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function AboutTechStack() {
  const [labelRef, labelInView] = useInView();
  const [headingRef, headingInView] = useInView();

  return (
    <section className="bg-white py-[clamp(6rem,12vw,10rem)] relative z-[2] overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="px-[clamp(1.5rem,5vw,4rem)] max-w-[1980px] mx-auto">
        {/* Section header */}
        <div className="max-w-[900px] mb-14 md:mb-20">
          <div
            ref={labelRef}
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out ${
              labelInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF4400] flex-shrink-0" />
            <span className="text-[#999] text-sm uppercase tracking-[0.15em] font-medium">
              Tools We Trust
            </span>
          </div>

          <h2
            ref={headingRef}
            className={`font-light text-[#1e1e21] m-0 leading-[1.15] text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.04em] transition-all duration-700 ease-out ${
              headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Production-grade tools, not
            <br className="hidden md:block" /> whatever&apos;s trending this week.
          </h2>
        </div>
      </div>

      {/* Marquee rows — full bleed, edge-faded */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-6 md:gap-8 py-4">
          <MarqueeRow items={ROW_1} direction="left" speed={45} />
          <MarqueeRow items={ROW_2} direction="right" speed={50} />
        </div>
      </div>
    </section>
  );
}