"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Check } from "lucide-react";
import { studioInfo } from "@/data/studio";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Architecture & Masterplanning",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#060606]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#0c0c0e] border border-white/[0.12] p-8 md:p-12 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Close Contact Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-16 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-[#9BD4D7] flex items-center justify-center text-[#9BD4D7] mb-6">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-light uppercase tracking-tight text-white">
              INQUIRY TRANSMITTED
            </h3>
            <p className="mt-3 text-xs md:text-sm font-editorial-mono text-white/60 max-w-md">
              Our partners will review your project brief and connect with you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-[11px] font-editorial-mono tracking-[0.25em] text-[#9BD4D7] uppercase block mb-2">
                ( COMMISSION AN ARCHITECTURE )
              </span>
              <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-white">
                START A CONVERSATION
              </h3>
              <p className="mt-2 text-xs font-editorial-mono text-white/50">
                Direct all project inquiries to our studio partners.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-[10px] font-editorial-mono tracking-[0.2em] uppercase text-white/60 mb-2">
                  NAME / ENTITY
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-xs md:text-sm font-editorial-mono text-white placeholder-white/20 focus:outline-none focus:border-[#9BD4D7] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-editorial-mono tracking-[0.2em] uppercase text-white/60 mb-2">
                  CONTACT EMAIL
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-xs md:text-sm font-editorial-mono text-white placeholder-white/20 focus:outline-none focus:border-[#9BD4D7] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-editorial-mono tracking-[0.2em] uppercase text-white/60 mb-2">
                  PROJECT SCOPE
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/[0.1] px-4 py-3 text-xs md:text-sm font-editorial-mono text-white focus:outline-none focus:border-[#9BD4D7] transition-colors"
                >
                  <option value="Architecture & Masterplanning">Architecture & Masterplanning</option>
                  <option value="Corporate Workplace Design">Corporate Workplace Design</option>
                  <option value="Interior Architecture & Curation">Interior Architecture & Curation</option>
                  <option value="Residential Sanctuary">Residential Sanctuary</option>
                  <option value="Experiential & Installation">Experiential & Installation</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-editorial-mono tracking-[0.2em] uppercase text-white/60 mb-2">
                  PROJECT BRIEF & VISION
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Outline site location, intended timeline, and programmatic ambition..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-xs md:text-sm font-editorial-mono text-white placeholder-white/20 focus:outline-none focus:border-[#9BD4D7] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] font-editorial-mono text-white/40">
                  TEL: {studioInfo.phone}
                </span>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-[#9BD4D7] transition-all text-xs font-editorial-mono tracking-[0.2em] uppercase font-medium"
                >
                  <span>TRANSMIT BRIEF</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
