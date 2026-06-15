import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import {
  ContactHero,
  ContactFormSection,
  OfficeInfo,
  GoogleMap,
  ContactFAQ,
} from "@/components/contact";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Reach out for your next project or any inquiries. We're excited to hear from you!`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Office Information */}
      <OfficeInfo />

      {/* Google Map */}
      <GoogleMap />

      {/* FAQ Section */}
      <ContactFAQ />

      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help bring your vision to life"
      />
    </>
  );
}
