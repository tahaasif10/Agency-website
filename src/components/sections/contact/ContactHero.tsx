export default function ContactHero() {
  return (
    <section className="px-[clamp(1.5rem,5vw,4rem)] max-w-[1980px] mx-auto bg-void text-ink">
      <header className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-x-[clamp(2rem,6vw,6rem)] gap-y-4 items-end pt-[clamp(6rem,10vw,9rem)] pb-[clamp(2.5rem,5vw,4rem)]">
        <h1 className="font-bold text-ink tracking-[-0.04em] leading-[1.05] m-0 text-[clamp(2.25rem,4.5vw,4.5rem)]">
          Got an idea? Let&apos;s make it <span className="text-gradient-brand">think.</span>
        </h1>

        <p className="text-mist m-0 leading-[1.65] max-w-[50ch] text-[clamp(1rem,1.25vw,1.15rem)]">
          Tell us what you're trying to build, improve, or solve. We'll take a look, understand what you're working toward, and tell you honestly how we can help. No sales script. No unnecessary pitch. Just a conversation about the work.
        </p>
      </header>
    </section>
  );
}