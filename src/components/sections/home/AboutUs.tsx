import { Section } from "@/components/ui/Section";

export default function AboutUs() {
  return (
    <Section bg="void" className="relative overflow-hidden">
      <h2 className="!font-sans text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-[1.35] tracking-tight p-0 m-0">
        <span className="text-ink">Great companies are built on clear decisions.</span>{" "}
        <span className="text-mist">We combine strategic insight</span>{" "}
        <span className="text-brand align-middle">✦</span>{" "}
        <span className="text-mist">operational expertise, and modern technology to help businesses move faster.</span>
      </h2>

      <div className="flex items-center gap-3 mt-10 md:mt-12">
        {/* <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-wash text-gradient-brand text-xs font-semibold shrink-0">
          <span aria-hidden="true">★</span>
          4.9
        </span> */}
        <span className="text-sm text-mist whitespace-nowrap shrink-0">
          One team. Zero handoffs. Real production systems.
        </span>
        <div className="h-px w-full bg-hairline" />
      </div>
    </Section>
  );
}
