export default function Testimonials() {
  const reviews = [
    { text: "Blagweb Agency transformed our online presence and delivered beyond expectations.", author: "Client Name", role: "CEO, Tech Company" },
    { text: "Exceptional architecture precision. Deployed our system architecture metrics ahead of timeline benchmarks.", author: "Executive Name", role: "CTO, Partner Firm" },
    { text: "The engineering fidelity and communication standard maintained throughout production was remarkable.", author: "Director Name", role: "VP, Enterprise Group" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Client Testimonials</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-50 border border-slate-150 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-amber-400 text-xs">★★★★★</div>
                <p className="text-sm text-slate-600 italic leading-relaxed">"{rev.text}"</p>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{rev.author}</div>
                <div className="text-[10px] text-slate-400 font-medium">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}