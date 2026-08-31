import { Section } from "@/components/ui/Section";

export default function AboutUs() {
  return (
    <Section bg="void" className="relative overflow-hidden">
      <h2 className="font-sans! text-[34px] sm:text-[44px] md:text-[56px] font-semibold leading-tight tracking-tight p-0 m-0 max-w-4xl text-inherit">
        <span className="text-ink">Great companies are built on clear decisions.</span>{" "}
        <span className="text-mist">We combine strategic insight</span>{" "}
        <span className="text-brand align-middle">✦</span>{" "}
        <span className="text-mist">operational expertise, and modern technology to help businesses move faster.</span>
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
