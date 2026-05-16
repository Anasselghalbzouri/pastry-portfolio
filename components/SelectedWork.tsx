"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import TiltCard from "./TiltCard";
import { projects, Project } from "@/lib/projects";
import VideoPlayer from "./VideoPlayer";
import { useLanguage } from "@/lib/LanguageContext";

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

function ProjectModal({
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
  const [showVideo, setShowVideo] = useState(false);
  const project = projects[index];
  const img = project.images[0];
  const hasVideo = !!project.video;

  const handlePrev = () => { setShowVideo(false); onPrev(); };
  const handleNext = () => { setShowVideo(false); onNext(); };

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
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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
              <button type="button" aria-label="Previous project" onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 z-10">
                <ChevronLeft size={16} />
              </button>
              <button type="button" aria-label="Next project" onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 z-10">
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {projects.map((_, i) => (
                  <span key={i} className={`block w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === index ? "bg-accent scale-125" : "bg-white/60"}`} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right — info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
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

            {/* Video toggle thumbnail */}
            {hasVideo && (
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="View photo"
                  onClick={() => setShowVideo(false)}
                  className={`relative w-14 h-11 overflow-hidden border-2 transition-colors duration-200 ${!showVideo ? "border-accent" : "border-transparent"}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="56px" />
                </button>
                <button
                  type="button"
                  aria-label="Play video"
                  onClick={() => setShowVideo(true)}
                  className={`w-14 h-11 flex items-center justify-center border-2 transition-colors duration-200 bg-stone-100 hover:bg-stone-200 ${showVideo ? "border-accent" : "border-transparent"}`}
                >
                  <Play size={14} className="text-primary" fill="currentColor" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-stone-100">
              <button type="button" onClick={handlePrev}
                className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-400 hover:text-primary transition-colors duration-200">
                <ChevronLeft size={12} /> Prev
              </button>
              <button type="button" onClick={handleNext}
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
      <TiltCard className="group flex flex-col gap-4 cursor-pointer" intensity={6} onClick={onClick}>
        {/* Single full image per card */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Project
            </span>
          </div>
        </div>

        {/* Number + title only, no description */}
        <div className="flex items-baseline justify-between px-1">
          <p className="font-sans text-[11px] text-accent tracking-wider font-medium">{project.number}</p>
          <h3 className="font-sans text-xs font-semibold tracking-[0.12em] text-primary uppercase">{project.title}</h3>
          <ArrowRight size={11} className="text-primary transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
        </div>
      </TiltCard>
    </motion.div>
  );
}

// each card is w-[300px], gap-5 = 20px → strip = 8 × 320 = 2560px
const STRIP_PX = projects.length * 320;

function InfiniteTrack({ onSelect }: { onSelect: (p: Project) => void }) {
  const controls = useAnimationControls();

  const start = () =>
    controls.start({
      x: -STRIP_PX,
      transition: { duration: projects.length * 4, ease: "linear", repeat: Infinity, repeatType: "loop" },
    });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={start}
    >
      <motion.div
        className="flex gap-5"
        animate={controls}
        initial={{ x: 0 }}
        onViewportEnter={start}
        viewport={{ once: true }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div key={`${project.number}-${index}`} className="w-[300px] shrink-0">
            <ProjectCard project={project} index={index % projects.length} onClick={() => onSelect(project)} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SelectedWork() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (i: number) => setSelectedIndex(i);
  const closeModal = () => setSelectedIndex(null);
  const prevProject = () => setSelectedIndex((i) => i === null ? null : (i - 1 + projects.length) % projects.length);
  const nextProject = () => setSelectedIndex((i) => i === null ? null : (i + 1) % projects.length);

  return (
    <section id="work" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-14">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-primary font-medium"
          >
            {t.work.label}
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
              {t.work.viewAll}
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      <InfiniteTrack onSelect={(p) => openModal(projects.indexOf(p))} />

      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectModal
            index={selectedIndex}
            onClose={closeModal}
            onPrev={prevProject}
            onNext={nextProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
