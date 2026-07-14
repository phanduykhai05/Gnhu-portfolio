import gnhu1 from "./upload/hero/gnhu.jpg";
import gnhu2 from "./upload/hero/gnhu2.jpg";
import gnhu3 from "./upload/hero/gnhu3.jpg";
import job1 from "./upload/projects/job1.jpg";
import job2 from "./upload/projects/job2.jpg";
import job3 from "./upload/projects/job3.jpg";
import job4 from "./upload/projects/job4.jpg";
import job5 from "./upload/projects/job5.jpg";
import job6 from "./upload/projects/job6.jpg";

export const images = {
  gnhu1,
  gnhu2,
  gnhu3,
  job1,
  job2,
  job3,
  job4,
  job5,
  job6,
};

export const HERO_SLIDES = [
  { image: gnhu3, alt: "Brand", href: "/projects/brand" },
  { image: gnhu2, alt: "Darkness", href: "/projects/darkness" },
  { image: gnhu1, alt: "Gentlemen", href: "/projects/gentlemen" },
] as const;

export const PROJECT_IMAGES = [job1, job2, job3, job4, job5, job6] as const;

export default images;

