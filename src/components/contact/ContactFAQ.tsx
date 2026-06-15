"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A website typically takes 4-8 weeks, while mobile apps may take 8-16 weeks. We provide detailed timelines during the discovery phase after understanding your specific requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & QA, 5) Deployment, 6) Post-launch Support. We maintain transparent communication throughout each phase.",
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer:
      "Yes! We offer comprehensive post-launch support packages including bug fixes, updates, performance monitoring, and feature enhancements. We typically provide 3 months of free maintenance, with options to extend.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in: Frontend (React, Next.js, Vue.js), Backend (Node.js, Python, Java), Mobile (React Native, Flutter), Cloud (AWS, Azure, GCP), and Databases (MongoDB, PostgreSQL, MySQL). We choose the best tech stack for your project.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on project scope, complexity, and timeline. We offer flexible engagement models: fixed-price projects, time & materials, and dedicated team augmentation. Schedule a consultation for a custom quote.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely! We have extensive experience with code audits, refactoring, optimization, and feature additions to existing projects. We can assess your codebase and provide recommendations for improvement.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through weekly status meetings, daily standups (optional), and instant communication via Slack or email. You'll have a dedicated project manager as your primary point of contact.",
  },
  {
    question: "What if I need to make changes during development?",
    answer:
      "We're agile! Scope changes are documented and discussed with timeline and budget impact. We typically include a certain number of revision rounds in our estimates. Change requests are handled through our formal change order process.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and process"
          centered
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-left font-semibold text-gray-900 text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-blue-600 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
