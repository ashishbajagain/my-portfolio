"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      ariaLabel="Contact"
      className="relative py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-accent-secondary/5"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? I'd love to hear from you. Send a message and I'll respond as soon as possible."
          align="center"
        />
        <div className="glass-card p-8">
          <ContactForm />
        </div>
        <SocialLinks className="mt-10" />
      </div>
    </SectionContainer>
  );
}
