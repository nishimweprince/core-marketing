import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { STUDIO_INDUSTRIES, STUDIO_PLANS, STUDIO_STEPS } from "@/lib/studio-content";
import { SiteFrame } from "@/components/studio/frame";
import { BrandImage } from "@/components/studio/brand-image";

export const Route = createFileRoute("/what-we-do/$slug")({
  component: IndustryPage,
  head: ({ params }) => {
    const industry = STUDIO_INDUSTRIES.find((r) => r.id === params.slug);
    return {
      meta: industry
        ? [
            { title: `${industry.name} · Core Marketing` },
            { name: "description", content: `${industry.lede} ${industry.paragraphs[0]}` },
          ]
        : [{ title: "Not found · Core Marketing" }],
    };
  },
});

function IndustryPage() {
  const { slug } = Route.useParams();
  const industry = STUDIO_INDUSTRIES.find((r) => r.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!industry) {
    return (
      <SiteFrame solid>
        <div className="flex min-h-[60dvh] flex-col items-start justify-center gap-6 px-6 md:px-12 lg:px-16">
          <p className="font-display text-3xl font-light">There is no page by that name.</p>
          <Link to="/" hash="what-we-do" className="btn-primary">
            See what we do
          </Link>
        </div>
      </SiteFrame>
    );
  }

  const others = STUDIO_INDUSTRIES.filter((r) => r.id !== industry.id);

  return (
    <SiteFrame>
      <section className="relative isolate overflow-hidden bg-ink">
        <BrandImage
          src={industry.image.src}
          alt={industry.image.alt}
          objectPosition={industry.image.objectPosition}
          frameClassName="absolute inset-0 rounded-none"
          imageClassName="hero-media"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 via-35% to-ink/90"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[82dvh] w-full max-w-7xl flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20 lg:px-16">
          <Link to="/" hash="what-we-do" className="link w-fit text-vellum/85">
            What we do
          </Link>
          <h1 className="display mt-6 max-w-[12ch] text-vellum">{industry.name}</h1>
          <p className="mt-6 max-w-md font-display text-xl font-normal text-limestone md:text-2xl">
            {industry.lede}
          </p>
        </div>
      </section>

      <section className="bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            {industry.paragraphs.map((text) => (
              <p key={text} className="editorial">
                {text}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="label text-ash">What we hold</p>
            <ul className="mt-8 flex flex-col gap-5">
              {industry.cares.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-sm leading-relaxed">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="mx-auto mt-28 max-w-7xl md:mt-40">
          <BrandImage
            src={industry.second.src}
            alt={industry.second.alt}
            objectPosition={industry.second.objectPosition}
            frameClassName="aspect-[4/3] w-full rounded-md md:aspect-[21/9]"
            tone="light"
          />
          <figcaption className="label mt-4 text-ash">{industry.second.caption}</figcaption>
        </figure>

        <div className="mx-auto mt-28 grid max-w-7xl gap-12 md:mt-40 lg:grid-cols-12">
          <h2 className="headline lg:col-span-5">How the work unfolds</h2>
          <ol className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {STUDIO_STEPS.map((step) => (
              <li key={step.roman}>
                <p className="font-display text-lg text-juniper">{step.roman}</p>
                <p className="mt-3 font-display text-2xl font-normal">{step.name}</p>
                <p className="body-copy-compact mt-4 text-ash">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <h2 className="headline lg:col-span-5">Begin with the right altitude</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {STUDIO_PLANS.map((plan) => (
                <li key={plan.id} className="border-t border-vellum/12 py-6 last:border-b">
                  <p className="font-sans text-xs font-medium text-juniper tabular-nums">
                    {plan.altitude.toLocaleString("en-GB")} m
                  </p>
                  <Link
                    to="/plans/$planId"
                    params={{ planId: plan.id }}
                    className="mt-1 inline-block font-display text-3xl font-light transition-[color] duration-150 hover:text-juniper"
                  >
                    {plan.name}
                  </Link>
                  <p className="body-copy-compact mt-2 max-w-md text-limestone">{plan.for}</p>
                </li>
              ))}
            </ul>
            <div className="mt-16 flex flex-wrap items-center gap-6">
              <Link to="/" hash="conversation" className="btn-primary">
                Start a conversation
              </Link>
              <p className="body-copy-compact max-w-xs text-limestone">
                Tell us about the {industry.name.toLowerCase()} brand and we will suggest a plan.
              </p>
            </div>
            <p className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-ash">
              Also
              {others.map((other) => (
                <Link
                  key={other.id}
                  to="/what-we-do/$slug"
                  params={{ slug: other.id }}
                  className="link text-limestone"
                >
                  {other.name}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
