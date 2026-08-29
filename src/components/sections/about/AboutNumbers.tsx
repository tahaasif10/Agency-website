interface StatItem {
  value: string;
  label: string;
}

export default function AboutNumbers() {
  const stats: StatItem[] = [
    { value: "0", label: "Projects Shipped" },
    { value: "0", label: "Clients Served" },
    { value: "0%", label: "Client Retention" },
    { value: "0", label: "Avg. Weeks to First Prototype" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F4F4F2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#111111] mb-2">
          By The Numbers
        </h2>
        <p className="text-[#5F5F5F] mb-12 max-w-xl">
          {/* EDIT: once you have real data, this line can go too — or keep it as a standing promise */}
          Small team, real numbers. We&apos;ll keep this section honest as it grows.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#8D8D8D]/15 p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FB3C03] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#5F5F5F]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}