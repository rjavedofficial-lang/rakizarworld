import { ArrowRight } from "lucide-react";

export function Logo() {
  return (
    <a href="#/" className="logo" aria-label="Rakizar World — Home">
      <span className="logo__icon" aria-hidden="true">
        <ArrowRight size={16} strokeWidth={2.5} />
      </span>
      <span className="logo__text">
        RAKIZAR<span className="world"> World</span>
      </span>
    </a>
  );
}
