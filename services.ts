import { LucideIcon } from 'lucide-react';

// Define interfaces for better type safety and structure
export interface TechnologyGroup {
  title: string;
  items: string[];
  icon: string; // Lucide icon name
}

export interface Feature {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedProject {
  image: string;
  title: string;
  category: string;
  slug: string;
}

export interface Service {
  title: string;
  slug: string;
  icon: string; // Lucide icon name for the mega menu
  shortDescription: string; // For mega menu and hero section
  description: string; // Detailed overview for the service page
  heroImage: string;
  overview: string; // A more concise overview for a specific section
  technologies: TechnologyGroup[];
  features: Feature[];
  process: ProcessStep[];
  faq: FAQItem[];
  relatedProjects: RelatedProject[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: "Globe",
    shortDescription: "Business & startup websites",
    description: "We build high-performance, scalable, and secure web applications tailored to your business needs. From dynamic single-page applications to robust e-commerce platforms, our solutions are designed for exceptional user experience and future growth.",
    heroImage: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80&w=1932",
    overview: "Our web development services focus on creating engaging and functional online experiences. We utilize modern frameworks and best practices to deliver solutions that are not only visually appealing but also performant and secure.",
    technologies: [
      { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"], icon: "Layout" },
      { title: "Backend", items: ["Node.js", "Express.js", "GraphQL"], icon: "Code" },
      { title: "Database", items: ["MongoDB", "PostgreSQL", "Redis"], icon: "Database" },
      { title: "Deployment", items: ["AWS", "Vercel", "Netlify"], icon: "Cloud" },
    ],
    features: [
      { title: "Responsive Design", description: "Seamless experience across all devices.", icon: "Smartphone" },
      { title: "SEO Optimized", description: "Built for search engine visibility.", icon: "Search" },
      { title: "Fast Performance", description: "Optimized for speed and efficiency.", icon: "Zap" },
      { title: "Secure Architecture", description: "Robust security measures.", icon: "Shield" },
      { title: "Scalable Solutions", description: "Designed to grow with your business.", icon: "BarChart" },
      { title: "Modern UI/UX", description: "Intuitive and engaging user interfaces.", icon: "Palette" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understand your vision." },
      { step: 2, title: "Planning", description: "Strategize and define scope." },
      { step: 3, title: "Design", description: "Create wireframes and mockups." },
      { step: 4, title: "Development", description: "Build the application." },
      { step: 5, title: "Testing", description: "Ensure quality and performance." },
      { step: 6, title: "Deployment", description: "Launch and go live." },
      { step: 7, title: "Support", description: "Ongoing maintenance and updates." },
    ],
    faq: [
      { question: "What technologies do you use?", answer: "We primarily use Next.js, React, Node.js, and Tailwind CSS for modern web development." },
      { question: "How long does a typical project take?", answer: "Project timelines vary based on complexity, but a typical web application can take 8-16 weeks." },
      { question: "Do you provide post-launch support?", answer: "Yes, we offer various support and maintenance packages to ensure your application runs smoothly." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", title: "E-commerce Platform", category: "Web Development", slug: "ecommerce-platform" },
      { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400", title: "SaaS Dashboard", category: "Web Application", slug: "saas-dashboard" },
      { image: "https://images.unsplash.com/photo-1522199755839-d2ba679973c4?auto=format&fit=crop&q=80&w=400", title: "Portfolio Website", category: "Web Design", slug: "portfolio-website" },
      { image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400", title: "Blog Platform", category: "Content Management", slug: "blog-platform" },
    ]
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "Smartphone",
    shortDescription: "Android & iOS apps",
    description: "We craft intuitive and high-performing mobile applications for both Android and iOS platforms. Our expertise spans native development and cross-platform solutions, ensuring a seamless user experience and robust functionality.",
    heroImage: "https://images.unsplash.com/photo-1551721434-8b934724a52e?auto=format&fit=crop&q=80&w=1932",
    overview: "Our mobile app development services cover the full lifecycle, from concept to deployment. We focus on creating engaging, user-friendly apps that meet your business objectives and delight your users.",
    technologies: [
      { title: "Frontend", items: ["React Native", "Swift/Kotlin", "Flutter"], icon: "Mobile" },
      { title: "Backend", items: ["Firebase", "AWS Amplify", "Node.js"], icon: "Code" },
      { title: "Database", items: ["Firestore", "Realm", "PostgreSQL"], icon: "Database" },
      { title: "Deployment", items: ["App Store", "Google Play", "Fastlane"], icon: "Cloud" },
    ],
    features: [
      { title: "Native Performance", description: "Optimized for speed and responsiveness.", icon: "Zap" },
      { title: "Cross-Platform", description: "Reach wider audience with a single codebase.", icon: "Layers" },
      { title: "Intuitive UI/UX", description: "Engaging and easy-to-use interfaces.", icon: "Palette" },
      { title: "Secure Data", description: "Protecting user information.", icon: "Shield" },
      { title: "Offline Capabilities", description: "Functionality without internet.", icon: "WifiOff" },
      { title: "Push Notifications", description: "Keep users engaged.", icon: "Bell" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Define app concept and goals." },
      { step: 2, title: "Planning", description: "Feature roadmap and tech stack." },
      { step: 3, title: "Design", description: "Wireframes, mockups, and prototypes." },
      { step: 4, title: "Development", description: "Coding and integration." },
      { step: 5, title: "Testing", description: "QA, bug fixing, and user acceptance." },
      { step: 6, title: "Deployment", description: "App store submission and launch." },
      { step: 7, title: "Support", description: "Updates, maintenance, and analytics." },
    ],
    faq: [
      { question: "Do you develop for both iOS and Android?", answer: "Yes, we develop for both platforms, either natively or using cross-platform frameworks like React Native or Flutter." },
      { question: "Can you integrate with existing systems?", answer: "Absolutely. We specialize in integrating mobile apps with various backend systems and APIs." },
      { question: "What is the typical development time for a mobile app?", answer: "Simple apps can take 3-6 months, while more complex applications may require 6-12 months or more." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1529626465618-a8789269c426?auto=format&fit=crop&q=80&w=400", title: "Fitness Tracker App", category: "Health & Fitness", slug: "fitness-app" },
      { image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400", title: "Food Delivery App", category: "E-commerce", slug: "food-delivery-app" },
      { image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?auto=format&fit=crop&q=80&w=400", title: "Social Networking App", category: "Social Media", slug: "social-app" },
      { image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=400", title: "Event Management App", category: "Event Planning", slug: "event-app" },
    ]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: "Palette",
    shortDescription: "Modern user experiences",
    description: "Our UI/UX design services focus on creating intuitive, engaging, and aesthetically pleasing digital experiences. We combine user research, wireframing, prototyping, and visual design to deliver interfaces that users love and that drive business results.",
    heroImage: "https://images.unsplash.com/photo-1558655146-3ffc29a38fdd?auto=format&fit=crop&q=80&w=1932",
    overview: "We believe great design is at the heart of every successful product. Our UI/UX team ensures your application is not just functional, but also delightful and easy to use, leading to higher engagement and conversion rates.",
    technologies: [
      { title: "Tools", items: ["Figma", "Sketch", "Adobe XD"], icon: "Tool" },
      { title: "Methodologies", items: ["User Research", "Prototyping", "Usability Testing"], icon: "Lightbulb" },
      { title: "Deliverables", items: ["Wireframes", "Mockups", "Design Systems"], icon: "Layers" },
    ],
    features: [
      { title: "User Research", description: "Deep understanding of user needs.", icon: "Users" },
      { title: "Information Architecture", description: "Logical content organization.", icon: "Sitemap" },
      { title: "Wireframing & Prototyping", description: "Early stage design validation.", icon: "PenTool" },
      { title: "Visual Design", description: "Stunning and consistent aesthetics.", icon: "Paintbrush" },
      { title: "Usability Testing", description: "Ensuring ease of use.", icon: "TestTube" },
      { title: "Design Systems", description: "Scalable and consistent design.", icon: "Grid" },
    ],
    process: [
      { step: 1, title: "Research", description: "User interviews and competitive analysis." },
      { step: 2, title: "Ideation", description: "Brainstorming and concept development." },
      { step: 3, title: "Wireframing", description: "Structural layout creation." },
      { step: 4, title: "Prototyping", description: "Interactive mockups." },
      { step: 5, title: "Testing", description: "User feedback and iterations." },
      { step: 6, title: "Handoff", description: "Developer-ready assets." },
      { step: 7, title: "Iteration", description: "Continuous improvement." },
    ],
    faq: [
      { question: "What is the difference between UI and UX?", answer: "UI (User Interface) focuses on the visual elements, while UX (User Experience) focuses on the overall feeling and ease of use." },
      { question: "How do you ensure good UX?", answer: "Through extensive user research, usability testing, and iterative design processes." },
      { question: "Can you redesign an existing product?", answer: "Yes, we offer redesign services to modernize and improve the user experience of your current applications." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1507238691740-b52d2ce76557?auto=format&fit=crop&q=80&w=400", title: "Dashboard Redesign", category: "UI/UX", slug: "dashboard-redesign" },
      { image: "https://images.unsplash.com/photo-1522199755839-d2ba679973c4?auto=format&fit=crop&q=80&w=400", title: "Mobile App UI", category: "Mobile Design", slug: "mobile-app-ui" },
      { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400", title: "Website UX Audit", category: "UX Research", slug: "website-ux-audit" },
      { image: "https://images.unsplash.com/photo-1504384308090-c894fdcd0c98?auto=format&fit=crop&q=80&w=400", title: "Design System Creation", category: "Design Systems", slug: "design-system-creation" },
    ]
  },
  {
    title: "E-Commerce Development",
    slug: "ecommerce-development",
    icon: "ShoppingCart",
    shortDescription: "Online stores & marketplaces",
    description: "We build powerful and secure e-commerce platforms that drive sales and enhance customer experience. From custom online stores to multi-vendor marketplaces, our solutions are designed for scalability, performance, and seamless integration.",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b7ef10?auto=format&fit=crop&q=80&w=1932",
    overview: "Our e-commerce development services help businesses establish a strong online presence and maximize their sales potential. We focus on creating user-friendly shopping experiences with robust backend management.",
    technologies: [
      { title: "Platforms", items: ["Shopify", "WooCommerce", "Magento"], icon: "Store" },
      { title: "Custom", items: ["Next.js", "Node.js", "Stripe API"], icon: "Code" },
      { title: "Integrations", items: ["Payment Gateways", "Shipping APIs", "CRM"], icon: "Plug" },
    ],
    features: [
      { title: "Secure Payment Gateways", description: "Safe and reliable transactions.", icon: "CreditCard" },
      { title: "Product Management", description: "Easy inventory and product listing.", icon: "Package" },
      { title: "Order Tracking", description: "Real-time order status for customers.", icon: "Truck" },
      { title: "Customer Accounts", description: "Personalized shopping experience.", icon: "User" },
      { title: "Analytics & Reporting", description: "Insights into sales and performance.", icon: "BarChart" },
      { title: "Scalable Architecture", description: "Handles growing traffic and products.", icon: "Scale" },
    ],
    process: [
      { step: 1, title: "Strategy", description: "Business goals and market analysis." },
      { step: 2, title: "Platform Selection", description: "Choosing the right e-commerce solution." },
      { step: 3, title: "Design", description: "Storefront UI/UX and branding." },
      { step: 4, title: "Development", description: "Building features and integrations." },
      { step: 5, title: "Testing", description: "Functionality, security, and performance." },
      { step: 6, title: "Launch", description: "Go-live and marketing setup." },
      { step: 7, title: "Optimization", description: "Continuous improvements and updates." },
    ],
    faq: [
      { question: "Which e-commerce platforms do you work with?", answer: "We work with popular platforms like Shopify, WooCommerce, and Magento, as well as building custom solutions." },
      { question: "Can you integrate third-party tools?", answer: "Yes, we can integrate various third-party tools for payments, shipping, marketing, and analytics." },
      { question: "Is my e-commerce store secure?", answer: "Security is paramount. We implement SSL, secure payment gateways, and follow best practices to protect your store and customer data." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1528716321680-815a8cdb8a2d?auto=format&fit=crop&q=80&w=400", title: "Fashion Boutique", category: "E-commerce", slug: "fashion-boutique" },
      { image: "https://images.unsplash.com/photo-1561053720-76cd73ff22f3?auto=format&fit=crop&q=80&w=400", title: "Online Grocery", category: "Marketplace", slug: "online-grocery" },
      { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400", title: "Electronics Store", category: "E-commerce", slug: "electronics-store" },
      { image: "https://images.unsplash.com/photo-1505740420928-5e560c06f2e0?auto=format&fit=crop&q=80&w=400", title: "Handmade Crafts", category: "Artisan Shop", slug: "handmade-crafts" },
    ]
  },
  {
    title: "Software Development",
    slug: "software-development",
    icon: "Code2",
    shortDescription: "Custom business systems",
    description: "We develop bespoke software solutions that streamline operations, automate processes, and solve unique business challenges. Our team specializes in creating robust, scalable, and user-friendly applications tailored to your specific requirements.",
    heroImage: "https://images.unsplash.com/photo-1581092614617-a0686e07669d?auto=format&fit=crop&q=80&w=1932",
    overview: "From concept to deployment, we provide end-to-end custom software development services. We focus on delivering high-quality, efficient, and maintainable software that gives your business a competitive edge.",
    technologies: [
      { title: "Languages", items: ["Python", "Java", "C#", "JavaScript"], icon: "Code" },
      { title: "Frameworks", items: ["Django", "Spring Boot", ".NET", "Node.js"], icon: "Layers" },
      { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"], icon: "Cloud" },
    ],
    features: [
      { title: "Custom Functionality", description: "Tailored to your exact business needs.", icon: "Settings" },
      { title: "Scalability", description: "Grows with your business demands.", icon: "Scale" },
      { title: "Integration", description: "Seamlessly connects with existing systems.", icon: "Plug" },
      { title: "Security", description: "Built with enterprise-grade security.", icon: "Shield" },
      { title: "Automation", description: "Automate repetitive tasks.", icon: "Robot" },
      { title: "Data Analytics", description: "Gain insights from your data.", icon: "BarChart" },
    ],
    process: [
      { step: 1, title: "Requirements", description: "Detailed analysis of your needs." },
      { step: 2, title: "Architecture", description: "Designing the system structure." },
      { step: 3, title: "Development", description: "Coding and module creation." },
      { step: 4, title: "Testing", description: "Comprehensive quality assurance." },
      { step: 5, title: "Deployment", description: "Installation and configuration." },
      { step: 6, title: "Training", description: "User training and documentation." },
      { step: 7, title: "Maintenance", description: "Ongoing support and updates." },
    ],
    faq: [
      { question: "What kind of custom software do you develop?", answer: "We develop a wide range of custom software, including internal tools, business process automation, and industry-specific applications." },
      { question: "How do you ensure software quality?", answer: "We follow agile methodologies, conduct rigorous testing, and involve clients throughout the development process." },
      { question: "Can you migrate legacy systems?", answer: "Yes, we offer services to modernize and migrate legacy software to newer, more efficient technologies." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400", title: "Inventory Management", category: "Business Software", slug: "inventory-management" },
      { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400", title: "Project Management Tool", category: "SaaS", slug: "project-management" },
      { image: "https://images.unsplash.com/photo-1521737711867-ee1ab9279f17?auto=format&fit=crop&q=80&w=400", title: "HR Portal", category: "Enterprise Software", slug: "hr-portal" },
      { image: "https://images.unsplash.com/photo-1504384308090-c894fdcd0c98?auto=format&fit=crop&q=80&w=400", title: "Custom CRM", category: "CRM Development", slug: "custom-crm" },
    ]
  },
  {
    title: "CRM Development",
    slug: "crm-development",
    icon: "Users",
    shortDescription: "Customer management systems",
    description: "We design and develop custom Customer Relationship Management (CRM) systems that empower your sales, marketing, and customer service teams. Our CRMs are built to centralize customer data, automate workflows, and enhance customer interactions.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca8849d1?auto=format&fit=crop&q=80&w=1932",
    overview: "A tailored CRM solution can transform how you manage customer relationships. We create intuitive and powerful CRMs that integrate seamlessly with your existing tools, providing a 360-degree view of your customers.",
    technologies: [
      { title: "Backend", items: ["Node.js", "Python", "PHP"], icon: "Code" },
      { title: "Frontend", items: ["React", "Angular", "Vue.js"], icon: "Layout" },
      { title: "Database", items: ["PostgreSQL", "MongoDB", "MySQL"], icon: "Database" },
    ],
    features: [
      { title: "Lead Management", description: "Track and nurture leads effectively.", icon: "UserPlus" },
      { title: "Sales Automation", description: "Automate sales processes and tasks.", icon: "DollarSign" },
      { title: "Customer Support", description: "Streamline support interactions.", icon: "Headphones" },
      { title: "Reporting & Analytics", description: "Gain insights into customer data.", icon: "BarChart" },
      { title: "Integration", description: "Connect with marketing and ERP systems.", icon: "Plug" },
      { title: "Customizable Workflows", description: "Adapt to your unique business processes.", icon: "Workflow" },
    ],
    process: [
      { step: 1, title: "Analysis", description: "Identify CRM needs and objectives." },
      { step: 2, title: "Design", description: "Map out user flows and system architecture." },
      { step: 3, title: "Development", description: "Build core CRM modules." },
      { step: 4, title: "Integration", description: "Connect with other business tools." },
      { step: 5, title: "Testing", description: "Ensure functionality and data integrity." },
      { step: 6, title: "Deployment", description: "Rollout and user training." },
      { step: 7, title: "Optimization", description: "Post-launch support and enhancements." },
    ],
    faq: [
      { question: "Why choose a custom CRM over off-the-shelf solutions?", answer: "Custom CRMs are built precisely for your unique workflows, avoiding unnecessary features and providing a perfect fit for your business." },
      { question: "Can you migrate data from our old CRM?", answer: "Yes, we provide data migration services to ensure a smooth transition to your new custom CRM." },
      { question: "How long does it take to develop a custom CRM?", answer: "Development time varies, but typically ranges from 4 to 9 months depending on complexity and features." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400", title: "Sales Automation CRM", category: "CRM", slug: "sales-crm" },
      { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400", title: "Customer Support Portal", category: "CRM", slug: "support-portal" },
      { image: "https://images.unsplash.com/photo-1521737711867-ee1ab9279f17?auto=format&fit=crop&q=80&w=400", title: "Marketing CRM", category: "CRM", slug: "marketing-crm" },
      { image: "https://images.unsplash.com/photo-1504384308090-c894fdcd0c98?auto=format&fit=crop&q=80&w=400", title: "Real Estate CRM", category: "Industry Specific", slug: "real-estate-crm" },
    ]
  },
  {
    title: "ERP Development",
    slug: "erp-development",
    icon: "BarChart3",
    shortDescription: "Enterprise resource planning",
    description: "We develop comprehensive Enterprise Resource Planning (ERP) systems that integrate all facets of your business operations. Our custom ERP solutions streamline processes, improve data visibility, and enhance decision-making across departments like finance, HR, manufacturing, and supply chain.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=1932",
    overview: "A custom ERP system can be the backbone of your enterprise, unifying disparate systems and data. We build scalable and flexible ERPs that adapt to your evolving business needs, driving efficiency and growth.",
    technologies: [
      { title: "Backend", items: ["Java", "Python", "Node.js"], icon: "Code" },
      { title: "Database", items: ["Oracle", "SQL Server", "PostgreSQL"], icon: "Database" },
      { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"], icon: "Cloud" },
    ],
    features: [
      { title: "Financial Management", description: "Automate accounting and financial reporting.", icon: "DollarSign" },
      { title: "Supply Chain Management", description: "Optimize logistics and inventory.", icon: "Truck" },
      { title: "Human Resources", description: "Manage payroll, recruitment, and employee data.", icon: "Users" },
      { title: "Manufacturing", description: "Streamline production and quality control.", icon: "Factory" },
      { title: "Business Intelligence", description: "Advanced analytics for strategic decisions.", icon: "BarChart" },
      { title: "Custom Modules", description: "Tailored functionalities for unique needs.", icon: "Puzzle" },
    ],
    process: [
      { step: 1, title: "Discovery", description: "In-depth analysis of business processes." },
      { step: 2, title: "Blueprint", description: "Detailed system design and module planning." },
      { step: 3, title: "Development", description: "Building and configuring ERP modules." },
      { step: 4, title: "Integration", description: "Connecting all business functions." },
      { step: 5, title: "Testing", description: "Comprehensive system and user acceptance testing." },
      { step: 6, title: "Implementation", description: "Deployment, data migration, and training." },
      { step: 7, title: "Support", description: "Ongoing maintenance and system upgrades." },
    ],
    faq: [
      { question: "What are the benefits of a custom ERP?", answer: "Custom ERPs offer precise alignment with business processes, better scalability, and competitive advantage over generic solutions." },
      { question: "How long does an ERP implementation take?", answer: "ERP projects are complex, typically ranging from 6 months to over a year, depending on the scope and number of modules." },
      { question: "Can you integrate our existing software with the new ERP?", answer: "Yes, integration with existing systems like CRM, SCM, or legacy applications is a key part of our ERP development process." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400", title: "Manufacturing ERP", category: "ERP", slug: "manufacturing-erp" },
      { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400", title: "Financial Management System", category: "ERP", slug: "financial-system" },
      { image: "https://images.unsplash.com/photo-1521737711867-ee1ab9279f17?auto=format&fit=crop&q=80&w=400", title: "Supply Chain Optimization", category: "ERP", slug: "supply-chain-optimization" },
      { image: "https://images.unsplash.com/photo-1504384308090-c894fdcd0c98?auto=format&fit=crop&q=80&w=400", title: "HR & Payroll System", category: "ERP", slug: "hr-payroll-system" },
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: "Megaphone",
    shortDescription: "Online marketing solutions",
    description: "Our digital marketing services are designed to boost your online presence, drive targeted traffic, and convert leads into loyal customers. We offer a full spectrum of strategies including SEO, SEM, social media marketing, content marketing, and email campaigns.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=1932",
    overview: "In today's digital landscape, a strong online marketing strategy is crucial. We help you connect with your audience, build brand awareness, and achieve measurable growth through data-driven campaigns.",
    technologies: [
      { title: "Tools", items: ["Google Analytics", "SEMrush", "Mailchimp"], icon: "Tool" },
      { title: "Platforms", items: ["Google Ads", "Facebook Ads", "LinkedIn Ads"], icon: "Globe" },
      { title: "Strategies", items: ["SEO", "SEM", "Content Marketing"], icon: "Lightbulb" },
    ],
    features: [
      { title: "SEO Strategy", description: "Improve organic search rankings.", icon: "Search" },
      { title: "Paid Advertising (PPC)", description: "Targeted ad campaigns for quick results.", icon: "DollarSign" },
      { title: "Social Media Marketing", description: "Engage and grow your audience.", icon: "Share2" },
      { title: "Content Marketing", description: "Create valuable content to attract customers.", icon: "Book" },
      { title: "Email Marketing", description: "Nurture leads and retain customers.", icon: "Mail" },
      { title: "Analytics & Reporting", description: "Track performance and ROI.", icon: "BarChart" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Analyze current marketing efforts." },
      { step: 2, title: "Strategy", description: "Develop a tailored digital marketing plan." },
      { step: 3, title: "Setup", description: "Configure tools and platforms." },
      { step: 4, title: "Execution", description: "Launch campaigns and create content." },
      { step: 5, title: "Monitoring", description: "Track performance and make adjustments." },
      { step: 6, title: "Reporting", description: "Provide detailed performance reports." },
      { step: 7, title: "Optimization", description: "Continuous improvement for better ROI." },
    ],
    faq: [
      { question: "What is the typical ROI for digital marketing?", answer: "ROI varies greatly depending on the industry, strategy, and budget, but we focus on measurable results and continuous optimization." },
      { question: "How long does it take to see results?", answer: "Some channels like PPC can show quick results, while SEO and content marketing build momentum over several months." },
      { question: "Do you manage social media accounts?", answer: "Yes, we offer social media management, content creation, and advertising services across various platforms." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "E-commerce SEO Boost", category: "SEO", slug: "ecommerce-seo" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "SaaS Lead Generation", category: "PPC", slug: "saas-leads" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Brand Awareness Campaign", category: "Social Media", slug: "brand-awareness" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Content Strategy for Blog", category: "Content Marketing", slug: "blog-strategy" },
    ]
  },
  {
    title: "SEO Services",
    slug: "seo-services",
    icon: "Search",
    shortDescription: "Organic growth & rankings",
    description: "Our SEO services are designed to improve your website's visibility on search engines, driving organic traffic and increasing your online presence. We employ a holistic approach covering technical SEO, on-page optimization, content strategy, and link building.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=1932",
    overview: "Achieve higher rankings and attract more qualified leads with our expert SEO strategies. We help your business stand out in search results, ensuring long-term sustainable growth.",
    technologies: [
      { title: "Tools", items: ["Google Search Console", "Ahrefs", "Moz"], icon: "Tool" },
      { title: "Techniques", items: ["Keyword Research", "Technical SEO", "Link Building"], icon: "Lightbulb" },
      { title: "Analytics", items: ["Google Analytics", "Custom Dashboards"], icon: "BarChart" },
    ],
    features: [
      { title: "Keyword Research", description: "Identify high-value keywords.", icon: "Key" },
      { title: "On-Page SEO", description: "Optimize content and meta tags.", icon: "FileText" },
      { title: "Technical SEO", description: "Improve site structure and speed.", icon: "Code" },
      { title: "Link Building", description: "Acquire high-quality backlinks.", icon: "Link" },
      { title: "Local SEO", description: "Target local customers.", icon: "MapPin" },
      { title: "Performance Tracking", description: "Monitor rankings and traffic.", icon: "Activity" },
    ],
    process: [
      { step: 1, title: "Audit", description: "Comprehensive website SEO audit." },
      { step: 2, title: "Strategy", description: "Develop a custom SEO roadmap." },
      { step: 3, title: "Implementation", description: "Apply on-page and technical changes." },
      { step: 4, title: "Content Optimization", description: "Enhance existing content." },
      { step: 5, title: "Link Building", description: "Execute outreach campaigns." },
      { step: 6, title: "Monitoring", description: "Track progress and adjust strategy." },
      { step: 7, title: "Reporting", description: "Regular performance reports and insights." },
    ],
    faq: [
      { question: "How long does it take to see SEO results?", answer: "SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results appearing after 6-12 months." },
      { question: "What is the most important factor for SEO?", answer: "While many factors contribute, high-quality, relevant content and a strong backlink profile are often considered most crucial." },
      { question: "Do you guarantee top rankings?", answer: "No reputable SEO agency can guarantee specific rankings. We guarantee to use ethical, effective strategies to improve your visibility and traffic." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Local Business SEO", category: "Local SEO", slug: "local-seo-project" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "E-commerce SEO Strategy", category: "E-commerce SEO", slug: "ecommerce-seo-strategy" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Content Marketing SEO", category: "Content SEO", slug: "content-seo" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Technical SEO Audit", category: "Technical SEO", slug: "technical-seo-audit" },
    ]
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    icon: "Cloud",
    shortDescription: "Cloud infrastructure & DevOps",
    description: "We provide comprehensive cloud solutions, from infrastructure setup and migration to managed services and optimization. Leveraging leading cloud providers like AWS, Azure, and Google Cloud, we help businesses build scalable, secure, and cost-effective cloud environments.",
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=1932",
    overview: "Embrace the power of the cloud with our expert guidance. We help you design, implement, and manage cloud strategies that enhance agility, reduce operational costs, and ensure business continuity.",
    technologies: [
      { title: "Platforms", items: ["AWS", "Azure", "Google Cloud"], icon: "Cloud" },
      { title: "Services", items: ["Compute", "Storage", "Networking", "Databases"], icon: "Server" },
      { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD"], icon: "GitBranch" },
    ],
    features: [
      { title: "Cloud Migration", description: "Seamless transition to cloud infrastructure.", icon: "Upload" },
      { title: "Infrastructure as Code", description: "Automated and consistent deployments.", icon: "Code" },
      { title: "Managed Cloud Services", description: "24/7 monitoring and maintenance.", icon: "Headphones" },
      { title: "Cost Optimization", description: "Efficient resource utilization.", icon: "DollarSign" },
      { title: "Security & Compliance", description: "Robust cloud security measures.", icon: "Shield" },
      { title: "Scalability & High Availability", description: "Reliable and flexible infrastructure.", icon: "Scale" },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate current infrastructure and needs." },
      { step: 2, title: "Strategy", description: "Develop a cloud adoption roadmap." },
      { step: 3, title: "Design", description: "Architect cloud environment." },
      { step: 4, title: "Migration", description: "Move applications and data to the cloud." },
      { step: 5, title: "Optimization", description: "Fine-tune for performance and cost." },
      { step: 6, title: "Management", description: "Ongoing monitoring and support." },
      { step: 7, title: "Innovation", description: "Leverage new cloud services." },
    ],
    faq: [
      { question: "Which cloud providers do you work with?", answer: "We primarily work with AWS, Microsoft Azure, and Google Cloud Platform." },
      { question: "Is cloud migration disruptive to business operations?", answer: "We plan migrations meticulously to minimize downtime and ensure a smooth transition, often performing migrations during off-peak hours." },
      { question: "How do you ensure cloud security?", answer: "We implement industry best practices, including identity and access management, network security, data encryption, and regular security audits." },
    ],
    relatedProjects: [
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "AWS Infrastructure Setup", category: "Cloud Infrastructure", slug: "aws-setup" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Azure Migration Project", category: "Cloud Migration", slug: "azure-migration" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Kubernetes Deployment", category: "DevOps", slug: "kubernetes-deployment" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&q=80&w=400", title: "Serverless Application", category: "Serverless", slug: "serverless-app" },
    ]
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): { slug: string }[] {
  return services.map(service => ({ slug: service.slug }));
}