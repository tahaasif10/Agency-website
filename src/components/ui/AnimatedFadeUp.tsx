"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/useInView";
import { useEffect, useState } from "react";

interface AnimatedFadeUpProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
}

export function AnimatedFadeUp({
  children,
  className = "",
  duration = 450,
  delay = 800,
  offset = 8,
}: AnimatedFadeUpProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  if (prefersReducedMotion || !mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: offset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
