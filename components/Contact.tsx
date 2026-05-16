"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate submission (replace with your API call)
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="bg-primary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-accent font-medium">
            {t.contact.label}
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] text-white">
            {t.contact.heading1}{" "}
            <span className="italic text-accent">{t.contact.heading2}</span>
          </h2>
          <div className="w-8 h-[1px] bg-accent" />
          <p className="font-sans text-[14px] font-light leading-relaxed text-gray-400 max-w-xs">
            {t.contact.description}
          </p>

          {/* Social links */}
          <div className="flex flex-col gap-3 mt-4">
            {[
              { label: "Number", href: "tel:+212666310794" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/reda-el-ghalbzouri/" },
              { label: "redaelghalbzouri003@gmail.com", href: "mailto:redaelghalbzouri003@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 font-sans text-[11px] tracking-[0.15em]  text-gray-400 hover:text-accent transition-colors duration-300 group"
              >
                <span className="block w-6 h-[1px] bg-gray-600 group-hover:bg-accent transition-colors duration-300" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {submitted ? (
            <div className="flex flex-col gap-4 py-16">
              <div className="w-8 h-[1px] bg-accent" />
              <p className="font-serif text-2xl font-light text-white">
                {t.contact.successTitle}
              </p>
              <p className="font-sans text-sm font-light text-gray-400">
                {t.contact.successBody}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 self-start font-sans text-[11px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors duration-300"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500">
                  {t.contact.name}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  className="bg-transparent border-b border-gray-700 focus:border-accent outline-none py-3 font-sans text-sm text-white placeholder-gray-600 transition-colors duration-300"
                />
                {errors.name && (
                  <p className="font-sans text-[11px] text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500">
                  {t.contact.email}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="bg-transparent border-b border-gray-700 focus:border-accent outline-none py-3 font-sans text-sm text-white placeholder-gray-600 transition-colors duration-300"
                />
                {errors.email && (
                  <p className="font-sans text-[11px] text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500">
                  {t.contact.message}
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  className="bg-transparent border-b border-gray-700 focus:border-accent outline-none py-3 font-sans text-sm text-white placeholder-gray-600 transition-colors duration-300 resize-none"
                />
                {errors.message && (
                  <p className="font-sans text-[11px] text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 self-start inline-flex items-center gap-3 border border-white text-white font-sans text-[11px] tracking-[0.2em] uppercase px-7 py-4 hover:bg-accent hover:border-accent transition-all duration-300 group disabled:opacity-50"
              >
                {isSubmitting ? t.contact.sending : t.contact.submit}
                {!isSubmitting && (
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
