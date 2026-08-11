"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="w-full py-20 px-4 flex flex-col items-center bg-void text-ink border-t border-hairline">
      {/* Section Title */}
      <div className="relative flex flex-col items-center mb-14 text-center">
        <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-[-0.03em] text-ink">
          TESTIMONIALS
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-2xl flex items-center justify-center gap-4 md:gap-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all border border-hairline bg-surface text-mist hover:text-ink hover:border-brand/40 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 rounded-3xl px-6 py-10 md:px-14 md:py-12 flex flex-col items-center text-center bg-surface border border-hairline transition-all duration-300 hover:border-brand/30">
          <p className="font-sans font-bold text-lg md:text-xl leading-snug max-w-md text-ink">
            "{t.text}"
          </p>

          <div className="mt-8 w-16 h-16 rounded-full overflow-hidden border-2 border-hairline">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <p className="mt-4 font-bold text-ink">
            {t.name}
          </p>
          <p className="mt-1 text-xs font-bold tracking-widest uppercase text-mist">
            {t.role}
          </p>
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all border border-hairline bg-surface text-mist hover:text-ink hover:border-brand/40 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}