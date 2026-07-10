export type Lang = "it" | "en";

export const LANGS: Lang[] = ["it", "en"];

export interface Dict {
  nav: {
    projects: string;
    studio: string;
    contact: string;
    menu: string;
    close: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    lineOne: string;
    lineTwoPre: string;
    accent: string;
    lineTwoPost: string;
    descriptor: string;
    ctaProjects: string;
    ctaContact: string;
    credit: string;
    scroll: string;
  };
  manifesto: {
    eyebrow: string;
    body: string[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    all: string;
  };
  studio: {
    eyebrow: string;
    heading: string;
    body: string[];
    infoTitle: string;
    info: { label: string; value: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    emailLabel: string;
    instagramLabel: string;
    instagramHandle: string;
    addressLabel: string;
    address: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      success: string;
      successHint: string;
      errorName: string;
      errorEmail: string;
      errorMessage: string;
    };
  };
  footer: {
    tagline: string;
    contactTitle: string;
    navTitle: string;
    rights: string;
    credit: string;
    colophon: string;
    backToTop: string;
  };
}

export const EMAIL = "studio@zarcola.com";
export const INSTAGRAM_URL = "https://www.instagram.com/zarcola";

export const dictionaries: Record<Lang, Dict> = {
  it: {
    nav: {
      projects: "Progetti",
      studio: "Studio",
      contact: "Contatti",
      menu: "Menu",
      close: "Chiudi",
      langLabel: "Lingua",
    },
    hero: {
      eyebrow: "Studio di architettura — Milano",
      lineOne: "Tra la pietra",
      lineTwoPre: "e il ",
      accent: "segno",
      lineTwoPost: ".",
      descriptor:
        "Restauro e recupero di case storiche e cascine. Il progetto come dialogo paziente con la preesistenza.",
      ctaProjects: "Progetti",
      ctaContact: "Contatti",
      credit: "Foto: Alessandro Saletta / DSL Studio",
      scroll: "Scorri",
    },
    manifesto: {
      eyebrow: "Il nostro lavoro",
      body: [
        "Zarcola lavora sul rapporto tra il disegno e le preesistenze storiche.",
        "Restauro e recupero di case, cascine e luoghi che portano il tempo nella loro materia — cercando ogni volta una misura sobria, un dialogo fra ciò che resta e ciò che si aggiunge.",
      ],
    },
    projects: {
      eyebrow: "Progetti selezionati",
      heading: "Opere",
      intro:
        "Restauro, recupero e ricerca. Una selezione di interventi su edifici e luoghi che chiedono ascolto prima del disegno.",
      all: "Ogni progetto nasce dallo stesso gesto: leggere la materia esistente, poi intervenire con misura.",
    },
    studio: {
      eyebrow: "Lo studio",
      heading: "Un lavoro paziente sulla materia e sul tempo.",
      body: [
        "Zarcola nasce a Milano dall'incontro tra Edoardo Giancola e Federico Zarattini. Lo studio indaga il rapporto tra il disegno e le preesistenze storiche: il restauro e il recupero di case e cascine, accanto alla ricerca e alle installazioni temporanee.",
        "Ci interessa il punto in cui la materia antica e il gesto nuovo si incontrano: la soglia fra la pietra e l'innesto, fra il muro esistente e la luce che lo riabita. Ogni progetto è una lettura prima che una forma — un modo di far durare i luoghi.",
      ],
      infoTitle: "In breve",
      info: [
        { label: "Fondatori", value: "Edoardo Giancola, Federico Zarattini" },
        { label: "Sede", value: "Milano, 20136" },
        { label: "Ambiti", value: "Restauro · Recupero · Ricerca" },
        { label: "Approccio", value: "Il disegno in dialogo con la preesistenza" },
      ],
    },
    contact: {
      eyebrow: "Contatti",
      heading: "Parliamo del progetto.",
      lead: "Per un restauro, un recupero o una ricerca: scriveteci due righe sul luogo e sull'idea. Rispondiamo con cura.",
      emailLabel: "Scrivi allo studio",
      instagramLabel: "Instagram",
      instagramHandle: "@zarcola",
      addressLabel: "Dove siamo",
      address: "Milano, 20136 — Italia",
      form: {
        title: "Oppure lasciate un messaggio",
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        namePlaceholder: "Nome e cognome",
        emailPlaceholder: "nome@esempio.com",
        messagePlaceholder: "Raccontateci del luogo e dell'intervento…",
        submit: "Invia messaggio",
        success: "Grazie. Apriamo la vostra email per inviare il messaggio.",
        successHint:
          "Se non si apre nulla, scrivete direttamente a studio@zarcola.com.",
        errorName: "Inserite il vostro nome.",
        errorEmail: "Inserite un'email valida.",
        errorMessage: "Scrivete un breve messaggio.",
      },
    },
    footer: {
      tagline: "Restauro e recupero di case storiche e cascine, tra Milano e il paesaggio.",
      contactTitle: "Contatti",
      navTitle: "Naviga",
      rights: "Studio di architettura, Milano",
      credit: "Fotografie dei rispettivi autori.",
      colophon: "Sito disegnato con misura.",
      backToTop: "Torna su",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      studio: "Studio",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      langLabel: "Language",
    },
    hero: {
      eyebrow: "Architecture studio — Milan",
      lineOne: "Between the stone",
      lineTwoPre: "and the drawn ",
      accent: "line",
      lineTwoPost: ".",
      descriptor:
        "Restoration and recovery of historic houses and farmsteads. Design as a patient dialogue with what already stands.",
      ctaProjects: "Projects",
      ctaContact: "Contact",
      credit: "Photo: Alessandro Saletta / DSL Studio",
      scroll: "Scroll",
    },
    manifesto: {
      eyebrow: "Our practice",
      body: [
        "Zarcola works on the relationship between drawing and historical pre-existences.",
        "Restoration and recovery of houses, farmsteads and places that carry time within their material — each time seeking a quiet measure, a dialogue between what remains and what is added.",
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      heading: "Work",
      intro:
        "Restoration, recovery and research. A selection of interventions on buildings and places that ask to be listened to before they are drawn.",
      all: "Every project begins with the same gesture: reading the existing material, then intervening with measure.",
    },
    studio: {
      eyebrow: "The studio",
      heading: "Patient work on material and on time.",
      body: [
        "Zarcola was founded in Milan by Edoardo Giancola and Federico Zarattini. The studio explores the relationship between drawing and historical pre-existences: the restoration and recovery of houses and farmsteads, alongside research and temporary installations.",
        "We are drawn to the point where old material and a new gesture meet: the threshold between the stone and the graft, between the existing wall and the light that reinhabits it. Every project is a reading before it is a form — a way of letting places last.",
      ],
      infoTitle: "In brief",
      info: [
        { label: "Founders", value: "Edoardo Giancola, Federico Zarattini" },
        { label: "Based in", value: "Milan, 20136" },
        { label: "Fields", value: "Restoration · Recovery · Research" },
        { label: "Approach", value: "Drawing in dialogue with the pre-existence" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about the project.",
      lead: "For a restoration, a recovery or a piece of research: write us a few lines about the place and the idea. We reply with care.",
      emailLabel: "Write to the studio",
      instagramLabel: "Instagram",
      instagramHandle: "@zarcola",
      addressLabel: "Where we are",
      address: "Milan, 20136 — Italy",
      form: {
        title: "Or leave a message",
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Full name",
        emailPlaceholder: "name@example.com",
        messagePlaceholder: "Tell us about the place and the intervention…",
        submit: "Send message",
        success: "Thank you. We're opening your email to send the message.",
        successHint: "If nothing opens, write directly to studio@zarcola.com.",
        errorName: "Please enter your name.",
        errorEmail: "Please enter a valid email.",
        errorMessage: "Please write a short message.",
      },
    },
    footer: {
      tagline: "Restoration and recovery of historic houses and farmsteads, between Milan and the landscape.",
      contactTitle: "Contact",
      navTitle: "Navigate",
      rights: "Architecture studio, Milan",
      credit: "Photographs by their respective authors.",
      colophon: "A site drawn with measure.",
      backToTop: "Back to top",
    },
  },
};
