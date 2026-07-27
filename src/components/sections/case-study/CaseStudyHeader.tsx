import React from 'react';

export default function CaseStudyHeader(): React.JSX.Element {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">[Client/Project Name]</h1>
        <p className="text-lg md:text-xl mb-8 border border-white p-4 inline-block">
          [Your Role — e.g. Lead Developer]
        </p>
        <div className="flex gap-4 flex-wrap">
          <span className="border border-white px-3 py-1">[Tech 1]</span>
          <span className="border border-white px-3 py-1">[Tech 2]</span>
          <span className="border border-white px-3 py-1">[Tech 3]</span>
        </div>
      </div>
    </section>
  );
}