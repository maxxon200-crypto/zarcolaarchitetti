"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export default function Studio() {
  const { t } = useLanguage();

  return (
    <section id="studio" className="scroll-mt-24 border-b border-line bg-bone">
      <div className="container-editorial py-[clamp(5rem,12vw,9rem)]">
        <div className="grid gap-y-14 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{t.studio.eyebrow}</p>
              <h2 className="mt-6 max-w-[18ch] text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] text-ink">
                {t.studio.heading}
              </h2>
            </Reveal>

            <div className="mt-10 max-w-[54ch] space-y-6">
              {t.studio.body.map((para, i) => (
                <Reveal
                  as="p"
                  key={i}
                  className="text-[1.125rem] leading-relaxed text-ink md:text-[1.1875rem]"
                >
                  {para}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="md:col-span-4 md:col-start-9">
            <div className="md:sticky md:top-28">
              <p className="eyebrow">{t.studio.infoTitle}</p>
              <dl className="mt-6">
                {t.studio.info.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-1 border-t border-line py-4 ${
                      i === t.studio.info.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <dt className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-stone">
                      {row.label}
                    </dt>
                    <dd className="text-[1.0625rem] leading-snug text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
