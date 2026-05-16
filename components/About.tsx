"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { imgSrc } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary font-medium mb-4">
              {t.about.label}
            </h2>
            <div className="w-8 h-[2px] bg-accent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="font-sans text-[15px] font-light leading-[1.85] text-gray-600">
              {t.about.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary text-white font-sans text-[11px] tracking-[0.2em] uppercase px-7 py-4 hover:bg-accent transition-colors duration-300 group"
            >
              {t.about.cta}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[4/5] overflow-hidden"
        >
          <Image
            src={imgSrc("/images/New_reda.png")}
            alt="Reda El Ghalbzouri — Pastry Trainee"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Accent border accent */}
          <div className="absolute bottom-6 left-6 right-6 border border-white/30 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
