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
    default: "AgevoDev | Websites & Software Laten Maken | Zonder Technisch Gedoe",
    template: "%s | AgevoDev",
  },
  description:
    "Ik bouw complete websites, webshops en online applicaties voor ondernemers. Zonder technisch gedoe, razendsnel geleverd en klaar om klanten te trekken.",
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
  authors: [{ name: "AgevoDev", url: siteConfig.url }],
  creator: "AgevoDev",
  publisher: "AgevoDev",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    title: "AgevoDev | Websites & Software Laten Maken | Zonder Technisch Gedoe",
    description:
      "Ik bouw, lanceer en onderhoud complete websites, webshops en online platformen voor ondernemers. Maker van o.a. StudyElite.nl.",
    siteName: "AgevoDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgevoDev | Websites & Software Laten Maken",
    description:
      "Ik bouw, lanceer en onderhoud complete websites, webshops en online platformen voor ondernemers. Maker van o.a. StudyElite.nl.",
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
  verification: {
    google: "c_m0FINCca_lKCf_i7reBVdNV9rNcaHxZWzizhvuLm8",
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
