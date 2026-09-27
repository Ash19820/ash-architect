"use client";

import React from "react";
import Link from "next/link";
import { studioInfo } from "@/data/studio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#040404] border-t border-white/[0.08] text-white pt-20 md:pt-28 pb-14">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* 4 Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-20 border-b border-white/[0.08]">
          {/* Column 1: Address */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase">
              // ADDRESS
            </h4>
            <div className="text-xs sm:text-sm font-editorial-mono text-white/60 leading-relaxed font-light">
              <p>{studioInfo.location}</p>
              <p className="mt-2 text-white/80">
                T:{" "}
                <a
                  href={`tel:${studioInfo.phone}`}
                  className="hover:text-[#9BD4D7] transition-colors"
                >
                  {studioInfo.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase">
              // NAVIGATION
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs sm:text-sm font-editorial-mono tracking-[0.15em] text-white/70">
              <Link href="#projects" className="hover:text-white transition-colors w-fit">
                WORKS
              </Link>
              <Link href="#studio" className="hover:text-white transition-colors w-fit">
                ABOUT
              </Link>
              <Link href="#services" className="hover:text-white transition-colors w-fit">
                SERVICES
              </Link>
              <Link href="#news" className="hover:text-white transition-colors w-fit">
                NEWS
              </Link>
            </nav>
          </div>

          {/* Column 3: Leadership */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase">
              // LEADERSHIP
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-editorial-mono tracking-[0.15em] text-white/70">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors w-fit"
              >
                ARUN [PRINCIPAL ARCHITECT]
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase">
              // CONTACT
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-editorial-mono tracking-[0.15em] text-white/70">
              <a
                href={`mailto:${studioInfo.emailGeneral}`}
                className="hover:text-white transition-colors w-fit"
              >
                {studioInfo.emailGeneral}
              </a>
              <a
                href={`mailto:${studioInfo.emailWork}`}
                className="hover:text-white transition-colors w-fit"
              >
                {studioInfo.emailWork}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Brand Wordmark, Credits & Back to Top */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-editorial-mono tracking-[0.2em] text-white/40 uppercase">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} ARUN ARCHITECTS</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white/60 transition-colors">
              ORIGINAL DESIGN SYSTEM RECONSTRUCTION
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
