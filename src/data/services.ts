import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "fullstack-web",
    title: "Full-Stack Web & Platform Development",
    subtitle: "Schaalbare, razendsnelle webapplicaties gebouwd op moderne standaarden",
    shortDescription:
      "Wij ontwerpen en ontwikkelen krachtige webplatformen met Next.js App Router, React en TypeScript. Maximale performance, ultieme beveiliging en schone, onderhoudbare code.",
    fullDescription:
      "Geen trage, logge templates of achterhaalde architecturen. Wij leveren maatwerk platformen die milliseconde-snel reageren, perfect scoren op Core Web Vitals en naadloos schalen van 10 naar 100.000+ actieve gebruikers.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST / GraphQL"],
    features: [
      "Server-Side Rendering (SSR) & Static Site Generation voor top SEO",
      "Responsieve, interactieve UI's met sublieme micro-interacties",
      "Robuuste backend API's en microservices",
      "100/100 Core Web Vitals en lighthouse optimalisatie",
    ],
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    iconName: "LayoutCode",
  },
  {
    id: "saas-mvp",
    title: "SaaS & MVP Development",
    subtitle: "Van strategisch idee tot marktklare softwareapplicatie",
    shortDescription:
      "Als venture-bouwers weten we exact wat een SaaS succesvol maakt. We bouwen complete MVP's en productie-klare SaaS-producten met multi-tenant auth, database-architectuur en betaalsystemen.",
    fullDescription:
      "Snelheid naar de markt is cruciaal. Wij helpen startups, scale-ups en gevestigde bedrijven met het vertalen van complexe bedrijfsprocessen naar intuïtieve SaaS-applicaties waar gebruikers verliefd op worden.",
    tags: ["Multi-Tenancy", "Stripe / Mollie", "Supabase", "PostgreSQL", "Auth & RBAC"],
    features: [
      "End-to-end gebruikersauthenticatie en rolgebaseerde permissies (RBAC)",
      "Geautomatiseerde abonnements- en facturatie-integraties",
      "Schaalbare relationele en vector databases",
      "Ingebouwde analytics en user onboarding funnels",
    ],
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    iconName: "Rocket",
  },
  {
    id: "automation-ai",
    title: "Automatisering & AI Integraties",
    subtitle: "Slimme AI-agents, LLM-koppelingen en geautomatiseerde workflows",
    shortDescription:
      "Verhoog de efficiëntie van je organisatie door AI slim in te zetten. Wij koppelen GPT-modellen, Claude, custom embeddings en API's aan je dagelijkse bedrijfsprocessen.",
    fullDescription:
      "AI is geen modewoord als het concreet tijd en geld bespaart. Wij bouwen intelligente AI-workflows, geautomatiseerde rapportagesystemen en custom assistenten die direct integreren met jouw database en externe software.",
    tags: ["OpenAI API", "Anthropic Claude", "Custom Agents", "Webhooks", "Vector Search"],
    features: [
      "Custom AI assistenten en chatinterfaces getraind op jouw bedrijfsdata",
      "Geautomatiseerde dataverwerking en documentextractie",
      "API-koppelingen met CRM's, ERP's en externe SaaS-tools",
      "Realtime webhook verwerking en asynchronous worker queues",
    ],
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    iconName: "Cpu",
  },
  {
    id: "cloud-devops",
    title: "Cloud Architectuur & High-Performance Hosting",
    subtitle: "Veilige, betrouwbare infrastructuur ontworpen voor maximale uptime",
    shortDescription:
      "Moderne hosting, serverless computing en CI/CD automation zodat jouw applicatie altijd online is en updates geruisloos naar productie gaan.",
    fullDescription:
      "Geen zorgen meer over servers die crashen bij piekverkeer. Wij configureren infrastructuren op Vercel, AWS, Cloudflare en Supabase met geautomatiseerde deployment pipelines, realtime monitoring en end-to-end encryptie.",
    tags: ["Cloudflare Edge", "AWS / Vercel", "Docker", "CI/CD GitHub Actions", "Monitoring"],
    features: [
      "Zero-downtime continuous deployment (CI/CD) pipelines",
      "DDoS-bescherming, SSL en geavanceerde firewall configuraties",
      "Geautomatiseerde back-up systemen en data-redundantie",
      "24/7 uptime monitoring en realtime alerting bij afwijkingen",
    ],
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    iconName: "ShieldCheck",
  },
];
