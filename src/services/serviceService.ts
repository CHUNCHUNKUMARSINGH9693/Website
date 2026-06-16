import { connectDB } from '@/lib/db';
import { ServiceModel, IService } from '@/models/Service';

export const getServices = async (): Promise<IService[]> => {
  try {
    await connectDB();
    const services = await ServiceModel.find({}).lean();
    return JSON.parse(JSON.stringify(services));
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
};

export const getServiceBySlug = async (slug: string): Promise<IService | null> => {
  try {
    await connectDB();
    const service = await ServiceModel.findOne({ slug }).lean();
    if (service) return JSON.parse(JSON.stringify(service));

    // Fallback to sample data with extended details for demonstration
    const sample = SAMPLE_SERVICES.find((s) => s.slug === slug);
    if (sample) {
      return {
        ...sample,
        description: `We provide professional ${sample.title} solutions designed to scale your business. Our approach combines industry best practices with the latest technologies to deliver high-quality, high-performance results.`,
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        features: ["Scalable Architecture", "Responsive Design", "Security First", "Performance Optimized"],
        process: [
          { step: 1, title: "Discovery", description: "Understanding your requirements." },
          { step: 2, title: "Development", description: "Building with precision." },
          { step: 3, title: "Deployment", description: "Launching your solution." },
        ],
        faq: [
          { question: "How long does it take?", answer: "Typically 4-8 weeks depending on complexity." },
          { question: "Do you offer support?", answer: "Yes, we provide 24/7 technical support." },
        ]
      } as any;
    }
    return null;
  } catch (error) {
    console.error("Database error:", error);
    return null;
  }
};

export const SAMPLE_SERVICES = [
  { title: "Web Development", slug: "web-development", icon: "Code", shortDescription: "Modern responsive websites built with latest tech.", technologies: ["React", "Next.js", "TypeScript"] },
  { title: "Mobile App Development", slug: "mobile-app-development", icon: "Smartphone", shortDescription: "High-performance apps for iOS and Android.", technologies: ["React Native", "Firebase"] },
  { title: "UI/UX Design", slug: "ui-ux-design", icon: "Palette", shortDescription: "Beautiful user experiences and interfaces.", technologies: ["Figma", "Framer"] },
  { title: "E-Commerce Development", slug: "ecommerce-development", icon: "ShoppingCart", shortDescription: "Online stores that increase conversions.", technologies: ["Shopify", "Stripe"] },
  { title: "Software Development", slug: "software-development", icon: "Cpu", shortDescription: "Custom software solutions for complex problems.", technologies: ["Node.js", "Python"] },
  { title: "CRM Development", slug: "crm-development", icon: "Users", shortDescription: "Manage customer relationships efficiently.", technologies: ["MongoDB", "PostgreSQL"] },
  { title: "ERP Development", slug: "erp-development", icon: "Briefcase", shortDescription: "Integrate core business processes into one system.", technologies: ["AWS", "Next.js"] },
  { title: "Digital Marketing", slug: "digital-marketing", icon: "BarChart", shortDescription: "Data-driven growth strategies.", technologies: ["Google Ads", "Meta Ads"] },
  { title: "SEO Services", slug: "seo-services", icon: "Search", shortDescription: "Rank higher and reach more customers.", technologies: ["Ahrefs", "Semrush"] },
  { title: "Cloud Solutions", slug: "cloud-solutions", icon: "Cloud", shortDescription: "Scalable cloud infrastructure.", technologies: ["AWS", "Vercel"] },
];