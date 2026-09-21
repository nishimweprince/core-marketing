import { useEffect, useRef, useState } from "react";
import { HERO, HERO_VIDEO } from "@/lib/studio-content";
import { cn } from "@/lib/utils";
import { BrandImage } from "@/components/studio/brand-image";

export function Hero({ onJump }: { onJump: (id: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  // The source is chosen on the client so the poster is all the server renders: viewers on a
  // wide screen get the 1080p rendition, everyone else (and anyone saving data) the 720p one.
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setReduced(true);
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    const large = window.innerWidth >= 1280 && !connection?.saveData;
    video.src = large ? HERO_VIDEO.srcLarge : HERO_VIDEO.src;
    video.load();
    video.play().catch(() => {
      /* Autoplay was blocked; the poster stays. */
    });
  }, []);

  return (
    <section id="cover" className="relative isolate min-h-dvh overflow-hidden bg-ink">
      <BrandImage
        src={HERO_VIDEO.poster.src}
        alt={HERO_VIDEO.poster.alt}
        objectPosition={HERO_VIDEO.poster.objectPosition}
        frameClassName="absolute inset-0 rounded-none"
        imageClassName="hero-media"
        priority
      />
      {reduced ? null : (
        <video
          ref={videoRef}
          className={cn(
            "hero-video hero-media absolute inset-0 size-full object-cover transition-opacity duration-1000",
            playing ? "opacity-100" : "opacity-0",
          )}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onPlaying={() => setPlaying(true)}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 via-35% to-ink/90"
        aria-hidden="true"
      />

      <div className="relative flex min-h-dvh flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <p className="rise label text-vellum/85">
            <span className="kicker-dot" aria-hidden="true" />
            {HERO.kicker}
          </p>
          <h1 className="rise rise-2 display mt-5 max-w-[11ch] text-vellum">{HERO.title}</h1>
          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p className="rise rise-3 editorial max-w-md text-limestone">{HERO.deck}</p>
            <button
              type="button"
              onClick={() => onJump("conversation")}
              className="btn-primary rise rise-4 w-fit"
            >
              {HERO.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
