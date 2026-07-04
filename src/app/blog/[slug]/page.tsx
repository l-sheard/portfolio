import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { formatFullDate } from "@/lib/date";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllPostSlugs().includes(slug)) return {};
  const post = getPostBySlug(slug);
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getAllPostSlugs().includes(slug)) notFound();
  const post = getPostBySlug(slug);

  return (
    <Container className="py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to blog
      </Link>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
        <time dateTime={post.date}>{formatFullDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <article className="prose dark:prose-invert mt-10 max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </Container>
  );
}
