"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

interface Service {
  number: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Generative AI Development",
    description:
      "Custom models built around your product, not a wrapper on a public API. We design for how your users actually work, and we ship the production version — not the demo.",
  },
  {
    number: "02",
    title: "AI Agent Development",
    description:
      "Autonomous agents that plan, act, and complete real multi-step tasks. We build the reasoning, tool access, and guardrails an agent needs to run reliably inside your existing systems, with clear handoffs back to a human when it matters.",
  },
  {
    number: "03",
    title: "AI Chatbot Development",
    description:
      "Bots built around your users' actual intent, not a generic FAQ script. We map the real conversations your customers have, then build something that resolves them.",
  },
  {
    number: "04",
    title: "Conversational AI for Customer Service",
    description:
      "Support automation that resolves, escalates, and learns from every interaction, integrated directly with your existing helpdesk and knowledge base.",
  },
  {
    number: "05",
    title: "Software Engineering",
    description:
      "The systems, infrastructure, and internal tools that AI features actually run on. If your product needs it built and maintained, this is where it happens.",
  },
  {
    number: "06",
    title: "AI Consulting & Strategy",
    description:
      "A straight answer on what's worth building versus what just sounds good in a pitch deck, then a realistic path to shipping it.",
  },
  {
    number: "07",
    title: "Predictive Analytics",
    description:
      "Forecasting models that turn your historical data into decisions you can actually act on. We build the pipelines to keep predictions fresh as new data comes in, so the model stays useful months after launch instead of going stale.",
  },
  {
    number: "08",
    title: "Custom Computer Vision Software Development",
    description:
      "Vision systems built for detection, tracking, and quality assurance at production scale. From camera pipeline to model to alerting, we handle the full stack so your team gets accurate results in real-world conditions, not just clean lab footage.",
  },
  {
    number: "09",
    title: "Fine-Tuning LLM",
    description:
      "Adapting foundation models to your domain, tone, and edge cases instead of relying on prompting alone. We handle dataset preparation, training, and evaluation so the model actually understands your business, not just the general internet.",
  },
  {
    number: "10",
    title: "LLM Development",
    description:
      "End-to-end large language model builds, from data collection to deployment and monitoring. We design the full system around the model — retrieval, guardrails, evaluation, and infrastructure — so it holds up under real traffic, not just a demo.",
  },
  {
    number: "11",
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Grounding model outputs in your own knowledge base so answers are accurate, current, and traceable back to a source. We architect the retrieval pipeline for your actual data — documents, databases, or both — instead of a one-size-fits-all setup.",
  },
  {
    number: "12",
    title: "Best AI Voice Agents",
    description:
      "Natural-sounding voice agents for calls and support lines that handle real conversations, not rigid IVR trees. We tune latency, tone, and escalation logic so callers get resolution quickly, with a smooth handoff to a human when needed.",
  },
  {
    number: "13",
    title: "NLP Development",
    description:
      "Text understanding, extraction, and classification at scale, built for your specific documents and terminology. From contracts to support tickets to research papers, we build systems that parse your text correctly, not a generic off-the-shelf model.",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section bg="void" className="font-sans text-ink">
      <header className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-x-[clamp(2rem,6vw,6rem)] gap-y-4 items-end pb-[clamp(2rem,4vw,3.5rem)]">
        <h2 className="!font-sans font-bold text-ink tracking-[-0.04em] leading-[1.1] m-0 text-[clamp(2rem,4vw,3.5rem)] max-w-[18ch]">
          What we build{" "}
        </h2>
        <p className="text-mist m-0 leading-[1.65] max-w-[50ch] text-[clamp(0.95rem,1.2vw,1.1rem)]">
          Fostyn ships across the full stack — from AI systems and autonomous agents to the core software that runs your business. No handoffs between "the AI people" and "the dev team." One engineering team owns it end to end, from architecture to production.
        </p>
      </header>

      <div className="border-t border-hairline">
        {SERVICES.slice(0, 6).map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={service.number}
              className="svc-row relative w-full border-b border-hairline"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full grid grid-cols-[3.5rem_1fr_auto] md:grid-cols-[4.5rem_1fr_auto] items-center gap-x-8 md:gap-x-12 py-7 pl-4 pr-2 text-left"
              >
                <span className="font-sans text-faint text-[clamp(1.25rem,2.2vw,1.75rem)] leading-none">
                  {service.number}
                </span>
                <span className="font-sans font-medium text-ink tracking-[-0.03em] leading-tight text-[clamp(1.3rem,2.5vw,2rem)]">
                  {service.title}
                </span>
                <Plus
                  className={`w-6 h-6 text-ink flex-shrink-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-[3.5rem_1fr_auto] md:grid-cols-[4.5rem_1fr_auto] gap-x-8 md:gap-x-12 pl-4 pr-2 pb-8 items-center">
                    <span aria-hidden="true" />
                    <p className="font-sans text-mist leading-[1.6] text-[clamp(0.9rem,1.1vw,1rem)] max-w-[46ch] m-0">
                      {service.description}
                    </p>
                    <Button
                      href="/services"
                      variant="secondary"
                      size="sm"
                      className="flex-shrink-0 whitespace-nowrap"
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center md:justify-end pt-[clamp(2.5rem,5vw,4rem)]">
        <Button
          href="/services"
          variant="secondary"
          size="lg"
          icon={<ArrowUpRight className="w-4 h-4" />}
        >
          View all Services
        </Button>
      </div>
    </Section>
  );
}