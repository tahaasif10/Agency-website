"use client";

import { motion } from "framer-motion";
import { agencyData } from "@/lib/data/agency";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-36 pb-20 md:pt-44 md:pb-28 border-b border-hairline">
      {/* Subtle Light Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(6,6,7,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05]">
            Senior engineers building software that {" "}
            <span className="text-gradient-brand">actually ships</span>.
          </h1>

          {/* Sub-headline */}
          <p className="mt-8 text-xl md:text-2xl text-mist leading-relaxed font-light max-w-3xl">
            We founded Fostyn because too many businesses were stuck between ambitious ideas and software that actually worked in the real world. 
            We build the products, platforms, AI systems, and infrastructure that turn those ideas into reliable software — built for real users, real operations, and the demands that come after launch..
          </p>
        </motion.div>
      </div>
    </section>
  );
}
