'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProjects({ projects }: { projects: any[] }) {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Featured Projects</h2>
        </div>

        <div className="space-y-20">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={project._id}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className={`lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden relative border border-slate-200 shadow-md ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                {project.coverImage ? (
                  <Image 
                    src={project.coverImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
                )}
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                
                {project.client && (
                  <div className="p-3 bg-white rounded-xl border border-slate-150 shadow-sm text-xs text-slate-500">
                    <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px] mb-0.5">Client</span>
                    {project.client}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies?.map((tech: string, i: number) => (
                    <span key={i} className="text-[11px] font-mono bg-slate-200/60 px-2 py-0.5 rounded text-slate-600">{tech}</span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700">
                    View Case Study <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}