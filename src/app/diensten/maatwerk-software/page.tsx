import { Metadata } from "next";
import { ArrowRight, Code2, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Maatwerk Software Ontwikkeling | Next.js Specialist",
  description:
    "Laat schaalbare maatwerk software ontwikkelen door AgevoDev. Wij bouwen razendsnelle webapplicaties met Next.js, React en TypeScript voor de ultieme gebruikerservaring.",
};

export default function MaatwerkSoftwarePage() {
  return (
    <main className="min-h-screen bg-[#07090e] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2 mb-8 transition-colors"
          >
            ← Terug naar home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <Code2 className="w-4 h-4" />
            Onze Core Dienst
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Maatwerk Software <span className="glow-indigo-text">Ontwikkeling</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Als je een webplatform of applicatie nodig hebt die perfect moet aansluiten bij jouw bedrijfsprocessen, dan is standaard software vaak niet voldoende. Wij ontwerpen en bouwen <strong>high-end maatwerk software</strong> met de nieuwste webtechnologieën.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          <section className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <h2 className="text-2xl font-bold text-white mb-4">Waarom Maatwerk?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Maatwerk software (custom development) geeft je de vrijheid om jouw bedrijfslogica exact te vertalen naar een digitaal product. Geen compromissen, geen trage templates, en geen onnodige code die je platform vertraagt. Wij bouwen alles <em>from scratch</em> met Next.js 14+ (App Router).
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "100% eigendom over de broncode",
                "Ongekende laadsnelheden (Edge caching)",
                "Volledig schaalbaar in de cloud (AWS / Vercel)",
                "Gecodeerd met enterprise-grade beveiliging",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Onze Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white">Next.js & React 19</h3>
                <p className="text-xs text-slate-400">Server-Side Rendering voor optimale SEO en performance.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-white">Supabase & PostgreSQL</h3>
                <p className="text-xs text-slate-400">Krachtige, relationele databases met realtime architectuur.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white">TypeScript</h3>
                <p className="text-xs text-slate-400">Type-veiligheid voor robuuste, bug-vrije applicaties.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Start met jouw maatwerk applicatie</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Klaar om je idee om te zetten in een digitaal platform? Wij helpen je van de eerste architectuur schets tot de livegang in productie.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
            >
              Neem direct contact op <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
