export default function Industries() {
  const list = ['Healthcare', 'Education', 'Real Estate', 'E-Commerce', 'Finance', 'Logistics', 'Manufacturing', 'Startups'];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {list.map((ind, i) => (
            <div key={i} className="bg-white border border-slate-200/80 p-5 rounded-xl text-center shadow-sm">
              <span className="text-xs font-bold text-slate-800">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}