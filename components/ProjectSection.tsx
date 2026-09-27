"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowUpRight, Plus } from "lucide-react";

export function ProjectSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-40 bg-[#060606] border-t border-white/[0.06]"
    >
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <span className="text-[12px] md:text-[13px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase block mb-3">
              ( SELECTED WORKS )
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white uppercase tracking-[-0.01em] max-w-2xl leading-snug">
              EACH PROJECT WE UNDERTAKE REFLECTS THE CORE VALUES OF OUR PRACTICE — CLARITY IN DESIGN, HONESTY IN MATERIALS, & SENSORY BALANCE.
            </h2>
          </div>
          <span className="text-[11px] font-editorial-mono tracking-[0.2em] text-white/40 uppercase whitespace-nowrap">
            FOLIO // 2022 — 2025
          </span>
        </div>

        {/* Editorial Project Showcase - Edge-to-Edge Architectural Flow */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative flex flex-col gap-6"
              >
                {/* Asymmetric layout with alternating structure */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Imagery Container (Large, cinematic aspect ratio) */}
                  <div
                    className={`relative w-full overflow-hidden bg-white/[0.02] ${
                      isEven ? "lg:col-span-8" : "lg:col-span-8 lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover contrast-105 brightness-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500" />

                      {/* Interactive Hover Overlay Tag */}
                      <div className="absolute top-6 right-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-none group-hover:bg-[#9BD4D7] group-hover:text-black text-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Project Editorial Metadata */}
                  <div
                    className={`flex flex-col justify-between py-2 ${
                      isEven ? "lg:col-span-4" : "lg:col-span-4 lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Project Index & Category */}
                      <div className="flex items-center gap-4 text-[11px] font-editorial-mono tracking-[0.2em] text-[#9BD4D7] uppercase mb-4">
                        <span>0{index + 1}</span>
                        <span className="w-4 h-[1px] bg-white/20" />
                        <span>{project.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white uppercase tracking-tight group-hover:text-[#9BD4D7] transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Location & Year */}
                      <div className="mt-3 flex items-center gap-4 text-[11px] font-editorial-mono text-white/50 tracking-[0.16em]">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-6 text-xs md:text-sm font-editorial-mono text-white/60 leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Accolades Pills */}
                      {project.awards && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.awards.map((award, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-editorial-mono tracking-[0.12em] px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-white/70 uppercase"
                            >
                              ★ {award}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-[11px] font-editorial-mono text-white/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                        EXPLORE CASE STUDY
                      </span>
                      <Plus className="w-4 h-4 text-white/40 group-hover:text-[#9BD4D7] transition-colors" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Works Footer Button */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-white/[0.08] flex justify-center">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-[#9BD4D7] text-xs font-editorial-mono tracking-[0.25em] uppercase text-white hover:text-[#9BD4D7] transition-all duration-300"
          >
            <span>( VIEW ALL WORKS )</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
