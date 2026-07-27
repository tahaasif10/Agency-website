import React from 'react';

export default function CaseStudyResults(): React.JSX.Element {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">The Results</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border border-white p-6">
            <div className="text-3xl font-bold mb-2">[X%]</div>
            <div>[metric label]</div>
          </div>
          <div className="border border-white p-6">
            <div className="text-3xl font-bold mb-2">[X hrs/week]</div>
            <div>[metric label]</div>
          </div>
          <div className="border border-white p-6">
            <div className="text-3xl font-bold mb-2">[X weeks]</div>
            <div>[metric label]</div>
          </div>
        </div>
        <p className="text-xl font-bold">
          [Short summary of overall outcome]
        </p>
      </div>
    </section>
  );
}