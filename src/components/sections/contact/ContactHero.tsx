export default function ContactHero(): JSX.Element {
  return (
    <section className="pt-28 pb-16 px-6 md:px-12 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#F4F4F2] border border-[#8D8D8D]/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB3C03] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB3C03]"></span>
          </span>
          <span className="text-xs font-medium text-[#5F5F5F] tracking-wide">
            Reviewing new projects — replies within 24h
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111111] mb-5 leading-[1.05]">
          Got an idea? Let&apos;s make it think
          <span className="inline-block w-[3px] md:w-[4px] h-[0.85em] bg-[#FB3C03] ml-1 align-middle animate-pulse" />
        </h1>

        <p className="text-lg text-[#5F5F5F] max-w-xl">
          No sales script, no jargon-filled deck — just a straight answer on whether this is something we can build together.
        </p>
      </div>
    </section>
  );
}