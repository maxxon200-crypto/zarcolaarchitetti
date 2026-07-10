"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { scrollToId } from "./scroll";
import { heroImage } from "@/lib/projects";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed real project photograph */}
      <Image
        src={heroImage.src}
        alt="Padiglione temporaneo in legno illuminato nella sera, tra gli alberi di un parco, con persone attorno — progetto di ricerca Zarcola, Troppe Colonne."
        fill
        priority
        sizes="100vw"
        quality={82}
        placeholder="blur"
        blurDataURL={heroImage.blurDataURL}
        className="object-cover"
      />

      {/* Legibility scrim — strong at the base behind the headline and
          subtitle, still dark through the middle (the night photograph keeps
          its glow), with a darker top for the navigation. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(26,26,24,0.88) 0%, rgba(26,26,24,0.70) 32%, rgba(26,26,24,0.52) 58%, rgba(26,26,24,0.40) 78%, rgba(26,26,24,0.55) 100%)",
        }}
      />

      <div className="container-editorial relative z-10 pb-[clamp(3rem,8vh,6rem)] pt-28">
        <p className="eyebrow !text-paper/80">{t.hero.eyebrow}</p>

        <h1
          className="mt-6 max-w-[15ch] text-[clamp(2.5rem,6.4vw,5.25rem)] font-medium leading-[1.04] tracking-[-0.03em] text-paper"
          style={{
            textShadow:
              "0 1px 28px rgba(26,26,24,0.55), 0 2px 6px rgba(26,26,24,0.35)",
          }}
        >
          {t.hero.lineOne}
          {t.hero.lineTwoPre}
          <span style={{ color: "var(--accent)" }}>{t.hero.accent}</span>
          {t.hero.lineTwoPost}
        </h1>

        <p
          className="mt-8 max-w-[42ch] text-[1.25rem] leading-relaxed text-paper md:text-[1.5rem]"
          style={{ textShadow: "0 1px 20px rgba(26,26,24,0.5)" }}
        >
          {t.hero.descriptor}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToId("progetti")}
            className="btn btn-on-photo-solid"
          >
            {t.hero.ctaProjects}
          </button>
          <button
            type="button"
            onClick={() => scrollToId("contatti")}
            className="btn btn-on-photo-outline"
          >
            {t.hero.ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
}
