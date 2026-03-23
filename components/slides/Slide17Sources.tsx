"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const sources = [
  {
    type: "Primary Sources",
    color: "#FF5C00",
    items: [
      "Crypto users who have used wallets and DeFi apps",
      "Potential borrowers — Avelon's target users",
      "System logs, test results, and transaction data from the prototype",
    ],
  },
  {
    type: "Secondary Sources",
    color: "#6B6B6B",
    items: [
      "Historical ETH price data and blockchain records from public databases",
      "Academic papers on DeFi, smart contracts, credit scoring, and price prediction",
      "Technical docs (Ethereum, Solidity, Hono.js, Prisma, etc.)",
    ],
  },
];

export default function Slide15Sources({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          15
        </span>
      </div>

      <div className="flex flex-col justify-center h-full px-16 pb-20">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overline mb-5"
          style={{ color: "#FF5C00" }}
        >
          Chapter 2 — Methodology
        </motion.span>
        <div className="flex items-center gap-5 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            Sources of Data
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-2 gap-16" style={{ maxWidth: "68rem" }}>
          {sources.map(({ type, color, items }, gi) => (
            <motion.div key={type}>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + gi * 0.15 }}
                className="flex items-center gap-3 mb-6"
              >
                <div style={{ height: 1, width: "2rem", backgroundColor: color }} />
                <span className="overline" style={{ color }}>{type}</span>
              </motion.div>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + gi * 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 mb-5"
                >
                  <div className="shrink-0 mt-2 rounded-full" style={{ width: 5, height: 5, backgroundColor: color }} />
                  <p className="font-light text-[#2A2A2A] leading-[1.6]" style={{ fontSize: "1.2rem" }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
