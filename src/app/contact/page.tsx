import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactFinalCTA from "@/components/ui/FinalCTAs/ContactFinalCTA";
import Faq from "@/components/sections/global/Faq";

export const metadata = {
  title: "Contact Us — fostyn",
  description: "Get in touch with our AI systems engineering team for a same-day technical review.",
};

export default function ContactPage() {
  return (
    <main className="bg-void text-ink min-h-screen">
      <ContactHero />
      <ContactForm />
      <Faq />
      <ContactFinalCTA />
    </main>
  );
}