"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const techGroups = [
  {
    category: "Frontend",
    items: ["Next.js + React (Web)", "React Native + Expo (Mobile)", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Hono.js on Node.js", "FastAPI (Python)", "Prisma ORM", "Redis"],
  },
  {
    category: "Blockchain",
    items: ["Solidity (Smart Contracts)", "Hardhat", "Ethers.js", "Ethereum Sepolia Testnet"],
  },
  {
    category: "Database",
    items: ["PostgreSQL (Neon)", "Redis (Cache & Sessions)", "Encrypted KYC Storage"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch + MobileNetV2 (docs)", "XGBoost (credit scoring)", "EasyOCR + OpenCV", "LSTM / GRU (volatility)"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub", "Render / Vercel", "TypeScript + ESLint"],
  },
];

export default function Slide12Tools({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          12
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
            Tools &amp; Technologies
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-8" style={{ maxWidth: "68rem" }}>
          {techGroups.map(({ category, items }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div style={{ height: 1, width: "1.5rem", backgroundColor: "#FF5C00" }} />
                <span className="overline" style={{ color: "#FF5C00" }}>{category}</span>
              </div>
              {items.map((item) => (
                <p
                  key={item}
                  className="font-light leading-relaxed text-[#2A2A2A]"
                  style={{ fontSize: "1.1rem", borderBottom: "1px solid #E5E5E5", paddingBottom: "0.4rem", marginBottom: "0.4rem" }}
                >
                  {item}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
