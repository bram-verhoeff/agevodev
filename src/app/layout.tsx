import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Agevo | Tech Studio & Venture Builder | Schaalbare Software & SaaS",
    template: "%s | Agevo",
  },
  description:
    "Agevo is een overkoepelend techbedrijf en development studio. Wij bouwen toonaangevende eigen SaaS-ventures (zoals StudyElite.nl) én realiseren hoogwaardige maatwerk webapplicaties en slimme software voor bedrijven.",
  keywords: [
    "Agevo",
    "Agevo Dev",
    "Tech Studio Nederland",
    "Venture Builder",
    "SaaS Development Studio",
    "StudyElite",
    "StudyElite.nl",
    "Next.js Developer Nederland",
    "Maatwerk Software Ontwikkeling",
    "Webapplicatie Laten Maken",
    "React TypeScript Specialist",
    "AI Automatisering Bedrijf",
    "Full-Stack Web Development",
    "MVP Bouwen Startup",
    "Custom Software Studio",
    "Supabase Partner",
    "Nederland Software Bureau",
  ],
  authors: [{ name: "Agevo", url: siteConfig.url }],
  creator: "Agevo",
  publisher: "Agevo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    title: "Agevo | Tech Studio & Venture Builder | Schaalbare Software & SaaS",
    description:
      "Wij bouwen schaalbare webapps, slimme software en digitale platformen. Maker van o.a. StudyElite.nl en partner in high-end maatwerk software.",
    siteName: "Agevo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agevo | Tech Studio & Venture Builder",
    description:
      "Wij bouwen schaalbare webapps, slimme software en digitale platformen. Maker van o.a. StudyElite.nl.",
    creator: "@agevodev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
