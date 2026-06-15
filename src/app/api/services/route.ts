import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError } from "@/lib/api-utils";
import { ServiceModel } from "@/models";
import type { Service, ServiceSummary } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get("format"); // "summary" or "full"

    await connectDB();
    const services = await ServiceModel.find()
      .sort({ order: 1, title: 1 })
      .lean()
      .exec();

    if (format === "full") {
      const items: Service[] = services.map((s: any) => ({
        _id: s._id.toString(),
        title: s.title,
        slug: s.slug,
        icon: s.icon,
        shortDescription: s.shortDescription,
        description: s.description,
        heroImage: s.heroImage,
        category: s.category,
        features: s.features || [],
        technologies: s.technologies || [],
        process: s.process || [],
        pricing: s.pricing || [],
        faq: s.faq || [],
        order: s.order || 0,
      }));
      return jsonSuccess(items);
    }

    // Default: summary format
    const items: ServiceSummary[] = services.map((s: any) => ({
      _id: s._id.toString(),
      title: s.title,
      slug: s.slug,
      icon: s.icon,
      shortDescription: s.shortDescription,
      category: s.category,
    }));

    return jsonSuccess(items);
  } catch (error) {
    console.error("[GET /api/services]", error);
    return jsonError("Failed to fetch services", 500);
  }
}
