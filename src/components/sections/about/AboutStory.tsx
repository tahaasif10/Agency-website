"use client";

import { useInView } from "@/lib/hooks/useInView";
import { agencyData } from "@/lib/data/agency";

export default function AboutStory() {
  const [headingRef, headingInView] = useInView<HTMLHeadingElement>(0.2);
  const [paraRef, paraInView] = useInView<HTMLParagraphElement>(0.2);

  return (
    <section className="bg-void text-ink py-24 px-6 md:px-12 border-b border-hairline relative z-[2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand block mb-3">
                Our Core Mission
              </span>
              <h2
                ref={headingRef}
                className={`font-light text-ink m-0 leading-[1.1] text-3xl md:text-5xl tracking-tight transition-all duration-700 ease-out ${
                  headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Building the Systems Behind Enterprise Intelligence
              </h2>
            </div>

            <div className="flex items-start gap-3 pt-6 mt-8 md:mt-0 border-t border-hairline">
              <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0 animate-pulse" />
              <p className="text-mist text-sm leading-relaxed max-w-sm">
                We track and integrate the latest model architectures the week they ship, ensuring your stack is never a generation behind.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p
              ref={paraRef}
              className={`text-ink font-light text-xl md:text-2xl leading-relaxed tracking-tight mb-8 transition-all duration-700 ease-out delay-150 ${
                paraInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {agencyData.name} exists because most AI vendors sell a demo, not a system. We build the infrastructure between a model performing in a sandbox and one running natively inside your operations under real load.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-hairline pt-8">
              <p className="text-mist text-sm leading-relaxed">
                We start from the problem, not a tech stack. If the right answer is a script, a database optimization, or standard logic, we tell you before you spend on model calls. What we build is wired into your stack and reports to real metrics.
              </p>
              <p className="text-mist text-sm leading-relaxed">
                We stay senior by design. Senior AI engineers, full-stack builders, and product minds. Whoever scopes the project on the first call writes the code, deploys it, and owns the outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}