'use client';
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Mail, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container, Badge, Button, BlogCard } from "@/components";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const BLOG_POSTS = [
  { title: "The Complete Guide to Modern Web Development", category: "Web Development", date: "Mar 15, 2024", readTime: "8 min", slug: "modern-web-dev", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", description: "Master the latest tools and frameworks in the modern web ecosystem." },
  { title: "Mobile-First Approach in 2025", category: "Mobile Apps", date: "Mar 12, 2024", readTime: "6 min", slug: "mobile-first", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800", description: "Why mobile-first design is more critical now than ever before." },
  { title: "SEO Best Practices for Higher Rankings", category: "SEO", date: "Mar 10, 2024", readTime: "10 min", slug: "seo-best-practices", image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800", description: "Optimize your content to dominate the search engine results pages." },
  { title: "UI/UX Principles Every Designer Should Know", category: "UI/UX Design", date: "Mar 08, 2024", readTime: "7 min", slug: "ui-ux-principles", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800", description: "Core foundations of creating intuitive and beautiful digital interfaces." },
  { title: "What is Cloud Computing and How It Works", category: "Cloud Solutions", date: "Mar 05, 2024", readTime: "12 min", slug: "cloud-computing-intro", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800", description: "A deep dive into scalable cloud infrastructure for modern businesses." },
  { title: "Useful VS Code Extensions for Developers", category: "Development", date: "Mar 02, 2024", readTime: "5 min", slug: "vscode-extensions", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800", description: "Boost your productivity with these essential VS Code plugins." },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Handle Filtering
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Handle Pagination
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  return (
    <main className="bg-white pb-24">
      {/* HERO SECTION */}
      <section className="pt-10 pb-20">
        <Container>
          <motion.div {...fadeIn} className="bg-gray-50 rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden border border-gray-100 shadow-sm">
            <div className="lg:w-1/2">
              <Badge className="mb-6">OUR BLOG</Badge>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">Latest Insights & <br /><span className="text-blue-600">Updates</span></h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">Stay updated with the latest trends, tips, and insights in web development, design, mobile apps, and digital marketing.</p>
              <div className="flex flex-wrap gap-4">
                <Button href="#articles">Explore Articles <ArrowRight className="ml-2 h-4 w-4" /></Button>
                <Button variant="outline" href="#categories-sidebar">Categories</Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800" alt="Blog desk scene" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Container>
        <div className="grid lg:grid-cols-12 gap-10">
          {/* LEFT SIDEBAR */}
          <aside id="categories-sidebar" className="lg:col-span-3 space-y-8">
            <div className="p-6 bg-white border border-gray-100 rounded-[20px] shadow-sm">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-600 transition-all" 
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-[20px] shadow-sm">
              <h4 className="font-bold text-gray-900 mb-6">Categories</h4>
              <ul className="space-y-4">
                {['All', 'Web Development', 'UI/UX Design', 'Mobile Apps', 'SEO', 'Cloud Solutions'].map((cat) => (
                  <li 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className="flex items-center justify-between text-sm group cursor-pointer"
                  >
                    <span className={`transition-colors ${activeCategory === cat ? 'text-blue-600 font-bold' : 'text-gray-600 group-hover:text-blue-600'}`}>• {cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-[20px] shadow-sm">
              <h4 className="font-bold text-gray-900 mb-6">Popular Posts</h4>
              <div className="space-y-6">
                {[
                  { id: "1461749280684-dccba630e2f6", title: "Trends in Modern Software UI" },
                  { id: "1498050108023-c5249f4df085", title: "The Future of Web Apps" }
                ].map(post => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0 overflow-hidden relative">
                      <Image src={`https://images.unsplash.com/photo-${post.id}?q=80&w=200`} alt="Thumb" fill className="object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 line-clamp-2 hover:text-blue-600 cursor-pointer">{post.title}</h5>
                      <p className="text-[10px] text-gray-400 mt-1">Mar 05, 2024</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="w-full mt-8 py-3 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                View All Popular Posts
              </button>
            </div>
          </aside>

          {/* MAIN BLOG GRID */}
          <div id="articles" className="lg:col-span-6">
            <div className="grid gap-8 sm:grid-cols-2">
              {paginatedPosts.map((post, i) => (
                <BlogCard key={i} {...post} />
              ))}
              {paginatedPosts.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500">
                  No articles found matching your criteria.
                </div>
              )}
            </div>

            {/* PAGINATION */}
            <div className="mt-16 flex items-center justify-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button 
                  key={num} 
                  onClick={() => setCurrentPage(num)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${currentPage === num ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  {num}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="p-8 bg-blue-600 rounded-[24px] text-white text-center relative overflow-hidden shadow-xl shadow-blue-600/20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent opacity-30" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                  <Mail size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
                <p className="text-blue-100 text-sm mb-8">Subscribe to our newsletter and never miss an update.</p>
                <input type="email" placeholder="Your email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder:text-blue-100 focus:ring-2 focus:ring-white outline-none mb-4" />
                <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">
                  Subscribe Now →
                </button>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-[20px] shadow-sm">
              <h4 className="font-bold text-gray-900 mb-6">Recent Posts</h4>
              <div className="space-y-6">
                {[
                  { id: "1555066931-4365d14bab8c", title: "Scaling your Next.js App" },
                  { id: "1587620962725-abab7fe55159", title: "Testing React Components" }
                ].map(post => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-lg bg-gray-100 shrink-0 overflow-hidden relative">
                      <Image src={`https://images.unsplash.com/photo-${post.id}?q=80&w=200`} alt="Thumb" fill className="object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-900 line-clamp-1 hover:text-blue-600 cursor-pointer">{post.title}</h5>
                      <p className="text-[10px] text-gray-400 mt-1">Mar 01, 2024</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/blog" className="block text-center mt-8 text-xs font-bold text-blue-600 hover:underline">
                View All Articles →
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}