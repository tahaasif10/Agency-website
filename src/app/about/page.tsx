import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutWhatWeDo from "@/components/sections/about/AboutWhatWeDo";
import AboutWork from "@/components/sections/about/AboutWork";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutProof from "@/components/sections/about/AboutProof";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata = {
  title: "About Us — Fostyn ",
  description: "Senior AI engineers, full-stack architects, and MLOps specialists building production AI systems.",
};

export default function AboutPage() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <AboutHero />
      <AboutStory />
      {/* <AboutWhatWeDo /> */}
      <AboutWork />
      <AboutTeam />
      <AboutProof />
      <AboutCTA />
    </main>
  );
}