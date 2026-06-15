import Link from "next/link";
import { mainNav, siteConfig, socialLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = [
    "Web Development",
    "Software Development",
    "UI/UX Design",
    "Digital Marketing",
    "Mobile Apps",
    "DevOps & Cloud",
  ];

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-6">
            <p className="text-3xl font-bold text-white">
              Blagweb <span className="text-brand-400">Agency</span>
            </p>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Full-stack technology & marketing agency helping startups build, launch and scale powerful digital products.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-sm text-slate-200 transition hover:border-brand-500 hover:text-brand-300"
                  aria-label={social.label}
                >
                  {social.label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Web · Software · Cloud · Marketing · Mobile Apps
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
              Services
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
              Quick Links
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-brand-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
                Contact Us
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {siteConfig.address && <li>{siteConfig.address}</li>}
                {siteConfig.phone && (
                  <li>
                    <a href={`tel:${siteConfig.phone}`} className="transition hover:text-brand-300">
                      📞 {siteConfig.phone}
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="transition hover:text-brand-300">
                    ✉ {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm font-semibold text-white">Subscribe</p>
              <p className="mt-2 text-sm text-slate-500">
                Join our mailing list for updates, insights, and new launches.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-full border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand-500"
                />
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {year} {siteConfig.name} Crafted for Digital Growth 🚀 | Powered by Blagweb Software Solution
        </div>
      </div>
    </footer>
  );
}
