"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const blocks = [
  {
    heading: "Cryptocurrency Users",
    body: "People who already use crypto wallets and DeFi apps. They test Avelon's blockchain features. — 1 respondent.",
  },
  {
    heading: "Potential Borrowers",
    body: "People interested in digital lending who represent Avelon's target users. They test the loan flow and usability. — 5 respondents.",
  },
  {
    heading: "Locale",
    body: "PHINMA – University of Pangasinan. All development and testing done locally and on cloud services. Blockchain runs on a test network — no real funds.",
  },
];

export default function Slide13Population({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          13
        </span>
      </div>

      <div className="grid grid-cols-12 h-full px-16 pb-20">
        {/* Left: Heading */}
        <div className="col-span-5 flex flex-col justify-center pr-12">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overline mb-5"
            style={{ color: "#FF5C00" }}
          >
            Chapter 2 — Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            Population
            <br />
            &amp; Locale
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left mt-6"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        {/* Right: Content */}
        <div className="col-span-7 flex flex-col justify-center pl-10 border-l border-[#E5E5E5]">
          {blocks.map(({ heading, body }, i) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7"
            >
              <p className="font-extrabold mb-2" style={{ fontSize: "1.2rem" }}>{heading}</p>
              <p className="font-light text-[#6B6B6B] leading-[1.7]" style={{ fontSize: "1.3rem" }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
