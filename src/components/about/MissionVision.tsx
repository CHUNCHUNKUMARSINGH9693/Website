import { Target, Lightbulb } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50 opacity-50 transition-transform group-hover:scale-150" />
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                To empower businesses with innovative technology solutions that create measurable growth and long-term success. We strive to deliver exceptional digital products that solve real-world problems and enhance user experiences.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-10 transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50 opacity-50 transition-transform group-hover:scale-150" />
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                To become a trusted global technology partner known for quality, innovation, and customer success. We envision a future where our digital solutions play a pivotal role in shaping the success of businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
