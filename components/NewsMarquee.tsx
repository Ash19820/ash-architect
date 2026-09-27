"use client";

import React from "react";
import { awardsList } from "@/data/studio";
import { ArrowUpRight } from "lucide-react";

export function NewsMarquee() {
  // Duplicate awards list for seamless infinite loop
  const marqueeItems = [...awardsList, ...awardsList, ...awardsList];

  return (
    <section
      id="news"
      className="relative w-full py-28 md:py-36 bg-[#060606] border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <span className="text-[12px] md:text-[13px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase">
            ( NEWS & RECOGNITION )
          </span>
          <span className="text-[11px] font-editorial-mono tracking-[0.2em] text-white/40 uppercase">
            GLOBAL ACCOLADES
          </span>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative w-full overflow-hidden flex select-none py-4">
        {/* Subtle Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#060606] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#060606] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-stretch gap-6 md:gap-8 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[340px] sm:w-[420px] p-6 md:p-8 bg-white/[0.02] border border-white/[0.08] hover:border-[#9BD4D7]/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-editorial-mono tracking-[0.2em] text-white/40 mb-4">
                  <span>{item.date}</span>
                  <span className="px-2 py-0.5 border border-[#9BD4D7]/40 text-[#9BD4D7] uppercase text-[9px]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-light text-white uppercase tracking-tight group-hover:text-[#9BD4D7] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs font-editorial-mono text-white/50 tracking-wider">
                  {item.project} — {item.organization}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-editorial-mono text-white/40 uppercase tracking-[0.15em] group-hover:text-white transition-colors">
                <span>{item.location}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
