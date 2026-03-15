"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Slide01Title({ direction = 1 }: Props) {
  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-extrabold leading-none tracking-tight text-white select-none whitespace-nowrap"
          style={{ fontSize: "clamp(8rem,20vw,22rem)", opacity: 0.04 }}
        >
          AVELON
        </span>
      </div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-12 pt-10">
        <motion.span {...fadeUp(0.1)} className="overline text-white/40">
          ITE 309 — CAPSTONE PROJECT &amp; RESEARCH 1
        </motion.span>
        <motion.span {...fadeUp(0.1)} className="overline" style={{ color: "#FF5C00" }}>
          MARCH 16, 2026
        </motion.span>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-start justify-center h-full px-16 pb-20">
        <motion.span
          {...fadeUp(0.15)}
          className="overline mb-6"
          style={{ color: "#FF5C00" }}
        >
          System Development
        </motion.span>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-extrabold leading-[0.9] tracking-tight text-white"
          style={{ fontSize: "clamp(4.5rem,12vw,10rem)" }}
        >
          AVELON
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left mt-6 mb-6"
          style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
        />

        <motion.p
          {...fadeUp(0.45)}
          className="font-light text-white/60 max-w-lg"
          style={{ fontSize: "clamp(1rem,1.5vw,1.35rem)", lineHeight: 1.7 }}
        >
          A Blockchain-Based Collateral Lending Platform
          <br />
          for Transparent and Decentralized Financial Access
        </motion.p>
      </div>

      {/* Bottom bar */}
      <motion.div
        {...fadeUp(0.55)}
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-12 pb-20 text-white/30 overline"
        style={{ fontSize: "1.05rem" }}
      >
        <div className="flex flex-col gap-1.5">
          <span>
            <span className="text-white/50">TRACK</span>&nbsp;&nbsp;System Development
          </span>
          <span>
            <span className="text-white/50">ADVISER</span>&nbsp;&nbsp;Veronica L. Canlas
          </span>
        </div>
        <span className="text-white/20">CICS — ACES</span>
      </motion.div>
    </SlideWrapper>
  );
}
