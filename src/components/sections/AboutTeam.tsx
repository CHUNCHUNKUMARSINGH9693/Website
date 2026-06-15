import { AboutTeamCard } from "@/components/cards/AboutTeamCard";
import type { TeamMember } from "@/types";

interface AboutTeamProps {
  members: TeamMember[];
}

const testimonial = {
  quote:
    "Blagweb delivered our website exactly as we envisioned. Their professionalism and communication were outstanding.",
  author: "David Anderson",
  role: "Founder, TechGrow",
};

export function AboutTeam({ members }: AboutTeamProps) {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-500">
              Meet Our Experts
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet Our Experts
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Our team brings together design, engineering, and growth expertise to deliver digital solutions that elevate every brand.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {members.map((member) => (
                <AboutTeamCard key={member._id} member={member} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-300/40">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-500">What Our Clients Say</p>
              <p className="mt-6 text-xl font-semibold text-slate-900">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {testimonial.author}
              </p>
              <p className="mt-2 text-sm text-slate-500">{testimonial.role}</p>
            </div>

            <div className="rounded-[2rem] bg-brand-600 px-8 py-10 text-white shadow-xl shadow-brand-500/20">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-200">Let’s Build Something Amazing Together</p>
              <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to turn your ideas into reality?
              </h3>
              <p className="mt-4 text-base leading-7 text-brand-100/90">
                Partner with Blagweb Agency and create digital solutions that drive results.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-slate-100"
              >
                Start Your Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
