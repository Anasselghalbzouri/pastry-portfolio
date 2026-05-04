"use client";

import { motion } from "framer-motion";

const techniques = [
  {
    label: "PÂTE SUCRÉE",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" />
        <path d="M12 20 Q20 10 28 20 Q20 30 12 20Z" />
        <circle cx="20" cy="20" r="3" />
      </svg>
    ),
  },
  {
    label: "CRÈME PÂTISSIÈRE",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M8 28 Q20 10 32 28Z" />
        <path d="M10 28 Q15 22 20 26 Q25 22 30 28" />
        <line x1="20" y1="26" x2="20" y2="32" />
      </svg>
    ),
  },
  {
    label: "MOUSSE & INSERTS",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <rect x="8" y="12" width="24" height="20" rx="2" />
        <line x1="8" y1="20" x2="32" y2="20" />
        <path d="M14 12 Q14 6 20 6 Q26 6 26 12" />
      </svg>
    ),
  },
  {
    label: "CHOCOLATE WORK",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M10 22 Q10 14 20 10 Q30 14 30 22 Q30 30 20 34 Q10 30 10 22Z" />
        <path d="M16 20 Q18 16 20 18 Q22 20 24 16" />
        <path d="M20 18 L20 26" />
      </svg>
    ),
  },
  {
    label: "PLATING & FINISHES",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" />
        <circle cx="20" cy="20" r="8" />
        <circle cx="20" cy="20" r="2" />
        <line x1="20" y1="6" x2="20" y2="12" />
      </svg>
    ),
  },
];

export default function Techniques() {
  return (
    <section id="techniques" className="bg-[#F9F8F6] py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-[11px] tracking-[0.3em] uppercase text-primary font-medium">
            Techniques Practiced
          </h2>
          <div className="mt-3 mx-auto w-8 h-[1px] bg-accent" />
        </motion.div>

        {/* Technique cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-gray-200 border border-gray-200">
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex flex-col items-center gap-4 py-10 px-4 hover:bg-white transition-colors duration-300 group cursor-default"
            >
              <div className="text-gray-400 group-hover:text-accent transition-colors duration-300">
                {technique.icon}
              </div>
              <p className="font-sans text-[9px] tracking-[0.18em] uppercase text-gray-500 text-center font-medium leading-relaxed">
                {technique.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
