export interface SiteStyleConfig {
  id: "zakelijk" | "warm" | "fris" | "stoer" | "luxe";
  name: string;
  label: string;
  tagline: string;
  layoutDescription: string;
  bgMode: "light" | "warm" | "nature" | "dark" | "luxury";
  bgPage: string;
  bgCard: string;
  borderCard: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentText: string;
  buttonBg: string;
  buttonText: string;
  navBg: string;
  navBorder: string;
  headerFont: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

export const SITE_STYLES: SiteStyleConfig[] = [
  {
    id: "zakelijk",
    name: "Zakelijk & Helder",
    label: "Zakelijk & Helder",
    tagline: "Licht, overzichtelijk en betrouwbaar",
    layoutDescription: "Split-screen hero, tarieven-calculator, pakketten-vergelijkingstabel & keurmerken",
    bgMode: "light",
    bgPage: "#F8FAFC",
    bgCard: "#FFFFFF",
    borderCard: "#E2E8F0",
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    accent: "#2563EB",
    accentText: "#1D4ED8",
    buttonBg: "#2563EB",
    buttonText: "#FFFFFF",
    navBg: "#FFFFFF",
    navBorder: "#E2E8F0",
    headerFont: "font-sans font-bold tracking-tight",
    badgeBg: "#EFF6FF",
    badgeBorder: "#BFDBFE",
    badgeText: "#1D4ED8",
  },
  {
    id: "warm",
    name: "Warm & Ambachtelijk",
    label: "Warm & Ambachtelijk",
    tagline: "Crème & zandtinten, gastvrij en lokaal",
    layoutDescription: "Menukaart met tabs & prijzen, bakkersverhaal, afhaalkalender & openingstijden per dag",
    bgMode: "warm",
    bgPage: "#FAF7F2",
    bgCard: "#FFFFFF",
    borderCard: "#E7E0D8",
    textPrimary: "#292524",
    textSecondary: "#57534E",
    accent: "#C2410C",
    accentText: "#9A3412",
    buttonBg: "#C2410C",
    buttonText: "#FFFFFF",
    navBg: "#FAF7F2",
    navBorder: "#E7E0D8",
    headerFont: "font-sans font-bold tracking-normal",
    badgeBg: "#FFF7ED",
    badgeBorder: "#FED7AA",
    badgeText: "#9A3412",
  },
  {
    id: "fris",
    name: "Fris & Natuurlijk",
    label: "Fris & Natuurlijk",
    tagline: "Helder wit met groen, fris en eerlijk",
    layoutDescription: "Projecten showcase (voor/na), 3-stappen tijdlijn, seizoenswijzer & gratis inspectie-aanvraag",
    bgMode: "nature",
    bgPage: "#F7FAF8",
    bgCard: "#FFFFFF",
    borderCard: "#E0EBE2",
    textPrimary: "#14532D",
    textSecondary: "#3F6212",
    accent: "#16A34A",
    accentText: "#15803D",
    buttonBg: "#16A34A",
    buttonText: "#FFFFFF",
    navBg: "#FFFFFF",
    navBorder: "#E0EBE2",
    headerFont: "font-sans font-bold tracking-tight",
    badgeBg: "#F0FDF4",
    badgeBorder: "#BBF7D0",
    badgeText: "#15803D",
  },
  {
    id: "stoer",
    name: "Stoer & Donker",
    label: "Stoer & Donker",
    tagline: "Antraciet, hoog contrast en krachtig",
    layoutDescription: "Impact cijfers, lidmaatschap kaarten met bestseller highlight, weekrooster & WhatsApp knop",
    bgMode: "dark",
    bgPage: "#0F172A",
    bgCard: "#1E293B",
    borderCard: "#334155",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    accent: "#F97316",
    accentText: "#FB923C",
    buttonBg: "#F97316",
    buttonText: "#FFFFFF",
    navBg: "#0F172A",
    navBorder: "#1E293B",
    headerFont: "font-sans font-black tracking-tight",
    badgeBg: "#1E293B",
    badgeBorder: "#475569",
    badgeText: "#FB923C",
  },
  {
    id: "luxe",
    name: "Luxe & Rustig",
    label: "Luxe & Rustig",
    tagline: "Donker leisteen met subtiel goud, tijdloos",
    layoutDescription: "Exclusieve couture showcase, meesteratelier verhaal, privé viewing & discrete afspraak",
    bgMode: "luxury",
    bgPage: "#121824",
    bgCard: "#1A2234",
    borderCard: "#2E3A52",
    textPrimary: "#FAF8F5",
    textSecondary: "#A8B2C3",
    accent: "#D97706",
    accentText: "#FBBF24",
    buttonBg: "#D97706",
    buttonText: "#FFFFFF",
    navBg: "#121824",
    navBorder: "#2E3A52",
    headerFont: "font-serif font-bold tracking-wide",
    badgeBg: "#1E1A11",
    badgeBorder: "#78350F",
    badgeText: "#FBBF24",
  },
];

export interface ActiveBlocksConfig {
  calculator: boolean;
  packages: boolean;
  menu: boolean;
  portfolio: boolean;
  steps: boolean;
  schedule: boolean;
  metrics: boolean;
  certifications: boolean;
  reviews: boolean;
  story: boolean;
}

export interface GeneratedSite {
  id: string;
  userPrompt: string;
  businessName: string;
  tagline: string;
  category: string;
  detectedCity: string;
  detectedNicheId: string;
  detectedKeywords: string[];
  activeBlocks: ActiveBlocksConfig;
  style: SiteStyleConfig;
  announcement: string;
  heroHeading: string;
  heroSubheading: string;
  heroBullets: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  trustStats: { value: string; label: string }[];
  aboutText: string;
  testimonials: {
    name: string;
    role: string;
    comment: string;
  }[];
  contactInfo: {
    phone: string;
    email: string;
    city: string;
    openingHours: string;
  };
  
  // Interactive / Rich blocks
  pricingPackages: {
    name: string;
    price: string;
    period: string;
    description: string;
    isPopular?: boolean;
    features: string[];
  }[];
  calculatorOptions: {
    title: string;
    priceAdd: number;
    defaultChecked?: boolean;
  }[];
  corporateCertifications: {
    title: string;
    description: string;
  }[];

  menuCategories: {
    category: string;
    items: {
      name: string;
      desc: string;
      price: string;
      isSpecial?: boolean;
    }[];
  }[];
  weeklySchedule: {
    day: string;
    hours: string;
    note?: string;
  }[];
  artisanStory: {
    heading: string;
    paragraph: string;
    quote: string;
  };

  portfolioProjects: {
    title: string;
    category: string;
    specs: string;
    description: string;
  }[];
  projectSteps: {
    step: number;
    title: string;
    duration: string;
    description: string;
  }[];
  seasonAdvice: {
    season: string;
    highlight: string;
    tip: string;
  }[];

