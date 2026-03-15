"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const beneficiaries = [
  { group: "Borrowers", desc: "More accessible lending with fairer collateral requirements and reduced risk of unexpected liquidations." },
  { group: "Blockchain Developers", desc: "A practical reference architecture for combining predictive AI with automated smart contract logic." },
  { group: "Fintech Sector", desc: "Demonstrates how AI-driven forecasting improves capital efficiency and risk governance in DeFi." },
  { group: "Policymakers & Regulators", desc: "Empirical data on safeguards and failure modes to inform consumer protection frameworks for DeFi." },
  { group: "Academic Community", desc: "Methodology, model results, and evaluation metrics as a resource for future DeFi and AI research." },
  { group: "Proponents & Institution", desc: "Hands-on multidisciplinary experience in blockchain development, applied ML, and software evaluation." },
];

export default function Slide08Significance({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          08
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
        <div className="flex items-center gap-5 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}
          >
            Significance of the Study
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-7" style={{ maxWidth: "72rem" }}>
          {beneficiaries.map(({ group, desc }, i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ height: 1, width: "2rem", backgroundColor: "#FF5C00", marginBottom: "0.75rem" }} />
              <p className="font-extrabold mb-2" style={{ fontSize: "1.2rem" }}>
                {group}
              </p>
              <p className="font-light text-[#6B6B6B] leading-relaxed" style={{ fontSize: "1.15rem" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
