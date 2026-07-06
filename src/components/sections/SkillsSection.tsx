"use client";

import { motion } from "framer-motion";
import { IntegrationMarquee } from "@/components/IntegrationMarquee";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { stackTechnologies, toolTechnologies } from "@/data/skills";

export function SkillsSection() {
  return (
    <SectionContainer
      id="skills"
      ariaLabel="Skills"
      className="relative bg-surface/50 py-24 sm:py-32"
    >
      <div className="absolute inset-0 dot-pattern" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="One integrated stack—from code and design to AI-assisted delivery and cloud platforms."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-glass p-6 shadow-xl backdrop-blur-xl sm:p-10"
        >
          {/* Center glow — integration-hero style */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent-cyan/20 blur-3xl"
            aria-hidden
          />

          <p className="relative mb-8 text-center text-sm font-medium text-muted">
            Development · AI · Design · DevOps · Collaboration
          </p>

          <div className="relative space-y-5">
            <IntegrationMarquee
              items={stackTechnologies}
              direction="left"
              speed="normal"
            />
            <IntegrationMarquee
              items={toolTechnologies}
              direction="right"
              speed="slow"
            />
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
