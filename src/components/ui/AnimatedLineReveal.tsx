"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Easing } from "framer-motion";
import { useInView } from "@/lib/hooks/useInView";

interface AnimatedLineRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  lineDuration?: number;
  lineOffset?: number;
  ease?: Easing | Easing[];
}

interface LineInfo {
  id: number;
  top: number;
  height: number;
}

export function AnimatedLineReveal({
  children,
  className = "",
  staggerDelay = 60,
  lineDuration = 600,
  lineOffset = 24,
  ease = [0.22, 1, 0.36, 1],
}: AnimatedLineRevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<LineInfo[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check accessibility preferences and mount status
  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Measure text lines
  useEffect(() => {
    if (!mounted || !contentRef.current || prefersReducedMotion) return;

    const measureLines = () => {
      const element = contentRef.current;
      if (!element) return;

      const containerRect = element.getBoundingClientRect();
      const range = document.createRange();
      const lines: LineInfo[] = [];
      let lineId = 0;
      let lastTop: number | null = null;

      // Get all text nodes
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      );

      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue?.trim()) {
          range.selectNodeContents(node);
          const rects = range.getClientRects();
          
          for (let i = 0; i < rects.length; i++) {
            const rect = rects[i];
            const top = Math.round(rect.top - containerRect.top);
            
            if (lastTop === null || top !== lastTop) {
              lines.push({
                id: lineId,
                top,
                height: Math.round(rect.height),
              });
              lastTop = top;
              lineId++;
            }
          }
        }
      }

      setLines(lines);
    };

    // Defer measurement to next frame
    const timer = requestAnimationFrame(() => {
      measureLines();
    });

    return () => cancelAnimationFrame(timer);
  }, [mounted, prefersReducedMotion]);

  if (prefersReducedMotion || !mounted) {
    return (
      <div ref={ref} className={className}>
        <div ref={contentRef}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <div ref={contentRef} className="relative">
        {children}
        {lines.length > 0 && inView && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {lines.map((line) => (
              <motion.div
                key={line.id}
                className="absolute left-0 right-0"
                style={{
                  top: `${line.top}px`,
                  height: `${line.height}px`,
                  backgroundColor: "rgb(17, 24, 39)",
                  originY: 0,
                }}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{
                  duration: lineDuration / 1000,
                  delay: (line.id * staggerDelay) / 1000,
                  ease,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
