import type { LucideIcon } from "lucide-react";
import { Brain, Layers, Sparkles } from "lucide-react";

export interface ApproachFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const approachFeatures: ApproachFeature[] = [
  {
    title: "AI-Assisted Development",
    description:
      "Using Claude and Cursor IDE to accelerate prototyping, refactor legacy code, and explore solutions—while keeping quality and security at the center.",
    icon: Sparkles,
  },
  {
    title: "10 Years of Experience",
    description:
      "A decade of architectural thinking, from custom PHP to WordPress custom theme/plugins to full-stack systems. I understand what scales and what lasts.",
    icon: Brain,
  },
  {
    title: "Modern Stack",
    description:
      "React, Next.js, TypeScript, and Tailwind CSS—the ecosystem built for performance, developer experience, and maintainability.",
    icon: Layers,
  },
];
