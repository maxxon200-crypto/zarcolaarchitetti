"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { scrollToId, scrollToTop } from "./scroll";
import type { Lang } from "@/lib/i18n";

const NAV: { id: string; key: "projects" | "studio" | "contact" }[] = [
  { id: "progetti", key: "projects" },
  { id: "studio", key: "studio" },
  { id: "contatti", key: "contact" },
];

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.82);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = !solid && !open; // light text over the hero photograph
  const headerBg = open
    ? "bg-paper"
    : solid
      ? "bg-paper/90 backdrop-blur-md border-b border-line"
      : "bg-transparent border-b border-transparent";

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  const brand = () => {
    setOpen(false);
    scrollToTop();
  };

  const chooseLang = (next: Lang) => setLang(next);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        dark ? "text-paper" : "text-ink",
        headerBg,
      ].join(" ")}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <button
          type="button"
          onClick={brand}
          className="text-[1.05rem] font-medium tracking-[-0.01em] transition-opacity hover:opacity-70"
          aria-label="Zarcola — home"
        >
          Zarcola
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="link-grow text-[0.95rem] font-medium"
            >
              {t.nav[item.key]}
            </button>
          ))}
          <LangSwitch lang={lang} onChoose={chooseLang} label={t.nav.langLabel} />
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.close : t.nav.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={[
                "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden bg-paper text-ink transition-[max-height] duration-500 ease-editorial",
          open ? "max-h-[80vh] border-b border-line" : "max-h-0",
        ].join(" ")}
      >
        <nav
          className="container-editorial flex flex-col gap-1 pb-10 pt-4"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="border-b border-line py-4 text-left text-2xl font-medium tracking-[-0.02em]"
            >
              {t.nav[item.key]}
            </button>
          ))}
          <div className="pt-6">
            <LangSwitch
              lang={lang}
              onChoose={chooseLang}
              label={t.nav.langLabel}
              size="lg"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

function LangSwitch({
  lang,
  onChoose,
  label,
  size = "sm",
}: {
  lang: Lang;
  onChoose: (l: Lang) => void;
  label: string;
  size?: "sm" | "lg";
}) {
  const base = size === "lg" ? "text-base" : "text-[0.8125rem]";
  return (
    <div
      className={`flex items-center gap-2 ${base} font-medium tracking-[0.08em]`}
      role="group"
      aria-label={label}
    >
      {(["it", "en"] as Lang[]).map((code, i) => (
        <span key={code} className="flex items-center gap-2">
          {i === 1 && <span aria-hidden className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => onChoose(code)}
            aria-pressed={lang === code}
            className={
              lang === code
                ? "uppercase opacity-100"
                : "uppercase opacity-45 transition-opacity hover:opacity-80"
            }
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
