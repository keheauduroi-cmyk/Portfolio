"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  backgroundVideoSrc?: string;
  children?: ReactNode;
};

export function Hero({ eyebrow, title, lead, backgroundVideoSrc, children }: HeroProps) {
  return (
    <section className="relative min-h-[82vh] overflow-hidden px-5 py-20 lg:px-8">
      {backgroundVideoSrc && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.58]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={backgroundVideoSrc} type="video/mp4" />
        </video>
      )}
      {!backgroundVideoSrc && (
        <>
          <div className="absolute left-[-12%] top-[-18%] h-[30rem] w-[30rem] rounded-full bg-rosso/18 blur-[120px]" />
          <div className="absolute right-[-10%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-champagne/10 blur-[110px]" />
          <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-ember/10 via-champagne/[0.035] to-transparent" />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-asphalt/95 via-asphalt/68 to-asphalt/26" />
      <div className="absolute inset-0 bg-gradient-to-t from-asphalt/92 via-asphalt/18 to-asphalt/48" />
      <div className="noise absolute inset-0 opacity-[0.052]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-ember">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.94] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-steel sm:text-xl">
            {lead}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
