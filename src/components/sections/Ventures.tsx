"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { ventures } from "@/data/ventures";

export function Ventures() {
  const [mockTaskDone, setMockTaskDone] = useState(false);
  const studyElite = ventures.find((v) => v.id === "studyelite") || ventures[0];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Bewezen Resultaat &amp; Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ik bouw niet alleen voor klanten.{" "}
            <span className="glow-indigo-text">Ik run zelf succesvolle online platformen.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Veel websitebouwers hebben zelf nog nooit een eigen online platform gerund. Ik wel! Met mijn eigen platform <strong className="text-white">StudyElite.nl</strong> weet ik precies wat er nodig is om een website te maken die bezoekers overtuigt en moeiteloos werkt.
          </p>
        </div>

        {/* Featured Venture: STUDYELITE */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl overflow-hidden mb-12">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-indigo-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live &amp; Actief Platform
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-300">
                  Mijn Eigen Platform
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  StudyElite.nl
                </h3>
                <p className="text-base font-semibold text-indigo-300 mt-1">
                  Het slimme studieplatform dat studenten helpt slagen voor hun tentamens
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                StudyElite is ontstaan uit een simpel idee: studeren kan veel overzichtelijker en minder stressvol. Het platform maakt automatisch een slim dag-tot-dag studieschema en genereert oefenvragen. Honderden studenten maken hier dagelijks dankbaar gebruik van.
              </p>

              {/* Wat dit betekent voor jou */}
              <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Wat dit betekent voor jouw website:
                </div>
                <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Bewezen snelheid:</strong> Geen wachttijden of haperende pagina&apos;s voor jouw klanten.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Conversie-gericht:</strong> Ontworpen zodat bezoekers ook écht contact opnemen of kopen.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Betrouwbaar:</strong> Altijd online, veilig beveiligd en dagelijks geback-upt.</span>
                  </div>
                </div>
              </div>

              {/* CTA link to studyelite.nl */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://studyelite.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all flex items-center gap-2 group"
                >
                  <span>Bezoek studyelite.nl</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-xs text-slate-400">
                  Neem gerust zelf een kijkje op de live website!
                </span>
              </div>
            </div>

            {/* Right Column: Live StudyElite Dashboard Demo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-[#090d1a] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">
                      app.studyelite.nl
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live in Gebruik
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div>
                      <div className="text-xs text-slate-400">Welkom student,</div>
                      <div className="text-sm font-bold text-white">
                        Vandaag op de planning:
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Voortgang deze week</div>
                      <div className="text-xs font-bold text-emerald-400">88% behaald</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-500/25 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-300">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-indigo-400" />
                        Slim Studieoverzicht
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                        Tentamen over 5 dagen
                      </span>
                    </div>

                    {/* Interactive Task */}
                    <div
                      onClick={() => setMockTaskDone(!mockTaskDone)}
                      className="cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            mockTaskDone
                              ? "bg-emerald-500 border-emerald-400 text-white"
                              : "border-slate-500 bg-transparent"
                          }`}
                        >
                          {mockTaskDone && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <span
                          className={
                            mockTaskDone ? "line-through text-slate-500" : "text-white font-medium"
                          }
                        >
                          Hoofdstuk 4 samenvatting herhalen
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        {mockTaskDone ? "✓ Voltooid!" : "Klik om te testen"}
                      </span>
                    </div>
                  </div>

                  {/* Trust footer */}
                  <div className="pt-2 text-center text-xs text-slate-400">
                    Gebouwd, onderhouden en gehost door <strong className="text-white">AgevoDev</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Showcase 2: BRAMVERHOEFF.NL (PORTFOLIO WEBSITE VOORBEELD) */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl overflow-hidden mb-12">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  Live Showcase
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300">
                  Product: Portfolio Website (€30,-)
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  bramverhoeff.nl
                </h3>
                <p className="text-base font-semibold text-emerald-400 mt-1">
                  Het live schoolvoorbeeld van mijn €30,- Portfolio Website
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Op zoek naar een minimalistische, razendsnelle en stijlvolle manier om je projecten, vaardigheden of cv te tonen? Op <strong className="text-white">bramverhoeff.nl</strong> zie je precies hoe een persoonlijke portfolio website eruitziet: vlijmscherp op mobiel, direct overtuigend en compleet opgeleverd voor slechts €30,-.
              </p>

              {/* Wat je krijgt bij een €30,- portfolio */}
              <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Wat je krijgt voor slechts €30,-:
                </div>
                <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Projecten &amp; Skills overzicht:</strong> Jouw werk en ervaring helder gerangschikt.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Direct bereikbaar:</strong> Knoppen naar LinkedIn, e-mail en WhatsApp.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span><strong>Binnen 24-48 uur live:</strong> Snelle oplevering voor een vaste eenmalige prijs.</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://bramverhoeff.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all flex items-center gap-2 group"
                >
                  <span>Bezoek bramverhoeff.nl</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("prefill-contact-form", {
                        detail: {
                          projectType: "Portfolio Website (€30,-)",
                          message: "Hoi AgevoDev! Ik wil graag een Portfolio Website laten maken voor €30,-, met een vergelijkbare opzet als bramverhoeff.nl.",
                          budget: "€30,-",
                        },
                      })
                    );
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <span>Bestel ook voor €30,-</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Mockup Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-[#090d1a] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-mono text-emerald-400 ml-2">
                      https://bramverhoeff.nl
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Voorbeeld
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                    <div className="text-xs font-semibold text-indigo-400">Software Developer &amp; Maker</div>
                    <div className="text-xl font-bold text-white">Bram Verhoeff</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Een strak overzicht van gerealiseerde software projecten, actuele stack en directe links om contact op te nemen.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Vaste Prijs</div>
                      <div className="text-base font-extrabold text-emerald-400">€30,- eenmalig</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Doorlooptijd</div>
                      <div className="text-base font-bold text-white">24 - 48 Uur</div>
                    </div>
                  </div>

                  <a
                    href="https://bramverhoeff.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Bekijk volledige website op bramverhoeff.nl</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Guarantee Strip */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Wil jij ook zo&apos;n professionele website of applicatie voor jouw bedrijf?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Ik vertaal jouw wensen naar een vlekkeloos werkend resultaat, inclusief domeinnaam en ondersteuning.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
          >
            <span>Plan een vrijblijvend gesprek</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
