"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactFormSection() {
  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
      <Container>
        <SectionHeading
          title="Send us a Message"
          subtitle="We'll get back to you as soon as possible with your inquiry"
          centered
        />

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-lg backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto text-center">
          <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
            <div className="text-2xl font-bold text-blue-600">24h</div>
            <p className="text-sm text-gray-600 mt-1">Typical Response Time</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 border border-green-100">
            <div className="text-2xl font-bold text-green-600">10+</div>
            <p className="text-sm text-gray-600 mt-1">Years Experience</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
