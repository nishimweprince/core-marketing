import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { STUDIO_INDUSTRIES, STUDIO_PLANS, STUDIO_STEPS } from "@/lib/studio-content";
import { CoreLockup } from "@/components/brand/mark";
import { BrandImage } from "@/components/studio/brand-image";
import { Footer } from "@/components/studio/footer";
import { useHomeJump } from "@/lib/home-nav";

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
  const jumpHome = useHomeJump();
  const industry = STUDIO_INDUSTRIES.find((r) => r.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!industry) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-vellum">
        <p className="font-display text-3xl font-light">There is no room by that name.</p>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink"
        >
          Back to the site
        </Link>
      </div>
    );
  }

  const subject = encodeURIComponent(`A ${industry.name} project with Core`);
  const others = STUDIO_INDUSTRIES.filter((r) => r.id !== industry.id);

  return (
    <div className="min-h-dvh bg-ink text-vellum">
      <header className="absolute top-0 right-0 left-0 z-10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-16">
          <Link to="/" aria-label="Core Marketing, back to the site">
            <CoreLockup size="sm" />
          </Link>
          <a
            href={`mailto:${BRAND.email}?subject=${subject}`}
            className="inline-flex min-h-11 items-center bg-vellum px-4 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
          >
            Start a conversation
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
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
          <Link
            to="/"
            hash="what-we-do"
            className="inline-flex w-fit items-center gap-2 font-sans text-[13px] text-vellum/85 transition-[color] duration-150 hover:text-vellum"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
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
            {industry.paragraphs.map((text, i) => (
              <p key={text} className={i > 0 ? "editorial mt-8 text-ash" : "editorial"}>
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

        <div className="mx-auto mt-32 grid max-w-7xl gap-12 md:mt-40 lg:grid-cols-12">
          <h2 className="headline lg:col-span-5">How the work unfolds</h2>
          <ol className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {STUDIO_STEPS.map((step) => (
              <li key={step.roman}>
                <p className="font-display text-lg text-ash">{step.roman}</p>
                <p className="mt-3 font-display text-2xl font-normal">{step.name}</p>
                <p className="body-copy-compact mt-4 text-ash">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="headline max-w-xl">Begin with the right altitude</h2>
          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {STUDIO_PLANS.map((plan) => (
              <li key={plan.id} className="plan-card rounded-lg bg-night p-8">
                <p className="font-sans text-xs text-limestone tabular-nums">
                  {plan.altitude.toLocaleString("en-GB")} m
                </p>
                <p className="mt-6 font-display text-3xl font-light">{plan.name}</p>
                <p className="body-copy-compact mt-4 text-limestone">{plan.for}</p>
                <a
                  href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Talk about ${plan.name} for ${industry.name}`)}`}
                  className="mt-8 inline-flex min-h-11 items-center gap-2 border border-vellum/20 px-5 font-sans text-[13px] font-medium text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5"
                >
                  Talk about {plan.name}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-24 flex flex-wrap items-center gap-4">
            <p className="font-sans text-sm text-limestone">Also worth a look:</p>
            {others.map((other) => (
              <Link
                key={other.id}
                to="/what-we-do/$slug"
                params={{ slug: other.id }}
                className="inline-flex min-h-11 items-center gap-2 bg-vellum/10 px-5 font-sans text-[13px] font-medium text-vellum transition-[background-color] duration-150 hover:bg-vellum/15"
              >
                {other.name}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer onJump={jumpHome} />
    </div>
  );
}
