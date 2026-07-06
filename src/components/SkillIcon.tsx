import type { ReactNode } from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siBitbucket,
  siClaude,
  siCursor,
  siFigma,
  siGit,
  siGithub,
  siJira,
  siNextdotjs,
  siNodedotjs,
  siNotion,
  siPhp,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWordpress,
  siZendesk,
} from "simple-icons";
import { AwsIcon, AzureIcon } from "@/components/icons/CloudIcons";

const iconMap: Record<string, SimpleIcon> = {
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  nodedotjs: siNodedotjs,
  php: siPhp,
  wordpress: siWordpress,
  cursor: siCursor,
  claude: siClaude,
  git: siGit,
  github: siGithub,
  vercel: siVercel,
  figma: siFigma,
  notion: siNotion,
  jira: siJira,
  bitbucket: siBitbucket,
  zendesk: siZendesk,
};

/** Relative luminance 0–1; below ~0.45 icons need a light surface in dark mode */
function getLuminance(hex: string): number {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

interface SkillIconProps {
  slug: string;
  name: string;
  className?: string;
  /** Renders icon on a white tile so dark brand marks stay visible in dark mode */
  onLightTile?: boolean;
}

export function SkillIcon({
  slug,
  name,
  className = "h-7 w-7",
  onLightTile = false,
}: SkillIconProps) {
  let iconElement: ReactNode;

  if (slug === "aws") {
    iconElement = <AwsIcon className={className} />;
  } else if (slug === "azure") {
    iconElement = <AzureIcon className={className} />;
  } else {
    const icon = iconMap[slug];

    if (!icon) {
      iconElement = (
        <span
          className={`flex items-center justify-center rounded-md bg-muted/20 text-xs font-bold text-muted ${className}`}
          aria-hidden
        >
          {name.charAt(0)}
        </span>
      );
    } else {
      const isDarkBrand = getLuminance(icon.hex) < 0.45;

      iconElement = (
        <svg
          viewBox="0 0 24 24"
          className={`${className} ${
            isDarkBrand && !onLightTile
              ? "dark:brightness-0 dark:invert"
              : ""
          }`}
          role="img"
          aria-label={name}
          fill={`#${icon.hex}`}
        >
          <path d={icon.path} />
        </svg>
      );
    }
  }

  if (onLightTile) {
    return (
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm ring-1 ring-black/[0.06] dark:bg-white dark:ring-black/10"
        title={name}
      >
        {iconElement}
      </div>
    );
  }

  return iconElement;
}
