import Hero from "@/components/sections/home/Hero";
import ClientsLogos from "@/components/sections/home/ClientsLogos";
import AboutUs from "@/components/sections/home/AboutUs";

// TODO: wire these in as each is migrated in Phase D
import Services from "@/components/sections/home/Services";
// import CaseStudy from "@/components/sections/home/CaseStudy";
import Process from "@/components/sections/global/Process";
import Testimonials from "@/components/sections/global/Testimonials";
import WhyUs from "@/components/sections/home/WhyUs";

import Faq from "@/components/sections/global/Faq";
import FinalCTA from "@/components/ui/FinalCTAs/HomeFinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsLogos />
      <AboutUs />
      <Services />
      {/* <CaseStudy /> */}
      <Process />
      <WhyUs />
      <Testimonials />
      <Faq />
      <FinalCTA />
    </>
  );
}