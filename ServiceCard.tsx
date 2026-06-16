'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Smartphone, Search, Database, Cloud, Globe, Palette, ShoppingCart, Code2, Users, BarChart3, Megaphone } from 'lucide-react';

const iconMap: any = { Globe, Smartphone, Palette, ShoppingCart, Code2, Users, BarChart3, Megaphone, Search, Cloud };

export default function ServiceCard({ service }: { service: any }) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
          <Icon size={28} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{service.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {service.technologies?.slice(0, 3).map((tech: string) => (
            <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full uppercase tracking-wider">{tech}</span>
          ))}
        </div>

        <Link href={`/services/${service.slug}`} className="inline-flex items-center text-blue-600 font-semibold group/link">
          Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}