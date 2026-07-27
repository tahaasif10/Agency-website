"use client";

import { useEffect, useRef, useState, RefObject, ReactNode } from "react";

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

interface ValueItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
    title: "Ship fast, ship right",
    description: "Speed without correctness is just debt with extra steps.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-2 2.83V11a3 3 0 0 0 1 2.24V15a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-1.76A3 3 0 0 0 18 11V9.83A3 3 0 0 0 16 7V6a4 4 0 0 0-4-4Z" />
      </svg>
    ),
    title: "Judgment, not just automation",
    description: "We use AI where it earns its place, not because it's trending.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20" />
        <path d="M12 2v20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Numbers over narratives",
    description: "Success is measured in metrics you track, not slides we present.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 12 2 2 4-4" />
        <path d="M12 2 3 6v6c0 5 3.5 9 9 10 5.5-1 9-5 9-10V6l-9-4Z" />
      </svg>
    ),
    title: "No black boxes",
    description: "You see the architecture, the trade-offs, and the code. Always.",
  },
];

interface ValueCardProps {
  value: ValueItem;
  index: number;
}

function ValueCard({ value, index }: ValueCardProps): JSX.Element {
  const [ref, inView] = useInView(0.2);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group border border-[#e8e8e8] rounded-2xl p-7 bg-white hover:border-[#1e1e21] transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 bg-[#f5f5f5] text-[#1e1e21] group-hover:bg-[#FF4400] group-hover:text-white transition-colors duration-300">
        {value.icon}
      </div>

      <h3 className="text-[#1e1e21] text-[1.05rem] font-medium tracking-[-0.01em] mb-2 leading-[1.3]">
        {value.title}
      </h3>

      <p className="text-[#777] text-[0.9rem] leading-[1.6] m-0">
        {value.description}
      </p>
    </div>
  );
}

export default function AboutValues(): JSX.Element {
  const [labelRef, labelInView] = useInView();
  const [headingRef, headingInView] = useInView();

  return (
    <section className="bg-[#fafafa] py-[clamp(6rem,12vw,10rem)] relative z-[2]">
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
              What We Believe
            </span>
          </div>

          <h2
            ref={headingRef}
            className={`font-light text-[#1e1e21] m-0 leading-[1.15] text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.04em] transition-all duration-700 ease-out ${
              headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Principles we don't compromise on
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}