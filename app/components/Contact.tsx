"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import ContactForm from "./ContactForm";
import { EMAIL, INSTAGRAM_URL } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contatti" className="scroll-mt-24 bg-paper">
      <div className="container-editorial py-[clamp(5rem,12vw,9rem)]">
        <div className="grid gap-y-16 md:grid-cols-12 md:gap-x-12">
          {/* Left: the direct, unmissable ways to reach the studio */}
          <div className="md:col-span-6">
            <Reveal>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 className="mt-6 max-w-[16ch] text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
                {t.contact.heading}
              </h2>
              <p className="mt-7 max-w-[42ch] text-[1.0625rem] leading-relaxed text-stone md:text-[1.125rem]">
                {t.contact.lead}
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow">{t.contact.emailLabel}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="link-grow mt-3 inline-block text-[clamp(1.5rem,3.6vw,2.6rem)] font-medium tracking-[-0.02em] text-ink"
              >
                {EMAIL}
              </a>
            </Reveal>

            <Reveal className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow">{t.contact.instagramLabel}</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow mt-2 inline-block text-[1.25rem] font-medium text-ink"
                >
                  {t.contact.instagramHandle}
                </a>
              </div>
              <div>
                <p className="eyebrow">{t.contact.addressLabel}</p>
                <p className="mt-2 text-[1.25rem] font-medium text-ink">
                  {t.contact.address}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: the form */}
          <Reveal className="md:col-span-5 md:col-start-8">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
