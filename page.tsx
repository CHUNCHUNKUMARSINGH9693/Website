import { Metadata } from 'next';
import Image from 'next/image'; // For popular posts thumbnails and hero image
import { ArrowRight } from 'lucide-react'; // For pagination icon and blog card arrow

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Blagweb Agency',
  description: 'Stay updated with the latest trends, tips, and insights in web development, design, mobile apps, SEO, and digital marketing.',
};

export default function BlogPage() {
  // Dummy blog data for demonstration
  const blogPosts = [
    {
      slug: 'the-complete-guide-to-modern-web-development',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Web Development',
      title: 'The Complete Guide to Modern Web Development',
      description: 'Dive deep into the latest technologies and best practices for building robust web applications.',
      date: 'November 1, 2023',
      readingTime: '10 min read',
    },
    {
      slug: 'mobile-first-approach-in-2025',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'UI/UX Design',
      title: 'Mobile-First Approach in 2025',
      description: 'Understand why designing for mobile first is crucial for future-proof digital products.',
      date: 'October 28, 2023',
      readingTime: '8 min read',
    },
    {
      slug: 'seo-best-practices-for-higher-rankings',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965da9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Digital Marketing',
      title: 'SEO Best Practices for Higher Rankings',
      description: 'Unlock the secrets to improving your search engine visibility and driving organic traffic.',
      date: 'October 25, 2023',
      readingTime: '12 min read',
    },
    {
      slug: 'ui-ux-principles-every-designer-should-know',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c762244817?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'UI/UX Design',
      title: 'UI/UX Principles Every Designer Should Know',
      description: 'Essential principles to create intuitive and engaging user experiences.',
      date: 'October 20, 2023',
      readingTime: '7 min read',
    },
    {
      slug: 'what-is-cloud-computing-and-how-it-works',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Technology',
      title: 'What is Cloud Computing and How It Works',
      description: 'A comprehensive guide to understanding cloud infrastructure and its benefits for businesses.',
      date: 'October 15, 2023',
      readingTime: '15 min read',
    },
    {
      slug: 'useful-vs-code-extensions-for-developers',
      image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Development Tools',
      title: 'Useful VS Code Extensions for Developers',
      description: 'Boost your productivity with these must-have Visual Studio Code extensions.',
      date: 'October 10, 2023',
      readingTime: '6 min read',
    },
  ];

  return (
    <main className="bg-white">
      {/* Header Navigation - (Assumed global, not implemented here) */}
      {/* A global Navbar component would typically handle this, with the "Blog" link marked as active. */}

      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-200 mb-4">
              OUR BLOG
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Latest Insights & Updates
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Stay updated with the latest trends, tips, and insights in web development, design, mobile apps, SEO, and digital marketing.
            </p>
          </div>
          {/* Right Side - Image Placeholder */}
          <div className="relative h-64 md:h-96 bg-gray-100 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-4">
            <Image
              src="https://images.unsplash.com/photo-1504711432028-417f05739789?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern flat-lay with laptop, coffee, notebook, plant, smartphone"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Main Content Area: SECTION 2 (Sidebar) & SECTION 3 (Blog Grid) */}
      <section className="py-20 bg-gray-50">
        <Container className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* SECTION 2: SIDEBAR */}
          <aside className="lg:col-span-1 space-y-10">
            {/* Search Box */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Web Development', 'UI/UX Design', 'Mobile Development', 'Digital Marketing', 'SEO', 'Business Growth'].map(category => (
                  <li key={category}>
                    <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors py-1">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Posts</h3>
              <div className="space-y-6">
                {[
                  { title: 'The Future of AI in Web Development', date: 'Oct 26, 2023', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af324?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                  { title: 'Mastering Tailwind CSS for Responsive Design', date: 'Oct 20, 2023', thumbnail: 'https://images.unsplash.com/photo-1633356122544-cd3608a922e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                  { title: 'Boost Your SEO with These 5 Simple Tricks', date: 'Oct 15, 2023', thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
                ].map((post, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={80}
                      height={64}
                      className="object-cover rounded-lg shadow-sm"
                    />
                    <div className="flex-1">
                      <h4 className="text-md font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        <a href="#">{post.title}</a>
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* SECTION 3: BLOG GRID */}
          <div className="lg:col-span-3">
            <SectionHeading
              title="Our Latest Articles"
              subtitle="Stay informed with our expert insights"
              className="mb-10 text-left" // Override centered from SectionHeading
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>

            {/* SECTION 5: PAGINATION */}
            <div className="flex justify-center items-center space-x-2 mt-16">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180 mr-2" /> Previous
              </button>
              {[1, 2, 3, 4].map(page => (
                <button key={page} className={`px-4 py-2 rounded-xl font-medium ${page === 1 ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100 border border-transparent hover:border-gray-200'} transition-all`}>
                  {page}
                </button>
              ))}
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: NEWSLETTER SECTION */}
      <section className="py-20 bg-blue-600 text-white">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <svg className="w-16 h-16 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h2 className="text-3xl font-bold mb-2">Stay Updated with Our Latest Articles</h2>
              <p className="text-blue-100 text-lg">Subscribe to our newsletter and never miss an update.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-xl border border-blue-400 bg-blue-700 text-white placeholder-blue-200 focus:ring-blue-300 focus:border-blue-300 transition-all shadow-inner"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-md">
              Subscribe Now
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}