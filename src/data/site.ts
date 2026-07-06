export const siteConfig = {
  name: "Ashish Bajagain",
  title: "Full-Stack Developer Portfolio",
  description:
    "Full-Stack Developer with 10+ years of international experience building WordPress platforms, enterprise integrations, and modern web applications with React and Next.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "ashish.bajagain@gmail.com",
  github: "https://github.com/ashishbajagain",
  linkedin: "https://linkedin.com/in/ashishbajagain",
  headline: "Full-Stack Developer",
  subheadline:
    "10+ Years Experience | AI-Assisted Development | React, Next.js, Node.js, PHP, WordPress",
  tagline:
    "I build scalable web platforms—from enterprise WordPress systems to modern React and Next.js applications—with a focus on performance, clean architecture, and reliable delivery.",
};

export const navLinks = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Delivered", value: "100+" },
  { label: "Technologies", value: "15+" },
] as const;

export const workExperience = [
  {
    role: "Team Lead · Sr. WordPress Developer",
    company: "Devfinity",
    period: "2021 – Present",
    location: "Salt Lake City, UT · Remote",
    highlights: [
      "Led architecture of high-volume WordPress platforms (100k+ monthly users)",
      "Engineered API integrations for payments, CRM, and logistics",
      "Achieved 90–95+ PageSpeed scores through caching and optimization",
    ],
  },
  {
    role: "Sr. WordPress Developer",
    company: "Pigment AB",
    period: "2018 – 2021",
    location: "Stockholm, Sweden",
    highlights: [
      "Built enterprise subscription e-commerce and ERP integrations",
      "Automated workflows for billing, logistics, and digital access",
      "Defined platform architecture and coding standards for scale",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Yabees Pvt. Ltd.",
    period: "2014 – 2018",
    location: "Kathmandu, Nepal",
    highlights: [
      "Delivered custom WordPress themes, plugins, and client websites",
      "Collaborated with designers and PMs from scope through launch",
      "Mentored junior developers and maintained production sites",
    ],
  },
] as const;
