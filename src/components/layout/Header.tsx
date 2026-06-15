"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, ArrowRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav } from "@/lib/site-config";
import { serviceMenuItems } from "@/lib/service-menu";
import { ServicesMegaMenu } from "./ServicesMegaMenu";

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      className={`ml-0.5 h-3 w-3 opacity-80 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Logo() {
  return (
    <span className="text-lg font-bold tracking-tight sm:text-xl">
      <span className="text-brand-500">Blag</span>
      <span className="text-white">web</span>
      <span className="font-normal text-white/95"> Agency</span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const menuId = useId();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const servicesActive =
    isActive("/services") || serviceMenuItems.some((item) => pathname === item.href);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };

    const onPointerDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 overflow-visible bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Logo />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          aria-label="Main"
        >
          <ul className="flex items-center gap-0.5 rounded-full border border-white/15 bg-white/[0.04] px-2 py-1.5 backdrop-blur-sm">
            {mainNav.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls={menuId}
                      onClick={() => setServicesOpen((open) => !open)}
                      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                        servicesActive || servicesOpen
                          ? "text-brand-500"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown open={servicesOpen} />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full z-50 w-[min(52rem,calc(100vw-2rem))] -translate-x-1/2 pt-3">
                        <ServicesMegaMenu id={menuId} />
                      </div>
                    )}
                  </li>
                );
              }

              const active = isActive(link.href);
              return (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      active ? "text-brand-500" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Moon size={20} />
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25"
          >
            Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="relative z-10 rounded-lg p-2 text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-black px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {mainNav.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li key={link.label}>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium ${
                        servicesActive ? "text-brand-500" : "text-white/90"
                      }`}
                    >
                      {link.label}
                      <ChevronDown open={mobileServicesOpen} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2">
                        <ServicesMegaMenu
                          onItemClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                        />
                      </div>
                    )}
                  </li>
                );
              }

              const active = isActive(link.href);
              return (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center rounded-lg px-3 py-2.5 text-base font-medium ${
                      active ? "text-brand-500" : "text-white/90"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
