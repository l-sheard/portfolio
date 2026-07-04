import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getContentSlugs(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function readContentFile(directory: string, slug: string) {
  const filePath = path.join(directory, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}
