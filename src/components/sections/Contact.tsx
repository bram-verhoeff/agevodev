"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Building2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "SaaS & MVP Ontwikkeling",
    budget: "€5.000 - €15.000",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Vul je naam in.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Vul je e-mailadres in.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Geef een korte toelichting op je project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Toelichting moet minimaal 10 tekens bevatten.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate async API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "SaaS & MVP Ontwikkeling",
      budget: "€5.000 - €15.000",
      message: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-grid-pattern">
      {/* Glow gradient backdrops */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Neem Contact Op
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Laten we iets <span className="glow-indigo-text">buitengewoons</span> bouwen.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Heb je een concreet SaaS-concept, wil je een maatwerk webapplicatie laten ontwikkelen of sparren over AI-automatisering? Vertel ons over je plannen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Value props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <div>
                <Image
                  src="/logo.png"
                  alt="AgevoDev Software Development"
                  width={200}
                  height={60}
                  className="h-10 sm:h-11 w-auto object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Directe verbinding met Agevo
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Geen trage ticket-systemen. Wij reageren snel, denken proactief mee en leveren eerlijk technisch advies.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct e-mailen</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Gegarandeerde responstijd</div>
                    <div className="text-sm font-semibold text-emerald-400">
                      Binnen 24 uur inhoudelijke reactie
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Locatie &amp; Werkgebied</div>
                    <div className="text-sm font-semibold text-white">
                      Nederland (Landelijk &amp; Remote)
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
                  Momenteel capaciteit voor 1 nieuw maatwerktraject
                </span>
              </div>
            </div>

            {/* Micro FAQ / Trust Badge */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span>Geheimhouding &amp; Eigendom</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Alle broncode, datamodellen en intellectueel eigendom worden 100% volledig jouw eigendom. Wij tekenen desgewenst vooraf een NDA.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl">
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
                          Naam *
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
                      {/* Company (Optional) */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Bedrijfsnaam (optioneel)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="bijv. Agevo B.V."
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Type project
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        >
                          <option value="SaaS & MVP Ontwikkeling">SaaS &amp; MVP Ontwikkeling</option>
                          <option value="Maatwerk Webapplicatie">Maatwerk Webplatform (Next.js)</option>
                          <option value="AI & Automatisering">AI &amp; Automatisering</option>
                          <option value="Vrijblijvend Kennismakingsgesprek">Vrijblijvend Gesprek</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget indication */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Indicatief investeringskader
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          "< €5.000",
                          "€5.000 - €15.000",
                          "€15.000 - €30.000",
                          "€30.000+",
                        ].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 px-2 text-xs rounded-lg border transition-all text-center ${
                              formData.budget === b
                                ? "bg-indigo-600/30 border-indigo-500 text-white font-medium"
                                : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Projectdetails of vraagstuk *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: "" });
                        }}
                        placeholder="Beschrijf je idee, doelgroep of bestaande uitdaging. Hoe specifieker, hoe gerichter we kunnen meedenken..."
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-600 p-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Versturen...</span>
                          </>
                        ) : (
                          <>
                            <span>Verstuur Projectaanvraag</span>
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
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/10">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-white">
                      Aanvraag succesvol ontvangen!
                    </h3>

                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Bedankt, <strong className="text-white">{formData.name}</strong>. We hebben
                      je aanvraag over <span className="text-indigo-300 font-medium">{formData.projectType}</span> in goede orde ontvangen. We sturen binnen 24 uur een reactie naar{" "}
                      <span className="text-indigo-300 font-medium">{formData.email}</span>.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium text-white transition-colors"
                      >
                        Nog een bericht sturen
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
