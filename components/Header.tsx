"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ClockWidget = dynamic(
  () => import("./ClockWidget").then((mod) => mod.ClockWidget),
  { ssr: false }
);

interface HeaderProps {
  onOpenMenu?: () => void;
  onOpenContact?: () => void;
}

export function Header({ onOpenMenu, onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#060606]/80 backdrop-blur-md border-b border-white/[0.06]"
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="ARUN Architects Home"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-editorial-mono text-base md:text-lg font-light tracking-[0.35em] text-white group-hover:text-[#9BD4D7] transition-colors duration-300">
                ARUN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9BD4D7] inline-block mb-1 group-hover:scale-125 transition-transform" />
            </div>
            <span className="text-[9px] font-editorial-mono tracking-[0.28em] text-white/40 uppercase">
              ARCHITECTS
            </span>
          </div>
        </Link>

        {/* Center Live Utility Widget */}
        <div className="hidden lg:block">
          <ClockWidget />
        </div>

        {/* Right Navigation & Controls */}
        <div className="flex items-center gap-7 md:gap-9">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 text-sm md:text-base font-editorial-mono uppercase tracking-[0.24em] text-white/80 hover:text-white transition-colors relative py-1.5 group focus:outline-none"
          >
            <span>CONTACT US</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9BD4D7] opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9BD4D7] transition-all duration-300 group-hover:w-full" />
          </button>

          {/* Minimal Borderless Menu Button with Larger Size */}
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-3.5 py-1.5 text-white/90 hover:text-white transition-colors group focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <span className="text-sm md:text-base font-editorial-mono tracking-[0.24em] uppercase text-white/70 group-hover:text-white transition-colors">
              MENU
            </span>
            <div className="flex flex-col gap-1.5 items-end justify-center w-7">
              <span className="w-7 h-[1.5px] bg-white group-hover:bg-[#9BD4D7] transition-all duration-300 group-hover:w-5" />
              <span className="w-5 h-[1.5px] bg-white group-hover:bg-[#9BD4D7] transition-all duration-300 group-hover:w-7" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
