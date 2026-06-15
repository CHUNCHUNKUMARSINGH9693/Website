import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Experienced Development Team",
  "Modern Technologies",
  "User-Centered Design",
  "Scalable Solutions",
  "On-Time Delivery",
  "Long-Term Support",
  "Transparent Communication",
  "Affordable Pricing",
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "25+", label: "Happy Clients" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Technologies Used" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Businesses Choose Blagweb Agency
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We don&apos;t just build websites; we build digital ecosystems designed to scale and succeed. Here&apos;s why our clients trust us:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-700 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl ${index % 2 !== 0 ? 'lg:translate-y-8' : ''}`}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-700">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
