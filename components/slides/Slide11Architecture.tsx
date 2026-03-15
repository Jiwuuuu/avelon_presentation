"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";
import { subStepRef } from "@/lib/sub-step";

interface Props { direction?: 1 | -1; }

const TOTAL_STEPS = 4;

const tierVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

/* ─── reusable accent box ─── */
function AccentBox({
  orange,
  children,
  className,
  compact,
}: {
  orange?: boolean;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={"flex items-stretch " + (className || "")}
      style={{
        border: `1px solid ${orange ? "rgba(255,92,0,0.4)" : "rgba(255,255,255,0.14)"}`,
        backgroundColor: orange ? "rgba(255,92,0,0.1)" : "rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ width: compact ? 2 : 3, flexShrink: 0, backgroundColor: "#FF5C00" }} />
      <div className={compact ? "px-3 py-2 w-full" : "px-6 py-5 w-full"}>{children}</div>
    </div>
  );
}

/* ─── pill chip ─── */
function Pill({ children, compact }: { children: React.ReactNode; compact?: boolean }) {
  return (
    <span
      className="font-light text-white/60"
      style={{
        fontSize: compact ? "0.6rem" : "0.9rem",
        padding: compact ? "0.15rem 0.4rem" : "0.3rem 0.75rem",
        border: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
    >
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  TIER 0 — Client Layer                                 */
/* ═══════════════════════════════════════════════════════ */
function TierClient() {
  return (
    <div className="flex flex-col justify-center h-full">
      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>
        TIER 1
      </p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-8" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Client Layer
      </h3>

      <div className="grid grid-cols-2 gap-5 mb-8">
        <AccentBox orange>
          <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.3rem" }}>
            React Native + Expo
          </p>
          <p className="font-light text-white/40 mb-4" style={{ fontSize: "0.85rem" }}>
            Borrower Mobile App — SDK 54, Expo Router, NativeWind, Zustand
          </p>
          <div className="flex flex-wrap gap-2">
            {["KYC Verification Wizard", "Loan Application", "Wallet Connect", "Push Notifications", "ETH Price Charts"].map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </AccentBox>

        <AccentBox orange>
          <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.3rem" }}>
            Next.js 16 — Admin Dashboard
          </p>
          <p className="font-light text-white/40 mb-4" style={{ fontSize: "0.85rem" }}>
            Web Management Panel — App Router, Tailwind CSS, React Context
          </p>
          <div className="flex flex-wrap gap-2">
            {["User Management", "Loan Monitoring", "KYC Review", "Analytics Dashboard", "Blockchain Status", "Audit Logs"].map((f) => (
              <Pill key={f}>{f}</Pill>
            ))}
          </div>
        </AccentBox>
      </div>

      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-2" style={{ width: 32, height: 1, backgroundColor: "#FF5C00" }} />
        <p className="font-light text-white/45 leading-relaxed" style={{ fontSize: "1.05rem", maxWidth: "52rem" }}>
          Both clients communicate with the backend via HTTPS using Bearer JWT tokens.
          The mobile app stores tokens in SecureStore; the web app uses localStorage
          with automatic token refresh on 401 responses.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  TIER 1 — Application Server                           */
/* ═══════════════════════════════════════════════════════ */
function TierServer() {
  return (
    <div className="flex flex-col justify-center h-full">
      {/* Origin indicator */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-col items-center">
          <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid rgba(255,92,0,0.5)" }} />
          <div style={{ width: 1, height: "0.5rem", backgroundColor: "rgba(255,92,0,0.3)" }} />
        </div>
        <span className="overline text-white/25" style={{ fontSize: "0.6rem" }}>FROM CLIENT LAYER</span>
      </div>

      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>
        TIER 2
      </p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-8" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Application Server
      </h3>

      <AccentBox className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <p className="font-extrabold text-white" style={{ fontSize: "1.3rem" }}>
            Hono.js REST API
          </p>
          <span className="font-light text-white/30" style={{ fontSize: "0.85rem" }}>
            Node.js + TypeScript — /api/v1/*
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {["Auth & JWT Sessions", "KYC Verification", "Loan Management", "Wallet & Blockchain", "Admin & Analytics", "Notifications", "Market Data"].map((mod) => (
            <Pill key={mod}>{mod}</Pill>
          ))}
        </div>
        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "1rem" }} />
        <p className="overline text-white/20 mb-3" style={{ fontSize: "0.6rem" }}>SECURITY & MIDDLEWARE</p>
        <div className="flex flex-wrap gap-3">
          {["Rate Limiting (Redis)", "CORS Allowlist", "Body Size Limiter", "Secure Headers", "Account Lockout", "AES-256 Field Encryption"].map((sec) => (
            <span key={sec} className="font-light text-white/40" style={{ fontSize: "0.85rem" }}>
              {sec}
            </span>
          ))}
        </div>
      </AccentBox>

      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-2" style={{ width: 32, height: 1, backgroundColor: "#FF5C00" }} />
        <p className="font-light text-white/45 leading-relaxed" style={{ fontSize: "1.05rem", maxWidth: "52rem" }}>
          The server orchestrates all business logic — validating requests, managing loan lifecycles,
          triggering AI verification, and recording transactions on-chain via Ethers.js.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  TIER 2 — Services & Data                              */
/* ═══════════════════════════════════════════════════════ */
function TierServices() {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-col items-center">
          <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid rgba(255,92,0,0.5)" }} />
          <div style={{ width: 1, height: "0.5rem", backgroundColor: "rgba(255,92,0,0.3)" }} />
        </div>
        <span className="overline text-white/25" style={{ fontSize: "0.6rem" }}>FROM APPLICATION SERVER</span>
      </div>

      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>
        TIER 3
      </p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-8" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Services & Data
      </h3>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <AccentBox orange>
          <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.15rem" }}>
            AI Processing
          </p>
          <p className="font-light text-white/35 mb-4" style={{ fontSize: "0.8rem" }}>FastAPI — Python Microservice</p>
          <div className="flex flex-col gap-3">
            {[
              "Document Classification (MobileNetV2)",
              "Credit Scoring (XGBoost)",
              "ETH Volatility (LSTM / GRU)",
              "OCR Extraction (EasyOCR)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="shrink-0 rounded-full" style={{ width: 5, height: 5, backgroundColor: "#FF5C00", opacity: 0.7 }} />
                <span className="font-light text-white/60" style={{ fontSize: "0.95rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </AccentBox>

        <AccentBox>
          <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.15rem" }}>
            Ethereum Sepolia
          </p>
          <p className="font-light text-white/35 mb-4" style={{ fontSize: "0.8rem" }}>Solidity + Hardhat + Ethers.js</p>
          <div className="flex flex-col gap-3">
            {[
              "AvelonLending.sol",
              "CollateralManager.sol",
              "RepaymentSchedule.sol",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="shrink-0 rounded-full" style={{ width: 5, height: 5, backgroundColor: "#FF5C00", opacity: 0.7 }} />
                <span className="font-light text-white/60" style={{ fontSize: "0.95rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </AccentBox>

        <AccentBox>
          <p className="font-extrabold text-white mb-2" style={{ fontSize: "1.15rem" }}>
            Data Storage
          </p>
          <p className="font-light text-white/35 mb-4" style={{ fontSize: "0.8rem" }}>15 Prisma Models + AES-256 Encryption</p>
          <div className="flex flex-col gap-3">
            {[
              "PostgreSQL + Prisma ORM",
              "Redis (Cache & Sessions)",
              "Encrypted KYC File Store",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="shrink-0 rounded-full" style={{ width: 5, height: 5, backgroundColor: "#FF5C00", opacity: 0.7 }} />
                <span className="font-light text-white/60" style={{ fontSize: "0.95rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </AccentBox>
      </div>

      <div className="flex items-center gap-5">
        <span className="overline text-white/20" style={{ fontSize: "0.6rem" }}>EXTERNAL</span>
        <div style={{ height: 1, width: "1.5rem", backgroundColor: "rgba(255,255,255,0.08)" }} />
        <div className="flex gap-5">
          {["Gmail API (Email)", "Firebase + Expo (Push)", "Sepolia RPC (Alchemy)"].map((svc) => (
            <span key={svc} className="font-light text-white/35" style={{ fontSize: "0.85rem" }}>{svc}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  TIER 3 — Full Overview                                */
/* ═══════════════════════════════════════════════════════ */
function TierOverview() {
  return (
    <div className="flex flex-col justify-center h-full">
      <p className="overline mb-3" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>
        COMPLETE VIEW
      </p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-6" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
        Full Architecture
      </h3>

      {/* Tier 1: Clients */}
      <div className="grid grid-cols-2 gap-2 mb-0">
        <AccentBox orange compact>
          <p className="font-extrabold text-white" style={{ fontSize: "0.8rem" }}>React Native + Expo</p>
          <p className="font-light text-white/40" style={{ fontSize: "0.6rem" }}>Borrower Mobile App</p>
        </AccentBox>
        <AccentBox orange compact>
          <p className="font-extrabold text-white" style={{ fontSize: "0.8rem" }}>Next.js 16 Admin Dashboard</p>
          <p className="font-light text-white/40" style={{ fontSize: "0.6rem" }}>Web Management Panel</p>
        </AccentBox>
      </div>

      {/* Arrow */}
      <div className="flex justify-center py-1">
        <div className="flex flex-col items-center">
          <div style={{ width: 1, height: "0.5rem", backgroundColor: "rgba(255,92,0,0.4)" }} />
          <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "5px solid rgba(255,92,0,0.5)" }} />
        </div>
      </div>

      {/* Tier 2: Server */}
      <AccentBox compact className="mb-0">
        <div className="flex items-center justify-between">
          <p className="font-extrabold text-white" style={{ fontSize: "0.8rem" }}>Hono.js REST API</p>
          <span className="font-light text-white/25" style={{ fontSize: "0.6rem" }}>Node.js + TypeScript</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {["Auth", "KYC", "Loans", "Wallets", "Admin", "Notifications", "Market"].map((m) => (
            <Pill key={m} compact>{m}</Pill>
          ))}
        </div>
      </AccentBox>

      {/* Branching arrows */}
      <div className="relative w-full" style={{ height: "1.2rem" }}>
        <div className="absolute" style={{ left: "50%", top: 0, width: 1, height: "40%", backgroundColor: "rgba(255,92,0,0.4)" }} />
        <div className="absolute" style={{ top: "40%", left: "16.67%", right: "16.67%", height: 1, backgroundColor: "rgba(255,92,0,0.35)" }} />
        <div className="absolute flex flex-col items-center" style={{ left: "16.67%", top: "40%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: "0.3rem", backgroundColor: "rgba(255,92,0,0.4)" }} />
          <div style={{ width: 0, height: 0, borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderTop: "4px solid rgba(255,92,0,0.5)" }} />
        </div>
        <div className="absolute flex flex-col items-center" style={{ left: "50%", top: "40%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: "0.3rem", backgroundColor: "rgba(255,92,0,0.4)" }} />
          <div style={{ width: 0, height: 0, borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderTop: "4px solid rgba(255,92,0,0.5)" }} />
        </div>
        <div className="absolute flex flex-col items-center" style={{ left: "83.33%", top: "40%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: "0.3rem", backgroundColor: "rgba(255,92,0,0.4)" }} />
          <div style={{ width: 0, height: 0, borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderTop: "4px solid rgba(255,92,0,0.5)" }} />
        </div>
      </div>

      {/* Tier 3: Services */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <AccentBox orange compact>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "0.8rem" }}>AI Processing</p>
          <p className="font-light text-white/35" style={{ fontSize: "0.55rem" }}>FastAPI (Python)</p>
          <div className="flex flex-col gap-1 mt-2">
            {["Doc Classification", "Credit Scoring", "ETH Volatility", "OCR Extraction"].map((i) => (
              <span key={i} className="font-light text-white/50" style={{ fontSize: "0.65rem" }}>{i}</span>
            ))}
          </div>
        </AccentBox>
        <AccentBox compact>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "0.8rem" }}>Ethereum Sepolia</p>
          <p className="font-light text-white/35" style={{ fontSize: "0.55rem" }}>Solidity + Hardhat</p>
          <div className="flex flex-col gap-1 mt-2">
            {["AvelonLending.sol", "CollateralManager.sol", "RepaymentSchedule.sol"].map((i) => (
              <span key={i} className="font-light text-white/50" style={{ fontSize: "0.65rem" }}>{i}</span>
            ))}
          </div>
        </AccentBox>
        <AccentBox compact>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "0.8rem" }}>Data Storage</p>
          <p className="font-light text-white/35" style={{ fontSize: "0.55rem" }}>15 Models + AES-256</p>
          <div className="flex flex-col gap-1 mt-2">
            {["PostgreSQL + Prisma", "Redis Cache", "Encrypted KYC Files"].map((i) => (
              <span key={i} className="font-light text-white/50" style={{ fontSize: "0.65rem" }}>{i}</span>
            ))}
          </div>
        </AccentBox>
      </div>

      <div className="flex items-center gap-4">
        <span className="overline text-white/20" style={{ fontSize: "0.5rem" }}>EXTERNAL</span>
        <div style={{ height: 1, width: "1rem", backgroundColor: "rgba(255,255,255,0.08)" }} />
        {["Gmail API", "Firebase + Expo Push", "Sepolia RPC"].map((svc) => (
          <span key={svc} className="font-light text-white/25" style={{ fontSize: "0.65rem" }}>{svc}</span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  MAIN SLIDE                                             */
/* ═══════════════════════════════════════════════════════ */
const tiers = [TierClient, TierServer, TierServices, TierOverview];
const stepLabels = ["Clients", "Server", "Services", "Overview"];

export default function Slide11Architecture({ direction = 1 }: Props) {
  const [step, setStep] = useState(0);
  const [tierDir, setTierDir] = useState(1);

  useEffect(() => {
    subStepRef.current = {
      next: () => {
        if (step < TOTAL_STEPS - 1) {
          setTierDir(1);
          setStep((s) => s + 1);
          return true;
        }
        return false;
      },
      prev: () => {
        if (step > 0) {
          setTierDir(-1);
          setStep((s) => s - 1);
          return true;
        }
        return false;
      },
    };
    return () => { subStepRef.current = null; };
  }, [step]);

  const TierComponent = tiers[step];

  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg */}
      <div
        className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-4"
        aria-hidden
      >
        <span
          className="font-extrabold leading-none text-white select-none"
          style={{ fontSize: "clamp(6rem,14vw,18rem)", opacity: 0.025 }}
        >
          ARCH
        </span>
      </div>

      {/* Step indicator — top right, absolutely positioned */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute top-8 right-12 flex items-center gap-2 z-10"
      >
        <span className="overline text-white/20" style={{ fontSize: "0.55rem" }}>SYSTEM ARCHITECTURE</span>
        <div style={{ width: 1, height: 12, backgroundColor: "rgba(255,255,255,0.1)", margin: "0 0.3rem" }} />
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-1.5">
            {i > 0 && (
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 3H9M9 3L7 1M9 3L7 5" stroke={i <= step ? "#FF5C00" : "rgba(255,255,255,0.12)"} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span
              className="font-light transition-colors duration-300"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                color: i === step ? "#FF5C00" : i < step ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Full-height content area */}
      <div className="flex flex-col h-full px-16 pt-14 pb-20 overflow-hidden">
        <AnimatePresence mode="wait" custom={tierDir}>
          <motion.div
            key={step}
            custom={tierDir}
            variants={tierVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col"
          >
            <TierComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </SlideWrapper>
  );
}
