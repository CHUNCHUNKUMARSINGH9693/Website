'use client';
import { useState, useMemo } from 'react';
import Filters from './Filters';
import ProjectCard from './ProjectCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function PortfolioGrid({ initialProjects }: { initialProjects: any[] }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.client && project.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.technologies.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, initialProjects]);

  return (
    <section id="portfolio-grid" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Filters active={activeCategory} setActive={setActiveCategory} search={searchQuery} setSearch={setSearchQuery} />
        
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-2xl">
            <p className="text-slate-400 text-sm">No workspace items match your tracking adjustments.</p>
          </div>
        )}
      </div>
    </section>
  );
}