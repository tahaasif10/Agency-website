"use client";

import { useMemo } from "react";
import MetallicPaint from "./MetallicPaint";

interface MetallicWordmarkProps {
  text: string;
}

const FONT_SIZE = 240;
const FONT = `900 ${FONT_SIZE}px Arial, Helvetica, sans-serif`;
const LETTER_SPACING = -4;
// Generous padding so the metallic edge glow/blur never crowds the text —
// the component's own docs call for breathing room around the shape.
const PAD_X = 220;
const PAD_Y = 160;

export default function MetallicWordmark({ text }: MetallicWordmarkProps) {
  const { imageSrc, aspectRatio } = useMemo(() => {
    // Measure the real rendered width of the text at this font so the SVG
    // viewBox is always wide enough — this is what was clipping "Apex AI
    // Studio" down to "pex AI Studi" before.
    let textWidth = text.length * FONT_SIZE * 0.62; // sane fallback if no canvas (SSR)
    if (typeof document !== "undefined") {
      const measureCanvas = document.createElement("canvas");
      const ctx = measureCanvas.getContext("2d");
      if (ctx) {
        ctx.font = FONT;
        textWidth = ctx.measureText(text).width + LETTER_SPACING * (text.length - 1);
      }
    }

    const vbWidth = Math.ceil(textWidth + PAD_X * 2);
    const vbHeight = Math.ceil(FONT_SIZE + PAD_Y * 2);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${vbWidth}" height="${vbHeight}" viewBox="0 0 ${vbWidth} ${vbHeight}">
        <text
          x="${vbWidth / 2}"
          y="${vbHeight / 2}"
          text-anchor="middle"
          dominant-baseline="central"
          font-family="Arial, Helvetica, sans-serif"
          font-weight="900"
          font-size="${FONT_SIZE}"
          letter-spacing="${LETTER_SPACING}"
          fill="black"
        >${text}</text>
      </svg>
    `.trim();

    return {
      imageSrc: `data:image/svg+xml;base64,${btoa(svg)}`,
      aspectRatio: vbWidth / vbHeight,
    };
  }, [text]);

  return (
    <div
      className="relative w-full mx-auto"
      style={{
        aspectRatio: `${aspectRatio}`,
        // Cap how tall it can get on ultra-wide screens so it stays a
        // footer accent, not a second hero section.
        maxHeight: "clamp(6rem, 16vw, 14rem)",
      }}
    >
      {/* Real text for SEO / accessibility / no-WebGL fallback */}
      <span className="sr-only">{text}</span>

      <MetallicPaint
        imageSrc={imageSrc}
        objectFit="cover"
        seed={7}
        scale={3}
        patternSharpness={1.1}
        noiseScale={0.4}
        speed={0.18}
        liquid={0.55}
        mouseAnimation={false}
        brightness={1.6}
        contrast={0.65}
        refraction={0.012}
        blur={0.012}
        chromaticSpread={1.2}
        fresnel={1.1}
        angle={0}
        waveAmplitude={0.8}
        distortion={0.6}
        contour={0.15}
        lightColor="#ffffff"
        darkColor="#1a0800"
        tintColor="#ff5100"
      />
    </div>
  );
}