  metricsGrid: {
    bigNumber: string;
    label: string;
    subtext: string;
  }[];
  membershipCards: {
    title: string;
    price: string;
    badge?: string;
    description: string;
    perks: string[];
  }[];
  weeklySlots: {
    day: string;
    slots: string;
    availability: "Beschikbaar" | "Laatste plekken" | "Vol" | "Op afspraak";
  }[];

  luxuryCollection: {
    name: string;
    subtitle: string;
    material: string;
    price: string;
    edition: string;
  }[];
  atelierStory: {
    title: string;
    subtitle: string;
    text: string;
    heritage: string;
  };
}

export const SAMPLE_PROMPTS = [
  {
    label: "Schildersbedrijf & Onderhoud",
    prompt: "Schildersbedrijf Van Leeuwen in Breda voor binnen- en buitenschilderwerk, met offertecalculator en recente projecten.",
    styleId: "zakelijk" as const,
  },
  {
    label: "Ambachtelijke Bakkerij & Brood",
    prompt: "Ambachtelijke bakkerij De Branding in Utrecht met vers desembrood, specialty koffie, menukaart en openingstijden.",
    styleId: "warm" as const,
  },
  {
    label: "Hoveniersbedrijf & Tuinarchitectuur",
    prompt: "Hoveniersbedrijf Groen & Stijl in Amersfoort voor complete tuinaanleg, bestrating, voor/na portfolio en seizoensadvies.",
    styleId: "fris" as const,
  },
  {
    label: "Personal Trainer Privéstudio",
    prompt: "PeakFit Studio in Rotterdam met 1-op-1 personal training, voedingsschema's, impact cijfers en gratis intake.",
    styleId: "stoer" as const,
  },
  {
    label: "Hondenuitlaatservice & Roedel",
    prompt: "Hondenuitlaatservice Kwispel & Co in Utrecht met groepswandelingen, rittenkaarten, haalservice en tarieven.",
    styleId: "warm" as const,
  },
  {
    label: "Kapsalon & Haarbehandelingen",
    prompt: "Kapsalon Studio Beau in Den Haag met knippen, balayage kleuringen, prijslijst en online afspraak planner.",
    styleId: "luxe" as const,
  },
  {
    label: "Boekhouder & Fiscaal voor MKB",
    prompt: "Helder Cijfers administratiekantoor in Amsterdam voor zzp en mkb met vaste all-in maandprijzen en btw-aangifte.",
    styleId: "zakelijk" as const,
  },
  {
    label: "Bouwbedrijf & Verbouwingen",
    prompt: "Aannemersbedrijf Van Dijk voor aanbouw, renovaties, dakkapellen en badkamers met vaste prijsgarantie.",
    styleId: "stoer" as const,
  },
];

// Helper: detect city from prompt
function extractCity(prompt: string): string {
  const dutchCities = [
    "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen", "Tilburg", "Almere",
    "Breda", "Nijmegen", "Apeldoorn", "Haarlem", "Arnhem", "Enschede", "Amersfoort", "Zaanstad",
    "Den Bosch", "'s-Hertogenbosch", "Zwolle", "Leeuwarden", "Maastricht", "Leiden", "Dordrecht",
    "Alkmaar", "Delft", "Venlo", "Deventer", "Hilversum", "Gouda", "Helmond", "Assen"
  ];
  for (const city of dutchCities) {
    const reg = new RegExp(`\\b(in|regio|omgeving|nabij|rondom)?\\s*${city}\\b`, "i");
    if (reg.test(prompt)) {
      return city;
    }
  }
  return "Midden-Nederland";
}

// Helper: extract or synthesize business name
function extractBusinessName(prompt: string, customName?: string, defaultPrefix?: string): string {
  if (customName && customName.trim()) {
    return customName.trim();
  }
  // Try pattern like: genaamd X / heet X / bedrijf X / salon X
  const match = prompt.match(/(?:genaamd|heet|bedrijf|naam|merk|salon|studio|kantoor)\s+([A-Z][a-zA-Z0-9\s&'-]+?)(?:\s+(?:in|voor|met|te|en)\b|[.,]|$)/i);
  if (match && match[1]) {
    const raw = match[1].trim();
    if (raw.length > 2 && raw.length < 30) {
      return raw;
    }
  }
  // Capitalized 2-word sequence at the start or middle
  const wordsMatch = prompt.match(/\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\b/);
  if (wordsMatch && wordsMatch[1] && !["Ik", "Wij", "Een", "Mijn", "Het", "De", "Voor", "Met", "In"].includes(wordsMatch[1])) {
    return wordsMatch[1];
  }
  return defaultPrefix || "Vakwerk & Partners";
}

// Detect requested blocks from user prompt keywords
function detectRequestedBlocks(prompt: string): Partial<ActiveBlocksConfig> {
  const p = prompt.toLowerCase();
  const config: Partial<ActiveBlocksConfig> = {};

  if (p.includes("calculat") || p.includes("bereken") || p.includes("prijsindicatie") || p.includes("kosten")) {
    config.calculator = true;
  }
  if (p.includes("portfolio") || p.includes("project") || p.includes("foto") || p.includes("voor en na") || p.includes("recente") || p.includes("gerealiseerd")) {
    config.portfolio = true;
  }
  if (p.includes("menukaart") || p.includes("menu") || p.includes("gerecht") || p.includes("behandeling") || p.includes("kaart") || p.includes("assortiment")) {
    config.menu = true;
  }
  if (p.includes("pakket") || p.includes("prijs") || p.includes("tarief") || p.includes("abonnement") || p.includes("rittenkaart") || p.includes("lidmaatschap")) {
    config.packages = true;
  }
  if (p.includes("stap") || p.includes("werkwijze") || p.includes("hoe werkt") || p.includes("proces") || p.includes("plan")) {
    config.steps = true;
  }
  if (p.includes("afspraak") || p.includes("openingstijd") || p.includes("reserveer") || p.includes("reserveren") || p.includes("kalender") || p.includes("agenda") || p.includes("rooster")) {
    config.schedule = true;
  }
  if (p.includes("review") || p.includes("recensie") || p.includes("ervaring") || p.includes("beoordeling") || p.includes("klant")) {
    config.reviews = true;
  }
  if (p.includes("keurmerk") || p.includes("garantie") || p.includes("certificaat") || p.includes("vca") || p.includes("veiligheid")) {
    config.certifications = true;
  }
  if (p.includes("cijfer") || p.includes("statistiek") || p.includes("resultaat") || p.includes("kpi")) {
    config.metrics = true;
  }

  return config;
}

export function generateSiteFromPrompt(
  prompt: string,
  preferredStyleId?: string,
  customBusinessName?: string,
  customBlocksOverride?: Partial<ActiveBlocksConfig>
): GeneratedSite {
  const p = prompt.toLowerCase();
  const city = extractCity(prompt);
  const detectedKeywords: string[] = [];

  // 1. Identify Niche & generate tailored rich data
  let nicheId = "zakelijk";
  let defaultPrefix = "Vakwerk Nederland";

  if (p.includes("schilder") || p.includes("verf") || p.includes("sauswerk") || p.includes("stuc") || p.includes("behang")) {
    nicheId = "schilder";
    defaultPrefix = `Schildersbedrijf ${city}`;
  } else if (p.includes("hond") || p.includes("uitlaat") || p.includes("roedel") || p.includes("dieren") || p.includes("puppy")) {
    nicheId = "hond";
    defaultPrefix = `Hondenuitlaatservice ${city}`;
  } else if (p.includes("bakker") || p.includes("brood") || p.includes("koffie") || p.includes("croissant") || p.includes("gebak")) {
    nicheId = "bakkerij";
    defaultPrefix = `Bakkerij ${city}`;
  } else if (p.includes("tuin") || p.includes("hovenier") || p.includes("bestrating") || p.includes("gras") || p.includes("overkapping")) {
    nicheId = "hovenier";
    defaultPrefix = `Groen & Tuin ${city}`;
  } else if (p.includes("fit") || p.includes("sport") || p.includes("trainer") || p.includes("gym") || p.includes("bootcamp") || p.includes("afvallen")) {
    nicheId = "fitness";
    defaultPrefix = `PeakFit ${city}`;
  } else if (p.includes("boekhou") || p.includes("administratie") || p.includes("belasting") || p.includes("fiscaal") || p.includes("btw")) {
    nicheId = "boekhouder";
    defaultPrefix = `Helder Cijfers ${city}`;
  } else if (p.includes("kapper") || p.includes("barbier") || p.includes("salon") || p.includes("knippen") || p.includes("balayage") || p.includes("haar")) {
    nicheId = "kapper";
    defaultPrefix = `Studio Beau ${city}`;
  } else if (p.includes("bouw") || p.includes("aannemer") || p.includes("verbouw") || p.includes("dakkapel") || p.includes("renovatie") || p.includes("timmerman")) {
    nicheId = "aannemer";
    defaultPrefix = `Bouwbedrijf ${city}`;
  } else if (p.includes("loodgieter") || p.includes("ketel") || p.includes("lekkage") || p.includes("dakdekker") || p.includes("verwarming")) {
    nicheId = "loodgieter";
    defaultPrefix = `Loodgieter Service ${city}`;
  } else if (p.includes("fysio") || p.includes("therapie") || p.includes("massage") || p.includes("chiropract") || p.includes("rugpijn")) {
    nicheId = "fysio";
    defaultPrefix = `Fysiotherapie ${city}`;
  } else if (p.includes("foto") || p.includes("video") || p.includes("bruiloft") || p.includes("shoot") || p.includes("portret")) {
    nicheId = "fotograaf";
    defaultPrefix = `Studio Beeld ${city}`;
  } else if (p.includes("rijschool") || p.includes("rijles") || p.includes("cbr") || p.includes("rijbewijs")) {
    nicheId = "rijschool";
    defaultPrefix = `Rijschool ${city}`;
  } else if (p.includes("restaurant") || p.includes("pizza") || p.includes("eten") || p.includes("diner") || p.includes("bistro") || p.includes("lunch")) {
    nicheId = "restaurant";
    defaultPrefix = `Ristorante ${city}`;
  } else if (p.includes("webshop") || p.includes("kaars") || p.includes("kleding") || p.includes("producten") || p.includes("winkel")) {
    nicheId = "webshop";
    defaultPrefix = `Atelier & Shop ${city}`;
  } else if (p.includes("schoonmaak") || p.includes("glazenwasser") || p.includes("kantoren")) {
    nicheId = "schoonmaak";
    defaultPrefix = `Schoonmaakdienst ${city}`;
  } else if (p.includes("makelaar") || p.includes("vastgoed") || p.includes("woning verkopen")) {
    nicheId = "makelaar";
    defaultPrefix = `Makelaardij ${city}`;
  } else if (p.includes("auto") || p.includes("garage") || p.includes("apk") || p.includes("banden")) {
    nicheId = "garage";
    defaultPrefix = `Autogarage ${city}`;
  } else if (p.includes("juwelier") || p.includes("goud") || p.includes("sieraden") || p.includes("diamant")) {
    nicheId = "juwelier";
    defaultPrefix = `Atelier ${city}`;
  }

  const businessName = extractBusinessName(prompt, customBusinessName, defaultPrefix);

  // 2. Determine default or preferred style
  let style = SITE_STYLES.find((s) => s.id === preferredStyleId);
  if (!style) {
    if (nicheId === "juwelier" || nicheId === "kapper") {
      style = SITE_STYLES.find((s) => s.id === "luxe")!;
    } else if (nicheId === "bakkerij" || nicheId === "restaurant" || nicheId === "hond") {
      style = SITE_STYLES.find((s) => s.id === "warm")!;
    } else if (nicheId === "hovenier" || nicheId === "fysio") {
      style = SITE_STYLES.find((s) => s.id === "fris")!;
    } else if (nicheId === "fitness" || nicheId === "aannemer" || nicheId === "loodgieter" || nicheId === "garage") {
      style = SITE_STYLES.find((s) => s.id === "stoer")!;
    } else {
      style = SITE_STYLES.find((s) => s.id === "zakelijk")!;
    }
  }

  // 3. Detect requested blocks from prompt
  const detectedBlocks = detectRequestedBlocks(prompt);

  // Build active blocks config (prompt overrides > niche defaults > custom user toggles)
  const defaultBlocksForNiche: ActiveBlocksConfig = {
    calculator: nicheId === "schilder" || nicheId === "boekhouder" || nicheId === "hovenier" || nicheId === "aannemer" || nicheId === "loodgieter" || nicheId === "rijschool",
    packages: true,
    menu: nicheId === "bakkerij" || nicheId === "restaurant" || nicheId === "kapper" || nicheId === "hond",
    portfolio: nicheId === "schilder" || nicheId === "hovenier" || nicheId === "aannemer" || nicheId === "fotograaf" || nicheId === "kapper" || nicheId === "juwelier",
    steps: true,
    schedule: nicheId === "bakkerij" || nicheId === "restaurant" || nicheId === "fitness" || nicheId === "kapper" || nicheId === "hond",
    metrics: nicheId === "fitness" || nicheId === "schilder" || nicheId === "aannemer" || nicheId === "boekhouder" || nicheId === "rijschool",
    certifications: true,
    reviews: true,
    story: true,
  };

  const activeBlocks: ActiveBlocksConfig = {
    ...defaultBlocksForNiche,
    ...detectedBlocks,
    ...(customBlocksOverride || {}),
  };

  // Add detected features list for UI
  if (activeBlocks.calculator) detectedKeywords.push("Tarieven-calculator");
  if (activeBlocks.portfolio) detectedKeywords.push("Projecten showcase");
  if (activeBlocks.menu) detectedKeywords.push("Menukaart / Dienstenlijst");
  if (activeBlocks.packages) detectedKeywords.push("Vaste pakketten & prijzen");
  if (activeBlocks.steps) detectedKeywords.push("3-stappen werkwijze");
  if (activeBlocks.schedule) detectedKeywords.push("Openingstijden & afspraken");

  // 4. Generate niche-specific content
  let category = "Vakmanschap & Diensten";
  let announcement = `Nu gratis advies & vrijblijvende intake in ${city}.`;
  let heroHeading = `Professioneel vakwerk in ${city} en omstreken.`;
  let heroSubheading = `Bij ${businessName} leveren we strak werk volgens duidelijke afspraken. Geen verborgen kosten, wel eerlijke service en bewezen kwaliteit.`;
  let heroBullets = [
    `Actief in ${city} en omliggende regio`,
    "Vaste transparante prijsopgave vooraf",
    "100% Tevredenheidsgarantie op ons werk",
  ];
  let ctaPrimary = "Vraag Vrijblijvende Offerte Aan";
  let ctaSecondary = "Direct Contact Opnemen";
  let trustStats = [
    { value: "100%", label: "Klanttevredenheid" },
    { value: "Vast", label: "Tarief vooraf" },
    { value: "< 24u", label: "Reactietijd" },
    { value: "Gecertificeerd", label: "Vakbekwaam" },
  ];
  let aboutText = `Bij ${businessName} staan heldere communicatie en hoogwaardige oplevering voorop. We denken met je mee vanaf het eerste gesprek tot de uiteindelijke oplevering in ${city}.`;

  let calculatorOptions = [
    { title: "Standaard werkzaamheden basis", priceAdd: 150, defaultChecked: true },
    { title: "Voorbereiding & materiaal inspectie", priceAdd: 85, defaultChecked: true },
    { title: "Premium afwerking & beschermlaag", priceAdd: 120, defaultChecked: true },
    { title: "Spoedlevering binnen 48 uur", priceAdd: 95, defaultChecked: false },
    { title: "Uitgebreide 5 jaar onderhoudsgarantie", priceAdd: 110, defaultChecked: false },
  ];

  let pricingPackages = [
    {
      name: "Basis",
      price: "€249",
      period: "per opdracht",
      description: "Ideaal voor een snelle, vakkundige start.",
      features: ["Vrijblijvende opname op locatie", "Deskundige uitvoering", "Kwaliteitsmaterialen inbegrepen", "Oplevering met garantie"],
    },
    {
      name: "Compleet Ontzorgd",
      price: "€495",
      period: "meest gekozen",
      isPopular: true,
      description: "Het populairste all-in pakket voor maximale gemoedsrust.",
      features: ["Alles uit Basis", "Voorbereiding & grondige inspectie", "Prioriteit in onze planning", "Nacontrole na 3 maanden", "Vaste contactpersoon"],
    },
    {
      name: "Premium Maatwerk",
      price: "€890",
      period: "turn-key",
      description: "Voor omvangrijke klussen met exclusieve afwerking.",
      features: ["Volledige turn-key oplevering", "Hoogste kwaliteit afwerkmaterialen", "Uitgebreid nazorgtraject", "10 Jaar garantiecertificaat"],
    },
  ];

  let corporateCertifications = [
    { title: "Erkend & Gecertificeerd", description: `Voldoet aan alle geldende Nederlandse kwaliteitsnormen in regio ${city}.` },
    { title: "Vast Prijsgarantie", description: "Geen onverwachte meerprijzen achteraf. Wat we afspreken is wat je betaalt." },
    { title: "WA-Verzekerd & Garantie", description: "Volledig verzekerd en inclusief schriftelijke garantie op geleverd werk." },
  ];

  let menuCategories = [
    {
      category: "Populaire Diensten",
      items: [
        { name: "Basis Behandeling / Pakket", desc: "Zorgvuldig uitgevoerd met oog voor detail", price: "€45,-", isSpecial: true },
        { name: "Uitgebreid Compleet Programma", desc: "Grondige aanpak inclusief alle toebehoren", price: "€89,-" },
        { name: "Spoed & Maatwerk Service", desc: "Binnen 24 uur op locatie ingepland", price: "€125,-" },
      ],
    },
    {
      category: "Aanvullende Opties",
      items: [
        { name: "Extra Onderhoudsbeurt", desc: "Verlengt de levensduur aanzienlijk", price: "€35,-" },
        { name: "Seizoensinspectie", desc: "Compleet verslag met aanbevelingen", price: "€50,-", isSpecial: true },
      ],
    },
  ];

  let weeklySchedule = [
    { day: "Maandag", hours: "08:00 - 17:30 uur" },
    { day: "Dinsdag", hours: "08:00 - 17:30 uur" },
    { day: "Woensdag", hours: "08:00 - 17:30 uur" },
    { day: "Donderdag", hours: "08:00 - 17:30 uur" },
    { day: "Vrijdag", hours: "08:00 - 17:00 uur", note: "Telefonisch bereikbaar" },
    { day: "Zaterdag", hours: "09:00 - 14:00 uur", note: "Op afspraak" },
    { day: "Zondag", hours: "Gesloten", note: "Spoed via WhatsApp" },
  ];

  let artisanStory = {
    heading: `Passie voor echt vakwerk in ${city}`,
    paragraph: `Bij ${businessName} geloven we dat kwaliteit schuilt in de details. We nemen de tijd om naar jouw wensen te luisteren en leveren uitsluitend werk af waar we zelf trots op zijn.`,
    quote: "Echt vakmanschap herken je niet aan mooie woorden, maar aan een strak resultaat dat jarenlang meegaat.",
  };

  let portfolioProjects = [
    {
      title: `Project ${city} Centrum`,
      category: "Volledige Renovatie",
      specs: `Opgeleverd in ${city} | 100% tevreden`,
      description: "Grondig voorbereid, strak afgewerkt en binnen de afgesproken tijd opgeleverd aan een zeer tevreden opdrachtgever.",
    },
    {
      title: `Karakteristiek Pand ${city}`,
      category: "Restauratie & Onderhoud",
      specs: "Duurzame materialen | Vaste prijs",
      description: "Authentieke details behouden en gecombineerd met moderne hoogwaardige technieken.",
    },
    {
      title: `Moderne Woning Oplevering`,
      category: "Nieuwbouw & Makeover",
      specs: "Turn-key | Inclusief 5 jaar garantie",
      description: "Van eerste schets tot schone oplevering. Alles tot in de puntjes verzorgd.",
    },
  ];

  let projectSteps = [
    { step: 1, title: `Vrijblijvende Kennismaking in ${city}`, duration: "Stap 1", description: "We bespreken jouw wensen, meten de situatie in en geven een heldere vaste prijsindicatie." },
    { step: 2, title: "Zorgvuldige Voorbereiding & Planning", duration: "Stap 2", description: "Geen verrassingen: we dekken alles netjes af, zorgen voor hoogwaardig materiaal en plannen vaste werkdagen." },
    { step: 3, title: "Vakkundige Uitvoering & Oplevering", duration: "Stap 3", description: "We voeren het werk strak uit, ruimen bezemschoon op en lopen samen de opleverpunten na." },
  ];

  let seasonAdvice = [
    { season: "Voorjaar", highlight: "Grote Inspectie & Opfrisbeurt", tip: "Het perfecte moment om achterstallig onderhoud aan te pakken voordat het hoogseizoen begint." },
    { season: "Zomer", highlight: "Onderhoud & Bescherming", tip: "Profiteer van droge en warme periodes voor een optimaal en langdurig hechtend resultaat." },
    { season: "Najaar & Winter", highlight: "Binnenwerk & Winterkorting", tip: "Ideaal voor binnenshuis: profiteer vaak van extra snelle beschikbaarheid en speciale wintertarieven." },
  ];

  let metricsGrid = [
    { bigNumber: "450+", label: "Tevreden Klanten", subtext: `In regio ${city} en omstreken` },
    { bigNumber: "100%", label: "Vaste Prijsafspraak", subtext: "Geen verborgen rekeningen achteraf" },
    { bigNumber: "4.9 ★", label: "Google Beoordeling", subtext: "Bewezen kwaliteit en betrouwbaarheid" },
    { bigNumber: "10 Jaar", label: "Ervaring in het Vak", subtext: "Deskundige gecertificeerde vakmensen" },
  ];

  let membershipCards = [
    {
      title: "Enkelvoudige Klus",
      price: "€180",
      description: "Direct geholpen voor een gerichte deelopdracht.",
      perks: ["Snel ingepland op locatie", "Inclusief voorrijkosten in regio", "Duidelijk opleverrapport", "Garantie op uitgevoerde werk"],
    },
    {
      title: "Compleet Seizoenspakket",
      price: "€395",
      badge: "MEEST POPULAIR",
      description: "Volledige ontzorging voor het hele seizoen met voorrang.",
      perks: ["Alle periodieke controles", "Inclusief preventief onderhoud", "Voorrang bij spoedaanvragen", "Gratis tussentijds advies via WhatsApp"],
    },
    {
      title: "Jaarlijks Onderhoudscontract",
      price: "€45/mnd",
      description: "Structurele zekerheid voor jouw woning of pand.",
      perks: ["Vast laag maandbedrag", "Jaarlijkse grondige inspectie", "Korting op alle vervolgklussen", "24/7 Nooddienst bereikbaar"],
    },
  ];

  let weeklySlots: {
    day: string;
    slots: string;
    availability: "Beschikbaar" | "Laatste plekken" | "Vol" | "Op afspraak";
  }[] = [
    { day: "Maandagochtend", slots: "08:00 - 12:00", availability: "Beschikbaar" },
    { day: "Dinsdagmiddag", slots: "13:00 - 17:00", availability: "Laatste plekken" },
    { day: "Woensdagochtend", slots: "08:00 - 12:00", availability: "Beschikbaar" },
    { day: "Donderdagmiddag", slots: "13:00 - 17:00", availability: "Vol" },
    { day: "Vrijdagochtend", slots: "08:00 - 13:00", availability: "Laatste plekken" },
    { day: "Zaterdagochtend", slots: "09:00 - 13:00", availability: "Op afspraak" },
  ];

  let luxuryCollection = [
    { name: `Signature Editie ${city}`, subtitle: "Maatwerk met exclusieve afwerking", material: "Duurzame premium materialen", price: "Op aanvraag", edition: "Gelimiteerd" },
    { name: "Klassiek Meesterschap", subtitle: "Tijdloos ontwerp en verfijnde details", material: "Handgemaakt in eigen atelier", price: "Vanaf €1.450,-", edition: "Uniek stuk" },
    { name: "Prive Salon Maatwerk", subtitle: "Volledig afgestemd op jouw persoonlijke wensen", material: "Gecertificeerde topkwaliteit", price: "Vanaf €2.800,-", edition: "Couture" },
  ];

  let atelierStory = {
    title: `Meesterschap & Toewijding in ${city}`,
    subtitle: "Uitmuntendheid in elk detail",
    text: `Bij ${businessName} combineren we jarenlange vakkennis met eigentijdse esthetiek. Elk detail wordt met uiterste precisie behandeld, zodat het resultaat niet alleen mooi oogt, maar ook generaties lang zijn waarde behoudt.`,
    heritage: `Vaste waarde voor kwaliteitsbewuste opdrachtgevers in regio ${city}.`,
  };

  let testimonials = [
    {
      name: "Sanne van der Meer",
      role: `Inwoner van ${city}`,
      comment: `Wat een verademing! Vanaf de eerste afspraak duidelijke afspraken, strak op tijd en een fantastisch resultaat. Ik raad ${businessName} aan iedereen aan.`,
    },
    {
      name: "Mark de Jong",
      role: `Huiseigenaar in ${city}`,
      comment: `Nette vakmensen die echt meedenken. Geen gedoe met meerwerk en alles netjes opgeruimd achtergelaten. 5 sterren dik verdiend!`,
    },
  ];

  // =========================================================================
  // SPECIALIZED NICHE OVERRIDES (ACCURATE TO THE USER'S PROMPT TOPIC)
  // =========================================================================

  if (nicheId === "schilder") {
    category = "Schildersbedrijf & Wandafwerking";
    announcement = `Nu 10% winterkorting op binnenschilderwerk & sauzen in ${city}.`;
    heroHeading = `Strak binnenschilderwerk en duurzaam buitenschilderwerk in ${city}.`;
    heroSubheading = `Geen strepen, geen rommel. ${businessName} zorgt voor strakke lijnen, hoogwaardige Sigma & Sikkens lakken en 5 jaar schriftelijke garantie.`;
    heroBullets = [
      "AF-Erkend schildersbedrijf met 5 jaar garantie",
      `Geen voorrijkosten binnen ${city} en omstreken`,
      "Vaste all-in meterprijs inclusief afplakken en schoonmaken",
    ];
    ctaPrimary = "Bereken Jouw Richtprijs";
    ctaSecondary = "Bekijk Recente Schilderklussen";
    calculatorOptions = [
      { title: "Binnenmuren & plafonds sauzen (per m²)", priceAdd: 140, defaultChecked: true },
      { title: "Houten kozijnen & binnendeuren aflakken", priceAdd: 110, defaultChecked: true },
      { title: "Buitengevel schilderen & houtwerk inspectie", priceAdd: 190, defaultChecked: false },
      { title: "Houtrot reparatie & voorstrijkwerk", priceAdd: 85, defaultChecked: false },
      { title: "Behangklaar stucwerk & renovlies", priceAdd: 130, defaultChecked: false },
    ];
    pricingPackages = [
      {
        name: "Binnenschilderwerk Basis",
        price: "€450",
        period: "per vertrek",
        description: "Wanden en plafonds strak gesaust met dekkende kwaliteitsverf.",
        features: ["Afplakken vloeren en meubels", "Kleine scheurtjes en gaatjes plamuren", "Twee dekkende lagen kwaliteitslatex", "Bezemschoon opgeleverd"],
      },
      {
        name: "Complete Woning Makeover",
        price: "€1.850",
        period: "meest gekozen",
        isPopular: true,
        description: "Volledige woning binnen: alle muren, plafonds, kozijnen en deuren.",
        features: ["Alles uit Basis", "Alle binnendeuren en kozijnen hoogglans of zijdeglans", "Kleuradvies aan huis inbegrepen", "5 Jaar schriftelijke garantie", "Kitnaden strak hersteld"],
      },
      {
        name: "Buitenschilderwerk Totaal",
        price: "€2.450",
        period: "vanaf",
        description: "Duurzame bescherming tegen weer en wind met premium buitenlak.",
        features: ["Grondige reiniging en ontvetting", "Houtrotinspectie en herstel", "Grondverf en twee dekkende laklagen", "Steigers en afdekmaterialen inclusief"],
      },
    ];
    portfolioProjects = [
      {
        title: `Herenhuis ${city} Centrum`,
        category: "Buitenschilderwerk",
        specs: "16 Kozijnen | Monumentengroen",
        description: "Complete gevel- en kozijnrenovatie met Sikkens Rubbol XD lak. Houtrot professioneel hersteld en strak afgewerkt.",
      },
      {
        title: `Nieuwbouwwoning Wanden & Plafonds`,
        category: "Airless Spuitwerk",
        specs: `185 m² | Regio ${city}`,
        description: "Strakke naadloze wanden gespoten in RAL 9010 met afwasbare reinigbare muurverf. In 3 dagen sleutelklaar.",
      },
      {
        title: `Jaren '30 Erker & Schuifdeuren`,
        category: "Binnenschilderwerk",
        specs: "Glas-in-lood behouden | Zijdeglans",
        description: "Zorgvuldig herstel van klassieke schuifdeuren en erkerkozijnen met behoud van de authentieke details.",
      },
    ];
    projectSteps = [
      { step: 1, title: `Kleuradvies & Inspectie in ${city}`, duration: "Week 1", description: "We meten alles in, controleren het houtwerk en geven eerlijk advies over kleuren en glansgraden." },
      { step: 2, title: "Grondig Schuren & Voorbereiden", duration: "Week 2", description: "Het geheim van duurzaam schilderwerk: ontvetten, schuren, afplakken en gronden voordat er ook maar 1 druppel aflak op gaat." },
      { step: 3, title: "Strak Aflakken & Oplevering", duration: "Week 3", description: "Twee dekkende lagen, strakke kitlijnen en een bezemschone woning met 5 jaar garantie." },
    ];
    metricsGrid = [
      { bigNumber: "380+", label: "Woningen Geschilderd", subtext: `In ${city} en omstreken` },
      { bigNumber: "5 Jaar", label: "Schriftelijke Garantie", subtext: "Op buitenschilderwerk en kozijnen" },
      { bigNumber: "100%", label: "Strakke Lijnen", subtext: "Geen verfspatten of rommel" },
      { bigNumber: "4.9 ★", label: "Google Score", subtext: "Uit ruim 120 reviews van huiseigenaren" },
    ];
    corporateCertifications = [
      { title: "AF-Erkend Schilder", description: "Gegarandeerde kwaliteit, heldere consumentenvoorwaarden en geschillencommissie dekking." },
      { title: "Sikkens & Sigma Kwaliteitslakken", description: "Wij bezuinigen nooit op verf. Uitsluitend professionele UV-bestendige verfsystemen." },
      { title: "Vaste All-In Offerte", description: "Geen uurtje-factuurtje verrassingen. Duidelijke meterprijzen vooraf op papier." },
    ];
  } else if (nicheId === "hond") {
    category = "Hondenuitlaatservice & Dagopvang";
    announcement = `Nog 2 plekjes vrij in onze middagroedel in ${city}!`;
    heroHeading = `Blije en ontspannen honden met professionele roedelwandelingen in ${city}.`;
    heroSubheading = `Moet je werken of ben je slecht ter been? ${businessName} haalt jouw viervoeter op in een veilige geventileerde bus voor een heerlijk avontuur in het bos.`;
    heroBullets = [
      `Haal- en brengservice aan huis in ${city}`,
      "Gediplomeerd kynologisch instructeur met EHBO voor honden",
      "Veilige bus met individuele benches en airconditioning",
    ];
    ctaPrimary = "Meld Je Hond Aan Voor Proefwandeling";
    ctaSecondary = "Bekijk Wandeltarieven & Rittenkaart";
    calculatorOptions = [
      { title: "Groepswandeling 60 minuten in het bos", priceAdd: 18, defaultChecked: true },
      { title: "Haal- en brengservice met veilige bus", priceAdd: 5, defaultChecked: true },
      { title: "Handdoekdroog & moddervrij thuisbezorgd", priceAdd: 4, defaultChecked: true },
      { title: "Foto & video update via WhatsApp na afloop", priceAdd: 3, defaultChecked: false },
      { title: "Tweede hond van hetzelfde adres (+50% korting)", priceAdd: 9, defaultChecked: false },
    ];
    pricingPackages = [
      {
        name: "Losse Wandeling",
        price: "€19,50",
        period: "per keer",
        description: "Ideaal voor flexibele dagen of incidentele opvang.",
        features: ["Minimaal 60 minuten rennen in het bos", "Veilig vervoer in gecertificeerde bus", "Schoon en handdoekdroog thuis", "Foto via WhatsApp"],
      },
      {
        name: "10-Rittenkaart Roedel",
        price: "€175",
        period: "meest gekozen",
        isPopular: true,
        description: "Bespaar €20,- en flexibel inzetbaar binnen 4 maanden.",
        features: ["Alles uit losse wandeling", "Sleutelservice aan huis inbegrepen", "Vaste plek in de roedel", "Waterbak vers bijvullen bij thuiskomst", "Geen opzegtermijn"],
      },
      {
        name: "Maandabonnement 3x per week",
        price: "€210",
        period: "per maand",
        description: "Vaste rust en structuur voor jou en je hond.",
        features: ["Vaste wandeldagen gegarandeerd", "Prioriteit bij vakantieopvang", "Gratis intake en proefwandeling", "Vaste begeleider die je hond kent"],
      },
    ];
    menuCategories = [
      {
        category: "Wandeldiensten",
        items: [
          { name: "Bos- & Heide Roedelwandeling (60 min)", desc: "Sociaal spelen en rennen in afgesloten natuurgebied", price: "€19,50", isSpecial: true },
          { name: "Individuele Wandeling (30 min)", desc: "Voor oudere honden, puppy's of herstellende viervoeters", price: "€24,00" },
          { name: "Puppy Begeleiding & Zindelijkheid", desc: "Kort uitlaten, knuffelen en eten geven tijdens werkdagen", price: "€17,00" },
        ],
      },
    ];
    portfolioProjects = [
      {
        title: `Speelweide Lage Vuursche`,
        category: "Roedelavontuur",
        specs: `Dagelijks | Max 8 honden`,
        description: "Lekker rennen, snuffelen en zwemmen onder professionele begeleiding in een veilig omheind bosgebied.",
      },
      {
        title: `Puppy Socialisatie Traject`,
        category: "Individuele Aandacht",
        specs: "Rustige opbouw | Veilig",
        description: "Jonge honden laten wennen aan de roedel zonder overprikkeling. Blije baasjes en stabiele viervoeters.",
      },
    ];
    metricsGrid = [
      { bigNumber: "1.400+", label: "Blije Wandelingen", subtext: `Gemaakt in regio ${city}` },
      { bigNumber: "100%", label: "Veilig Vervoer", subtext: "Geventileerde bus met airco en benches" },
      { bigNumber: "Max 8", label: "Honden per Roedel", subtext: "Voor maximale rust en toezicht" },
      { bigNumber: "EHBO", label: "Dieren Certificering", subtext: "Kynologisch gediplomeerd personeel" },
    ];
  } else if (nicheId === "bakkerij") {
    category = "Ambachtelijke Bakkerij & Koffiebar";
    announcement = `Iedere ochtend vers gebakken vanaf 07:30 uur in ${city}!`;
    heroHeading = `Dagelijks vers desembrood, roomboter croissants en goede koffie in ${city}.`;
    heroSubheading = `Bij ${businessName} werken we uitsluitend met biologisch meel, bronwater en een natuurlijk rijsproces van 24 uur. Geen kunstmatige gistversnellers, wél een knapperige korst en zacht kruim.`;
    heroBullets = [
      `Lokaal gebakken in het hart van ${city}`,
      "100% Natuurlijk desembrood met 24 uur rijstijd",
      "Vooraf bestellen en snel afhalen zonder wachttijd",
    ];
    ctaPrimary = "Bekijk De Menukaart & Prijzen";
    ctaSecondary = "Bestel Vooraf Voor Afhalen";
    menuCategories = [
      {
        category: "Desembrood & Baguettes",
        items: [
          { name: "Klassiek Frans Desem", desc: "Natuurlijk gerezen met krokante korst en luchtig kruim", price: "€4,50", isSpecial: true },
          { name: "Meerzaden & Walnoot", desc: "Rijkgevuld met geroosterde walnoten en zonnebloempitten", price: "€5,20" },
          { name: "Traditionele Baguette", desc: "Iedere ochtend knapperig gebakken volgens traditioneel recept", price: "€2,80" },
        ],
      },
      {
        category: "Specialty Koffie & Ontbijt",
        items: [
          { name: "Cappuccino / Flat White", desc: "Met dubbele espresso en verse weidemelk of havermelk", price: "€3,60", isSpecial: true },
          { name: "Roomboter Croissant", desc: "Luchtig gerold met pure Franse roomboter", price: "€2,40" },
          { name: "Vers Belegd Broodje", desc: "Met boerenkaas, rucola en huisgemaakte pesto", price: "€6,50" },
        ],
      },
      {
        category: "Huisgemaakt Gebak",
        items: [
          { name: "Ouderwetse Appeltaart", desc: "Rijkelijk gevuld met Elstar appels, kaneel en rozijnen", price: "€4,20" },
          { name: "Chocolade Eclair", desc: "Gevuld met banketbakkersroom en pure Belgische chocolade", price: "€3,90" },
        ],
      },
    ];
  } else if (nicheId === "hovenier") {
    category = "Hovenier & Buitenruimtes";
    announcement = `Voorjaar 2026: Plan nu je tuinontwerp in regio ${city}.`;
    heroHeading = `Jouw droomtuin vakkundig ontworpen, aangelegd en onderhouden in ${city}.`;
    heroSubheading = `Van strakke keramische bestrating en sfeervolle overkappingen tot weelderige borders en een groen gazon. ${businessName} regelt het complete buitenleven.`;
    heroBullets = [
      `Vakkundig hoveniersbedrijf in regio ${city}`,
      "Duidelijke vaste all-in offerte zonder verrassingen",
      "Garantie op beplanting, houtbouw en straatwerk",
    ];
    ctaPrimary = "Bereken Jouw Tuinkosten";
    ctaSecondary = "Bekijk Gerealiseerde Tuinen";
    calculatorOptions = [
      { title: "Keramische tuintegels leggen (incl. zandbed)", priceAdd: 450, defaultChecked: true },
      { title: "Houten schutting of vlonderterras plaatsen", priceAdd: 320, defaultChecked: true },
      { title: "Graszoden leggen & bodemverbetering", priceAdd: 180, defaultChecked: true },
      { title: "In-Lite LED grondspots & tuinverlichting", priceAdd: 220, defaultChecked: false },
      { title: "Maatwerk douglas overkapping met plat dak", priceAdd: 850, defaultChecked: false },
    ];
  } else if (nicheId === "fitness") {
    category = "Personal Training Privéstudio";
    announcement = `Nog 3 plekken beschikbaar deze maand in ${city}: start met een gratis intake!`;
    heroHeading = `Fitter, sterker en energieker met 1-op-1 personal training in ${city}.`;
    heroSubheading = `Geen overvolle sportschool of wachten op fitnessapparaten. Bij ${businessName} train je in een rustige privéstudio met een vaste coach op jouw tijden.`;
    heroBullets = [
      `Afgesloten privéstudio in ${city} (geen pottenkijkers)`,
      "Inclusief voedingsbegeleiding met normale, lekkere maaltijden",
      "Blijvend resultaat met wekelijkse voortgangsmetingen",
    ];
    ctaPrimary = "Plan Een Gratis Proefles & Intake";
    ctaSecondary = "Bekijk Lidmaatschappen & Tarieven";
    calculatorOptions = [
      { title: "1-op-1 Trainingssessie in privéstudio (60 min)", priceAdd: 65, defaultChecked: true },
      { title: "Persoonlijk voedingsplan & eetschema", priceAdd: 35, defaultChecked: true },
      { title: "Wekelijkse vetpercentage & spiermassa meting", priceAdd: 20, defaultChecked: true },
      { title: "24/7 WhatsApp hulplijn voor eettips & motivatie", priceAdd: 15, defaultChecked: false },
    ];
  } else if (nicheId === "kapper") {
    category = "Hairstyling & Schoonheidssalon";
    announcement = `Koopavond op donderdag tot 21:00 uur geopend in ${city}.`;
    heroHeading = `Stijlvolle kapsels, balayage en verzorging op maat in ${city}.`;
    heroSubheading = `Even ontspannen en genieten van pure me-time. Bij ${businessName} luisteren we naar jouw haartype en stijl voor een natuurlijke, stralende look.`;
    heroBullets = [
      `Gevestigd in het centrum van ${city}`,
      "Gespecialiseerd in balayage, highlights en blondtinten",
      "Koffie, thee en hoofdhuidmassage bij elke wasbeurt",
    ];
    ctaPrimary = "Boek Direct Jouw Afspraak";
    ctaSecondary = "Bekijk De Prijslijst";
    calculatorOptions = [
      { title: "Wassen, knippen & föhnen / stylen", priceAdd: 42, defaultChecked: true },
      { title: "Balayage of folie highlights behandeling", priceAdd: 95, defaultChecked: true },
      { title: "Olaplex herstelkuur voor beschadigd haar", priceAdd: 28, defaultChecked: true },
      { title: "Wenkbrauwen epileren & verven", priceAdd: 18, defaultChecked: false },
    ];
  } else if (nicheId === "aannemer") {
    category = "Aannemersbedrijf & Verbouwingen";
    announcement = `Vrijblijvende offerte binnen 5 werkdagen in ${city}.`;
    heroHeading = `Zorgeloos verbouwen: aanbouw, dakkapel en renovatie in ${city}.`;
    heroSubheading = `Een verbouwing is spannend genoeg. ${businessName} regelt het complete project van sloop en constructieberekening tot stucwerk en bezemschone oplevering.`;
    heroBullets = [
      `BouwGarant gecertificeerd in regio ${city}`,
      "Eén vast aanspreekpunt voor alle onderaannemers",
      "Vaste all-in aanneemsom zonder nacalculatie",
    ];
    ctaPrimary = "Bereken Jouw Verbouwkosten";
    ctaSecondary = "Vraag Vrijblijvende Offerte Aan";
    calculatorOptions = [
      { title: "Aanbouw / uitbouw woonkamer (per meter)", priceAdd: 1450, defaultChecked: true },
      { title: "Prefab dakkapel plaatsen (in 1 dag waterdicht)", priceAdd: 850, defaultChecked: true },
      { title: "Complete badkamer renovatie inclusief tegelwerk", priceAdd: 950, defaultChecked: false },
      { title: "Draagmuur verwijderen met stalen balk (bint)", priceAdd: 650, defaultChecked: false },
    ];
  } else if (nicheId === "loodgieter") {
    category = "Loodgietersbedrijf & Spoedservice";
    announcement = `24/7 Spoedservice beschikbaar in ${city}: bel direct bij lekkage!`;
    heroHeading = `Direct een betrouwbare loodgieter op de stoep in ${city}.`;
    heroSubheading = `Lekkage, verstopte afvoer of een haperende cv-ketel? ${businessName} staat binnen 45 minuten bij je voor de deur met de juiste gereedschappen en materialen.`;
    heroBullets = [
      `Binnen 45 minuten ter plaatse in ${city}`,
      "Duidelijk starttarief vooraf bekend aan de telefoon",
      "Geen hak- en breekwerk dankzij moderne lekdetectie",
    ];
    ctaPrimary = "Bel Nu Met Spoed";
    ctaSecondary = "Bereken Kosten Loodgieter";
    calculatorOptions = [
      { title: "Spoed voorrijkosten en eerste halfuur diagnose", priceAdd: 89, defaultChecked: true },
      { title: "Verstopping machinaal verhelpen (wc/afvoer)", priceAdd: 95, defaultChecked: true },
      { title: "Cv-ketel storing resetten en onderdelen inspectie", priceAdd: 110, defaultChecked: false },
      { title: "Rook- of camera inspectie leidingwerk", priceAdd: 125, defaultChecked: false },
    ];
  } else if (nicheId === "rijschool") {
    category = "Rijschool & Verkeersopleiding";
    announcement = `Nu tijdelijk: gratis proefles bij afname van een lespakket in ${city}!`;
    heroHeading = `In één keer slagen voor je autorijbewijs in ${city}.`;
    heroSubheading = `Rustige, geduldige instructeurs en een moderne lesauto. Bij ${businessName} leer je veilig en vol zelfvertrouwen rijden in je eigen tempo.`;
    heroBullets = [
      `Hoog slagingspercentage bij CBR ${city} (ruim 78%)`,
      "Vaste instructeur en vaste moderne lesauto",
      "Ophaalservice vanaf huis, school of werk",
    ];
    ctaPrimary = "Vraag Gratis Proefles Aan";
    ctaSecondary = "Bekijk Lespakketten & Tarieven";
    calculatorOptions = [
      { title: "Rijles blok 90 minuten", priceAdd: 85, defaultChecked: true },
      { title: "CBR Tussentijdse Toets (TTT)", priceAdd: 210, defaultChecked: true },
      { title: "CBR Praktijkexamen inclusief voorrijden", priceAdd: 285, defaultChecked: true },
      { title: "Online theoriecursus & examenvragen app", priceAdd: 49, defaultChecked: false },
    ];
  }

  // Base general data returned
  return {
    id: "site-" + Date.now(),
    userPrompt: prompt,
    businessName,
    tagline: heroHeading,
    category,
    detectedCity: city,
    detectedNicheId: nicheId,
    detectedKeywords,
    activeBlocks,
    style,
    announcement,
    heroHeading,
    heroSubheading,
    heroBullets,
    ctaPrimary,
    ctaSecondary,
    trustStats,
    aboutText,
    testimonials,
    contactInfo: {
      phone: "030 - 234 56 78",
      email: `contact@${businessName.toLowerCase().replace(/[^a-z0-9]/g, "")}.nl`,
      city: `${city} & omstreken`,
      openingHours: "Maandag t/m Vrijdag van 08:00 tot 17:30 uur",
    },

    pricingPackages,
    calculatorOptions,
    corporateCertifications,
    menuCategories,
    weeklySchedule,
    artisanStory,
    portfolioProjects,
    projectSteps,
    seasonAdvice,
    metricsGrid,
    membershipCards,
    weeklySlots,
    luxuryCollection,
    atelierStory,
  };
}
