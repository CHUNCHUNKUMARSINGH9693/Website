'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div 
      layout
      className="group bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {project.coverImage ? (
          <Image 
            src={project.coverImage} 
            alt={project.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-blue-50 group-hover:scale-105 transition-transform duration-500 ease-out" />
        )}
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur border border-slate-200 rounded-md text-slate-800 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow space-y-3">
        {project.client && (
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{project.client}</div>
        )}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 pt-2">
          {project.technologies?.slice(0, 3).map((tech: string, i: number) => (
            <span key={i} className="text-[10px] font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-150 text-slate-600">{tech}</span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 mt-4">
          <Link href={`/portfolio/${project.slug}`} className="w-full text-center block px-4 py-2.5 bg-slate-50 group-hover:bg-blue-600 text-slate-700 group-hover:text-white rounded-xl text-xs font-bold transition-all">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}