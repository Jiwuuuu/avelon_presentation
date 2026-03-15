"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  dark?: boolean;
  children: ReactNode;
  className?: string;
  direction?: 1 | -1;
}

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
  }),
};

export default function SlideWrapper({
  dark = false,
  children,
  className = "",
  direction = 1,
}: SlideWrapperProps) {
  return (
    <motion.section
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={[
        "absolute inset-0 w-full h-full overflow-hidden font-gilroy",
        dark ? "bg-[#1A1A1A] text-white" : "bg-[#F5F5F5] text-[#2A2A2A]",
        className,
      ].join(" ")}
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "url(/images/noise-texture.webp)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.06,
        }}
      />
      {/* Slide content */}
      <div className="relative z-[2] w-full h-full">{children}</div>
    </motion.section>
  );
}
