"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ["home", "work", "techniques", "about", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex flex-col leading-tight group">
          <span className="font-serif text-lg font-medium tracking-wider text-primary transition-opacity group-hover:opacity-70">
            RG
          </span>
          <span
            className="font-sans text-[9px] font-medium tracking-[0.2em] text-gray-500 uppercase"
          >
            Pastry Trainee
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive =
              activeSection === sectionId ||
              (sectionId === "home" && activeSection === "home");

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

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1.5px] bg-primary" />
          <span className="block w-4 h-[1.5px] bg-primary" />
          <span className="block w-6 h-[1.5px] bg-primary" />
        </button>
      </div>
    </header>
  );
}
