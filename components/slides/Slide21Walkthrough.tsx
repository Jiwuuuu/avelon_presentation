"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const features = [
  { label: "User Registration & KYC", desc: "Document upload, admin review, and identity verification flow." },
  { label: "Collateral Deposit", desc: "ETH deposit via WalletConnect on Sepolia testnet with txHash tracking." },
  { label: "Loan Application", desc: "Borrow against deposited collateral with configurable LTV ratio." },
  { label: "Loan Repayment", desc: "In-app wallet repayment with automatic status updates." },
  { label: "Dashboard & Analytics", desc: "Loan overview, collateral health, and transaction history." },
  { label: "Admin Panel", desc: "KYC approval, system monitoring, and user management." },
];

export default function Slide19Walkthrough({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none" aria-hidden>
        <span
          className="font-extrabold leading-none text-white select-none"
          style={{ fontSize: "clamp(5rem,12vw,16rem)", opacity: 0.025 }}
        >
          DEMO
        </span>
      </div>

      <div className="flex flex-col justify-center h-full px-16 pb-20">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overline mb-5"
          style={{ color: "#FF5C00" }}
        >
          Initial Prototype
        </motion.span>
        <div className="flex items-center gap-5 mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem,5.5vw,5rem)" }}
          >
            System Walkthrough
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-light text-white/50 mb-12"
          style={{ fontSize: "1.1rem" }}
        >
          A live demonstration of the Avelon platform's core lending workflows.
        </motion.p>

        <div className="grid grid-cols-3 gap-x-10 gap-y-7" style={{ maxWidth: "68rem" }}>
          {features.map(({ label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-extrabold" style={{ color: "#FF5C00", fontSize: "1.05rem", letterSpacing: "0.15em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ height: 1, flex: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
              </div>
              <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.15rem" }}>
                {label}
              </p>
              <p className="font-light text-white/45 leading-relaxed" style={{ fontSize: "1rem" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex items-center gap-4"
        >
          <div style={{ height: 1, width: "2rem", backgroundColor: "#FF5C00" }} />
          <span className="overline text-white/30">Live demo to follow →</span>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
