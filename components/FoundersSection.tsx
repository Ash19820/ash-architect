"use client";

import React, { useState } from "react";
import Image from "next/image";
import { studioInfo } from "@/data/studio";
import { ArrowUpRight } from "lucide-react";

export function FoundersSection() {
  const [hovered, setHovered] = useState(false);
  const founder = studioInfo.founders[0];

  return (
    <section
      id="leadership"
      className="relative w-full py-28 md:py-40 bg-[#060606] border-t border-white/[0.06]"
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <span className="text-[12px] md:text-[13px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase block mb-3">
              ( LEADERSHIP )
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white uppercase tracking-tight">
              ROOTED IN (VISION)
            </h2>
          </div>
          <p className="text-xs md:text-sm font-editorial-mono text-white/50 max-w-md leading-relaxed tracking-[0.05em]">
            At the core, visionary leadership shapes every space — balancing bold sculptural ideas with grounded architectural precision.
          </p>
        </div>

        {/* Editorial Single Architect Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-6">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative aspect-[3/4] w-full max-w-lg mx-auto lg:mx-0 overflow-hidden bg-white/[0.02] border border-white/[0.08]"
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale contrast-115 brightness-95 group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-editorial-mono tracking-[0.2em] text-white/80">
                <span>{founder.specialty}</span>
                <span className="text-[#9BD4D7]">PRINCIPAL // 01</span>
              </div>
            </div>
          </div>

          {/* Editorial Discourse Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-[#9BD4D7] text-[10px] font-editorial-mono tracking-[0.2em] uppercase mb-6">
                FOUNDER & PRINCIPAL ARCHITECT
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white uppercase tracking-tight">
                {founder.name}
                <span className="text-lg font-editorial-mono text-[#9BD4D7] ml-3 inline-block transition-transform duration-300 hover:rotate-90">
                  (+)
                </span>
              </h3>

              <div className="mt-8 border-l-2 border-[#9BD4D7]/60 pl-6 my-8">
                <blockquote className="text-lg sm:text-xl font-light italic leading-relaxed text-white/90">
                  &ldquo;Architectural form must never merely occupy space. It must awaken human consciousness through light, raw materiality, and poetic rhythm.&rdquo;
                </blockquote>
              </div>

              <p className="text-xs md:text-sm font-editorial-mono text-white/60 leading-relaxed font-light mt-6 max-w-xl">
                {founder.bio} With deep inquiry into spatial phenomenology and contemporary structural engineering, {founder.name} oversees every commission from early envelope morphology to tactile fitout details.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center gap-6">
              <a
                href={founder.social}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs font-editorial-mono tracking-[0.2em] uppercase text-white/80 hover:text-[#9BD4D7] transition-colors"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
