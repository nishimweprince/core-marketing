import { ArrowRight } from "lucide-react";
import { PROJECT_CTA } from "@/lib/studio-content";
import { BrandImage } from "@/components/studio/brand-image";

export function ProjectCta({ onJump }: { onJump: (id: string) => void }) {
  return (
    <section aria-labelledby="project-title" className="bg-vellum px-6 pt-28 pb-20 text-ink md:px-12 md:pt-40 md:pb-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-lg bg-night text-vellum lg:grid-cols-2">
          <BrandImage
            src={PROJECT_CTA.image.src}
            alt={PROJECT_CTA.image.alt}
            objectPosition={PROJECT_CTA.image.objectPosition}
            frameClassName="min-h-72 rounded-none lg:min-h-full"
          />
          <div className="flex flex-col justify-center p-8 md:p-14">
            <h2 id="project-title" className="font-display text-3xl font-light md:text-4xl">
              {PROJECT_CTA.title}
            </h2>
            <p className="body-copy mt-8 max-w-md text-limestone">{PROJECT_CTA.body}</p>
            <div className="mt-10">
              <button
                type="button"
                onClick={() => onJump("conversation")}
                className="inline-flex min-h-12 items-center gap-2 bg-vellum px-6 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
              >
                {PROJECT_CTA.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
