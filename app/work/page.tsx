"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { projects, Project } from "@/lib/projects";
import VideoPlayer from "@/components/VideoPlayer";

/* ── Modal ─────────────────────────────────────────────── */
const panelAnim = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function Modal({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const project = projects[index];
  const img = project.images[imgIndex] ?? project.images[0];
  const hasMultiple = project.images.length > 1;
  const hasVideo = !!project.video;

  const handlePrev = () => { setImgIndex(0); setShowVideo(false); onPrev(); };
  const handleNext = () => { setImgIndex(0); setShowVideo(false); onNext(); };

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

        {/* Media panel */}
        <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            {showVideo && hasVideo ? (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <VideoPlayer
                  url={project.video}
                  playing
                  controls
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </motion.div>
            ) : (
              <motion.div
                key={`${index}-${imgIndex}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Play button overlay for video projects */}
                {hasVideo && (
                  <button
                    type="button"
                    aria-label="Play video"
                    onClick={(e) => { e.stopPropagation(); setShowVideo(true); }}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-300 group/play"
                  >
                    <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/play:scale-110">
                      <Play size={20} className="text-primary ml-1" fill="currentColor" />
                    </span>
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!showVideo && (
            <>
              <button
                type="button"
                aria-label="Previous project"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 z-10"
              >
                <ChevronRight size={16} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {projects.map((_, i) => (
                  <span
                    key={i}
                    className={`block w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === index ? "bg-accent scale-125" : "bg-white/60"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Info panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${imgIndex}`}
            variants={panelAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-6 p-8 md:p-10"
          >
            <div>
              <p className="font-sans text-[11px] text-accent tracking-[0.2em] font-medium mb-1">
                {project.number} — {index + 1} / {projects.length}
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
                  <span key={t} className="font-sans text-[11px] tracking-[0.1em] px-3 py-1.5 border border-stone-200 text-gray-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnails row — image strips + video toggle */}
            {(hasMultiple || hasVideo) && (
              <div className="flex gap-2 flex-wrap">
                {project.images.map((im, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`View image ${i + 1}`}
                    onClick={() => { setImgIndex(i); setShowVideo(false); }}
                    className={`relative w-14 h-11 overflow-hidden border-2 transition-colors duration-200 ${!showVideo && i === imgIndex ? "border-accent" : "border-transparent"}`}
                  >
                    <Image src={im.src} alt={im.alt} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
                {hasVideo && (
                  <button
                    type="button"
                    aria-label="Play video"
                    onClick={() => setShowVideo(true)}
                    className={`w-14 h-11 flex items-center justify-center border-2 transition-colors duration-200 bg-stone-100 hover:bg-stone-200 ${showVideo ? "border-accent" : "border-transparent"}`}
                  >
                    <Play size={14} className="text-primary" fill="currentColor" />
                  </button>
                )}
              </div>
            )}

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-stone-100">
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <ChevronLeft size={12} /> Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200"
              >
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
function ProjectBlock({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start py-20 border-t border-stone-100 ${isEven ? "" : "lg:[direction:rtl]"}`}
    >
      {/* Thumbnail */}
      <div className="lg:[direction:ltr]">
        <div
          className="relative aspect-[16/10] overflow-hidden cursor-pointer group"
          onClick={onOpen}
        >
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            {project.video ? (
              <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={16} className="text-primary ml-0.5" fill="currentColor" />
              </span>
            ) : (
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View detail
              </span>
            )}
          </div>
        </div>
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
        <button
          type="button"
          onClick={onOpen}
          className="text-left group/item flex gap-4 items-start hover:bg-stone-50 p-3 -mx-3 transition-colors duration-200 w-full"
        >
          <div className="relative w-14 h-11 shrink-0 overflow-hidden bg-stone-100">
            <Image src={project.images[0].src} alt={project.images[0].alt} fill className="object-cover" sizes="56px" />
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play size={10} className="text-white" fill="currentColor" />
              </div>
            )}
          </div>
          <div>
            <p className="font-sans text-[11px] font-semibold tracking-[0.1em] text-primary group-hover/item:text-accent transition-colors duration-200">
              {project.images[0].title}
            </p>
            <p className="font-sans text-[11px] font-light leading-relaxed text-gray-400 mt-0.5 line-clamp-2">
              {project.images[0].caption}
            </p>
          </div>
        </button>
      </div>
    </motion.article>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function WorkPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const closeModal = () => setModalIndex(null);
  const prevProject = () => setModalIndex((i) => i === null ? null : (i - 1 + projects.length) % projects.length);
  const nextProject = () => setModalIndex((i) => i === null ? null : (i + 1) % projects.length);

  return (
    <div className="min-h-screen bg-white">
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

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        {projects.map((project, index) => (
          <ProjectBlock key={project.number} project={project} index={index} onOpen={() => setModalIndex(index)} />
        ))}
      </main>

      <AnimatePresence>
        {modalIndex !== null && (
          <Modal index={modalIndex} onClose={closeModal} onPrev={prevProject} onNext={nextProject} />
        )}
      </AnimatePresence>
    </div>
  );
}
