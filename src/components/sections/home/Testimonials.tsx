"use client";

import React, { useState } from "react";

// Color tokens
const COLORS = {
  void: "#060607",     // page background
  surface: "#0F1011",  // testimonial card background
  hairline: "#242526", // borders, dividers
  ink: "#FAFAFA",       // primary text
  mist: "#9A9A9C",      // secondary text (role label, arrow icons)
  signal: "#FF5100",    // signature accent — "reviews" script only
} as const;

interface Testimonial {
  text: string;
  avatar: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "We saw a 37% increase in inquiries after Drago's redesign. Their blend of strategy, creativity, and precision made the entire experience effortless.",
    avatar: "https://framerusercontent.com/images/AXfLHLRvXizPNcwuJfNQPYrRg.jpg",
    name: "Judy Nguyen",
    role: "Designer",
  },
  {
    text: "Drago transformed our website and brand—customer inquiries jumped 55%! Their creativity and strategic approach exceeded all expectations.",
    avatar: "https://framerusercontent.com/images/alGkNGHKtN89SqW3FRh7sq4Rjqk.jpg",
    name: "Louis Ferguson",
    role: "Manager",
  },
];

export default function Testimonials(): React.JSX.Element {
  const [index, setIndex] = useState<number>(0);

  const prev = (): void =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = (): void =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t: Testimonial = testimonials[index];

  return (
    <div
      className="w-full py-20 px-4 flex flex-col items-center"
      style={{ background: COLORS.void }}
    >
      {/* Google Fonts — move these <link> tags into your document <head> in production */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Caveat:wght@600&display=swap"
      />

      {/* Section Title */}
      <div className="relative flex flex-col items-center mb-14">
        <h2
          className="text-4xl md:text-5xl tracking-tight text-center"
          style={{ fontFamily: "'Archivo Black', sans-serif", color: COLORS.ink }}
        >
          TESTIMONIALS
        </h2>
        <span
          className="text-4xl md:text-5xl -mt-3 -rotate-3 select-none"
          style={{ fontFamily: "'Caveat', cursive", color: COLORS.signal }}
        >
          reviews
        </span>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-2xl flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="carousel-arrow shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ color: COLORS.mist }}
        >
          ←
        </button>

        <div
          className="flex-1 rounded-3xl px-6 py-10 md:px-14 md:py-12 flex flex-col items-center text-center"
          style={{ background: COLORS.surface, border: `1px solid ${COLORS.hairline}` }}
        >
          <p
            className="uppercase font-bold text-lg md:text-xl leading-snug max-w-md"
            style={{ fontFamily: "'Archivo Black', sans-serif", color: COLORS.ink }}
          >
            {t.text}
          </p>

          <div
            className="mt-8 w-16 h-16 rounded-full overflow-hidden"
            style={{ border: `2px solid ${COLORS.hairline}` }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="mt-4 font-bold" style={{ color: COLORS.ink }}>
            {t.name}
          </p>
          <p
            className="mt-1 text-xs font-bold tracking-widest uppercase"
            style={{ color: COLORS.mist }}
          >
            {t.role}
          </p>
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="carousel-arrow shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ color: COLORS.mist }}
        >
          →
        </button>
      </div>

      <style>{`
        .carousel-arrow:hover {
          color: ${COLORS.ink} !important;
          background: ${COLORS.surface} !important;
        }
      `}</style>
    </div>
  );
}