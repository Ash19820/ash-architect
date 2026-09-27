"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SideTab } from "@/components/SideTab";
import { StudioSection } from "@/components/StudioSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FoundersSection } from "@/components/FoundersSection";
import { NewsMarquee } from "@/components/NewsMarquee";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { MenuOverlay } from "@/components/MenuOverlay";
import { ContactModal } from "@/components/ContactModal";
import { CustomCursor } from "@/components/CustomCursor";
import { IntroPreloader } from "@/components/IntroPreloader";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#060606] text-[#f2f2f2] overflow-x-hidden selection:bg-[#9BD4D7] selection:text-black">
      {/* Editorial Scattered Logo Preloader Intro */}
      <IntroPreloader />

      {/* Custom difference cursor */}
      <CustomCursor />

      {/* Persistent Viewport Header */}
      <Header
        onOpenMenu={() => setMenuOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Fixed Right Accent Tab */}
      <SideTab />

      {/* Hero Section with 3D organic sculpture and animated statement */}
      <Hero />

      {/* Studio / Manifesto Section */}
      <StudioSection />

      {/* Selected Works Editorial Showcase */}
      <ProjectSection />

      {/* Reusable Services Section */}
      <ServicesSection />

      {/* Practice Philosophy & Blur Parallax Statement */}
      <PhilosophySection />

      {/* Leadership / Founders Section */}
      <FoundersSection />

      {/* News & Awards Marquee */}
      <NewsMarquee />

      {/* Massive Call to Action Section */}
      <CtaSection onOpenContact={() => setContactOpen(true)} />

      {/* Structured Editorial 4-Column Footer */}
      <Footer />

      {/* Interactive Navigation Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Architectural Inquiry Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </main>
  );
}
