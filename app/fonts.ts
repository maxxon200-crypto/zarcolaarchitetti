import localFont from "next/font/local";

/**
 * The single typeface for the entire site: one clean grotesque, no serif.
 * Hanken Grotesk is a neutral, quietly-cut grotesque used here to approximate
 * the Suisse Int'l feeling — self-hosted (the woff2 lives in the repo) and
 * optimised by next/font, never fetched from a third-party CDN at runtime.
 */
export const hankenGrotesk = localFont({
  src: "./fonts/hanken-grotesk-variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
  style: "normal",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});
