import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Container, Badge } from "@/components";

// Static data to match the main blog page
const BLOG_POSTS: Record<string, any> = {
  "modern-web-dev": {
    title: "The Complete Guide to Modern Web Development",
    category: "Web Development",
    date: "Mar 15, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    description: "Master the latest tools and frameworks in the modern web ecosystem. In this article, we explore how React, Next.js, and Tailwind CSS are shaping the way we build performant applications in 2024.",
  },
  "mobile-first": {
    title: "Mobile-First Approach in 2025",
    category: "Mobile Apps",
    date: "Mar 12, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "Why mobile-first design is more critical now than ever before. We delve into responsive design techniques and how to optimize user experiences for smaller screens first.",
  },
  "seo-best-practices": {
    title: "SEO Best Practices for Higher Rankings",
    category: "SEO",
    date: "Mar 10, 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200",
    description: "Optimize your content to dominate the search engine results pages. Learn about Core Web Vitals, keyword strategy, and the importance of high-quality backlinks.",
  },
  "ui-ux-principles": {
    title: "UI/UX Principles Every Designer Should Know",
    category: "UI/UX Design",
    date: "Mar 08, 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
    description: "Core foundations of creating intuitive and beautiful digital interfaces. We talk about visual hierarchy, accessibility, and the psychological impact of color theory.",
  },
  "cloud-computing-intro": {
    title: "What is Cloud Computing and How It Works",
    category: "Cloud Solutions",
    date: "Mar 05, 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
    description: "A deep dive into scalable cloud infrastructure for modern businesses. Understand the differences between IaaS, PaaS, and SaaS, and how they benefit your organization.",
  },
  "vscode-extensions": {
    title: "Useful VS Code Extensions for Developers",
    category: "Development",
    date: "Mar 02, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200",
    description: "Boost your productivity with these essential VS Code plugins. From Prettier to GitLens, we list the must-have extensions for every web developer.",
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white pb-24">
      <div className="relative h-[40vh] md:h-[60vh] w-full min-h-[400px]">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-12">
          <Link href="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-8 font-semibold group transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" /> Back to Blog
          </Link>
          <Badge className="mb-4 w-fit bg-blue-600 text-white border-none px-4 py-1.5">{post.category}</Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl">{post.title}</h1>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-6 mb-12 text-sm text-gray-500 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-2"><User size={18} className="text-blue-600" /> By Blagweb Team</div>
            <div className="flex items-center gap-2"><Calendar size={18} className="text-blue-600" /> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={18} className="text-blue-600" /> {post.readTime} read</div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">{post.description}</p>
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
            <p>Full article content regarding {post.title.toLowerCase()} would go here.</p>
          </div>
        </div>
      </Container>
    </main>
  );
}