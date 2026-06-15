interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-gray-100 text-gray-800",
    brand: "bg-brand-100 text-brand-800",
    outline: "border border-gray-300 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
