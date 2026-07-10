"use client";

import { useLanguage } from "./LanguageProvider";
import { scrollToId, scrollToTop } from "./scroll";
import { EMAIL, INSTAGRAM_URL } from "@/lib/i18n";

const NAV: { id: string; key: "projects" | "studio" | "contact" }[] = [
  { id: "progetti", key: "projects" },
  { id: "studio", key: "studio" },
  { id: "contatti", key: "contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-[clamp(4rem,9vw,7rem)]">
        <div className="grid gap-y-14 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.03em] transition-opacity hover:opacity-70"
              aria-label="Zarcola — torna su"
            >
              Zarcola
            </button>
            <p className="mt-8 max-w-[34ch] text-[1.0625rem] leading-relaxed text-paper/60">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-paper/55">
              {t.footer.contactTitle}
            </p>
            <ul className="mt-5 space-y-3 text-[1.0625rem]">
              <li>
                <a href={`mailto:${EMAIL}`} className="link-grow">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  {t.contact.instagramHandle}
                </a>
              </li>
              <li className="text-paper/60">{t.contact.address}</li>
            </ul>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-paper/55">
              {t.footer.navTitle}
            </p>
            <ul className="mt-5 space-y-3 text-[1.0625rem]">
              {NAV.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(item.id)}
                    className="link-grow"
                  >
                    {t.nav[item.key]}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="link-grow text-paper/60"
                >
                  {t.footer.backToTop}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-8 text-[0.8125rem] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Zarcola — {t.footer.rights}
          </p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
