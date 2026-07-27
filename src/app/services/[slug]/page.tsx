import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, Cpu, Layers } from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — Apex AI Studio`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <article className="py-20 px-6 md:px-12 bg-void text-ink min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-mist hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 text-brand" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Header */}
        <header className="mb-16 pb-12 border-b border-hairline">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 border border-brand/30 rounded-full font-mono text-xs font-semibold uppercase text-brand mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-ink mb-6 max-w-4xl leading-[1.1]">
            {service.title}
          </h1>

          <p className="text-lg md:text-xl text-mist leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>
        </header>

        {/* Features Grid */}
        <section className="mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand block mb-4">
            Core Capabilities &amp; System Features
          </span>
          <div className="grid md:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-surface border border-hairline rounded-2xl p-6 hover:border-brand/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-mono text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">{feature.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <section className="bg-surface rounded-2xl border border-hairline p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-brand mb-6">
              Key Deliverables &amp; Artifacts
            </h3>
            <ul className="space-y-4">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-surface rounded-2xl border border-hairline p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-brand mb-6">
              Technologies &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-surface-2 border border-hairline rounded-full text-xs font-mono text-mist flex items-center gap-1.5"
                >
                  <Cpu className="w-3 h-3 text-brand" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="bg-surface-2 border border-hairline rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-ink mb-2">
              Need <span className="font-normal text-brand">{service.badge}</span> in your stack?
            </h3>
            <p className="text-mist text-sm max-w-xl">
              We scope, build, and deploy production systems tailored to your architecture with zero handoffs.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Schedule Technical Call
          </Button>
        </section>
      </div>
    </article>
  );
}
