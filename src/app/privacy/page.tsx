import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacybeleid | Agevo",
  description:
    "Lees hoe Agevo (KvK: 42160840) omgaat met persoonsgegevens, privacy en de Algemene Verordening Gegevensbescherming (AVG).",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Terug naar home</span>
            </Link>
          </div>

          {/* Header Banner */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Juridische Informatie
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Privacybeleid Agevo
            </h1>
            <p className="text-sm text-slate-400">
              Laatst bijgewerkt: Maart 2026 &bull; KvK:{" "}
              <span className="text-slate-200 font-mono">{siteConfig.kvk}</span> &bull; E-mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-indigo-300 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
            {/* Introductie */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                1. Inleiding &amp; Bedrijfsgegevens
              </h2>
              <p>
                Agevo (hierna &quot;wij&quot;, &quot;ons&quot; of &quot;Agevo&quot;) hecht grote waarde aan de bescherming van jouw persoonsgegevens en jouw privacy. In deze privacyverklaring leggen we transparant uit welke gegevens we verzamelen, waarom we dat doen, hoe lang we deze bewaren en welke rechten je hebt onder de Algemene Verordening Gegevensbescherming (AVG).
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1 text-xs">
                <p><strong className="text-white">Onderneming:</strong> Agevo</p>
                <p><strong className="text-white">KvK-nummer:</strong> {siteConfig.kvk}</p>
                <p><strong className="text-white">E-mailadres:</strong> {siteConfig.email}</p>
                <p><strong className="text-white">Locatie:</strong> {siteConfig.location}</p>
              </div>
            </section>

            {/* Gegevensverzameling */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-400" />
                2. Welke gegevens verzamelen wij?
              </h2>
              <p>
                Wanneer je contact met ons opneemt of gebruikmaakt van onze diensten, kunnen wij de volgende persoonsgegevens verwerken die je zelf actief aan ons verstrekt:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
                <li>Voor- en achternaam</li>
                <li>Zakelijk of persoonlijk e-mailadres</li>
                <li>Bedrijfsnaam (optioneel)</li>
                <li>Indicatief budget of projecttype</li>
                <li>Inhoud van je bericht of projectaanvraag</li>
              </ul>
            </section>

            {/* Doeleinden & Grondslag */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                3. Doeleinden en grondslag van de verwerking
              </h2>
              <p>Wij verwerken deze persoonsgegevens uitsluitend voor:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
                <li>Het beantwoorden van je vraag of kennismakingsverzoek via onze website.</li>
                <li>Het voorbereiden en uitbrengen van een offerte op maat.</li>
                <li>De uitvoering van een overeenkomst tot software- en webdevelopment.</li>
                <li>Het voldoen aan wettelijke administratieve verplichtingen (zoals de fiscale bewaarplicht).</li>
              </ul>
              <p className="text-xs text-slate-400">
                Grondslag: De verwerking is noodzakelijk voor de behartiging van onze gerechtvaardigde belangen (communicatie met geïnteresseerden) of ter voorbereiding/uitvoering van een overeenkomst.
              </p>
            </section>

            {/* Bewaartermijn */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                4. Hoe lang bewaren we je gegevens?
              </h2>
              <p>
                Agevo bewaart je persoonsgegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren waarvoor je gegevens worden verzameld. Gegevens van contactaanvragen die niet tot een opdracht leiden, worden binnen 12 maanden na het laatste contactmoment verwijderd. Factuur- en administratiegegevens worden bewaard conform de wettelijke termijn van 7 jaar.
              </p>
            </section>

            {/* Delen met derden */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-400" />
                5. Delen van gegevens met derden
              </h2>
              <p>
                Wij verkopen jouw gegevens <strong>nooit</strong> aan derden. Wij delen persoonsgegevens uitsluitend met betrouwbare verwerkers indien dit noodzakelijk is voor onze bedrijfsvoering (zoals onze beveiligde cloudhosting provider Vercel en e-mailproviders). Met deze partijen zijn verwerkersovereenkomsten gesloten die voldoen aan de AVG-eisen. Data wordt opgeslagen binnen de Europese Economische Ruimte (EER) of onder adequate waarborgen (EU Standard Contractual Clauses).
              </p>
            </section>

            {/* Cookies */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                6. Cookies en tracking
              </h2>
              <p>
                Onze website maakt <strong>géén</strong> gebruik van tracking cookies, advertentienetwerken (zoals Meta Pixel of Google Ads remarketing) of privacy-inbreukmakende profilering. Wij gebruiken uitsluitend functionele technieken die noodzakelijk zijn voor een veilige en soepele werking van de website.
              </p>
            </section>

            {/* Beveiliging */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                7. Beveiliging van gegevens
              </h2>
              <p>
                Agevo neemt passende technische en organisatorische maatregelen om misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking tegen te gaan. Onze website en API-verbindingen maken gebruik van sterke TLS/SSL-versleuteling (HTTPS).
              </p>
            </section>

            {/* Rechten van betrokkenen */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                8. Jouw rechten
              </h2>
              <p>Onder de AVG heb je het recht om:</p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
                <li>Je persoonsgegevens in te zien;</li>
                <li>Je gegevens te laten corrigeren of aanvullen;</li>
                <li>Verwijdering van je gegevens te verzoeken (&quot;recht op vergetelheid&quot;);</li>
                <li>Bezwaar te maken tegen de verwerking van je gegevens;</li>
                <li>Gegevensoverdraagbaarheid aan te vragen.</li>
              </ul>
              <p className="pt-2">
                Je kunt een verzoek sturen naar{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-indigo-300 hover:underline font-semibold"
                >
                  {siteConfig.email}
                </a>
                . We reageren binnen vier weken op je verzoek. Mocht je niet tevreden zijn over de afhandeling, dan heb je het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
              </p>
            </section>
          </div>

          {/* Contact Box */}
          <div className="mt-14 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                Vragen over je privacy?
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Neem direct contact op via {siteConfig.email}. We helpen je graag verder.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shrink-0"
            >
              Stuur een e-mail
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
