"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function OfficeInfo() {
  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Closed" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: siteConfig.address,
      link: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      link: `tel:${siteConfig.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Our office information and business hours"
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="mt-1 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-medium text-gray-900 leading-relaxed">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
            <div className="space-y-4">
              {businessHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-blue-600" />
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Note */}
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 mt-6">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">💡 Tip:</span> For urgent matters, you can reach out via WhatsApp
                at{" "}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="font-semibold text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsapp}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
