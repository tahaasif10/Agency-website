// HowWeWorkRow.tsx
// Requires: npm install gsap
// Fonts: add to your index.html <head> or globals.css
//   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&family=JetBrains+Mono:wght@500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
// If using Next.js App Router, add "use client" as the first line of this file.
//
// Behavior:
// - No pinning, no scroll-jacking, no internal scroll of any kind.
// - Steps sit in a normal horizontal row (wraps naturally on smaller screens).
// - When the section scrolls into view, the connecting line draws once,
//   nodes pop in with a slight stagger, then cards fade/slide up behind them.
// - Plays once (toggleActions: play none none none) — no replay on scroll back up.

"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, Code2, Rocket, Activity, LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Step {
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    phase: 'PHASE_01',
    title: 'Discover & scope',
    description:
      'We map your workflows, data, and constraints before writing a line of code.',
    icon: Search,
  },
  {
    phase: 'PHASE_02',
    title: 'Design & prototype',
    description:
      'Architecture and UX get sketched and stress-tested against real use cases.',
    icon: PenTool,
  },
  {
    phase: 'PHASE_03',
    title: 'Build & integrate AI',
    description:
      'Short cycles, wired into your existing stack, with evals from day one.',
    icon: Code2,
  },
  {
    phase: 'PHASE_04',
    title: 'Test & deploy',
    description:
      'Load testing and staged rollouts before anything reaches your users.',
    icon: Rocket,
  },
  {
    phase: 'PHASE_05',
    title: 'Support & iterate',
    description:
      'We stay on after launch, monitoring drift and shipping improvements.',
    icon: Activity,
  },
];

// Signature accent — use sparingly (labels, icon hover, connecting line)
const ACCENT = 'var(--color-brand)';
// Brighter variant reserved for glow/motion moments (hover shadow below)
const GLOW = 'var(--color-brand-bright)';

const COLORS = {
  bg: 'var(--color-void)',        // Void
  surface: 'var(--color-surface)',   // Surface
  border: 'var(--color-hairline)',    // Hairline
  textPrimary: 'var(--color-ink)', // Ink
  textMuted: 'var(--color-mist)',   // Mist
  textSecondary: 'var(--color-mist)', // Mist
  eyebrow: 'var(--color-mist)',     // Mist
  ghost: 'var(--color-hairline)',       // Hairline (unused currently, kept for parity)
  lineBase: 'var(--color-hairline)',    // Hairline
} as const;

