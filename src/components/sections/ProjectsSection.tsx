"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from "@/data/projects";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    const list =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter));

    return [...list].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [activeFilter]);

  return (
    <SectionContainer
      id="projects"
      ariaLabel="Projects"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Enterprise platforms, open-source tools, and full-stack applications from my professional and personal work."
          align="center"
        />

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-xl px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-accent to-accent-secondary text-white shadow-lg shadow-accent/25"
                  : "border border-border bg-glass text-muted hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-muted">No projects in this category.</p>
        )}
      </div>
    </SectionContainer>
  );
}
