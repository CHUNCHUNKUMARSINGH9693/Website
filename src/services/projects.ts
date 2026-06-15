import { connectDB } from "@/lib/mongodb";
import { fallbackProjects } from "@/lib/data/fallback";
import { ProjectModel } from "@/models";
import type { Project } from "@/types";

function mapProject(doc: {
  _id: { toString(): string };
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  category: Project["category"];
  client?: string;
  technologies?: string[];
  liveUrl?: string;
  featured?: boolean;
  completedAt?: Date | string;
}): Project {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    description: doc.description,
    coverImage: doc.coverImage,
    category: doc.category,
    client: doc.client,
    technologies: doc.technologies ?? [],
    liveUrl: doc.liveUrl,
    featured: doc.featured ?? false,
    completedAt: typeof doc.completedAt === 'string' ? doc.completedAt : doc.completedAt?.toISOString(),
  };
}

export async function getProjects(featuredOnly = false): Promise<Project[]> {
  try {
    await connectDB();
    const filter = featuredOnly ? { featured: true } : {};
    const projects = await ProjectModel.find(filter).sort({ completedAt: -1 }).lean();
    if (projects.length === 0) {
      return featuredOnly
        ? fallbackProjects.filter((p) => p.featured)
        : fallbackProjects;
    }
    return projects.map(mapProject);
  } catch {
    return featuredOnly
      ? fallbackProjects.filter((p) => p.featured)
      : fallbackProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    await connectDB();
    const doc = await ProjectModel.findOne({ slug }).lean();
    if (!doc) return fallbackProjects.find((p) => p.slug === slug) ?? null;
    return mapProject(doc);
  } catch {
    return fallbackProjects.find((p) => p.slug === slug) ?? null;
  }
}
