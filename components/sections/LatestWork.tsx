"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Image as AntImage } from "antd";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CornerTab } from "@/components/ui/CornerTab";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECT_IMAGES } from "@/assets/images";

const WORKS = [
  { title: "Mẫu Ảnh", image: PROJECT_IMAGES[0] },
  { title: "Mẫu Ảnh", image: PROJECT_IMAGES[1] },
  { title: "Mẫu Ảnh", image: PROJECT_IMAGES[2] },
  { title: "Mẫu Ảnh", image: PROJECT_IMAGES[3] },
  { title: "Mẫu Ảnh", image: PROJECT_IMAGES[4] },
  { title: "Mẫu Ảnh", image: PROJECT_IMAGES[5] },
];

export function LatestWork() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const openAt = (i: number) => {
    setCurrent(i);
    setVisible(true);
  };

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[15px] text-foreground">
          Dự án mới
          <ArrowDown className="h-4 w-4 text-foreground/50" />
        </p>
        <Link
          href="/projects"
          className="text-sm text-foreground underline underline-offset-4 hover:opacity-70"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
        {WORKS.map((work, index) => (
          <Reveal key={index} delay={(index % 2) * 0.08}>
            <figure
              onClick={() => openAt(index)}
              className="group relative block aspect-4/5 cursor-zoom-in overflow-hidden rounded-3xl bg-neutral-900"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <CornerTab corner="top-left" tone="light">
                {work.title}
              </CornerTab>

              {/* hover overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-500 group-hover:bg-black/35 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-sm font-medium text-white">
                  Xem dự án
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Ant Design lightbox preview — hidden trigger group, controlled */}
      <div style={{ display: "none" }}>
        <AntImage.PreviewGroup
          items={WORKS.map((w) => w.image.src)}
          preview={{
            open: visible,
            current,
            onOpenChange: (v) => setVisible(v),
            onChange: (c) => setCurrent(c),
          }}
        />
      </div>
    </div>
  );
}
