import Image from "next/image";
import { Container } from "@/components/layout/Container";

const MEDIA_ITEMS = [
  {
    title: "Beige",
    description: "A clean editorial layout with soft natural tones and refined lighting.",
    type: "image",
    src: "/images/projects/job1.jpg",
    badge: "Photo",
  },
  {
    title: "Darkness",
    description: "Moody portrait photography with bold contrast and cinematic atmosphere.",
    type: "image",
    src: "/images/projects/job2.jpg",
    badge: "Photo",
  },
  {
    title: "Motion Clip 1",
    description: "Replace this file with your downloaded TikTok video saved in /public/videos.",
    type: "video",
    src: "/videos/video-1.mp4",
    badge: "Video",
  },
  {
    title: "Motion Clip 2",
    description: "Optional second video. Copy a TikTok download to /public/videos/video-2.mp4.",
    type: "video",
    src: "/videos/video-2.mp4",
    badge: "Video",
  },
];

type MediaItem = (typeof MEDIA_ITEMS)[number];

function WorkMediaCard({ item, large }: { item: MediaItem; large?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.5)] ${
      large ? "aspect-[9/10] sm:aspect-[4/5]" : "aspect-[4/5]"
    }`}> 
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <video
          src={item.src}
          controls
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.4em] text-white/80">
          {item.badge}
        </div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{item.title}</h2>
        <p className="mt-2 max-w-[26rem] text-sm leading-6 text-white/75">{item.description}</p>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-foreground/60">Dự án</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Ảnh và chuyển động</h1>
        <p className="max-w-2xl text-base leading-7 text-foreground/70">
          Khám phá bộ sưu tập hiện tại với ảnh và video chuyển động. Thêm 1 hoặc 2 clip TikTok vào
          <span className="font-medium text-white"> /public/videos/video-1.mp4 </span> và
          <span className="font-medium text-white"> /public/videos/video-2.mp4 </span> để hiển thị ngay trên trang.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <WorkMediaCard item={MEDIA_ITEMS[0]} large />
        <div className="grid gap-6">
          <WorkMediaCard item={MEDIA_ITEMS[2]} />
          <WorkMediaCard item={MEDIA_ITEMS[3]} />
          <WorkMediaCard item={MEDIA_ITEMS[1]} />
        </div>
      </div>
    </Container>
  );
}
