export default function CaseStudy() {
  return (
    <section className="py-24 bg-white border-t border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Case Study Highlight</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Enterprise CRM Platform</h2>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Challenge</h4>
                  <p className="mt-1">Managing customer operations manually.</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Solution</h4>
                  <p className="mt-1">Custom CRM System built using Next.js and MongoDB.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Empirical Results</h4>
                {['60% Faster Workflow', '45% Productivity Increase', 'Improved Customer Experience'].map((res, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 aspect-video bg-slate-800 rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}