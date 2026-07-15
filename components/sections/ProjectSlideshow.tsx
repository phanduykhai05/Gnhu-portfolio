"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CornerTab } from "@/components/ui/CornerTab";
import { cn } from "@/lib/utils";

import { HERO_SLIDES } from "@/assets/images";

type Slide = Readonly<(typeof HERO_SLIDES)[number]>;

const SLIDES: readonly Slide[] = HERO_SLIDES;

export function ProjectSlideshow() {
  // [current index, direction of last move: 1 = next, -1 = prev]
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);

  const goTo = (i: number, dir: number) => {
    const next = (i + SLIDES.length) % SLIDES.length;
    setState([next, dir]);
  };

  const slide = SLIDES[index];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-900 sm:aspect-auto sm:h-[calc(100vh-2rem)]">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={slide.alt}
          className="absolute inset-0"
          custom={direction}
          variants={{
            enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? "8%" : "-8%", scale: 1.05 }),
            center: { opacity: 1, x: 0, scale: 1 },
            exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? "-8%" : "8%", scale: 1.05 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label="Slide trước"
        onClick={() => goTo(index - 1, -1)}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 sm:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Slide tiếp"
        onClick={() => goTo(index + 1, 1)}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 sm:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <CornerTab corner="bottom-right" tone="light" className="uppercase tracking-wide">
        Tác phẩm chọn lọc
      </CornerTab>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/20 px-3 py-2.5 backdrop-blur-sm sm:bottom-8">
        {SLIDES.map((s, i) => (
          <button
            key={s.href}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={cn(
              "h-2.5 w-2.5 rounded-full bg-white transition-opacity",
              i === index ? "opacity-100" : "opacity-50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
