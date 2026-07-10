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
        alt="Interno con schermatura in listelli di legno affacciata su una parete di cemento — dialogo tra intervento ligneo e preesistenza. Progetto Zarcola."
        fill
        priority
        sizes="100vw"
        quality={82}
        placeholder="blur"
        blurDataURL={heroImage.blurDataURL}
        className="object-cover"
      />

      {/* Legibility scrim — darker at the base for the headline, a touch at
          the top for the navigation. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(26,26,24,0.74) 0%, rgba(26,26,24,0.42) 28%, rgba(26,26,24,0.10) 54%, rgba(26,26,24,0.06) 78%, rgba(26,26,24,0.30) 100%)",
        }}
      />

      <div className="container-editorial relative z-10 pb-[clamp(3rem,8vh,6rem)] pt-28">
        <p className="eyebrow !text-paper/80">{t.hero.eyebrow}</p>

        <h1 className="mt-6 max-w-[18ch] text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[1.0] tracking-[-0.03em] text-paper">
          {t.hero.lineOne}
          <br />
          {t.hero.lineTwoPre}
          <span style={{ color: "var(--accent)" }}>{t.hero.accent}</span>
          {t.hero.lineTwoPost}
        </h1>

        <p className="mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-paper/85 md:text-[1.1875rem]">
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

      <span className="absolute bottom-4 right-[clamp(1.25rem,5vw,5rem)] z-10 text-[0.7rem] tracking-[0.08em] text-paper/55">
        {t.hero.credit}
      </span>
    </section>
  );
}
