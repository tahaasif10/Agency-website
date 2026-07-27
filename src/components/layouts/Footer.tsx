"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { agencyData } from "@/lib/data/agency";

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-widest text-faint mb-4 block">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-0 bg-surface-2 pt-24 pb-8 px-6 md:px-12 border-t border-hairline text-ink">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand mb-3">
              Ready to ship production AI?
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-2xl text-ink">
              Building AI systems that deliver <span className="font-semibold text-brand">tangible impact.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand hover:bg-brand-bright text-ink font-mono text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(255,81,0,0.25)] hover:shadow-[0_0_36px_rgba(255,81,0,0.4)]"
          >
            <span>Start your project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="h-px w-full bg-hairline mb-16" />

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-ink font-semibold tracking-tight text-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-brand" />
              <span className="font-mono uppercase text-sm tracking-wider">{agencyData.name}</span>
            </Link>
            <p className="text-sm text-mist leading-relaxed">
              {agencyData.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <ColLabel>Contact</ColLabel>
            <ul className="space-y-3 font-sans text-sm text-mist">
              <li>
                <a
                  href={`mailto:${agencyData.email}`}
                  className="hover:text-ink transition-colors flex items-center gap-1.5"
                >
                  {agencyData.email}
                </a>
              </li>
              <li>
                <a href={`tel:${agencyData.phone}`} className="hover:text-ink transition-colors">
                  {agencyData.phone}
                </a>
              </li>
              <li className="text-faint text-xs pt-2 font-mono">{agencyData.address}</li>
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <ColLabel>Sitemap</ColLabel>
            <nav className="flex flex-col space-y-3 text-sm font-sans text-mist">
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              {agencyData.navLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-ink transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials & Legal */}
          <div>
            <ColLabel>Connect & Legal</ColLabel>
            <div className="flex flex-wrap gap-2 mb-6">
              {agencyData.socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-surface border border-hairline hover:border-brand/40 text-xs font-mono text-mist hover:text-ink rounded-full transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-xs text-faint font-mono">
              <Link href="#" className="hover:text-mist transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-mist transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-faint font-mono">
          <p>© {new Date().getFullYear()} {agencyData.legalName}. All rights reserved.</p>
          <p>Local-First & Enterprise AI Architectures</p>
        </div>
      </div>
    </footer>
  );
}