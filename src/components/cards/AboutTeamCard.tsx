"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type { TeamMember } from "@/types";
import { siteConfig } from "@/lib/site-config";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center text-white/95 transition hover:text-white"
    >
      {children}
    </a>
  );
}

interface AboutTeamCardProps {
  member: TeamMember;
}

export function AboutTeamCard({ member }: AboutTeamCardProps) {
  const email = member.email ?? siteConfig.email;
  const imageSrc =
    member.image ??
    `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=f97316&color=fff`;

  return (
    <article className="group relative">
      <div className="rounded-2xl bg-gradient-to-br from-rose-400 via-fuchsia-400 to-purple-500 p-[2px] shadow-md shadow-rose-200/40 transition group-hover:shadow-lg">
        <div className="overflow-hidden rounded-[14px] bg-gradient-to-b from-white via-white to-rose-50/90">
          <div className="relative aspect-[4/5] w-full bg-gray-100">
            <Image
              src={imageSrc}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
          <div className="bg-gradient-to-t from-rose-100/90 via-rose-50/60 to-transparent px-4 py-5 text-center">
            <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">{member.role}</p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -left-3 top-1/2 z-10 flex -translate-y-1/2 flex-col overflow-hidden rounded-l-md bg-brand-600 opacity-0 shadow-lg transition-all duration-300 group-hover:pointer-events-auto group-hover:left-0 group-hover:opacity-100"
        aria-hidden={false}
      >
        {member.linkedin && (
          <SocialLink href={member.linkedin} label={`${member.name} on LinkedIn`}>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
        )}
        {member.twitter && (
          <SocialLink href={member.twitter} label={`${member.name} on Twitter`}>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialLink>
        )}
        <SocialLink href={`mailto:${email}`} label={`Email ${member.name}`}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </SocialLink>
      </div>
    </article>
  );
}
