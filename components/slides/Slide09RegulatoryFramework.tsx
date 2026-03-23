"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const cards = [
  {
    title: "Crypto is Legal",
    body: "Treated as a legal virtual commodity under BSP oversight — not legal tender, but fully permitted. Directly covers ETH collateral, liquidity pool, and loans.",
  },
  {
    title: "Regulatory Sandbox",
    body: "BSP Circular No. 1153 and SEC Strat Box (MC No. 9, 2024) allow safe piloting of DeFi protocols before full commercialization — the recognized route for Philippine fintech.",
  },
  {
    title: "AML / KYC Compliance",
    body: "VASPs must perform Customer Due Diligence. Avelon's AI-powered document verification and face recognition already satisfy these mandatory BSP AML/CFT requirements.",
  },
  {
    title: "Path to Commercialization",
    body: "VASP license moratorium extended in 2025 due to consumer protection concerns. Sandbox entry → VASP/CASP registration is the established commercialization path.",
  },
];

const refs = [
  { label: "BSP Circ. 1108 (2021)", href: "https://www.bsp.gov.ph/Regulations/Issuances/2021/1108.pdf" },
  { label: "BSP Circ. 1153 — Sandbox", href: "https://www.bsp.gov.ph/Regulations/Issuances/2022/1153.pdf" },
  { label: "SEC MC No. 9, 2024 — Strat Box", href: "https://www.grantthornton.com.ph/contentassets/aa23ed70f63e4b109a8f0f91079c72da/sec-mc-no.-09-series-of-2024.pdf" },
  { label: "Sanction Scanner — PH Crypto (2026)", href: "https://sanctionscanner.com/knowledge-base/cryptocurrency-regulations-in-the-philippines-218" },
];

export default function Slide09RegulatoryFramework({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div
        className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          09
        </span>
      </div>

      <div className="grid grid-cols-12 h-full px-16 pb-10 pt-0">
        {/* ── Left column ── */}
        <div className="col-span-5 flex flex-col justify-center pr-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overline mb-5"
            style={{ color: "#FF5C00" }}
          >
            Chapter 1 — Introduction
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}
          >
            Regulatory
            <br />
            Framework
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left mt-5 mb-7"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />

          {/* BSP pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              borderLeft: "3px solid #FF5C00",
              backgroundColor: "rgba(255, 92, 0, 0.05)",
              padding: "1rem 1.25rem",
            }}
          >
            <p
              className="font-light text-[#2A2A2A] leading-relaxed mb-3"
              style={{ fontSize: "0.95rem" }}
            >
              &ldquo;It is the policy of the Bangko Sentral to provide an environment that{" "}
              <strong className="font-semibold">encourages financial innovation</strong>
              &hellip; and may further{" "}
              <strong className="font-semibold">support financial inclusion</strong>.&rdquo;
            </p>
            <p className="font-light text-[#6B6B6B]" style={{ fontSize: "0.75rem" }}>
              — BSP Circular No. 1108, Series of 2021
            </p>
          </motion.blockquote>
        </div>

        {/* ── Right column ── */}
        <div className="col-span-7 flex flex-col justify-center pl-8 border-l border-[#E5E5E5]">
          <div className="grid grid-cols-2 gap-5 mb-6">
            {cards.map(({ title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  style={{ height: 1, width: "2rem", backgroundColor: "#FF5C00", marginBottom: "0.65rem" }}
                />
                <p className="font-extrabold mb-2 text-[#2A2A2A]" style={{ fontSize: "1.05rem" }}>
                  {title}
                </p>
                <p className="font-light text-[#6B6B6B] leading-relaxed" style={{ fontSize: "0.92rem" }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* References strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-4"
            style={{ borderTop: "1px solid #E5E5E5" }}
          >
            <span
              className="font-light text-[#AAAAAA] uppercase tracking-widest shrink-0"
              style={{ fontSize: "0.6rem" }}
            >
              References
            </span>
            {refs.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-[#DDDDDD]" style={{ fontSize: "0.7rem" }}>·</span>
                )}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light transition-opacity hover:opacity-70"
                  style={{ fontSize: "0.72rem", color: "#FF5C00", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  {label}
                </a>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
