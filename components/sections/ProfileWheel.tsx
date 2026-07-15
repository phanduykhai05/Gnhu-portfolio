"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, MapPin, Ruler, Sparkles, X } from "lucide-react";
import OptionWheel from "@/components/OptionWheel";

type Section = {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  render: () => React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    key: "Hợp tác",
    icon: Camera,
    title: "Hình thức hợp tác",
    render: () => (
      <ul className="space-y-3">
        {["Nhận chụp", "Quay feedback", "Host livestream"].map((item) => (
          <li key={item} className="flex items-center gap-3 text-lg text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    key: "Nơi ở",
    icon: MapPin,
    title: "Nơi ở",
    render: () => (
      <p className="text-lg leading-relaxed text-white">
        Gò Vấp,
        <br />
        TP. Hồ Chí Minh
      </p>
    ),
  },
  {
    key: "Số đo",
    icon: Ruler,
    title: "Số đo",
    render: () => (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-3xl font-semibold text-white">1m58</p>
            <p className="text-sm text-neutral-400">Chiều cao</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">44kg</p>
            <p className="text-sm text-neutral-400">Cân nặng</p>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            {["82", "65", "89"].map((v, i) => (
              <span key={i} className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-white">{v}</span>
                {i < 2 && <span className="text-neutral-500">–</span>}
              </span>
            ))}
          </div>
          <p className="mt-1 text-sm text-neutral-400">Ba vòng</p>
        </div>
      </div>
    ),
  },
];

export function ProfileWheel() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const active = SECTIONS[index];

  return (
    <>
      {/* Floating trigger — present on every page via the root layout */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Xem thông tin"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-black shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition hover:scale-[1.03] active:scale-95"
      >
        <Sparkles className="h-4 w-4" />
        Thông tin
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative z-10 grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-3xl bg-neutral-900 md:grid-cols-2"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Đóng"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Wheel selector — original OptionWheel with the exact settings from the panel */}
              <div className="h-64 border-b border-white/10 bg-neutral-950/40 md:h-80 md:border-b-0 md:border-r">
                <OptionWheel
                  items={SECTIONS.map((s) => s.key)}
                  defaultSelected={0}
                  onChange={(i) => setIndex(i)}
                  textColor="#a6a6a6"
                  activeColor="#ffffff"
                  side="left"
                  fontSize={3}
                  spacing={2.4}
                  curve={1}
                  tilt={6}
                  blur={2}
                  fade={0.25}
                  smoothing={200}
                  inset={80}
                  loop={true}
                  draggable
                  soundUrl="/tick.wav"
                  soundVolume={1}
                />
              </div>

              {/* Detail panel */}
              <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-500">
                  <active.icon className="h-4 w-4" />
                  {active.title}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {active.render()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
