import type { ReactNode } from "react";
import { Navigation } from "./Navigation";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-hidden pt-20">
        {children}
      </main>
    </>
  );
}
