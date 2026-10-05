"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag?: string;
}

const faqs: FAQItem[] = [
  {
    id: "kosten",
    question: "Wat kost een website laten maken bij AgevoDev?",
    tag: "Transparante Prijzen",
    answer:
      "Ik werk met heldere, vaste tarieven zodat je vooraf exact weet waar je aan toe bent. Mijn **Portfolio Website** kost slechts **€30,- eenmalig** (ideaal als online cv of zzp-visitekaartje). Een complete, professionele **Bedrijfswebsite** met meerdere pagina's, Google SEO en maatwerk design kost gemiddeld tussen de **€850,- en €1.450,-**. Voor grotere webshops en maatwerk webapplicaties maak ik altijd een vrijblijvende offerte op maat. Geen verborgen kosten achteraf.",
  },
  {
    id: "portfolio-30",
    question: "Hoe werkt de Portfolio Website van €30,- precies?",
    tag: "Nieuw Product",
    answer:
      "Dit is mijn instapoplossing voor iedereen die een representatief online uithangbord zoekt zonder een groot budget. Je levert eenvoudig je gegevens aan (naam, bio, projecten, contactlinks en gewenste foto's). Ik bouw vervolgens een strakke, supersnelle en mobielvriendelijke one-page site — vergelijkbaar met **bramverhoeff.nl**. Binnen 24 tot 48 uur staat jouw site live!",
  },
  {
    id: "levertijd",
    question: "Hoe snel staat mijn website online?",
    tag: "Snelle Oplevering",
    answer:
      "Portfolio websites lever ik doorgaans binnen **24 tot 48 uur** op. Complete bedrijfswebsites staan gemiddeld binnen **1 tot 2 weken** live. Je krijgt al na een paar dagen een geheime testlink, zodat je direct op je telefoon kunt meekijken en kunt meedenken met de vormgeving.",
  },
  {
    id: "eigendom",
    question: "Ben ik 100% eigenaar van mijn website en domeinnaam?",
    tag: "100% Eigendom",
    answer:
      "Ja, zonder uitzondering. Ik geloof niet in wurgcontracten of gesloten systemen. De broncode, het domein (.nl of .com) en alle content zijn en blijven volledig jouw eigendom. Je zit nergens aan vast en kunt de site op elk moment verhuizen als je dat ooit zou willen.",
  },
  {
    id: "aanpassingen",
    question: "Wat als ik later iets wil aanpassen of hulp nodig heb?",
    tag: "Direct Contact",
    answer:
      "Geen trage ticket-systemen of anonieme helpdesks. Je hebt direct contact met mij via WhatsApp of e-mail. Wil je een telefoonnummer aanpassen, een nieuw project toevoegen of een tekstje wijzigen? Kleine wijzigingen los ik vaak dezelfde dag nog voor je op. Voor grotere uitbreidingen spreek ik vooraf altijd een vaste, eerlijke prijs met je af.",
  },
  {
    id: "techniek-tekst",
    question: "Moet ik zelf technische kennis hebben of teksten aanleveren?",
    tag: "Zonder Zorgen",
    answer:
      "Helemaal niets! Ik neem alle techniek uit handen: van hosting, beveiliging en snelle laadtijden tot een groen SSL-slotje en aanmelding bij Google. Heb je nog geen kant-en-klare teksten? Geen enkel probleem: vertel me in je eigen woorden wat je bedrijf doet, en ik maak er duidelijke, wervende teksten van.",
  },
  {
    id: "hosting-beheer",
    question: "Hoe zit het met hosting en technisch onderhoud?",
    tag: "Alles Geregeld",
    answer:
      "Ik kan de complete veilige hosting, dagelijkse back-ups en software-updates voor je verzorgen voor een bescheiden bedrag per maand. Zo hoef jij je nergens zorgen over te maken. Heb je al een eigen hostingpakket of wil je het liever zelf beheren? Dat kan ook gewoon; ik richt het dan kosteloos in op jouw eigen server.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("kosten");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-[#07090e] border-t border-white/5">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Veelgestelde Vragen
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Alles wat je wilt weten,{" "}
            <span className="glow-indigo-text">helder beantwoord</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Geen vage antwoorden of kleine lettertjes. Heb je nog een andere vraag? Stuur me gerust direct een WhatsAppje!
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#0c101d] border-indigo-500/40 shadow-xl shadow-indigo-500/5"
                    : "glass-panel border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-left">
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    {faq.tag && (
                      <span className="inline-flex self-start sm:self-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/[0.06] text-indigo-300 border border-white/10 whitespace-nowrap">
                        {faq.tag}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-indigo-600 text-white rotate-180"
                        : "bg-white/[0.05] text-slate-400 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 space-y-2">
                        {faq.answer.split("**").map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i} className="text-white font-semibold">
                              {part}
                            </strong>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel border border-emerald-500/30 bg-gradient-to-r from-emerald-950/20 via-[#0a0f1d] to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-4 h-4" />
              <span>Staat jouw vraag er niet tussen?</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Vraag het direct aan Bram via WhatsApp
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Meestal binnen 15 tot 30 minuten een eerlijk en duidelijk antwoord.
            </p>
          </div>

          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Direct WhatsAppen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
