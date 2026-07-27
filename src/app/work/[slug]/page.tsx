import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Quote, Layers } from "lucide-react";
import { caseStudiesData } from "@/lib/data/caseStudies";
import { Button } from "@/components/ui/Button";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudiesData.find((cs) => cs.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.name} — Apex AI Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudiesData.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="py-20 px-6 md:px-12 bg-void text-ink min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Back Navigation */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-mist hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 text-brand" />
          <span>Back to All Work</span>
        </Link>

        {/* Header Metadata */}
        <header className="mb-16 pb-12 border-b border-hairline">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-mist mb-6">
            <span className="px-3 py-1 bg-brand/10 border border-brand/30 text-brand rounded-full uppercase font-semibold">
              {study.client}
            </span>
            <span>•</span>
            <span className="text-faint uppercase">{study.industry}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-ink mb-8 leading-[1.1]">
            {study.name}
          </h1>

          <p className="text-lg md:text-xl text-mist leading-relaxed max-w-3xl mb-12">
            {study.summary}
          </p>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {study.results.map((res, i) => (
              <div key={i} className="bg-surface border border-hairline rounded-2xl p-6">
                <span className="text-3xl md:text-4xl font-light text-brand tracking-tight block mb-1">
                  {res.metric}
                </span>
                <span className="font-mono text-xs text-mist uppercase tracking-wider block">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </header>

        {/* Challenge & Solution Grid */}
        <section className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-surface border border-hairline rounded-2xl p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand block mb-4">
              01. The Challenge
            </span>
            <h3 className="text-xl font-medium text-ink mb-4">Operational Friction &amp; Legacy Bottlenecks</h3>
            <p className="text-mist text-base leading-relaxed">{study.challenge}</p>
          </div>

          <div className="bg-surface border border-hairline rounded-2xl p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand block mb-4">
              02. The Solution Architecture
            </span>
            <h3 className="text-xl font-medium text-ink mb-4">Autonomous AI System Deployment</h3>
            <p className="text-mist text-base leading-relaxed">{study.solution}</p>
          </div>
        </section>

        {/* Impact & Testimonial */}
        {study.testimonial && (
          <section className="mb-20 bg-surface-2 border border-brand/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-brand/10 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-brand block mb-4">
                Client Perspective
              </span>
              <p className="text-xl md:text-2xl font-light text-ink leading-relaxed mb-6 italic">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-ink font-semibold text-base">{study.testimonial.author}</p>
                <p className="text-xs font-mono text-mist">{study.testimonial.role}</p>
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack Used */}
        <section className="mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-brand block mb-4">
            System Stack &amp; Infrastructure
          </span>
          <div className="flex flex-wrap gap-3">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-surface border border-hairline rounded-full text-xs font-mono text-ink flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-brand" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Next CTA */}
        <section className="bg-surface border border-hairline rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-light text-ink mb-2">
              Facing a similar engineering challenge?
            </h3>
            <p className="text-mist text-sm">
              Let&apos;s evaluate your architecture and build a tailored proof-of-concept.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowUpRight className="w-4 h-4" />}>
            Start a Conversation
          </Button>
        </section>
      </div>
    </article>
  );
}
