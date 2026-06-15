import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Users } from "lucide-react";

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-600/10 mb-6">
              CAREERS
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Your Career<br />
              <span className="text-blue-600">With Us</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join a team of creators, innovators, and problem solvers. At Blagweb Agency, we empower your growth, encourage your ideas, and build amazing things together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Button href="#open-positions" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                View Open Positions
              </Button>
              <Button href="#life-at-blagweb" variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Life at Blagweb
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4">
  {/* Avatars */}
  <div className="flex items-center -space-x-3">
    {[
      "/images/team/team1.png",
      "/images/team/team2.png",
      "/images/team/team3.png",
      "/images/team/team4.png",
    ].map((src, index) => (
      <div
        key={index}
        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm"
      >
        <Image
          src={src}
          alt={`Team member ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ))}

    {/* 50+ Circle */}
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-bold text-blue-600 shadow-sm">
      50+
    </div>
  </div>

  {/* Text */}
  <div>
    <h4 className="text-xl font-bold text-gray-900">50+</h4>
    <p className="text-sm text-gray-500">Amazing People</p>
  </div>
</div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2850&q=80"
             alt="Professional team collaborating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce-slow border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">We're a team of</p>
                  <p className="text-xl font-bold text-gray-900">50+ Passionate People</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
