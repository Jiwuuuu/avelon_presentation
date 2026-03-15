"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const techniques = [
  {
    num: "01",
    method: "Literature Review",
    desc: "Review of academic journals, DeFi research, blockchain whitepapers, and AI credit scoring studies to establish the system's theoretical foundation.",
  },
  {
    num: "02",
    method: "Secondary Data Collection",
    desc: "Historical ETH price data and blockchain transaction records from public crypto databases — used to train and validate AI models.",
  },
  {
    num: "03",
    method: "System Logging",
    desc: "Automated logs during testing capture transaction processing time, smart contract gas usage, API response time, and error rates.",
  },
  {
    num: "04",
    method: "Survey Questionnaires",
    desc: "Likert-scale forms distributed to selected participants after pilot testing to measure usability, functionality, and overall user experience.",
  },
  {
    num: "05",
    method: "Experimental Testing",
    desc: "Controlled experiments evaluate AI model accuracy, smart contract execution, and system scalability under simulated transaction loads.",
  },
];

export default function Slide14DataGathering({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          14
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
            style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}
          >
            Data Gathering Techniques
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8" style={{ maxWidth: "68rem" }}>
          {techniques.map(({ num, method, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5"
            >
              <span
                className="font-extrabold shrink-0 mt-0.5"
                style={{ fontSize: "1.1rem", color: "#FF5C00", lineHeight: 1.4 }}
              >
                {num}
              </span>
              <div>
                <p className="font-extrabold mb-2" style={{ fontSize: "1.2rem" }}>{method}</p>
                <p className="font-light text-[#6B6B6B] leading-[1.6]" style={{ fontSize: "1.15rem" }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
