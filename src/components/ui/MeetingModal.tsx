"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, Clock, Sparkles, Send } from "lucide-react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MeetingModal({ isOpen, onClose }: MeetingModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "SaaS & Webapplicatie Maatwerk",
    timeframe: "Binnen 1-2 weken",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
    }, 700);
  };

  const handleReset = () => {
    setStep("form");
    setFormData({
      name: "",
      email: "",
      topic: "SaaS & Webapplicatie Maatwerk",
      timeframe: "Binnen 1-2 weken",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-2xl glass-panel p-6 sm:p-8 text-white shadow-2xl z-10 overflow-hidden border border-white/10"
          >
            {/* Top glowing ambient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Sluit venster"
            >
              <X className="w-5 h-5" />
            </button>

            {step === "form" ? (
              <div>
                <div className="mb-4">
                  <Image
                    src="/logo.png"
                    alt="AgevoDev Software Development"
                    width={180}
                    height={54}
                    className="h-10 sm:h-11 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  Direct Schakelen
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Vrijblijvende Kennismaking
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Bespreek je SaaS-idee, webapplicatie of automatiseringsvraagstuk direct met onze senior developers. Binnen 24 uur reactie.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="bijv. Bram Verhoeff"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Zakelijk e-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jouw@bedrijf.nl"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Onderwerp
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500 transition-all"
                      >
                        <option value="SaaS & Webapplicatie Maatwerk">SaaS / Web Maatwerk</option>
                        <option value="AI & Automatisering">AI & Automatisering</option>
                        <option value="Samenwerking / Venture">Venture Investering / Samenwerking</option>
                        <option value="Overig">Oriënterend Gesprek</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Gewenste termijn
                      </label>
                      <select
                        value={formData.timeframe}
                        onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500 transition-all"
                      >
                        <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                        <option value="Binnen 1-2 weken">Binnen 1-2 weken</option>
                        <option value="Binnen een maand">Binnen een maand</option>
                        <option value="Oriënterend">Later dit kwartaal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Korte toelichting (optioneel)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschrijf in het kort waar we je mee kunnen helpen..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all disabled:opacity-50"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Versturen...</span>
                          </>
                        ) : (
                          <>
                            <span>Kennismakingsverzoek Versturen</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      Reactie en voorstel binnen 24 uur per e-mail
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Bedankt voor je aanvraag!
                </h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  We hebben je gegevens ontvangen. Een van onze tech leads neemt binnen 24 uur contact met je op via <span className="text-indigo-300 font-medium">{formData.email}</span> om een geschikte datum en tijd af te stemmen.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-sm font-medium text-white transition-colors"
                  >
                    Sluiten
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
