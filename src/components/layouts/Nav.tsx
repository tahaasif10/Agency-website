"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { agencyData } from "@/lib/data/agency";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const lastScrollYRef = useRef<number>(0);
  const lastDirectionRef = useRef<number>(1);
  const anchorScrollYRef = useRef<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollYRef.current;
    if (latest === previous) return;

    const frameDiff = latest - previous;
    const currentDirection = frameDiff > 0 ? 1 : -1;

    if (latest > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 50 && isScrolled) {
      setIsScrolled(false);
    }

    if (currentDirection !== lastDirectionRef.current) {
      lastDirectionRef.current = currentDirection;
      anchorScrollYRef.current = latest;
    }

    if (latest < 100) {
      if (isHidden) setIsHidden(false);
    } else {
      const distanceSinceFlip = latest - anchorScrollYRef.current;

      if (currentDirection === 1 && distanceSinceFlip > 20 && !isHidden && !mobileMenuOpen) {
        setIsHidden(true);
      } else if (currentDirection === -1 && distanceSinceFlip < -20 && isHidden) {
        setIsHidden(false);
      }
    }

    lastScrollYRef.current = latest;
  });

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-colors duration-300"
        initial={{ y: 0 }}
        animate={{
          y: isHidden ? "-100%" : 0,
          backgroundColor: isScrolled ? "rgba(6, 6, 7, 0.85)" : "rgba(6, 6, 7, 0)",
          borderBottomColor: isScrolled ? "#232326" : "transparent",
          paddingTop: isScrolled ? "0.75rem" : "1.25rem",
          paddingBottom: isScrolled ? "0.75rem" : "1.25rem",
        }}
        style={{
          borderBottomWidth: "1px",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          backgroundColor: { duration: 0.2 },
          paddingTop: { duration: 0.2 },
          paddingBottom: { duration: 0.2 },
        }}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-ink font-semibold tracking-tight text-lg group">
          <span className="w-2.5 h-2.5 rounded-full bg-brand group-hover:scale-125 transition-transform duration-300" />
          <span className="font-mono uppercase text-sm tracking-wider">{agencyData.name}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {agencyData.navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm transition-colors duration-200 py-1 ${
                  isActive ? "text-ink font-medium" : "text-mist hover:text-ink"
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-ink bg-surface border border-hairline rounded-full hover:border-brand/50 hover:bg-surface-2 transition-all duration-300"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-mist hover:text-ink focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-brand" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between md:hidden border-b border-hairline"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-brand uppercase tracking-widest">Navigation</span>
              {agencyData.navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-light tracking-tight transition-colors ${
                    pathname === href ? "text-brand font-normal" : "text-ink hover:text-brand"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="pt-8 border-t border-hairline flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center font-mono text-xs uppercase font-semibold tracking-wider text-ink bg-brand rounded-full hover:bg-brand-bright transition-colors"
              >
                Schedule a Call
              </Link>
              <div className="flex justify-between items-center text-xs text-mist font-mono">
                <span>{agencyData.email}</span>
                <span>{agencyData.phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}