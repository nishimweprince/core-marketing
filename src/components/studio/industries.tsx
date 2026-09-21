import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { STUDIO_INDUSTRIES, WHAT_WE_DO, type StudioIndustry } from "@/lib/studio-content";
import { cn } from "@/lib/utils";
import { BrandImage } from "@/components/studio/brand-image";

export function Industries() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-14 bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="headline">{WHAT_WE_DO.title}</h2>
            <p className="pull mt-12">{WHAT_WE_DO.pull}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            {WHAT_WE_DO.paragraphs.map((text, i) => (
              <p key={text} className={cn("editorial", i > 0 ? "mt-8 text-ash" : undefined)}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-32 flex flex-col gap-32 md:mt-40 md:gap-40">
          {STUDIO_INDUSTRIES.map((industry, i) => (
            <Chapter key={industry.id} industry={industry} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Chapter({ industry, flip }: { industry: StudioIndustry; flip: boolean }) {
  return (
    <article className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
      <figure className={cn("lg:col-span-7", flip ? "lg:order-2 lg:col-start-6" : "lg:order-1")}>
        <BrandImage
          src={industry.image.src}
          alt={industry.image.alt}
          objectPosition={industry.image.objectPosition}
          frameClassName="aspect-[4/3] w-full rounded-md lg:aspect-[5/4]"
          tone="light"
        />
        <figcaption className="sr-only">{industry.image.alt}</figcaption>
      </figure>
      <div className={cn("lg:col-span-5", flip ? "lg:order-1 lg:col-start-1" : "lg:order-2")}>
        <h3 className="font-display text-3xl font-light md:text-4xl">{industry.name}</h3>
        <p className="mt-5 font-display text-xl font-normal text-ash md:text-2xl">
          {industry.lede}
        </p>
        {industry.paragraphs.map((text) => (
          <p key={text} className="editorial mt-8">
            {text}
          </p>
        ))}
        <ul className="mt-10 flex flex-col gap-4">
          {industry.cares.map((item) => (
            <li key={item} className="flex items-baseline gap-3 text-sm leading-relaxed text-ink">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/what-we-do/$slug"
          params={{ slug: industry.id }}
          className="mt-10 inline-flex min-h-11 items-center gap-2 bg-vellum border border-ink px-5 font-sans text-[13px] font-medium text-ink transition-colors duration-150 hover:bg-ink hover:text-vellum"
        >
          Explore {industry.name}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
