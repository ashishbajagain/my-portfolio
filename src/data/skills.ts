export interface Technology {
  name: string;
  slug: string;
}

/** Row 1 — development stack (scrolls left) */
export const stackTechnologies: Technology[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PHP", slug: "php" },
  { name: "WordPress", slug: "wordpress" },
];

/** Row 2 — AI, workflow & platform tools (scrolls right) */
export const toolTechnologies: Technology[] = [
  { name: "Cursor", slug: "cursor" },
  { name: "Claude", slug: "claude" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  { name: "Figma", slug: "figma" },
  { name: "Notion", slug: "notion" },
  { name: "Jira", slug: "jira" },
  { name: "Bitbucket", slug: "bitbucket" },
  { name: "AWS", slug: "aws" },
  { name: "Azure", slug: "azure" },
  { name: "Zendesk", slug: "zendesk" },
];

export const allTechnologies = [...stackTechnologies, ...toolTechnologies];
