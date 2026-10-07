import { Section } from "@/components/ui/Section";

export default function AboutUs() {
  return (
    <Section bg="void" className="relative overflow-hidden">
      <h2 className="font-sans! text-[34px] sm:text-[44px] md:text-[56px] font-semibold leading-tight tracking-tight p-0 m-0 max-w-4xl text-inherit">
        <span className="text-ink">Your business isn't standard. Your software shouldn't be either..</span>{" "}
        <span className="text-mist">Off-the-shelf software works — until it doesn't.</span>{" "}
        <span className="text-brand align-middle">✦</span>{" "}
        <span className="text-mist">When your business grows, disconnected tools, manual processes, and rigid systems start getting in the way. We build the technology around how your business actually works — from products and internal platforms to AI, data, integrations, and infrastructure.</span>
      </h2>

      <div className="flex items-center gap-3 mt-0 md:mt-12">
        <span className="text-sm text-mist whitespace-nowrap shrink-0">
          One team. Zero handoffs. Real production systems.
        </span>
        <div className="h-px w-full bg-hairline" />
      </div>
    </Section>
  );
}
