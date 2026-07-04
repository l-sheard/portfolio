import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've built.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        subtitle="A selection of things I've built, from university coursework to hackathons to work at my day job."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
