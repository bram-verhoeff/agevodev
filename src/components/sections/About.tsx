"use client";

import { motion } from "framer-motion";
import {
  Users,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function About() {
  return (
    <section id="over-ons" className="relative py-28 overflow-hidden bg-[#07090e] border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              Onze Filosofie
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Software gebouwd vanuit ervaring,{" "}
              <span className="glow-indigo-text">niet vanuit theorie.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              De meeste traditionele softwarebureaus leveren een project op en kijken er daarna nooit meer naar om. Bij Agevo pakken we het anders aan: wij zijn zelf SaaS-founders én full-stack engineers.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Met onze eigen ventures — zoals de educatieve AI-tool{" "}
              <a
                href="https://studyelite.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-0.5"
              >
                StudyElite.nl <ArrowUpRight className="w-3 h-3" />
              </a>{" "}
              — staan we dagelijks zelf met de voeten in de klei. We weten wat gebruikers verwachten, hoe je frictie wegneemt en hoe je applicaties bouwt die bestand zijn tegen zware pieken.
            </p>

            {/* Quote block */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border-l-2 border-indigo-500 border-t border-r border-b border-white/10 text-sm text-slate-300 italic">
              &quot;Wij geloven niet in logge templates of onnodige bureaucratie. We bouwen software alsof het onze eigen startup is: snel, elegant en ontworpen voor maximale impact.&quot;
            </div>
          </div>

          {/* Right: Pillars & Values Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-indigo-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Ondernemersmentaliteit
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We denken mee over je businessmodel, conversie en retentie. Code is slechts het middel om echte waarde te creëren.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Schone &amp; Modulaire Code
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Geen spaghetti-code. Alles is modulair, gedocumenteerd en eenvoudig overdraagbaar naar interne teams.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Direct Contact met Engineers
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Geen accountmanagers of ruis op de lijn. Je overlegt rechtstreeks met de specialisten die de code schrijven.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">
                Next-Gen Cloud Stack
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We werken met de modernste ecosystemen: Next.js, Supabase, Tailwind, Vercel Edge en enterprise AI tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
