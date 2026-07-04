import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/icons/GithubIcon";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <Link href={`/projects/${project.slug}`} className="flex-1">
        <h3 className="font-semibold transition-colors hover:text-accent">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-muted">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" /> Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <ExternalLink className="size-4" /> Live
          </a>
        )}
      </div>
    </Card>
  );
}
