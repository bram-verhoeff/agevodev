export const siteConfig = {
  name: "AgevoDev",
  tagline: "Tech Studio & Venture Builder",
  description:
    "Agevo is een overkoepelend techbedrijf en development studio. Wij bouwen toonaangevende eigen SaaS-ventures én realiseren hoogwaardige maatwerk webapplicaties en slimme software voor bedrijven.",
  url: "https://agevodev.nl",
  email: "info@agevodev.nl",
  phone: "+31 (0)6 12 34 56 78",
  /**
   * Cal.com link of gebruikersnaam voor online kennismaking inplannen.
   * Bijv: "agevo/15min"
   * Kan ook worden overschreven via environment variable NEXT_PUBLIC_CAL_LINK
   */
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "agevo/15min",
  kvk: "42160840",
  location: "Nederland",
  city: "Nederland",
  address: "Nederland (op afspraak)",
  navigation: [
    { label: "Diensten", href: "#diensten" },
    { label: "Ventures & Portfolio", href: "#ventures", badge: "Live" },
    { label: "Werkwijze & Over Ons", href: "#over-ons" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "100%", label: "Maatwerk Codebase", detail: "Geen trage no-code templates" },
    { value: "99.9%", label: "Platform Betrouwbaarheid", detail: "High-availability cloud stack" },
    { value: "2x-3x", label: "Snellere Time-to-Market", detail: "Moderne Next.js component stack" },
    { value: "Eigen SaaS", label: "In Productie", detail: "Bewezen ervaring als founders" },
  ],
  socials: {
    instagram: "https://www.instagram.com/agevodev/",
    instagramHandle: "@agevodev",
    github: "https://github.com/bram-verhoeff",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
};
