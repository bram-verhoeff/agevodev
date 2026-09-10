import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, FileText, CheckCircle2, ShieldAlert, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Agevo",
  description:
    "De algemene leverings- en dienstenvoorwaarden van Agevo (KvK: 42160840) voor softwareontwikkeling, webapplicaties en digitale platformen.",
};

export default function VoorwaardenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" />
              Algemene Voorwaarden
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Algemene Voorwaarden Agevo
            </h1>
            <p className="text-sm text-slate-400">
              Versie: Maart 2026 &bull; Handelsregister KvK:{" "}
              <span className="text-slate-200 font-mono">{siteConfig.kvk}</span> &bull; E-mail:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-indigo-300 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* Legal Articles */}
          <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
            {/* Artikel 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Artikel 1. Definities
              </h2>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-400">
                <li>
                  <strong className="text-white">Agevo:</strong> De gebruiker van deze algemene voorwaarden, ingeschreven bij de Kamer van Koophandel onder nummer {siteConfig.kvk}.
                </li>
                <li>
                  <strong className="text-white">Opdrachtgever:</strong> De natuurlijke persoon of rechtspersoon die met Agevo een overeenkomst aangaat of aan wie Agevo een offerte heeft uitgebracht.
                </li>
                <li>
                  <strong className="text-white">Diensten / Werkzaamheden:</strong> Alle door Agevo ten behoeve van de opdrachtgever verrichte werkzaamheden, waaronder (maar niet beperkt tot) softwareontwikkeling, webapplicatie-ontwikkeling, API-integraties, cloud-architectuur, AI-koppelingen en consultancy.
                </li>
                <li>
                  <strong className="text-white">Overeenkomst:</strong> Iedere afspraak tussen Agevo en opdrachtgever tot het verrichten van werkzaamheden.
                </li>
              </ul>
            </section>

            {/* Artikel 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Artikel 2. Toepasselijkheid
              </h2>
              <p>
                1. Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden en overeenkomsten tussen Agevo en opdrachtgever, tenzij uitdrukkelijk en schriftelijk anders is overeengekomen.
              </p>
              <p>
                2. Eventuele inkoop- of andere voorwaarden van de opdrachtgever worden uitdrukkelijk van de hand gewezen.
              </p>
            </section>

            {/* Artikel 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Artikel 3. Offertes en Totstandkoming
              </h2>
              <p>
                1. Alle offertes en prijsopgaven van Agevo zijn vrijblijvend en hebben een geldigheidsduur van 30 dagen, tenzij in de offerte anders is vermeld.
              </p>
              <p>
                2. Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte schriftelijk (of per e-mail) bevestigt, of doordat Agevo aanvangt met de uitvoering van de werkzaamheden met instemming van de opdrachtgever.
              </p>
            </section>

            {/* Artikel 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Artikel 4. Uitvoering van de Overeenkomst
              </h2>
              <p>
                1. Agevo zal de werkzaamheden naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren (inspanningsverplichting).
              </p>
              <p>
                2. Overeengekomen oplevertermijnen gelden als richttermijnen en nimmer als fatale termijnen, tenzij uitdrukkelijk schriftelijk als fatale termijn overeengekomen.
              </p>
              <p>
                3. De opdrachtgever draagt er zorg voor dat alle gegevens, documenten en toegangscodes die Agevo redelijkerwijs nodig heeft voor een tijdige uitvoering, tijdig en deugdelijk worden verstrekt.
              </p>
            </section>

            {/* Artikel 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Artikel 5. Intellectueel Eigendom &amp; Broncode
              </h2>
              <p>
                1. Tenzij schriftelijk anders overeengekomen, berusten alle intellectuele eigendomsrechten op vooraf bestaande tools, softwarelibraries en frameworks (zoals open-source dependencies) bij Agevo of derden.
              </p>
              <p>
                2. Voor zover de werkzaamheden bestaan uit specifiek voor de opdrachtgever ontwikkeld maatwerk (custom software, unieke designs en specifieke bedrijfscodering), worden de intellectuele eigendomsrechten op de opgeleverde maatwerkcode aan de opdrachtgever overgedragen{" "}
                <strong className="text-white">
                  na volledige betaling van alle overeengekomen facturen
                </strong>
                .
              </p>
              <p>
                3. Het staat Agevo te allen tijde vrij de bij de uitvoering opgedane algemene kennis, ervaring en niet-vertrouwelijke generieke codeertechnieken voor andere doeleinden te benutten.
              </p>
            </section>

            {/* Artikel 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Artikel 6. Prijzen en Betalingsvoorwaarden
              </h2>
              <p>
                1. Alle door Agevo vermelde tarieven zijn in euro&apos;s en exclusief omzetbelasting (btw) en eventuele bijkomende kosten van derden (zoals domeinregistraties, externe API-abonnementen of specifieke cloudhosting), tenzij expliciet anders aangegeven.
              </p>
              <p>
                2. Facturen dienen te worden voldaan binnen 14 dagen na factuurdatum, tenzij op de factuur een andere betalingstermijn is vermeld.
              </p>
              <p>
                3. Bij projecten met een looptijd van meer dan twee weken is Agevo gerechtigd te werken met aanbetalingen of milestone-facturatie.
              </p>
            </section>

            {/* Artikel 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                Artikel 7. Aansprakelijkheid
              </h2>
              <p>
                1. De totale aansprakelijkheid van Agevo wegens een toerekenbare tekortkoming in de nakoming van de overeenkomst is beperkt tot vergoeding van directe schade tot maximaal het bedrag van de voor die specifieke opdracht overeengekomen prijs (excl. btw).
              </p>
              <p>
                2. Aansprakelijkheid van Agevo voor indirecte schade, daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen, verlies van data of schade door bedrijfsstagnatie, is te allen tijde uitgesloten.
              </p>
              <p>
                3. Agevo is niet aansprakelijk voor schade veroorzaakt door storingen of downtime van ingeschakelde derde partijen (zoals clouddiensten, API-aanbieders of hostingproviders).
              </p>
            </section>

            {/* Artikel 8 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Artikel 8. Geheimhouding (Confidentiality)
              </h2>
              <p>
                Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van hun overeenkomst van elkaar of uit andere bron hebben verkregen. Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie.
              </p>
            </section>

            {/* Artikel 9 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Artikel 9. Toepasselijk recht en Geschillen
              </h2>
              <p>
                1. Op alle rechtsbetrekkingen waarbij Agevo partij is, is uitsluitend het Nederlands recht van toepassing.
              </p>
              <p>
                2. Geschillen die tussen Agevo en opdrachtgever ontstaan, zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in het arrondissement waar Agevo is gevestigd, tenzij dwingend recht anders voorschrijft.
              </p>
            </section>
          </div>

          {/* Bottom Card */}
          <div className="mt-14 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                Vragen over onze voorwaarden of een custom NDA?
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Wij voorzien desgewenst in een wederzijdse geheimhoudingsovereenkomst (NDA) voorafgaand aan je project.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors shrink-0"
            >
              Contact opnemen
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
