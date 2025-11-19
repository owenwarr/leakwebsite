// src/components/ui/pagetransition.tsx
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  /** Turn animations on/off (default: true) */
  enable?: boolean;
};

export default function PageTransition({ children, enable = true }: Props) {
  // Always provide objects to framer-motion; if disabled, we use zero-duration.
  const initial = enable ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 };
  const animate = { opacity: 1, y: 0 };
  const exit = enable ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 };
  const transition = enable
    ? { duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    : { duration: 0.001 };

  return (
    <motion.div initial={initial} animate={animate} exit={exit} transition={transition}>
      {children}
    </motion.div>
  );
}
