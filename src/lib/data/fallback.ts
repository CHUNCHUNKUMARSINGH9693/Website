import type { BlogPostSummary, Project, Service, TeamMember } from "@/types";

/** Static fallback data when MongoDB is unavailable (dev / build) */
export const fallbackServices: Service[] = [
  {
    _id: "1",
    title: "Web Development",
    slug: "web-development",
    icon: "💻",
    shortDescription: "Modern, scalable web applications built with cutting-edge technologies.",
    description: "We build modern, scalable, secure, and high-performance web applications using the latest technologies. Our team specializes in creating custom web solutions that drive business growth and deliver exceptional user experiences.",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Responsive Design",
      "SEO Friendly",
      "Fast Performance",
      "Secure Architecture",
      "Scalable Systems",
      "Modern UI/UX",
      "Cross Browser Support",
      "Analytics Integration"
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "PostgreSQL", category: "database" },
      { name: "AWS", category: "cloud" },
      { name: "Vercel", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Understand your business goals, target audience, and requirements." },
      { number: 2, title: "Planning", description: "Create a detailed project roadmap and technical architecture." },
      { number: 3, title: "UI/UX Design", description: "Design beautiful and intuitive user interfaces." },
      { number: 4, title: "Development", description: "Build robust and scalable applications." },
      { number: 5, title: "Testing", description: "Comprehensive QA and performance testing." },
      { number: 6, title: "Deployment", description: "Launch to production with monitoring." },
      { number: 7, title: "Support", description: "Ongoing maintenance and optimization." }
    ],
    faq: [
      {
        question: "How long does a web development project take?",
        answer: "Project duration varies based on complexity. A standard website takes 4-8 weeks, while custom web applications may take 8-16 weeks. We provide detailed timelines during the discovery phase."
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. We typically provide 3 months of free maintenance."
      },
      {
        question: "Which technologies do you use?",
        answer: "We specialize in React, Next.js, Node.js, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tech stack based on your project requirements."
      },
      {
        question: "Can you migrate my existing website?",
        answer: "Absolutely! We have extensive experience migrating websites to modern platforms with improved performance, security, and SEO."
      }
    ],
    order: 1
  },
  {
    _id: "2",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "📱",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
    description: "We create engaging mobile applications that provide exceptional user experiences. From native iOS and Android apps to cross-platform solutions, we deliver high-performance applications that users love.",
    heroImage: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Solutions",
      "Offline Functionality",
      "Push Notifications",
      "Mobile UI/UX",
      "App Store Optimization",
      "Performance Optimization"
    ],
    technologies: [
      { name: "React Native", category: "frontend" },
      { name: "Flutter", category: "frontend" },
      { name: "Swift", category: "frontend" },
      { name: "Kotlin", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Firebase", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "AWS", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Define app vision, target audience, and features." },
      { number: 2, title: "Planning", description: "Create wireframes and project specifications." },
      { number: 3, title: "UI/UX Design", description: "Design beautiful mobile interfaces." },
      { number: 4, title: "Development", description: "Build robust mobile applications." },
      { number: 5, title: "Testing", description: "Comprehensive device and OS testing." },
      { number: 6, title: "Deployment", description: "Submit to App Store and Play Store." },
      { number: 7, title: "Support", description: "Ongoing updates and maintenance." }
    ],
    faq: [
      {
        question: "What platforms do you develop for?",
        answer: "We develop for both iOS and Android using native technologies (Swift, Kotlin) and cross-platform frameworks (React Native, Flutter)."
      },
      {
        question: "How much does mobile app development cost?",
        answer: "Pricing depends on complexity and features. We offer MVPs starting from specific price points and can scale up for enterprise solutions."
      },
      {
        question: "Do you handle app store submission?",
        answer: "Yes, we manage the entire app store submission process for both Apple App Store and Google Play Store."
      },
      {
        question: "What about app maintenance?",
        answer: "We provide comprehensive maintenance including OS updates, bug fixes, feature enhancements, and performance optimization."
      }
    ],
    order: 2
  },
  {
    _id: "3",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "🎨",
    shortDescription: "User-centered design that converts visitors into customers.",
    description: "We create beautiful, intuitive designs that users love. Our UX-first approach ensures every design decision is backed by research and user insights, resulting in products that are both visually stunning and highly functional.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    category: "design",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Accessibility",
      "Animation Design",
      "Brand Guidelines",
      "Design Handoff"
    ],
    technologies: [
      { name: "Figma", category: "frontend" },
      { name: "Adobe XD", category: "frontend" },
      { name: "Sketch", category: "frontend" },
      { name: "Protopie", category: "frontend" },
      { name: "Principle", category: "frontend" },
      { name: "Framer", category: "frontend" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "User research and competitive analysis." },
      { number: 2, title: "Planning", description: "Create user flows and information architecture." },
      { number: 3, title: "Wireframing", description: "Low-fidelity wireframes for validation." },
      { number: 4, title: "Design", description: "High-fidelity visual designs." },
      { number: 5, title: "Prototyping", description: "Interactive prototypes for testing." },
      { number: 6, title: "Testing", description: "User testing and iterations." },
      { number: 7, title: "Handoff", description: "Design specs and assets for developers." }
    ],
    faq: [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UI (User Interface) focuses on how the product looks and how the user interacts with it. UX (User Experience) focuses on the overall feel and usability of the product."
      },
      {
        question: "How long does a design project take?",
        answer: "Design timelines vary. A website redesign typically takes 3-6 weeks, while complex applications may take 8-12 weeks."
      },
      {
        question: "Do you provide design systems?",
        answer: "Yes, we create comprehensive design systems that serve as a single source of truth for your entire product ecosystem."
      },
      {
        question: "Will you test designs with users?",
        answer: "Absolutely! User testing is a crucial part of our process to validate designs and improve usability."
      }
    ],
    order: 3
  },
  {
    _id: "4",
    title: "E-Commerce Development",
    slug: "ecommerce-development",
    icon: "🛒",
    shortDescription: "Scalable e-commerce solutions that drive sales and growth.",
    description: "We build powerful e-commerce platforms that maximize conversions and create seamless shopping experiences. From product catalogs to payment processing, we handle every aspect of your online store.",
    heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Product Management",
      "Shopping Cart",
      "Secure Payments",
      "Inventory Management",
      "Order Management",
      "Customer Reviews",
      "Shipping Integration",
      "Multi-currency Support"
    ],
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Shopify", category: "backend" },
      { name: "WooCommerce", category: "backend" },
      { name: "Stripe", category: "backend" },
      { name: "PayPal", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "AWS", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Understand your products, audience, and sales goals." },
      { number: 2, title: "Planning", description: "Create e-commerce roadmap and architecture." },
      { number: 3, title: "Design", description: "Design conversion-focused store interface." },
      { number: 4, title: "Development", description: "Build storefront and backend systems." },
      { number: 5, title: "Testing", description: "QA and security testing." },
      { number: 6, title: "Launch", description: "Deploy to production with monitoring." },
      { number: 7, title: "Optimization", description: "Ongoing conversion optimization." }
    ],
    faq: [
      {
        question: "Which payment gateways do you support?",
        answer: "We support major payment gateways including Stripe, PayPal, Square, Razorpay, and many others."
      },
      {
        question: "Can you migrate my existing store?",
        answer: "Yes, we can migrate your store from other platforms while maintaining your product data and customer information."
      },
      {
        question: "Do you provide SEO for e-commerce?",
        answer: "Absolutely! We optimize your store for search engines including product pages, technical SEO, and structured data."
      },
      {
        question: "Can you integrate with inventory management?",
        answer: "Yes, we integrate with inventory management systems to keep your stock levels accurate in real-time."
      }
    ],
    order: 4
  },
  {
    _id: "5",
    title: "Software Development",
    slug: "software-development",
    icon: "⚙️",
    shortDescription: "Enterprise software solutions tailored to your business needs.",
    description: "We develop custom software solutions that solve complex business problems. Our team builds scalable, secure, and maintainable software systems that drive efficiency and innovation.",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Custom Solutions",
      "API Development",
      "Database Design",
      "System Integration",
      "Cloud Deployment",
      "Performance Optimization",
      "Security Hardening",
      "Documentation"
    ],
    technologies: [
      { name: "Node.js", category: "backend" },
      { name: "Python", category: "backend" },
      { name: "Java", category: "backend" },
      { name: "Go", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "PostgreSQL", category: "database" },
      { name: "AWS", category: "cloud" },
      { name: "Docker", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Understand business requirements and constraints." },
      { number: 2, title: "Planning", description: "Create technical specifications and architecture." },
      { number: 3, title: "Design", description: "Design database schema and system architecture." },
      { number: 4, title: "Development", description: "Build robust software systems." },
      { number: 5, title: "Testing", description: "Unit, integration, and system testing." },
      { number: 6, title: "Deployment", description: "Deploy to production environment." },
      { number: 7, title: "Maintenance", description: "Ongoing support and optimization." }
    ],
    faq: [
      {
        question: "What methodologies do you follow?",
        answer: "We follow Agile methodologies including Scrum and Kanban for flexible and iterative development."
      },
      {
        question: "Can you work with existing legacy systems?",
        answer: "Yes, we specialize in modernizing and integrating with legacy systems."
      },
      {
        question: "How do you ensure code quality?",
        answer: "We follow best practices including code reviews, automated testing, and continuous integration."
      },
      {
        question: "Do you provide documentation?",
        answer: "Yes, we provide comprehensive technical documentation and user guides for all software."
      }
    ],
    order: 5
  },
  {
    _id: "6",
    title: "CRM Development",
    slug: "crm-development",
    icon: "👥",
    shortDescription: "Custom CRM systems to manage customer relationships effectively.",
    description: "We build powerful CRM solutions that help you manage customer relationships, sales pipelines, and business processes more effectively. Our CRM systems improve customer satisfaction and drive business growth.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Contact Management",
      "Sales Pipeline",
      "Lead Tracking",
      "Email Integration",
      "Reporting & Analytics",
      "Task Management",
      "Workflow Automation",
      "Mobile Access"
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "MongoDB", category: "database" },
      { name: "AWS", category: "cloud" },
      { name: "Firebase", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Map out sales processes and customer journey." },
      { number: 2, title: "Planning", description: "Design CRM workflows and data model." },
      { number: 3, title: "Design", description: "Create intuitive user interface." },
      { number: 4, title: "Development", description: "Build CRM system with integrations." },
      { number: 5, title: "Testing", description: "Comprehensive testing and validation." },
      { number: 6, title: "Launch", description: "Deploy and migrate data." },
      { number: 7, title: "Training", description: "User training and ongoing support." }
    ],
    pricing: [
      {
        name: "Starter",
        description: "Small Teams",
        features: ["Up to 10 Users", "Basic Features", "Email Support"],
        popular: false
      },
      {
        name: "Business",
        description: "Growing Teams",
        features: ["Up to 50 Users", "Advanced Features", "API Access", "Priority Support"],
        popular: true
      },
      {
        name: "Enterprise",
        description: "Enterprise",
        features: ["Unlimited Users", "Custom Features", "Dedicated Support", "SLA"],
        popular: false
      }
    ],
    faq: [
      {
        question: "Can you integrate with Salesforce?",
        answer: "Yes, we can integrate with Salesforce and other major CRM platforms."
      },
      {
        question: "How do you handle data migration?",
        answer: "We provide secure data migration from your existing systems with zero data loss."
      },
      {
        question: "Do you provide training?",
        answer: "Yes, we provide comprehensive training and onboarding for your team."
      },
      {
        question: "Can we customize workflows?",
        answer: "Absolutely! We build custom workflows tailored to your business processes."
      }
    ],
    order: 6
  },
  {
    _id: "7",
    title: "ERP Development",
    slug: "erp-development",
    icon: "📊",
    shortDescription: "Enterprise Resource Planning systems for complete business management.",
    description: "We develop comprehensive ERP solutions that integrate all your business processes. Our ERP systems help you streamline operations, improve efficiency, and make data-driven decisions across your entire organization.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Financial Management",
      "Inventory Management",
      "Supply Chain",
      "Production Planning",
      "HR Management",
      "Sales Management",
      "Reporting Tools",
      "Multi-entity Support"
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "MongoDB", category: "database" },
      { name: "AWS", category: "cloud" },
      { name: "Docker", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Map business processes and requirements." },
      { number: 2, title: "Planning", description: "Design ERP architecture and integration." },
      { number: 3, title: "Design", description: "Create system workflows and interfaces." },
      { number: 4, title: "Development", description: "Build ERP modules and integrations." },
      { number: 5, title: "Testing", description: "Extensive testing and UAT." },
      { number: 6, title: "Launch", description: "Phased rollout and data migration." },
      { number: 7, title: "Optimization", description: "Performance tuning and optimization." }
    ],
    faq: [
      {
        question: "Can we use an existing ERP as a base?",
        answer: "Yes, we can customize existing ERPs like SAP, NetSuite, or Odoo."
      },
      {
        question: "How long does ERP implementation take?",
        answer: "Implementation timeline varies from 6 months to 2 years depending on complexity and organizational size."
      },
      {
        question: "Do you handle data migration?",
        answer: "Yes, we manage complete data migration from legacy systems with validation and verification."
      },
      {
        question: "What about user training?",
        answer: "We provide comprehensive training programs including documentation, workshops, and ongoing support."
      }
    ],
    order: 7
  },
  {
    _id: "8",
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: "📢",
    shortDescription: "Comprehensive digital marketing strategies to grow your business.",
    description: "We develop and execute data-driven digital marketing strategies that increase brand visibility, drive traffic, and generate qualified leads. Our integrated approach combines multiple channels for maximum impact.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=1200&h=600&fit=crop",
    category: "marketing",
    features: [
      "Strategy Development",
      "Content Marketing",
      "Social Media",
      "Email Marketing",
      "Marketing Automation",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Brand Building"
    ],
    technologies: [
      { name: "Google Analytics", category: "cloud" },
      { name: "HubSpot", category: "cloud" },
      { name: "Mailchimp", category: "cloud" },
      { name: "Meta Ads", category: "cloud" },
      { name: "Google Ads", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Discovery", description: "Analyze market, competitors, and audience." },
      { number: 2, title: "Planning", description: "Create marketing strategy and goals." },
      { number: 3, title: "Content", description: "Develop content calendar and materials." },
      { number: 4, title: "Execution", description: "Launch campaigns across channels." },
      { number: 5, title: "Monitoring", description: "Track performance and metrics." },
      { number: 6, title: "Optimization", description: "A/B test and optimize campaigns." },
      { number: 7, title: "Reporting", description: "Provide detailed analytics and insights." }
    ],
    faq: [
      {
        question: "What results can we expect?",
        answer: "Results depend on industry and current position. Typically, we see 20-50% improvement in key metrics within 3-6 months."
      },
      {
        question: "Do you create content?",
        answer: "Yes, we create blog posts, videos, social media content, and other marketing materials."
      },
      {
        question: "How do you measure success?",
        answer: "We track KPIs like traffic, leads, conversions, ROI, and other metrics aligned with your business goals."
      },
      {
        question: "Can you manage our social media?",
        answer: "Yes, we provide full social media management including content creation, posting, and community engagement."
      }
    ],
    order: 8
  },
  {
    _id: "9",
    title: "SEO Services",
    slug: "seo-services",
    icon: "🔍",
    shortDescription: "Strategic SEO to boost visibility and organic traffic.",
    description: "We implement comprehensive SEO strategies that improve your search engine rankings and drive organic traffic. Our data-driven approach focuses on sustainable growth and long-term visibility.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    category: "marketing",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Content Optimization",
      "Local SEO",
      "SEO Audits",
      "Rank Tracking"
    ],
    technologies: [
      { name: "SEMrush", category: "cloud" },
      { name: "Ahrefs", category: "cloud" },
      { name: "Moz", category: "cloud" },
      { name: "Google Search Console", category: "cloud" },
      { name: "Google Analytics", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Audit", description: "Comprehensive SEO audit of your site." },
      { number: 2, title: "Research", description: "Keyword research and competitive analysis." },
      { number: 3, title: "Strategy", description: "Develop targeted SEO strategy." },
      { number: 4, title: "Implementation", description: "Execute on-page and technical optimizations." },
      { number: 5, title: "Content", description: "Create SEO-optimized content." },
      { number: 6, title: "Link Building", description: "Acquire quality backlinks." },
      { number: 7, title: "Monitoring", description: "Track rankings and performance." }
    ],
    faq: [
      {
        question: "How long before we see SEO results?",
        answer: "SEO is a long-term strategy. Typically, you'll see initial results in 3-4 months and significant improvements in 6-12 months."
      },
      {
        question: "Do you guarantee rankings?",
        answer: "No legitimate SEO company guarantees rankings. We guarantee to follow white-hat SEO practices and deliver results."
      },
      {
        question: "What's included in an SEO audit?",
        answer: "We analyze technical SEO, on-page factors, backlink profile, competitor analysis, and provide actionable recommendations."
      },
      {
        question: "Can you improve rankings for competitive keywords?",
        answer: "Yes, we can help with competitive keywords, but they require more resources and take longer to rank."
      }
    ],
    order: 9
  },
  {
    _id: "10",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    icon: "☁️",
    shortDescription: "Scalable cloud infrastructure and migration services.",
    description: "We provide comprehensive cloud solutions including infrastructure setup, migration, and management. Our cloud expertise helps you leverage the benefits of cloud computing for scalability, reliability, and cost-efficiency.",
    heroImage: "https://images.unsplash.com/photo-1553531088-189a40c2dba5?w=1200&h=600&fit=crop",
    category: "development",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "Auto-scaling",
      "Load Balancing",
      "CDN Setup",
      "Backup & Recovery",
      "Security Hardening",
      "Cost Optimization"
    ],
    technologies: [
      { name: "AWS", category: "cloud" },
      { name: "Google Cloud", category: "cloud" },
      { name: "Azure", category: "cloud" },
      { name: "Docker", category: "cloud" },
      { name: "Kubernetes", category: "cloud" }
    ],
    process: [
      { number: 1, title: "Assessment", description: "Evaluate current infrastructure." },
      { number: 2, title: "Planning", description: "Design cloud architecture." },
      { number: 3, title: "Preparation", description: "Prepare systems for migration." },
      { number: 4, title: "Migration", description: "Migrate to cloud platform." },
      { number: 5, title: "Testing", description: "Validate cloud environment." },
      { number: 6, title: "Optimization", description: "Optimize for performance and cost." },
      { number: 7, title: "Management", description: "Ongoing cloud management." }
    ],
    faq: [
      {
        question: "Which cloud platform should we use?",
        answer: "We recommend AWS for most projects due to its mature ecosystem, but Google Cloud and Azure are also excellent choices depending on your needs."
      },
      {
        question: "How much will cloud cost us?",
        answer: "Cloud costs depend on resource usage. We help optimize infrastructure to minimize costs while maintaining performance."
      },
      {
        question: "Can you migrate our existing infrastructure?",
        answer: "Yes, we manage zero-downtime migrations from on-premises to cloud with data integrity verification."
      },
      {
        question: "What about cloud security?",
        answer: "We implement comprehensive security including encryption, firewalls, access controls, and regular security audits."
      }
    ],
    order: 10
  }
];

