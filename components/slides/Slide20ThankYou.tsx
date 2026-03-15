"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const names = [
  "Will Anthony B. Barillo",
  "Michael Lozano",
  "Theo Alexis Juan",
  "Jerie C. Lacap",
  "Andrei Louise Amrinto",
  "Genesis Lirazan",
];

export default function Slide20ThankYou({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Giant ghost AVELON */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-extrabold leading-none tracking-tight text-white select-none"
          style={{ fontSize: "clamp(6rem,18vw,21rem)", opacity: 0.04 }}
        >
          AVELON
        </span>
      </div>

      {/* Top left branding */}
      <div className="absolute top-10 left-12 flex items-center gap-3">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-extrabold text-white"
          style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)" }}
        >
          AVELON
          <span style={{ color: "#FF5C00" }}>.</span>
        </motion.span>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center justify-center h-full pb-16">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overline mb-8 text-white/30"
        >
          ITE 309 — Capstone Project &amp; Research 1
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-extrabold leading-[0.9] tracking-tight text-white text-center"
          style={{ fontSize: "clamp(4rem,10vw,9rem)" }}
        >
          Thank You
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="origin-center my-8"
          style={{ height: 1, width: "8rem", backgroundColor: "#FF5C00" }}
        />

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-light text-white/40 text-center"
          style={{ fontSize: "1.05rem" }}
        >
          We are open for questions.
        </motion.p>
      </div>

      {/* Bottom — team names */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 px-12 pb-20"
      >
        {names.map((name, i) => (
          <span
            key={name}
            className="font-light text-white/25"
            style={{ fontSize: "clamp(0.6rem,0.75vw,0.75rem)", letterSpacing: "0.05em" }}
          >
            {name}
            {i < names.length - 1 && (
              <span style={{ color: "#FF5C00", marginLeft: "2rem" }}>·</span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Adviser credit */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute bottom-10 right-12 overline text-white/20"
        style={{ fontSize: "0.65rem" }}
      >
        Adviser: Veronica L. Canlas
      </motion.div>
    </SlideWrapper>
  );
}
