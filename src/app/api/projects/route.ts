import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError } from "@/lib/api-utils";
import { ProjectModel } from "@/models";
import type { Project } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featuredOnly = searchParams.get("featured") === "true";

    await connectDB();
    const filter = featuredOnly ? { featured: true } : {};
    const projects = await ProjectModel.find(filter).sort({ completedAt: -1 }).lean();

    const items: Project[] = projects.map((p) => ({
      _id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      description: p.description,
      coverImage: p.coverImage,
      category: p.category,
      client: p.client,
      technologies: p.technologies ?? [],
      liveUrl: p.liveUrl,
      featured: p.featured ?? false,
      completedAt: typeof p.completedAt === 'string' ? p.completedAt : p.completedAt?.toISOString(),
    }));

    return jsonSuccess(items);
  } catch (error) {
    console.error("[GET /api/projects]", error);
    return jsonError("Failed to fetch projects", 500);
  }
}
