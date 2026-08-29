import WorkGrid from "@/components/sections/work/WorkGrid";

export const metadata = {
  title: "Selected Work & Case Studies — fostyn",
  description: "Explore AI systems built end-to-end for fintech, healthcare, legal tech, and enterprise SaaS.",
};

export default function WorkPage(): React.JSX.Element {
  return (
    <main className="bg-void text-ink min-h-screen">
      <WorkGrid />
    </main>
  );
}