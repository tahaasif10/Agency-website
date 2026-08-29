import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Nav from "@/components/layouts/Nav";
import Footer from "@/components/layouts/Footer";
import { agencyData } from "@/lib/data/agency";

const monaSans = localFont({
  src: "../../public/Fonts/MonaSansVF.ttf",
  variable: "--font-mona-sans",
  display: "swap",
  weight: "100 900",   // variable weight range
  style: "normal",
});

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
    <html lang="en" className={`scroll-smooth ${monaSans.variable}`}>
      <body className="bg-void text-ink font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        {/* Main curtain container lifting over the sticky footer */}
        <main
          className="relative z-10 bg-void rounded-b-3xl -mt-px flex-1"
          style={{ clipPath: "inset(0 round 0 0 1.5rem 1.5rem)" }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}