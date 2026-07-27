"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

// Color tokens
const COLORS = {
  void: "#060607",     // page background
  hairline: "#242526", // borders, dividers, icon circle default
  ink: "#FAFAFA",       // primary text
  mist: "#9A9A9C",      // secondary text
  signal: "#FF5100",    // signature accent — FAQ label, hover states, active icon
} as const;

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What kind of AI solutions do you build?",
      answer: "We build custom AI systems — from automation workflows and internal tools to full AI-powered products — tailored to your specific business problem, not off-the-shelf templates.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects launch a working version in 2–4 weeks, depending on scope. We share progress in sprints so you're never left waiting for a big reveal.",
    },
    {
      question: "Do I need technical knowledge to work with you?",
      answer: "Not at all. We handle the technical side end-to-end and explain everything in plain business terms — you focus on your goals, we handle the execution.",
    },
    {
      question: "What if I already have an existing system or team?",
      answer: "We're built to integrate, not replace. We can work alongside your existing tools, team, or codebase, or build something new if that's a better fit.",
    },
    {
      question: "How much does a project cost?",
      answer: "Every project is scoped individually based on complexity, but most engagements start at [$X]. We'll give you a clear quote after understanding your specific needs — no hidden fees.",
    },
    {
      question: "What happens after the project launches?",
      answer: "We don't disappear at launch. We offer ongoing support, monitoring, and optimization to make sure your system keeps performing as your business scales.",
    },
    {
      question: "Do you sign NDAs and handle data securely?",
      answer: "Yes — we take data privacy seriously and are happy to sign NDAs before any discovery call. Your data and workflows stay confidential throughout.",
    },
    {
      question: "What if I'm not sure AI is right for my business yet?",
      answer: "That's exactly what our discovery call is for. We'll assess your business honestly — if AI isn't the right fit, we'll tell you, no pushy sales pitch.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="px-[clamp(1.5rem,5vw,4rem)] py-28 max-w-[1980px] mx-auto relative overflow-hidden"
      style={{ background: COLORS.void }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Split grid layout: 1 col on mobile, 2 cols (35% / 65%) on md and up */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12 md:gap-16">

          {/* Left Column: Heading and Tag */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: COLORS.signal }}
              />
              <span
                className="font-mono text-xs font-bold tracking-[0.15em] uppercase"
                style={{ color: COLORS.signal }}
              >
                FAQ
              </span>
            </div>

            <h2
              className="font-bold tracking-[-0.03em] leading-[1.1] text-[clamp(2rem,3.5vw,3rem)] max-w-[15ch]"
              style={{ color: COLORS.ink }}
            >
              Frequently Asked Questions
            </h2>

            <p
              className="mt-6 text-sm md:text-base leading-[1.65] max-w-[32ch]"
              style={{ color: COLORS.mist }}
            >
              Have a different question or a custom requirement? Feel free to contact our team.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="faq-cta group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-300"
                style={{ color: COLORS.ink }}
              >
                Get in touch
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="border-t" style={{ borderColor: COLORS.hairline }}>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="border-b py-6 md:py-8 transition-colors duration-300"
                  style={{ borderColor: COLORS.hairline }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="faq-question w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="faq-question-text font-sans font-bold text-lg md:text-xl leading-snug transition-colors duration-300"
                      style={{ color: COLORS.ink }}
                    >
                      {faq.question}
                    </span>

                    <span
                      className="faq-icon flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-transparent transition-all duration-300"
                      style={{
                        border: `1px solid ${COLORS.hairline}`,
                        color: COLORS.ink,
                        ...(isOpen
                          ? {
                              transform: "rotate(45deg)",
                              background: COLORS.signal,
                              borderColor: "transparent",
                              color: COLORS.void,
                            }
                          : {}),
                      }}
                    >
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="font-sans text-sm md:text-base leading-[1.65] max-w-[55ch]"
                        style={{ color: COLORS.mist }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        .faq-cta:hover {
          color: ${COLORS.signal} !important;
        }
        .faq-question:hover .faq-question-text {
          color: ${COLORS.signal} !important;
        }
        .faq-question:hover .faq-icon {
          background: ${COLORS.signal} !important;
          border-color: transparent !important;
          color: ${COLORS.void} !important;
        }
      `}</style>
    </section>
  );
}