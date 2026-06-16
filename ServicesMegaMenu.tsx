'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons
import { services, Service } from '@/data/services';
import { ArrowRight } from 'lucide-react';

// Type for Lucide Icons
type IconName = keyof typeof LucideIcons;

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to get Lucide icon component by name
  const getLucideIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as IconName];
    return IconComponent ? <IconComponent size={24} /> : <LucideIcons.Code size={24} />; // Default to Code icon
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 right-0 top-full z-50 mt-4 px-4 lg:px-0"
          onMouseLeave={onClose} // Close when mouse leaves the mega menu area
        >
          <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-12 overflow-hidden">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {services.map((service: Service, index: number) => (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block p-6 rounded-premium bg-white border border-slate-100 hover:border-brand-orange hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                    onClick={onClose} // Close menu on click
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-lg flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                        {getLucideIcon(service.icon)}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-brand-orange transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="inline-flex items-center text-brand-orange font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Learn More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}