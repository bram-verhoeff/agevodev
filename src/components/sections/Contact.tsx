"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  MessageSquare,
  MessageCircle,
  Phone,
  ShieldCheck,
  Calendar,
  ArrowUpRight,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website Laten Maken",
    budget: "€1.500 - €3.000",
    message: "",
  });

  const [hasImportedIdea, setHasImportedIdea] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{
        projectType?: string;
        message?: string;
        company?: string;
        budget?: string;
      }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          projectType: customEvent.detail.projectType || prev.projectType,
          message: customEvent.detail.message || prev.message,
          company: customEvent.detail.company || prev.company,
          budget: customEvent.detail.budget || prev.budget,
        }));
        setHasImportedIdea(true);
      }
    };

    window.addEventListener("prefill-contact-form", handlePrefill);
    return () => {
      window.removeEventListener("prefill-contact-form", handlePrefill);
    };
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Vul je voor- en achternaam in.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Vul je e-mailadres in.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in (bijv. naam@bedrijf.nl).";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Vertel kort wat je wensen of ideeën zijn.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || "Er is een fout opgetreden bij het verzenden van je bericht."
        );
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Fout bij versturen van formulier:", err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Er is een probleem opgetreden. Je kunt me ook direct bereiken via WhatsApp of e-mail."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setHasImportedIdea(false);
    setSubmitError(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "Website Laten Maken",
      budget: "€1.500 - €3.000",
      message: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-grid-pattern">
      {/* Glow gradient backdrops */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Vrijblijvend Contact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Laten we jouw idee <span className="glow-indigo-text">werkelijkheid</span> maken.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Wil je een nieuwe website, heb je een vraag of wil je sparren over jouw idee? Stuur me gerust een berichtje of plan direct een online kennismaking in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Meeting Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <div>
                <Image
                  src="/logo.png"
                  alt="AgevoDev"
                  width={200}
                  height={60}
                  className="h-10 sm:h-11 w-auto object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Direct contact met Bram
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Geen keuzemenu&apos;s of trage ticket-systemen. Ik reageer snel, denk met je mee en geef eerlijk advies over wat het beste past bij jouw situatie.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mailadres</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Telefoon &amp; WhatsApp</div>
                    <a
                      href="tel:+31687082516"
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Snelle reactie</div>
                    <div className="text-sm font-semibold text-emerald-400">
                      Binnen 24 uur antwoord
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Werkgebied</div>
                    <div className="text-sm font-semibold text-white">
                      Heel Nederland (Online &amp; op afspraak)
                    </div>
                  </div>
                </div>
              </div>

              {/* Status callout */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-slate-300">
                  Momenteel ruimte voor 2 nieuwe projecten
                </span>
              </div>
            </div>

            {/* Online Agenda Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-blue-500/10 to-transparent border border-indigo-500/30 space-y-3 relative overflow-hidden group">
              <div className="flex items-center gap-2.5 text-indigo-300">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-white">Even 15 minuutjes videobellen?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plan direct een vrijblijvend online gesprekje in op een moment dat het jou uitkomt.
              </p>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-calendar-modal"));
                }}
                className="w-full mt-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group-hover:shadow-indigo-600/50 cursor-pointer"
              >
                <span>Kies een datum &amp; tijd</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 space-y-3 relative overflow-hidden group">
              <div className="flex items-center gap-2.5 text-emerald-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-semibold text-white">Direct appen met Bram?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Geen zin in een formulier? Stuur me een WhatsAppje met je vraag of idee en je krijgt binnen 30 minuten antwoord.
              </p>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group-hover:shadow-emerald-500/50"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Open WhatsApp chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* 100% Eigendom */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Eerlijke afspraken</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Alles wat ik bouw is 100% jouw eigendom. Geen kleine lettertjes, geen onnodige abonnementen.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl">
              {/* Notification if idea was imported from the generator */}
              {hasImportedIdea && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-xs text-emerald-200">
                    <strong className="text-white">Jouw gekozen concept is gekoppeld!</strong> Ik heb je branche en gewenste stijl automatisch in het bericht geplaatst.
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Jouw Naam *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          placeholder="bijv. Bram Verhoeff"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all ${
                            errors.name
                              ? "border-red-500 ring-1 ring-red-500"
                              : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="naam@bedrijf.nl"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all ${
                            errors.email
                              ? "border-red-500 ring-1 ring-red-500"
                              : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Bedrijfsnaam */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Bedrijfsnaam of Projectnaam (optioneel)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="bijv. De Koffiebar"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                      </div>

                      {/* Waar zoek je naar */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Waar kan ik je mee helpen?
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        >
                          <option value="Portfolio Website (€30,-)">Portfolio Website (Slechts €30,-)</option>
                          <option value="Website Laten Maken">Nieuwe Bedrijfswebsite Laten Maken</option>
                          <option value="Webshop / Bestelsysteem">Webshop of Bestelsysteem</option>
                          <option value="Eigen Software of Portaal">Eigen Software of Portaal (SaaS)</option>
                          <option value="Vrijblijvend Sparren">Vrijblijvend Kennismaken</option>
                        </select>
                      </div>
                    </div>

                    {/* Richtbudget */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Richtbudget (indicatief)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          "€30,- (Portfolio)",
                          "< €1.500",
                          "€1.500 - €3.000",
                          "€3.000+",
                        ].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 px-2 text-xs rounded-lg border transition-all text-center cursor-pointer ${
                              formData.budget === b
                                ? "bg-indigo-600/30 border-indigo-500 text-white font-semibold"
                                : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bericht */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Vertel kort over je wensen of idee *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Vertel in je eigen woorden wat je zoekt. Wat doet je bedrijf en wat wil je bereiken met de website?..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-all resize-none ${
                          errors.message
                            ? "border-red-500 ring-1 ring-red-500"
                            : "border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Error Callout */}
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-left">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-2">
                          <p className="text-xs text-red-200 leading-relaxed">
                            {submitError}
                          </p>
                          <a
                            href={`https://wa.me/31687082516?text=${encodeURIComponent(
                              `Hoi Bram, ik probeerde een aanvraag te versturen via je site:\nNaam: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nBericht: ${formData.message}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            <span>Stuur direct via WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 p-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Aanvraag versturen...</span>
                          </>
                        ) : (
                          <>
                            <span>Verstuur Mijn Aanvraag</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/10">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-white">
                        Aanvraag succesvol ontvangen!
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Bedankt, <strong className="text-white">{formData.name}</strong>. Ik heb je gegevens goed opgeslagen en stuur binnen 24 uur een persoonlijke reactie naar{" "}
                        <span className="text-indigo-300 font-medium">{formData.email}</span>.
                      </p>
                    </div>

                    {/* WhatsApp 1-Click Fast Forward Card */}
                    <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto text-left space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Directer schakelen?</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Heb je haast of wil je direct sparren? Stuur deze aanvraag met 1 klik door via WhatsApp, dan reageer ik vaak al binnen 30 minuten.
                      </p>
                      <a
                        href={`https://wa.me/31687082516?text=${encodeURIComponent(
                          `Hoi Bram, ik heb zojuist het formulier ingevuld op agevodev.nl:\n\n- Naam: ${formData.name}\n- E-mail: ${formData.email}\n- Bedrijf: ${formData.company || 'Geen'}\n- Project: ${formData.projectType}\n- Richtbudget: ${formData.budget}\n- Bericht: ${formData.message}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 group"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Open direct in WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        Nog een bericht of aanvraag sturen
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
