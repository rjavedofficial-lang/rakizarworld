import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq__item ${openIndex === i ? "faq__item--open" : ""}`}
        >
          <button
            className="faq__btn"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <Plus className="faq__icon" size={20} strokeWidth={2} />
          </button>
          <div className="faq__content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
