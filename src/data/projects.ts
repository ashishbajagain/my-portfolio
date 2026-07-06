export type ProjectCategory = "all" | "backend" | "full-stack" | "wordpress";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  categories: Exclude<ProjectCategory, "all">[];
  featured?: boolean;
  imageGradient: string;
  /** Local path under /public, e.g. /projects/svartaladan.webp */
  image?: string;
  /** e.g. Pigment AB · Stockholm */
  context?: string;
}

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "wordpress", label: "WordPress" },
];

/** Featured projects sourced from https://www.linkedin.com/in/ashishbajagain/ */
export const projects: Project[] = [
  {
    id: "subscription-meal-platform",
    title: "Enterprise Meal Subscription Platform",
    description:
      "Led architecture of a high-volume subscription e-commerce platform unifying sales, logistics, finance, and support-BankID onboarding, Fortnox ERP, Gordon Delivery webhooks, Klaviyo lifecycle automation, and a custom DIBS payment engine.",
    techStack: [
      "WordPress",
      "PHP",
      "REST APIs",
      "Fortnox",
      "Klaviyo",
      "Zendesk",
      "BankID",
    ],
    liveUrl: "https://svartaladan.se/",
    liveLabel: "Svarta Lådan",
    categories: ["backend", "wordpress"],
    featured: true,
    imageGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    image: "/projects/svartaladan.webp",
    context: "Pigment AB · Svarta Lådan",
  },
  {
    id: "subscription-erp-platform",
    title: "Subscription & ERP Integration Platform",
    description:
      "Built an enterprise subscription and accounting automation platform for a financial publication-Swedbank Pay billing, Fortnox ERP sync, Richie API digital access, Redis caching, Mailchimp lifecycle marketing, and custom admin dashboards.",
    techStack: [
      "WordPress",
      "PHP",
      "Redis",
      "WP-CLI",
      "Fortnox",
      "Swedbank Pay",
      "Mailchimp",
    ],
    liveUrl: "https://www.affarsvarlden.se/",
    liveLabel: "Affärsvärlden",
    categories: ["backend", "wordpress"],
    featured: true,
    imageGradient: "from-blue-600 via-indigo-600 to-violet-600",
    image: "/projects/affarsvarlden.png",
    context: "Affärsvärlden · Enterprise scale",
  },
  {
    id: "simple-single-post-exporter",
    title: "Simple Single Post Exporter",
    description:
      "Public WordPress.org plugin for selective content migration—export specific posts, pages, or custom post types into a standard WXR file with a searchable, infinite-scroll admin UI. Ideal for staging, partial migrations, and content restructuring.",
    techStack: ["PHP", "WordPress", "JavaScript", "MySQL", "WXR"],
    liveUrl: "https://wordpress.org/plugins/simple-single-post-exporter/",
    liveLabel: "WordPress.org",
    categories: ["wordpress"],
    imageGradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    context: "Open source · WordPress.org",
  },
  {
    id: "jobflow",
    title: "JobFlow",
    description:
      "Personal job application tracker with a pipeline, Kanban board, follow-up reminders, ghost detection, and analytics-built to manage applications across LinkedIn, Seek, and company sites in one place.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SQLite", "shadcn/ui"],
    githubUrl: "https://github.com/ashishbajagain/jobflow",
    liveUrl: "https://jobflow-ashishbajagains-projects.vercel.app/",
    liveLabel: "Live demo",
    categories: ["full-stack"],
    featured: true,
    imageGradient: "from-cyan-600 via-blue-600 to-indigo-600",
    image: "/projects/jobflow.png",
    context: "Open source · Next.js · React",
  },
  {
    id: "user-activity-tracker",
    title: "User Activity Tracker",
    description:
      "Lightweight WordPress plugin that anonymously tracks session behavior (time on page, browser, OS, screen size) via the REST API and forwards sanitized payloads to an external analytics endpoint-with bot detection and admin toggle.",
    techStack: ["PHP", "WordPress", "JavaScript", "REST API", "Azure"],
    githubUrl: "https://github.com/ashishbajagain/User-Activity-Tracker",
    categories: ["wordpress"],
    imageGradient: "from-amber-600 via-orange-600 to-rose-600",
    context: "Open source · WordPress plugin",
  },
];
