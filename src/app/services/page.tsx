import type { Metadata } from "next";
import ServicesList from "@/components/sections/services/ServicesList";
import ServicesFinalCTA from "@/components/ui/FinalCTAs/ServicesFinalCTA";
import ServicesHero from "@/components/sections/services/ServicesHero";
import Testimonials from "@/components/sections/global/Testimonials";
import Process from "@/components/sections/global/Process";
import Faq from "@/components/sections/global/Faq";

export const metadata: Metadata = {
  title: "Engineering & AI Services — fostyn",
  description: "End-to-end engineering and AI capabilities across autonomous agents, custom internal platforms, data pipelines, and cloud systems.",
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