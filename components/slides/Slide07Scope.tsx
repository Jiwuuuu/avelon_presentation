"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const scope = [
  "ETH-based lending with AI-driven price volatility prediction and automated borrower risk scoring.",
  "Smart contract-based loan management — loan creation, repayment enforcement, and collateral liquidation.",
  "Web app and mobile app as user interfaces, backed by a RESTful API and PostgreSQL database.",
  "Prototype system demonstrating capital efficiency improvements and accessible lending for non-technical users.",
];

const delimitations = [
  "Limited to Ethereum-based assets only — no other blockchains or cross-chain support.",
  "Developed as a prototype — no real user funds, no mainnet deployment.",
  "No assessment of long-term financial outcomes or profitability.",
  "Formal third-party security audits and regulatory compliance review are out of scope.",
];

export default function Slide07Scope({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          07
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-extrabold leading-[0.9] tracking-tight mb-10"
          style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
        >
          Scope &amp; Delimitation
        </motion.h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Scope */}
          <div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3 mb-6"
            >
              <div style={{ height: 1, width: "2rem", backgroundColor: "#FF5C00" }} />
              <span className="overline" style={{ color: "#FF5C00" }}>Scope</span>
            </motion.div>
            {scope.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="font-light leading-[1.7] text-[#2A2A2A] mb-4"
                style={{ fontSize: "1.3rem" }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Delimitations */}
          <div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div style={{ height: 1, width: "2rem", backgroundColor: "#6B6B6B" }} />
              <span className="overline" style={{ color: "#6B6B6B" }}>Delimitations</span>
            </motion.div>
            {delimitations.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.45 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="font-light leading-[1.7] text-[#6B6B6B] mb-4"
                style={{ fontSize: "1.3rem" }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
