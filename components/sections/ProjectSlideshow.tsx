"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CornerTab } from "@/components/ui/CornerTab";
import { cn } from "@/lib/utils";

type Slide = {
  image: string;
  alt: string;
  href: string;
};

const SLIDES: Slide[] = [
  { image: "/images/hero/gnhu3.jpg", alt: "Brand", href: "/projects/brand" },
  { image: "/images/hero/gnhu2.jpg", alt: "Darkness", href: "/projects/darkness" },
  { image: "/images/hero/gnhu.jpg", alt: "Gentlemen", href: "/projects/gentlemen" },
];

export function ProjectSlideshow() {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const next = (i + SLIDES.length) % SLIDES.length;
    setIndex(next);
  };

  const slide = SLIDES[index];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-900 sm:aspect-auto sm:h-[calc(100vh-2rem)]">
      <Image
        key={slide.image}
        src={slide.image}
        alt={slide.alt}
        fill
        priority
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover object-center"
      />

      <button
        type="button"
        aria-label="Slide trước"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 sm:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Slide tiếp"
        onClick={() => goTo(index + 1)}
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
            onClick={() => goTo(i)}
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
