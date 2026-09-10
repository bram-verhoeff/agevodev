"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Zap,
  ArrowRight,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Activity,
} from "lucide-react";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="diensten" className="relative py-28 overflow-hidden bg-[#07090e]">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Onze Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            High-end development voor{" "}
            <span className="glow-indigo-text">ambitieuze digitale doelen</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Van vliegensvlugge webplatformen tot complete SaaS-architecturen en AI-automatiseringen. Wij bouwen software die overtuigt, converteert en schaalt.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Full-Stack Web (Span 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Core Specialisme
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Full-Stack Web &amp; Platform Development
                </h3>
                <p className="text-sm text-indigo-300 font-medium mt-1">
                  Next.js App Router, React 19, TypeScript &amp; ultra-snelle web-architectuur
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Wij ontwikkelen moderne webplatformen die ontworpen zijn voor extreme snelheid, SEO-dominantie en een ongeëvenaarde gebruikerservaring. Geen logge WordPress of trage templates, maar 100% geoptimaliseerde broncode.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "Server-Side Rendering (SSR) & dynamische Edge caching",
                  "100/100 Core Web Vitals score voor maximale vindbaarheid",
                  "Moderne Tailwind CSS & Framer Motion micro-interacties",
                  "Robuuste TypeScript backend API's & database schema's",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual preview snippet inside card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 shrink-0"
              >
                <span>Bespreek jouw webproject</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: SaaS & Tool Development (1 col) */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  MVP naar Schaal
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  SaaS &amp; Tool Development
                </h3>
                <p className="text-xs text-blue-300 font-medium mt-1">
                  Van concept naar marktklaar abonnementsmodel
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Als makers van StudyElite begrijpen we de SaaS-funnel van A tot Z. Wij bouwen complete softwareapplicaties met authenticatie, rolbeheer en betaalstromen.
              </p>

              {/* Visual mini-roadmap */}
              <div className="space-y-2 p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Multi-tenant Auth &amp; RLS
                  </span>
                  <span className="text-[10px] text-emerald-400">Gereed</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Stripe / Mollie Subscriptions
                  </span>
                  <span className="text-[10px] text-emerald-400">Gereed</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span className="flex items-center gap-1.5 text-blue-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Live Analytics &amp; Funnels
                  </span>
                  <span className="text-[10px] text-emerald-400">Gereed</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
              >
                <span>Plan een SaaS intake</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: AI & Integraties (1 col) */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/10">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  AI Integraties
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Automatisering &amp; AI Agents
                </h3>
                <p className="text-xs text-purple-300 font-medium mt-1">
                  LLM koppelingen, vector search &amp; autonome workflows
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Transformeer handmatige processen naar intelligente systemen. Wij koppelen OpenAI, Anthropic Claude en custom data pipelines naadloos aan je bestaande database en tools.
              </p>

              {/* Visual simulated AI Prompt Box */}
              <div className="p-3 rounded-xl bg-black/40 border border-purple-500/20 space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[11px] text-purple-300">
                  <Sparkles className="w-3 h-3" />
                  <span>AI Agent Pipeline</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  &gt; Inkomend document analyseren...
                </div>
                <div className="text-emerald-400 text-[11px]">
                  ✓ Entiteiten geëxtraheerd &amp; gesynchroniseerd in database
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5"
              >
                <span>Ontdek AI kansen</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 4: Cloud & DevOps (Span 2 cols on lg) */}
          <div className="lg:col-span-2 rounded-3xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400">
                    99.98% Bewezen Uptime
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Cloud Architectuur &amp; High-Performance Hosting
                </h3>
                <p className="text-sm text-emerald-300 font-medium mt-1">
                  Serverless, veilige databases, Docker &amp; zero-downtime CI/CD pipelines
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Jouw software verdient een betrouwbare fundering. Wij richten schaalbare cloudomgevingen in via Vercel, Supabase en Cloudflare die moeiteloos piekbelasting opvangen, beschermd zijn tegen DDoS en automatisch back-ups maken.
              </p>

              {/* Feature checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "Geautomatiseerde CI/CD via GitHub Actions",
                  "PostgreSQL data redundantie en geëncripteerde opslag",
                  "Cloudflare edge caching & security firewall",
                  "Realtime error tracking en telemetrie logging",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {["Supabase", "Vercel Edge", "PostgreSQL", "Docker", "Cloudflare", "GitHub Actions"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 shrink-0"
              >
                <span>Vraag infrastructuur advies</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
