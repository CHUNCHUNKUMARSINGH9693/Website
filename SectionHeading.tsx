import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * A reusable component for consistent section headings and subtitles.
 */
export default function SectionHeading({ title, subtitle, centered, className }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className || ''}`}>
      {subtitle && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}