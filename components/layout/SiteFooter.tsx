import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const LINK_COLUMNS = [
  {
    title: "Trang",
    links: [
      { label: "Trang chủ", href: "/" },
      { label: "Giới thiệu", href: "/about" },
      { label: "Liên hệ", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white p-8 text-black lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/images/about/me.jpg"
            alt="Trần Gia Như"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-xl font-semibold">Trần Gia Như</p>
            <p className="text-sm text-neutral-500">Nhà Mẫu ảnh</p>
          </div>
        </div>
        <p className="text-sm text-neutral-500">
          &copy; Bởi Trần Gia Như. Xây dựng với kdev
        </p>
      </div>

      <div className="grid gap-8">
        <div className="flex items-center gap-4">
          <p className="text-base font-medium">Trang</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
          {LINK_COLUMNS[0].links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="space-y-2 text-sm text-neutral-500">
          <p className="text-base font-medium text-black">Liên hệ</p>
          <p>
            Email: <Link href="mailto:hello@example.com" className="text-black underline">hello@example.com</Link>
          </p>
          <p>
            Số điện thoại: <Link href="tel:+84901234567" className="text-black underline">+84 901 234 567</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
