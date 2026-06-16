import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/serviceService';
import { Check, ChevronRight, Home, ArrowRight, Zap, Shield, Smartphone, Search, BarChart, Layout, Globe, Code2, Database, Cloud } from 'lucide-react';

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* --- BREADCRUMB --- */}
      <div className="bg-slate-50/50 border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-1 transition-colors">
            <Home size={14} /> Home
          </Link>
          <ChevronRight size={14} className="text-slate-300" />
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-slate-900">{service.title}</span>
        </nav>
      </div>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wider uppercase border border-blue-100">
              <Zap size={14} fill="currentColor" /> Premium Agency Service
            </div>
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              {service.title} <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
              {service.shortDescription}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                "Modern Technologies", "Responsive Design", 
                "SEO Optimized", "Secure Architecture"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700 font-semibold text-base">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={4} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group text-lg">
                Get Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="bg-white border-2 border-slate-100 hover:border-blue-600 hover:text-blue-600 text-slate-700 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-lg">
                View Our Projects
              </Link>
            </div>
          </div>
          
          <div className="relative lg:ml-4">
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-100/50 to-transparent blur-3xl rounded-full opacity-60" />
            <div className="relative aspect-square sm:aspect-video lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <Image 
                src={service.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"} 
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: OVERVIEW --- */}
      <section className="bg-white py-24 lg:py-32 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Overview</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <p className="text-xl text-slate-500 leading-loose">
                At Blagweb Agency, our {service.title} solutions are engineered for growth. We don't just build software; we create business assets designed to scale seamlessly as your user base expands. By prioritizing high-performance architectures and industry-standard security, we ensure your digital product remains competitive and robust in a rapidly evolving market.
              </p>
              <p className="text-xl text-slate-500 leading-loose">
                Our approach centers on the user experience. By integrating modern UI/UX principles with secure back-end systems, we deliver products that are intuitive for users and manageable for your team. Whether it's enhancing performance or ensuring cross-device responsiveness, our goal is to deliver measurable business benefits and a frictionless digital journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECHNOLOGIES --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Technology Stack</h2>
          <p className="text-slate-500 mt-4 text-xl">Powering your project with industry-leading tools.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"], icon: <Layout /> },
            { title: "Backend", items: ["Node.js", "Express.js", "NestJS"], icon: <Code2 /> },
            { title: "Database", items: ["MongoDB", "PostgreSQL", "Prisma"], icon: <Database /> },
            { title: "Deployment", items: ["AWS", "Vercel", "Docker"], icon: <Cloud /> }
          ].map((tech) => (
            <div key={tech.title} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(tech.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
              <ul className="space-y-3">
                {tech.items.map(i => (
                  <li key={i} className="text-slate-500 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: FEATURES --- */}
      <section className="bg-slate-900 py-24 lg:py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Core Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Responsive Design", icon: <Smartphone /> },
              { title: "SEO Optimized", icon: <Search /> },
              { title: "Fast Performance", icon: <Zap /> },
              { title: "Secure Architecture", icon: <Shield /> },
              { title: "Scalable Solutions", icon: <BarChart /> },
              { title: "Modern UI/UX", icon: <Layout /> }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">{React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: DEVELOPMENT PROCESS --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Development Process</h2>
          <p className="text-slate-500 mt-4 text-xl">How we bring your vision to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, idx) => (
            <div key={step.step} className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="text-6xl font-black text-slate-50 absolute top-4 right-6 group-hover:text-blue-50 transition-colors">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-6 shadow-lg shadow-blue-200">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 7: RELATED PROJECTS --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Recent Projects</h2>
            <p className="text-slate-500 text-xl font-medium">Proven results in {service.title}.</p>
          </div>
          <Link href="/portfolio" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all text-lg">
            View all projects <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.relatedProjects?.slice(0, 4).map((project, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={project.image || `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800`} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-6 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )) || <div className="col-span-full py-12 text-center text-slate-400">Loading projects...</div>}
        </div>
      </section>

      {/* --- SECTION 8: FINAL CTA --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24 lg:pb-32">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden border border-white/5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">Ready to build your next <br className="hidden lg:block"/> digital product?</h2>
            <p className="text-slate-400 text-xl font-medium">
              Partner with Blagweb Agency to deliver high-performance solutions designed for the modern web.
            </p>
            <div className="flex flex-col sm:flex-row justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-blue-900/20 hover:scale-105 active:scale-95">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}