export default function HowWeWorkRow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion) {
        gsap.set('.sys-heading', { yPercent: 0 });
        gsap.set('.sys-sub', { opacity: 1, y: 0 });
        gsap.set(lineRef.current, { scaleX: 1 });
        gsap.set(nodeRefs.current, { scale: 1, opacity: 1 });
        gsap.set(cardRefs.current, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        '.sys-heading',
        { yPercent: 100 },
        { yPercent: 0, duration: 0.8, ease: 'power4.out' }
      )
        .fromTo(
          '.sys-sub',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: 'power3.inOut', transformOrigin: 'left center' },
          '-=0.4'
        )
        .fromTo(
          nodeRefs.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.8)' },
          '-=0.5'
        )
        .fromTo(
          cardRefs.current,
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
          '-=0.55'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-section relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="sys-header">
          <div className="sys-heading-mask">
            <h2 className="sys-heading">
              From <em>idea</em> to shipped, in five steps
            </h2>
          </div>
          <p className="sys-sub">
            No 40-page proposals, no months of "alignment calls" before anything gets built. We scope fast, prototype faster, and start writing real code within the first two weeks — with you seeing progress at every step, not just at the end.
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* connecting line, desktop only — a wrapped grid makes a straight line meaningless */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[27px] h-px"
          style={{ background: COLORS.lineBase, left: '10%', right: '10%' }}
        />
        <div
          ref={lineRef}
          aria-hidden="true"
          className="hidden lg:block absolute top-[27px] h-px origin-left overflow-hidden"
          style={{
            background: ACCENT,
            transform: 'scaleX(0)',
            left: '10%',
            right: '10%',
          }}
        >
  <div className="process-line-pulse absolute top-0 h-full w-24" />
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.phase} className="process-step group relative flex flex-col">
                <div className="relative w-[64px] h-[64px] mb-5 mx-auto">
                  {/* outer faint ring — always-on ambient presence */}
                  <div
                    className="process-step-ring absolute inset-0 rounded-full"
                    style={{ border: `1px solid ${ACCENT}`, opacity: 0.15 }}
                    aria-hidden="true"
                  />
                  <div
                    ref={(el) => { nodeRefs.current[i] = el; }}
                    className="process-step-icon relative z-10 flex items-center justify-center w-[64px] h-[64px] rounded-full"
                    style={{
                      background: COLORS.surface,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.textPrimary,
                      boxShadow: `0 0 0px transparent`,
                    }}
                  >
                  <Icon
                    size={24}
                    className="process-step-icon-svg"
                    color="currentColor"
                    aria-hidden="true"
                  />
                </div>
              </div>

                <div
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="process-card relative flex-1 rounded-xl p-5 overflow-hidden"
                  style={{
                    background: `radial-gradient(ellipse 120% 80% at 20% 0%, var(--color-brand-wash) 0%, transparent 60%), ${COLORS.surface}`,
                    border: `0.5px solid ${COLORS.border}`,
                  }}
                >
                  <span className="process-phase-label">{step.phase}</span>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap');

        .process-section {
          background: ${COLORS.bg};
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
        }
        .sys-header {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: end;
          margin-bottom: clamp(1rem, 2.1vw, 1.7rem);
        }
        @media (max-width: 768px) {
          .sys-header { grid-template-columns: 1fr; }
        }
        .sys-heading-mask {
          overflow: hidden;
        }
        .sys-heading {
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(1.9rem, 3.6vw, 3.1rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.12;
          color: ${COLORS.textPrimary};
          margin: 0;
          max-width: 18ch;
        }
        .sys-heading em {
          font-style: italic;
          font-weight: 300;
          color: ${ACCENT};
        }
        .sys-sub {
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(0.9rem, 1.05vw, 1rem);
          line-height: 1.7;
          color: ${COLORS.textSecondary};
          margin: 0;
          max-width: 50ch;
        }
        .process-eyebrow {
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${COLORS.eyebrow};
          margin: 0 0 20px;
        }
        .process-heading {
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(1.9rem, 3.6vw, 3.1rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.12;
          color: ${COLORS.textPrimary};
          margin: 0 0 16px;
        }
        .process-sub {
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(0.9rem, 1.05vw, 1rem);
          line-height: 1.7;
          color: ${COLORS.textSecondary};
          margin: 0;
        }

        .process-phase-label {
          position: relative;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${ACCENT};
          margin-bottom: 10px;
        }
        .process-phase-label::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 6px ${ACCENT};
          flex-shrink: 0;
        }
        .process-card-title {
          position: relative;
          z-index: 10;
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: ${COLORS.textPrimary};
          margin: 0 0 8px;
        }
        .process-card-desc {
          position: relative;
          z-index: 10;
          font-family: 'Mona Sans', ui-sans-serif, system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: ${COLORS.textMuted};
          margin: 0;
        }
        .process-step-icon {
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .process-step-icon-svg {
          transition: transform 0.3s ease !important;
        }
        /* Always-on ambient ring pulse behind each node */
        .process-step-ring {
          animation: ring-pulse 3.5s ease-in-out infinite;
        }
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.15); opacity: 0.28; }
        }

        /* Moving pulse traveling along the connector line */
        .process-line-pulse {
          background: linear-gradient(90deg, transparent, ${GLOW}, transparent);
          animation: line-travel 2.8s linear infinite;
          animation-delay: 1.2s; /* starts after the line draw-in finishes */
        }
        @keyframes line-travel {
          0% { left: -10%; }
          100% { left: 110%; }
        }

        /* Card hover: border glow + lift */
        .process-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .process-step:hover .process-card {
          border-color: color-mix(in srgb, var(--color-brand) 35%, transparent) !important;
          box-shadow: 0 8px 30px var(--color-brand-wash), 0 0 0 1px color-mix(in srgb, var(--color-brand) 6%, transparent) inset;
          transform: translateY(-2px);
        }

        /* Icon node glow on hover, layered on top of existing hover rule */
        .process-step:hover .process-step-icon {
          box-shadow: 0 0 28px color-mix(in srgb, var(--color-brand-bright) 50%, transparent) !important;
        }
        .process-step:hover .process-step-ring {
          opacity: 0.4 !important;
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .process-step-ring,
          .process-line-pulse {
            animation: none !important;
          }
        }
        .process-step:hover .process-step-icon {
          border-color: ${ACCENT} !important;
          color: ${ACCENT} !important;
          box-shadow: 0 0 24px color-mix(in srgb, var(--color-brand-bright) 45%, transparent) !important;
          transform: scale(1.08) !important;
        }
        .process-step:hover .process-step-icon-svg {
          transform: scale(1.1) !important;
        }
      `}</style>
    </section>
  );
}