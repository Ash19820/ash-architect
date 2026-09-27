"use client";

import React from "react";
import { HeroScene } from "./HeroScene";
import { HeroStatement } from "./HeroStatement";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#060606]">
      {/* Three.js 3D Sculptural Form */}
      <HeroScene />

      {/* Atmospheric Vignette & Grain Overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(6,6,6,0.85)_100%] pointer-events-none z-1" />

      {/* Central Editorial Statement */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <HeroStatement />
      </div>

      {/* Bottom Center Scroll Down Chevron Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 pointer-events-auto">
        <a
          href="#studio"
          aria-label="Scroll to Studio section"
          className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="text-[9px] font-editorial-mono uppercase tracking-[0.25em] text-white/40 group-hover:text-[#9BD4D7] transition-colors">
            EXPLORE
          </span>
          <div className="chevron-indicator flex flex-col items-center">
            <span />
            <span />
            <span />
          </div>
        </a>
      </div>

      {/* Bottom Left Architectural Metadata */}
      <div className="absolute bottom-10 left-6 md:left-12 z-10 hidden sm:flex items-center gap-3 text-[10px] font-editorial-mono tracking-[0.2em] text-white/40 uppercase">
        <span className="text-[#9BD4D7]">28.6139° N</span>
        <span>/</span>
        <span>77.2090° E</span>
        <span className="text-white/20">|</span>
        <span>IND</span>
      </div>

      {/* Bottom Right Minimal Social Indicators */}
      <div className="absolute bottom-10 right-6 md:right-16 z-10 hidden sm:flex items-center gap-5 text-[11px] font-editorial-mono tracking-[0.18em] text-white/50">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#9BD4D7] transition-colors"
        >
          IG
        </a>
        <span className="text-white/20">/</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#9BD4D7] transition-colors"
        >
          LI
        </a>
        <span className="text-white/20">/</span>
        <a
          href="https://archdaily.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#9BD4D7] transition-colors"
        >
          AD
        </a>
      </div>
    </section>
  );
}
