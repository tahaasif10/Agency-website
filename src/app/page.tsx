import Hero from "@/components/sections/home/Hero";
import ClientsLogos from "@/components/sections/home/ClientsLogos";
import AboutUs from "@/components/sections/home/AboutUs";

// TODO: wire these in as each is migrated in Phase D
import Services from "@/components/sections/home/Services";
// import CaseStudy from "@/components/sections/home/CaseStudy";
import Process from "@/components/sections/home/Process";
import Testimonials from "@/components/sections/home/Testimonials";
import WhyUs from "@/components/sections/home/WhyUs";

import Faq from "@/components/sections/home/Faq";
import FinalCTA from "@/components/sections/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsLogos />
      <AboutUs />
      <Services />
      {/* <CaseStudy /> */}
      <Process />
      <Testimonials />
      <WhyUs />
      <Faq />
      <FinalCTA />
    </>
  );
}