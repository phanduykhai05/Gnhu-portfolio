import Link from "next/link";
import { Mail } from "lucide-react";
import { Facebook, Instagram, Tiktok as TikTok, Threads } from "@thesvg/react";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/gianhu.tran.330", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/gnhuuw_", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@gnhuuw_", Icon: TikTok },
  { label: "Threads", href: "https://www.threads.com/@gnhuuw_", Icon: Threads },
];

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-3">
      {SOCIALS.map(({ label, href, Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden flex items-center justify-between rounded-3xl bg-gradient-to-r from-slate-950/95 via-slate-800/95 to-slate-950/95 px-6 py-4 text-[15px] text-white shadow-[0_24px_90px_rgba(255,255,255,0.12)] border border-white/10"
        >
          <span className="pointer-events-none absolute inset-y-0 left-0 h-full w-44 -translate-x-full -rotate-12 bg-white/30 blur-2xl opacity-75 animate-shine" />
          {label}
          <Icon className="relative h-5 w-5 text-white" />
        </Link>
      ))}
      <Link
        href="/contact"
        className="flex items-center justify-between rounded-3xl border border-foreground/15 bg-transparent px-6 py-4 text-[15px] text-foreground transition hover:bg-foreground/5"
      >
        Liên hệ
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  );
}
