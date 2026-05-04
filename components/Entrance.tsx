"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "hold" | "open" | "done";

export default function Entrance() {
  const [phase, setPhase] = useState<Phase>("hold");

  useEffect(() => {
    const t = setTimeout(() => {
      window.dispatchEvent(new Event("user-entered"));
      setPhase("open");
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "open") return;
    const t = setTimeout(() => setPhase("done"), 1600);
    return () => clearTimeout(t);
  }, [phase]);

  const handleClick = () => {
    if (phase !== "hold") return;
    window.dispatchEvent(new Event("user-entered"));
    setPhase("open");
  };

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <div
        key="entrance"
        className="fixed inset-0 z-[9999] cursor-pointer overflow-hidden"
        onClick={handleClick}
        style={{ perspective: "1400px" }}
      >
        {/* ── Left door ── */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-[#0e0e0e] origin-left"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: phase === "open" ? -110 : 0 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Inset panel frame */}
          <div className="absolute inset-5 border border-white/8" />
          <div className="absolute inset-9 border border-white/5" />

          {/* Gold right seam */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-accent/70" />

          {/* Top gold bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/30" />
          {/* Bottom gold bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent/30" />

          {/* Letter R — centred on left door */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none">
            <motion.p
              className="font-serif text-[clamp(4rem,12vw,8rem)] font-light leading-none text-white/90 tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              R
            </motion.p>
            <motion.span
              className="block w-6 h-[1px] bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
          </div>

          {/* Door knob */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="w-2 h-5 rounded-full bg-accent/60" />
          </div>
        </motion.div>

        {/* ── Right door ── */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-[#0e0e0e] origin-right"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: phase === "open" ? 110 : 0 }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Inset panel frame */}
          <div className="absolute inset-5 border border-white/8" />
          <div className="absolute inset-9 border border-white/5" />

          {/* Gold left seam */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent/70" />

          {/* Top gold bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/30" />
          {/* Bottom gold bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent/30" />

          {/* Letter G — centred on right door */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none">
            <motion.p
              className="font-serif text-[clamp(4rem,12vw,8rem)] font-light leading-none text-white/90 tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              G
            </motion.p>
            <motion.span
              className="block w-6 h-[1px] bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            />
          </div>

          {/* Door knob */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="w-2 h-5 rounded-full bg-accent/60" />
          </div>
        </motion.div>

        {/* ── Centre seam line ── */}
        <motion.div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-accent/50 pointer-events-none"
          animate={{ opacity: phase === "open" ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* ── Subtitle at bottom ── */}
        <motion.div
          className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
          animate={{ opacity: phase === "open" ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="font-sans text-[9px] tracking-[0.4em] uppercase text-accent/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Pastry · Pâtisserie
          </motion.p>
          <motion.p
            className="font-sans text-[8px] tracking-[0.3em] uppercase text-white/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.2, 0.6] }}
            transition={{ duration: 2, delay: 1.0, repeat: Infinity, ease: "easeInOut" }}
          >
            Tap to enter &amp; start music
          </motion.p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
