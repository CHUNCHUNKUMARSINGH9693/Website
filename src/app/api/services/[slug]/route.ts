import { connectDB } from "@/lib/mongodb";
import { jsonSuccess, jsonError } from "@/lib/api-utils";
import { ServiceModel } from "@/models";
import { fallbackServices } from "@/lib/data/fallback";
import type { Service } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    await connectDB();
    const service = await ServiceModel.findOne({ slug })
      .lean()
      .exec();

    if (!service) {
      const fallback = fallbackServices.find((s) => s.slug === slug);
      if (!fallback) {
        return jsonError("Service not found", 404);
      }
      return jsonSuccess(fallback);
    }

    const data: Service = {
      _id: service._id.toString(),
      title: service.title,
      slug: service.slug,
      icon: service.icon,
      shortDescription: service.shortDescription,
      description: service.description,
      heroImage: service.heroImage,
      category: service.category,
      features: service.features || [],
      technologies: service.technologies || [],
      process: service.process || [],
      pricing: service.pricing || [],
      faq: service.faq || [],
      order: service.order || 0,
    };

    return jsonSuccess(data);
  } catch (error) {
    console.error("[GET /api/services/[slug]]", error);
    return jsonError("Failed to fetch service", 500);
  }
}
