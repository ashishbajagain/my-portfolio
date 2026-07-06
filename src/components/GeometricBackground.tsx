"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Soft ambient shapes — low contrast so they do not compete with hero copy */
export function GeometricBackground() {
  const prefersReducedMotion = useReducedMotion();

  const blobs = [
    { className: "left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl", delay: 0 },
    { className: "right-[-5%] top-[40%] h-[380px] w-[380px] rounded-full bg-accent-secondary/15 blur-3xl", delay: 0.8 },
    { className: "left-[20%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-accent-cyan/10 blur-3xl", delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute ${blob.className}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: [0.45, 0.7, 0.45],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
