import Link from "next/link";
import type { ServiceMenuItem } from "@/types";
import { serviceMenuItems } from "@/lib/service-menu";

function ServiceIcon({ icon }: { icon: ServiceMenuItem["icon"] }) {
  const className = "h-7 w-7 text-brand-500";

  switch (icon) {
    case "globe":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.8 3.4 6 3.4 9s-1.2 6.2-3.4 9M12 3c-2.2 2.8-3.4 6-3.4 9s1.2 6.2 3.4 9"
          />
        </svg>
      );
    case "code":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10 8l-4 4 4 4M14 8l4 4-4 4"
          />
        </svg>
      );
    case "mobile":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2zm4 14h.01"
          />
        </svg>
      );
    case "devops":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M4 7h16M4 12h16M4 17h10"
          />
          <ellipse cx="17" cy="17" rx="2" ry="1.5" strokeWidth={1.75} />
        </svg>
      );
    case "seo":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      );
    case "ads":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M11 5L6 19l1.5.5L11 14l3.5 5.5L17 19l-5-14zM19 8v8M16 11h6"
          />
        </svg>
      );
  }
}

interface ServicesMegaMenuProps {
  id?: string;
  className?: string;
  onItemClick?: () => void;
}

export function ServicesMegaMenu({ id, className = "", onItemClick }: ServicesMegaMenuProps) {
  return (
    <div
      id={id}
      role="menu"
      aria-label="Services"
      className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl shadow-black/20 ${className}`}
    >
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {serviceMenuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              role="menuitem"
              onClick={onItemClick}
              className="group flex gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                <ServiceIcon icon={item.icon} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-gray-900 group-hover:text-brand-600">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-xs text-gray-500">{item.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-gray-100 pt-4 text-center">
        <Link
          href="/services"
          onClick={onItemClick}
          className="text-sm font-semibold text-brand-500 hover:text-brand-600"
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}
