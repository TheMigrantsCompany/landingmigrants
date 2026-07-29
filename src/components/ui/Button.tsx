import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: never;
};

type LinkButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-foreground text-background hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-ink hover:text-ink hover:bg-ink/5",
  ghost: "bg-transparent text-muted-foreground hover:text-foreground",
} as const;

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  href,
  className = "",
}: LinkButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
