import Image from "next/image";

export function WhoWeAre() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern company building"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">5+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Experience</p>
                  <p className="text-lg font-bold text-gray-900">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              WHO WE ARE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We&apos;re More Than Just a Digital Agency
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Blagweb Agency was founded with a unified vision: to transform businesses through innovative digital solutions. We believe that technology should be an enabler, simplifying complex challenges and creating new avenues for growth.
              </p>
              <p>
                Our team consists of passionate developers, creative designers, and strategic thinkers. We collaborate closely with our clients to understand their unique goals, allowing us to deliver tailor-made software, responsive websites, and robust digital platforms that stand the test of time.
              </p>
              <p>
                Whether you&apos;re a startup looking to make your mark or an established enterprise aiming for digital transformation, we have the expertise to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
