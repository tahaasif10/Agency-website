import AboutStory from "@/components/sections/about/AboutStory";
import AboutDifference from "@/components/sections/about/AboutDifference";
import AboutWork from "@/components/sections/about/AboutWork";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutTechStack from "@/components/sections/about/AboutTechStack";
import AboutMilestones from "@/components/sections/about/AboutMilestones";
import AboutNumbers from "@/components/sections/about/AboutNumbers";

export const metadata = {
  title: "About Us — Apex AI Studio",
  description: "Senior AI engineers, full-stack architects, and MLOps specialists building production AI systems.",
};

export default function AboutPage() {
  return (
    <main className="bg-void text-ink min-h-screen">
      <AboutStory />
      <AboutDifference />
      <AboutWork />
      <AboutTeam />
      <AboutValues />
      <AboutTechStack />
      <AboutMilestones />
      <AboutNumbers />
    </main>
  );
}