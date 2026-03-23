"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";
import { subStepRef } from "@/lib/sub-step";

interface Props { direction?: 1 | -1; }

const TOTAL_STEPS = 4;

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

/* ─── AccentBox ─── */
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
      <div className={compact ? "px-3 py-2 w-full" : "px-5 py-4 w-full"}>{children}</div>
    </div>
  );
}

/* ─── Step number badge ─── */
function StepNum({ n }: { n: string }) {
  return (
    <span
      className="font-extrabold shrink-0"
      style={{ fontSize: "0.65rem", color: "#FF5C00", letterSpacing: "0.06em", minWidth: "1.8rem" }}
    >
      {n}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  STEP 0 — Money Locations                               */
/* ═══════════════════════════════════════════════════════ */
function StepWallets() {
  return (
    <div className="flex flex-col justify-center h-full">
      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>WHERE MONEY LIVES</p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-8" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Money Locations
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <AccentBox orange>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "1.1rem" }}>Borrower&apos;s Wallet</p>
          <p className="font-light text-white/40 mb-3" style={{ fontSize: "0.8rem" }}>MetaMask / WalletConnect — Sepolia testnet</p>
          <p className="font-light text-white/60 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            Controlled by the borrower. Receives the ETH loan principal on activation. Source of repayments and collateral deposits.
          </p>
        </AccentBox>

        <AccentBox orange>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "1.1rem" }}>CollateralManager Contract</p>
          <p className="font-light text-white/40 mb-3" style={{ fontSize: "0.8rem" }}>Solidity smart contract — 0x4CFf…9358e</p>
          <p className="font-light text-white/60 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            Holds locked ETH collateral while a loan is active. Releases ETH back to borrower on full repayment, or seizes it on liquidation.
          </p>
        </AccentBox>

        <AccentBox>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "1.1rem" }}>Treasury Wallet</p>
          <p className="font-light text-white/40 mb-3" style={{ fontSize: "0.8rem" }}>Avelon EOA wallet — TREASURY_ADDRESS env var</p>
          <p className="font-light text-white/60 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            Controlled by Avelon founders. Receives investor deposits and platform fees. Funds ETH disbursements to borrowers.
          </p>
        </AccentBox>

        <AccentBox>
          <p className="font-extrabold text-white mb-1" style={{ fontSize: "1.1rem" }}>Liquidity Pool</p>
          <p className="font-light text-white/40 mb-3" style={{ fontSize: "0.8rem" }}>PostgreSQL accounting ledger — not an on-chain wallet</p>
          <p className="font-light text-white/60 leading-relaxed" style={{ fontSize: "0.85rem" }}>
            Tracks TVL, utilization rate, APY, and cumulative yield in the database. The actual ETH lives in the treasury wallet.
          </p>
        </AccentBox>
      </div>

      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-2" style={{ width: 32, height: 1, backgroundColor: "#FF5C00" }} />
        <p className="font-light text-white/35 leading-relaxed" style={{ fontSize: "0.95rem", maxWidth: "52rem" }}>
          There is no on-chain liquidity pool contract — the LiquidityPool table is accounting only, tracking how much ETH investors have collectively committed and how much is lent out.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  STEP 1 — Borrower Pipeline                             */
