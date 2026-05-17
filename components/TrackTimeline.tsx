"use client";

import { chapters } from "@/data/content";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TimelineItemProps = {
  chapter: (typeof chapters)[number];
  index: number;
  progress: MotionValue<number>;
};

function TimelineItem({ chapter, index, progress }: TimelineItemProps) {
  const start = index * 0.15;
  const peak = start + 0.16;
  const opacity = useTransform(progress, [start, peak], [0, 1]);
  const y = useTransform(progress, [start, peak], [30, 0]);
  const scale = useTransform(progress, [start, peak], [0.975, 1]);
  const markerGlow = useTransform(progress, [start, peak], ["rgba(215, 25, 32, 0.2)", "rgba(215, 25, 32, 0.72)"]);

  return (
    <motion.article
      style={{ opacity, y, scale }}
      className="relative pl-12 will-change-transform"
    >
      <motion.div
        style={{ borderColor: markerGlow }}
        className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center border bg-asphalt text-[0.65rem] font-semibold text-champagne shadow-redline"
      >
        {index + 1}
      </motion.div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember">{chapter.marker}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{chapter.title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-steel md:text-base">{chapter.body}</p>
    </motion.article>
  );
}

export function TrackTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 58%"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.82], [0, 1]);

  return (
    <div ref={ref} className="relative py-2">
      <div className="absolute bottom-0 left-[1.05rem] top-0 w-px bg-white/10" />
      <motion.div
        style={{ scaleY: lineScale, transformOrigin: "top" }}
        className="absolute bottom-0 left-[1.05rem] top-0 w-px bg-gradient-to-b from-rosso via-champagne/70 to-transparent"
      />
      <div className="space-y-6">
        {chapters.map((chapter, index) => (
          <TimelineItem
            key={chapter.title}
            chapter={chapter}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
