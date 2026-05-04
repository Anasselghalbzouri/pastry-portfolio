"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Load the 3D canvas only on the client (Three.js needs browser APIs)
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* ── Three.js canvas — absolute, behind everything ── */}
      <HeroCanvas />

      {/* ── Main content — z-10 so it sits above the canvas ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          {/* Tagline */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-gray-400"
          >
            Discipline. Precision. Repetition.
          </motion.p>

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-[clamp(2.8rem,6vw,4.5rem)] font-light leading-[1.05] text-primary"
          >
            Building skills.
            <br />
            One detail{" "}
            <span className="italic text-accent">at a time.</span>
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-10 h-[2px] bg-accent"
          />

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-sans text-sm font-light leading-relaxed text-gray-600 max-w-sm"
          >
            I am a pastry trainee seeking stage opportunities in Michelin-level
            kitchens to learn, grow and contribute with dedication and
            consistency.
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-primary text-white font-sans text-[11px] tracking-[0.2em] uppercase px-7 py-4 hover:bg-accent transition-colors duration-300 group"
            >
              View My Work
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right — Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[4/5] max-h-[680px] overflow-hidden"
        >
          <Image
            src="/images/chocolate_domes.jpg"
            alt="Elegant pastry creation"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none" />
        </motion.div>
      </div>

      {/* Vertical scroll hint */}
      <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <span className="block w-[1px] h-20 bg-gray-200" />
        <p
          className="font-sans text-[9px] tracking-[0.3em] text-gray-300 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </p>
      </div>
    </section>
  );
}
