// import type { CSSProperties } from "react";

// // Color tokens
// const COLORS: Record<string, string> = {
//   void: "#060607",     // page background
//   surface: "#0F1011",  // panel background
//   hairline: "#242526", // panel border — re-establishes edge definition now that
//                         // the page is dark too, since we lost the light-frame contrast
//   ink: "#FAFAFA",       // headline, button
//   mist: "#9A9A9C",      // label, subtext
//   signal: "#FF5100",    // dot, radial glow, button hover
// };

// export default function FinalCTA() {
//   return (
//     <section className="px-5 py-5" style={{ background: COLORS.void }}>
//       {/* Panel sits on Surface (not Void) so it still reads as an elevated object
//           against the page — plus a Hairline border to re-establish the edge that
//           the light outer frame used to provide in the original design. */}
//       <div
//         className="cta-panel w-full rounded-[20px] px-6 md:px-12 py-20 md:py-28 text-center relative overflow-hidden"
//         style={{
//           background: `radial-gradient(ellipse 65% 65% at 15% 0%, rgba(255,81,0,0.22) 0%, transparent 65%), ${COLORS.surface}`,
//           border: `1px solid ${COLORS.hairline}`,
//         }}
//       >
//         {/* Label */}
//         <div className="inline-flex items-center gap-2 mb-8 relative z-10">
//           <span
//             className="w-1.5 h-1.5 rounded-full"
//             style={{ background: COLORS.signal }}
//             aria-hidden="true"
//           />
//           <span
//             style={{ fontFamily: "'Inter', sans-serif", color: COLORS.mist } as CSSProperties}
//             className="text-[11px] font-semibold tracking-[0.18em] uppercase"
//           >
//             Work with us
//           </span>
//         </div>

//         {/* Headline */}
//         <h2
//           style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em", color: COLORS.ink } as CSSProperties}
//           className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 relative z-10"
//         >
//           Great Software Isn't Built. It's{" "}
//           <em className="italic font-bold">Engineered.</em>
//         </h2>

//         {/* Subtext */}
//         <p
//           style={{ fontFamily: "'Inter', sans-serif", color: COLORS.mist } as CSSProperties}
//           className="text-[15px] leading-[1.7] max-w-sm mx-auto mb-10 relative z-10"
//         >
//           AI-powered automation. Rock-solid engineering. One team that delivers both — let's build yours.
//         </p>

//         {/* CTA Button */}
//         <a
//           href="#contact"
//           style={{ fontFamily: "'Inter', sans-serif", background: COLORS.ink, color: COLORS.void } as CSSProperties}
//           className="cta-button relative z-10 inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 active:scale-100"
//         >
//           Let&apos;s talk
//         </a>
//       </div>

//       <style>{`
//         /* Slow ambient drift on the radial glow — reinforces "techy/alive" without
//            being a loud animation. Runs continuously, very subtle. */
//         .cta-panel {
//           background-size: 140% 140%, 100% 100%;
//           animation: cta-glow-drift 12s ease-in-out infinite;
//         }
//         @keyframes cta-glow-drift {
//           0%, 100% { background-position: 0% 0%, 0 0; }
//           50% { background-position: 15% 10%, 0 0; }
//         }

//         /* Button hover: shifts from Ink fill to Signal fill + soft glow —
//            the one moment on this panel allowed to feel "electric," since it's
//            the single most important click on the whole page. */
//         .cta-button:hover {
//           background: ${COLORS.signal} !important;
//           color: ${COLORS.ink} !important;
//           box-shadow: 0 0 32px rgba(255, 81, 0, 0.35);
//           transform: scale(1.03);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .cta-panel { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }

export default function FinalCTA() {
  return (
    <section className="bg-[#F5F3EF] px-5 py-5">
      {/* Full-bleed dark panel with subtle orange radial gradient */}
      <div
        className="w-full rounded-[20px] px-6 md:px-12 py-20 md:py-28 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 65% 65% at 15% 0%, rgba(242,65,10,0.22) 0%, transparent 65%), #0F0D0C",
        }}
      >
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8 relative z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F2410A]" aria-hidden="true" />
          <span
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FAFAFA]/60"
          >
            Work with us
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          className="text-4xl md:text-5xl font-bold text-[#F5F2EF] leading-[1.1] mb-6 relative z-10"
        >
          Ready to get{" "}
          <em className="italic font-bold">started!</em>
        </h2>

        {/* Subtext */}
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[15px] leading-[1.7] text-[#FAFAFA]/45 max-w-sm mx-auto mb-10 relative z-10"
        >
          Let's build something great together.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="relative z-10 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#1C1712] text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white/90 hover:scale-[1.03] active:scale-100"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}