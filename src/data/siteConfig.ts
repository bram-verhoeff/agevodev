import { NavItem } from "@/types";

export const siteConfig = {
  name: "AgevoDev",
  founder: "Bram Verhoeff",
  tagline: "Websites, SaaS & AI-Automatisering die Werken voor Ondernemers",
  description:
    "Ik bouw complete bedrijfswebsites, webshops, AI-automatiseringen en schaalbare webapplicaties voor ondernemers. Zonder technisch gedoe, razendsnel geleverd en gebouwd voor conversie. Maker van o.a. StudyElite.nl.",
  url: "https://agevodev.nl",
  email: "info@agevodev.nl",
  phone: "06 87082516",
  whatsappNumber: "06 87082516",
  whatsappLink:
    "https://wa.me/31687082516?text=Hoi%20Bram%2C%20ik%20heb%20een%20vraag%20over%20een%20project%20bij%20AgevoDev",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "agevo/15min",
  kvk: "42160840",
  location: "Den Haag, Nederland",
  city: "Den Haag",
  address: "Den Haag & Heel Nederland (online & op afspraak)",
  navigation: [
    { label: "Diensten & Prijzen", href: "#diensten" },
    { label: "Eigen Ventures", href: "#portfolio" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Over Bram", href: "#over-bram" },
    { label: "Veelgestelde Vragen", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  stats: [
    { value: "100%", label: "Zonder Gedoe", detail: "Ik regel alles van A tot Z" },
    { value: "1-2 wk", label: "Snelle Oplevering", detail: "Direct klaar om klanten te trekken" },
    { value: "100%", label: "Jouw Eigendom", detail: "Geen wurgcontract of lock-in" },
    { value: "4+", label: "Eigen Platformen", detail: "Maker van o.a. StudyElite.nl" },
  ],
  socials: {
    instagram: "https://www.instagram.com/agevodev/",
    instagramHandle: "@agevodev",
    linkedin: "https://www.linkedin.com/company/146490060/",
    linkedinCompany: "https://www.linkedin.com/company/146490060/",
    linkedinPersonal: "https://www.linkedin.com/in/bram-verhoeff/",
    github: "https://github.com/bram-verhoeff",
    twitter: "https://x.com",
  },
};