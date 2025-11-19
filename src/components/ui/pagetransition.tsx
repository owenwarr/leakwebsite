// src/components/PageTransition.tsx
import { motion, useReducedMotion } from "framer-motion";
import React, { useRef } from "react";

type Props = { children: React.ReactNode };

export default function PageTransition({ children }: Props) {
  const reduce = useReducedMotion();
  const hasMountedRef = useRef(false);

  // Skip animation on the very first mount to avoid the “flash then fade” effect
  const isFirstMount = !hasMountedRef.current;
  if (isFirstMount) hasMountedRef.current = true;

  const duration = reduce ? 0 : 0.18;

  return (
    <motion.div
      // No animation on first paint; smooth fade only on subsequent route changes
      initial={isFirstMount ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      // Remove exit entirely to avoid visible fade-out that can look like a second fade
      exit={false}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}
