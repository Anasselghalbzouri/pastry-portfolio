"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { imgSrc } from "@/lib/utils";

export default function About() {
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
              About Me
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
              My name is Reda El Ghalbzouri, and I am a passionate pastry trainee with a strong drive to grow and evolve within the world of pastry.
              My journey started from curiosity and love for detail, and it quickly turned into a clear ambition to become a professional chef who masters the fundamentals through repetition, discipline, and precision.
             <br />
              I am constantly learning, pushing myself through practice, and building strong technical foundations step by step.
              My goal is to join a Michelin-level kitchen where I can experience real service, high standards, and true culinary excellence.
              <br />
              I adapt quickly, stay focused under pressure, and bring consistency, energy, and dedication to every task I take on.
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
              More About Me
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
