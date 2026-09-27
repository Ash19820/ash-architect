"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ClockWidget } from "./ClockWidget";

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
          aria-label="TOPE Architects Home"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-editorial-mono text-base md:text-lg font-light tracking-[0.35em] text-white group-hover:text-[#9BD4D7] transition-colors duration-300">
                TOPE
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
        <div className="flex items-center gap-6 md:gap-8">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex text-[11px] font-editorial-mono uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors relative py-1 group"
          >
            CONTACT US
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9BD4D7] transition-all duration-300 group-hover:w-full" />
          </button>

          {/* Minimal Editorial Menu Button */}
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-3 p-2 -mr-2 text-white/90 hover:text-white transition-colors group focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <span className="text-[11px] font-editorial-mono tracking-[0.2em] uppercase hidden md:inline-block text-white/60 group-hover:text-white transition-colors">
              MENU
            </span>
            <div className="flex flex-col gap-1.5 items-end justify-center w-6">
              <span className="w-6 h-[1px] bg-white group-hover:bg-[#9BD4D7] transition-all duration-300 group-hover:w-5" />
              <span className="w-4 h-[1px] bg-white group-hover:bg-[#9BD4D7] transition-all duration-300 group-hover:w-6" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
