"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [
  (
    <svg key="1" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
      <rect x="9" y="17" width="22" height="6" rx="3" />
      <rect x="4" y="15" width="6" height="10" rx="3" />
      <rect x="30" y="15" width="6" height="10" rx="3" />
      <path d="M10 30 Q20 27 30 30" strokeLinecap="round" />
      <circle cx="15" cy="33" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="20" cy="34" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="25" cy="33" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
      <path d="M14 6 Q20 4 26 6 L23 26 L17 26 Z" />
      <path d="M17 26 L18 31 L22 31 L23 26" />
      <path d="M18 31 Q20 34 22 31" strokeLinecap="round" />
      <path d="M19 34 Q20 36 21 34" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="3" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
      <path d="M7 26 Q7 14 20 14 Q33 14 33 26 L33 29 Q33 32 20 32 Q7 32 7 29 Z" />
      <path d="M7 22 Q20 20 33 22" />
      <path d="M8 26 Q20 24 32 26" />
      <path d="M11 15 Q13 13 16 14" strokeLinecap="round" />
      <circle cx="20" cy="13" r="1.2" />
    </svg>
  ),
  (
    <svg key="4" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
      <rect x="8" y="14" width="24" height="16" rx="2" />
      <line x1="8" y1="21" x2="32" y2="21" />
      <line x1="17" y1="14" x2="17" y2="30" />
      <line x1="23" y1="14" x2="23" y2="30" />
      <path d="M10 10 Q14 8 14 12" strokeLinecap="round" />
      <path d="M28 30 Q32 33 30 36" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="5" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
      <ellipse cx="20" cy="28" rx="14" ry="4" />
      <path d="M6 28 Q6 34 20 34 Q34 34 34 28" />
      <ellipse cx="20" cy="27" rx="10" ry="2.5" />
      <circle cx="17" cy="24" r="3" />
      <path d="M22 22 Q28 20 30 24 Q28 26 24 25" strokeLinecap="round" />
      <circle cx="25" cy="22" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
];

export default function Techniques() {
  const { t } = useLanguage();
  return (
    <section id="techniques" className="bg-[#F9F8F6] py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-medium">
            {t.techniques.label}
          </h2>
          <div className="mt-3 mx-auto w-8 h-[1px] bg-accent" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-gray-200 border border-gray-200">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex flex-col items-center gap-4 py-10 px-4 hover:bg-white transition-colors duration-300 group cursor-default"
            >
              <div className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                {icon}
              </div>
              <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-gray-500 text-center font-medium leading-relaxed">
                {t.techniques.items[index]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
