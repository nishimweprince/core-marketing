import { Link } from "@tanstack/react-router";
import { PLANS, STUDIO_PLANS, type StudioPlan } from "@/lib/studio-content";
import { cn } from "@/lib/utils";

// Summit heights, as the cards see them: the three peaks rise left to right in step with the
// cards (see .plan-step-* in styles.css).
const RIDGE =
  "0,200 90,150 200,118 300,158 420,140 520,96 600,78 700,124 820,104 920,52 1000,30 1100,72 1200,58";

export function Plans() {
  return (
    <section
      id="plans"
      className="scroll-mt-14 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="headline lg:col-span-5">{PLANS.title}</h2>
          <p className="editorial text-limestone lg:col-span-6 lg:col-start-7 lg:pt-4">
            {PLANS.intro}
          </p>
        </div>

        <div className="relative mt-24 md:mt-32 lg:mt-40">
          <svg
            className="pointer-events-none absolute inset-x-0 -top-28 hidden h-56 w-full text-juniper/70 lg:block"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              points={RIDGE}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <ol className="relative grid gap-6 lg:grid-cols-3 lg:items-start">
            {STUDIO_PLANS.map((plan, i) => (
              <li key={plan.id} className={`plan-step-${i + 1}`}>
                <PlanCard plan={plan} />
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6 md:mt-20">
          <Link to="/" hash="conversation" className="btn-primary">
            Start a conversation
          </Link>
          <p className="body-copy-compact max-w-sm text-limestone">
            Not sure which altitude? Tell us where you are and we will suggest one.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: StudioPlan }) {
  const quiet = plan.featured ? "text-ash" : "text-limestone";
  return (
    <article
      className={cn(
        "plan-card flex h-full flex-col rounded-lg p-8 md:p-10",
        plan.featured ? "bg-vellum text-ink" : "bg-night text-vellum",
      )}
    >
      <p className="font-sans text-xs font-medium text-juniper tabular-nums">
        {plan.altitude.toLocaleString("en-GB")} m
      </p>
      <h3 className="mt-10 font-display text-4xl font-light">
        <Link
          to="/plans/$planId"
          params={{ planId: plan.id }}
          className="transition-[color] duration-150 hover:text-juniper"
        >
          {plan.name}
        </Link>
      </h3>
      <p className={cn("mt-3 font-display text-xl font-normal", quiet)}>{plan.means}</p>
      <p className={cn("body-copy mt-8", quiet)}>{plan.for}</p>
      <ul className="mt-10 flex flex-1 flex-col gap-4">
        {plan.includes.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-baseline gap-3 text-sm leading-relaxed",
              plan.featured ? "text-ink" : "text-vellum",
            )}
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to="/plans/$planId"
        params={{ planId: plan.id }}
        className={cn("link mt-10 inline-block w-fit", quiet)}
      >
        What {plan.name} holds
      </Link>
    </article>
  );
}
