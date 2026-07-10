"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export default function Manifesto() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-line bg-paper">
      <div className="container-editorial grid gap-y-10 py-[clamp(5rem,12vw,9rem)] md:grid-cols-12 md:gap-x-12">
        <Reveal className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {t.manifesto.eyebrow}
          </p>
        </Reveal>

        <div className="md:col-span-9 md:pl-4">
          <Reveal
            as="p"
            className="max-w-[24ch] text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
          >
            {t.manifesto.body[0]}
          </Reveal>
          <Reveal
            as="p"
            className="mt-8 max-w-[52ch] text-[1.125rem] leading-relaxed text-stone md:text-[1.25rem]"
          >
            {t.manifesto.body[1]}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
