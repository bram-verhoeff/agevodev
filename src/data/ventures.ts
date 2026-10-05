import { Venture } from "@/types";

export const ventures: Venture[] = [
  {
    id: "studyelite",
    name: "StudyElite",
    tagline: "AI-gedreven studieplanner & educatieve SaaS tool",
    description:
      "Het innovatieve studieplatform dat studenten en professionals ondersteunt met geautomatiseerde, dynamische studieroosters, actieve herhalingsmethodes en realtime AI-studiebegeleiding.",
    longDescription:
      "StudyElite is ontstaan vanuit de visie dat studeren slimmer, overzichtelijker en stressvrijer kan. Door geavanceerde AI-algoritmen te combineren met beproefde leermethodologieën (zoals spaced repetition en actieve recall), helpt StudyElite studenten om hun tentamens met vertrouwen te halen. Als vlaggenschip venture bewijst StudyElite mijn kracht in productontwikkeling, schaalbare cloud architectuur en conversiegerichte UX.",
    status: "Live Product",
    url: "https://studyelite.nl",
    externalUrl: "https://studyelite.nl",
    featured: true,
    category: "EdTech / AI SaaS",
    techStack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI & Claude AI",
      "PostgreSQL",
      "Vercel Edge",
    ],
    metrics: [
      { label: "Status", value: "Live in Productie" },
      { label: "Platform", value: "SaaS Web & Mobile" },
      { label: "Engine", value: "Custom AI Scheduling" },
    ],
    features: [
      {
        title: "AI Dynamic Schedule Generator",
        description:
          "Zet studiestof en deadlines automatisch om in een haalbaar dag-tot-dag studieschema dat zich dynamisch aanpast wanneer je planning wijzigt.",
      },
      {
        title: "Slimme Samenvattingen & Flashcards",
        description:
          "Genereer binnen seconden kernbegrippen, oefenvragen en actieve herhalingskaarten direct vanuit studie-PDF's en colleges.",
      },
      {
        title: "Voortgangsmeting & ECTS Tracking",
        description:
          "Realtime visuele inzichten in behaalde studie-uren, beheersingsgraad per vak en voorspelling van slagingskansen.",
      },
    ],
    badgeColor: "emerald",
  },
  {
    id: "agevo-labs",
    name: "Agevo Labs",
    tagline: "R&D en incubatie van experimentele micro-SaaS producten",
    description:
      "Mijn interne broedplaats waar ik voortdurend nieuwe technologieën, AI-agents en micro-SaaS concepten prototype en valideer.",
    longDescription:
      "Innovatie stopt nooit. Binnen Agevo Labs onderzoek ik de grenzen van moderne AI, autonome backend workflows en niche developer tools. De beste prototypes groeien uit tot zelfstandige software.",
    status: "In Development",
    url: "#contact",
    featured: false,
    category: "Venture Incubation",
    techStack: ["Next.js", "Python / FastAPI", "LangChain", "Vector DBs", "Docker"],
    metrics: [
      { label: "Pijplijn", value: "2 Nieuwe Concepten" },
      { label: "Focus", value: "AI Automation & DevTools" },
      { label: "Fase", value: "Pre-alpha / Testing" },
    ],
    features: [
      {
        title: "Autonome Data Connectors",
        description: "Zelflerende API synchronisatie en data transformatie tools.",
      },
      {
        title: "Micro-SaaS Incubator",
        description: "Snelle marktvalidatie van schaalbare nicheoplossingen binnen 4 weken.",
      },
    ],
    badgeColor: "indigo",
  },
  {
    id: "bramverhoeff",
    name: "Bram Verhoeff Portfolio",
    tagline: "Live voorbeeld van mijn Portfolio Website (€30,-)",
    description:
      "Een strakke, moderne en razendsnelle portfolio website om projecten, vaardigheden en werkervaring professioneel te presenteren. Live te bekijken op bramverhoeff.nl.",
    longDescription:
      "Het levende bewijs van mijn Portfolio Website van €30,-. Minimalistisch, vlijmscherp op mobiel en ontworpen om direct indruk te maken op potentiële klanten of werkgevers.",
    status: "Live Voorbeeld",
    url: "https://bramverhoeff.nl",
    externalUrl: "https://bramverhoeff.nl",
    featured: true,
    category: "Portfolio Website (€30,-)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel Edge",
    ],
    metrics: [
      { label: "Vaste Prijs", value: "Slechts €30,-" },
      { label: "Doorlooptijd", value: "24-48 Uur" },
      { label: "Live website", value: "bramverhoeff.nl" },
    ],
    features: [
      {
        title: "Projecten & Ervaring Showcase",
        description: "Al jouw gerealiseerde werk, opleidingen en vaardigheden overzichtelijk gerangschikt.",
      },
      {
        title: "Directe Contactknoppen",
        description: "Snelle links naar LinkedIn, e-mail en WhatsApp zodat men direct met je in contact komt.",
      },
      {
        title: "100% Mobielvriendelijk & Razendsnel",
        description: "Opent binnen een oogwenk op elk scherm en straalt direct betrouwbaarheid uit.",
      },
    ],
    badgeColor: "indigo",
  },
];
