import { type ReactNode } from "react";

interface BandProps {
  children: ReactNode;
}

export function Band({ children }: BandProps) {
  return (
    <section className="band">
      <div className="container">{children}</div>
    </section>
  );
}
