"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const treatments = [
  {
    tool: "Data Collection & Processing",
    use: "Logs, ETH price datasets, blockchain records, and surveys systematically recorded. Data is cleaned, normalized, and missing values handled before model training.",
  },
  {
    tool: "AI Model Evaluation",
    use: "Predictive models assessed using accuracy, precision, recall, and Mean Absolute Error (MAE) to measure forecasting performance.",
  },
  {
    tool: "System Performance Analysis",
    use: "Transaction processing time, smart contract gas consumption, API response latency, and uptime measured using mean, percentage, and standard deviation.",
  },
  {
    tool: "Survey & Comparative Analysis",
    use: "Likert-scale survey responses analyzed via weighted mean. System efficiency benchmarked against established baseline indicators.",
  },
];

export default function Slide16Treatment({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          16
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
            Treatment of Data
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-14 gap-y-8" style={{ maxWidth: "68rem" }}>
          {treatments.map(({ tool, use }, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ height: 1, width: "2rem", backgroundColor: "#FF5C00", marginBottom: "0.75rem" }} />
              <p className="font-extrabold mb-3" style={{ fontSize: "1.2rem" }}>{tool}</p>
              <p className="font-light text-[#6B6B6B] leading-[1.6]" style={{ fontSize: "1.15rem" }}>
                {use}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
