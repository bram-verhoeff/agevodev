import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Layout } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.62-1.63-1.62Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070c] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group transition-transform hover:opacity-95">
              <Image
                src="/logo.png"
                alt="AgevoDev"
                width={220}
                height={66}
                className="h-13 sm:h-15 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Ik bouw, lanceer en onderhoud complete websites, webshops en online applicaties voor ondernemers. Zonder technisch gedoe en met een prachtig resultaat.
            </p>

            {/* Status & Social badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open voor nieuwe projecten</span>
              </div>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-pink-500/20 text-xs text-pink-300 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/20 transition-all duration-200 group"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>{siteConfig.socials.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.socials.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-200 group"
                title="AgevoDev LinkedIn Bedrijfspagina"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.socials.linkedinPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 hover:text-white hover:border-white/30 transition-all duration-200 group"
                title="Bram Verhoeff persoonlijk profiel"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-slate-400 group-hover:scale-110 transition-transform" />
                <span>Bram Verhoeff</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigatie
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#diensten" className="hover:text-white transition-colors">
                  Wat Ik Doe
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Bewezen Resultaat &amp; Werk
                </a>
              </li>
              <li>
                <a href="#werkwijze" className="hover:text-white transition-colors">
                  Mijn Werkwijze
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Aanvraag
                </a>
              </li>
              <li>
                <a href="#agenda" className="hover:text-indigo-300 text-indigo-400/90 transition-colors flex items-center gap-1.5">
                  <span>Kennismaking Inplannen</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    15 min
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Eigen Producten */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Eigen Succesverhalen
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://studyelite.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between hover:text-emerald-300 transition-colors text-slate-300 font-medium"
                >
                  <span className="flex items-center gap-1.5">
                    StudyElite.nl
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-mono">
                      Live
                    </span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Mijn eigen succesvolle studieplatform voor studenten
                </p>
              </li>
              <li>
                <a
                  href="https://bramverhoeff.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between hover:text-indigo-300 transition-colors text-slate-300 font-medium"
                >
                  <span className="flex items-center gap-1.5">
                    bramverhoeff.nl
                    <span className="px-1.5 py-0.2 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono">
                      €30,-
                    </span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Live voorbeeld van mijn €30,- Portfolio Website
                </p>
              </li>
            </ul>
          </div>

          {/* Contact & Bedrijfsinfo */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Contactgegevens
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <strong className="text-slate-300">E-mail:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <strong className="text-slate-300">Telefoon / WhatsApp:</strong>{" "}
                <a href="tel:+31687082516" className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <strong className="text-slate-300">Locatie:</strong> {siteConfig.location}
              </p>
              <p>
                <strong className="text-slate-300">KvK:</strong> {siteConfig.kvk}
              </p>
              <p>
                <strong className="text-slate-300">Instagram:</strong>{" "}
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>{siteConfig.socials.instagramHandle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p>
                <strong className="text-slate-300">LinkedIn:</strong>{" "}
                <a
                  href={siteConfig.socials.linkedinCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>AgevoDev</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} AgevoDev. Alle rechten voorbehouden.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="hover:text-slate-300 transition-colors">
              Algemene Voorwaarden
            </Link>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Direct Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
