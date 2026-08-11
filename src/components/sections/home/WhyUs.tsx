import React, { JSX } from "react";

type IconKey = "sparkle" | "chevrons" | "arch" | "dots";

const icons: Record<IconKey, JSX.Element> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z"
        fill="currentColor"
      />
    </svg>
  ),
  chevrons: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path d="M2 4 L11 12 L2 20 Z" fill="currentColor" />
      <path d="M13 4 L22 12 L13 20 Z" fill="currentColor" />
    </svg>
  ),
  arch: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M5 22 V11 C5 6 8.5 2 12 2 C15.5 2 19 6 19 11 V22 H14 V11 C14 9.5 13 8.5 12 8.5 C11 8.5 10 9.5 10 11 V22 Z"
        fill="currentColor"
      />
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <circle cx="7" cy="7" r="4.5" fill="currentColor" />
      <circle cx="17" cy="7" r="4.5" fill="currentColor" />
      <circle cx="7" cy="17" r="4.5" fill="currentColor" />
      <circle cx="17" cy="17" r="4.5" fill="currentColor" />
    </svg>
  ),
};

interface Advantage {
  icon: JSX.Element;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: icons.sparkle,
    title: "Results that matter",
    description: "Driving real impact through purposeful design.",
  },
  {
    icon: icons.chevrons,
    title: "Cutting-edge design",
    description: "Modern, bold visuals that capture attention.",
  },
  {
    icon: icons.arch,
    title: "Strategy-driven approach",
    description: "Every move backed by insight and purpose.",
  },
  {
    icon: icons.dots,
    title: "Innovation at the core",
    description: "Fresh ideas that challenge the ordinary.",
  },
  {
    icon: icons.sparkle,
    title: "Effortless teamwork",
    description: "Work smoothly together with perfect sync and shared focus.",
  },
];

export default function AdvantageSection(): JSX.Element {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-void text-ink border-t border-hairline">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        {/* Left: Title block */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="uppercase leading-[0.95] text-5xl md:text-6xl tracking-tight text-ink font-bold">
              What makes
              <br />
              us unique
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-sm font-medium text-mist">
            Futuristic AR interface with intuitive design and smooth,
            responsive user experience.
          </p>
        </div>

        {/* Right: Service list */}
        <div className="flex flex-col">
          <div className="w-full border-t border-hairline" />
          {advantages.map((item, index) => (
            <div key={index} className="w-full advantage-row group">
              <div className="flex items-center gap-5 py-7">
                <div className="advantage-icon w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 bg-surface border border-hairline text-mist group-hover:border-brand group-hover:text-brand">
                  {item.icon}
                </div>
                <h6 className="uppercase leading-tight text-xl md:text-2xl tracking-tight flex-shrink-0 basis-1/2 text-ink font-bold">
                  {item.title}
                </h6>
                <p className="text-xs md:text-sm font-medium leading-snug text-mist">
                  {item.description}
                </p>
              </div>
              <div className="w-full border-t border-hairline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}