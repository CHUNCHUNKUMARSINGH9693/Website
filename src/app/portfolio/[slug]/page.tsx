import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe, Calendar, Tag, ExternalLink, User } from "lucide-react";
import { Container, Badge, Button } from "@/components";

/**
 * Static data to ensure the featured projects on the portfolio page always have details.
 * In a production environment, you would fetch this data from MongoDB using the ProjectModel.
 */
const PROJECTS_DATA: Record<string, any> = {
  "saas-dashboard": {
    title: "SaaS Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "A comprehensive SaaS dashboard designed to provide real-time analytics and user management for enterprise-level applications. This project focused on high performance, data visualization, and intuitive user experience.",
    client: "TechFlow Inc.",
    date: "March 2024",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma", "Chart.js"],
    liveUrl: "https://example.com",
  },
  "ecommerce": {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    description: "A full-featured e-commerce platform built for a global fashion brand. Features include advanced product filtering, secure checkout with Stripe, real-time inventory management, and a custom CMS for content updates.",
    client: "Moda Fashion",
    date: "January 2024",
    technologies: ["Shopify", "React", "Node.js", "Redis", "Stripe"],
    liveUrl: "https://example.com",
  },
  "banking-app": {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    description: "A secure and user-friendly mobile banking application that allows users to manage their accounts, transfer funds, and pay bills on the go. Security was the top priority, implementing biometric authentication and end-to-end encryption.",
    client: "Global Finance Bank",
    date: "December 2023",
    technologies: ["React Native", "Firebase", "Stripe", "Biometric Auth"],
    liveUrl: "https://example.com",
  },
  "crm-system": {
    title: "CRM System",
    category: "Software Solution",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    description: "A custom CRM system built to streamline lead generation and customer relationship management for a B2B service provider. It includes automated email sequences, lead scoring, and integration with popular communication tools.",
    client: "ServicePro Solutions",
    date: "October 2023",
    technologies: ["Vue.js", "Express", "AWS", "MongoDB", "Twilio"],
    liveUrl: "https://example.com",
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white pb-24">
      {/* Hero Header */}
      <div className="relative h-[40vh] md:h-[60vh] w-full min-h-[350px] md:min-h-[500px]">
        <Image src={project.image} alt={project.title} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-12">
          <Link href="/portfolio" className="inline-flex items-center text-white/90 hover:text-white mb-6 md:mb-8 transition-colors font-semibold group">
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
          </Link>
          <Badge className="mb-4 w-fit bg-blue-600 text-white border-none px-4 py-1.5">{project.category}</Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">{project.title}</h1>
        </Container>
      </div>

      <Container className="mt-12 lg:mt-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Project</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">{project.description}</p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-semibold shadow-sm">
                  {tech}
                </span>
              ))}
            </div>

            <Button href={project.liveUrl} className="px-8 py-4">
              Visit Live Website <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-gray-50/50 rounded-[32px] p-6 md:p-8 border border-gray-100 sticky top-32 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">Project Details</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm border border-gray-100"><User size={20} /></div>
                  <div><p className="text-sm text-gray-500 font-medium">Client</p><p className="text-lg font-bold text-gray-900 leading-tight">{project.client}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm border border-gray-100"><Calendar size={20} /></div>
                  <div><p className="text-sm text-gray-500 font-medium">Completed</p><p className="text-lg font-bold text-gray-900 leading-tight">{project.date}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm border border-gray-100"><Tag size={20} /></div>
                  <div><p className="text-sm text-gray-500 font-medium">Category</p><p className="text-lg font-bold text-gray-900 leading-tight">{project.category}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}