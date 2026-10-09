import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
}

export function Section({ children, alt = false, className = "", id }: SectionProps) {
  const classes = ["section", alt ? "section--alt" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={classes} id={id}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
}

export function SectionHeading({ label, title, lead }: SectionHeadingProps) {
  return (
    <>
      {label && <p className="section__label">{label}</p>}
      <h2 className="section__heading">{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </>
  );
}
