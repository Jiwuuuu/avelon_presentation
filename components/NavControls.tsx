"use client";

import { motion } from "framer-motion";

interface NavControlsProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

export default function NavControls({
  current,
  total,
  onNext,
  onPrev,
  onGoTo,
}: NavControlsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 pointer-events-none">
      {/* Prev button */}
      <motion.button
        onClick={onPrev}
        disabled={current === 0}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.95 }}
        className={[
          "pointer-events-auto flex items-center gap-2 overline transition-opacity duration-300",
          current === 0 ? "opacity-20 cursor-not-allowed" : "opacity-60 hover:opacity-100 cursor-pointer",
        ].join(" ")}
        style={{ color: current === 0 ? "#2A2A2A" : undefined }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>PREV</span>
      </motion.button>

      {/* Slide dots + counter */}
      <div className="pointer-events-auto flex flex-col items-center gap-3">
        {/* Dots — show only nearby slides for cleanliness */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => {
            const isActive = i === current;
            const isNear = Math.abs(i - current) <= 3;
            if (!isNear && i !== 0 && i !== total - 1) return null;
            return (
              <motion.button
                key={i}
                onClick={() => onGoTo(i)}
                animate={{
                  width: isActive ? 20 : 6,
                  opacity: isActive ? 1 : 0.35,
                }}
                transition={{ duration: 0.3 }}
                className="h-[3px] rounded-full cursor-pointer"
                style={{ backgroundColor: isActive ? "#FF5C00" : "#2A2A2A" }}
                title={`Slide ${i + 1}`}
              />
            );
          })}
        </div>
        {/* Counter */}
        <span
          className="overline"
          style={{ color: "#6B6B6B" }}
        >
          {String(current + 1).padStart(2, "0")}{" "}
          <span style={{ color: "#FF5C00" }}>/</span>{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        disabled={current === total - 1}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.95 }}
        className={[
          "pointer-events-auto flex items-center gap-2 overline transition-opacity duration-300",
          current === total - 1 ? "opacity-20 cursor-not-allowed" : "opacity-60 hover:opacity-100 cursor-pointer",
        ].join(" ")}
      >
        <span>NEXT</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
