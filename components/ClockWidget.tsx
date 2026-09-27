"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function ClockWidget() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-[11px] font-editorial-mono tracking-[0.18em] text-white/60">
        <Clock className="w-3 h-3 text-white/50" />
        <span>INDIA</span>
        <span className="text-white/40">+5:30 GMT</span>
        <span>00:00:00</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-[11px] font-editorial-mono tracking-[0.18em] text-white/70">
      <Clock className="w-3 h-3 text-white/50 animate-pulse" />
      <span className="hover:text-white transition-colors">INDIA</span>
      <span className="text-white/40 text-[10px]">+5:30 GMT</span>
      <span className="text-white tabular-nums font-medium">{time}</span>
    </div>
  );
}
