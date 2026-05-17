import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
  return (
    <div className={`border border-white/12 bg-white/[0.065] p-6 shadow-cockpit backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
