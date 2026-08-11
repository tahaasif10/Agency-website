export default function AboutUs() {
  return (
    <section className="relative bg-paper py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-hairline bg-surface text-xs font-medium tracking-wide text-mist">
              <span className="text-brand">✦</span>
              About Us
            </span>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-[1.35] tracking-tight p-0 m-0">
              <span className="text-ink">Great companies are built on clear decisions.</span>{" "}
              <span className="text-mist">We combine strategic insight</span>{" "}
              <span className="text-brand align-middle">✦</span>{" "}
              <span className="text-mist">operational expertise, and modern technology to help businesses move faster.</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-10 md:mt-12">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-wash text-brand text-xs font-semibold shrink-0">
            <span aria-hidden="true">★</span>
            4.9
          </span>
          <span className="text-sm text-mist whitespace-nowrap shrink-0">
            Chosen by 60+ companies worldwide
          </span>
          <div className="h-px w-full bg-hairline" />
        </div>
      </div>
    </section>
  );
}