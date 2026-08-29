"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What kind of AI solutions do you build?",
      answer:
        "We build custom AI systems — from automation workflows and internal tools to full AI-powered products — tailored to your specific business problem, not off-the-shelf templates.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Most projects launch a working version in 2–4 weeks, depending on scope. We share progress in sprints so you're never left waiting for a big reveal.",
    },
    {
      question: "Do I need technical knowledge to work with you?",
      answer:
        "Not at all. We handle the technical side end-to-end and explain everything in plain business terms — you focus on your goals, we handle the execution.",
    },
    {
      question: "What if I already have an existing system or team?",
      answer:
        "We're built to integrate, not replace. We can work alongside your existing tools, team, or codebase, or build something new if that's a better fit.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Every project is scoped individually based on complexity. We'll give you a clear quote after a discovery call — no hidden fees, no 'starting at' number that doesn't hold up once we scope the real work.",
    },
    {
      question: "What happens after the project launches?",
      answer:
        "We don't disappear at launch. We offer ongoing support, monitoring, and optimization to make sure your system keeps performing as your business scales.",
    },
    {
      question: "Do you sign NDAs and handle data securely?",
      answer:
        "Yes — we take data privacy seriously and are happy to sign NDAs before any discovery call. Your data and workflows stay confidential throughout.",
    },
    {
      question: "What if I'm not sure AI is right for my business yet?",
      answer:
        "That's exactly what our discovery call is for. We'll assess your business honestly — if AI isn't the right fit, we'll tell you, no pushy sales pitch.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq" bg="void" className="relative overflow-hidden border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12 md:gap-16">
          {/* Left Column: Heading */}
          <div className="flex flex-col items-start h-full">
            <h2 className="font-mona-sans font-bold tracking-[-0.03em] leading-[1.1] text-[clamp(2rem,3.5vw,3rem)] max-w-[15ch] text-ink">
              Frequently Asked Questions
            </h2>

            <p className="font-mona-sans mt-6 text-sm md:text-base leading-[1.65] max-w-[36ch] text-mist">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
            </p>

            <p className="font-mona-sans mt-4 text-sm md:text-base leading-[1.65] max-w-[32ch] text-mist">
              Have a different question or a custom requirement? Feel free to
              contact our team.
            </p>

            

            {/* Still have questions box — pushed to the bottom to align with the last FAQ item */}
            <div className="mt-auto pt-10 rounded-2xl border border-hairline bg-ink/[0.03] px-8 py-10 flex flex-col items-start text-left gap-4 w-full">
              <h3 className="font-mona-sans font-bold text-xl md:text-2xl tracking-tight text-ink">
                Still have questions?
              </h3>
              <p className="font-mona-sans text-sm leading-relaxed text-mist">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button href="/contact" variant="primary" size="md">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="border-t border-hairline">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-hairline py-6 md:py-8 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mona-sans font-bold text-lg md:text-xl leading-snug text-ink group-hover:text-brand transition-colors duration-300">
                      {faq.question}
                    </span>

                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isOpen
                          ? "rotate-45 bg-brand border-transparent text-void"
                          : "bg-transparent border-hairline text-ink group-hover:bg-brand group-hover:border-transparent group-hover:text-void"
                      }`}
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
                      <p className="font-mona-sans text-sm md:text-base leading-[1.65] max-w-[55ch] text-mist">
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
    </Section>
  );
}