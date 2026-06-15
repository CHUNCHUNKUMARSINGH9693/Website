'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100"
            >
              OUR PORTFOLIO
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              Turning Ideas Into Successful <span className="text-blue-600">Digital Products</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              Explore our portfolio of websites, mobile applications, software solutions, branding projects, and digital experiences delivered for startups, businesses, and enterprises.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#portfolio-grid" className="px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-sm">
                View Projects
              </a>
              <button className="px-6 py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition text-sm">
                Start Your Project
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blue-100 to-slate-100 border border-slate-200/60 shadow-2xl flex items-center justify-center p-8">
              <div className="w-full h-full bg-white rounded-xl shadow-inner border border-slate-200/40 relative overflow-hidden" />
              
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute top-6 -left-6 bg-white/80 backdrop-blur border border-slate-200 shadow-xl p-4 rounded-xl">
                <div className="text-2xl font-black text-blue-600">50+</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Projects Completed</div>
              </motion.div>
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="absolute bottom-10 -right-6 bg-white/80 backdrop-blur border border-slate-200 shadow-xl p-4 rounded-xl">
                <div className="text-2xl font-black text-blue-600">25+</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Happy Clients</div>
              </motion.div>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute -bottom-6 left-12 bg-white/80 backdrop-blur border border-slate-200 shadow-xl p-4 rounded-xl">
                <div className="text-2xl font-black text-blue-600">5+</div>
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}