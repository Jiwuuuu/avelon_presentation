"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const connections = [
  {
    phase: "Scope",
    connection: "We defined what Avelon needs to do — lending, KYC, AI risk scoring, smart contracts — and set the boundaries for the prototype.",
  },
  {
    phase: "Product Backlog",
    connection: "We listed all features and tasks by priority: smart contract logic, AI microservice, mobile wallet, KYC verification flow.",
  },
  {
    phase: "Sprint Planning",
    connection: "Each sprint had one clear goal — one sprint for smart contracts, another for the AI service, another for the frontend.",
  },
  {
    phase: "Sprint Execution",
    connection: "We built iteratively: contracts first, then backend API, then web app, then mobile app with WalletConnect.",
  },
  {
    phase: "Sprint Review",
    connection: "At the end of each sprint we validated working features against requirements and collected feedback from the team.",
  },
  {
    phase: "Retrospective",
    connection: "We identified blockers and process improvements after each sprint to make the next iteration smoother.",
  },
];

export default function Slide10MethodologyConnection({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          10
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
        <div className="flex items-center gap-5 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            Scrum Applied to Avelon
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-7" style={{ maxWidth: "72rem" }}>
          {connections.map(({ phase, connection }, i) => (
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-extrabold" style={{ color: "#FF5C00", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-extrabold" style={{ fontSize: "1.15rem" }}>{phase}</span>
              </div>
              <div style={{ height: 1, width: "2rem", backgroundColor: "#E5E5E5", marginBottom: "0.75rem" }} />
              <p className="font-light text-[#6B6B6B] leading-[1.6]" style={{ fontSize: "1.15rem" }}>
                {connection}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
