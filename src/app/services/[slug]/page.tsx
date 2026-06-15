import { getServiceBySlug } from "@/services/serviceService";
import { getProjects } from "@/services/projects";
import { notFound } from "next/navigation";
import { Container, Badge, Button, ProjectCard, SectionHeading } from "@/components";
import Image from "next/image";
import { Check, ArrowRight, Shield, Zap, Layout, Maximize, Smartphone, BarChart, Plus, Minus } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return {
    title: service ? `${service.title} Services | Blagweb Agency` : "Service Not Found",
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const allProjects = await getProjects();

  // Map service slug to project category for related work
  const categoryMap: Record<string, string> = {
    "web-development": "web",
    "mobile-app-development": "mobile",
    "ui-ux-design": "branding",
    "ecommerce-development": "ecommerce",
    "software-development": "web",
    "crm-development": "web",
    "erp-development": "web",
    "digital-marketing": "other",
    "seo-services": "other",
    "cloud-solutions": "other",
  };
  const targetCategory = categoryMap[slug] || "other";
  const relatedProjects = allProjects.filter(p => p.category === targetCategory).slice(0, 3);

  if (!service) return notFound();

  return (
    <main className="bg-white pb-24">
      {/* SECTION 1 — SERVICE HERO */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image src={service.heroImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
        <Container className="relative h-full flex flex-col justify-center">
          <Badge className="mb-6 bg-blue-600 text-white border-none">{service.title}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl">{service.title}</h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl">{service.shortDescription}</p>
          <Button href="/contact" className="w-fit px-8 py-4">Start Your Project <ArrowRight className="ml-2" /></Button>
        </Container>
      </section>

      {/* SECTION 2 — OVERVIEW */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">{service.description}</p>
              
              {/* SECTION 3 — TECHNOLOGIES */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3 mb-16">
                {service.technologies?.map(tech => (
                  <span key={tech} className="px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-bold shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* SECTION 4 — FEATURES */}
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features?.map(feature => (
                  <div key={feature} className="flex items-center gap-3 p-4 bg-blue-50/30 rounded-2xl border border-blue-50">
                    <Check className="text-blue-600" size={20} />
                    <span className="font-semibold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5 — PROCESS */}
            <div className="lg:col-span-4">
              <div className="bg-gray-900 rounded-[32px] p-8 text-white sticky top-32">
                <h3 className="text-xl font-bold mb-8">Our Process</h3>
                <div className="space-y-8">
                  {service.process?.map((p, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                          {p.step}
                        </div>
                        {i !== service.process.length - 1 && <div className="w-px h-full bg-white/10 mt-2" />}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{p.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — PRICING */}
      <section className="py-24 bg-gray-50/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Flexible Pricing Plans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing?.map((plan, i) => (
              <div key={i} className={`p-10 rounded-[32px] border ${plan.highlight ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/20' : 'bg-white border-gray-100 text-gray-900'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.plan}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{plan.description}</p>
                <div className="text-4xl font-bold mb-8">{plan.price}</div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium">
                      <Check className={plan.highlight ? 'text-white' : 'text-blue-600'} size={18} /> {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? 'primary' : 'outline'} className={`w-full ${plan.highlight ? 'bg-white text-blue-600 border-none hover:bg-gray-100' : ''}`}>Get Started</Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faq?.map((item, i) => (
              <div key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
                <details className="w-full">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                    {item.question}
                    <Plus size={20} className="group-open:hidden" />
                    <Minus size={20} className="hidden group-open:block" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 8 — RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="py-24 border-t border-gray-100">
          <Container>
            <SectionHeading 
              title="Related Projects" 
              subtitle={`See how we've helped other clients with similar ${service.title} solutions.`} 
              centered
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProjects.map((project) => (
                <ProjectCard key={project._id} {...project} image={project.coverImage || ""} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <div className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Build Your Next Digital Product?</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 border-none">Start Your Project</Button>
              <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">Contact Us</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}