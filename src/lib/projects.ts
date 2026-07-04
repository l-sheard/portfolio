import path from "path";
import { getContentSlugs, readContentFile } from "@/lib/mdx";
import type { Project, ProjectFrontmatter } from "@/types/content";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content", "projects");

export function getAllProjectSlugs(): string[] {
  return getContentSlugs(PROJECTS_DIRECTORY);
}

export function getProjectBySlug(slug: string): Project {
  const { data, content } = readContentFile(PROJECTS_DIRECTORY, slug);
  const frontmatter = data as ProjectFrontmatter;
  return {
    ...frontmatter,
    slug,
    content,
  };
}

export function getAllProjects(): Project[] {
  return getAllProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}
