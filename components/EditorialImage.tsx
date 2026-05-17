"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  className?: string;
};

export function EditorialImage({ src, alt, caption, priority = false, className = "" }: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <motion.figure
      ref={ref}
      className={`group relative overflow-hidden rounded-[6px] border border-white/10 bg-white/[0.045] shadow-cockpit ${className}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rosso/18 via-transparent to-champagne/10" />
      <motion.div style={{ y }} className="relative h-full min-h-[24rem] scale-105">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-[0.88] saturate-[0.92] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/22 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-asphalt/42 to-transparent" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm leading-6 text-white/86 md:p-7">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
