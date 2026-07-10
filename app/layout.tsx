import type { Metadata, Viewport } from "next";
import "./globals.css";
import { hankenGrotesk } from "./fonts";
import { LanguageProvider } from "./components/LanguageProvider";
import Motion from "./components/Motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zarcola.com"),
  title: {
    default: "Zarcola — Studio di architettura, Milano",
    template: "%s — Zarcola",
  },
  description:
    "Zarcola è uno studio di architettura a Milano. Restauro e recupero di case storiche e cascine, ricerca e installazioni temporanee: il progetto come dialogo con la preesistenza.",
  keywords: [
    "Zarcola",
    "studio di architettura",
    "Milano",
    "restauro",
    "recupero",
    "case storiche",
    "cascine",
    "architettura",
    "Edoardo Giancola",
    "Federico Zarattini",
  ],
  authors: [{ name: "Zarcola" }],
  openGraph: {
    title: "Zarcola — Studio di architettura, Milano",
    description:
      "Restauro e recupero di case storiche e cascine, ricerca e installazioni temporanee. Il progetto come dialogo con la preesistenza.",
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_GB",
    siteName: "Zarcola",
    images: [
      {
        url: "/foto/hero-legno.jpg",
        width: 2048,
        height: 1365,
        alt: "Interno con schermatura in listelli di legno — progetto Zarcola.",
      },
    ],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F5F4F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// Runs before first paint: enables the reveal (hiding tagged blocks) only when
// JS is on AND reduced motion is off, with a failsafe that reveals everything
// if the motion controller never initialises. Guarantees the page is never
// blank with JS off, under reduced motion, or on a slow/failed script.
const REVEAL_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){return;}}catch(e){return;}d.classList.add('reveal-armed');window.__revealFailsafe=window.setTimeout(function(){d.classList.remove('reveal-armed');},2500);})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={hankenGrotesk.variable}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
        <a
          href="#progetti"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Vai ai contenuti
        </a>
        <LanguageProvider>
          <Motion />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
