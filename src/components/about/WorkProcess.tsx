import { ClipboardList, PenTool, Code2, Gauge, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  { id: 1, title: "Discovery & Planning", icon: ClipboardList },
  { id: 2, title: "Design & Prototyping", icon: PenTool },
  { id: 3, title: "Development", icon: Code2 },
  { id: 4, title: "Testing & Optimization", icon: Gauge },
  { id: 5, title: "Deployment", icon: Rocket },
  { id: 6, title: "Ongoing Support", icon: HeadphonesIcon },
];

export function WorkProcess() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            HOW WE WORK
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Work Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A proven, structured approach to turning your ideas into a successful digital reality.
          </p>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 relative z-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative flex flex-col items-center group">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-100 shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-blue-700 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-blue-700" />
                    </div>
                    <div className="mt-6 text-center">
                      <div className="text-sm font-bold text-gray-400 mb-1">Step 0{step.id}</div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
