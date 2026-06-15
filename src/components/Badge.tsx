import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable premium badge component for categories, tags, or status indicators.
 */
export default function Badge({ children, className }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-200/50 uppercase tracking-wider ${className || ''}`}>
      {children}
    </span>
  );
}