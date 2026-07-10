# Zarcola

Sito dello studio di architettura **Zarcola** — Milano.
Restauro e recupero di case storiche e cascine, ricerca e installazioni
temporanee. Il progetto come dialogo con la preesistenza.

Studio fondato da **Edoardo Giancola** e **Federico Zarattini**.
studio@zarcola.com · [@zarcola](https://www.instagram.com/zarcola) · Milano, 20136

---

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens as the single source of truth)
- **Lenis** (smooth scroll) + **GSAP** (one gentle reveal)
- Self-hosted typeface via **next/font/local**
- Ready to deploy on **Vercel** (Framework Preset = Next.js)

## Design system

Off-white paper, off-black ink, warm greys. Exact hex only — declared once in
`app/globals.css` (both as full-value and R G B channel tokens) and mirrored in
`tailwind.config.ts`.

| Token   | Hex       | Use                          |
| ------- | --------- | ---------------------------- |
| paper   | `#F5F4F2` | base                         |
| bone    | `#EAE8E3` | surfaces                     |
| ink     | `#1A1A18` | off-black text               |
| stone   | `#6E6A63` | muted labels                 |
| line    | `#D8D5CF` | hairlines                    |
| accent  | `#7C6A58` | warm taupe, used sparingly   |

**Typeface.** A single clean grotesque — **Hanken Grotesk** — self-hosted
(`app/fonts/hanken-grotesk-variable.woff2`, OFL) and wired through
`next/font/local`. It approximates the restrained, Suisse-Int'l feeling asked
for in the brief (Satoshi / General Sans were unavailable from Fontshare in the
build environment; Hanken Grotesk is the closest freely-licensed, self-hostable
neutral grotesque — and, importantly, not Inter/system).

**Motion.** Content is visible by default in CSS. An inline head script arms a
single reveal (fade + rise, ~0.8s, `power2.out`) only when JS is on *and*
`prefers-reduced-motion` is not set, with a failsafe that reveals everything if
the motion controller never initialises. Project images scale to 1.05 on hover.
Nothing else moves. With JS off or reduced motion, the page is fully visible.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

### Photography & blur placeholders

Real project photos live in `public/foto`. Tiny base64 blur placeholders are
generated with `sharp` and committed to `lib/blur.ts`:

```bash
npm run blur     # regenerate lib/blur.ts after changing the photos
```

All imagery is **real** studio photography (no AI-generated images). Hero photo:
Alessandro Saletta / DSL Studio.

## Content

Italian is primary, with an IT/EN toggle (see `lib/i18n.ts`). Project metadata
lives in `lib/projects.ts`.

> **Note for the studio:** project categories and material notes are drawn from
> the photographs; specific locations are only stated where certain (Milan
> projects). Years, clients and exact addresses were intentionally left out
> rather than guessed — please confirm and extend `lib/projects.ts`.

## Deploy on Vercel

Import the repository, keep the **Next.js** preset, and deploy. No environment
variables are required. The contact form opens the visitor's mail client
(pre-filled to `studio@zarcola.com`); connect a form backend (e.g. Resend or
Formspree) later if server-side delivery is wanted.
