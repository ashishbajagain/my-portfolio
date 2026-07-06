"use client";

import { siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { scrollToSection } from "@/lib/scroll";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <SocialLinks />
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="capitalize text-muted transition-colors hover:text-accent"
              >
                {id}
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-muted">
            &copy; {year} {siteConfig.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
