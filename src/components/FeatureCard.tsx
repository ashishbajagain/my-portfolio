"use client";

import { motion } from "framer-motion";
import type { ApproachFeature } from "@/data/approach";

interface FeatureCardProps {
  feature: ApproachFeature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="glass-card group p-8 transition-shadow hover:shadow-xl hover:shadow-accent/10"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-secondary text-white shadow-lg shadow-accent/25 transition-transform group-hover:scale-110">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {feature.description}
      </p>
    </motion.div>
  );
}
