import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactFinalCTA from "@/components/ui/FinalCTAs/ContactFinalCTA";

export const metadata = {
  title: "Contact Us — Apex AI Studio",
  description: "Get in touch with our AI systems engineering team for a same-day technical review.",
};

export default function ContactPage(): JSX.Element {
  return (
    <main className="bg-void text-ink min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactFinalCTA />
    </main>
  );
}