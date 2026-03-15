"use client";

import { motion } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";

interface Props { direction?: 1 | -1; }

const references = [
  "Atzei, N., Bartoletti, M., & Cimoli, T. (2021). A survey of attacks on Ethereum smart contracts (SoK). Principles of Security and Trust, 164–186. https://doi.org/10.1007/978-3-662-54455-6_8",
  "Khan, A. U., et al. (2021). Cryptocurrency price prediction using deep learning techniques. IEEE Access, 9, 98985–99003. https://doi.org/10.1109/ACCESS.2021.3095895",
  "Qin, K., Zhou, L., Livshits, B., & Gervais, A. (2021). Attacking the DeFi ecosystem with flash loans for fun and profit. Financial Cryptography and Data Security. https://doi.org/10.1007/978-3-662-64322-8_5",
  "Schär, F. (2021). Decentralized finance: On blockchain- and smart contract-based financial markets. Federal Reserve Bank of St. Louis Review, 103(2), 153–174. https://doi.org/10.20955/r.103.153-74",
  "Bangko Sentral ng Pilipinas. (2022). Open finance framework. https://www.bsp.gov.ph",
  "Chainalysis. (2023). The 2023 global crypto adoption index. https://www.chainalysis.com",
];

export default function Slide18References({ direction = 1 }: Props) {
  return (
    <SlideWrapper direction={direction}>
      {/* Ghost number */}
      <div className="absolute right-12 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden>
        <span
          className="font-extrabold leading-none text-[#2A2A2A] select-none"
          style={{ fontSize: "clamp(10rem,22vw,28rem)", opacity: 0.03 }}
        >
          18
        </span>
      </div>

      <div className="flex flex-col justify-center h-full px-16 pb-20">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overline mb-5"
          style={{ color: "#FF5C00" }}
        >
          Bibliography
        </motion.span>
        <div className="flex items-center gap-5 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
          >
            References
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="origin-left self-end mb-1"
            style={{ height: 1, width: "6rem", backgroundColor: "#FF5C00" }}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-14 gap-y-3" style={{ maxWidth: "72rem" }}>
          {references.map((ref, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.05 }}
              className="flex items-start gap-3"
            >
              <span
                className="shrink-0 font-extrabold"
                style={{ color: "#FF5C00", fontSize: "0.65rem", marginTop: "0.3rem", letterSpacing: "0.1em" }}
              >
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <p className="font-light text-[#2A2A2A] leading-relaxed" style={{ fontSize: "0.9rem" }}>
                {ref}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
