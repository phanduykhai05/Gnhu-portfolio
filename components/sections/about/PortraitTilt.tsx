"use client";

import { useRef } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { CornerTab } from "@/components/ui/CornerTab";
import { images } from "@/assets/images";

export function PortraitTilt({
  src = images.gnhu1,
  name = "Trần Gia Như",
}: {
  src?: string | StaticImageData;
  name?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Normalized pointer position within the card (0..1), 0.5 = centered.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-12, 12]), spring);

  // Parallax for the inner layers (name tag drifts opposite the tilt).
  const tagX = useSpring(useTransform(px, [0, 1], [10, -10]), spring);
  const tagY = useSpring(useTransform(py, [0, 1], [10, -10]), spring);

  // Light glare that follows the cursor.
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.28), rgba(255,255,255,0) 45%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div
      className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]"
      style={{ perspective: 1100 }}
    >
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative aspect-3/4 w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] sm:aspect-auto sm:h-full"
      >
        {/* photo — slightly scaled so tilting never reveals the edges */}
        <Image
          src={src}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="scale-[1.08] object-cover object-top"
        />

        {/* depth vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        {/* cursor glare */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glare }}
        />

        {/* name tag with parallax drift */}
        <motion.div
          style={{ x: tagX, y: tagY }}
          className="pointer-events-none absolute inset-0"
        >
          <CornerTab corner="bottom-right" tone="light">
            {name}
          </CornerTab>
        </motion.div>
      </motion.div>
    </div>
  );
}
