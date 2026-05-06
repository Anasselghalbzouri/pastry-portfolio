"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.8});

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black">
      {/* Full-width video */}
      <video
        ref={videoRef}
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/panna.mp4`}
        muted
        loop
        playsInline
        className="w-full h-[60vh] md:h-[80vh] object-cover"
      />

      {/* Overlay — only at edges, keeps center crisp */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration:1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3">
          In the kitchen
        </p>
        <h2 className="font-serif text-[clamp(1.6rem,4vw,3rem)] font-light text-white leading-tight">
           Panna cotta aux fraises
        </h2>
      </motion.div>
    </section>
  );
}
