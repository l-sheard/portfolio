import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogPostCard } from "@/components/sections/BlogPostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software engineering, learning, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        subtitle="Notes on what I'm building and learning, mostly written for my future self."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
