import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Facebook, Instagram, Tiktok as TikTok, Threads } from "@thesvg/react";

import { CornerTab } from "@/components/ui/CornerTab";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { images } from "@/assets/images";

export const metadata: Metadata = {
  title: "Liên hệ — Trần Gia Như",
  description: "Liên hệ — đặt lịch chụp hoặc hợp tác cùng Trần Gia Như.",
};

const ADDRESS = "Gò Vấp, TP. Hồ Chí Minh, Việt Nam";
const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/gianhu.tran.330", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/gnhuuw_", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@gnhuuw_", Icon: TikTok },
  { label: "Threads", href: "https://www.threads.com/@gnhuuw_", Icon: Threads },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col p-4">
      <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:items-start">
        {/* Left: portrait, sticky on desktop */}
        <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl bg-neutral-900 sm:aspect-auto sm:h-full">
            <Image
              src={images.gnhu1}
              alt="Trần Gia Như"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <CornerTab corner="bottom-right" tone="light">
              Studio của tôi
            </CornerTab>
          </div>
        </div>

        {/* Right: form + info + footer */}
        <div className="flex flex-col gap-3">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[1.1fr_1fr_1fr]">
            {/* Studio address */}
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-neutral-900 p-8">
                <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white">
                  Khu vực
                  <br />
                  hoạt động
                </h3>
                <div>
                  <p className="text-[15px] leading-relaxed text-neutral-300">
                    Gò Vấp,
                    <br />
                    TP. Hồ Chí Minh,
                    <br />
                    nhận di chuyển nội thành
                  </p>
                  <Link
                    href={MAP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-2xl bg-neutral-800 px-6 py-3.5 text-[15px] text-white transition hover:bg-neutral-700"
                  >
                    Chỉ đường
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Studio photo */}
            <Reveal delay={0.1}>
              <div className="relative h-full min-h-[240px] overflow-hidden rounded-3xl bg-neutral-900">
                <Image
                  src={images.gnhu2}
                  alt="Không gian studio"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col gap-3 sm:col-span-2 xl:col-span-1">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-between rounded-3xl bg-neutral-900 px-6 py-4 text-[15px] text-white transition hover:bg-neutral-800"
                  >
                    {label}
                    <Icon className="h-5 w-5 text-white" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <SiteFooter />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
