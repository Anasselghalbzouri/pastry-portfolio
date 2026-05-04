"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const SUGGESTIONS = [
  "Professional background?",
  "Technical skills?",
  "Work approach?",
  "International experience?",
  "Languages?",
  "Career goal?",
  "What techniques does Reda master?",
  "Is Reda available for a stage?",
  "What pastries has Reda made?",
  "Where is Reda based?",
];

const ANSWERS: Record<string, string> = {
  "Professional background?":
    "I am a Trainee Pastry Chef from Morocco, with experience in 4 and 5-star hotel kitchens as well as artisan bakeries. I work within structured, high-standard production environments focused on quality and consistency.",
  "Technical skills?":
    "I specialize in modern entremets, chocolate work, and viennoiserie production, with strong attention to precision, presentation, and HACCP food safety standards.",
  "Work approach?":
    "I rely on discipline, organization, and efficiency in my work. I maintain a clean and structured workspace and ensure consistent performance even in high-pressure environments.",
  "International experience?":
    "I have trained in kitchens within international hotel groups such as Radisson Blu and Accor, where I learned to work according to professional standards and luxury hospitality requirements.",
  "Languages?":
    "I speak Arabic and French fluently, and I have a professional level of English, which allows me to communicate effectively in multicultural kitchen environments.",
  "Career goal?":
    "My goal is to join a professional pastry team within a leading hotel group or a Michelin-level kitchen, to further develop my skills and contribute to a high-standard working environment.",
  "What techniques does Reda master?":
    "Reda works across classical French techniques — pâte sucrée, blind baking, Italian meringue, mirror glazing, praline feuilletine, chocolate tempering, bavarois mousse, and choux pastry. Precision and repetition are at the core of his practice.",
  "Is Reda available for a stage?":
    "Yes — Reda is actively seeking stage opportunities in Michelin-level kitchens. He is dedicated, disciplined, and ready to contribute from day one. Reach him via the contact section.",
  "What pastries has Reda made?":
    "Reda has worked on lemon meringue tarts, chocolate entremets with mirror glaze, Paris-Brest with praline mousseline, salted caramel squares, raspberry mousse, and dark chocolate brownies.",
  "Where is Reda based?":
    "Reda is currently based in Morocco and is open to stage opportunities internationally, particularly in France and Europe.",
};

const WELCOME = "Bonjour! I am Reda's AI assistant. How can I help you today? 🥐";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const answer =
        ANSWERS[text] ||
        "I don't have a specific answer for that, but feel free to reach out directly via the contact section — Reda would be happy to respond personally.";
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: answer }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle button — rounded, glowing */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2">
        {/* Pulse ring */}
        {!open && (
          <motion.span
            className="absolute w-14 h-14 rounded-full bg-accent/20"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <motion.button
          type="button"
          aria-label="Open chat"
          onClick={() => setOpen((o) => !o)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-full bg-primary shadow-xl flex flex-col items-center justify-center gap-0.5 hover:bg-accent transition-colors duration-300"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={18} className="text-white" />
              </motion.span>
            ) : (
              <motion.span key="logo" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.2 }} className="flex flex-col items-center">
                <span className="font-serif text-[15px] font-semibold tracking-[0.08em] text-accent leading-none">RE</span>
                <Sparkles size={9} className="text-white/50 mt-0.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
        {/* Label */}
        {!open && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-sans text-[8px] tracking-[0.2em] uppercase text-gray-400"
          >
            Ask AI
          </motion.span>
        )}
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-28 left-6 z-50 w-80 rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden border border-stone-100"
            style={{ maxHeight: "72vh" }}
          >
            {/* Header */}
            <div className="bg-primary rounded-t-2xl px-4 py-4 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-accent/40 flex items-center justify-center shrink-0">
                <span className="font-serif text-[14px] font-semibold tracking-wide text-accent">RE</span>
              </div>
              <div className="flex-1">
                <p className="font-sans text-[11px] font-semibold text-white">Reda&apos;s Assistant</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <p className="font-sans text-[10px] text-white/50">Online · AI powered</p>
                </div>
              </div>
              <Sparkles size={14} className="text-accent/60" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0 bg-stone-50/50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mb-0.5">
                      <span className="font-serif text-[9px] font-semibold text-accent">RE</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 font-sans text-[12px] leading-relaxed ${
                      msg.from === "user"
                        ? "bg-primary text-white rounded-2xl rounded-br-sm"
                        : "bg-white text-gray-600 rounded-2xl rounded-bl-sm shadow-sm border border-stone-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="font-serif text-[9px] font-semibold text-accent">RE</span>
                    </div>
                    <div className="bg-white border border-stone-100 rounded-2xl rounded-bl-sm shadow-sm px-4 py-3 flex items-center gap-1.5">
                      {[0, 0.18, 0.36].map((delay, i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-accent"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.55, repeat: Infinity, delay }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Suggestions chips */}
            <div className="px-3 py-2.5 border-t border-stone-100 bg-white flex gap-2 overflow-x-auto shrink-0">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => sendMessage(s)}
                  className="shrink-0 font-sans text-[10px] rounded-full border border-stone-200 text-gray-500 hover:border-accent hover:text-accent hover:bg-accent/5 px-3 py-1.5 transition-all duration-200 whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex items-center gap-2 px-3 py-3 border-t border-stone-100 bg-white rounded-b-2xl shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                className="flex-1 font-sans text-[12px] text-gray-600 placeholder-gray-300 outline-none bg-stone-50 rounded-full px-4 py-2"
              />
              <button
                type="submit"
                aria-label="Send"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:bg-accent transition-colors duration-200 shrink-0"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
