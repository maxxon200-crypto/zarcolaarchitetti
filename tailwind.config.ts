import type { Config } from "tailwindcss";

/**
 * Design tokens are the single source of truth for the whole site.
 * Colours are the exact hex values from the Zarcola brand system, exposed as
 * CSS custom properties in globals.css and referenced here so utilities and
 * raw CSS stay in sync. No colour is ever expressed as a generic descriptor.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // A single, restrained type family — one clean grotesque, no serif.
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
    extend: {
      // Channel-based so the `/opacity` modifier works (e.g. text-paper/80).
      // The exact hex values live in globals.css as both full-value and
      // channel tokens.
      colors: {
        paper: "rgb(var(--paper-rgb) / <alpha-value>)", // #F5F4F2 — base
        bone: "rgb(var(--bone-rgb) / <alpha-value>)", // #EAE8E3 — surfaces
        ink: "rgb(var(--ink-rgb) / <alpha-value>)", // #1A1A18 — off-black text
        stone: "rgb(var(--stone-rgb) / <alpha-value>)", // #6E6A63 — muted labels
        line: "rgb(var(--line-rgb) / <alpha-value>)", // #D8D5CF — hairlines
        accent: "rgb(var(--accent-rgb) / <alpha-value>)", // #7C6A58 — warm taupe
      },
      maxWidth: {
        container: "88rem",
        prose: "40rem",
      },
      letterSpacing: {
        label: "0.14em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
