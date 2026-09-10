"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Terminal,
  Cpu,
  Zap,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Server,
  Globe2,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"arch" | "code" | "metrics">("arch");

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-medium text-indigo-300 shadow-sm shadow-indigo-500/10 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span>Tech Studio & Venture Builder</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 flex items-center gap-1">
              Maker van <strong className="text-white font-semibold">StudyElite.nl</strong>
            </span>
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Wij bouwen schaalbare{" "}
            <span className="glow-indigo-text">webapps</span>, slimme{" "}
            <span className="glow-indigo-text">software</span> & digitale{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
              platformen.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Agevo is een overkoepelende development studio. Wij lanceren toonaangevende eigen{" "}
            <span className="text-indigo-300 font-medium">SaaS-ventures</span> én ontwikkelen hoogwaardige{" "}
            <span className="text-white font-medium">maatwerk software</span> voor ambitieuze organisaties.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#ventures"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Bekijk Portfolio & Ventures</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm backdrop-blur-md hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Contact Opnemen</span>
            </a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-6 w-full border-t border-white/10"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="text-left px-2 sm:px-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-indigo-300 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {stat.detail}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Studio Preview Card / Architecture visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl glass-panel p-1 border border-white/15 shadow-2xl overflow-hidden group">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#080c18]/90">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  agevo-studio-core v2.4 (Production Engine)
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab("arch")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === "arch"
                      ? "bg-indigo-600 text-white font-medium shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Architectuur
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === "code"
                      ? "bg-indigo-600 text-white font-medium shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Tech Stack
                </button>
                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === "metrics"
                      ? "bg-indigo-600 text-white font-medium shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Live Status
                </button>
              </div>
            </div>

            {/* Tab Body */}
            <div className="p-5 sm:p-7 bg-[#070a14]/90 min-h-[220px]">
              {activeTab === "arch" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-white">Client & Edge Layer</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Next.js 16 App Router, React 19, Server Actions, edge caching en globale CDN distributie.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono">
                        Sub-100ms TTFB
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono">
                        99.98% SLA
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-white">AI & Logic Core</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      LLM orchestration (OpenAI/Anthropic), vector embeddings, background workers en automatiseringsstromen.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono">
                        Async Queues
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-mono">
                        AI Agents
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                      <Server className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-semibold text-white">Data & Multi-Tenant</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      PostgreSQL, Supabase, geautomatiseerde backups, row-level security (RLS) en veilige Stripe / Mollie billing.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono">
                        Encrypted
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">
                        Scalable SQL
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "code" && (
                <div className="font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto p-2 bg-black/40 rounded-xl border border-white/10">
                  <div className="text-slate-500">// Modern Next.js App Router Architecture @ Agevo</div>
                  <div>
                    <span className="text-purple-400">import</span> &#123;{" "}
                    <span className="text-yellow-300">AgevoStudio</span>,{" "}
                    <span className="text-yellow-300">StudyEliteEngine</span> &#125;{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-emerald-400">&quot;@agevo/core&quot;</span>;
                  </div>
                  <div className="pt-1">
                    <span className="text-indigo-400">export async function</span>{" "}
                    <span className="text-blue-400">launchDigitalProduct</span>(
                    <span className="text-orange-300">clientBrief</span>) &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">const</span> product ={" "}
                    <span className="text-indigo-400">await</span> AgevoStudio.build(&#123;
                  </div>
                  <div className="pl-8 text-slate-400">
                    framework: <span className="text-emerald-300">&quot;Next.js App Router &amp; TypeScript&quot;</span>,
                  </div>
                  <div className="pl-8 text-slate-400">
                    scalability: <span className="text-emerald-300">&quot;High-concurrency cloud ready&quot;</span>,
                  </div>
                  <div className="pl-8 text-slate-400">
                    aiEngine: <span className="text-emerald-300">&quot;Integrated LLM / Vector Workflows&quot;</span>,
                  </div>
                  <div className="pl-8 text-slate-400">
                    designSystem: <span className="text-emerald-300">&quot;Custom Tailwind &amp; Framer Motion&quot;</span>
                  </div>
                  <div className="pl-4">&#125;);</div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> product.deployToProduction();
                  </div>
                  <div>&#125;</div>
                </div>
              )}

              {activeTab === "metrics" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[11px] text-slate-400">Core Web Vitals</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">100 / 100</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Lighthouse Score</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[11px] text-slate-400">StudyElite.nl</div>
                    <div className="text-xl font-bold text-blue-400 mt-1">Live &amp; Actief</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">SaaS Venture Label</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[11px] text-slate-400">Avg. Response Time</div>
                    <div className="text-xl font-bold text-indigo-400 mt-1">28 ms</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Vercel Edge Network</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[11px] text-slate-400">Beschikbaarheid</div>
                    <div className="text-xl font-bold text-white mt-1">Direct</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">Open voor nieuwe projecten</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
