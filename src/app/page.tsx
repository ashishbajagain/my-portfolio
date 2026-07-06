import { Portfolio } from "@/components/Portfolio";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: siteConfig.headline,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return <Portfolio />;
}
