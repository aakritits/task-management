import type { ComponentProps, ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris/50 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-iris text-white shadow-[0_10px_24px_-12px_rgba(90,75,218,0.7)] hover:bg-iris-hover hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink/30 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink-soft hover:text-ink hover:bg-ink/[0.04]",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<T>, "as" | "children" | "className">;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";
  return (
    <Component
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
