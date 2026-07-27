"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { agencyData } from "@/lib/data/agency";
import { servicesData } from "@/lib/data/services";
import { ContactFormData } from "@/types";

export default function ContactForm(): JSX.Element {
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully!",
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-void text-ink border-t border-hairline">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        {/* Left: direct contact info */}
        <div className="flex flex-col gap-10">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand block mb-2">
              Direct Channels
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-ink mb-6">
              Let&apos;s build something <span className="font-normal text-brand">exceptional.</span>
            </h2>
            <p className="text-mist text-base leading-relaxed">
              Have a complex dataset, model fine-tuning requirement, or agentic workflow in mind? Reach out directly to our engineering team.
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-6 border-t border-hairline">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-1">
                Direct Email
              </h3>
              <a
                href={`mailto:${agencyData.email}`}
                className="text-lg text-ink font-medium hover:text-brand transition-colors inline-flex items-center gap-1.5"
              >
                {agencyData.email}
                <ArrowUpRight className="w-4 h-4 text-brand" />
              </a>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-1">
                Phone &amp; WhatsApp
              </h3>
              <a
                href={`tel:${agencyData.phone}`}
                className="text-lg text-ink font-medium hover:text-brand transition-colors"
              >
                {agencyData.phone}
              </a>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-1">
                HQ Location
              </h3>
              <p className="text-mist text-sm font-mono">{agencyData.address}</p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint mb-3">
                Social Networks
              </h3>
              <div className="flex flex-wrap gap-2">
                {agencyData.socialLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-surface border border-hairline hover:border-brand/40 text-xs font-mono text-mist hover:text-ink rounded-full transition-all"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form card */}
        <div className="bg-surface rounded-3xl border border-hairline p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="mb-6">
            <h3 className="text-xl font-medium tracking-tight text-ink mb-1">Project Inquiry</h3>
            <p className="text-xs text-mist font-mono">Fill in the details below for a same-day technical review.</p>
          </div>

          {/* Alert notifications */}
          {status.type === "success" && (
            <div className="mb-6 p-4 bg-brand/10 border border-brand/40 rounded-xl flex items-start gap-3 text-ink text-sm">
              <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          {status.type === "error" && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 text-red-200 text-sm">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono uppercase text-mist">
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
                  className="bg-surface-2 text-ink placeholder-faint text-sm rounded-xl px-4 py-3 border border-hairline focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono uppercase text-mist">
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
                  className="bg-surface-2 text-ink placeholder-faint text-sm rounded-xl px-4 py-3 border border-hairline focus:outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="organization" className="text-xs font-mono uppercase text-mist">
                Organization / Company
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company Name Inc."
                className="bg-surface-2 text-ink placeholder-faint text-sm rounded-xl px-4 py-3 border border-hairline focus:outline-none focus:border-brand transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-xs font-mono uppercase text-mist">
                Primary Service Interest <span className="text-brand">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="bg-surface-2 text-ink text-sm rounded-xl px-4 py-3 border border-hairline focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-surface-2 text-faint">
                  Select a service category...
                </option>
                {servicesData.map((svc) => (
                  <option key={svc.slug} value={svc.title} className="bg-surface-2 text-ink">
                    {svc.title} ({svc.badge})
                  </option>
                ))}
                <option value="Custom AI Consulting" className="bg-surface-2 text-ink">
                  Custom AI Architecture &amp; Strategy
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono uppercase text-mist">
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
                className="bg-surface-2 text-ink placeholder-faint text-sm rounded-xl px-4 py-3 border border-hairline focus:outline-none focus:border-brand transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-ink font-mono text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-brand-bright transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,81,0,0.2)]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-ink" />
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