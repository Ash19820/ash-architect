"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { studioInfo } from "@/data/studio";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function MenuOverlay({ isOpen, onClose, onOpenContact }: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { num: "01", label: "SELECTED WORKS", href: "#projects" },
    { num: "02", label: "THE STUDIO", href: "#studio" },
    { num: "03", label: "DISCIPLINES & SERVICES", href: "#services" },
    { num: "04", label: "HONORS & NEWS", href: "#news" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#060606]/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-14 animate-in fade-in duration-300 select-none"
    >
      {/* Top Header inside Overlay */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <span className="font-editorial-mono text-sm tracking-[0.3em] text-white">
            ARUN ARCHITECTS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#9BD4D7]" />
        </div>

        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none p-2"
          aria-label="Close menu"
        >
          <span className="text-[11px] font-editorial-mono tracking-[0.2em] uppercase">
            CLOSE
          </span>
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Big Links List */}
      <div className="max-w-4xl mx-auto w-full my-auto py-12">
        <nav className="flex flex-col gap-6 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.num}
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline justify-between border-b border-white/[0.06] pb-4 transition-all duration-300 hover:border-[#9BD4D7]"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xs md:text-sm font-editorial-mono text-[#9BD4D7]/70">
                  {link.num}
                </span>
                <span className="text-2xl sm:text-4xl md:text-5xl font-light text-white uppercase tracking-tight group-hover:text-[#9BD4D7] group-hover:translate-x-2 transition-all duration-300">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#9BD4D7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          ))}

          {/* Contact trigger link */}
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="group flex items-baseline justify-between border-b border-white/[0.06] pb-4 text-left transition-all duration-300 hover:border-[#9BD4D7]"
          >
            <div className="flex items-baseline gap-6">
              <span className="text-xs md:text-sm font-editorial-mono text-[#9BD4D7]/70">
                05
              </span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-light text-white uppercase tracking-tight group-hover:text-[#9BD4D7] group-hover:translate-x-2 transition-all duration-300">
                INITIATE COMMISSION
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#9BD4D7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </nav>
      </div>

      {/* Overlay Footer Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] text-[11px] font-editorial-mono text-white/50 uppercase tracking-[0.18em]">
        <div>
          <span className="text-white/30 block mb-1">HEADQUARTERS</span>
          <span className="text-white/80">{studioInfo.location}</span>
        </div>
        <div>
          <span className="text-white/30 block mb-1">INQUIRIES</span>
          <span className="text-white/80">{studioInfo.emailGeneral}</span>
        </div>
        <div className="text-left md:text-right">
          <span className="text-[#9BD4D7]">EXPLORATION OF SPACE & HUMAN EXPERIENCE</span>
        </div>
      </div>
    </div>
  );
}
