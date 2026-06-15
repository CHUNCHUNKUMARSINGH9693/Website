'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function BlogCard({ title, category, image, description, date, readTime, slug }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4">
          <span className="backdrop-blur-md bg-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/30">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {date}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <Link href={`/blog/${slug}`} className="text-sm font-bold text-gray-900 flex items-center group/btn">
            Read More <div className="ml-2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-all group-hover/btn:bg-blue-600 group-hover/btn:text-white"><ArrowRight size={16} /></div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}