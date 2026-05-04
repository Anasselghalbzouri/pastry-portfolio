"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, Project, ImageEntry } from "@/lib/projects";

/* ── Modal ─────────────────────────────────────────────── */
const panelAnim = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function Modal({
  project,
  startIndex,
  onClose,
}: {
  project: Project;
  startIndex: number;
  onClose: () => void;
}) {
  const [activeImg, setActiveImg] = useState(startIndex);
  const img: ImageEntry = project.images[activeImg];

  const prev = () => setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setActiveImg((i) => (i + 1) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.97 }}
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

          <button type="button" aria-label="Previous" onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200">
            <ChevronLeft size={16} />
          </button>
          <button type="button" aria-label="Next" onClick={next}
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

        {/* Info */}
        <AnimatePresence mode="wait">
          <motion.div key={activeImg} variants={panelAnim} initial="hidden" animate="visible" exit="exit"
            className="flex flex-col gap-6 p-8 md:p-10">
            <div>
              <p className="font-sans text-[11px] text-accent tracking-[0.2em] font-medium mb-1">
                {project.number} — {activeImg + 1} / {project.images.length}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-primary leading-tight">
                {img.title}
              </h2>
            </div>
            <div className="w-8 h-[1px] bg-accent" />
            <p className="font-sans text-[13px] font-light leading-relaxed text-gray-500">{img.caption}</p>
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-3">Techniques</p>
              <div className="flex flex-wrap gap-2">
                {img.techniques.map((t) => (
                  <span key={t} className="font-sans text-[11px] tracking-[0.1em] px-3 py-1.5 border border-stone-200 text-gray-600">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-stone-100">
              <button type="button" onClick={prev} className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200">
                <ChevronLeft size={12} /> Prev
              </button>
              <button type="button" onClick={next} className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200">
                Next <ChevronRight size={12} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ── Project block ──────────────────────────────────────── */
function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const [modal, setModal] = useState<number | null>(null);
  const isEven = index % 2 === 0;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start py-20 border-t border-stone-100 ${isEven ? "" : "lg:[direction:rtl]"}`}
      >
        {/* Images grid */}
        <div className="lg:[direction:ltr] grid grid-cols-2 gap-3">
          {/* Main large image */}
          <div
            className="col-span-2 relative aspect-[16/10] overflow-hidden cursor-pointer group"
            onClick={() => setModal(0)}
          >
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View detail
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {project.images.slice(1).map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
              onClick={() => setModal(i + 1)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View detail
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="lg:[direction:ltr] flex flex-col gap-6 lg:py-6">
          <p className="font-sans text-[11px] text-accent tracking-[0.25em] font-medium">{project.number}</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-primary leading-tight">
            {project.title}
          </h2>
          <div className="w-10 h-[2px] bg-accent" />
          <p className="font-sans text-sm font-light leading-relaxed text-gray-500 max-w-sm">
            {project.description}
          </p>

          {/* All image captions */}
          <div className="flex flex-col gap-4 mt-2">
            {project.images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setModal(i)}
                className="text-left group/item flex gap-4 items-start hover:bg-stone-50 p-3 -mx-3 transition-colors duration-200"
              >
                <div className="relative w-14 h-11 shrink-0 overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold tracking-[0.1em] text-primary group-hover/item:text-accent transition-colors duration-200">
                    {img.title}
                  </p>
                  <p className="font-sans text-[11px] font-light leading-relaxed text-gray-400 mt-0.5 line-clamp-2">
                    {img.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {modal !== null && (
          <Modal project={project} startIndex={modal} onClose={() => setModal(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-primary transition-colors duration-300 group"
        >
          <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </Link>
        <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary font-medium">
          All Projects
        </p>
      </header>

      {/* Hero title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light text-primary leading-none"
        >
          Selected
          <br />
          <span className="italic text-accent">Work.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm font-light text-gray-400 mt-4 max-w-md"
        >
          Every piece below represents hours of practice, attention to detail, and a commitment to craft.
          Click any image to explore the technique behind it.
        </motion.p>
      </div>

      {/* Projects */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {projects.map((project, index) => (
          <ProjectBlock key={project.number} project={project} index={index} />
        ))}
      </main>
    </div>
  );
}
