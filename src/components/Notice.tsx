import { type ReactNode } from "react";

interface NoticeProps {
  children: ReactNode;
}

export function Notice({ children }: NoticeProps) {
  return <div className="notice">{children}</div>;
}
