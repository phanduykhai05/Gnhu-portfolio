"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Dự án", href: "/projects" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

// Concave "rounded edge" filler: a 20px square that carves a transparent
// quarter-circle so the white header flares smoothly into the page edges.
const R = 20;
const filletStyle = {
  background: `radial-gradient(circle ${R}px at bottom right, transparent 96%, #ffffff 100%)`,
};

type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

function subscribeToTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

export function Navbar() {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = useSyncExternalStore(
    subscribeToTheme,
    () => document.documentElement.classList.contains("dark"),
    () => true,
  );

  // MagicUI animated theme toggle (circle View Transition), wired into the
  // existing switch button so the button UI stays unchanged.
  const toggleTheme = useCallback(() => {
    const button = toggleRef.current;
    if (!button) return;

    const applyTheme = () => {
      const dark = document.documentElement.classList.toggle("dark");
      try {
        localStorage.setItem("theme", dark ? "dark" : "light");
      } catch {
        /* ignore */
      }
    };

    const doc = document as DocumentWithVT;
    if (typeof doc.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => flushSync(applyTheme));
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, []);

  return (
    <>
    <nav className="fixed left-0 top-0 z-50 flex items-center gap-6 rounded-br-[20px] bg-white py-3.5 pl-5 pr-4 text-black">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-black">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
        </span>
        <span className="text-base font-semibold tracking-tight">Trần Gia Như</span>
      </Link>

      <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="transition hover:opacity-60">
            {link.label}
          </Link>
        ))}
      </div>

      {/* mobile hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
        className="flex items-center sm:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <button
        ref={toggleRef}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className={cn(
          "flex h-6 w-11 items-center rounded-full p-0.5 transition-colors",
          isDark ? "bg-neutral-800" : "bg-neutral-200",
        )}
      >
        <span
          className={cn(
            "h-5 w-5 rounded-full bg-black transition-transform",
            isDark && "translate-x-5",
          )}
        />
      </button>

      {/* concave fillets — top edge (right of header) and left edge (below header) */}
      <span aria-hidden className="absolute left-full top-0 h-[20px] w-[20px]" style={filletStyle} />
      <span aria-hidden className="absolute top-full left-0 h-[20px] w-[20px]" style={filletStyle} />
    </nav>

    {/* mobile menu overlay */}
    {menuOpen && (
      <div
        id="overlay"
        className="fixed inset-0 z-[70] flex flex-col bg-black/95 text-white backdrop-blur-sm sm:hidden"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="text-base font-semibold tracking-tight">Trần Gia Như</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-semibold tracking-tight transition hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    )}
    </>
  );
}
