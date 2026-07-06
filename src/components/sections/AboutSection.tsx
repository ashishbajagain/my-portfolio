"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { stats, workExperience } from "@/data/site";

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
          subtitle="Full-stack developer with 10+ years building production web platforms for agencies and enterprises worldwide."
        />

        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            I&apos;m a full-stack developer specializing in WordPress, PHP, and modern
            JavaScript. I&apos;ve spent over a decade building custom themes, plugins,
            e-commerce systems, and enterprise integrations for clients across the US,
            Europe, and Australia.
          </p>
          <p>
            Today I work across the full stack—WordPress and PHP for complex backend
            systems, React and Next.js for modern frontends, and AI-assisted tools to
            ship faster without compromising quality.
          </p>
          <p>
            I care about performance, maintainable architecture, and clear communication
            with teams and stakeholders—from sprint planning through production delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl font-bold gradient-text sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Experience
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {workExperience.map((job, index) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card flex flex-col p-6"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {job.period}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-foreground">{job.role}</h4>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {job.company}
                </p>
                <p className="mt-1 text-xs text-muted">{job.location}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
