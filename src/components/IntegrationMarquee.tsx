"use client";

import { SkillIcon } from "@/components/SkillIcon";
import type { Technology } from "@/data/skills";

interface IntegrationMarqueeProps {
  items: Technology[];
  direction?: "left" | "right";
  speed?: "slow" | "normal";
}

function MarqueeTrack({ items, direction, speed }: IntegrationMarqueeProps) {
  const animationClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  const duration =
    speed === "slow" ? "[--marquee-duration:50s]" : "[--marquee-duration:38s]";
  const duplicated = [...items, ...items];

  return (
    <div className={`flex ${duration}`} style={{ width: "max-content" }}>
      <div className={`flex shrink-0 gap-4 ${animationClass}`}>
        {duplicated.map((tech, i) => (
          <div
            key={`${tech.slug}-${i}`}
            className="group flex shrink-0 items-center gap-3 rounded-2xl border border-border/60 bg-glass px-5 py-3.5 shadow-sm backdrop-blur-md transition-all hover:border-accent/40 hover:shadow-md hover:shadow-accent/5"
          >
            <SkillIcon
              slug={tech.slug}
              name={tech.name}
              className="h-6 w-6"
              onLightTile
            />
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationMarquee({
  items,
  direction = "left",
  speed = "normal",
}: IntegrationMarqueeProps) {
  return (
    <div className="relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
        aria-hidden
      />
      <MarqueeTrack items={items} direction={direction} speed={speed} />
    </div>
  );
}
