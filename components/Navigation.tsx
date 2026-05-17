"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navigation } from "@/data/content";

export function Navigation() {
  const pathname = usePathname();
  const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);
  const currentPath = normalizePath(pathname);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-asphalt/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Retour à la grille de départ">
          <span className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/[0.03] text-xs font-semibold text-champagne">
            KD
          </span>
          <span className="hidden text-sm uppercase tracking-[0.28em] text-white/72 sm:block">
            Kéheau Duroi
          </span>
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.06] p-1">
          {navigation.map((item) => {
            const active = currentPath === normalizePath(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative whitespace-nowrap rounded-full px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white/72 transition hover:text-white md:px-4"
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-rosso"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
