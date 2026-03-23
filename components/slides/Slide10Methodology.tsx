"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const phases = [
  { label: "Scope", desc: "Defined system goals, project boundaries, and key features for Avelon." },
  { label: "Product Backlog", desc: "Prioritized all development tasks — lending features, AI models, smart contracts, KYC." },
  { label: "Sprint Planning", desc: "Selected specific tasks from the backlog for each development sprint cycle." },
  { label: "Sprint Execution", desc: "Built UI modules, backend API, smart contracts, and AI components incrementally." },
  { label: "Sprint Review", desc: "Demonstrated completed work at end of each sprint and verified against requirements." },
  { label: "Retrospective", desc: "Evaluated the development process and identified improvements for the next sprint." },
];

export default function Slide09Methodology({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg text */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-8" aria-hidden>
        <span
          className="font-extrabold leading-none text-white select-none"
          style={{ fontSize: "clamp(5rem,14vw,18rem)", opacity: 0.025 }}
        >
          SDLC
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
            className="font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}
          >
            Software Development
            <br />Methodology
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-extrabold text-white" style={{ fontSize: "clamp(1.2rem,2.5vw,2rem)" }}>
            Agile (Scrum)
          </span>
          <div style={{ height: 1, flexGrow: 1, maxWidth: "8rem", backgroundColor: "rgba(255,255,255,0.15)" }} />
          <span className="font-light text-white/50 overline">Iterative Sprints</span>
        </motion.div>

        <div className="flex gap-0">
          {phases.map(({ label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 pr-6 border-r border-white/10 last:border-0 last:pr-0 pl-0"
              style={{ paddingLeft: i > 0 ? "1.5rem" : 0 }}
            >
              <span className="font-extrabold block mb-2" style={{ color: "#FF5C00", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-extrabold text-white leading-tight mb-2" style={{ fontSize: "1.1rem" }}>
                {label}
              </p>
              <p className="font-light text-white/50 leading-relaxed" style={{ fontSize: "1rem" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
