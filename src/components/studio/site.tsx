import { SiteFrame } from "@/components/studio/frame";
import { Hero } from "@/components/studio/hero";
import { Partners } from "@/components/studio/partners";
import { Industries } from "@/components/studio/industries";
import { Plans } from "@/components/studio/plans";
import { Faq } from "@/components/studio/faq";
import { Contact } from "@/components/studio/contact";

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Studio() {
  return (
    <SiteFrame onJump={jump}>
      <Hero onJump={jump} />
      <Partners />
      <Industries />
      <Plans />
      <Faq />
      <Contact />
    </SiteFrame>
  );
}
