import { Venture } from "@/types";

export const ventures: Venture[] = [
  {
    id: "studyelite",
    name: "StudyElite",
    tagline: "AI-gedreven studieplanner & educatieve SaaS tool",
    description:
      "Het innovatieve studieplatform dat studenten en professionals ondersteunt met geautomatiseerde, dynamische studieroosters, actieve herhalingsmethodes en realtime AI-studiebegeleiding.",
    longDescription:
      "StudyElite is ontstaan vanuit de visie dat studeren slimmer, overzichtelijker en stressvrijer kan. Door geavanceerde AI-algoritmen te combineren met beproefde leermethodologieën (zoals spaced repetition en actieve recall), helpt StudyElite studenten om hun tentamens met vertrouwen te halen. Als vlaggenschip venture onder Agevo bewijst StudyElite onze kracht in productontwikkeling, schaalbare cloud architectuur en conversiegerichte UX.",
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
      "Onze interne broedplaats waar we voortdurend nieuwe technologieën, AI-agents en micro-SaaS concepten prototypen en valideren.",
    longDescription:
      "Bij Agevo stopt innovatie nooit. Binnen Agevo Labs onderzoeken we de grenzen van LLM-agent architecturen, autonome backend workflows en niche developer tools. De beste prototypes groeien uit tot zelfstandige ventures.",
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
];
