"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const problems = [
  "What are the limitations of existing DeFi lending platforms in managing risk, collateral, and price volatility?",
  "What features does Avelon need — such as ETH price prediction, risk scoring, flexible collateral, and automated smart contracts?",
  "How does Avelon perform in terms of security, usability, and reliability based on testing and user feedback?",
];

export default function Slide05Problem({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg text */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-8" aria-hidden>
        <span
          className="font-extrabold leading-none text-white select-none"
          style={{ fontSize: "clamp(8rem,18vw,22rem)", opacity: 0.025 }}
        >
          PROBLEM
        </span>
      </div>

      <div className="flex flex-col justify-center h-full px-16 pb-20">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overline mb-5"
          style={{ color: "#FF5C00" }}
        >
          Chapter 1 — Introduction
        </motion.span>
        <div className="flex items-center gap-5 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
          >
            Statement of
            <br />
            the Problem
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-2"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="flex flex-col gap-7" style={{ maxWidth: "60rem" }}>
          {problems.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5"
            >
              <span
                className="font-extrabold shrink-0 mt-0.5"
                style={{ fontSize: "1.1rem", color: "#FF5C00", lineHeight: 1.4 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-light text-white/70 leading-[1.7]" style={{ fontSize: "1.35rem" }}>
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
