"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { agencyData } from "@/lib/data/agency";
import { servicesData } from "@/lib/data/services";
import { ContactFormData } from "@/types";

type SocialIconProps = {
  className?: string;
};

function LinkedinIcon({ className }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-12h4v2" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon({ className }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<SocialIconProps>> = {
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to submit message.");
      setStatus({ type: "success", message: data.message || "Message sent successfully!" });
      setFormData({ name: "", email: "", organization: "", service: "", message: "" });
    } catch (err: unknown) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fields feeding the live "filled" counter
  const summaryRows: { label: string; value: string }[] = [
    { label: "Name", value: formData.name },
    { label: "Email", value: formData.email },
    { label: "Organization", value: formData.organization ?? "" },
    { label: "Service", value: formData.service },
    { label: "Message", value: formData.message },
  ];
  const filledCount = summaryRows.filter((r) => r.value.trim().length > 0).length;

  const inputClasses =
    "bg-surface text-ink placeholder-faint placeholder:text-[15px] text-sm rounded-md px-4 py-3 border border-hairline outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/15 focus:shadow-[0_0_0_3px_rgba(255,81,0,0.08)]";

  return (
    <section className="px-[clamp(1.5rem,5vw,4rem)] max-w-[1980px] mx-auto bg-void text-ink border-t border-hairline py-[clamp(3.5rem,7vw,6rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-12 items-start">
        {/* Left: direct contact info */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold leading-[1.1] text-ink mb-6 tracking-[-0.03em]">
              Let&apos;s build something <span className="text-brand">exceptional.</span>
            </h2>
            <p className="text-base leading-relaxed text-mist max-w-[48ch]">
              Whether it's a full product build, an AI system, or something in between — reach out directly to the engineers who'll actually build it.
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-6 border-t border-hairline">
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.06em] text-faint mb-1">
                Direct Email
              </h3>
              <a
                href={`mailto:${agencyData.email}`}
                className="text-[17px] font-semibold text-ink hover:text-brand transition-colors inline-flex items-center gap-1.5"
              >
                {agencyData.email}
                <ArrowUpRight className="w-4 h-4 text-brand" />
              </a>
            </div>

            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.06em] text-faint mb-1">
                Phone &amp; WhatsApp
              </h3>
              <a
                href={`tel:${agencyData.phone}`}
                className="text-[17px] font-semibold text-ink hover:text-brand transition-colors"
              >
                {agencyData.phone}
              </a>
            </div>

            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.06em] text-faint mb-1">
                HQ Location
              </h3>
              <p className="text-[17px] font-semibold text-ink">{agencyData.address}</p>
            </div>

            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.06em] text-faint mb-3">
                Social Networks
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {agencyData.socialLinks.map(({ href, label, iconName }) => {
                  const Icon = socialIcons[iconName];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-hairline text-ink hover:border-brand hover:text-brand transition-colors"
                    >
                      {Icon && <Icon className="w-[18px] h-[18px]" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form card — blueprint treatment */}
        <div className="relative bg-surface border border-hairline p-8 md:p-10 shadow-sm">
          {/* corner ticks */}
          <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-brand" />
          <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-brand" />
          <span className="absolute -left-px -bottom-px h-3 w-3 border-b-2 border-l-2 border-brand" />
          <span className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-brand" />

          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[28px] font-medium tracking-tight text-ink mb-1">
                Project Inquiry
              </h3>
              <p className="text-sm text-mist">
                Fill in the details below for a same-day technical review.
              </p>
            </div>
            {/* live completion readout */}
            <div className="shrink-0 text-right">
              <span className="block text-[11px] uppercase tracking-[0.06em] text-faint">
                Fields
              </span>
              <span className="block text-lg font-semibold text-ink">
                {filledCount}
                <span className="text-faint">/5</span>
              </span>
            </div>
          </div>

          {status.type === "success" && (
            <div className="mb-6 p-4 bg-brand/5 border border-brand/30 rounded-md flex items-start gap-3 text-ink text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          {status.type === "error" && (
            <div className="mb-6 p-4 bg-red-500/5 border border-red-500/30 rounded-md flex items-start gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[12px] uppercase tracking-wider text-mist font-medium">
                  Full Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[12px] uppercase tracking-wider text-mist font-medium">
                  Work Email <span className="text-brand">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="organization" className="text-[12px] uppercase tracking-wider text-mist font-medium">
                Organization / Company
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company Name Inc."
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-[12px] uppercase tracking-wider text-mist font-medium">
                Primary Service Interest <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                placeholder="Tell us what you need help with..."
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[12px] uppercase tracking-wider text-mist font-medium">
                Project Scope &amp; Message <span className="text-brand">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your use case, data environment, and target timeline..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-void text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-md hover:bg-brand-dim transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,81,0,0.2)] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}