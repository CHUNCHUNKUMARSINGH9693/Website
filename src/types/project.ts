export type ProjectCategory =
  | "web"
  | "mobile"
  | "branding"
  | "ecommerce"
  | "other";

export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage?: string;
  category: ProjectCategory;
  client?: string;
  technologies: string[];
  liveUrl?: string;
  featured: boolean;
  completedAt?: string;
}
