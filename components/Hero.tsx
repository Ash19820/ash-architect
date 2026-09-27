"use client";

import React from "react";
import { HeroLettersScene } from "./HeroLettersScene";
import { HeroStatement } from "./HeroStatement";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#060606]">
      {/* Three.js 3D Sculptural Letters Scene (A, R, U, N) */}
      <HeroLettersScene />

      {/* Atmospheric Vignette & Grain Overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(6,6,6,0.85)_100%] pointer-events-none z-1" />

      {/* Central Editorial Statement */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <HeroStatement />
      </div>

      {/* Bottom Center Scroll Down Chevron Indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 pointer-events-auto">
        <a
          href="#studio"
          aria-label="Scroll to Studio section"
          className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="text-[11px] md:text-xs font-editorial-mono uppercase tracking-[0.28em] text-white/50 group-hover:text-[#9BD4D7] transition-colors">
            EXPLORE
          </span>
          <div className="chevron-indicator flex flex-col items-center">
            <span />
            <span />
            <span />
          </div>
        </a>
      </div>

      {/* Bottom Left Architectural Location Metadata */}
      <div className="absolute bottom-9 left-6 md:left-12 z-10 hidden sm:flex items-center gap-3 text-xs md:text-sm font-editorial-mono tracking-[0.22em] text-white/50 uppercase">
        <span className="text-[#9BD4D7] font-medium">28.6139° N</span>
        <span>/</span>
        <span>77.2090° E</span>
        <span className="text-white/20">|</span>
        <span className="text-white/80">IND</span>
      </div>

      {/* Bottom Right Prominent Outlined Social Buttons */}
      <div className="absolute bottom-8 right-6 md:right-16 z-10 hidden sm:flex items-center gap-3">
        {/* Instagram Button */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-black/40 backdrop-blur-md hover:border-[#9BD4D7] hover:bg-white/[0.08] text-xs font-editorial-mono tracking-[0.2em] text-white/80 hover:text-white transition-all duration-300 shadow-md group"
          aria-label="Instagram"
        >
          <svg
            className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100 group-hover:text-[#9BD4D7] transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>IG</span>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-black/40 backdrop-blur-md hover:border-[#9BD4D7] hover:bg-white/[0.08] text-xs font-editorial-mono tracking-[0.2em] text-white/80 hover:text-white transition-all duration-300 shadow-md group"
          aria-label="LinkedIn"
        >
          <svg
            className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100 group-hover:text-[#9BD4D7] transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 9.74v-8.37H5.07v8.37h2.78z" />
          </svg>
          <span>LINKEDIN</span>
        </a>
      </div>
    </section>
  );
}
