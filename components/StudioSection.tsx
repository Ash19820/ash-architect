"use client";

import React from "react";
import Image from "next/image";
import { studioInfo } from "@/data/studio";
import { ArrowUpRight } from "lucide-react";

export function StudioSection() {
  return (
    <section
      id="studio"
      className="relative w-full py-28 md:py-40 bg-[#060606] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center justify-between mb-16 md:mb-24 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-[12px] md:text-[13px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase">
              ( THE STUDIO )
            </span>
          </div>
          <span className="text-[11px] font-editorial-mono tracking-[0.2em] text-white/40 uppercase">
            EST. 2018 / INDIA
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Editorial Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.25] text-white tracking-[-0.02em]">
                {studioInfo.manifestoLead}
              </p>

              <div className="mt-10 md:mt-14 max-w-2xl">
                <p className="text-sm md:text-base font-editorial-mono leading-relaxed text-white/60 font-light">
                  {studioInfo.manifestoBody}
                </p>
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-white/[0.08]">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 text-xs md:text-sm font-editorial-mono tracking-[0.2em] uppercase text-white hover:text-[#9BD4D7] transition-colors"
              >
                <span>DIVE IN TO THE PRACTICE</span>
                <span className="p-1 rounded-full border border-white/20 group-hover:border-[#9BD4D7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Photography Collage */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/[0.02] group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="TOPE Architects Studio Space"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-110 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Monospace Architectural Tag overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-editorial-mono tracking-[0.2em] text-white/70">
                <span>ATELIER PERSPECTIVE</span>
                <span className="text-[#9BD4D7]">28°36&apos;N</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[11px] font-editorial-mono text-white/40 pt-2">
              <div>
                <span className="block text-white/70 font-medium">DISCIPLINE</span>
                <span>Architecture & Experiential</span>
              </div>
              <div>
                <span className="block text-white/70 font-medium">METHODOLOGY</span>
                <span>Tectonic Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
