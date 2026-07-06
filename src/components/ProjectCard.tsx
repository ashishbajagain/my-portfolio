"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/50 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-accent/5"
    >
      <div
        className={`relative h-36 overflow-hidden bg-gradient-to-br ${project.imageGradient} sm:h-40`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 grid-pattern opacity-25"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-white/25">
                {project.title.charAt(0)}
              </span>
            </div>
          </>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
          aria-hidden
        />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.context && (
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-accent">
            {project.context}
          </p>
        )}
        <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.techStack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[11px] font-medium text-muted"
            >
              {tech}
            </li>
          ))}
          {project.techStack.length > 5 && (
            <li className="rounded-md px-1 py-0.5 text-[11px] text-muted">
              +{project.techStack.length - 5}
            </li>
          )}
        </ul>

        {hasLinks && (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-border/60 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                {project.liveLabel ?? "View"}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" aria-hidden />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
