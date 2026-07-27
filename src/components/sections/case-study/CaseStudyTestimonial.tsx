import React from 'react';

export default function CaseStudyTestimonial(): React.JSX.Element {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white">
      <div className="max-w-4xl mx-auto text-center border border-white p-12">
        <blockquote className="text-2xl italic mb-8">
          "[Client testimonial quote goes here]"
        </blockquote>
        <div className="font-bold">
          [Name, Title/Company]
        </div>
      </div>
    </section>
  );
}