"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const points = [
  "Traditional banks are slow, costly, and lock out people without credit history. DeFi cuts out the middleman — but still has major gaps.",
  "Platforms like Aave and Compound require borrowers to deposit more than they borrow. That ties up capital and limits access.",
  "ETH prices swing fast. Current platforms only react after collateral drops too low — they can't see risk coming.",
  "AI models (LSTM, GRU) can forecast crypto prices, yet almost no DeFi platform uses them. Avelon fills that gap.",
];

export default function Slide04Background({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.035 }}
        >
          04
        </span>
      </div>

      <div className="grid grid-cols-12 h-full px-16 pb-20">
        {/* Left: heading */}
        <div className="col-span-5 flex flex-col justify-center pr-12">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overline mb-5"
            style={{ color: "#FF5C00" }}
          >
            Chapter 1 — Introduction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            Background
            <br />
            of the Study
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left mt-6"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        {/* Right: content */}
        <div className="col-span-7 flex flex-col justify-center pl-8 border-l border-[#E5E5E5]">
          <div className="flex flex-col gap-8">
            {points.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 items-start"
              >
                <span
                  className="font-extrabold shrink-0"
                  style={{ fontSize: "1.1rem", color: "#FF5C00", lineHeight: 1.4 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-light leading-[1.7] text-[#2A2A2A]" style={{ fontSize: "1.35rem" }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
