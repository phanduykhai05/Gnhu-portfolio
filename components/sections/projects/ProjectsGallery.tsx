"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as AntImage } from "antd";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { RANDOM_IMAGES } from "@/assets/images";

const GALLERY = [
  { image: RANDOM_IMAGES[0], title: "Ánh sáng dịu", tag: "Studio" },
  { image: RANDOM_IMAGES[1], title: "Chân dung", tag: "Portrait" },
  { image: RANDOM_IMAGES[2], title: "Khoảnh khắc", tag: "Editorial" },
  { image: RANDOM_IMAGES[3], title: "Tự nhiên", tag: "Lifestyle" },
  { image: RANDOM_IMAGES[4], title: "Đường nét", tag: "Fashion" },
  { image: RANDOM_IMAGES[5], title: "Sắc màu", tag: "Studio" },
  { image: RANDOM_IMAGES[6], title: "Cảm xúc", tag: "Portrait" },
];

export function ProjectsGallery() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const openAt = (i: number) => {
    setCurrent(i);
    setVisible(true);
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY.map((item, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
            <figure
              onClick={() => openAt(i)}
              className="group relative cursor-zoom-in overflow-hidden rounded-3xl bg-neutral-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                placeholder="blur"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* gradient + caption on hover */}
              <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                  {item.tag}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-lg font-medium text-white">
                  {item.title}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </figcaption>

              {/* index badge */}
              <span className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Ant Design lightbox preview — hidden trigger group, controlled */}
      <div style={{ display: "none" }}>
        <AntImage.PreviewGroup
          items={GALLERY.map((g) => g.image.src)}
          preview={{
            open: visible,
            current,
            onOpenChange: (v) => setVisible(v),
            onChange: (c) => setCurrent(c),
          }}
        />
      </div>
    </>
  );
}
