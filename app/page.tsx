"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import NavControls from "@/components/NavControls";
import { subStepRef } from "@/lib/sub-step";

import Slide01Title from "@/components/slides/Slide01Title";
import Slide02Team from "@/components/slides/Slide02Team";
import Slide03Agenda from "@/components/slides/Slide03Agenda";
import Slide04Background from "@/components/slides/Slide04Background";
import Slide05Problem from "@/components/slides/Slide05Problem";
import Slide06Objectives from "@/components/slides/Slide06Objectives";
import Slide07Scope from "@/components/slides/Slide07Scope";
import Slide08Significance from "@/components/slides/Slide08Significance";
import Slide09RegulatoryFramework from "@/components/slides/Slide09RegulatoryFramework";
import Slide10Methodology from "@/components/slides/Slide10Methodology";
import Slide11MethodologyConnection from "@/components/slides/Slide11MethodologyConnection";
import Slide12Architecture from "@/components/slides/Slide12Architecture";
import Slide13FinanceBlockchain from "@/components/slides/Slide13FinanceBlockchain";
import Slide14Tools from "@/components/slides/Slide14Tools";
import Slide15Population from "@/components/slides/Slide15Population";
import Slide16DataGathering from "@/components/slides/Slide16DataGathering";
import Slide17Sources from "@/components/slides/Slide17Sources";
import Slide18Treatment from "@/components/slides/Slide18Treatment";
import Slide19Ethics from "@/components/slides/Slide19Ethics";
import Slide20References from "@/components/slides/Slide20References";
import Slide21Walkthrough from "@/components/slides/Slide21Walkthrough";
import Slide22ThankYou from "@/components/slides/Slide22ThankYou";

const SLIDES = [
  Slide01Title,
  Slide02Team,
  Slide03Agenda,
  Slide04Background,
  Slide05Problem,
  Slide06Objectives,
  Slide07Scope,
  Slide08Significance,
  Slide09RegulatoryFramework,
  Slide10Methodology,
  Slide11MethodologyConnection,
  Slide12Architecture,
  Slide13FinanceBlockchain,
  Slide14Tools,
  Slide15Population,
  Slide16DataGathering,
  Slide17Sources,
  Slide18Treatment,
  Slide19Ethics,
  Slide20References,
  Slide21Walkthrough,
  Slide22ThankYou,
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    if (subStepRef.current?.next()) return;
    if (current < SLIDES.length - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (subStepRef.current?.prev()) return;
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const SlideComponent = SLIDES[current];

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#F5F5F5]">
      <AnimatePresence mode="wait" custom={direction}>
        <SlideComponent key={current} direction={direction} />
      </AnimatePresence>
      <NavControls
        current={current}
        total={SLIDES.length}
        onNext={goNext}
        onPrev={goPrev}
        onGoTo={goTo}
      />
    </main>
  );
}
