export const siteConfig = {
  name: "Ashish Bajagain",
  title: "Full-Stack Developer Portfolio",
  description:
    "Full-Stack Developer with 10 years of international experience in web development. Building modern web applications with React, Next.js, and AI-assisted development.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "ashish.bajagain@gmail.com",
  github: "https://github.com/ashishbajagain",
  linkedin: "https://linkedin.com/in/ashishbajagain",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  headline: "Full-Stack Developer",
  subheadline:
    "10 Years Experience | AI-Assisted Development | React, Next.js, Node.js, PHP, WordPress",
  tagline:
    "Transitioning from PHP/WordPress to a modern full-stack workflow - shipping faster with React, Next.js, TypeScript, and AI.",
};

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const stats = [
  { label: "Years Experience", value: "8" },
  { label: "Projects Completed", value: "100+" },
  { label: "Technologies", value: "15+" },
] as const;

export const journeySteps = [
  {
    title: "PHP & WordPress",
    period: "8 Years",
    description:
      "Built custom themes, plugins, e-commerce, and custom client solutions for agencies worldwide.",
  },
  {
    title: "The Transition",
    period: "2024 – Present",
    description:
      "Embracing React, Next.js, and TypeScript—modern patterns for maintainable, scalable apps.",
  },
  {
    title: "Modern Stack",
    period: "Now",
    description:
      "Full-stack development with AI-assisted workflows for faster iteration.",
  },
] as const;
