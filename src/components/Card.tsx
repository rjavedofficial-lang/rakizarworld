import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface CardProps {
  chip?: string;
  title: string;
  children: ReactNode;
  linkText?: string;
  linkHref?: string;
}

export function Card({ chip, title, children, linkText, linkHref }: CardProps) {
  return (
    <div className="card">
      {chip && <span className="chip card__chip">{chip}</span>}
      <h3 className="card__title">{title}</h3>
      <div className="card__desc">{children}</div>
      {linkText && linkHref && (
        <a href={linkHref} className="card__link">
          {linkText} <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}
