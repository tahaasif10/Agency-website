"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";

// PLACEHOLDER COPY — rewrite before shipping.
const HEADLINE = "Software built around your business.";

type LineRect = { left: number; top: number; width: number; height: number };

function debounce<T extends (...args: never[]) => void>(fn: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

// Compares two measured-line sets with a small tolerance. Used so that
// re-measuring (fonts.ready, resize, etc.) doesn't produce a *new* lines
// array — and therefore a spurious re-render / effect re-run — when the
// geometry hasn't actually changed.
function linesEqual(a: LineRect[], b: LineRect[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (
      Math.abs(a[i].left - b[i].left) > 0.5 ||
      Math.abs(a[i].top - b[i].top) > 0.5 ||
      Math.abs(a[i].width - b[i].width) > 0.5 ||
      Math.abs(a[i].height - b[i].height) > 0.5
    ) {
      return false;
    }
  }
  return true;
}

export default function Hero() {
  const [mounted] = useState<boolean>(true);
  const [lines, setLines] = useState<LineRect[]>([]);
  const [isMeasured, setIsMeasured] = useState<boolean>(false);

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tagRefs = useRef<(HTMLImageElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);

  const words = HEADLINE.split(" ");

  const measureLines = () => {
    const container = headlineRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const rects = wordRefs.current
      .filter((el): el is HTMLSpanElement => !!el)
      .map((el) => el.getBoundingClientRect());

    if (rects.length === 0) return;

    const rows: DOMRect[][] = [];
    rects.forEach((r) => {
      const row = rows.find((row) => Math.abs(row[0].top - r.top) < 4);
      if (row) row.push(r);
      else rows.push([r]);
    });

    const newLines: LineRect[] = rows.map((row) => {
      const left = Math.min(...row.map((r) => r.left));
      const right = Math.max(...row.map((r) => r.right));
      const top = Math.min(...row.map((r) => r.top));
      const bottom = Math.max(...row.map((r) => r.bottom));
      // Round to whole pixels — sub-pixel rects cause faint blurring/jitter
      // on the block edges, especially noticeable during the scaleX wipe.
      return {
        left: Math.round(left - containerRect.left),
        top: Math.round(top - containerRect.top),
        width: Math.round(right - left),
        height: Math.round(bottom - top),
      };
    });

    // Bail out (return the SAME array reference) when nothing actually
    // moved. This is what stops fonts.ready / resize from re-triggering
    // the reveal effect and killing an in-flight animation.
    setLines((prev) => (linesEqual(prev, newLines) ? prev : newLines));
    setIsMeasured(true);
  };

  useLayoutEffect(() => {
    measureLines();

    const onResize = debounce(measureLines, 150);
    window.addEventListener("resize", onResize);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => measureLines());
    }

    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!isMeasured || lines.length === 0 || !headlineRef.current) return;

    const blocks = headlineRef.current.querySelectorAll<HTMLSpanElement>(
      "[data-reveal-block]"
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      if (prefersReducedMotion) {
        gsap.set(blocks, { display: "none" });
        gsap.set(wordRefs.current, { opacity: 1 });
        // Nothing was set inside a context here, so nothing needs undoing —
        // but we still must flip the ref back on cleanup, see note below.
        return () => {
          hasAnimatedRef.current = false;
        };
      }

      const containerRect = headlineRef.current.getBoundingClientRect();

      // Everything visual for this reveal — including the initial hidden
      // state — lives inside this context, so ctx.revert() fully undoes it.
      // That matters because Next.js dev runs in React StrictMode, which
      // deliberately does setup -> cleanup -> setup on every effect. If the
      // "hidden" state or the timelines lived outside the context, revert()
      // couldn't put things back, hasAnimatedRef would stay stuck at `true`
      // from the first pass, and the second pass would fall into the
      // "already animated" branch below and snap straight to the end state
      // — which is exactly the flash / instant-jump bug.
      const ctx = gsap.context(() => {
        gsap.set(wordRefs.current, { opacity: 0 });
        gsap.set(blocks, { scaleX: 0, transformOrigin: "left" });

        blocks.forEach((block, index) => {
          // Identify words on the current measured line
          const line = lines[index];
          const lineWords = wordRefs.current.filter((w) => {
            if (!w) return false;
            const wRect = w.getBoundingClientRect();
            const wTop = wRect.top - containerRect.top;
            return Math.abs(wTop - line.top) < 10;
          });

          // Reference Animation Sequence: Cover -> Reveal Text -> Wipe Out
          const tl = gsap.timeline({ delay: 0.1 + index * 0.12 });

          tl.to(block, {
            scaleX: 1,
            duration: 0.5,
            ease: "power4.inOut",
            force3D: true,
            overwrite: "auto",
          })
            .set(lineWords, { opacity: 1 })
            .set(block, { transformOrigin: "right" })
            .to(
              block,
              {
                scaleX: 0,
                duration: 0.5,
                ease: "power4.inOut",
                force3D: true,
              },
              "+=0.15"
            );
        });
      }, headlineRef);

      return () => {
        ctx.revert();
        // Fully idempotent: after revert, this effect is back to its
        // pre-run state, so letting it run again (StrictMode's second
        // "setup") replays the same clean reveal instead of short-circuiting
        // into the reset branch.
        hasAnimatedRef.current = false;
      };
    } else {
      // A remeasure happened after the initial reveal (real resize, etc.).
      // Never stomp on a reveal that's still actively playing — only
      // snap-reset once every block's timeline has actually finished.
      const stillAnimating = Array.from(blocks).some((b) => gsap.isTweening(b));
      if (stillAnimating) return;

      gsap.killTweensOf(blocks);
      gsap.set(blocks, { scaleX: 0 });
      gsap.set(wordRefs.current, { opacity: 1 });
    }
  }, [isMeasured, lines]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cleanups: (() => void)[] = [];

    tagRefs.current.forEach((el) => {
      if (!el) return;

      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        gsap.to(el, {
          rotateX: relY * -8,
          rotateY: relX * 8,
          scale: 1.05,
          transformPerspective: 400,
          duration: 0.3,
          ease: "power3.out",
          force3D: true,
          overwrite: "auto",
        });
      };

      const handleLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
          force3D: true,
          overwrite: "auto",
        });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="relative w-full min-h-svh flex items-center overflow-hidden bg-void">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Crect x='12' y='12' width='4' height='4' rx='1' fill='%23060607' fill-opacity='0.055'/%3E%3C/svg%3E\")",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(1100px 700px at center, black, transparent)",
          WebkitMaskImage: "radial-gradient(1100px 700px at center, black, transparent)",
        }}
      />

      {/* Glow Effect */}
      <div
        aria-hidden="true"
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand/[0.05] blur-[160px] pointer-events-none"
      />

      <div className="w-full max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-28 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status marker */}
          <div
            className={`flex items-center gap-2 mb-8 transition-opacity duration-300 ease-out ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse motion-reduce:animate-none" />
            
          </div>

          <div
            className={`relative px-8 py-10 sm:px-16 sm:py-12 transition-opacity duration-300 ease-out ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="absolute inset-0 border border-brand/25 pointer-events-none" />
            <span aria-hidden="true" className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-brand pointer-events-none" />
            <span aria-hidden="true" className="absolute right-0 top-0 h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-brand pointer-events-none" />
            <span aria-hidden="true" className="absolute right-0 bottom-0 h-2.5 w-2.5 translate-x-1/2 translate-y-1/2 rounded-[2px] bg-brand pointer-events-none" />
            <span aria-hidden="true" className="absolute left-0 bottom-0 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-[2px] bg-brand pointer-events-none" />

            <img
              ref={(el) => { tagRefs.current[0] = el; }}
              src="/svg1.svg"
              alt=""
              aria-hidden="true"
              width={137}
              height={34}
              className="hidden sm:block absolute cursor-default will-change-transform"
              style={{ top: "68%", left: "0%", transform: "translate(calc(-100% + 60px), -50%)" }}
            />
            <img
              ref={(el) => { tagRefs.current[1] = el; }}
              src="/svg3.svg"
              alt=""
              aria-hidden="true"
              width={163}
              height={34}
              className="hidden sm:block absolute cursor-default will-change-transform"
              style={{ top: "32%", left: "100%", transform: "translate(-65px, -50%)" }}
            />
            <img
              ref={(el) => { tagRefs.current[2] = el; }}
              src="/svg2.svg"
              alt=""
              aria-hidden="true"
              width={174}
              height={34}
              className="hidden sm:block absolute cursor-default will-change-transform"
              style={{ top: "100%", left: "86%", transform: "translate(0%, -50%)" }}
            />

            {/* Headline section */}
            <h1
              ref={headlineRef}
              className="relative font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] max-w-4xl text-ink"
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className="inline-block align-top pb-[0.1em] mr-[0.28em] last:mr-0 opacity-0"
                >
                  {word}
                </span>
              ))}

              {lines.map((line, i) => (
                <span
                  key={i}
                  data-reveal-block
                  aria-hidden="true"
                  className="absolute bg-brand will-change-transform pointer-events-none z-10"
                  style={{
                    left: line.left,
                    top: line.top,
                    width: line.width,
                    height: line.height,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              ))}
            </h1>

            <p className="font-sans text-lg md:text-xl leading-[1.6] font-normal max-w-xl mx-auto mt-6 text-mist">
              We design and engineer custom software, AI systems, and digital infrastructure for businesses that need to build, improve, and scale.
            </p>
          </div>

          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-opacity duration-300 ease-out ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button href="/contact" variant="primary" size="lg">
              Start a project
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Explore our services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}