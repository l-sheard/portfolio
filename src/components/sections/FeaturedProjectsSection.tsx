import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects();

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <SectionHeading eyebrow="Selected work" title="Featured Projects" />
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:hidden"
        >
          View all projects <ArrowRight className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
