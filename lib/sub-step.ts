import { MutableRefObject } from "react";

export interface SubStepHandler {
  next: () => boolean;
  prev: () => boolean;
}

/**
 * Module-level ref that slides with internal sub-steps can register with.
 * page.tsx checks this before advancing to the next slide.
 */
export const subStepRef: MutableRefObject<SubStepHandler | null> = { current: null };
