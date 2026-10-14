"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar as CalendarIcon,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Video,
  AlertCircle,
} from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { siteConfig } from "@/data/siteConfig";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "calendar" | "form";
}

export function MeetingModal({
  isOpen,
  onClose,
  defaultTab = "calendar",
}: MeetingModalProps) {
  const [activeTab, setActiveTab] = useState<"calendar" | "form">(defaultTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [calLoaded, setCalLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Bedrijfswebsite / Webshop",
    timeframe: "Binnen 1-2 weken",
    message: "",
  });

  const calLink = (siteConfig.calLink || "agevo/15min")
    .replace(/^https?:\/\/(www\.)?cal\.com\//, "")
    .replace(/^\/+/, "");

  const fullCalUrl = `https://cal.com/${calLink}`;

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, defaultTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    let mounted = true;
    (async function initCal() {
      try {
        const cal = await getCalApi();
        if (cal && mounted) {
          cal("ui", {
            theme: "dark",
            styles: {
              branding: { brandColor: "#6366f1" },
            },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
          setCalLoaded(true);
        }
      } catch (err) {
        console.error("Fout bij laden Cal.com embed:", err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.topic,
          budget: `Termijn: ${formData.timeframe}`,
          message: formData.message || `Aanvraag via Modal (${formData.topic} - ${formData.timeframe})`,
        }),
      });

      if (!response.ok) {
        throw new Error("Verzenden mislukt.");
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Kon bericht niet automatisch versturen. Stuur direct een appje of mail naar info@agevodev.nl."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: "",
      email: "",
      topic: "Bedrijfswebsite / Webshop",
      timeframe: "Binnen 1-2 weken",
      message: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-4xl h-[90vh] max-h-[780px] rounded-2xl glass-panel text-white shadow-2xl z-10 flex flex-col overflow-hidden border border-white/10"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent z-20" />

            {/* Modal Header */}
            <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 bg-[#0a0e1c]/80 backdrop-blur-lg z-10">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="AgevoDev Software Development"
                  width={140}
                  height={42}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <div className="hidden sm:block h-5 w-[1px] bg-white/10" />
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-indigo-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Vrijblijvend adviesgesprek met Bram</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("calendar")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${activeTab === "calendar"
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>Direct Inplannen</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("form")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${activeTab === "form"
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "text-slate-400 hover:text-white"
                      }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Bericht Sturen</span>
                  </button>
                </div>

                <a
                  href={fullCalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open agenda in apart venster"
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors hidden md:flex items-center justify-center border border-transparent hover:border-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 cursor-pointer"
                  aria-label="Sluit venster"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto relative bg-[#07090e]/60">
              {activeTab === "calendar" ? (
                <div className="h-full flex flex-col">
                  <div className="px-5 sm:px-8 py-3 bg-indigo-500/10 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>
                        Kies hieronder direct een datum en tijdstip voor een korte online kennismaking (15 min).
                      </span>
                    </div>
                    <a
                      href={fullCalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-300 hover:text-white font-medium underline underline-offset-2 ml-auto"
                    >
                      Open in nieuw tabblad
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex-1 min-h-[480px] w-full relative">
                    {!calLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400">
                        <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                        <span className="text-xs">Agenda inladen...</span>
                      </div>
                    )}
                    <Cal
                      namespace={calLink}
                      calLink={calLink}
                      style={{ width: "100%", height: "100%", overflow: "auto" }}
                      config={{ layout: "month_view", theme: "dark" }}
                    />
                  </div>

                  <div className="px-6 py-3 border-t border-white/5 bg-[#0a0e1c]/60 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% vrijblijvend • KvK: {siteConfig.kvk}</span>
                    </div>
                    <span>
                      Liever direct mailen?{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-indigo-300 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 max-w-xl mx-auto h-full flex flex-col justify-center">
                  {!isSubmitted ? (
                    <div>
                      <div className="mb-5 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5">
                          Stuur Bram direct een bericht
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Laat je gegevens en wensen achter, dan neem ik binnen 24 uur persoonlijk contact met je op.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                              Jouw Naam *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="Jan de Vries"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                              E-mailadres *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="naam@bedrijf.nl"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                              Onderwerp
                            </label>
                            <select
                              value={formData.topic}
                              onChange={(e) =>
                                setFormData({ ...formData, topic: e.target.value })
                              }
                              className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500 transition-all"
                            >
                              <option value="Bedrijfswebsite / Webshop">
                                Bedrijfswebsite / Webshop
                              </option>
                              <option value="SaaS & Webapplicatie Maatwerk">
                                SaaS & Webapplicatie Maatwerk
                              </option>
                              <option value="AI & GoHighLevel Automatisering">
                                AI & GoHighLevel Automatisering
                              </option>
                              <option value="Starter Portfolio (€30,-)">
                                Starter Portfolio (€30,-)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                              Gewenste termijn
                            </label>
                            <select
                              value={formData.timeframe}
                              onChange={(e) =>
                                setFormData({ ...formData, timeframe: e.target.value })
                              }
                              className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:outline-none focus:border-indigo-500 transition-all"
                            >
                              <option value="Zo snel mogelijk">Zo snel mogelijk</option>
                              <option value="Binnen 1-2 weken">Binnen 1-2 weken</option>
                              <option value="Binnen een maand">Binnen een maand</option>
                              <option value="Oriënterend">Oriënterend</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Korte toelichting *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Vertel kort waar ik je mee kan helpen..."
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                          />
                        </div>

                        {submitError && (
                          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-300">
                            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                            <span>{submitError}</span>
                          </div>
                        )}

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all disabled:opacity-50 cursor-pointer"
                          >
                            <div className="flex items-center justify-center gap-2">
                              {isSubmitting ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  <span>Versturen...</span>
                                </>
                              ) : (
                                <>
                                  <span>Aanvraag Versturen</span>
                                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                              )}
                            </div>
                          </button>
                          <p className="text-[11px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1.5">
                            <Clock className="w-3 h-3 text-emerald-400" />
                            Reactie binnen 24 uur
                          </p>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Bericht succesvol ontvangen!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                        Bedankt <strong className="text-white">{formData.name}</strong>! Ik neem binnen 24 uur contact met je op via{" "}
                        <span className="text-indigo-300 font-medium">
                          {formData.email}
                        </span>
                        .
                      </p>
                      <div className="pt-4 flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium text-white transition-colors cursor-pointer"
                        >
                          Sluiten
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}