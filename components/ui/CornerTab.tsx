import { cn } from "@/lib/utils";

type Corner = "top-left" | "bottom-right";
type Tone = "light" | "dark";

const R = 18; // corner radius in px
const OVERLAP = 1; // px the fillet overlaps the tab to avoid a seam

const LIGHT_BG = "#ffffff";
const DARK_BG = "#0e1011";

export function CornerTab({
  corner,
  tone = "light",
  className,
  children,
}: {
  corner: Corner;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const bg = tone === "light" ? LIGHT_BG : DARK_BG;
  const textClass = tone === "light" ? "text-black" : "text-white";

  // Carve a transparent quarter-circle at the corner farthest from the tab so
  // the tab color flares concavely into the card edge. A crisp stop + 1px
  // overlap onto the tab removes the hairline seam.
  const gradientOrigin = corner === "top-left" ? "bottom right" : "top left";
  const filletStyle: React.CSSProperties = {
    width: R + OVERLAP,
    height: R + OVERLAP,
    background: `radial-gradient(circle ${R}px at ${gradientOrigin}, transparent ${R - 0.5}px, ${bg} ${R + 0.5}px)`,
  };

  const anchorClass =
    corner === "top-left"
      ? "left-0 top-0 rounded-br-[18px]"
      : "bottom-0 right-0 rounded-tl-[18px]";

  const overlap = `calc(100% - ${OVERLAP}px)`;
  const filletAPos: React.CSSProperties =
    corner === "top-left"
      ? { top: 0, left: overlap } // top edge, right of tab
      : { bottom: 0, right: overlap }; // bottom edge, left of tab
  const filletBPos: React.CSSProperties =
    corner === "top-left"
      ? { left: 0, top: overlap } // left edge, below tab
      : { right: 0, bottom: overlap }; // right edge, above tab

  return (
    <div
      className={cn("absolute z-10 px-4 py-2 text-xs font-medium", anchorClass, textClass, className)}
      style={{ backgroundColor: bg }}
    >
      {children}
      <span aria-hidden className="absolute" style={{ ...filletStyle, ...filletAPos }} />
      <span aria-hidden className="absolute" style={{ ...filletStyle, ...filletBPos }} />
    </div>
  );
}
