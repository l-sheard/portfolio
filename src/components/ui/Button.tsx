import Link from "next/link";
import type { ReactNode } from "react";

const variantClasses = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-surface-border bg-transparent hover:bg-surface",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: keyof typeof variantClasses;
  className?: string;
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
