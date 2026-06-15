import Link from "next/link";
import type { Service, ServiceSummary, Technology } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";

type ServiceCardData = Service | ServiceSummary;

interface ServiceCardProps {
  service: ServiceCardData;
}

function getDescription(service: ServiceCardData): string {
  if ("shortDescription" in service && service.shortDescription) {
    return service.shortDescription;
  }
  if ("description" in service && service.description) {
    return service.description;
  }
  return "";
}

function getTechnologies(service: ServiceCardData): string[] {
  if ("technologies" in service && Array.isArray(service.technologies)) {
    return service.technologies.map((t: Technology | string) =>
      typeof t === "string" ? t : t.name
    );
  }
  if ("features" in service && Array.isArray(service.features)) {
    return service.features.slice(0, 4);
  }
  return [];
}

function renderIcon(icon: string) {
  if (icon.length <= 2) return icon;
  if (icon === "code") return "💻";
  if (icon === "palette") return "🎨";
  if (icon === "chart") return "📊";
  return "⚡";
}

export function ServiceCard({ service }: ServiceCardProps) {
  const description = getDescription(service);
  const technologies = getTechnologies(service);

  return (
    <Card
      hover
      className="group flex h-full flex-col border border-gray-100 transition-all duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
    >
      <CardHeader>
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl transition group-hover:bg-brand-100"
          aria-hidden
        >
          {renderIcon(service.icon)}
        </span>
        <CardTitle className="mt-4">{service.title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {technologies.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 border-t border-gray-100 px-6 pb-2 pt-4">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="px-6 pb-6 pt-4">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-brand-600 transition hover:text-brand-700"
        >
          Learn More
          <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </Card>
  );
}
