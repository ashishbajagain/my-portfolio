import { Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const links = [
  { href: siteConfig.github, label: "GitHub", Icon: GithubIcon },
  { href: siteConfig.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
] as const;

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-glass text-muted backdrop-blur-sm transition-all hover:scale-105 hover:border-accent/50 hover:text-foreground hover:shadow-lg hover:shadow-accent/10"
        >
          <Icon className="h-5 w-5" aria-hidden />
        </Link>
      ))}
    </div>
  );
}
