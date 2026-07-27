import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";
import { agencyData } from "@/lib/data/agency";

export const metadata: Metadata = {
  title: `${agencyData.name} — AI Systems & Enterprise Software Studio`,
  description: agencyData.description,
  keywords: ["AI Studio", "Enterprise LLM", "RAG Systems", "AI Agents", "Model Fine-Tuning", "Software Engineering"],
  authors: [{ name: agencyData.name }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-void text-ink font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        {/* Main curtain container lifting over the sticky footer */}
        <main className="relative z-10 bg-void rounded-b-3xl overflow-hidden -mt-px flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}