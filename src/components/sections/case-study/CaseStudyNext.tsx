import React from 'react';
import Link from 'next/link';

export default function CaseStudyNext(): React.JSX.Element {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <Link href="/work" className="inline-block border border-white px-8 py-4 text-xl font-bold">
          Next Case Study →
        </Link>
      </div>
    </section>
  );
}