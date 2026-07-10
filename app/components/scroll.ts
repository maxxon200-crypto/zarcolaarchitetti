// Shared smooth-scroll helper. Uses Lenis when it is active (exposed on
// window by the Motion controller), and falls back to native scrolling —
// instant when the visitor prefers reduced motion.
interface LenisLike {
  scrollTo: (
    target: number | string | HTMLElement,
    opts?: { offset?: number; duration?: number },
  ) => void;
}

const HEADER_OFFSET = -80;

function reduced(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getLenis(): LenisLike | undefined {
  return (window as unknown as { __lenis?: LenisLike }).__lenis;
}

export function scrollToId(id: string): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis && !reduced()) {
    lenis.scrollTo(el, { offset: HEADER_OFFSET, duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
  }
}

export function scrollToTop(): void {
  if (typeof window === "undefined") return;
  const lenis = getLenis();
  if (lenis && !reduced()) {
    lenis.scrollTo(0, { duration: 1.1 });
  } else {
    window.scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });
  }
}
