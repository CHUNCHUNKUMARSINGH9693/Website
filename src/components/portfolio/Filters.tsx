interface FiltersProps {
  active: string;
  setActive: (cat: string) => void;
  search: string;
  setSearch: (query: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'branding', label: 'UI/UX Design & Branding' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'other', label: 'Custom Systems' },
];

export default function Filters({ active, setActive, search, setSearch }: FiltersProps) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto mb-12">
      <div className="relative">
        <input 
          type="text"
          placeholder="Search projects by name, technology, or client..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition text-sm"
        />
        <div className="absolute right-4 top-4 text-slate-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all ${
              active === cat.id 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10' 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}