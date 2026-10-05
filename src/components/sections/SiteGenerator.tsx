"use client";

import { useState, useRef, useEffect } from "react";
import {
  Monitor,
  Smartphone,
  Tablet,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Layout,
  SlidersHorizontal,
  Eye,
  Check,
  Calendar,
  ShieldCheck,
  Calculator,
  ChevronRight,
  Layers,
  Star,
  Flame,
  MessageCircle,
  Briefcase,
  FolderKanban,
  ListOrdered,
  Menu,
} from "lucide-react";
import {
  generateSiteFromPrompt,
  GeneratedSite,
  ActiveBlocksConfig,
  SAMPLE_PROMPTS,
  SITE_STYLES,
  SiteStyleConfig,
} from "@/lib/siteGeneratorEngine";

const AVAILABLE_BLOCKS: { id: keyof ActiveBlocksConfig; label: string; desc: string }[] = [
  { id: "calculator", label: "Tarieven-calculator", desc: "Interactieve live prijsberekening" },
  { id: "packages", label: "Prijzen & Pakketten", desc: "Pakketkeuze met populair badge" },
  { id: "portfolio", label: "Projecten Portfolio", desc: "Recente klussen met specificaties" },
  { id: "menu", label: "Diensten- of Menukaart", desc: "Tabbladen met prijzen & toelichting" },
  { id: "steps", label: "3-Stappen Werkwijze", desc: "Van aanvraag tot oplevering" },
  { id: "schedule", label: "Openingstijden & Afspraak", desc: "Weekrooster met openingstijden" },
  { id: "metrics", label: "Resultaatcijfers (KPI's)", desc: "Statistieken en ervaringscijfers" },
  { id: "certifications", label: "Keurmerken & Garanties", desc: "Kwaliteitszegels en voorwaarden" },
  { id: "reviews", label: "Klantbeoordelingen", desc: "Ervaringen van klanten uit de regio" },
];

