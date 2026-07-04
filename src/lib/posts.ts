import path from "path";
import readingTime from "reading-time";
import { getContentSlugs, readContentFile } from "@/lib/mdx";
import type { Post, PostFrontmatter } from "@/types/content";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

export function getAllPostSlugs(): string[] {
  return getContentSlugs(POSTS_DIRECTORY);
}

export function getPostBySlug(slug: string): Post {
  const { data, content } = readContentFile(POSTS_DIRECTORY, slug);
  const frontmatter = data as PostFrontmatter;
  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
