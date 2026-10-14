import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "AgevoDev",
        legalName: "Agevo",
        identifier: "42160840",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/logo.png`,
        email: siteConfig.email,
        telephone: "+31687082516",
        description: siteConfig.description,
        founder: {
          "@type": "Person",
          name: "Bram Verhoeff",
          url: "https://bramverhoeff.nl",
        },
        sameAs: [
          siteConfig.socials.instagram,
          siteConfig.socials.linkedinCompany,
          siteConfig.socials.linkedinPersonal,
          "https://github.com/bram-verhoeff",
          "https://bramverhoeff.nl",
          "https://studyelite.nl",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          telephone: "+31687082516",
          contactType: "customer service",
          areaServed: "NL",
          availableLanguage: ["Dutch", "English"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Den Haag",
          addressRegion: "Zuid-Holland",
          addressCountry: "NL",
        },
        owns: [
          {
            "@type": "SoftwareApplication",
            name: "StudyElite",
            url: "https://studyelite.nl",
            applicationCategory: "EducationalApplication",
            description:
              "AI-gedreven studieplanner & educatieve SaaS tool voor scholieren en studenten.",
          },
          {
            "@type": "WebSite",
            name: "Prime Resell",
            url: "https://primeresell.nl",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "AgevoDev",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "nl-NL",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: "Agevo | Websites, SaaS & AI Automatisering",
        url: siteConfig.url,
        parentOrganization: {
          "@id": `${siteConfig.url}/#organization`,
        },
        priceRange: "€€",
        areaServed: {
          "@type": "Country",
          name: "Netherlands",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}