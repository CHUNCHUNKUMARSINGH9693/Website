import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError } from "@/lib/api-utils";
import { BlogPostModel } from "@/models";
import type { BlogPost } from "@/types";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    await connectDB();

    const doc = await BlogPostModel.findOne({ slug, published: true }).lean();
    if (!doc) return jsonError("Post not found", 404);

    const post: BlogPost = {
      _id: doc._id.toString(),
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      content: doc.content,
      coverImage: doc.coverImage,
      author: doc.author,
      publishedAt: (doc.publishedAt ?? new Date()).toISOString(),
      updatedAt: (doc.updatedAt ?? new Date()).toISOString(),
      tags: doc.tags ?? [],
      published: doc.published ?? false,
    };

    return jsonSuccess(post);
  } catch (error) {
    console.error("[GET /api/blog/[slug]]", error);
    return jsonError("Failed to fetch blog post", 500);
  }
}
