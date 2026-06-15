import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gray-50 px-8 py-12 sm:px-16 sm:py-16 overflow-hidden">
            <Quote className="absolute top-8 left-8 h-24 w-24 text-blue-100 -rotate-12 opacity-50" />
            <div className="relative z-10 text-center">
              <p className="text-2xl sm:text-3xl font-medium leading-relaxed text-gray-900">
                &ldquo;Blagweb delivered our website exactly as we envisioned. Their professionalism and communication were outstanding. We look forward to working with them on future projects.&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-lg font-bold text-gray-900">David Anderson</div>
                  <div className="text-sm font-medium text-blue-700">Founder, TechNova</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
