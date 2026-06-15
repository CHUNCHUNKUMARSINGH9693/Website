'use client';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Search, Database, Cloud, Smartphone, Palette, ShoppingCart, Cpu, Users, Briefcase, BarChart } from 'lucide-react';

const iconMap: any = { Code, Layout, Search, Database, Cloud, Smartphone, Palette, ShoppingCart, Cpu, Users, Briefcase, BarChart };

export default function ServiceCard({ service }: { service: any }) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
            <Icon size={28} />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
          <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{service.shortDescription}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {service.technologies?.slice(0, 3).map((tech: any) => (
            <span key={typeof tech === 'string' ? tech : tech.name} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full uppercase tracking-wider">
              {typeof tech === 'string' ? tech : tech.name}
            </span>
            ))}
          </div>

          <div className="inline-flex items-center text-blue-600 font-semibold">
            Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}