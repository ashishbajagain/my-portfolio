# Portfolio Website

A modern, professional one-page portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features smooth scroll navigation, scroll-spy active states, glassmorphism design, and a contact form powered by Formspree.

## Features

- **One-page layout** — Smooth scroll navigation with active section highlighting
- **Hero** — Full-viewport intro with animated gradient background and geometric shapes
- **About** — Journey timeline and experience stats
- **Projects** — Bento-style grid with category filters and hover overlays
- **Skills** — Categorized skill cards with proficiency indicators
- **Approach** — Development philosophy feature cards
- **Contact** — Validated contact form with social links
- **Dark mode** — System-aware theme toggle with manual override
- **Animations** — Framer Motion scroll-triggered and hover animations
- **SEO** — Metadata, Open Graph, sitemap, and robots.txt
- **Accessibility** — ARIA labels, keyboard navigation, reduced motion support

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (icons)
- [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or yarn / pnpm)

### Installation

```bash
git clone <your-repo-url>
cd my-portfolio
npm install
cp .env.example .env.local
```

### Configuration

1. **Site details** — Edit `src/data/site.ts` with your name, email, social links, headline, and domain URL.

2. **Skills** — Edit `stackTechnologies` and `toolTechnologies` in `src/data/skills.ts`.

3. **Projects** — Update projects in `src/data/projects.ts` (see below).

4. **Approach** — Customize philosophy cards in `src/data/approach.ts`.

5. **Contact form** — Sign up at [Formspree](https://formspree.io), create a form, and add your form ID to `.env.local`:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Styles not loading?** A stale dev server can serve unstyled HTML (CSS files return 404). Fix it:

```bash
# Stop any running dev server (Ctrl+C), then:
npm run dev:clean
```

If port 3000 is still in use, Next.js may start on 3001 — use that URL, or kill the old process and restart.

### Production Build

```bash
npm run build
npm start
```

## Customizing Content

| What to change | File |
|----------------|------|
| Name, links, email, headline, stats, journey | `src/data/site.ts` |
| Skills & tech marquee | `src/data/skills.ts`, `src/components/SkillIcon.tsx` |
| Projects | `src/data/projects.ts` |
| Development approach | `src/data/approach.ts` |
| Colors / theme | `src/app/globals.css`, `tailwind.config.ts` |

## Adding a New Project

Open `src/data/projects.ts` and add an entry to the `projects` array:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  description: "Brief description of the project.",
  techStack: ["Next.js", "TypeScript"],
  liveUrl: "https://your-demo.vercel.app", // optional
  liveLabel: "Live Demo", // optional — e.g. "WordPress.org"
  githubUrl: "https://github.com/yourusername/repo", // optional
  category: "full-stack", // "frontend" | "full-stack" | "wordpress"
  featured: true, // optional — larger card in bento grid
  imageGradient: "from-blue-600 via-indigo-600 to-violet-600",
  context: "Company · Project type", // optional subtitle on card
}
```

`liveUrl` and `githubUrl` are optional—enterprise case studies without public demos omit them and show no hover links.

The `imageGradient` uses Tailwind gradient classes for the project preview placeholder. Set `featured: true` for a larger card in the bento grid layout.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme & error boundary
│   ├── page.tsx            # One-page portfolio entry
│   ├── globals.css         # Design tokens & utilities
│   └── ...
├── components/
│   ├── sections/           # Hero, About, Projects, Skills, etc.
│   ├── Navigation.tsx      # Fixed header with scroll spy
│   ├── Portfolio.tsx       # Main page composition
│   └── ...
├── data/                   # Site config, skills, projects
├── hooks/                  # useActiveSection scroll spy
└── lib/                    # Scroll utilities, metadata
```

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended), Netlify, or any platform supporting Next.js:

1. Push your code to GitHub
2. Import the repository on your hosting platform
3. Set environment variables:
   - `NEXT_PUBLIC_FORMSPREE_ID`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

For Vercel, the framework preset is detected automatically. After deployment, update `siteConfig.url` in `src/data/site.ts` if not using the env variable.

## Legacy Routes

Old multi-page URLs redirect to section anchors:

- `/about` → `/#about`
- `/projects` → `/#projects`
- `/contact` → `/#contact`

## License

MIT
