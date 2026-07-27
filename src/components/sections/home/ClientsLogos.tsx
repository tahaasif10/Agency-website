"use client";

const LOGOS = [
  {
    name: "Apex",
    svg: (
      <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
        <path d="M10 2L18 18H2L10 2Z" fill="currentColor" />
        <path d="M10 7L14 15H6L10 7Z" fill="currentColor" />
        <text x="24" y="17" fontFamily="var(--font-mono), monospace" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill="currentColor">APEX</text>
      </svg>
    ),
  },
  {
    name: "Vertex",
    svg: (
      <svg viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
        <rect x="2" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 5V19M2 12H16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
        <text x="24" y="17" fontFamily="var(--font-mono), monospace" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill="currentColor">VERTEX</text>
      </svg>
    ),
  },
  {
    name: "Echo AI",
    svg: (
      <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
        <circle cx="9" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="12" r="2.5" fill="currentColor" />
        <path d="M14.5 7C16.5 9 16.5 15 14.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <text x="24" y="17" fontFamily="var(--font-mono), monospace" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill="currentColor">ECHO</text>
      </svg>
    ),
  },
  {
    name: "Bolt",
    svg: (
      <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
        <path d="M11 2L4 12.5H10L8 22L15 11.5H9L11 2Z" fill="currentColor" />
        <text x="22" y="17" fontFamily="var(--font-mono), monospace" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill="currentColor">BOLT</text>
      </svg>
    ),
  },
  {
    name: "Acme",
    svg: (
      <svg viewBox="0 0 105 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
        <path d="M9 3L16 8V16L9 21L2 16V8L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 3V21" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" opacity="0.5" />
        <text x="24" y="17" fontFamily="var(--font-mono), monospace" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill="currentColor">ACME</text>
      </svg>
    ),
  },
  {
    name: "Orbit",
    svg: (
      <svg viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-auto">
        <circle cx="9" cy="12" r="5" fill="currentColor" />
        <ellipse cx="9" cy="12" rx="9" ry="2.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(-15 9 12)" />
        <text x="24" y="17" fontFamily="var(--font-mono), monospace" fontWeight="700" fontSize="12" letterSpacing="0.1em" fill="currentColor">ORBIT</text>
      </svg>
    ),
  },
];

export default function ClientsLogos() {
  return (
    <section className="relative w-full bg-void pt-12 pb-14 border-t border-hairline overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-mist">
          <span className="text-brand align-middle">✦</span>{" "}
          Trusted by forward-thinking teams
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 z-10 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 z-10 bg-gradient-to-l from-void to-transparent" />

        <div className="flex w-max animate-marquee-slide hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1, 2].map((setIndex) => (
            <div key={setIndex} className="flex items-center shrink-0 gap-12 md:gap-20 px-6 md:px-10">
              {LOGOS.map((logo, logoIndex) => (
                <div
                  key={`${setIndex}-${logoIndex}`}
                  className="flex items-center text-mist hover:text-ink transition-colors duration-300 hover:scale-105 cursor-pointer py-2"
                  title={logo.name}
                >
                  {logo.svg}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-slide {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333333%); }
        }
        .animate-marquee-slide {
          animation: marquee-slide 32s linear infinite;
        }
      `}</style>
    </section>
  );
}