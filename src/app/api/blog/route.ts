import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError, parsePagination } from "@/lib/api-utils";
import { blogPostSchema } from "@/lib/validators";
import { BlogPostModel } from "@/models";
import type { BlogPostSummary, PaginatedResponse } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const { page, limit, skip } = parsePagination(searchParams);

    await connectDB();
    const [posts, total] = await Promise.all([
      BlogPostModel.find({ published: true })
        .sort({ publishedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      BlogPostModel.countDocuments({ published: true }),
    ]);

    const items: BlogPostSummary[] = posts.map((p) => ({
      _id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      coverImage: p.coverImage,
      author: p.author,
      publishedAt: typeof p.publishedAt === 'string' ? p.publishedAt : (p.publishedAt ?? new Date()).toISOString(),
      tags: p.tags ?? [],
    }));

    const data: PaginatedResponse<BlogPostSummary> = {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };

    return jsonSuccess(data);
  } catch (error) {
    console.error("[GET /api/blog]", error);
    return jsonError("Failed to fetch blog posts", 500);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = blogPostSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Invalid blog post data";
      return jsonError(firstError, 400);
    }

    await connectDB();
    const post = await BlogPostModel.create({
      ...parsed.data,
      published: parsed.data.published ?? false,
    });

    return jsonSuccess(
      { id: post._id.toString(), slug: post.slug },
      "Blog post created",
      201
    );
  } catch (error) {
    console.error("[POST /api/blog]", error);
    return jsonError("Failed to create blog post", 500);
  }
}
