"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const items = [
  { num: "01", label: "Chapter 1 — Introduction" },
  { num: "02", label: "Chapter 2 — Methodology" },
  { num: "03", label: "System Walkthrough (Initial Prototype)" },
];

export default function Slide03Agenda({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg text */}
      <div className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none select-none" aria-hidden>
        <span
          className="font-extrabold leading-none text-white select-none"
          style={{ fontSize: "clamp(8rem,18vw,20rem)", opacity: 0.03, paddingLeft: "3rem" }}
        >
          TODAY
        </span>
      </div>

      <div className="flex flex-col justify-center h-full px-16 pb-20">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overline mb-4"
          style={{ color: "#FF5C00" }}
        >
          What We'll Cover
        </motion.span>
        <div className="flex items-center gap-5 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            AGENDA
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="origin-left"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="flex flex-col gap-8">
          {items.map(({ num, label }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-8"
            >
              <span
                className="font-extrabold shrink-0"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#FF5C00", opacity: 0.7, lineHeight: 1 }}
              >
                {num}
              </span>
              <div>
                <div style={{ height: 1, width: "2rem", backgroundColor: "rgba(255,255,255,0.15)", marginBottom: "0.75rem" }} />
                <p className="font-light text-white" style={{ fontSize: "clamp(1.1rem,2vw,1.6rem)" }}>
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
