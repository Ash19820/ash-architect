"use client";

import React, { useState } from "react";

export function SideTab() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 select-none hidden lg:block"
      aria-label="Recognition & Awards Accent"
    >
      <a
        href="#news"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex flex-col items-center justify-between bg-[#9BD4D7] text-black w-[48px] h-[168px] py-4 transition-all duration-300 ease-out hover:w-[56px] shadow-2xl hover:shadow-[0_0_30px_rgba(155,212,215,0.4)]"
      >
        {/* Subtle Top Geometric Notch */}
        <div className="w-1.5 h-1.5 rounded-full bg-black/80" />

        {/* Vertical Text */}
        <div className="flex-1 flex items-center justify-center">
          <span
            className="text-[10px] md:text-[11px] font-editorial-mono font-medium tracking-[0.25em] text-black uppercase transition-transform duration-300"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            HONORS 2024
          </span>
        </div>

        {/* Bottom Indicator Mark */}
        <div className="flex flex-col items-center gap-1">
          <span className="w-3 h-[1.5px] bg-black/70 group-hover:w-4 transition-all duration-300" />
          <span className="text-[9px] font-editorial-mono font-bold">iF</span>
        </div>

        {/* Floating Tooltip Label on Hover */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0a0a0c] border border-white/10 text-white text-[10px] font-editorial-mono tracking-[0.16em] uppercase whitespace-nowrap pointer-events-none transition-all duration-200 ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          VIEW ACCOLADES & AWARDS
        </div>
      </a>
    </aside>
  );
}
