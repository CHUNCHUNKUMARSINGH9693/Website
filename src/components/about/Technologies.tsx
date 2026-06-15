const categories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Next.js API Routes"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS"],
  },
  {
    name: "Mobile",
    skills: ["Flutter"],
  },
];

export function Technologies() {
  return (
    <section className="bg-gray-900 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We leverage modern, scalable, and secure technologies to build robust digital solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
