"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { MeetingModal } from "@/components/ui/MeetingModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center group transition-transform hover:opacity-95">
            <Image
              src="/logo.png"
              alt="AgevoDev Software Development"
              width={220}
              height={66}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/[0.06] flex items-center gap-1.5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs lg:text-sm font-semibold rounded-full group bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-blue-600 hover:text-white text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0a0d18] rounded-full group-hover:bg-opacity-0 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors" />
                <span>Kennismaking plannen</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-full shadow-md"
            >
              Contact
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 space-y-3">
            <nav className="flex flex-col space-y-1">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                <span>Kennismaking plannen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Modal */}
      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
