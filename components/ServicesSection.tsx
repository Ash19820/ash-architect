"use client";

import React, { useState } from "react";
import { services } from "@/data/services";
import { Plus, Minus } from "lucide-react";

export function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Flatten all items for the 2-column editorial grid
  const allItems = services.flatMap((cat) => cat.items);
  const displayedItems = showAll ? allItems : allItems.slice(0, 8);

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative w-full py-28 md:py-40 bg-[#060606] border-t border-white/[0.06]"
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <span className="text-[12px] md:text-[13px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase block mb-3">
              ( SERVICES )
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-white uppercase tracking-[-0.01em] max-w-3xl leading-snug">
              WE OFFER INTEGRATED SERVICES COVERING PEOPLE, SPACE, AND TECHNOLOGY — WORKING FROM INITIAL ENVELOPE GENESIS TO SENSORY FITOUT.
            </p>
          </div>
          <span className="text-[11px] font-editorial-mono tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
            CAPABILITIES // 14 DOMAINS
          </span>
        </div>

        {/* 2-Column Editorial Services Table with Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {displayedItems.map((item, index) => {
            const isOpen = activeItem === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-white/[0.08] transition-colors duration-300 hover:border-white/30"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-[11px] font-editorial-mono text-[#9BD4D7]/70 group-hover:text-[#9BD4D7] transition-colors">
                      {item.id}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-white/90 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 uppercase">
                      {item.name}
                    </h3>
                  </div>

                  <span className="p-1.5 rounded-full border border-white/10 group-hover:border-[#9BD4D7] text-white/50 group-hover:text-[#9BD4D7] transition-all">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {/* Collapsible item details */}
                {isOpen && (
                  <div className="pb-6 pl-12 pr-4 text-xs md:text-sm font-editorial-mono text-white/60 leading-relaxed font-light transition-all duration-300">
                    {item.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="mt-16 pt-8 flex justify-end">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 text-xs font-editorial-mono tracking-[0.25em] uppercase text-white/80 hover:text-[#9BD4D7] transition-colors py-2"
          >
            <span>{showAll ? "( COLLAPSE SERVICES )" : "( VIEW ALL SERVICES )"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
