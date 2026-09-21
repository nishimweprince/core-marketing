import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Header } from "@/components/studio/header";
import { Hero } from "@/components/studio/hero";
import { Partners } from "@/components/studio/partners";
import { Industries } from "@/components/studio/industries";
import { Plans } from "@/components/studio/plans";
import { ProjectCta } from "@/components/studio/project-cta";
import { Faq } from "@/components/studio/faq";
import { Contact } from "@/components/studio/contact";
import { Footer } from "@/components/studio/footer";

export function Studio() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function jump(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-dvh bg-ink text-vellum">
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          className: "!bg-night !text-vellum !border-vellum/10 !font-sans !rounded-md !shadow-none",
        }}
      />
      <Header scrolled={scrolled} open={open} onToggle={() => setOpen((v) => !v)} onJump={jump} />
      <Hero onJump={jump} />
      <Partners />
      <Industries />
      <Plans onJump={jump} />
      <ProjectCta onJump={jump} />
      <Faq />
      <Contact />
      <Footer onJump={jump} />
    </div>
  );
}
