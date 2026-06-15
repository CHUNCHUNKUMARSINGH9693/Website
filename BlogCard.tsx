'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  slug: string; // Slug for linking to the full article
}

/**
 * Renders a premium blog post card with image, category, title, description, date, and reading time.
 * Includes hover animations using Framer Motion.
 */
export default function BlogCard({ image, category, title, description, date, readingTime, slug }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 group"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-base mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <span>{date}</span>
            <span>{readingTime}</span>
          </div>
          <div className="inline-flex items-center text-blue-600 font-semibold group/link">
            Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}