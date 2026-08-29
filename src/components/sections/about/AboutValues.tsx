interface ValueItem {
  title: string;
  desc: string;
}

export default function AboutValues() {
  const values: ValueItem[] = [
    {
      title: "We say no when AI isn't the answer",
      desc: "If a spreadsheet formula solves it, we'll tell you that instead of selling you a model.",
    },
    {
      title: "You see it working before you sign anything",
      desc: "A working prototype comes before a proposal, not after a contract.",
    },
    {
      title: "No black boxes",
      desc: "You own the model, the code, and the data pipeline — no vendor lock-in.",
    },
    {
      title: "Direct line, no account managers",
      desc: "You talk to the person actually building your system, every time.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#111111] mb-12">
          Our Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#8D8D8D]/15 p-6"
            >
              <span className="block w-6 h-[2px] bg-[#FB3C03] mb-5" />
              <h3 className="font-bold text-lg text-[#111111] mb-2">
                {value.title}
              </h3>
              <p className="text-[#5F5F5F] text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}