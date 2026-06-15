import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string | { name: string };
  image: string;
  slug: string;
  technologies?: string[];
}

export default function ProjectCard({ title, category, image, slug, technologies }: ProjectCardProps) {
  const categoryName = typeof category === 'string' ? category : category?.name;

  return (
    <div className="group relative bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-brand-600 mb-2 block uppercase tracking-wider">
          {categoryName}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-md tracking-wider border border-blue-100">{tech}</span>
            ))}
          </div>
        )}
        <Link href={`/portfolio/${slug}`} className="inline-flex items-center text-gray-900 font-semibold hover:text-brand-600 transition-colors">
          View Project <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}