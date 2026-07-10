"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

/**
 * The site's only motion. Two things, both gentle:
 *   1. Lenis smooth scroll.
 *   2. A single reveal — a slow fade + rise (~0.8s, power2.out) as each
 *      block enters the viewport, driven by GSAP ScrollTrigger.
 *
 * Everything is opt-in from a VISIBLE baseline. The inline head script only
 * arms the reveal (hiding [data-reveal]) when JS is on and reduced motion is
 * off, and it sets a failsafe that reveals all content if this controller
 * never initialises. With JS off or reduced motion, nothing here runs and the
 * page is fully visible. Nothing else animates.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;

    const clearFailsafe = () => {
      const id = (window as unknown as { __revealFailsafe?: number })
        .__revealFailsafe;
      if (id) window.clearTimeout(id);
    };

    // Respect reduced motion: reveal everything, do nothing else.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove("reveal-armed");
      clearFailsafe();
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let lenis: Lenis | null = null;
    let cleanupGsap: (() => void) | null = null;

    (async () => {
      try {
        const [lenisMod, gsapMod, stMod] = await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;

        const Lenis = lenisMod.default;
        const gsap = gsapMod.gsap ?? gsapMod.default;
        const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.6,
        });
        root.classList.add("lenis");

        (window as unknown as { __lenis?: unknown }).__lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        const ctx = gsap.context(() => {
          const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
          items.forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 26 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });
        });

        cleanupGsap = () => {
          ctx.revert();
          ScrollTrigger.getAll().forEach((s) => s.kill());
        };

        // Content is now managed by GSAP; disarm the failsafe.
        clearFailsafe();
        ScrollTrigger.refresh();
      } catch {
        // If motion fails to load, make absolutely sure nothing stays hidden.
        root.classList.remove("reveal-armed");
        clearFailsafe();
      }
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      cleanupGsap?.();
      lenis?.destroy();
      delete (window as unknown as { __lenis?: unknown }).__lenis;
      root.classList.remove("lenis");
    };
  }, []);

  return null;
}
