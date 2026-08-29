"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from "framer-motion";
import { Quote, Play } from "lucide-react";

// ---- content ---------------------------------------------------------------
// PLACEHOLDER — swap for real Fostyn client testimonials before shipping.
// Names, roles, quotes, and avatar images below are all still Converto's
// original placeholder content.

const CARDS = [
  {
    type: "quote",
    name: "Mark Jhongson",
    role: "CEO at Mansoon Dolland",
    quote:
      "Converto didn't just make videos, they understood our funnel. Our ads performed better within weeks. Converto is highly recommended for any type of video making. Very flexible.",
  },
  {
    type: "video",
    name: "Mark Manhold",
    role: "UI Designer at Google",
    img: "https://i.pravatar.cc/600?img=13",
  },
  {
    type: "quote",
    name: "Collin Munro",
    role: "CEO at Dolas",
    quote:
      "Working with Converto changed how our ads perform. They focused on our sales process, not just visuals. We saw better engagement very fast. Their team is supportive and easy to work with.",
  },
  {
    type: "video",
    name: "Alex Jeminson",
    role: "UI Designer",
    img: "https://i.pravatar.cc/600?img=33",
  },
  {
    type: "quote",
    name: "James Toffer",
    role: "CEO at Olines",
    quote:
      "Instead of only making videos, Converto studied how our ads work. That approach boosted our performance quickly. We trust them for any video project because they are responsive and flexible.",
  },
  {
    type: "video",
    name: "Copper Lin",
    role: "UI Designer",
    img: "https://i.pravatar.cc/600?img=47",
  },
];

// Dark background — matches --color-ink (#060607) so this section reads as
// an intentional dark moment on the site, not a mismatched import.
const DARK_BG = "#060607";
const CARD_SURFACE = "#111114";
const CARD_BORDER = "rgba(255,255,255,0.08)";

// Bright, dark-bg-safe brand tones for this section only. The shared
// --gradient-brand / .gradient-text combo is tuned for light backgrounds
// (uses --color-brand-dim for contrast against white) — on this near-black
// background that same dark teal would barely be visible, so the heading
// gradient here uses the brighter blue/teal tones instead.
const BRAND_TEAL = "#00B8B0"; // --color-brand
const BRAND_TEAL_BRIGHT = "#22D3D0"; // --color-brand-bright
const BRAND_BLUE_BRIGHT = "#4A7CFF"; // lightened from --color-brand-from (#2457E8) for dark-bg contrast

const SLOT = 420; // px distance between card centers along the track

// ---- card --------------------------------------------------------------------

function Card({
  card,
  index,
  virtualIndex,
}: {
  card: (typeof CARDS)[number];
  index: number;
  virtualIndex: MotionValue<number>;
}) {
  const d = useTransform(virtualIndex, (vi: number) => index - vi);

  const x = useTransform(d, (v: number) => v * SLOT);
  const rotate = useTransform(d, (v: number) => {
    const mag = Math.min(Math.abs(v) * 28, 42);
    return v === 0 ? 0 : v > 0 ? mag : -mag;
  });
  const scale = useTransform(d, (v: number) => Math.max(1 - Math.abs(v) * 0.22, 0));
  const blurPx = useTransform(d, (v: number) => Math.min(Math.abs(v) * 4.5, 9));
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  const opacity = useTransform(d, (v: number) => Math.max(1 - Math.abs(v) * 0.4, 0));

  return (
    <motion.div
      style={{ x, rotate, scale, filter, opacity }}
      className="absolute left-1/2 top-1/2 w-[70vw] max-w-[280px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[320px] md:w-[26vw] md:max-w-[360px] lg:max-w-[400px]"
    >
      {card.type === "video" ? (
        <VideoCard card={card} />
      ) : (
        <QuoteCard card={card} />
      )}
    </motion.div>
  );
}

function VideoCard({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-[0_35px_80px_-20px_rgba(0,0,0,0.6)]"
      style={{ border: `1px solid ${CARD_BORDER}` }}
    >
      <img
        src={card.img}
        alt={card.name}
        className="h-full w-full object-cover"
        draggable={false}
      />
      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
      {/* play button */}
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#060607] shadow-lg md:h-20 md:w-20">
        <Play className="ml-0.5 h-6 w-6 md:h-7 md:w-7" fill="currentColor" />
      </div>
      {/* name / role */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="text-lg font-semibold text-white md:text-xl">{card.name}</p>
        <p className="text-sm text-white/70 md:text-base">{card.role}</p>
      </div>
    </div>
  );
}

function QuoteCard({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <div
      className="flex aspect-[3/4] w-full flex-col justify-between rounded-[2rem] p-8 shadow-[0_35px_80px_-20px_rgba(0,0,0,0.5)] md:p-10"
      style={{
        background: CARD_SURFACE,
        border: `1px solid ${CARD_BORDER}`,
      }}
    >
      <Quote
        className="h-9 w-9 md:h-10 md:w-10"
        style={{ color: BRAND_TEAL_BRIGHT }}
        fill={BRAND_TEAL_BRIGHT}
        strokeWidth={0}
      />
      <p className="text-xl leading-snug text-white md:text-2xl">{card.quote}</p>
      <div
        className="flex items-center justify-between pt-5"
        style={{ borderTop: `1px solid ${CARD_BORDER}` }}
      >
        <div>
          <p className="text-base font-semibold text-white md:text-lg">{card.name}</p>
          <p className="text-sm text-white/50 md:text-base">{card.role}</p>
        </div>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
          style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
        >
          {card.name.charAt(0)}
        </div>
      </div>
    </div>
  );
}

// ---- main section --------------------------------------------------------------

export default function Testimonials(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // hold at start: heading alone, sharp, no cards
  const HOLD = 0.12;
  const TAIL = 0.92;

  const virtualIndex = useTransform(
    scrollYProgress,
    [0, HOLD, TAIL, 1],
    [-3, -3, CARDS.length - 1, CARDS.length - 1]
  );

  // heading: sharp during hold → blurs into backdrop while cards play → sharp again at end
  const headingBlur = useTransform(scrollYProgress, [0, HOLD, TAIL, 1], [0, 7, 7, 0]);
  const headingFilter = useMotionTemplate`blur(${headingBlur}px)`;
  const headingOpacity = useTransform(scrollYProgress, [0, HOLD, TAIL, 1], [1, 0.3, 0.3, 1]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: DARK_BG }}
      >
        {/* ambient brand tint */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "rgba(0,184,176,0.08)" }}
        />

        {/* backdrop heading */}
        <motion.div
          style={{ filter: headingFilter, opacity: headingOpacity }}
          className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center"
        >
          {/* section label */}
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND_TEAL }} />
            Testimonials
          </span>

          <h2
            className="text-center font-black uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
          >
            Wall of
            <br />
            <span
              style={{
                background: `linear-gradient(to right, ${BRAND_BLUE_BRIGHT}, ${BRAND_TEAL_BRIGHT})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Love
            </span>
          </h2>
        </motion.div>

        {/* card track */}
        <div className="absolute inset-0 z-10">
          {CARDS.map((card, i) => (
            <Card key={card.name} card={card} index={i} virtualIndex={virtualIndex} />
          ))}
        </div>

        {/* scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-xs font-medium uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Scroll
        </div>
      </div>
    </section>
  );
}