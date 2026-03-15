"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const team = [
  { num: "01", role: "Project Manager",  name: "Will Anthony B. Barillo", img: "/team/will.webp",    initials: "WB" },
  { num: "02", role: "Researcher",       name: "Michael Lozano",          img: "/team/michael.webp", initials: "ML" },
  { num: "03", role: "Document Writer",  name: "Theo Alexis Juan",        img: "/team/theo.webp",    initials: "TJ" },
  { num: "04", role: "Designer",         name: "Jerie C. Lacap",          img: "/team/jerie.webp",   initials: "JL" },
  { num: "05", role: "Developer",        name: "Andrei Louise Amrinto",   img: "/team/andrei.webp",  initials: "AA" },
  { num: "06", role: "Developer",        name: "Genesis Lirazan",         img: "/team/genesis.webp", initials: "GL" },
];

function MemberCard({ num, role, name, img, initials, delay }: typeof team[0] & { delay: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col"
    >
      {/* Photo card */}
      <div
        className="relative w-full overflow-hidden mb-4"
        style={{ aspectRatio: "3/4", backgroundColor: "#E5E5E5", borderRadius: 4 }}
      >
        {/* Fallback initials — always visible beneath the image */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <span className="font-extrabold text-[#2A2A2A]/20" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            {initials}
          </span>
        </div>

        {/* Actual photo — hides gracefully if file missing */}
        {!failed && (
          <img
            src={img}
            alt={name}
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}

        {/* Number badge */}
        <div className="absolute top-3 left-3 font-extrabold" style={{ fontSize: "0.65rem", color: "#FF5C00", letterSpacing: "0.15em" }}>
          {num}
        </div>
      </div>

      <p className="font-extrabold leading-tight" style={{ fontSize: "clamp(0.9rem,1.4vw,1.1rem)" }}>
        {name}
      </p>
      <p className="font-light mt-1" style={{ fontSize: "0.95rem", color: "#6B6B6B", letterSpacing: "0.05em" }}>
        {role}
      </p>
    </motion.div>
  );
}

export default function Slide02Team({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,26rem)", opacity: 0.03 }}>
          02
        </span>
      </div>

      <div className="flex flex-col h-full px-16 pb-20 pt-12">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overline mb-3" style={{ color: "#FF5C00" }}
        >
          The People Behind Avelon
        </motion.span>
        <div className="flex items-center gap-5 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2rem,5vw,4rem)" }}
          >
            MEET THE TEAM
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-6 gap-6 flex-1 min-h-0" style={{ maxWidth: "72rem" }}>
          {team.map((member, i) => (
            <MemberCard key={member.num} {...member} delay={0.3 + i * 0.07} />
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
