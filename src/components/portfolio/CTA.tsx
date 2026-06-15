export default function CTA() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Ready To Build Your Next Success Story?</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">Let's create innovative digital solutions that help your business grow.</p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 transition font-bold rounded-xl text-xs uppercase tracking-wider">Start Your Project</button>
          <button className="px-6 py-3.5 border border-slate-800 hover:bg-slate-900 transition font-bold rounded-xl text-xs uppercase tracking-wider">Contact Us</button>
        </div>
      </div>
    </section>
  );
}