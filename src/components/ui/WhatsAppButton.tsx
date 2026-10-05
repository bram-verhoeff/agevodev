"use client";

import { MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function WhatsAppButton() {
  return (
    <aside
      aria-label="Direct contact via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center group"
    >
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat direct met Bram via WhatsApp"
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-300/30 backdrop-blur-md"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] text-emerald-100 font-normal uppercase tracking-wider">
            Direct antwoord
          </span>
          <span className="text-xs sm:text-sm font-extrabold flex items-center gap-1">
            <span>App met Bram</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </a>
    </aside>
  );
}
