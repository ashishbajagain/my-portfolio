"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { GeometricBackground } from "@/components/GeometricBackground";
import { siteConfig } from "@/data/site";

const badgeItems = siteConfig.subheadline
  .split("|")
  .map((s) => s.trim())
  .filter(Boolean);

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] scroll-mt-0 overflow-hidden pt-24 sm:pt-28"
      aria-label="Hero"
    >
      {/* Layered backdrop */}
      <div className="absolute inset-0 bg-background" aria-hidden />
      <div className="hero-mesh absolute inset-0" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-[0.35] dark:opacity-[0.2]" aria-hidden />
      <div className="absolute inset-0 dot-pattern opacity-50" aria-hidden />
      <div className="hero-vignette absolute inset-0" aria-hidden />
      <GeometricBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-5.5rem)] max-w-5xl flex-col justify-center px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <div className="hero-avatar-ring shadow-lg shadow-accent/15">
              <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-surface ring-1 ring-border/60 sm:h-24 sm:w-24">
                <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {initials}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Eyebrow + pills */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 flex flex-col items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
              Portfolio
            </span>
            <div className="flex max-w-xl flex-wrap justify-center gap-2">
              {badgeItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/80 bg-glass px-3 py-1 text-xs font-medium text-muted shadow-sm backdrop-blur-md sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.08]"
          >
            <span className="gradient-text">{siteConfig.headline}</span>
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-5 text-lg text-muted sm:text-xl"
          >
            Hi, I&apos;m{" "}
            <span className="font-semibold text-foreground">{siteConfig.name}</span>
          </motion.p>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA card */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 w-full max-w-md rounded-2xl border border-border/70 bg-glass/80 p-6 shadow-xl shadow-black/5 backdrop-blur-xl dark:shadow-black/20"
          >
            <p className="mb-5 text-center text-xs text-muted">
              Explore work or start a conversation
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button sectionId="projects" className="sm:min-w-[140px]">
                View Projects
              </Button>
              <Button sectionId="contact" variant="secondary" className="sm:min-w-[140px]">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.85 }}
          className="mt-auto flex justify-center pt-12"
        >
          <button
            type="button"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex flex-col items-center gap-2 rounded-full border border-transparent px-4 py-2 text-muted transition-all hover:border-border hover:bg-glass/50 hover:text-accent"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" aria-hidden />
          </button>
        </motion.div>

        {/* Bottom accent */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,32rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
