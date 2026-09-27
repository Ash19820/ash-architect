"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onOpenContact?: () => void;
}

export function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#060606] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Monospace Indicator */}
        <span className="text-[11px] md:text-[12px] font-editorial-mono tracking-[0.3em] text-[#9BD4D7] uppercase mb-8">
          ( COMMISSION & COLLABORATION )
        </span>

        {/* Massive Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[84px] font-light uppercase tracking-[-0.04em] leading-[1.05] text-white max-w-5xl">
          START CREATING PLACES THAT
          <br />
          <span className="font-extralight text-white/80">PEOPLE DIVE INTO </span>
          <span className="animated-gradient-text font-normal">
            NEW HORIZONS
          </span>
        </h2>

        {/* Action Button */}
        <div className="mt-14 md:mt-20">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black hover:bg-[#9BD4D7] transition-all duration-300 text-xs sm:text-sm font-editorial-mono tracking-[0.25em] uppercase font-medium shadow-2xl hover:shadow-[0_0_35px_rgba(155,212,215,0.4)]"
          >
            <span>TALK NEW PROJECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
