"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Link as LinkIcon } from "lucide-react";
import type { SVGProps } from "react";
import { agencyData } from "@/lib/data/agency";
import { servicesData } from "@/lib/data/services";

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-white/35 mb-4 block">
      {children}
    </span>
  );
}

const linkClass =
  "font-sans text-sm text-white/70 hover:text-white transition-colors no-underline relative w-fit " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 " +
  "after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full";

/* lucide-react 1.0 dropped all brand/logo icons, so the social marks are
   small inline SVGs instead of a lucide import. */
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.5 8.25h4.31v2.01h.06c.6-1.13 2.07-2.32 4.26-2.32 4.55 0 5.39 3 5.39 6.89V23h-4.5v-6.44c0-1.54-.03-3.51-2.14-3.51-2.15 0-2.48 1.68-2.48 3.4V23h-4.5V8.25z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2H21l-6.55 7.49L22 22h-6.19l-4.84-6.33L5.4 22H2.62l7.01-8.02L2 2h6.34l4.38 5.79L18.24 2zm-1.08 18.17h1.53L7.9 3.73H6.26l10.9 16.44z" />
    </svg>
  );
}

function GithubMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55C20.71 21.39 24 17.07 24 12c0-6.35-5.15-11.5-12-11.5z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Maps a social platform label to an icon. Falls back to a generic link icon.
function socialIcon(label: string) {
  const key = label.toLowerCase();
  if (key.includes("linkedin")) return LinkedinIcon;
  if (key.includes("twitter") || key === "x" || key.includes("x (")) return XIcon;
  if (key.includes("github")) return GithubMarkIcon;
  if (key.includes("instagram")) return InstagramIcon;
  return LinkIcon;
}

// Derived directly from servicesData so Footer stays synchronized
const footerServices = servicesData.slice(0, 6).map((service) => ({
  href: "/services",
  label: service.title,
}));

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] px-6 md:px-16 pt-16 pb-0 overflow-hidden">
      {/* Top: brand + 3 nav columns, on a 12-col grid so the middle doesn't sit empty
          at wide viewports the way a flex/justify-end layout does. */}
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-14">
        {/* Brand — spans the full row on its own so the three link columns
            can sit evenly spaced beneath/right of it */}
        <div className="col-span-2 lg:col-span-4">
          <Link href="/" className="font-sans font-bold text-2xl tracking-tight text-white no-underline">
            {agencyData.name}
          </Link>
          <p className="mt-4 font-sans text-sm text-white/50 leading-relaxed max-w-sm">
            {agencyData.description}
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 lg:col-start-6">
          <ColLabel>Quick Links</ColLabel>
          <nav className="flex flex-col gap-3">
            <Link href="/" className={linkClass}>
              Home
            </Link>
            {agencyData.navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="lg:col-span-2 lg:col-start-8">
          <ColLabel>Services</ColLabel>
          <nav className="flex flex-col gap-3">
            {footerServices.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact + Social merged, L format */}
        <div className="col-span-2 lg:col-span-3 lg:col-start-10">
          <ColLabel>Contact</ColLabel>
          <ul className="flex flex-col gap-3 mb-6">
            <li>
              <a
                href={`mailto:${agencyData.email}`}
                className="flex items-center gap-2.5 font-sans text-sm text-white/70 hover:text-white transition-colors no-underline"
              >
                <Mail className="w-4 h-4 shrink-0 text-white/45" strokeWidth={1.6} />
                {agencyData.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${agencyData.phone}`}
                className="flex items-center gap-2.5 font-sans text-sm text-white/70 hover:text-white transition-colors no-underline"
              >
                <Phone className="w-4 h-4 shrink-0 text-white/45" strokeWidth={1.6} />
                {agencyData.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 font-sans text-xs text-white/40">
              <MapPin className="w-4 h-4 shrink-0 text-white/40" strokeWidth={1.6} />
              {agencyData.address}
            </li>
          </ul>

          {/* Social icons row — bottom of the L */}
          <div className="flex items-center gap-4">
            {agencyData.socialLinks.map(({ href, label }) => {
              const Icon = socialIcon(label);
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider — separates content from bottom bar instead of relying on empty space */}
      <div className="border-t border-white/[0.08]" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-7 font-sans text-xs text-white/30">
        <p>
          © {new Date().getFullYear()} {agencyData.legalName}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-white/60 transition-colors no-underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white/60 transition-colors no-underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}