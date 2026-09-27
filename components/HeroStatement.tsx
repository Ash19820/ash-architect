"use client";

import React, { useState, useEffect } from "react";

const WORDS = [
  "FUTURE",
  "EXPERIENCE",
  "OFFICE",
  "ART",
  "LIFESTYLE",
  "DESIGN",
  "LIVING",
];

export function HeroStatement() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullWord = WORDS[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentFullWord) {
      // Pause at full word before backspacing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? 40 : 90;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentFullWord.substring(0, prev.length - 1)
            : currentFullWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="flex flex-col items-center justify-center text-center select-none z-10 px-4 sm:px-8 md:px-12 w-full max-w-5xl">
      {/* Small top editorial eyebrow */}
      <div className="mb-4 inline-flex items-center gap-2.5 sm:gap-3">
        <span className="h-[1px] w-4 sm:w-6 bg-white/20" />
        <span className="text-[9px] sm:text-[11px] md:text-[12px] font-editorial-mono tracking-[0.28em] uppercase text-white/50">
          STUDIO PRACTICE & ARCHITECTURAL DISCOURSE
        </span>
        <span className="h-[1px] w-4 sm:w-6 bg-white/20" />
      </div>

      {/* Main Massive Editorial Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[82px] font-light tracking-[-0.04em] uppercase leading-[1.08] text-white">
        MORE THAN SPACE
        <br />
        <span className="font-extralight text-white/90">— IT’S </span>
        <span className="inline-block relative">
          <span className="font-editorial-mono text-[#9BD4D7]/70 font-light text-2xl sm:text-4xl md:text-5xl lg:text-[72px] mr-0.5 sm:mr-1">
            [
          </span>
          <span className="animated-gradient-text font-normal font-sans">
            {displayedText}
          </span>
          <span className="inline-block w-[2px] h-[0.75em] bg-[#9BD4D7] ml-1 sm:ml-1.5 animate-pulse align-middle" />
          <span className="font-editorial-mono text-[#9BD4D7]/70 font-light text-2xl sm:text-4xl md:text-5xl lg:text-[72px] ml-0.5 sm:ml-1">
            ]
          </span>
        </span>
      </h1>

      {/* Supporting Editorial Monospace Note */}
      <p className="mt-6 sm:mt-8 max-w-lg md:max-w-xl text-[11px] sm:text-xs md:text-sm font-editorial-mono tracking-[0.14em] text-white/50 uppercase leading-relaxed font-light">
        We do not build hollow volumes. We calibrate light, materiality, and human emotion into living spaces.
      </p>
    </div>
  );
}
