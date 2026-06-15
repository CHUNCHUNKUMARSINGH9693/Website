export default function Technologies() {
  const stack = [
    { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Node.js', 'Express.js'] },
    { title: 'Database', items: ['MongoDB', 'PostgreSQL'] },
    { title: 'Cloud', items: ['AWS', 'Vercel'] },
    { title: 'Mobile', items: ['Flutter'] }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Our Stack Ecosystem</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stack.map((group, i) => (
            <div key={i} className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{group.title}</h4>
              <div className="space-y-1">
                {group.items.map((item, idx) => (
                  <div key={idx} className="text-sm font-semibold text-slate-800">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}