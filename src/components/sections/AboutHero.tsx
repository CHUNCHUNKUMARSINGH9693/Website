import Image from "next/image";
import { Button } from "@/components/ui/Button";

const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format&fit=crop";

export function AboutHero() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-500">About Us</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building Digital Solutions That Drive Business Growth
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Blagweb Agency is a full-service technology and digital solutions company helping startups, brands, and enterprises create modern websites, scalable software, mobile applications, and growth-focused digital experiences.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/services" size="lg" className="min-w-[12rem]">
              Our Services
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="min-w-[12rem]">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl shadow-slate-300/30">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/5" aria-hidden />
          <div className="relative h-[460px] w-full">
            <Image
              src={ABOUT_HERO_IMAGE}
              alt="Digital agency team working together"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute left-6 bottom-6 rounded-[1.5rem] border border-white/80 bg-slate-900/95 px-6 py-5 text-white shadow-xl shadow-slate-900/25">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Experience</p>
            <p className="mt-3 text-4xl font-bold">5+ Years</p>
            <p className="mt-2 text-sm text-slate-300">Delivering exceptional digital experiences at scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
