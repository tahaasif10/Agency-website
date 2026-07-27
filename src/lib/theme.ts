// src/lib/theme.ts

export const colors = {
  bg: {
    void: "#060607",
    surface: "#0D0D0F",
    surface2: "#141416",
  },
  border: {
    hairline: "#232326",
    hairlineStrong: "#2E2E32",
  },
  text: {
    ink: "#FAFAFA",
    mist: "#9A9A9E",
    faint: "#5C5C60",
  },
  brand: {
    DEFAULT: "#FF5100",
    bright: "#FF7A3D",
    dim: "#B23900",
    wash: "rgba(255, 81, 0, 0.1)",
  },
} as const;

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "28px",
  full: "9999px",
} as const;

export const transition = {
  fast: "0.2s cubic-bezier(0.25, 1, 0.5, 1)",
  base: "0.3s cubic-bezier(0.25, 1, 0.5, 1)",
  slow: "0.7s cubic-bezier(0.16, 1, 0.3, 1)",
} as const;