/* ═══════════════════════════════════════════════════════ */
function StepBorrower() {
  const steps = [
    {
      n: "01",
      title: "Apply for Loan",
      detail: "POST /loans → DB Loan created (PENDING_COLLATERAL) → AvelonLending.createLoan() on-chain",
    },
    {
      n: "02",
      title: "Deposit Collateral",
      detail: "Borrower sends ETH to CollateralManager contract → POST /loans/:id/collateral → backend verifies txHash on Sepolia",
    },
    {
      n: "03",
      title: "ETH Disbursed to Borrower",
      detail: "Treasury sends principal ETH directly to borrower's wallet → LOAN_DISBURSEMENT tx recorded → Loan → ACTIVE",
      orange: true,
    },
    {
      n: "04",
      title: "Repay Loan",
      detail: "Borrower sends ETH → 90% interest → pool cumulativeYield (investors) · 10% → treasury fee · CollateralManager releases collateral",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-col items-center">
          <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid rgba(255,92,0,0.5)" }} />
          <div style={{ width: 1, height: "0.5rem", backgroundColor: "rgba(255,92,0,0.3)" }} />
        </div>
        <span className="overline text-white/25" style={{ fontSize: "0.6rem" }}>CONTINUED FROM MONEY LOCATIONS</span>
      </div>

      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>PIPELINE 1</p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-7" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Borrower Loan Flow
      </h3>

      <div className="flex flex-col gap-3 mb-7">
        {steps.map((s) => (
          <AccentBox key={s.n} orange={s.orange}>
            <div className="flex items-start gap-4">
              <StepNum n={s.n} />
              <div>
                <p className="font-extrabold text-white mb-1" style={{ fontSize: "1rem" }}>{s.title}</p>
                <p className="font-light text-white/50 leading-relaxed" style={{ fontSize: "0.82rem" }}>{s.detail}</p>
              </div>
            </div>
          </AccentBox>
        ))}
      </div>

      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-2" style={{ width: 32, height: 1, backgroundColor: "#FF5C00" }} />
        <p className="font-light text-white/35 leading-relaxed" style={{ fontSize: "0.95rem", maxWidth: "52rem" }}>
          Step 03 is new — previously the system only marked the loan ACTIVE without actually sending ETH. The treasury now sends ETH on-chain before updating the database, ensuring funds are disbursed before the loan is considered active.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  STEP 2 — Investor Pipeline                             */
/* ═══════════════════════════════════════════════════════ */
function StepInvestor() {
  const steps = [
    {
      n: "01",
      title: "Investor Deposits ETH",
      detail: "Investor sends ETH to treasury wallet on Sepolia → POST /investor/deposit { txHash, amount } → InvestorDeposit: PENDING",
    },
    {
      n: "02",
      title: "Auto-Confirmation (Poller)",
      detail: "Blockchain poller runs every 60s → verifies txHash on Sepolia → InvestorDeposit: CONFIRMED → pool.totalLiquidity++ → APY recalculated",
      orange: true,
    },
    {
      n: "03",
      title: "Earn Yield",
      detail: "Every borrower repayment: 90% of interest → pool.cumulativeYield → investor yield calculated pro-rata by deposit share",
    },
    {
      n: "04",
      title: "Withdraw",
      detail: "POST /investor/withdraw/:id → checks free liquidity (TVL − borrowed) → pool.totalLiquidity-- → investor claims ETH from treasury off-chain",
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-col items-center">
          <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "6px solid rgba(255,92,0,0.5)" }} />
          <div style={{ width: 1, height: "0.5rem", backgroundColor: "rgba(255,92,0,0.3)" }} />
        </div>
        <span className="overline text-white/25" style={{ fontSize: "0.6rem" }}>PARALLEL TO BORROWER PIPELINE</span>
      </div>

      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>PIPELINE 2</p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-7" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Investor Deposit &amp; Yield
      </h3>

      <div className="flex flex-col gap-3 mb-7">
        {steps.map((s) => (
          <AccentBox key={s.n} orange={s.orange}>
            <div className="flex items-start gap-4">
              <StepNum n={s.n} />
              <div>
                <p className="font-extrabold text-white mb-1" style={{ fontSize: "1rem" }}>{s.title}</p>
                <p className="font-light text-white/50 leading-relaxed" style={{ fontSize: "0.82rem" }}>{s.detail}</p>
              </div>
            </div>
          </AccentBox>
        ))}
      </div>

      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-2" style={{ width: 32, height: 1, backgroundColor: "#FF5C00" }} />
        <p className="font-light text-white/35 leading-relaxed" style={{ fontSize: "0.95rem", maxWidth: "52rem" }}>
          Step 02 is powered by the deposit poller — a background job that removes the need for manual confirmation. Investor yield is calculated in the database as a pro-rata share of cumulativeYield.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  STEP 3 — Revenue Split & Pool Metrics                  */
/* ═══════════════════════════════════════════════════════ */
function StepRevenue() {
  const metrics = [
    { field: "totalLiquidity", formula: "Sum of all confirmed investor deposits (ETH)" },
    { field: "totalBorrowed", formula: "Sum of principals of all ACTIVE loans" },
    { field: "utilizationRate", formula: "totalBorrowed ÷ totalLiquidity (0 – 1)" },
    { field: "APY", formula: "5% base + 10% × utilizationRate — recalculated on every event" },
    { field: "cumulativeYield", formula: "Total interest earned by the pool since inception" },
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <p className="overline mb-4" style={{ color: "#FF5C00", fontSize: "0.7rem" }}>ECONOMICS</p>
      <h3 className="font-extrabold text-white leading-[0.9] mb-7" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
        Revenue Split &amp; Pool Metrics
      </h3>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Left — Revenue split visual */}
        <div>
          <p className="overline text-white/25 mb-4" style={{ fontSize: "0.6rem" }}>EVERY LOAN REPAYMENT</p>
          <AccentBox orange className="mb-3">
            <p className="font-light text-white/50 mb-3" style={{ fontSize: "0.8rem" }}>Borrower pays interest (e.g. 0.01 ETH)</p>
            {/* Tree */}
            <div className="flex flex-col gap-0" style={{ paddingLeft: "0.5rem" }}>
              {/* Trunk */}
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center shrink-0" style={{ marginTop: "0.55rem" }}>
                  <div style={{ width: 1, height: "1.2rem", backgroundColor: "rgba(255,92,0,0.5)" }} />
                  <div style={{ width: "0.8rem", height: 1, backgroundColor: "rgba(255,92,0,0.5)" }} />
                </div>
                <div>
                  <p className="font-extrabold text-white" style={{ fontSize: "0.9rem" }}>90%</p>
                  <p className="font-light text-white/60" style={{ fontSize: "0.8rem" }}>Pool cumulativeYield</p>
                  <p className="font-light text-white/30" style={{ fontSize: "0.7rem" }}>Distributed pro-rata to investors by deposit share</p>
                </div>
              </div>
              <div style={{ width: 1, height: "0.6rem", backgroundColor: "rgba(255,92,0,0.5)", marginLeft: "0.5rem" }} />
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center shrink-0" style={{ marginTop: "0.55rem" }}>
                  <div style={{ width: "0.8rem", height: 1, backgroundColor: "rgba(255,255,255,0.15)" }} />
                </div>
                <div>
                  <p className="font-extrabold text-white/60" style={{ fontSize: "0.9rem" }}>10%</p>
                  <p className="font-light text-white/40" style={{ fontSize: "0.8rem" }}>Avelon Treasury</p>
                  <p className="font-light text-white/20" style={{ fontSize: "0.7rem" }}>Platform service fee</p>
                </div>
              </div>
            </div>
          </AccentBox>
          <p className="font-light text-white/25 leading-relaxed" style={{ fontSize: "0.75rem" }}>
            Enforced in loan.service.ts:recordRepayment() as a DB operation. Actual ETH routing goes through the treasury wallet on-chain.
          </p>
        </div>

        {/* Right — Pool metrics */}
        <div>
          <p className="overline text-white/25 mb-4" style={{ fontSize: "0.6rem" }}>POOL METRICS</p>
          <div className="flex flex-col gap-2">
            {metrics.map((m) => (
              <div
                key={m.field}
                className="flex items-start gap-4"
                style={{
                  padding: "0.65rem 0.85rem",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <code
                  className="shrink-0 font-light"
                  style={{ fontSize: "0.75rem", color: "#FF5C00", minWidth: "9rem" }}
                >
                  {m.field}
                </code>
                <p className="font-light text-white/45 leading-snug" style={{ fontSize: "0.78rem" }}>
                  {m.formula}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  MAIN SLIDE                                             */
/* ═══════════════════════════════════════════════════════ */
const steps = [StepWallets, StepBorrower, StepInvestor, StepRevenue];
const stepLabels = ["Wallets", "Borrower", "Investor", "Revenue"];
const ghostTexts = ["WALLETS", "BORROW", "INVEST", "REVENUE"];

export default function Slide12FinanceBlockchain({ direction = 1 }: Props) {
  const [step, setStep] = useState(0);
  const [stepDir, setStepDir] = useState<1 | -1>(1);

  useEffect(() => {
    subStepRef.current = {
      next: () => {
        if (step < TOTAL_STEPS - 1) {
          setStepDir(1);
          setStep((s) => s + 1);
          return true;
        }
        return false;
      },
      prev: () => {
        if (step > 0) {
          setStepDir(-1);
          setStep((s) => s - 1);
          return true;
        }
        return false;
      },
    };
    return () => { subStepRef.current = null; };
  }, [step]);

  const StepComponent = steps[step];

  return (
    <SlideWrapper dark direction={direction}>
      {/* Ghost bg text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={ghostTexts[step]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none pr-4"
          aria-hidden
        >
          <span
            className="font-extrabold leading-none text-white select-none"
            style={{ fontSize: "clamp(5rem,12vw,16rem)", opacity: 0.025 }}
          >
            {ghostTexts[step]}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Step breadcrumb — top right */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute top-8 right-12 flex items-center gap-2 z-10"
      >
        <span className="overline text-white/20" style={{ fontSize: "0.55rem" }}>FINANCE & BLOCKCHAIN</span>
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

      {/* Content */}
      <div className="flex flex-col h-full px-16 pt-14 pb-20 overflow-hidden">
        <AnimatePresence mode="wait" custom={stepDir}>
          <motion.div
            key={step}
            custom={stepDir}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col"
          >
            <StepComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </SlideWrapper>
  );
}
