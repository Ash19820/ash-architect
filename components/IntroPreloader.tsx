"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroPreloaderProps {
  onComplete?: () => void;
}

// Characters in the logo: Λ R U N .
const LETTERS = [
  {
    char: "Λ",
    // Scattered starting offset across viewport
    scatter: { x: "-36vw", y: "-8vh", rotate: -12, scale: 0.95 },
    delay: 0.08,
  },
  {
    char: "R",
    scatter: { x: "-18vw", y: "22vh", rotate: 12, scale: 0.9 },
    delay: 0.16,
  },
  {
    char: "U",
    scatter: { x: "6vw", y: "-24vh", rotate: -8, scale: 0.95 },
    delay: 0.12,
  },
  {
    char: "N",
    scatter: { x: "28vw", y: "20vh", rotate: 15, scale: 0.9 },
    delay: 0.22,
  },
  {
    char: ".",
    scatter: { x: "36vw", y: "-26vh", rotate: 0, scale: 1.1 },
    delay: 0.28,
    isDot: true,
  },
];

export function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  // 'scattered' -> 'converging' -> 'assembled' -> 'exit' -> 'done'
  const [stage, setStage] = useState<"scattered" | "converging" | "assembled" | "exit" | "done">("scattered");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Timeline orchestration
    // 1. Show scattered letters
    const convergeTimer = setTimeout(() => {
      setStage("converging");
    }, 1100);

    // 2. Letters snap into center logo
    const assembledTimer = setTimeout(() => {
      setStage("assembled");
    }, 2200);

    // 3. Begin curtain dissolve exit
    const exitTimer = setTimeout(() => {
      setStage("exit");
    }, 2900);

    // 4. Complete and unmount
    const doneTimer = setTimeout(() => {
      setStage("done");
      if (onComplete) onComplete();
    }, 3600);

    return () => {
      clearTimeout(convergeTimer);
      clearTimeout(assembledTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage("done");
    if (onComplete) onComplete();
  };

  if (!mounted || stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-preloader"
        initial={{ opacity: 1 }}
          animate={{
            opacity: stage === "exit" ? 0 : 1,
            scale: stage === "exit" ? 1.04 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#060606] overflow-hidden select-none pointer-events-auto"
        >
          {/* Subtle architectural grid lines in background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem]" />
          </div>

          {/* Top Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 md:top-8 md:right-12 z-20 text-[10px] font-editorial-mono tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors py-2 px-3 focus:outline-none"
          >
            [ SKIP ]
          </button>

          {/* Main Logo Container */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-baseline tracking-[0.18em]">
              {LETTERS.map((item, index) => {
                const isScatter = stage === "scattered";

                return (
                  <motion.span
                    key={index}
                    initial={{
                      x: item.scatter.x,
                      y: item.scatter.y,
                      rotate: item.scatter.rotate,
                      scale: item.scatter.scale,
                      opacity: 0,
                    }}
                    animate={
                      isScatter
                        ? {
                            x: item.scatter.x,
                            y: item.scatter.y,
                            rotate: item.scatter.rotate,
                            scale: item.scatter.scale,
                            opacity: 1,
                          }
                        : {
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 1,
                            opacity: 1,
                          }
                    }
                    transition={
                      isScatter
                        ? {
                            duration: 0.9,
                            delay: item.delay,
                            ease: "easeOut",
                          }
                        : {
                            duration: 1.0,
                            delay: index * 0.04,
                            ease: [0.16, 1, 0.3, 1], // snappy architectural bezier
                          }
                    }
                    className={`inline-block font-sans font-light select-none ${
                      item.isDot
                        ? "text-3xl md:text-5xl lg:text-7xl text-[#9BD4D7] ml-0.5"
                        : "text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
                    } ${
                      stage === "assembled"
                        ? "drop-shadow-[0_0_24px_rgba(155,212,215,0.18)]"
                        : ""
                    }`}
                  >
                    {item.char}
                  </motion.span>
                );
              })}
            </div>
          </div>

          {/* Bottom subtle status caption */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center text-[10px] font-editorial-mono tracking-[0.25em] uppercase text-white/30">
            <span>
              {stage === "scattered"
                ? "SPATIAL DISCOURSE // 2026"
                : stage === "converging"
                ? "ASSEMBLING ATELIER"
                : "ARUN ARCHITECTS // READY"}
            </span>
          </div>
        </motion.div>
    </AnimatePresence>
  );
}
