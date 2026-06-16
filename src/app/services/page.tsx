import type { Metadata } from "next";
import { Container, SectionHeading, Button, ServiceCard } from "@/components";
import { getServices, SAMPLE_SERVICES } from "@/services/serviceService";
import { CheckCircle2, Users, Award, Zap } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Blagweb Agency",
  description: "Comprehensive digital solutions including Web Development, Mobile Apps, UI/UX, and Cloud services.",
};

export default async function ServicesPage() {
  const dbServices = await getServices();
  const displayServices = dbServices.length > 0 ? dbServices : SAMPLE_SERVICES;

  return (
    <main className="bg-white">
      {/* SECTION 1 — HERO */}
      <section className="pt-20 pb-32 overflow-hidden bg-slate-50/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Solutions That Drive <span className="text-blue-600">Business Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Blagweb Agency provides modern digital solutions including web development, mobile apps, UI/UX design, CRM systems, and cloud solutions that help businesses scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" className="px-8 py-4">Start Your Project</Button>
                <Button href="/contact" variant="outline" className="px-8 py-4">Contact Us</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Software agency team" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Floating Stat Cards */}
              <div className="absolute -left-6 top-10 bg-white p-6 rounded-2xl shadow-xl border border-blue-50">
                <p className="text-3xl font-bold text-blue-600">150+</p>
                <p className="text-xs font-bold text-gray-400 uppercase">Projects Completed</p>
              </div>
              <div className="absolute -right-6 bottom-10 bg-white p-6 rounded-2xl shadow-xl border border-blue-50">
                <p className="text-3xl font-bold text-blue-600">100+</p>
                <p className="text-xs font-bold text-gray-400 uppercase">Happy Clients</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — SERVICES GRID */}
      <section className="py-24">
        <Container>
          <SectionHeading title="Comprehensive Digital Solutions" centered />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16">
            {displayServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="bg-blue-600 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Build Your Next Digital Product?</h2>
           <div className="flex flex-wrap justify-center mt-10">
             <Button href="/contact" className="bg-white text-[#2563eb] hover:bg-white-600 font-semibold border-none">
                    Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}