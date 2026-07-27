import ServicesList from "@/components/sections/services/ServicesList";

export const metadata = {
  title: "AI Development Services — Apex AI Studio",
  description: "End-to-end AI capabilities across LLMs, autonomous agents, RAG, and fine-tuned models.",
};

export default function ServicesPage(): React.ReactElement {
  return (
    <main className="bg-void text-ink min-h-screen">
      <ServicesList />
    </main>
  );
}