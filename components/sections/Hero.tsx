import { ProjectSlideshow } from "@/components/sections/ProjectSlideshow";
import { ProfileCard } from "@/components/sections/ProfileCard";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { LatestWork } from "@/components/sections/LatestWork";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function Hero() {
  return (
    <section className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:items-start">
      <div className="animate-enter lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)]">
        <ProjectSlideshow />
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_minmax(0,16rem)]">
          <div className="animate-enter [animation-delay:100ms]">
            <ProfileCard />
          </div>
          <div className="animate-enter [animation-delay:200ms]">
            <SocialLinks />
          </div>
        </div>
        <div className="animate-enter [animation-delay:300ms]">
          <LatestWork />
        </div>
        <div className="animate-enter [animation-delay:400ms]">
          <SiteFooter />
        </div>
      </div>
    </section>
  );
}
