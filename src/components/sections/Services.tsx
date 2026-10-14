"use client";

import {
  Globe,
  ShoppingBag,
  Layers,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  Sparkles,
  Bot,
} from "lucide-react";

export function Services() {
  const handleSelectService = (projectType: string, budget: string, message: string) => {
    window.dispatchEvent(
      new CustomEvent("prefill-contact-form", {
        detail: {
          projectType,
          budget,
          message,
        },
      })
    );
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="diensten" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#07090e]">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            Diensten &amp; Transparante Tarieven
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Alles wat jouw bedrijf nodig heeft om{" "}
            <span className="glow-indigo-text">online te groeien</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Van converterende MKB-bedrijfswebsites en webshops tot schaalbare SaaS-platformen en AI-automatisering. Heldere vaste prijzen vooraf, razendsnel opgeleverd.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CORE B2B SERVICES BENTO GRID                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Bedrijfswebsites (Span 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group border border-indigo-500/30">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Vanaf €850,- eenmalig
                  </span>
                  <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    MKB &amp; Dienstverleners
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  High-End Bedrijfswebsites &amp; Landingspagina&apos;s
                </h3>
                <p className="text-sm text-indigo-300 font-medium mt-1">
                  Een razendsnel digitaal uithangbord dat 24/7 offerte-aanvragen en klanten binnenhaalt
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Geen trage WordPress-templates waar je zelf uren aan kwijt bent. Ik ontwerp en codeer een unieke website op maat (Next.js) die jouw concurrentie visueel overtreft, direct laadt op mobiel en top scoort in Google.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Maatwerk design afgestemd op jouw merk & doelgroep",
                  "100/100 Google PageSpeed & lokale SEO-optimalisatie",
                  "Interactieve offerte-calculators & afspraakplanners",
                  "Binnen 1 tot 2 weken volledig sleutelklaar live",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ideaal voor: Ambitieuze MKB-bedrijven, vakmensen, praktijken, horeca &amp; zakelijke dienstverleners
              </span>
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    "Website Laten Maken",
                    "€850 - €1.500",
                    "Hoi Bram! Ik wil graag vrijblijvend sparren over een nieuwe professionele bedrijfswebsite."
                  )
                }
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Vraag bedrijfswebsite aan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Webshops & Bestellingen (1 col) */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  E-Commerce &amp; iDEAL
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Webshops &amp; Bestelsystemen
                </h3>
                <p className="text-xs text-emerald-300 font-medium mt-1">
                  Frictieloos verkopen via mobiel &amp; desktop
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Verkoop je fysieke producten, tickets of digitale diensten? Ik bouw razendsnelle webshops (zoals ons eigen platform <em>Prime Resell</em>) met directe iDEAL-, Apple Pay- en Bancontact-koppeling.
              </p>

              <div className="space-y-2 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Maximale Checkout Conversie</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  Geen trage laadtijden bij het afrekenen; betalingen direct op je eigen zakelijke rekening.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    "Webshop / Bestelsysteem",
                    "€1.500 - €3.000",
                    "Hoi Bram! Ik ben geïnteresseerd in het laten bouwen van een snelle webshop / bestelsysteem."
                  )
                }
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Bespreek jouw webshop</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Maatwerk Software & Portalen (1 col) */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/10">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  Custom SaaS &amp; MVP
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Maatwerk Webapps &amp; SaaS Portalen
                </h3>
                <p className="text-xs text-purple-300 font-medium mt-1">
                  Van idee naar schaalbaar softwareproduct
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Als oprichter van <strong>StudyElite.nl</strong> en <strong>StarRate</strong> bouw ik complete webapplicaties met veilige logins (Supabase), klantdashboards, AI-functies en maandelijkse abonnementsmodellen.
              </p>

              <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20 space-y-1 text-xs">
                <div className="text-purple-300 font-medium">Next.js + Supabase + AI Stack:</div>
                <div className="text-slate-400 text-[11px]">
                  Klaar om binnen weken als MVP te lanceren en door te schalen naar duizenden gebruikers.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    "Eigen Software of Portaal",
                    "€3.000+",
                    "Hoi Bram! Ik heb een idee voor een eigen webapplicatie / SaaS-portaal en wil graag sparren over de architectuur en kosten."
                  )
                }
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Deel jouw software-idee</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 4: AI, GoHighLevel & Zorgeloos Beheer (Span 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400">
                    AI Workflows &amp; Managed Hosting
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  AI-Automatisering, GoHighLevel &amp; Zorgeloos Beheer
                </h3>
                <p className="text-sm text-blue-300 font-medium mt-1">
                  Laat repetitief werk, lead-opvolging en technisch onderhoud op de automatische piloot draaien
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Met ruim 1.000+ uur praktijkervaring in <strong>GoHighLevel (GHL)</strong>, AI-callbots en slimme API-koppelingen automatiseer ik jouw klantreis van eerste aanvraag tot ingeplande afspraak. Inclusief veilige Nederlandse cloud-hosting en dagelijkse back-ups.
              </p>

              {/* Feature checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "GoHighLevel CRM-pipelines & automatische lead-opvolging",
                  "AI-chatbots, slimme e-mailflows & review-automatisering",
                  "Razendsnelle Vercel Edge hosting met 99.9% uptime",
                  "Persoonlijke WhatsApp-hulplijn voor snelle wijzigingen",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Jij focust op je klanten, ik zorg dat je techniek en automatisering geruisloos voor je werken.
              </span>
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    "Vrijblijvend Sparren",
                    "€1.500 - €3.000",
                    "Hoi Bram! Ik wil graag kijken hoe we onze processen / website slimmer kunnen automatiseren."
                  )
                }
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Plan een automatiserings-intake</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT ENTRY DEAL: STARTER / STUDENT PORTFOLIO (€30,-)                   */}
        {/* ========================================================================= */}
        <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-emerald-500/30 relative overflow-hidden bg-gradient-to-r from-emerald-950/20 via-[#0c101d] to-[#090d18]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  Instap-Deal voor Starters, Studenten &amp; ZZP
                </span>
                <span className="text-xs font-mono text-slate-400">
                  • Binnen 24-48 uur online
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Starter One-Page Portfolio Website —{" "}
                <span className="text-emerald-400">€30,- eenmalig</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zoek je geen uitgebreide MKB-bedrijfswebsite, maar gewoon een strak online CV of persoonlijk visitekaartje met je bio, projecten en contactknoppen? Dan zet ik voor een vast bedrag van €30,- een razendsnelle one-pager voor je klaar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() =>
                  handleSelectService(
                    "Portfolio Website (€30,-)",
                    "€30,- (Portfolio)",
                    "Hoi Bram! Ik wil graag gebruikmaken van de Starter One-Page Portfolio Website actie voor €30,-."
                  )
                }
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Bestel Starter Portfolio (€30,-)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://bramverhoeff.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Bekijk mijn eigen Pro-portfolio</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}