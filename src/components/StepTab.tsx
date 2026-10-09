interface StepTabProps {
  number: number;
  large?: boolean;
}

export function StepTab({ number, large = false }: StepTabProps) {
  return (
    <span
      className={`step-tab ${large ? "step-tab--lg" : ""}`}
      aria-label={`Step ${number}`}
    >
      {number}
    </span>
  );
}
