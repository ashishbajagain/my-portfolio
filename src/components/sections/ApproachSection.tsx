"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { approachFeatures } from "@/data/approach";

export function ApproachSection() {
  return (
    <SectionContainer
      id="approach"
      ariaLabel="Development approach"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent-secondary/5"
        aria-hidden
      />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Approach"
          subtitle="How I build software—with experience, modern tools, and AI-assisted workflows."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {approachFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
