import Link from "next/link";
import { Trophy } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-surface-border">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <Link href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon className="size-5 transition-colors hover:text-foreground" />
          </Link>
          <Link href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="size-5 transition-colors hover:text-foreground" />
          </Link>
          <Link href={site.social.devpost} target="_blank" rel="noreferrer" aria-label="DevPost">
            <Trophy className="size-5 transition-colors hover:text-foreground" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
