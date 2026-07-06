"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  sectionId?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-secondary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110",
  secondary:
    "border border-border bg-glass text-foreground backdrop-blur-sm hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:text-accent",
};

export function Button({
  href,
  sectionId,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all ${variantStyles[variant]} ${className}`;

  const handleClick = () => {
    if (sectionId) {
      scrollToSection(sectionId);
    }
    onClick?.();
  };

  if (sectionId || onClick) {
    return (
      <motion.button
        type={type}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        onClick={handleClick}
        disabled={disabled}
        className={`${styles} disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {children}
      </motion.button>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={styles}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled}
      className={`${styles} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </motion.button>
  );
}
