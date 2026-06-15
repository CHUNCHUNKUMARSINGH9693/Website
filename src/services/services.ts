import { connectDB } from "@/lib/mongodb";
import { fallbackServices } from "@/lib/data/fallback";
import { ServiceModel } from "@/models";
import type { Service, ServiceSummary } from "@/types";

function toSummary(doc: {
  _id: { toString(): string };
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  category: string;
}): ServiceSummary {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    icon: doc.icon,
    shortDescription: doc.shortDescription,
    category: doc.category as any,
  };
}

function toService(doc: any): Service {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    icon: doc.icon,
    shortDescription: doc.shortDescription,
    description: doc.description,
    heroImage: doc.heroImage,
    category: doc.category,
    features: doc.features || [],
    technologies: doc.technologies || [],
    process: doc.process || [],
    pricing: doc.pricing || [],
    faq: doc.faq || [],
    order: doc.order || 0,
  };
}

export async function getServices(): Promise<ServiceSummary[]> {
  try {
    await connectDB();
    const services = await ServiceModel.find()
      .sort({ order: 1, title: 1 })
      .lean()
      .exec();

    if (services.length === 0) {
      return fallbackServices.map((s) => toSummary(s as any));
    }

    return services.map((s) => toSummary(s as any));
  } catch {
    return fallbackServices.map((s) => toSummary(s as any));
  }
}

export async function getAllServices(): Promise<Service[]> {
  try {
    await connectDB();
    const services = await ServiceModel.find()
      .sort({ order: 1, title: 1 })
      .lean()
      .exec();

    if (services.length === 0) {
      return fallbackServices;
    }

    return services.map((s) => toService(s));
  } catch {
    return fallbackServices;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    await connectDB();
    const service = await ServiceModel.findOne({ slug })
      .lean()
      .exec();

    if (!service) {
      const fallback = fallbackServices.find((s) => s.slug === slug);
      return fallback ? toService(fallback) : null;
    }

    return toService(service);
  } catch {
    const fallback = fallbackServices.find((s) => s.slug === slug);
    return fallback ? toService(fallback) : null;
  }
}

export async function getServicesByCategory(category: string): Promise<ServiceSummary[]> {
  try {
    await connectDB();
    const services = await ServiceModel.find({ category })
      .sort({ order: 1 })
      .lean()
      .exec();

    if (services.length === 0) {
      return fallbackServices
        .filter((s) => s.category === category)
        .map((s) => toSummary(s as any));
    }

    return services.map((s) => toSummary(s as any));
  } catch {
    return fallbackServices
      .filter((s) => s.category === category)
      .map((s) => toSummary(s as any));
  }
}
