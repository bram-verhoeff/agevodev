import Link from "next/link";
import { Layers, ExternalLink, ArrowUpRight } from "lucide-react";
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
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#05070c] rounded-[11px] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-white font-sans">
                Agevo
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Overkoepelend techbedrijf en development studio. Wij lanceren toonaangevende eigen SaaS-ventures en bouwen krachtige maatwerk webplatformen.
            </p>

            {/* Status & Social badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Alle systemen operationeel</span>
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
                  Diensten (Bento Grid)
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-white transition-colors">
                  Ventures &amp; Portfolio
                </a>
              </li>
              <li>
                <a href="#over-ons" className="hover:text-white transition-colors">
                  Studio Filosofie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Aanvraag
                </a>
              </li>
            </ul>
          </div>

          {/* Eigen Ventures */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Eigen Ventures
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
                  AI-gedreven studieplanner &amp; SaaS
                </p>
              </li>
              <li className="pt-1">
                <span className="text-slate-300 text-sm font-medium flex items-center gap-1.5">
                  Agevo Labs
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-indigo-500/20 text-indigo-400 font-mono">
                    R&amp;D
                  </span>
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Micro-SaaS &amp; AI incubatie
                </p>
              </li>
            </ul>
          </div>

          {/* Contact & Bedrijfsinfo */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Bedrijfsgegevens
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <strong className="text-slate-300">E-mail:</strong>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
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
              <p className="text-xs text-slate-400 pt-1">
                Geregistreerd in het Handelsregister
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Agevo. Alle rechten voorbehouden.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/voorwaarden" className="hover:text-slate-300 transition-colors">
              Algemene Voorwaarden
            </Link>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