export function SiteGenerator() {
  const [prompt, setPrompt] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [selectedStyleId, setSelectedStyleId] = useState<
    "zakelijk" | "warm" | "fris" | "stoer" | "luxe"
  >("zakelijk");
  const [generatedSite, setGeneratedSite] = useState<GeneratedSite | null>(null);
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Interactive states inside preview
  const [activeMenuTab, setActiveMenuTab] = useState(0);
  const [calculatorChecked, setCalculatorChecked] = useState<number[]>([0, 1]);
  const [calcTotal, setCalcTotal] = useState(250);

  const previewRef = useRef<HTMLDivElement>(null);

  // Helper to sum calculator
  const computeCalculatorSum = (
    options: { priceAdd: number }[],
    checkedIndices: number[]
  ) => {
    return checkedIndices.reduce((sum, idx) => sum + (options[idx]?.priceAdd || 0), 0);
  };

  // Initial demo site: Schildersbedrijf
  useEffect(() => {
    const initialPrompt =
      "Schildersbedrijf Van Leeuwen in Breda voor binnen- en buitenschilderwerk, met offertecalculator en recente projecten.";
    const initialSite = generateSiteFromPrompt(initialPrompt, "zakelijk", "Schildersbedrijf Van Leeuwen");
    setGeneratedSite(initialSite);
    setPrompt(initialPrompt);
    setSelectedStyleId("zakelijk");
    setCalculatorChecked([0, 1]);
    setCalcTotal(computeCalculatorSum(initialSite.calculatorOptions, [0, 1]));
  }, []);

  const handleGenerate = (
    customPromptText?: string,
    customStyleId?: "zakelijk" | "warm" | "fris" | "stoer" | "luxe"
  ) => {
    const textToUse = customPromptText || prompt;
    if (!textToUse.trim()) return;

    const styleIdToUse = customStyleId || selectedStyleId;
    const site = generateSiteFromPrompt(textToUse, styleIdToUse, businessName);
    setGeneratedSite(site);
    setSelectedStyleId(site.style.id);

    // Initialize calculator state with first 2 items
    const initialChecked = [0, 1];
    setCalculatorChecked(initialChecked);
    setCalcTotal(computeCalculatorSum(site.calculatorOptions, initialChecked));

    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSampleClick = (sample: (typeof SAMPLE_PROMPTS)[0]) => {
    setPrompt(sample.prompt);
    setSelectedStyleId(sample.styleId);
    handleGenerate(sample.prompt, sample.styleId);
  };

  const handleApplyStyle = (styleId: "zakelijk" | "warm" | "fris" | "stoer" | "luxe") => {
    setSelectedStyleId(styleId);
    const updatedSite = generateSiteFromPrompt(
      prompt || (generatedSite ? generatedSite.userPrompt : ""),
      styleId,
      businessName || (generatedSite ? generatedSite.businessName : ""),
      generatedSite ? generatedSite.activeBlocks : undefined
    );
    setGeneratedSite(updatedSite);
  };

  const toggleBlock = (blockId: keyof ActiveBlocksConfig) => {
    if (!generatedSite) return;
    const updatedBlocks = {
      ...generatedSite.activeBlocks,
      [blockId]: !generatedSite.activeBlocks[blockId],
    };
    setGeneratedSite({
      ...generatedSite,
      activeBlocks: updatedBlocks,
    });
  };

  const toggleCalculatorOption = (idx: number, priceAdd: number) => {
    if (!generatedSite) return;
    let nextChecked: number[];
    if (calculatorChecked.includes(idx)) {
      nextChecked = calculatorChecked.filter((i) => i !== idx);
    } else {
      nextChecked = [...calculatorChecked, idx];
    }
    setCalculatorChecked(nextChecked);
    setCalcTotal(computeCalculatorSum(generatedSite.calculatorOptions, nextChecked));
  };

  const handleTransferToContact = () => {
    if (!generatedSite) return;
    const activeBlockNames = AVAILABLE_BLOCKS
      .filter((b) => generatedSite.activeBlocks[b.id])
      .map((b) => b.label)
      .join(", ");

    const message = `Hoi AgevoDev! Ik heb in jullie website-tool een website concept gegenereerd voor: "${generatedSite.businessName}".

- Branche / Categorie: ${generatedSite.category}
- Regio: ${generatedSite.detectedCity}
- Gekozen website-stijl: ${generatedSite.style.name} (${generatedSite.style.tagline})
- Gewenste blokken op de pagina: ${activeBlockNames}
- Oorspronkelijke omschrijving: "${generatedSite.userPrompt}"

Ik wil graag sparren over de mogelijkheden en een vrijblijvende offerte ontvangen om dit als professionele maatwerk website te laten bouwen!`;

    window.dispatchEvent(
      new CustomEvent("prefill-contact-form", {
        detail: {
          projectType: "Website Laten Maken",
          message: message,
          company: generatedSite.businessName,
        },
      })
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Responsive device view flags for mockups
  const isMobileMockup = deviceView === "mobile";
  const isTabletMockup = deviceView === "tablet";
  const isDesktopMockup = deviceView === "desktop";

  return (
    <section id="generator" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
            <Layout className="w-3.5 h-3.5 text-indigo-400" />
            Website Concept &amp; Blokken Generator
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Typ wat voor bedrijf je hebt &amp; zie direct{" "}
            <span className="glow-indigo-text">jouw complete website</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-3 sm:mt-4 leading-relaxed font-normal">
            De generator analyseert direct je branche, stad en gewenste onderdelen. Geen vaste dummyteksten: van offertecalculator tot projecten en tarieven, alles wordt afgestemd op jouw bedrijf.
          </p>
        </div>

        {/* Builder Controls Box */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-7 lg:p-8 border border-white/15 shadow-2xl relative space-y-5 sm:space-y-6">
          {/* Step 1: Input prompt */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] shrink-0">1</span>
                <span>Wat voor bedrijf heb je of wat wil je aanbieden?</span>
              </label>
              <span className="text-slate-400 font-normal text-[11px]">
                Noem gerust je plaatsnaam en wensen
              </span>
            </div>
            <textarea
              rows={2}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Bijvoorbeeld: Schildersbedrijf Van Leeuwen in Breda voor binnen- en buitenschilderwerk, met offertecalculator en recente projecten..."
              className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-900/90 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm md:text-base focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none shadow-inner"
            />
          </div>

          {/* Quick Inspiration Buttons */}
          <div>
            <div className="text-[11px] sm:text-xs text-slate-400 mb-2 font-medium">
              Of klik op een voorbeeld om direct te zien hoe de blokken mee veranderen:
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {SAMPLE_PROMPTS.map((sample) => (
                <button
                  key={sample.label}
                  type="button"
                  onClick={() => handleSampleClick(sample)}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-slate-300 text-[11px] sm:text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  {sample.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: STYLE SELECTOR */}
          <div className="pt-3 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] shrink-0">2</span>
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Kies jouw visuele stijl:</span>
                </span>
              </label>
              <span className="text-[11px] text-slate-400">Past typografie, kleuren en sfeer aan</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
              {SITE_STYLES.map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => handleApplyStyle(st.id)}
                  className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    selectedStyleId === st.id
                      ? "bg-white/[0.12] border-white text-white shadow-md ring-1 ring-white/30"
                      : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <div
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black/20"
                      style={{ backgroundColor: st.accent }}
                    />
                    {selectedStyleId === st.id && (
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold tracking-tight">
                      {st.name}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {st.tagline}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: DYNAMIC BLOCKS SELECTOR */}
          {generatedSite && (
            <div className="pt-3 border-t border-white/10 space-y-2.5 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px] shrink-0">3</span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Pagina-blokken (aan/uit zetten):</span>
                  </span>
                </label>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                  <span>Gedetecteerd:</span>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold text-[10px] sm:text-[11px]">
                    {generatedSite.category}
                  </span>
                  <span>in <strong className="text-slate-200">{generatedSite.detectedCity}</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {AVAILABLE_BLOCKS.map((block) => {
                  const isActive = generatedSite.activeBlocks[block.id];
                  return (
                    <button
                      key={block.id}
                      type="button"
                      onClick={() => toggleBlock(block.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer min-h-[44px] ${
                        isActive
                          ? "bg-indigo-600/20 border-indigo-400/50 text-white"
                          : "bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/20 hover:text-slate-300"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-xs shrink-0 border ${
                        isActive ? "bg-indigo-600 border-indigo-400 text-white" : "border-slate-600 bg-slate-800"
                      }`}>
                        {isActive && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold truncate">{block.label}</div>
                        <div className="text-[10px] text-slate-400 line-clamp-1">{block.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
            <div className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-left">
              Klik op een blok hierboven om het live toe te voegen of te verwijderen uit het voorbeeld
            </div>

            <button
              type="button"
              onClick={() => handleGenerate()}
              disabled={!prompt.trim()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Eye className="w-4 h-4" />
              <span>Toon Aangepaste Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Website Preview Container */}
        {generatedSite && (
          <div ref={previewRef} className="mt-10 sm:mt-14 max-w-6xl mx-auto space-y-4 sm:space-y-6">
            {/* Top Toolbar with Live Style Switcher & Device Toggles */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl glass-panel border border-white/10">
              <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2">
                <span className="text-xs font-semibold text-slate-200">
                  Concept: <strong className="text-white">{generatedSite.businessName}</strong>
                </span>
                <span className="text-[11px] text-slate-400 hidden xs:inline">&bull; {generatedSite.category}</span>
                <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {Object.values(generatedSite.activeBlocks).filter(Boolean).length} blokken
                </span>
              </div>

              {/* LIVE STYLE SWITCHER */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs overflow-x-auto no-scrollbar max-w-full">
                <span className="text-[10px] text-slate-400 px-1.5 hidden lg:inline">Stijl:</span>
                {SITE_STYLES.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => handleApplyStyle(st.id)}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      generatedSite.style.id === st.id
                        ? "bg-white text-slate-900 font-bold shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>

              {/* Device switcher & Action */}
              <div className="flex items-center justify-between sm:justify-end gap-2 pt-1 md:pt-0 border-t md:border-t-0 border-white/10">
                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setDeviceView("desktop")}
                    aria-label="Desktop weergave"
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      deviceView === "desktop"
                        ? "bg-indigo-600 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceView("tablet")}
                    aria-label="Tablet weergave"
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      deviceView === "tablet"
                        ? "bg-indigo-600 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">Tablet</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceView("mobile")}
                    aria-label="Mobiele weergave"
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      deviceView === "mobile"
                        ? "bg-indigo-600 text-white shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">Mobiel</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleTransferToContact}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Bouw dit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Browser Mockup / Mobile Device Window */}
            <div className="flex justify-center w-full transition-all duration-300 overflow-x-hidden">
              <div
                className={`transition-all duration-300 ${
                  isDesktopMockup
                    ? "w-full rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl overflow-hidden"
                    : isTabletMockup
                    ? "w-full max-w-[768px] rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden"
                    : "w-full max-w-[390px] rounded-[44px] border-[10px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10"
                }`}
                style={{
                  backgroundColor: generatedSite.style.bgPage,
                  borderColor: isMobileMockup ? "#1e293b" : generatedSite.style.borderCard,
                }}
              >
                {/* Mobile Phone Dynamic Island Notch */}
                {isMobileMockup && (
                  <div className="pt-2.5 pb-1 flex justify-center bg-slate-950 sticky top-0 z-30">
                    <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-2 px-2 shadow-inner">
                      <div className="w-2 h-2 rounded-full bg-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-950" />
                    </div>
                  </div>
                )}

                {/* Browser Address Bar (Hidden on Mobile phone mockup for authentic feel) */}
                {!isMobileMockup && (
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-900 border-b border-white/10 text-xs text-white">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 rounded-full border border-white/10 text-[10px] sm:text-[11px] text-slate-300 flex-1 max-w-[240px] sm:max-w-md mx-2 justify-center truncate">
                      <span className="text-emerald-400 font-mono">https://</span>
                      <span className="text-white font-medium truncate">
                        www.{generatedSite.businessName.toLowerCase().replace(/[^a-z0-9]/g, "")}
                        .nl
                      </span>
                      <span className="text-emerald-400 text-[10px] hidden xs:inline">🔒</span>
                    </div>

                    <div className="text-[10px] text-slate-400 font-mono hidden sm:inline truncate">
                      {generatedSite.style.name}
                    </div>
                  </div>
                )}

                {/* ============================================================== */}
                {/* DYNAMIC SITE BODY: 100% RESPONSIVE CONTENT                      */}
                {/* ============================================================== */}
                <div
                  className="max-h-[700px] overflow-y-auto selection:bg-slate-300 selection:text-slate-900 text-xs sm:text-sm space-y-8 sm:space-y-12 pb-12 sm:pb-16"
                  style={{
                    backgroundColor: generatedSite.style.bgPage,
                    color: generatedSite.style.textPrimary,
                  }}
                >
                  {/* Top Bar Announcement */}
                  <div
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-center text-[10px] sm:text-xs font-medium border-b flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: generatedSite.style.badgeBg,
                      color: generatedSite.style.badgeText,
                      borderColor: generatedSite.style.badgeBorder,
                    }}
                  >
                    <span className="line-clamp-1">{generatedSite.announcement}</span>
                  </div>

                  {/* Header / Nav */}
                  <header
                    className="px-3.5 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b sticky top-0 z-20 backdrop-blur-md"
                    style={{
                      backgroundColor: generatedSite.style.navBg,
                      borderColor: generatedSite.style.navBorder,
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm shrink-0"
                        style={{
                          backgroundColor: generatedSite.style.buttonBg,
                          color: generatedSite.style.buttonText,
                        }}
                      >
                        {generatedSite.businessName.substring(0, 1)}
                      </div>
                      <span className="font-bold text-xs sm:text-base tracking-tight truncate max-w-[130px] sm:max-w-[220px] md:max-w-none">
                        {generatedSite.businessName}
                      </span>
                    </div>

                    {/* Desktop Navigation Links (Only shown on Desktop View) */}
                    {isDesktopMockup && (
                      <div
                        className="hidden lg:flex items-center gap-4 text-xs font-medium"
                        style={{ color: generatedSite.style.textSecondary }}
                      >
                        {generatedSite.activeBlocks.packages && <span>Pakketten</span>}
                        {generatedSite.activeBlocks.calculator && <span>Calculator</span>}
                        {generatedSite.activeBlocks.portfolio && <span>Projecten</span>}
                        {generatedSite.activeBlocks.menu && <span>Diensten</span>}
                        {generatedSite.activeBlocks.steps && <span>Werkwijze</span>}
                        {generatedSite.activeBlocks.schedule && <span>Openingstijden</span>}
                        <span>Contact</span>
                      </div>
                    )}

                    {/* Responsive CTA or Mobile Button */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold shadow-sm transition-transform hover:scale-105 shrink-0 truncate max-w-[110px] sm:max-w-none"
                        style={{
                          backgroundColor: generatedSite.style.buttonBg,
                          color: generatedSite.style.buttonText,
                        }}
                      >
                        {isMobileMockup ? "Offerte" : generatedSite.ctaPrimary}
                      </button>

                      {isMobileMockup && (
                        <div
                          className="p-1 rounded-md border"
                          style={{ borderColor: generatedSite.style.borderCard }}
                        >
                          <Menu className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                      )}
                    </div>
                  </header>

                  {/* ============================================================== */}
                  {/* BLOCK 1: HERO SECTION                                          */}
                  {/* ============================================================== */}
                  <div className="px-3.5 sm:px-6 max-w-5xl mx-auto">
                    {/* ZAKELIJK HERO */}
                    {generatedSite.style.id === "zakelijk" && (
                      <div className={`py-4 sm:py-6 items-center gap-6 ${isDesktopMockup ? "grid grid-cols-1 lg:grid-cols-12" : "flex flex-col"}`}>
                        <div className={`${isDesktopMockup ? "lg:col-span-7" : "w-full"} space-y-3 sm:space-y-4 text-left`}>
                          <div
                            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border"
                            style={{
                              backgroundColor: generatedSite.style.badgeBg,
                              borderColor: generatedSite.style.badgeBorder,
                              color: generatedSite.style.badgeText,
                            }}
                          >
                            <span>{generatedSite.category}</span>
                            <span>&bull;</span>
                            <span>{generatedSite.detectedCity}</span>
                          </div>

                          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                            {generatedSite.heroHeading}
                          </h1>

                          <p
                            className="text-xs sm:text-sm leading-relaxed"
                            style={{ color: generatedSite.style.textSecondary }}
                          >
                            {generatedSite.heroSubheading}
                          </p>

                          <div className="space-y-1.5 sm:space-y-2 pt-1 text-xs">
                            {generatedSite.heroBullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span className="text-[11px] sm:text-xs">{bullet}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                            <button
                              type="button"
                              className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs shadow text-center"
                              style={{
                                backgroundColor: generatedSite.style.buttonBg,
                                color: generatedSite.style.buttonText,
                              }}
                            >
                              {generatedSite.ctaPrimary}
                            </button>
                            <button
                              type="button"
                              className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-medium text-xs border text-center"
                              style={{
                                borderColor: generatedSite.style.borderCard,
                                backgroundColor: generatedSite.style.bgCard,
                              }}
                            >
                              {generatedSite.ctaSecondary}
                            </button>
                          </div>
                        </div>

                        {/* Right side contact widget */}
                        <div className={`${isDesktopMockup ? "lg:col-span-5" : "w-full"}`}>
                          <div
                            className="p-4 sm:p-5 rounded-2xl border shadow-md space-y-3"
                            style={{
                              backgroundColor: generatedSite.style.bgCard,
                              borderColor: generatedSite.style.borderCard,
                            }}
                          >
                            <div className="flex items-center gap-2 text-xs font-bold border-b pb-2">
                              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                              <span>Vrijblijvende intake &amp; offerte</span>
                            </div>
                            <p className="text-[11px] text-slate-500">
                              Direct telefonisch bereikbaar voor opdrachten in regio {generatedSite.detectedCity}.
                            </p>
                            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                              <div className="font-bold">{generatedSite.businessName}</div>
                              <div className="text-slate-500 flex items-center gap-1.5 text-[11px]">
                                <Phone className="w-3 h-3 text-blue-600 shrink-0" />
                                <span>{generatedSite.contactInfo.phone}</span>
                              </div>
                              <div className="text-slate-500 flex items-center gap-1.5 text-[11px]">
                                <MapPin className="w-3 h-3 text-blue-600 shrink-0" />
                                <span>{generatedSite.contactInfo.city}</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                              {generatedSite.trustStats.slice(0, 2).map((st, i) => (
                                <div key={i} className="p-2 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                                  <div className="font-black text-blue-600 text-xs sm:text-sm">{st.value}</div>
                                  <div className="text-[9px] sm:text-[10px] text-slate-500">{st.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* WARM HERO */}
                    {generatedSite.style.id === "warm" && (
                      <div className="text-center py-6 sm:py-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider inline-block"
                          style={{
                            backgroundColor: generatedSite.style.badgeBg,
                            color: generatedSite.style.badgeText,
                          }}
                        >
                          {generatedSite.category} &bull; {generatedSite.detectedCity}
                        </span>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                          {generatedSite.heroHeading}
                        </h1>

                        <p
                          className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                          style={{ color: generatedSite.style.textSecondary }}
                        >
                          {generatedSite.heroSubheading}
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs pt-1">
                          {generatedSite.heroBullets.map((b, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5">
                          <button
                            type="button"
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs shadow-md"
                            style={{
                              backgroundColor: generatedSite.style.buttonBg,
                              color: generatedSite.style.buttonText,
                            }}
                          >
                            {generatedSite.ctaPrimary}
                          </button>
                          <button
                            type="button"
                            className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-semibold text-xs border"
                            style={{
                              borderColor: generatedSite.style.borderCard,
                              backgroundColor: generatedSite.style.bgCard,
                            }}
                          >
                            {generatedSite.ctaSecondary}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* FRIS HERO */}
                    {generatedSite.style.id === "fris" && (
                      <div className="py-6 sm:py-10 max-w-4xl mx-auto space-y-4 sm:space-y-5 text-center">
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold border"
                          style={{
                            backgroundColor: generatedSite.style.badgeBg,
                            borderColor: generatedSite.style.badgeBorder,
                            color: generatedSite.style.badgeText,
                          }}
                        >
                          <span>🌱 {generatedSite.category}</span>
                          <span>&bull;</span>
                          <span>{generatedSite.detectedCity}</span>
                        </div>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-green-950 dark:text-green-200 leading-tight">
                          {generatedSite.heroHeading}
                        </h1>

                        <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
                          {generatedSite.heroSubheading}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
                          {generatedSite.trustStats.map((st, i) => (
                            <div
                              key={i}
                              className="p-2.5 sm:p-3 rounded-xl border bg-white/70 dark:bg-stone-900/60 shadow-sm text-center"
                              style={{ borderColor: generatedSite.style.borderCard }}
                            >
                              <div className="text-xs sm:text-base font-bold text-green-700 truncate">{st.value}</div>
                              <div className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 truncate">{st.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5">
                          <button
                            type="button"
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs shadow-md"
                            style={{
                              backgroundColor: generatedSite.style.buttonBg,
                              color: generatedSite.style.buttonText,
                            }}
                          >
                            {generatedSite.ctaPrimary}
                          </button>
                          <button
                            type="button"
                            className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-semibold text-xs border"
                            style={{
                              borderColor: generatedSite.style.borderCard,
                              backgroundColor: generatedSite.style.bgCard,
                            }}
                          >
                            {generatedSite.ctaSecondary}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STOER HERO */}
                    {generatedSite.style.id === "stoer" && (
                      <div className="py-6 sm:py-10 max-w-4xl mx-auto space-y-4 sm:space-y-6 text-center text-slate-100">
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold border uppercase tracking-wider"
                          style={{
                            backgroundColor: generatedSite.style.badgeBg,
                            borderColor: generatedSite.style.badgeBorder,
                            color: generatedSite.style.badgeText,
                          }}
                        >
                          <Flame className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{generatedSite.category} &bull; {generatedSite.detectedCity}</span>
                        </div>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
                          {generatedSite.heroHeading}
                        </h1>

                        <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
                          {generatedSite.heroSubheading}
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5">
                          <button
                            type="button"
                            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl font-extrabold text-xs shadow-lg uppercase tracking-wider"
                            style={{
                              backgroundColor: generatedSite.style.buttonBg,
                              color: generatedSite.style.buttonText,
                            }}
                          >
                            {generatedSite.ctaPrimary}
                          </button>
                          <button
                            type="button"
                            className="w-full sm:w-auto px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs border flex items-center justify-center gap-2"
                            style={{
                              borderColor: generatedSite.style.borderCard,
                              backgroundColor: generatedSite.style.bgCard,
                            }}
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>WhatsApp Contact</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* LUXE HERO */}
                    {generatedSite.style.id === "luxe" && (
                      <div className="py-8 sm:py-12 max-w-3xl mx-auto text-center space-y-4 sm:space-y-5 text-stone-100">
                        <span
                          className="px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase border inline-block"
                          style={{
                            backgroundColor: generatedSite.style.badgeBg,
                            borderColor: generatedSite.style.badgeBorder,
                            color: generatedSite.style.badgeText,
                          }}
                        >
                          {generatedSite.category} &bull; {generatedSite.detectedCity}
                        </span>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light tracking-wide leading-tight">
                          {generatedSite.heroHeading}
                        </h1>

                        <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed font-light">
                          {generatedSite.heroSubheading}
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2.5">
                          <button
                            type="button"
                            className="w-full sm:w-auto px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase shadow"
                            style={{
                              backgroundColor: generatedSite.style.buttonBg,
                              color: generatedSite.style.buttonText,
                            }}
                          >
                            {generatedSite.ctaPrimary}
                          </button>
                          <button
                            type="button"
                            className="w-full sm:w-auto px-5 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase border"
                            style={{
                              borderColor: generatedSite.style.borderCard,
                              backgroundColor: generatedSite.style.bgCard,
                            }}
                          >
                            {generatedSite.ctaSecondary}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ============================================================== */}
                  {/* BLOCK 2: DYNAMIC TARIEVEN CALCULATOR                           */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.calculator && (
                    <div className="px-3.5 sm:px-6 max-w-5xl mx-auto">
                      <div
                        className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border shadow-lg space-y-4 sm:space-y-5"
                        style={{
                          backgroundColor: generatedSite.style.bgCard,
                          borderColor: generatedSite.style.borderCard,
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b pb-3" style={{ borderColor: generatedSite.style.borderCard }}>
                          <div>
                            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-500 mb-0.5">
                              <Calculator className="w-3.5 h-3.5" />
                              <span>Interactieve Calculator</span>
                            </div>
                            <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                              Bereken richtprijs voor {generatedSite.businessName}
                            </h3>
                          </div>
                          <span className="text-[11px] text-slate-500">
                            Vink je wensen aan &bull; Live prijs
                          </span>
                        </div>

                        <div className={`grid gap-2 sm:gap-3 text-xs ${isDesktopMockup ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                          {generatedSite.calculatorOptions.map((opt, idx) => (
                            <label
                              key={idx}
                              onClick={() => toggleCalculatorOption(idx, opt.priceAdd)}
                              className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl border cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                              style={{ borderColor: generatedSite.style.borderCard }}
                            >
                              <div className="flex items-center gap-2 min-w-0 flex-1 pr-2">
                                <input
                                  type="checkbox"
                                  readOnly
                                  checked={calculatorChecked.includes(idx)}
                                  className="rounded text-indigo-600 cursor-pointer shrink-0"
                                />
                                <span className="font-medium text-xs break-words">{opt.title}</span>
                              </div>
                              <span
                                className="font-bold text-xs shrink-0 pl-1"
                                style={{ color: generatedSite.style.accentText }}
                              >
                                +€{opt.priceAdd},-
                              </span>
                            </label>
                          ))}
                        </div>

                        {/* Total calculation bar */}
                        <div
                          className="pt-3 sm:pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
                          style={{ borderColor: generatedSite.style.borderCard }}
                        >
                          <div>
                            <div className="text-[11px] text-slate-500">Berekende richtprijs:</div>
                            <div
                              className="text-xl sm:text-3xl font-black"
                              style={{ color: generatedSite.style.accentText }}
                            >
                              €{calcTotal},-{" "}
                              <span className="text-xs font-normal text-slate-500">
                                (indicatief incl. btw)
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2"
                            style={{
                              backgroundColor: generatedSite.style.buttonBg,
                              color: generatedSite.style.buttonText,
                            }}
                          >
                            <span>Offerte Voor Deze Selectie Aanvragen</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 3: PAKKETTEN & PRIJZEN                                   */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.packages && (
                    <div className="px-3.5 sm:px-6 max-w-5xl mx-auto space-y-4 sm:space-y-6">
                      <div className="text-center max-w-xl mx-auto">
                        <h3 className="text-lg sm:text-2xl font-bold">
                          Transparante pakketten &amp; tarieven
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Vaste prijzen voor {generatedSite.businessName} in {generatedSite.detectedCity}.
                        </p>
                      </div>

                      <div className={`grid gap-4 ${isDesktopMockup ? "grid-cols-1 md:grid-cols-3" : isTabletMockup ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                        {generatedSite.pricingPackages.map((pkg, i) => (
                          <div
                            key={i}
                            className={`p-4 sm:p-5 rounded-2xl border flex flex-col justify-between shadow-sm relative ${
                              pkg.isPopular ? "ring-2 shadow-md" : ""
                            }`}
                            style={{
                              backgroundColor: generatedSite.style.bgCard,
                              borderColor: pkg.isPopular ? generatedSite.style.accent : generatedSite.style.borderCard,
                            }}
                          >
                            {pkg.isPopular && (
                              <span
                                className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow whitespace-nowrap"
                                style={{ backgroundColor: generatedSite.style.buttonBg }}
                              >
                                {pkg.period.toUpperCase()}
                              </span>
                            )}
                            <div className="space-y-2.5">
                              <div>
                                <h4 className="text-sm sm:text-base font-bold">{pkg.name}</h4>
                                <p className="text-xs text-slate-500 mt-0.5">{pkg.description}</p>
                              </div>
                              <div className="flex items-baseline gap-1">
                                <span
                                  className="text-2xl sm:text-3xl font-extrabold"
                                  style={{ color: generatedSite.style.accentText }}
                                >
                                  {pkg.price}
                                </span>
                                <span className="text-xs text-slate-500">/{pkg.period}</span>
                              </div>
                              <div
                                className="space-y-1.5 pt-2 text-xs border-t"
                                style={{ borderColor: generatedSite.style.borderCard }}
                              >
                                {pkg.features.map((feat, fIdx) => (
                                  <div key={fIdx} className="flex items-start gap-2">
                                    <Check
                                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                                      style={{ color: generatedSite.style.accentText }}
                                    />
                                    <span className="text-[11px] sm:text-xs">{feat}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <button
                              type="button"
                              className="w-full mt-4 py-2.5 rounded-xl text-xs font-bold border transition-colors shadow-sm"
                              style={{
                                backgroundColor: pkg.isPopular ? generatedSite.style.buttonBg : "transparent",
                                color: pkg.isPopular ? generatedSite.style.buttonText : generatedSite.style.textPrimary,
                                borderColor: generatedSite.style.borderCard,
                              }}
                            >
                              Kies {pkg.name}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 4: PROJECTEN & PORTFOLIO                                 */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.portfolio && (
                    <div className="px-3.5 sm:px-6 max-w-5xl mx-auto space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1">
                        <div>
                          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-500 mb-0.5">
                            <FolderKanban className="w-3.5 h-3.5" />
                            <span>Gerealiseerd Werk</span>
                          </div>
                          <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                            Recente projecten in {generatedSite.detectedCity}
                          </h3>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          Bewezen vakkennis &bull; Tevreden klanten
                        </span>
                      </div>

                      <div className={`grid gap-3 sm:gap-4 ${isDesktopMockup ? "grid-cols-1 md:grid-cols-3" : isTabletMockup ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                        {generatedSite.portfolioProjects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="rounded-2xl border overflow-hidden shadow-sm flex flex-col justify-between"
                            style={{
                              backgroundColor: generatedSite.style.bgCard,
                              borderColor: generatedSite.style.borderCard,
                            }}
                          >
                            <div className="h-28 sm:h-32 bg-slate-800/10 dark:bg-slate-800/50 flex items-center justify-center p-3 border-b text-center" style={{ borderColor: generatedSite.style.borderCard }}>
                              <div className="space-y-1">
                                <span
                                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                                  style={{
                                    backgroundColor: generatedSite.style.badgeBg,
                                    color: generatedSite.style.badgeText,
                                  }}
                                >
                                  {proj.category}
                                </span>
                                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                  {proj.specs}
                                </div>
                              </div>
                            </div>

                            <div className="p-3.5 sm:p-4 space-y-1.5">
                              <h4 className="text-xs sm:text-sm font-bold">{proj.title}</h4>
                              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                                {proj.description}
                              </p>
                            </div>

                            <div className="p-3.5 sm:p-4 pt-0">
                              <span className="text-[11px] font-semibold text-indigo-500 hover:underline flex items-center gap-1 cursor-pointer">
                                <span>Bekijk fotoserie</span>
                                <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 5: DIENSTEN- OF MENUKAART MET TABS                       */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.menu && (
                    <div className="px-3.5 sm:px-6 max-w-4xl mx-auto space-y-4 sm:space-y-6">
                      <div className="text-center max-w-xl mx-auto">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                          Diensten &amp; Assortiment
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Bekijk onze actuele kaart en behandelmogelijkheden
                        </p>
                      </div>

                      {/* Tab buttons with clean horizontal scroll on mobile */}
                      <div className="flex items-center justify-start sm:justify-center gap-1.5 border-b pb-2 overflow-x-auto no-scrollbar max-w-full px-1">
                        {generatedSite.menuCategories.map((cat, cIdx) => (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() => setActiveMenuTab(cIdx)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                              activeMenuTab === cIdx
                                ? "shadow text-white"
                                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                            }`}
                            style={{
                              backgroundColor: activeMenuTab === cIdx ? generatedSite.style.buttonBg : "transparent",
                            }}
                          >
                            {cat.category}
                          </button>
                        ))}
                      </div>

                      {/* Tab items */}
                      <div
                        className="p-4 sm:p-6 rounded-2xl border divide-y shadow-sm"
                        style={{
                          backgroundColor: generatedSite.style.bgCard,
                          borderColor: generatedSite.style.borderCard,
                        }}
                      >
                        {generatedSite.menuCategories[activeMenuTab]?.items.map((item, iIdx) => (
                          <div key={iIdx} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-3">
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-xs">{item.name}</span>
                                {item.isSpecial && (
                                  <span
                                    className="px-1.5 py-0.5 rounded text-[9px] font-bold"
                                    style={{
                                      backgroundColor: generatedSite.style.badgeBg,
                                      color: generatedSite.style.badgeText,
                                    }}
                                  >
                                    Populair
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] sm:text-xs text-slate-500">{item.desc}</p>
                            </div>
                            <span
                              className="font-bold text-xs shrink-0 pl-1"
                              style={{ color: generatedSite.style.accentText }}
                            >
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 6: 3-STAPPEN WERKWIJZE                                   */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.steps && (
                    <div className="px-3.5 sm:px-6 max-w-5xl mx-auto space-y-4 sm:space-y-6">
                      <div className="text-center max-w-xl mx-auto">
                        <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-500 mb-0.5">
                          <ListOrdered className="w-3.5 h-3.5" />
                          <span>Zo werken wij</span>
                        </div>
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                          Van eerste contact tot perfecte oplevering
                        </h3>
                      </div>

                      <div className={`grid gap-3 sm:gap-4 ${isDesktopMockup ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"}`}>
                        {generatedSite.projectSteps.map((step) => (
                          <div
                            key={step.step}
                            className="p-4 sm:p-5 rounded-2xl border shadow-sm space-y-1.5 relative"
                            style={{
                              backgroundColor: generatedSite.style.bgCard,
                              borderColor: generatedSite.style.borderCard,
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs"
                                style={{
                                  backgroundColor: generatedSite.style.badgeBg,
                                  color: generatedSite.style.badgeText,
                                }}
                              >
                                {step.step}
                              </div>
                              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400">
                                {step.duration}
                              </span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold pt-1">{step.title}</h4>
                            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 7: OPENINGSTIJDEN & AFSPRAAK ROOSTER                     */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.schedule && (
                    <div className="px-3.5 sm:px-6 max-w-4xl mx-auto space-y-4 sm:space-y-6">
                      <div className="text-center max-w-xl mx-auto">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                          Openingstijden &amp; Bereikbaarheid
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Kom langs in {generatedSite.detectedCity} of plan jouw afspraak vooraf
                        </p>
                      </div>

                      <div
                        className="p-4 sm:p-5 rounded-2xl border divide-y shadow-sm"
                        style={{
                          backgroundColor: generatedSite.style.bgCard,
                          borderColor: generatedSite.style.borderCard,
                        }}
                      >
                        {generatedSite.weeklySchedule.map((item, sIdx) => (
                          <div key={sIdx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs gap-2">
                            <span className="font-semibold shrink-0 text-xs">{item.day}</span>
                            <div className="flex items-center gap-2 text-right">
                              <span className="font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">{item.hours}</span>
                              {item.note && (
                                <span
                                  className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold"
                                  style={{
                                    backgroundColor: generatedSite.style.badgeBg,
                                    color: generatedSite.style.badgeText,
                                  }}
                                >
                                  {item.note}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 8: GROTE RESULTAATCIJFERS / METRICS                      */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.metrics && (
                    <div className="px-3.5 sm:px-6 max-w-5xl mx-auto">
                      <div className={`grid gap-2.5 sm:gap-3 ${isDesktopMockup ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"}`}>
                        {generatedSite.metricsGrid.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 sm:p-5 rounded-2xl border shadow-sm text-center"
                            style={{
                              backgroundColor: generatedSite.style.bgCard,
                              borderColor: generatedSite.style.borderCard,
                            }}
                          >
                            <div
                              className="text-lg sm:text-2xl lg:text-3xl font-black truncate"
                              style={{ color: generatedSite.style.accentText }}
                            >
                              {m.bigNumber}
                            </div>
                            <div className="text-[11px] sm:text-xs font-bold mt-0.5 truncate">{m.label}</div>
                            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">{m.subtext}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 9: KEURMERKEN & GARANTIES                                */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.certifications && (
                    <div className="px-3.5 sm:px-6 max-w-5xl mx-auto">
                      <div
                        className={`p-4 sm:p-5 rounded-2xl border gap-3 sm:gap-4 ${isDesktopMockup ? "grid grid-cols-1 md:grid-cols-3" : "grid grid-cols-1"}`}
                        style={{
                          backgroundColor: generatedSite.style.bgCard,
                          borderColor: generatedSite.style.borderCard,
                        }}
                      >
                        {generatedSite.corporateCertifications.map((cert, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2.5">
                            <ShieldCheck
                              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5"
                              style={{ color: generatedSite.style.accentText }}
                            />
                            <div>
                              <div className="text-xs font-bold">{cert.title}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5">{cert.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* BLOCK 10: KLANTBEOORDELINGEN / REVIEWS                         */}
                  {/* ============================================================== */}
                  {generatedSite.activeBlocks.reviews && (
                    <div className="px-3.5 sm:px-6 max-w-4xl mx-auto space-y-4 sm:space-y-6">
                      <div className="text-center max-w-xl mx-auto">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                          Wat klanten over {generatedSite.businessName} zeggen
                        </h3>
                        <div className="flex items-center justify-center gap-1 text-amber-500 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                          <span className="text-xs font-bold text-slate-500 ml-1">4.9 / 5</span>
                        </div>
                      </div>

                      <div className={`grid gap-3 sm:gap-4 ${isDesktopMockup ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                        {generatedSite.testimonials.map((rev, rIdx) => (
                          <div
                            key={rIdx}
                            className="p-4 sm:p-5 rounded-2xl border shadow-sm space-y-2.5"
                            style={{
                              backgroundColor: generatedSite.style.bgCard,
                              borderColor: generatedSite.style.borderCard,
                            }}
                          >
                            <div className="flex items-center gap-1 text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                              ))}
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                              &ldquo;{rev.comment}&rdquo;
                            </p>
                            <div className="text-[11px] pt-1 border-t" style={{ borderColor: generatedSite.style.borderCard }}>
                              <span className="font-bold">{rev.name}</span>
                              <span className="text-slate-400"> &bull; {rev.role}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================== */}
                  {/* CONTACT & SLA CLOSING BANNER                                   */}
                  {/* ============================================================== */}
                  <div className="px-3.5 sm:px-6 max-w-5xl mx-auto">
                    <div
                      className="p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left"
                      style={{
                        backgroundColor: generatedSite.style.bgCard,
                        borderColor: generatedSite.style.borderCard,
                      }}
                    >
                      <div className="space-y-1">
                        <div className="text-xs sm:text-base font-bold">
                          Direct kennismaken met {generatedSite.businessName}?
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-500">
                          {generatedSite.contactInfo.city} &bull; Bel: {generatedSite.contactInfo.phone}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleTransferToContact}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 cursor-pointer shrink-0"
                        style={{
                          backgroundColor: generatedSite.style.buttonBg,
                          color: generatedSite.style.buttonText,
                        }}
                      >
                        <span>Laat Deze Website Voor Jou Bouwen</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile phone bottom home indicator */}
                  {isMobileMockup && (
                    <div className="pt-2 pb-1 flex justify-center">
                      <div className="w-28 h-1 bg-slate-400/40 rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
