import gnhu1 from "./upload/hero/gnhu.jpg";
import gnhu2 from "./upload/hero/gnhu2.jpg";
import gnhu3 from "./upload/hero/gnhu3.jpg";
import job1 from "./upload/projects/job1.jpg";
import job2 from "./upload/projects/job2.jpg";
import job3 from "./upload/projects/job3.jpg";
import job4 from "./upload/projects/job4.jpg";
import job5 from "./upload/projects/job5.jpg";
import job6 from "./upload/projects/job6.jpg";
import me from "./upload/about/me.jpg";
import random1 from "./upload/random/z8043273894386_1d56da6b82930d6f7bd06913eb90133b.jpg";
import random2 from "./upload/random/z8043273896665_8074305b257acabdbf80440a0021f27b.jpg";
import random3 from "./upload/random/z8043274170264_672697de53b6eb70ee677eee048f4e7b.jpg";
import random4 from "./upload/random/z8043276311938_1e02fff0dd29d7413c9c02a537c09887.jpg";
import random5 from "./upload/random/z8043276313561_41ddc62d0eb7c2fc4bbe16eebeddbe67.jpg";
import random6 from "./upload/random/z8043276320213_f912499c82b4a30710c2a3ff9af98842.jpg";
import random7 from "./upload/random/z8043276322485_be77682ac0652fb943f97d19780970b0.jpg";

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
  me,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7,
};

export const HERO_SLIDES = [
  { image: gnhu3, alt: "Brand", href: "/projects/brand" },
  { image: gnhu2, alt: "Darkness", href: "/projects/darkness" },
  { image: gnhu1, alt: "Gentlemen", href: "/projects/gentlemen" },
] as const;

export const PROJECT_IMAGES = [job1, job2, job3, job4, job5, job6] as const;

export const RANDOM_IMAGES = [
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7,
] as const;

export default images;
