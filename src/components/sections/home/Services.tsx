"use client";

interface Service {
  number: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Generative AI Development",
    description: "Building custom generative models tailored to your product.",
  },
  {
    number: "02",
    title: "AI Agent Development",
    description: "Autonomous agents that plan, act, and complete real tasks.",
  },
  {
    number: "03",
    title: "AI Chatbot Development",
    description: "Conversational bots designed around your users' intent.",
  },
  {
    number: "04",
    title: "Conversational AI for Customer Service",
    description: "Support automation that resolves, escalates, and learns.",
  },
  {
    number: "05",
    title: "Generative AI Consulting",
    description: "Strategy and roadmapping for adopting AI the right way.",
  },
  {
    number: "06",
    title: "White-Label Artificial Intelligence",
    description: "AI products you can rebrand and ship as your own.",
  },
  {
    number: "07",
    title: "Predictive Analytics",
    description: "Forecasting models that turn your data into decisions.",
  },
  {
    number: "08",
    title: "Custom Computer Vision Software Development",
    description: "Vision systems built for detection, tracking, and QA.",
  },
  {
    number: "09",
    title: "Fine-Tuning LLM",
    description: "Adapting foundation models to your domain and voice.",
  },
  {
    number: "10",
    title: "LLM Development",
    description: "End-to-end large language model builds, from data to deploy.",
  },
  {
    number: "11",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Grounding model outputs in your own knowledge base.",
  },
  {
    number: "12",
    title: "Best AI Voice Agents",
    description: "Natural-sounding voice agents for calls and support lines.",
  },
  {
    number: "13",
    title: "NLP Development",
    description: "Text understanding, extraction, and classification at scale.",
  },
];

// Extend CSSProperties so custom CSS variables (--void, --surface, etc.)
// are accepted by TypeScript's type checker.
interface ThemeStyle extends React.CSSProperties {
  "--void"?: string;
  "--surface"?: string;
  "--hairline"?: string;
  "--ink"?: string;
  "--mist"?: string;
  "--signal"?: string;
  "--fill"?: string;
}

export default function ServicesAccordion(): JSX.Element {
  const themeStyle: ThemeStyle = {
    "--void": "#060607",
    "--surface": "#0F1011",
    "--hairline": "#242526",
    "--ink": "#FAFAFA",
    "--mist": "#9A9A9C",
    "--signal": "#FF5100",
    "--fill": "#2A140A",
  };

  return (
    <div
      className="px-[clamp(1.5rem,5vw,4rem)] max-w-[1980px] mx-auto bg-[var(--void)]"
      style={themeStyle}
    >
      <hr className="border-0 border-t border-[var(--hairline)] m-0" />

      <header className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-x-[clamp(2rem,6vw,6rem)] gap-y-4 items-end pt-[clamp(3rem,6vw,5rem)] pb-[clamp(2rem,4vw,3.5rem)]">
        <h2 className="font-bold text-[var(--ink)] tracking-[-0.04em] leading-[1.1] m-0 text-[clamp(2rem,4vw,3.5rem)] max-w-[18ch]">
          What end-to-end{" "}
          <em className="italic font-light text-[var(--signal)]">
            AI development
          </em>{" "}
          services do we offer?
        </h2>
        <p className="text-[var(--mist)] m-0 leading-[1.65] max-w-[50ch] text-[clamp(0.95rem,1.2vw,1.1rem)]">
          As a custom AI development company and a trusted AI development
          services company, we ship end-to-end across the full AI stack —
          from large language models and intelligent agents to automation,
          predictive analytics, and computer vision. Every solution is
          tailored to your industry, scaled to your business, and engineered
          for production from day one.
        </p>
      </header>

      <div className="border-t border-[var(--hairline)]">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="svc-row group relative w-full grid items-center py-7 gap-4 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] border-b border-[var(--hairline)] pl-4"
          >
            <span className="pointer-events-none absolute left-0 top-0 h-full w-0 border-l-[3px] border-[var(--signal)] opacity-0 transition-[width,opacity] duration-300 ease-in-out group-hover:w-3 group-hover:opacity-100" />
            <span className="font-['Mona_Sans',ui-sans-serif,system-ui,sans-serif] font-normal text-[#fafafa] tracking-[-0.03em] leading-tight text-[clamp(1.3rem,2.5vw,2rem)]">
              {service.title}
            </span>
            <span className="font-['Mona_Sans',ui-sans-serif,system-ui,sans-serif] text-[var(--mist)] leading-[1.6] text-[clamp(0.9rem,1.1vw,1rem)] max-w-[46ch]">
              {service.description}
            </span>
            <span className="font-['Mona_Sans',ui-sans-serif,system-ui,sans-serif] font-normal text-[var(--ink)] opacity-[0.4] tracking-[0.02em] leading-none tabular-nums text-[clamp(1.4rem,2vw,1.9rem)] justify-self-start md:justify-self-end transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {service.number}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:justify-end pt-[clamp(2.5rem,5vw,4rem)] pb-[clamp(3rem,6vw,5rem)]">
        <a
          href="/services"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-black/15 bg-[#111111] px-7 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 ease-out hover:border-[#FF4400]/20 hover:shadow-lg active:scale-95 active:duration-100"
        >
          <span className="absolute inset-0 -translate-x-full bg-[#FF4400] transition-transform duration-300 ease-out group-hover:translate-x-0"></span>

          <span className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-px">
            View all Services
          </span>

          <span className="relative z-10 inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-px">
            →
          </span>
        </a>
      </div>
    </div>
  );
}