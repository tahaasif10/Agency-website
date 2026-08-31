"use client";

import { Section } from "@/components/ui/Section";

/**
 * ⚠️ PREVIEW ONLY — DO NOT SHIP WITH THIS DATA
 *
 * This file was a deliberate `return null` stub because we don't have real
 * client testimonials yet (see agency-website memory: fake testimonials
 * were removed site-wide for exactly this reason). This version exists so
 * you can preview real layout/spacing/hierarchy before production.
 *
 * Before this goes live, either:
 *   (a) replace every entry in TESTIMONIALS with real, attributable quotes, or
 *   (b) revert this file back to `export default function Testimonials() { return null; }`
 *
 * Never ship placeholder names/quotes as if they were real.
 */
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "PLACEHOLDER — replace with a real quote. They scoped the build in a day, shipped a working prototype in the first sprint, and never once made us chase a status update.",
    name: "Placeholder Name",
    role: "Role",
    company: "Company",
  },
  {
    quote:
      "PLACEHOLDER — replace with a real quote. We'd worked with agencies before where the senior person pitches and the junior team builds. Here the same engineers stayed on the project start to finish.",
    name: "Placeholder Name",
    role: "Role",
    company: "Company",
  },
  {
    quote:
      "PLACEHOLDER — replace with a real quote. No black-box months. We saw working code every week, and the handoff at launch was clean — full repo access, real documentation.",
    name: "Placeholder Name",
    role: "Role",
    company: "Company",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <Section bg="void" className="font-sans text-ink border-t border-hairline">
      <header className="flex flex-col gap-4 pb-[clamp(2rem,4vw,3.5rem)] max-w-[46ch]">
        <span className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-brand">
          [07] What Clients Say
        </span>
        <h2 className="font-sans font-bold tracking-[-0.04em] leading-[1.1] text-[clamp(2rem,3.5vw,3rem)] text-ink">
          Great software, from teams who&apos;d say so themselves.
        </h2>
        <p className="text-mist leading-[1.65] text-[clamp(0.95rem,1.1vw,1.05rem)]">
          Not curated soundbites — the same standards we hold ourselves to
          on every engagement, in their words.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between gap-8 rounded-2xl border border-hairline bg-surface p-7 md:p-8"
          >
            {/* single corner bracket — restrained, same device as Hero/Process, not overused across every corner */}
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-brand/40 -translate-x-px -translate-y-px"
            />

            <div className="flex flex-col gap-5">
              <span className="font-mono text-3xl leading-none text-brand/50" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-ink leading-[1.6] text-[0.95rem]">{t.quote}</p>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-hairline">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink/[0.04] font-mono text-xs font-bold text-mist">
                {initials(t.name)}
              </span>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-ink leading-tight">{t.name}</span>
                <span className="text-xs text-mist leading-tight">
                  {t.role} · {t.company}
                </span>
              </div>
            </div>

            {/* reuses the same monospace spec-chip language as the hero's
                "network: off · latency: 4ms" chip, for consistency */}
            <span className="absolute top-6 right-6 hidden md:inline-flex items-center gap-1.5 font-mono text-[10px] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
              client: verified
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}