export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] px-6 pb-16 pt-28 md:px-12 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(6,6,7,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff5100]/25 bg-white px-3 py-1.5 text-[#ff5100]">
            <span className="h-2 w-2 rounded-full bg-[#ff5100]" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em]">
              AI services
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] tracking-tight text-[#060607] md:text-6xl">
            Dummy services hero for production-grade AI builds.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#060607]/65">
            Placeholder copy for the services page. Strategy, prototypes,
            agents, automation, and custom AI systems can all live here once the
            final message is ready.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#svc-cards"
              className="inline-flex items-center justify-center rounded-lg bg-[#ff5100] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e84900]"
            >
              Browse services
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-[#060607]/15 bg-white px-5 py-3 text-sm font-semibold text-[#060607] transition-colors duration-200 hover:border-[#ff5100]/40 hover:text-[#ff5100]"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[#060607]/10 bg-white p-5 shadow-[0_20px_60px_-35px_rgba(6,6,7,0.35)]">
          <div className="rounded-xl bg-[#060607] p-5 text-white">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                Service pipeline
              </span>
              <span className="rounded-full bg-[#ff5100]/15 px-3 py-1 text-xs font-medium text-[#ff5100]">
                Draft
              </span>
            </div>

            <div className="space-y-3">
              {["Discovery", "Architecture", "Prototype", "Launch"].map(
                (step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/[0.08] font-mono text-xs text-[#ff5100]">
                      0{index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{step}</p>
                      <p className="text-xs text-white/45">
                        Dummy milestone description
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
