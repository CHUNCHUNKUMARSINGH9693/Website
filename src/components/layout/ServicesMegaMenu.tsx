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
    case "design":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 21a9 9 0 110-18 9 9 0 010 18z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 9a1 1 0 100-2 1 1 0 000 2zM11 7a1 1 0 100-2 1 1 0 000 2zM14 8a1 1 0 100-2 1 1 0 000 2zM16 11a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
      );
    case "shop":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "crm":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" strokeWidth={1.75} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "erp":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" />
        </svg>
      );
    case "marketing":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5L6 19l1.5.5L11 14l3.5 5.5L17 19l-5-14zM19 8v8M16 11h6" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M17.5 19A5.5 5.5 0 0018 8.022a7 7 0 10-13.845 2.108A4.5 4.5 0 105.5 19h12z"
          />
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
    default:
      return null;
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
       <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">        {serviceMenuItems.map((item) => (
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
