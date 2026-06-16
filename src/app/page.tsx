'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle2, Users, Award, Clock, Headphones, Zap, Search, Layout, Code, Database, Cloud, ShoppingCart, BarChart, BarChart3 } from "lucide-react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 mb-6">
                 We Build Digital Success
              </span>
              <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                We Build Digital Products That Drive <span className="text-blue-600">Real Business Growth</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">
                Blagweb Agency helps startups, businesses, and enterprises build modern websites, web apps, mobile apps, and digital solutions that create impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/services" className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/portfolio" className="inline-flex items-center rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-all hover:border-blue-600 hover:text-blue-600">
                  View Our Work
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
               <div className="flex -space-x-3">
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="relative h-12 w-12 rounded-full border-4 border-white overflow-hidden bg-gray-100">
      <Image
        src={`/images/team/team${i}.png`} // Fixed path and extension
        alt={`Client Avatar ${i}`}
        fill
        className="object-cover"
        sizes="48px"
      />
    </div>
  ))}
</div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                    <span className="ml-2 font-bold text-gray-900">5.0</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Trusted by 100+ clients worldwide</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-[32px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Software development team" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stat Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-8 top-12 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm border border-white/20"
              >
                <p className="text-3xl font-bold text-blue-600">150+</p>
                <p className="text-sm font-medium text-gray-600">Projects Completed</p>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-8 bottom-20 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm border border-white/20"
              >
                <p className="text-3xl font-bold text-blue-600">99%</p>
                <p className="text-sm font-medium text-gray-600">Client Satisfaction</p>
              </motion.div>
              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-1/2 -bottom-6 -translate-x-1/2 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm border border-white/20"
              >
                <p className="text-3xl font-bold text-blue-600">5+</p>
                <p className="text-sm font-medium text-gray-600">Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — SERVICES OVERVIEW */}
      <section className="py-24 bg-gray-50/50">
        <Container>
          <SectionHeading title="What we do" subtitle="End-to-end digital services tailored to your business." centered />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Web Development", desc: "Modern responsive websites built with latest tech.", icon: Code },
              { title: "Mobile Apps", desc: "High-performance apps for iOS and Android.", icon: Layout },
              { title: "UI/UX Design", desc: "Beautiful user experiences and interfaces.", icon: Search },
              { title: "E-Commerce", desc: "Online stores that increase conversions.", icon: ShoppingCart },
              { title: "Digital Marketing", desc: "Data-driven growth strategies.", icon: BarChart3 },
              { title: "Cloud Solutions", desc: "Scalable cloud infrastructure.", icon: Cloud },
              { title: "Software Development", desc: "Custom Software Solutions", icon: Code },
              { title: "CRM Development", desc: "Tailored CRM Systems", icon: Users },
              { title: "SEO Services", desc: "Improve Search Rankings", icon: Search },
              { title: "ERP Solutions", desc: "Integrated ERP Systems", icon: BarChart3 },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-xl text-center">
                <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4"><s.icon size={24} /></div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — PORTFOLIO PREVIEW */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">Our Portfolio</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">We Deliver Digital Excellence</h2>
              <p className="text-gray-600 text-lg mb-8">Here are some recent projects that helped our clients grow their businesses.</p>
              <div className="grid gap-6">
                {[
                  { label: "150+ Projects Completed", icon: CheckCircle2 },
                  { label: "100+ Happy Clients", icon: Users },
                  { label: "5+ Years Experience", icon: Award },
                  { label: "24/7 Support Available", icon: Headphones },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-900 font-semibold">
                    <stat.icon className="text-blue-600" size={20} /> {stat.label}
                  </div>
                ))}
              </div>
            </div>
           <div className="lg:col-span-8 grid gap-8 md:grid-cols-2">
  <ProjectCard
    title="SaaS Dashboard"
    category="Web Application"
    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    slug="saas-dashboard"
  />

  <ProjectCard
    title="Mobile Banking App"
    category="Mobile Development"
    image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    slug="banking-app"
  />

  <ProjectCard
    title="E-Commerce Platform"
    category="Web Development"
    image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    slug="ecommerce-platform"
  />

  <ProjectCard
    title="CRM Management System"
    category="Software Development"
    image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    slug="crm-system"
  />
</div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — WHY CHOOSE US */}
      <section className="py-24 bg-gray-50/50">
        <Container>
          <SectionHeading title="Why Businesses Choose Blagweb Agency" centered />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Experienced Team", icon: Users, desc: "A group of passionate experts dedicated to your success." },
              { title: "Modern Technologies", icon: Zap, desc: "We use the latest tools and frameworks for maximum performance." },
              { title: "Fast Delivery", icon: Clock, desc: "We respect your timelines and deliver results without compromise." },
              { title: "SEO Optimized", icon: Search, desc: "Rank higher and reach more customers with our optimized solutions." },
              { title: "Transparent Communication", icon: CheckCircle2, desc: "Stay updated at every stage of the development process." },
              { title: "Long-Term Support", icon: Headphones, desc: "We stick with you even after the launch to ensure growth." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><f.icon size={24} /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="py-24 overflow-hidden">
        <Container>
          <SectionHeading title="Our Process" subtitle="How we turn your vision into reality." centered />
          <div className="mt-20 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block" />
            <div className="grid gap-8 lg:grid-cols-6">
              {["Discovery", "Design", "Development", "Testing", "Deployment", "Support"].map((step, i) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 ring-8 ring-white">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-gray-900">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — TESTIMONIALS */}
      <section className="py-24">
        <Container>
          <SectionHeading title="What Our Clients Say" centered />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { name: "Rakesh Kuma", role: "CEO at TechFlow", text: "Blagweb Agency transformed our digital presence. Their attention to detail and technical expertise is unmatched." },
              { name: "Sarah Smith", role: "Marketing Director", text: "The team delivered our e-commerce platform ahead of schedule, and the results have been phenomenal." },
              { name: "Mike Johnson", role: "Founder of StartupX", text: "From UI/UX to final deployment, the entire process was seamless. Highly recommend their services." },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="py-20">
        <Container>
          <div className="bg-blue-600 rounded-[32px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-transparent opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Build Something Amazing?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let's turn your ideas into powerful digital products. Our team of experts is ready to help you grow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                  Start Your Project
                </Link>
               
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
