'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Code, Layout, Search, ShoppingCart, BarChart, Cloud, CheckCircle2, Users, Award, Headphones } from "lucide-react";
import { Container, ProjectCard, SectionHeading, Badge, Button } from "@/components";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <Badge className="mb-6">OUR PORTFOLIO</Badge>
              <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                Showcasing Digital Solutions That <span className="text-blue-600">Drive Results</span>
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                Explore our latest web applications, mobile apps, UI/UX projects, e-commerce platforms, and software solutions built for startups and businesses worldwide.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#projects" className="px-8 py-4">View Projects</Button>
                <Button href="/contact" variant="outline" className="px-8 py-4">Start Your Project</Button>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
                </div>
                <p className="text-lg font-medium text-gray-900">
                  5.0 <span className="text-gray-500 ml-2 font-normal">Trusted by 100+ clients worldwide</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden shadow-2xl border border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern agency workspace" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stat Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-10 rounded-2xl bg-white p-6 shadow-xl border border-gray-50 hidden md:block"
              >
                <p className="text-3xl font-bold text-blue-600">150+</p>
                <p className="text-sm font-semibold text-gray-500">Projects Completed</p>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-6 top-1/2 rounded-2xl bg-white p-6 shadow-xl border border-gray-50 hidden md:block"
              >
                <p className="text-3xl font-bold text-blue-600">100+</p>
                <p className="text-sm font-semibold text-gray-500">Happy Clients</p>
              </motion.div>
              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-12 -bottom-6 rounded-2xl bg-white p-6 shadow-xl border border-gray-50 hidden md:block"
              >
                <p className="text-3xl font-bold text-blue-600">5+</p>
                <p className="text-sm font-semibold text-gray-500">Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — SERVICES OVERVIEW */}
      <section className="py-24 bg-gray-50/50">
        <Container>
          <SectionHeading title="Our Expertise" centered />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Web Development", desc: "Modern responsive websites built with React and Next.js.", icon: Code },
              { title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android.", icon: Layout },
              { title: "UI/UX Design", desc: "User-centric design that provides seamless experiences.", icon: Search },
              { title: "E-Commerce Development", desc: "Conversion-optimized stores for global brands.", icon: ShoppingCart },
              { title: "Digital Marketing", desc: "Growth strategies driven by data and creativity.", icon: BarChart },
              { title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure management.", icon: Cloud },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="p-8 bg-white rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left side: Project Grid */}
            <div className="lg:col-span-8">
              <SectionHeading title="Featured Projects" className="mb-16" />
              <div className="grid gap-10 md:grid-cols-2">
                {[
                  { 
                    title: "SaaS Dashboard", 
                    category: "Web Application", 
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", 
                    slug: "saas-dashboard",
                    tech: ["Next.js", "Tailwind", "PostgreSQL"]
                  },
                  { 
                    title: "E-Commerce Platform", 
                    category: "Web Development", 
                    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80", 
                    slug: "ecommerce",
                    tech: ["Shopify", "React", "Node.js"]
                  },
                  { 
                    title: "Mobile Banking App", 
                    category: "Mobile Development", 
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", 
                    slug: "banking-app",
                    tech: ["React Native", "Firebase", "Stripe"]
                  },
                  { 
                    title: "CRM System", 
                    category: "Software Solution", 
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80", 
                    slug: "crm-system",
                    tech: ["Vue.js", "Express", "AWS"]
                  },
                ].map((project, i) => (
                  <ProjectCard 
                    key={i} 
                    title={project.title} 
                    category={project.category} 
                    image={project.image} 
                    slug={project.slug} 
                    technologies={project.tech} 
                  />
                ))}
              </div>
            </div>

            {/* Right side: Stats Panel */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-10 bg-gray-900 rounded-[32px] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 blur-[80px] opacity-20" />
                <h3 className="text-2xl font-bold mb-10">Our Track Record</h3>
                <div className="space-y-10">
                  {[
                    { label: "Projects Completed", value: "150+", icon: CheckCircle2 },
                    { label: "Happy Clients", value: "100+", icon: Users },
                    { label: "Years Experience", value: "5+", icon: Award },
                    { label: "Support", value: "24/7", icon: Headphones },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                        <stat.icon size={28} />
                      </div>
                      <div>
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-10 border-t border-white/10">
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    We are committed to delivering high-quality digital products that help your business scale and succeed in the digital era.
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
                    Work with us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}