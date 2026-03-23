"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const considerations = [
  {
    title: "Data Security",
    desc: "All data is encrypted and access-controlled. Only authorized researchers can view it.",
  },
  {
    title: "Anonymization",
    desc: "Any personal info collected during testing is anonymized to protect participants.",
  },
  {
    title: "Inclusive Design",
    desc: "Anyone can participate regardless of technical skill. The interface works for all levels of blockchain experience.",
  },
  {
    title: "Transparency",
    desc: "Participants are told upfront what the study is about, how their data is used, and what testing involves.",
  },
  {
    title: "No Financial Risk",
    desc: "Everything runs on a test network — no real money is involved at any point.",
  },
  {
    title: "Accountability",
    desc: "All development and testing methods are documented so results can be verified.",
  },
];

export default function Slide17Ethics({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg text */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-8" aria-hidden>
        <span
          className="font-extrabold leading-none text-white select-none"
          style={{ fontSize: "clamp(5rem,12vw,16rem)", opacity: 0.025 }}
        >
          ETHICS
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
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            Ethical Considerations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-7" style={{ maxWidth: "72rem" }}>
          {considerations.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ height: 1, width: "2rem", backgroundColor: "#FF5C00", marginBottom: "0.75rem", opacity: 0.8 }} />
              <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.15rem" }}>
                {title}
              </p>
              <p className="font-light text-white/50 leading-[1.6]" style={{ fontSize: "1.1rem" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
