"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl glass-card ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${project.imageGradient} ${
          featured ? "h-64 md:h-80" : "h-48"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white/20">
            {project.title.charAt(0)}
          </span>
        </div>
        {hasLinks && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-white/10 px-4 text-sm font-medium text-white backdrop-blur-sm transition-transform hover:scale-105"
                aria-label={`${project.liveLabel ?? "View"} ${project.title}`}
              >
                <ExternalLink className="h-4 w-4 shrink-0" />
                {project.liveLabel ?? "Live Demo"}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-110"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </motion.div>

      <div className="p-6">
        {project.context && (
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
            {project.context}
          </p>
        )}
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background/50 px-2.5 py-0.5 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
