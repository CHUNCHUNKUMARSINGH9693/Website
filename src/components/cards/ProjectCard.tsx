import Link from "next/link";
import type { Project } from "@/types";
import { Badge, Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{project.title}</CardTitle>
          {project.featured && <Badge variant="brand">Featured</Badge>}
        </div>
        {project.client && (
          <p className="text-sm text-gray-500">Client: {project.client}</p>
        )}
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
      <Link
        href={`/portfolio/${project.slug}`}
        className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        View portfolio →
      </Link>
    </Card>
  );
}
