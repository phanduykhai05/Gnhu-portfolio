"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Delay in seconds. Pass `index * 0.08` for a staggered grid. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
};

/**
 * Wraps content so it fades + slides in the moment it scrolls into view.
 * Reveal-on-scroll, one time, respects prefers-reduced-motion via the browser.
 */
export function Reveal({ delay = 0, y = 24, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
