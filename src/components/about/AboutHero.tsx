import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-6">
              ABOUT US
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Building Digital Solutions That Drive Business Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Blagweb Agency is a full-service technology and digital solutions company helping startups, brands, and enterprises create modern websites, scalable software, mobile applications, and growth-focused digital experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/services" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white shadow-sm">
                Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl group">
              <div className="absolute inset-0 bg-blue-700/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
                alt="Professional team collaborating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
