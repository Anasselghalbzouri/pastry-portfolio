"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-gray-600">
          © 2024 Reda El Ghalbzouri
        </p>

        {/* Social links */}
        <nav className="flex items-center gap-8">
          {[
            {label: "Number", href: "tel:+212666310794"},
            { label: "LinkedIn", href: "https://www.linkedin.com/in/reda-el-ghalbzouri/" },
            { label: "Email", href: "mailto:redaelghalbzouri003@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="font-sans text-[10px] tracking-[0.18em] uppercase text-gray-600 hover:text-accent transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 font-sans text-[10px] tracking-[0.18em] uppercase text-gray-600 hover:text-accent transition-colors duration-300"
        >
          <ArrowUp size={12} />
          Back to Top
        </motion.button>
      </div>
    </footer>
  );
}
