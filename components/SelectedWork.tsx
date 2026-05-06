"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import TiltCard from "./TiltCard";
import { projects, Project } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const panelAnim = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const img = project.images[activeImg];

  const prev = () => setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setActiveImg((i) => (i + 1) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-black hover:text-white transition-colors duration-200"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-stone-100 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImg}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </motion.div>
          </AnimatePresence>

          <button type="button" aria-label="Previous image" onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200">
            <ChevronLeft size={16} />
          </button>
          <button type="button" aria-label="Next image" onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200">
            <ChevronRight size={16} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((im, i) => (
              <button key={i} type="button" aria-label={im.alt} onClick={() => setActiveImg(i)}
                className={`relative w-12 h-9 overflow-hidden border-2 transition-all duration-200 ${i === activeImg ? "border-accent" : "border-white/50 opacity-60 hover:opacity-100"}`}>
                <Image src={im.src} alt={im.alt} fill className="object-cover" sizes="48px" />
              </button>
            ))}
          </div>
        </div>

        {/* Right — per-image info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            variants={panelAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-6 p-8 md:p-10"
          >
            <div>
              <p className="font-sans text-[11px] text-accent tracking-[0.2em] font-medium mb-1">
                {project.number} — {activeImg + 1} / {project.images.length}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-primary leading-tight">
                {img.title}
              </h2>
            </div>

            <div className="w-8 h-[1px] bg-accent" />

            <p className="font-sans text-[13px] font-light leading-relaxed text-gray-500">
              {img.caption}
            </p>

            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-3">Techniques</p>
              <div className="flex flex-wrap gap-2">
                {img.techniques.map((t) => (
                  <span key={t} className="font-sans text-[11px] tracking-[0.1em] px-3 py-1.5 border border-stone-200 text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-stone-100">
              <button type="button" onClick={prev}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200">
                <ChevronLeft size={12} /> Prev
              </button>
              <button type="button" onClick={next}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200">
                Next <ChevronRight size={12} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <TiltCard className="group flex flex-col gap-5 cursor-pointer" intensity={6}>
        <div className="grid grid-cols-2 gap-1.5 aspect-[4/3] overflow-hidden" onClick={onClick}>
          <div className="relative overflow-hidden row-span-2">
            <Image src={project.images[0].src} alt={project.images[0].alt} fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 18vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src={(project.images[1] ?? project.images[0]).src} alt={(project.images[1] ?? project.images[0]).alt} fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 25vw, 9vw" />
          </div>
          <div className="relative overflow-hidden">
            <Image src={(project.images[2] ?? project.images[0]).src} alt={(project.images[2] ?? project.images[0]).alt} fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 25vw, 9vw" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-sans text-[11px] text-accent tracking-wider font-medium">{project.number}</p>
          <h3 className="font-sans text-sm font-semibold tracking-[0.12em] text-primary">{project.title}</h3>
          <p className="font-sans text-[13px] font-light leading-relaxed text-gray-500">{project.description}</p>
          <button type="button" onClick={onClick}
            className="flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase text-primary hover:text-accent transition-colors duration-300 group/link w-fit">
            View Project
            <ArrowRight size={11} className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </button>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function SelectedWork() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary font-medium"
          >
            Selected Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/work"
              className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-primary transition-colors duration-300 group"
            >
              View All Projects
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
