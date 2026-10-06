import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { servicesData } from "@/lib/data/services";

export default function ServicesAccordion() {
  const topServices = servicesData.slice(0, 6);

  return (
    <Section bg="void" className="font-sans text-ink">
      <header className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-x-[clamp(2rem,6vw,6rem)] gap-y-4 items-end pb-[clamp(2rem,4vw,3.5rem)]">
        <h2 className="!font-sans font-bold text-ink tracking-[-0.04em] leading-[1.1] m-0 text-[clamp(2rem,4vw,3.5rem)] max-w-[18ch]">
          What we build{" "}
        </h2>
        <p className="text-mist m-0 leading-[1.65] max-w-[50ch] text-[clamp(0.95rem,1.2vw,1.1rem)]">
          Fostyn ships across the full stack — from AI systems and autonomous agents to the core software that runs your business. No handoffs between &quot;the AI people&quot; and &quot;the dev team.&quot; One engineering team owns it end to end, from architecture to production.
        </p>
      </header>

      <div className="border-t border-hairline">
        {topServices.map((service, index) => (
          <div
            key={service.slug}
            className="group relative w-full border-b border-hairline transition-colors duration-300 ease-out hover:bg-white"
          >
            {/* Row: number | heading + paragraph */}
            <div className="relative flex gap-x-[clamp(1.5rem,4vw,4rem)] py-[clamp(2rem,4vw,3.5rem)] pr-4 items-start">

              {/* Number — small, brand red */}
              <span className="font-sans text-brand text-[0.75rem] font-semibold leading-none w-8 shrink-0 pt-[0.45em] tracking-wide">
                {String(index + 1).padStart(2, "0")}.
              </span>

              {/* Heading (left) + Paragraph (right) */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(3rem,6vw,6rem)] gap-y-3 items-start">
                <h3 className="font-sans font-medium text-ink tracking-[-0.035em] leading-[1.1] m-0 text-[clamp(1.6rem,2.6vw,2.1875rem)] transition-colors duration-300 ease-out group-hover:text-brand">
                  {service.title}
                </h3>
                <p className="font-sans text-mist leading-[1.65] text-[clamp(0.85rem,1vw,0.9rem)] m-0">
                  {service.shortDescription}
                </p>
              </div>

            </div>
          </div>
        ))}
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