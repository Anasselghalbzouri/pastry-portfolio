"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const navLinks = [
    { label: t.navbar.home, href: "#home" },
    { label: t.navbar.work, href: "#work" },
    { label: t.navbar.about, href: "#about" },
    { label: t.navbar.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "work", "techniques", "about", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex flex-col leading-tight group" onClick={() => setMenuOpen(false)}>
            <span className="font-serif text-lg font-medium tracking-wider text-primary transition-opacity group-hover:opacity-70">
              RE
            </span>
            <span className="font-sans text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase">
              Commis Pastry Chef
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={label}
                  href={href}
                  className={cn(
                    "font-sans text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 relative",
                    isActive
                      ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-accent after:content-['']"
                      : "text-gray-400 hover:text-primary"
                  )}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Language toggle + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
            >
              <span className={lang === "en" ? "text-primary" : "text-gray-400"}>EN</span>
              <span className="text-gray-300">|</span>
              <span className={lang === "fr" ? "text-primary" : "text-gray-400"}>FR</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[1.5px] bg-primary origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-4 h-[1.5px] bg-primary"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-[1.5px] bg-primary origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-[13px] tracking-[0.35em] uppercase text-primary hover:text-accent transition-colors duration-300"
              >
                {label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-8 h-[1px] bg-accent"
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
