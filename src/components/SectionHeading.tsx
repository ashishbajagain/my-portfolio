"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${className}`}
    >
      <h2
        className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl ${alignClass}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${alignClass}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
