import { blurFor } from "./blur";
import type { Lang } from "./i18n";

export type Span = "full" | "half";

interface ProjectCopy {
  title: string;
  category: string;
  place?: string;
  caption: string;
}

export interface Project {
  slug: string;
  src: string;
  width: number;
  height: number;
  span: Span;
  blurDataURL?: string;
  it: ProjectCopy;
  en: ProjectCopy;
}

/**
 * Real Zarcola projects, drawn from the studio's photography.
 * Categories and material notes are legible from the images; specific
 * places are given only where they are certain (Milan locations embedded
 * in the project names). Years and exact addresses are intentionally
 * omitted rather than invented.
 */
const source: Project[] = [
  {
    slug: "alzaia",
    src: "/foto/alzaia.jpg",
    width: 2048,
    height: 1378,
    span: "full",
    it: {
      title: "Alzaia",
      category: "Recupero",
      place: "Milano",
      caption:
        "Sui Navigli, il recupero di un'abitazione: le travi antiche in legno incontrano una scala minerale di calce e marmo.",
    },
    en: {
      title: "Alzaia",
      category: "Recovery",
      place: "Milan",
      caption:
        "Along the Navigli, the recovery of a home: old timber beams meet a mineral stair of lime and marble.",
    },
  },
  {
    slug: "cellore",
    src: "/foto/cellore.jpg",
    width: 2048,
    height: 1366,
    span: "half",
    it: {
      title: "Cellore",
      category: "Recupero",
      caption:
        "Un rustico in pietra ritrova la soglia: un innesto di rosa antico entra tra i muri esistenti, misurato dai pluviali in rame.",
    },
    en: {
      title: "Cellore",
      category: "Recovery",
      caption:
        "A stone farmhouse recovers its threshold: a graft of dusty rose steps between the existing walls, measured by copper downpipes.",
    },
  },
  {
    slug: "castello",
    src: "/foto/castello.jpg",
    width: 2048,
    height: 1366,
    span: "half",
    it: {
      title: "Castello",
      category: "Recupero",
      caption:
        "Il recupero di una casa rurale: intonaco chiaro e serramenti in legno, il muro di pietra come sfondo del tempo.",
    },
    en: {
      title: "Castello",
      category: "Recovery",
      caption:
        "The recovery of a rural house: pale render and timber windows, the stone wall standing as a backdrop of time.",
    },
  },
  {
    slug: "guastalla",
    src: "/foto/guastalla.jpg",
    width: 2048,
    height: 1536,
    span: "half",
    it: {
      title: "Guastalla",
      category: "Recupero",
      place: "Milano",
      caption:
        "Un soppalco di abete e vetro, sospeso nella luce di una casa storica: una stanza leggera dentro lo spazio antico.",
    },
    en: {
      title: "Guastalla",
      category: "Recovery",
      place: "Milan",
      caption:
        "A mezzanine of spruce and glass, suspended in the light of a historic house: a weightless room within the old space.",
    },
  },
  {
    slug: "giambellino",
    src: "/foto/giambellino.jpg",
    width: 2048,
    height: 1365,
    span: "half",
    it: {
      title: "Giambellino",
      category: "Ristrutturazione",
      place: "Milano",
      caption:
        "Un appartamento si raccoglie attorno a un nucleo di intonaco pettinato: la materia diventa figura al centro della casa.",
    },
    en: {
      title: "Giambellino",
      category: "Renovation",
      place: "Milan",
      caption:
        "An apartment gathers around a core of combed plaster: matter becomes figure at the centre of the home.",
    },
  },
  {
    slug: "aldo",
    src: "/foto/aldo.jpg",
    width: 2048,
    height: 1366,
    span: "half",
    it: {
      title: "Aldo",
      category: "Ricerca",
      caption:
        "Una struttura temporanea per il gioco e l'incontro: telaio, tela e volumi in legno montati nel cortile di una scuola.",
    },
    en: {
      title: "Aldo",
      category: "Research",
      caption:
        "A temporary structure for play and encounter: frame, canvas and timber volumes assembled in a schoolyard.",
    },
  },
  {
    slug: "troppe-colonne",
    src: "/foto/troppe-colonne.jpg",
    width: 2048,
    height: 1335,
    span: "full",
    it: {
      title: "Troppe Colonne",
      category: "Ricerca",
      caption:
        "Un padiglione temporaneo in legno: una fitta foresta di montanti sotto gli alberi, illuminata nella sera.",
    },
    en: {
      title: "Troppe Colonne",
      category: "Research",
      caption:
        "A temporary timber pavilion: a dense forest of posts beneath the trees, lit into the evening.",
    },
  },
  {
    slug: "troppo-tondo",
    src: "/foto/troppo-tondo.jpg",
    width: 2048,
    height: 1366,
    span: "half",
    it: {
      title: "Troppo Tondo",
      category: "Ricerca",
      caption:
        "Un padiglione circolare in legno e tela, acceso nel parco: una radura costruita, aperta all'incontro.",
    },
    en: {
      title: "Troppo Tondo",
      category: "Research",
      caption:
        "A circular pavilion of timber and canvas, glowing in the park: a built clearing, open to gathering.",
    },
  },
];

export const projects: Project[] = source.map((p) => ({
  ...p,
  blurDataURL: blurFor(p.src),
}));

export const heroImage = {
  src: "/foto/hero-legno.jpg",
  width: 2048,
  height: 1365,
  blurDataURL: blurFor("/foto/hero-legno.jpg"),
};

export function projectCopy(project: Project, lang: Lang): ProjectCopy {
  return project[lang];
}
