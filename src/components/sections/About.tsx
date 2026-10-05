"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Calendar,
  Heart,
  Code2,
  Laptop,
  Check,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.62-1.63-1.62Z" />
    </svg>
  );
}

export function About() {
  return (
    <>
      {/* ========================================================================= */}
      {/* SECTION 1: WERKWIJZE (3 STEPS & BELOFTES)                                  */}
      {/* ========================================================================= */}
      <section id="werkwijze" className="relative py-24 sm:py-32 overflow-hidden bg-[#07090e] border-t border-white/5">
        {/* Glow effect */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
              <Rocket className="w-3.5 h-3.5" />
              Eenvoudige Werkwijze
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              In 3 overzichtelijke stappen naar een{" "}
              <span className="glow-indigo-text">nieuwe website</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              Geen ingewikkelde projectplannen of technische rapporten. Zo helder en transparant verloopt een samenwerking met mij:
            </p>
          </div>

          {/* 3 Steps Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Step 1 */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-black text-lg mb-5 shadow-lg shadow-indigo-500/10">
                1
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider font-mono">
                  Stap 1: Kennismaking
                </span>
                <h3 className="text-xl font-bold text-white">Deel jouw idee &amp; wensen</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  Vertel me in je eigen woorden wat je zoekt. Wat doet je bedrijf? Wie zijn je klanten? Wat wil je uitstralen? Geen moeilijke vragen, maar een ontspannen gesprek of een snel WhatsAppje.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-lg mb-5 shadow-lg shadow-emerald-500/10">
                2
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider font-mono">
                  Stap 2: Ik bouw
                </span>
                <h3 className="text-xl font-bold text-white">Design &amp; Ontwikkeling</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  Ik ga direct aan de slag en bouw een uniek ontwerp. Je krijgt tussendoor een geheime link zodat je live kunt meekijken, testen op je telefoon en feedback kunt geven.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black text-lg mb-5 shadow-lg shadow-purple-500/10">
                3
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider font-mono">
                  Stap 3: Livegang
                </span>
                <h3 className="text-xl font-bold text-white">Online &amp; Klanten Werven</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  Tevreden met het resultaat? Dan zet ik de website live op jouw eigen domeinnaam (.nl). Ik regel de hosting, beveiliging en Google-aanmelding. Klaar om te groeien!
                </p>
              </div>
            </div>
          </div>

          {/* Why AgevoDev (4 Pillars) */}
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10">
            <div className="max-w-2xl mb-10">
              <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                Eerlijke Beloftes
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Waarom ondernemers graag met mij werken
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Rechtstreeks Contact</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Geen accountmanagers of trage helpdesks. Je hebt direct contact met de persoon die jouw website bouwt.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Duidelijke Vaste Prijs</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vooraf helderheid over de kosten. Geen nare verrassingen of verborgen uurtje-factuurtje achteraf.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">100% Jouw Eigendom</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  De domeinnaam, de broncode en alle rechten zijn en blijven volledig van jou. Je zit nergens aan vast.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Altijd Snelle Hulp</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Wil je later een tekstje aanpassen of een nieuwe dienst toevoegen? Ik reageer snel en help je direct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: OVER BRAM VERHOEFF (PERSONAL TRUST, HUMAN FACE & FOUNDER STORY) */}
      {/* ========================================================================= */}
      <section id="over-bram" className="relative py-24 sm:py-32 overflow-hidden bg-grid-pattern border-t border-white/5">
        {/* Ambient lighting */}
        <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Portrait & Founder Badge */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-md">
                {/* Decorative border glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-emerald-500 to-blue-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
                
                <div className="relative rounded-3xl glass-panel p-2.5 border border-white/15 overflow-hidden shadow-2xl bg-[#090d18]">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#242b42]">
                    <Image
                      src="/bram.png"
                      alt="Bram Verhoeff - Oprichter & Full-stack Developer AgevoDev"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 450px"
                      priority
                    />
                    {/* Gradient overlay at bottom for readable caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-extrabold text-lg sm:text-xl leading-tight drop-shadow-md">
                        Bram Verhoeff
                      </div>
                      <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5 drop-shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                        Oprichter &amp; Software Developer
                      </div>
                    </div>
                  </div>

                  {/* Badges bar */}
                  <div className="p-3.5 grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="font-bold text-white">StudyElite.nl</div>
                      <div className="text-[10px] text-slate-400">Maker &amp; Eigenaar</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="font-bold text-emerald-400">Direct Contact</div>
                      <div className="text-[10px] text-slate-400">Zonder tussenpersonen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Personal Story & Guarantees */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-indigo-400" />
                Het Gezicht Achter AgevoDev
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Aangenaam, ik ben Bram.{" "}
                  <span className="glow-indigo-text">Geen anoniem bureau, maar 1 vast aanspreekpunt.</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
                  Veel ondernemers die ik spreek, hebben nare ervaringen met traditionele internetbureaus: je betaalt duizenden euro&apos;s te veel, praat met een accountmanager die zelf geen regel code begrijpt, of je zit vast in trage, krakkemikkige WordPress plugins die elk half jaar vastlopen.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bij AgevoDev doe je rechtstreeks zaken met mij. Ik ontwerp en programmeer je website persoonlijk met de modernste technologieën (Next.js, React &amp; TypeScript) — exact dezelfde techniek waarmee ik ook mijn eigen platform <strong className="text-white">StudyElite.nl</strong> heb gebouwd. Dat betekent:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    "Korte lijntjes: bel of app me direct",
                    "Geen technisch jargon, gewone taal",
                    "Supersnelle websites die direct laden",
                    "100% Jouw eigendom (geen lock-in)",
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Guarantee Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-transparent border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Mijn persoonlijke belofte aan jou
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Ik stop pas met ontwerpen en schaven als jij <strong className="text-white">100% tevreden en trots</strong> bent op het resultaat. En als je situatie simpelweg vraagt om een snelle portfolio-opzet van €30,-, dan raad ik je ook niet méér aan dan dat. Eerlijk en betrouwbaar.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Stuur Bram een WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("open-calendar-modal"));
                  }}
                  className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Plan 15 min videocall</span>
                </button>

                <a
                  href={siteConfig.socials.linkedinPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-all flex items-center justify-center gap-2 group"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn (Bram)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
