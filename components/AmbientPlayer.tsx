"use client";

import { useEffect, useRef } from "react";
import { imgSrc } from "@/lib/utils";

export default function AmbientPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const audio = new Audio(imgSrc("/images/Silver_on_Porcelain.mp3"));
    audio.volume = 0.12;
    audio.loop = true;
    audioRef.current = audio;

    const start = () => {
      if (started.current) return;
      started.current = true;
      audio.play().catch(() => {});
      window.removeEventListener("scroll", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("click", start);
    };

    // Try immediate autoplay first
    audio.play().then(() => {
      started.current = true;
    }).catch(() => {
      // Blocked — start on first scroll, touch, or click
      window.addEventListener("scroll", start, { passive: true });
      window.addEventListener("touchstart", start, { passive: true });
      window.addEventListener("click", start);
    });

    return () => {
      audio.pause();
      window.removeEventListener("scroll", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("click", start);
    };
  }, []);

  return null;
}
