import { Metadata } from "next";
import { ArrowRight, Code2, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Maatwerk Software & SaaS Ontwikkeling | Next.js Specialist",
  description:
    "Laat schaalbare maatwerk software, webapplicaties en SaaS-platformen ontwikkelen door AgevoDev (Bram Verhoeff) met Next.js, React, TypeScript en Supabase.",
};

export default function MaatwerkSoftwarePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link
              href="/"
              className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2 mb-8 transition-colors"
            >
              ← Terug naar overzicht
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
              <Code2 className="w-4 h-4" />
              Enterprise &amp; SaaS Engineering
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Maatwerk Software &amp; <span className="glow-indigo-text">SaaS Ontwikkeling</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              Wanneer standaard pakketten tekortschieten voor jouw bedrijfslogica of startup-idee, ontwerp en bouw ik <strong>schaalbare maatwerk webapplicaties</strong> met Next.js, TypeScript, Supabase en AI-integraties.
            </p>
          </div>

          <div className="space-y-12">
            <section className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
              <h2 className="text-2xl font-bold text-white mb-4">Waarom Maatwerk bij AgevoDev?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Als maker van onder andere <strong>StudyElite.nl</strong> bouw ik software met dezelfde architectuur die grote tech-bedrijven gebruiken. Geen trage templates, maar een veilig, razendsnel platform dat 100% jouw eigendom is.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "100% eigendom over de volledige broncode",
                  "Sub-seconde laadtijden via Vercel Edge caching",
                  "Beveiligde multi-user auth & Row-Level Security",
                  "Naadloze koppeling met iDEAL/Stripe, CRM & AI",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">De Productie Tech-Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">Next.js 15 &amp; React 19</h3>
                  <p className="text-xs text-slate-400">Server-Side Rendering voor maximale snelheid en SEO.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">Supabase &amp; PostgreSQL</h3>
                  <p className="text-xs text-slate-400">Krachtige relationele databases met realtime synchronisatie.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">TypeScript &amp; AI</h3>
                  <p className="text-xs text-slate-400">Strikte type-veiligheid en slimme OpenAI/Claude integraties.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Klaar om jouw applicatie te lanceren?</h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Ik begeleid je van de eerste Figma-schets en database-architectuur tot de livegang in productie.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all"
              >
                Plan een vrijblijvende intake <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}