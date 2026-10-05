"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Smile,
  Zap,
  Smartphone,
  Search,
  HeartHandshake,
  Layout,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"result" | "service" | "proof">("result");

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex items-center justify-center bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-medium text-slate-300 shadow-sm backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-white">Geen technisch gedoe</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              Websites &amp; webshops die <strong className="text-white font-semibold">nieuwe klanten opleveren</strong>
            </span>
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Een professionele website laten maken{" "}
            <span className="glow-indigo-text">voor jouw bedrijf.</span>
          </motion.h1>

          {/* Simple, friendly Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Zonder ingewikkelde vaktermen of lange wachttijden. Ik ontwerp, bouw en beheer jouw complete website of webshop — snel, overzichtelijk en direct klaar voor resultaat.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <span>Vrijblijvende Offerte Aanvragen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#diensten"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Wat ik voor jou bouw</span>
            </a>
          </motion.div>

          {/* Trust Highlights for non-technical visitors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 w-full border-t border-white/10"
          >
            <div className="text-left p-3 rounded-xl bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <Smile className="w-6 h-6 text-indigo-400" />
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-indigo-300 mt-1">
                Zonder Technisch Gedoe
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Ik regel alles van A tot Z
              </div>
            </div>

            <div className="text-left p-3 rounded-xl bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <Zap className="w-6 h-6 text-emerald-400" />
                1-2 Weken
              </div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-300 mt-1">
                Snel Online
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Geen maandenlange wachttijden
              </div>
            </div>

            <div className="text-left p-3 rounded-xl bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <Search className="w-6 h-6 text-blue-400" />
                Google
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-300 mt-1">
                Direct Goed Vindbaar
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Geoptimaliseerd voor lokale klanten
              </div>
            </div>

            <div className="text-left p-3 rounded-xl bg-white/[0.02]">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <HeartHandshake className="w-6 h-6 text-purple-400" />
                Persoonlijk
              </div>
              <div className="text-xs sm:text-sm font-semibold text-purple-300 mt-1">
                Direct Contact
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Gewoon bellen met de bouwer
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl glass-panel p-1 border border-white/15 shadow-2xl overflow-hidden group">
            {/* Header bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#080c18]/90 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-medium text-slate-300 ml-2">
                  Wat ik voor jou doe:
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center bg-black/40 rounded-xl p-1 border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab("result")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === "result"
                      ? "bg-indigo-600 text-white font-medium shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Wat Jij Krijgt
                </button>
                <button
                  onClick={() => setActiveTab("service")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === "service"
                      ? "bg-indigo-600 text-white font-medium shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Zonder Zorgen
                </button>
                <button
                  onClick={() => setActiveTab("proof")}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeTab === "proof"
                      ? "bg-indigo-600 text-white font-medium shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Mijn Ervaring
                </button>
              </div>
            </div>

            {/* Tab Body */}
            <div className="p-6 sm:p-8 bg-[#070a14]/90 min-h-[220px]">
              {activeTab === "result" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-white">Prachtig Modern Design</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Jouw bedrijf straalt direct betrouwbaarheid en professionaliteit uit. Bezoekers zien meteen waarom ze voor jou moeten kiezen.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-white">Perfect op Mobiel &amp; Tablet</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Meer dan 70% van je bezoekers kijkt op een telefoon. Jouw site werkt vlekkeloos en laadt binnen een oogwenk op elk scherm.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-white">Meer Aanvragen &amp; Klanten</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Duidelijke belknoppen, simpele formulieren en opties voor online betalingen (iDEAL). Alles gericht op resultaat.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "service" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-semibold text-emerald-400">✓ Hosting &amp; Domein</div>
                    <p className="text-xs text-slate-300 mt-1">
                      Ik regel je webadres (.nl) en zorg dat je site 24/7 online en veilig blijft.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-semibold text-indigo-400">✓ Beveiliging &amp; Backups</div>
                    <p className="text-xs text-slate-300 mt-1">
                      Automatisch beschermd tegen hackers met groen SSL-slotje en dagelijkse backups.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-semibold text-purple-400">✓ Ondersteuning</div>
                    <p className="text-xs text-slate-300 mt-1">
                      Wil je later een tekst, foto of openingstijd aanpassen? Eén appje naar mij en ik regel het direct.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs font-semibold text-cyan-400">✓ 100% Jouw Eigendom</div>
                    <p className="text-xs text-slate-300 mt-1">
                      Geen verborgen abonnementen of wurgcontracten. De website is en blijft helemaal van jou.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "proof" && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-2">
                  <div className="space-y-2 max-w-xl text-left">
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Zelf bewezen in de praktijk
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      Maker van onder andere StudyElite.nl
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Ik ben geen theoretisch adviseur. Ik heb zelf succesvolle online platformen opgericht die dagelijks honderden actieve gebruikers helpen. Diezelfde passie en kwaliteit stop ik in jouw website!
                    </p>
                  </div>

                  <a
                    href="#portfolio"
                    className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5"
                  >
                    <span>Bekijk StudyElite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
