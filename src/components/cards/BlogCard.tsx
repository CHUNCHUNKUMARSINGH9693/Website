import Link from "next/link";
import type { BlogPostSummary } from "@/types";
import { Badge, Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";

interface BlogCardProps {
  post: BlogPostSummary;
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card hover>
      <CardHeader>
        <time className="text-sm text-gray-500" dateTime={post.publishedAt}>
          {date}
        </time>
        <CardTitle>
          <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        Read article →
      </Link>
    </Card>
  );
}
