// components/AnimatedSection.tsx
"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

// Тип для пропсов
interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  className = "",
  ...props
}: AnimatedSectionProps) {
  return (

    <div className={`animated-section ${className}`}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true }}
        transition={transition}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}