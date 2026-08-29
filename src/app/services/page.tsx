import type { Metadata } from "next";
import ServicesList from "@/components/sections/services/ServicesList";
import ServicesFinalCTA from "@/components/ui/FinalCTAs/ServicesFinalCTA";
import ServicesHero from "@/components/sections/services/ServicesHero";
import Testimonials from "@/components/sections/global/Testimonials";
import Process from "@/components/sections/global/Process";
import Faq from "@/components/sections/global/Faq";

export const metadata: Metadata = {
  title: "AI Development Services — fostyn",
  description: "End-to-end AI capabilities across LLMs, autonomous agents, RAG, and fine-tuned models.",
};

export default function ServicesPage(): React.ReactElement {
  return (
    <main className="bg-void text-ink min-h-screen">
      <ServicesHero />
      <ServicesList />
      <Process />
      <Testimonials />
      <Faq />
      <ServicesFinalCTA />
    </main>
  );
}