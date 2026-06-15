"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function ContactHero() {
  const contactCards = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: siteConfig.address?.split(",")[0] || "India",
      href: "#",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge variant="brand">CONTACT US</Badge>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Have a project in mind? Our team at Blagweb is excited to hear about your ideas. 
              Reach out to us today and let&apos;s discuss how we can bring your vision to life.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 pt-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500">{card.label}</p>
                      <p className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-full min-h-96">
              {/* Floating background shapes */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-full">
                <Image
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Team collaboration at Blagweb Agency"
                  width={600}
                  height={600}
                  priority
                  className="h-full w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute right-6 top-6 rounded-full bg-white shadow-lg px-4 py-2 flex items-center gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Always Available</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
