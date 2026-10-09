import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "solid" | "outline" | "white" | "ghost-white" | "whatsapp";
type Size = "default" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  href?: string;
  children: ReactNode;
}

export function Button({
  variant = "solid",
  size = "default",
  block = false,
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "sm" ? "btn--sm" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} role="button">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "solid",
  size = "default",
  block = false,
  className = "",
  showArrow = false,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  showArrow?: boolean;
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "sm" ? "btn--sm" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const href = to.startsWith("#") || to.startsWith("http") ? to : `#${to}`;

  return (
    <a href={href} className={classes}>
      {children}
      {showArrow && <ArrowRight size={16} />}
    </a>
  );
}
