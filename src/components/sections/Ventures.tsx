"use client";

import { useState } from "react";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Star,
  ShoppingBag,
  Code2,
} from "lucide-react";

export function Ventures() {
  const [mockTaskDone, setMockTaskDone] = useState(false);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            In-House Ventures &amp; Live Bewijslast
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ik bouw niet alleen voor klanten.{" "}
            <span className="glow-indigo-text">Ik run zelf succesvolle platformen.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Veel webbureaus hebben zelf nog nooit een eigen SaaS-product of webshop in de markt gezet. Binnen Agevo ontwikkel en exploiteer ik mijn eigen digitale producten — en diezelfde bewezen techniek zet ik in voor jouw bedrijf.
          </p>
        </div>

        {/* Featured Venture 1: STUDYELITE */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl overflow-hidden mb-10">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-indigo-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Vlaggenschip AI SaaS
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-300">
                  Next.js • Supabase • OpenAI
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  StudyElite.nl
                </h3>
                <p className="text-base font-semibold text-indigo-300 mt-1">
                  AI-gestuurd studieplatform met slimme taakopdeling &amp; dynamische agenda
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                StudyElite zet omvangrijke studiewijzers en syllabi via AI automatisch om in hapklare dagtaken. Voorzien van realtime database-synchronisatie, een interactief dashboard en een schaalbaar freemium/Pro abonnementsmodel.
              </p>

              {/* Wat dit betekent voor jou */}
              <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Wat dit bewijst voor jouw bedrijfsproject:
                </div>
                <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Complexe techniek beheerst:</strong> Van AI-integraties tot beveiligde gebruikersaccounts.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Conversie-gericht ontwerp:</strong> Gebouwd om bezoekers moeiteloos door een funnel te leiden.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Enterprise snelheid:</strong> ~140ms responstijd en 99.9% uptime op Vercel Edge.</span>
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
                  <span>Bekijk studyelite.nl live</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
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
                      https://studyelite.nl
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live SaaS Productie
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div>
                      <div className="text-xs text-slate-400">AI Studie Dashboard</div>
                      <div className="text-sm font-bold text-white">
                        Automatische Taak-Decompositie
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Weekdoel</div>
                      <div className="text-xs font-bold text-emerald-400">88% voltooid</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-500/25 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-300">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-indigo-400" />
                        Gegenereerde Dagplanning
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                        Interactieve Preview
                      </span>
                    </div>

                    {/* Interactive Task */}
                    <div
                      onClick={() => setMockTaskDone(!mockTaskDone)}
                      className="cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${mockTaskDone
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
                          Hoofdstuk 4 samenvatting &amp; AI-flashcards
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        {mockTaskDone ? "✓ Afgevinkt!" : "Klik om te testen"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-400">
                    Volledig in-house ontwikkeld en beheerd door <strong className="text-white">AgevoDev</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Ecosystem Showcase: StarRate, Prime Resell & BramVerhoeff.nl */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* StarRate */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Star className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  B2B Reputation Tool
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">StarRate</h4>
                <p className="text-xs text-amber-300 font-medium mt-0.5">
                  Slimme Review &amp; Reputatie Flow voor Bedrijven
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Helpt lokale ondernemers en dienstverleners om tevreden klanten automatisch richting 5-sterren Google reviews te leiden en interne feedback slim af te vangen.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">In-House Venture</span>
              <a href="#contact" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                <span>Vraag demo aan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Prime Resell */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  E-Commerce Platform
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Prime Resell</h4>
                <p className="text-xs text-emerald-300 font-medium mt-0.5">
                  High-Speed Storefront &amp; Checkout UX
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Eigen e-commerce platform gericht op mobiele snelheid, voorraadbeheer en directe social-commerce conversie op <strong>primeresell.nl</strong>.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">primeresell.nl</span>
              <a
                href="https://primeresell.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <span>Bekijk webshop</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bram Verhoeff Interactive 3D Portfolio */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  3D &amp; Bento Showcase
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">bramverhoeff.nl</h4>
                <p className="text-xs text-indigo-300 font-medium mt-0.5">
                  Persoonlijk Engineering &amp; Architectuur Portfolio
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Interactieve showcase met WebGL 3D-core, muis-volgende spotlight-borders, audio-synthesizer en systeem-blauwdrukken van mijn projecten.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">bramverhoeff.nl</span>
              <a
                href="https://bramverhoeff.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
              >
                <span>Open showcase</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Client Guarantee Strip */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Wil jij dezelfde kwaliteit en snelheid voor jouw bedrijfswebsite of applicatie?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Ik vertaal jouw wensen naar een vlekkeloos werkend resultaat, inclusief domeinnaam, hosting en directe ondersteuning.
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