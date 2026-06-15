export interface BlogPostSummary {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

export interface BlogPost extends BlogPostSummary {
  content: string;
  updatedAt: string;
  published: boolean;
}

export interface CreateBlogPostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  tags?: string[];
  published?: boolean;
}
