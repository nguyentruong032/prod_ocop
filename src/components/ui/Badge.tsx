import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "terracotta"
    | "outline"
    | "surface"
    | "stars";
  stars?: 3 | 4 | 5;
  className?: string;
}

export function Badge({
  children,
  variant = "surface",
  stars,
  className = "",
}: BadgeProps) {
  if (variant === "stars" || stars) {
    const starCount = stars || 3;
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF9E6] text-[#B88700] border border-[#F3DE9C] shadow-2xs ${className}`}
      >
        <span className="flex items-center">
          {Array.from({ length: starCount }).map((_, i) => (
            <span key={i} className="text-[#C89B3C] text-[13px] leading-none">
              ★
            </span>
          ))}
        </span>
        <span>{children || `${starCount} Sao`}</span>
      </span>
    );
  }

  const variantClasses = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary text-on-secondary",
    accent: "bg-accent/20 text-accent font-semibold",
    terracotta: "bg-terracotta text-white",
    outline:
      "border border-outline-variant text-on-surface-variant bg-transparent",
    surface:
      "bg-surface-container-low text-on-surface-variant border border-surface-container",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-label-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
