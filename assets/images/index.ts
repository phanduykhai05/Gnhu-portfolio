import gnhu1 from "./upload/hero/gnhu.jpg";
import gnhu2 from "./upload/hero/gnhu2.jpg";
import gnhu3 from "./upload/hero/gnhu3.jpg";

export const images = {
  gnhu1,
  gnhu2,
  gnhu3,
};

export const HERO_SLIDES = [
  { image: gnhu3, alt: "Brand", href: "/projects/brand" },
  { image: gnhu2, alt: "Darkness", href: "/projects/darkness" },
  { image: gnhu1, alt: "Gentlemen", href: "/projects/gentlemen" },
] as const;

export default images;
