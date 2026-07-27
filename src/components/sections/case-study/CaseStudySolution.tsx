import React from 'react';

export default function CaseStudySolution(): React.JSX.Element {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">The Solution</h2>
        <div className="space-y-4 text-lg mb-8">
          <p>[1-2 paragraphs describing what was built]</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <span className="border border-white px-3 py-1">[Tech 1]</span>
          <span className="border border-white px-3 py-1">[Tech 2]</span>
          <span className="border border-white px-3 py-1">[Tech 3]</span>
        </div>
      </div>
    </section>
  );
}