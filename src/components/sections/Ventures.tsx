"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Calendar,
  BookOpen,
  BrainCircuit,
  BarChart3,
  Flame,
  Clock,
  Layers,
  FlaskConical,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { ventures } from "@/data/ventures";

export function Ventures() {
  const [mockTaskDone, setMockTaskDone] = useState(false);
  const studyElite = ventures.find((v) => v.id === "studyelite") || ventures[0];
  const agevoLabs = ventures.find((v) => v.id === "agevo-labs") || ventures[1];

  return (
    <section id="ventures" className="relative py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Eigen Ventures &amp; Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Wij bouwen niet alleen voor klanten.{" "}
            <span className="glow-indigo-text">Wij runnen eigen SaaS-bedrijven.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Als venture studio valideren we technologieën eerst in de praktijk. Dit geeft ons diepgaande praktijkkennis over conversie, schaalbaarheid en gebruikerservaring.
          </p>
        </div>

        {/* Featured Venture: STUDYELITE */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl overflow-hidden mb-12">
          {/* Subtle decorative glow gradient in top corner */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-indigo-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Venture Info & Copy */}
            <div className="lg:col-span-6 space-y-6">
              {/* Status and label badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-medium text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Product
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-300">
                  {studyElite.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                  Officieel Agevo Label
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  StudyElite
                </h3>
                <p className="text-base font-semibold text-indigo-300 mt-1">
                  {studyElite.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {studyElite.longDescription}
              </p>

              {/* Key Features Bullet points */}
              <div className="space-y-3 pt-2">
                {studyElite.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        {feat.title}
                      </div>
                      <div className="text-xs text-slate-400 leading-normal">
                        {feat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Gebruikte Architectuur &amp; Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {studyElite.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 hover:border-indigo-400/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link to studyelite.nl */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
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
                  Actief in productie &amp; open voor studenten
                </span>
              </div>
            </div>

            {/* Right Column: Realistic Dashboard Preview Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-[#090d1a] border border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden group">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">
                      app.studyelite.nl/dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Sync
                  </div>
                </div>

                {/* Dashboard Mock Body */}
                <div className="space-y-4">
                  {/* User greeting & quick stats bar */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <div className="text-xs text-slate-400">Welkom terug,</div>
                      <div className="text-sm font-bold text-white">
                        Student Account (Master)
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400">Tentamenperiode</div>
                        <div className="text-xs font-bold text-emerald-400">84% op schema</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold text-xs">
                        SE
                      </div>
                    </div>
                  </div>

                  {/* Active AI Study Plan Widget */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-500/25 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                        <BrainCircuit className="w-4 h-4 text-indigo-400" />
                        AI Study Scheduler
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                        Tentamen over 8 dagen
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-white flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                          Hoofdstuk 6: Gedistribueerde Systemen
                        </span>
                        <span className="text-slate-400 text-[11px]">Vandaag, 14:00 - 16:30</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-1.5 rounded-full w-3/4" />
                      </div>
                    </div>

                    {/* Interactive Task Checkbox */}
                    <div
                      onClick={() => setMockTaskDone(!mockTaskDone)}
                      className="cursor-pointer flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 text-xs">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            mockTaskDone
                              ? "bg-emerald-500 border-emerald-400 text-white"
                              : "border-slate-500 bg-transparent"
                          }`}
                        >
                          {mockTaskDone && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span
                          className={
                            mockTaskDone ? "line-through text-slate-500" : "text-slate-300"
                          }
                        >
                          20 AI Flashcards herhalen (Spaced Repetition)
                        </span>
                      </div>
                      <span className="text-[10px] text-indigo-400 font-mono">
                        {mockTaskDone ? "+25 XP" : "Klik om te voltooien"}
                      </span>
                    </div>
                  </div>

                  {/* AI Assistant Chat Snippet */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      StudyElite AI Copilot
                    </div>
                    <p className="text-xs text-slate-300 bg-black/30 p-2.5 rounded-lg border border-white/5 leading-relaxed font-sans">
                      &quot;Tip voor vandaag: Op basis van je eerdere quizresultaten raad ik aan om
                      30 minuten extra aandacht te geven aan consensus-protocollen. Je planning is
                      automatisch geoptimaliseerd!&quot;
                    </p>
                  </div>
                </div>

                {/* Footer overlay badge */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Gebouwd &amp; geëxploiteerd door Agevo</span>
                  <a
                    href="https://studyelite.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
                  >
                    studyelite.nl bekijken
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Card: AGEVO LABS (Venture Incubation) */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30 flex items-center gap-1">
                  <FlaskConical className="w-3.5 h-3.5" />
                  R&amp;D Pipeline
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {agevoLabs.status}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                {agevoLabs.name} — Innovatieve Micro-SaaS in ontwikkeling
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {agevoLabs.description} Wij experimenteren continu met autonome agents, developer telemetry en cloud tooling om de software van morgen te realiseren.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                <span>Partner worden in een venture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
