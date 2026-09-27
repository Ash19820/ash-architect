"use client";

import React, { useState, useEffect } from "react";
import { studioInfo } from "@/data/studio";

export function PhilosophySection() {
  const [word, setWord] = useState("EXPERIENCE");

  useEffect(() => {
    const words = ["EXPERIENCE", "SPIRIT", "EMOTION", "ATMOSPHERE"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % words.length;
      setWord(words[i]);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-32 md:py-48 bg-[#060606] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#9BD4D7]/[0.025] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Label */}
        <span className="text-[11px] md:text-[12px] font-editorial-mono tracking-[0.3em] text-[#9BD4D7] uppercase mb-8">
          ( PRACTICE PHILOSOPHY )
        </span>

        {/* Display Heading with Changing Word */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-light uppercase tracking-[-0.03em] leading-[1.1] text-white max-w-5xl">
          EVERY PLACE HAS A DIFFERENT
          <br />
          <span className="font-extralight text-white/80">— ( </span>
          <span className="animated-gradient-text font-normal font-sans">
            {word}
          </span>
          <span className="font-extralight text-white/80"> )</span>
        </h2>

        {/* Big Editorial Quote with restrained tracking and opacity */}
        <div className="mt-14 md:mt-20 max-w-4xl">
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-extralight uppercase tracking-[0.04em] leading-[1.7] text-white/70">
            &ldquo;{studioInfo.philosophyStatement}&rdquo;
          </blockquote>
        </div>

        {/* Small architectural sign-off */}
        <div className="mt-12 flex items-center gap-3 text-[11px] font-editorial-mono tracking-[0.25em] text-white/30 uppercase">
          <span>ARUN ARCHITECTS</span>
          <span>//</span>
          <span>SPATIAL MANIFESTO</span>
        </div>
      </div>
    </section>
  );
}
