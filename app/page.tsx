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
import Slide09Methodology from "@/components/slides/Slide09Methodology";
import Slide10MethodologyConnection from "@/components/slides/Slide10MethodologyConnection";
import Slide11Architecture from "@/components/slides/Slide11Architecture";
import Slide12Tools from "@/components/slides/Slide12Tools";
import Slide13Population from "@/components/slides/Slide13Population";
import Slide14DataGathering from "@/components/slides/Slide14DataGathering";
import Slide15Sources from "@/components/slides/Slide15Sources";
import Slide16Treatment from "@/components/slides/Slide16Treatment";
import Slide17Ethics from "@/components/slides/Slide17Ethics";
import Slide18References from "@/components/slides/Slide18References";
import Slide19Walkthrough from "@/components/slides/Slide19Walkthrough";
import Slide20ThankYou from "@/components/slides/Slide20ThankYou";

const SLIDES = [
  Slide01Title,
  Slide02Team,
  Slide03Agenda,
  Slide04Background,
  Slide05Problem,
  Slide06Objectives,
  Slide07Scope,
  Slide08Significance,
  Slide09Methodology,
  Slide10MethodologyConnection,
  Slide11Architecture,
  Slide12Tools,
  Slide13Population,
  Slide14DataGathering,
  Slide15Sources,
  Slide16Treatment,
  Slide17Ethics,
  Slide18References,
  Slide19Walkthrough,
  Slide20ThankYou,
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
