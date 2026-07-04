import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllProjectSlugs().includes(slug)) return {};
  const project = getProjectBySlug(slug);
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getAllProjectSlugs().includes(slug)) notFound();
  const project = getProjectBySlug(slug);

  return (
    <Container className="py-16">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to projects
      </Link>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" /> View code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
          >
            <ExternalLink className="size-4" /> Live site
          </a>
        )}
      </div>

      <article className="prose dark:prose-invert mt-10 max-w-none">
        <MDXRemote source={project.content} />
      </article>
    </Container>
  );
}
