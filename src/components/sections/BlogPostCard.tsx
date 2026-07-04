import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/types/content";
import { formatFullDate } from "@/lib/date";

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Card>
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <time dateTime={post.date}>{formatFullDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold transition-colors hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
      </Link>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </Card>
  );
}
