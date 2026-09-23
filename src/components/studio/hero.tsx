import { HERO, HERO_IMAGE } from "@/lib/studio-content";
import { BrandImage } from "@/components/studio/brand-image";

export function Hero({ onJump }: { onJump: (id: string) => void }) {
  return (
    <section id="cover" className="relative isolate min-h-dvh overflow-hidden bg-ink">
      <BrandImage
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        objectPosition={HERO_IMAGE.objectPosition}
        frameClassName="absolute inset-0 rounded-none"
        imageClassName="hero-media"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/35 via-35% to-ink/90"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-ink/75 via-ink/40 via-45% to-transparent"
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
