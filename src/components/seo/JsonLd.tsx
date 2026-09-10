import { siteConfig } from "@/data/siteConfig";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        sameAs: [
          siteConfig.socials.instagram,
          siteConfig.socials.github,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "customer service",
          areaServed: "NL",
          availableLanguage: ["Dutch", "English"],
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "NL",
        },
        subOrganization: {
          "@type": "Product",
          name: "StudyElite",
          url: "https://studyelite.nl",
          description:
            "AI-gedreven studieplanner & educatieve SaaS tool voor studenten en professionals.",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Agevo",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "nl-NL",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: "Agevo | Tech Studio & Software Development",
        url: siteConfig.url,
        parentOrganization: {
          "@id": `${siteConfig.url}/#organization`,
        },
        priceRange: "€€€",
        areaServed: {
          "@type": "Country",
          name: "Netherlands",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Agevo Diensten",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full-Stack Web & Platform Development",
                description:
                  "Next.js App Router, React 19, TypeScript en ultra-snelle maatwerk webapplicaties.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SaaS & MVP Development",
                description:
                  "Van idee naar marktklare SaaS-applicatie met multi-tenant auth en Stripe/Mollie billing.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Automatisering & AI Integraties",
                description:
                  "Slimme AI-agents, LLM-koppelingen (OpenAI, Claude) en procesautomatiseringen.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud Architectuur & Hosting",
                description:
                  "Serverless cloud infrastructuren, veilige databases en zero-downtime CI/CD pipelines.",
              },
            },
          ],
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
