import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-balance">
          <span className="block text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            We Build Technology
          </span>
          <span className="mt-1 block text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-hero-gradient">That Drives</span>
            <br />
            <span className="text-hero-gradient">Business Growth</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-balance text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded-md bg-btn-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            Start Your Project
          </Link>
          <Link
            href="/services"
            className="inline-flex min-w-[200px] items-center justify-center rounded-md border border-white/80 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
