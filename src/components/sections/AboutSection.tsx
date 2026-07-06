"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { journeySteps } from "@/data/site";

export function AboutSection() {
  return (
    <SectionContainer
      id="about"
      ariaLabel="About"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A decade of building for the web—from WordPress themes to modern React applications."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a full-stack developer with over 10 years of experience building for
              the web. My journey started with WordPress and PHP - crafting custom themes,
              plugins, and client solutions that powered businesses online.
            </p>
            <p>
              Today, I&apos;m focused on the modern JavaScript ecosystem: React, Next.js,
              Node.js, and TypeScript. The shift wasn&apos;t just about new tools - it was about
              writing more maintainable code, shipping faster, and delivering better user
              experiences.
            </p>
            <p>
              AI-assisted development has transformed how I work. I use AI
              tools to accelerate prototyping, refactor legacy code, and explore solutions -
              while keeping quality, security, and best practices at the center of every
              project.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-secondary to-accent-cyan" aria-hidden />
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background" />
                  <p className="text-sm font-medium text-accent">{step.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl font-bold gradient-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </SectionContainer>
  );
}
