"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const objectives = [
  "Identify the limitations, risks, and user requirements of existing DeFi lending platforms in terms of risk assessment, collateral efficiency, and volatility management.",
  "Determine the necessary features of Avelon — including AI-based ETH volatility prediction, borrower risk scoring, adaptive collateral mechanisms, and automated smart contract enforcement.",
  "Evaluate the performance, security, reliability, and usability of Avelon through AI model accuracy testing, smart contract validation, system performance analysis, and user acceptability assessment.",
];

export default function Slide06Objectives({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          06
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
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            Objectives
            <br />
            of the Study
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-2"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="flex flex-col gap-5" style={{ maxWidth: "56rem" }}>
          {objectives.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 items-start"
            >
              <span
                className="font-extrabold shrink-0"
                style={{ fontSize: "0.8rem", color: "#FF5C00", marginTop: "0.25rem", letterSpacing: "0.1em" }}
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
    </SlideWrapper>
  );
}
