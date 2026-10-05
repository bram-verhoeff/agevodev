"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Layers,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  User,
  Sparkles,
  Laptop,
} from "lucide-react";

export function Services() {
  const handleOrderPortfolio = () => {
    window.dispatchEvent(
      new CustomEvent("prefill-contact-form", {
        detail: {
          projectType: "Portfolio Website (€30,-)",
          message:
            "Hoi AgevoDev! Ik wil graag een Portfolio Website laten maken voor €30,-, met een vergelijkbare opzet als bramverhoeff.nl.",
          budget: "€30,-",
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
            Wat Ik Voor Jou Doe
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Alles wat jij nodig hebt om{" "}
            <span className="glow-indigo-text">online te stralen</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Van een betaalbare persoonlijke portfolio website tot complete bedrijfsplatformen en webshops. Zonder moeilijke technische praatjes, maar met een helder en snel resultaat.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED PRODUCT: PORTFOLIO WEBSITE (€30,-) MET BRAMVERHOEFF.NL VOORBEELD */}
        {/* ========================================================================= */}
        <div className="mb-10 sm:mb-12 rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-emerald-500/40 relative overflow-hidden bg-gradient-to-br from-emerald-950/25 via-[#0c101d] to-[#090d18] shadow-2xl">
          {/* Background decorative glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Product Details & Price */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Nieuw Product
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-200">
                  Vaste prijs: <strong className="text-emerald-400 font-extrabold text-sm ml-1">€30,-</strong>
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">&bull; Binnen 24-48 uur gereed</span>
              </div>

              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Portfolio Website
                  </h3>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                    €30,-{" "}
                    <span className="text-xs font-normal text-slate-400">
                      (eenmalig, vast tarief)
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-emerald-300 font-medium mt-1">
                  Jouw eigen strakke online visitekaartje en cv binnen no-time live
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Wil je jezelf, je projecten, vaardigheden of werkervaring professioneel presenteren aan potentiële klanten, werkgevers of opdrachtgevers? Voor slechts €30,- bouw ik een complete, snelle en mobielvriendelijke portfolio website.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "Al jouw projecten & vaardigheden overzichtelijk",
                  "Directe links naar LinkedIn, e-mail & WhatsApp",
                  "100% Mobielvriendelijk (opent razendsnel op telefoon)",
                  "Vaste lage prijs van €30,- zonder abonnement",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleOrderPortfolio}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Bestel Portfolio Website (€30,-)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://bramverhoeff.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Bekijk voorbeeld: bramverhoeff.nl</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Live Showcase of bramverhoeff.nl */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#090d18] border border-emerald-500/30 p-4 sm:p-5 shadow-2xl overflow-hidden">
                {/* Mock address bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-mono text-emerald-400 ml-2">
                      https://bramverhoeff.nl
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Voorbeeld
                  </span>
                </div>

                {/* Preview Card Content */}
                <div className="space-y-3 text-left">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Bram Verhoeff</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Software Developer</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Portfolio met overzicht van projecten, technologieën en directe contactopties.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs space-y-1.5">
                    <div className="font-semibold text-emerald-300 text-xs">
                      Wat krijg je voor €30,-?
                    </div>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li>&bull; Jouw eigen bio, foto en professionele introductie</li>
                      <li>&bull; Interactieve projectenkaarten met links en toelichting</li>
                      <li>&bull; Knoppen naar LinkedIn, e-mail en WhatsApp</li>
                      <li>&bull; Razendsnelle hosting en koppeling aan je eigen domein</li>
                    </ul>
                  </div>

                  <a
                    href="https://bramverhoeff.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 group"
                  >
                    <span>Open bramverhoeff.nl in nieuw tabblad</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OTHER CORE SERVICES BENTO GRID                                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Bedrijfswebsites (Span 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Bedrijven &amp; MKB
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Professionele Bedrijfswebsites &amp; Landingspagina&apos;s
                </h3>
                <p className="text-sm text-indigo-300 font-medium mt-1">
                  Een prachtig online visitekaartje dat 24/7 nieuwe klanten voor je binnenhaalt
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Geen trage, standaard WordPresstemplates waar je zelf uren aan moet sleutelen. Ik ontwerp en bouw een unieke website die perfect aansluit bij jouw huisstijl, razendsnel laadt op mobiel en direct vindbaar is in Google.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Uniek ontwerp afgestemd op jouw doelgroep & stijl",
                  "Vlekkeloze weergave op smartphone, tablet en laptop",
                  "Direct goed vindbaar voor klanten in jouw regio (SEO)",
                  "Eenvoudige contactknoppen & offerteformulieren",
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
                Ideaal voor: Zzp&apos;ers, mkb, coaches, hoveniers, therapeuten &amp; lokale ondernemers
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 shrink-0"
              >
                <span>Vraag een bedrijfswebsite aan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
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
                  iDEAL &amp; Bestellingen
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Webshops &amp; Bestelsystemen
                </h3>
                <p className="text-xs text-emerald-300 font-medium mt-1">
                  Verkoop je producten of diensten eenvoudig online
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Wil je online bestellingen aannemen, workshops verkopen of producten verzenden? Ik bouw overzichtelijke bestelpagina&apos;s met veilige betaling via iDEAL, Bancontact en creditcard.
              </p>

              <div className="space-y-2 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Veilige iDEAL betalingen</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  Direct geld op je eigen rekening, zonder ingewikkelde commissies.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <span>Bespreek een webshop</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
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
                  Eigen App / SaaS
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Maatwerk Software &amp; Portalen
                </h3>
                <p className="text-xs text-purple-300 font-medium mt-1">
                  Heb je een uniek idee voor een online tool of ledenportaal?
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Als maker van mijn eigen succesvolle platform (StudyElite.nl) weet ik precies hoe je een idee omzet in een werkende applicatie met beveiligde accounts, dashboards en abonnementen.
              </p>

              <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20 space-y-1 text-xs">
                <div className="text-purple-300 font-medium">Van idee naar werkend product:</div>
                <div className="text-slate-400 text-[11px]">
                  Ik vertaal jouw idee naar een intuïtieve applicatie die klaar is voor duizenden gebruikers.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
              >
                <span>Deel jouw software idee</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 4: Zorgeloos Beheer & Slimme Hulpjes (Span 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400">
                    Altijd Online &amp; Veilig
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Zorgeloos Beheer, Snelle Hosting &amp; Slimme Automatisering
                </h3>
                <p className="text-sm text-blue-300 font-medium mt-1">
                  Nooit meer stress over updates, servers of trage pagina&apos;s
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Ik zorg dat jouw website altijd in topconditie blijft. Ik regel de razendsnelle hosting, installeer veiligheidscertificaten en maak dagelijks back-ups. Daarnaast kan ik handmatige rompslomp (zoals offertes overtypen of e-mails sturen) slim voor je automatiseren.
              </p>

              {/* Feature checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Razendsnelle servers in Nederland (jouw site opent direct)",
                  "Automatische updates en bescherming tegen storingen",
                  "Slimme koppelingen met e-mail, agenda en administratie",
                  "Vaste persoonlijke hulplijn als je iets wilt aanpassen",
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
                Jij focust op ondernemen, ik zorg dat de techniek geruisloos werkt.
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0"
              >
                <span>Vrijblijvend adviesgesprek</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