export const fallbackProjects: Project[] = [
  {
    _id: "1",
    title: "Commerce Platform",
    slug: "commerce-platform",
    description: "Full-stack e-commerce solution with real-time inventory.",
    category: "ecommerce",
    technologies: ["Next.js", "MongoDB", "Stripe"],
    featured: true,
    client: "Retail Co",
  },
  {
    _id: "2",
    title: "Brand Refresh",
    slug: "brand-refresh",
    description: "Complete visual identity and marketing site redesign.",
    category: "branding",
    technologies: ["Figma", "Next.js"],
    featured: true,
    client: "Startup Inc",
  },
];

export const fallbackTeam: TeamMember[] = [
  {
    _id: "1",
    name: "Rakesh Kumar",
    role: "Marketing Lead | Graphic Designer",
    bio: "Brand storytelling and performance marketing.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@blagweb.com",
    order: 1,
  },
  {
    _id: "2",
    name: "Ravi Kumar",
    role: "Web Developer",
    bio: "Full-stack development with modern web technologies.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@blagweb.com",
    order: 2,
  },
  {
    _id: "3",
    name: "Priya Sharma",
    role: "UI/UX Designer",
    bio: "User-centered design for web and mobile products.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@blagweb.com",
    order: 3,
  },
  {
    _id: "4",
    name: "Amit Singh",
    role: "DevOps Engineer",
    bio: "Cloud infrastructure and reliable deployments.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@blagweb.com",
    order: 4,
  },
];

export const fallbackBlogPosts: BlogPostSummary[] = [
  {
    _id: "1",
    title: "Why Next.js 15 for Your Next Project",
    slug: "why-nextjs-15",
    excerpt: "Explore the App Router, Server Components, and performance wins.",
    author: "Blagweb Team",
    publishedAt: new Date().toISOString(),
    tags: ["nextjs", "web"],
  },
  {
    _id: "2",
    title: "Design Systems That Scale",
    slug: "design-systems-that-scale",
    excerpt: "How to build reusable UI patterns your whole team can use.",
    author: "Blagweb Team",
    publishedAt: new Date().toISOString(),
    tags: ["design", "ui"],
  },
];
