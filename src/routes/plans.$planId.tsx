import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PLANS_BAND_IMAGE, STUDIO_PLANS, type StudioPlan } from "@/lib/studio-content";
import { cn } from "@/lib/utils";
import { SiteFrame } from "@/components/studio/frame";
import { BrandImage } from "@/components/studio/brand-image";

export const Route = createFileRoute("/plans/$planId")({
  component: PlanPage,
  head: ({ params }) => {
    const plan = STUDIO_PLANS.find((p) => p.id === params.planId);
    return {
      meta: plan
        ? [
            { title: `${plan.name} · Core Marketing` },
            { name: "description", content: `${plan.means}. ${plan.for}` },
          ]
        : [{ title: "Plan not found · Core Marketing" }],
    };
  },
});

const SECTIONS = [
  { id: "inside", label: "What's inside" },
  { id: "who", label: "Who takes it" },
  { id: "others", label: "Other plans" },
] as const;

function PlanPage() {
  const { planId } = Route.useParams();
  const plan = STUDIO_PLANS.find((p) => p.id === planId);
  const [active, setActive] = useState<string>("inside");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [planId]);

  useEffect(() => {
    if (!plan) return;
    const els = SECTIONS.map((s) => document.getElementById(`plan-${s.id}`)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id.replace("plan-", ""));
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [plan, planId]);

  if (!plan) {
    return (
      <SiteFrame solid>
        <div className="flex min-h-[60dvh] flex-col items-start justify-center gap-6 px-6 md:px-12 lg:px-16">
          <p className="font-display text-3xl font-light">There is no plan by that name.</p>
          <Link to="/" hash="plans" className="btn-primary">
            See the plans
          </Link>
        </div>
      </SiteFrame>
    );
  }

  const others = STUDIO_PLANS.filter((p) => p.id !== plan.id);

  return (
    <SiteFrame>
      <section className="relative isolate overflow-hidden bg-ink">
        <BrandImage
          src={plan.image.src}
          alt={plan.image.alt}
          objectPosition={plan.image.objectPosition}
          frameClassName="absolute inset-0 rounded-none"
          imageClassName="hero-media"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 via-35% to-ink/90"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[82dvh] w-full max-w-7xl flex-col justify-end px-6 pt-32 pb-14 md:px-12 md:pb-20 lg:px-16">
          <Link to="/" hash="plans" className="link w-fit text-vellum/85">
            All plans
          </Link>
          <p className="mt-10 font-sans text-xs text-juniper tabular-nums">
            {plan.altitude.toLocaleString("en-GB")} m
          </p>
          <h1 className="display mt-3 text-vellum">{plan.name}</h1>
          <p className="mt-6 max-w-md font-display text-xl font-normal text-limestone md:text-2xl">
            {plan.means}. {plan.for}
          </p>
        </div>
      </section>

      <nav
        aria-label="On this page"
        className="sticky top-14 z-10 border-b border-vellum/8 bg-ink/95 backdrop-blur-sm md:top-16"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 md:px-12 lg:px-16">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#plan-${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "nav-link inline-flex min-h-14 shrink-0 items-center",
                active === s.id ? "text-juniper" : "text-ash",
              )}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="plan-inside"
        className="scroll-mt-32 bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <h2 className="headline lg:col-span-5">What {plan.name} holds</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="flex flex-col gap-6">
              {plan.includes.map((item) => {
                const inherited = inheritedFrom(item);
                return (
                  <li key={item} className="flex items-baseline gap-4">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-juniper"
                      aria-hidden="true"
                    />
                    {inherited ? (
                      <Inherited label={item} groups={inherited} />
                    ) : (
                      <span className="font-display text-2xl font-normal md:text-[1.75rem]">
                        {item}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="editorial mt-12 text-ash">{plan.typical}</p>
          </div>
        </div>
      </section>

      <section
        id="plan-who"
        className="relative isolate scroll-mt-32 overflow-hidden bg-ink text-vellum"
      >
        <BrandImage
          src={PLANS_BAND_IMAGE.src}
          alt={PLANS_BAND_IMAGE.alt}
          objectPosition={PLANS_BAND_IMAGE.objectPosition}
          frameClassName="absolute inset-0 rounded-none"
          imageClassName="hero-media"
        />
        <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40 lg:px-16">
          <h2 className="headline max-w-xl">Houses on {plan.name}</h2>
          <dl className="mt-16 grid gap-x-12 md:grid-cols-2">
            {plan.suitedFor.map((entry) => (
              <div key={entry.business} className="border-t border-vellum/15 py-6">
                <dt className="font-display text-2xl font-normal">{entry.business}</dt>
                <dd className="body-copy-compact mt-2 max-w-md text-limestone">{entry.why}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="plan-others"
        className="scroll-mt-32 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <h2 className="headline lg:col-span-5">A different altitude</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {others.map((other) => (
                <li key={other.id} className="border-t border-vellum/12 py-6 last:border-b">
                  <p className="font-sans text-xs font-medium text-juniper tabular-nums">
                    {other.altitude.toLocaleString("en-GB")} m
                  </p>
                  <Link
                    to="/plans/$planId"
                    params={{ planId: other.id }}
                    className="mt-1 inline-block font-display text-3xl font-light transition-[color] duration-150 hover:text-juniper"
                  >
                    {other.name}
                  </Link>
                  <p className="body-copy-compact mt-2 max-w-md text-limestone">{other.for}</p>
                </li>
              ))}
            </ul>
            <div className="mt-16 flex flex-wrap items-center gap-6">
              <Link to="/" hash="conversation" className="btn-primary">
                Start a conversation
              </Link>
              <p className="body-copy-compact max-w-xs text-limestone">
                Mention {plan.name}, or tell us where you are and we will suggest one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

const EVERYTHING_IN = /^Everything in (.+)$/;

/**
 * "Everything in Muhabura" is a pointer, not a deliverable. Resolve it to the items it stands
 * for, grouped by the plan they come from, following the chain down to the first plan.
 */
function inheritedFrom(item: string): { from: StudioPlan; items: string[] }[] | null {
  const match = EVERYTHING_IN.exec(item);
  if (!match) return null;
  const groups: { from: StudioPlan; items: string[] }[] = [];
  let source = STUDIO_PLANS.find((p) => p.name === match[1]);
  while (source) {
    const own = source.includes.filter((i) => !EVERYTHING_IN.test(i));
    groups.push({ from: source, items: own });
    const next = source.includes.map((i) => EVERYTHING_IN.exec(i)?.[1]).find(Boolean);
    source = next ? STUDIO_PLANS.find((p) => p.name === next) : undefined;
  }
  return groups.length ? groups : null;
}

function Inherited({
  label,
  groups,
}: {
  label: string;
  groups: { from: StudioPlan; items: string[] }[];
}) {
  const [open, setOpen] = useState(false);
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const id = `inherited-${groups[0].from.id}`;
  return (
    <div className="min-w-0 flex-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-baseline justify-between gap-4 text-left"
      >
        <span className="font-display text-2xl font-normal transition-[color] duration-150 group-hover:text-juniper md:text-[1.75rem]">
          {label}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-sans text-xs text-ash transition-[color] duration-150 group-hover:text-ink">
          {open ? "Hide" : `${total} items`}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200 motion-reduce:transition-none",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </span>
      </button>
      <div
        id={id}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          {groups.map((group) => (
            <div key={group.from.id} className="pt-5">
              <Link
                to="/plans/$planId"
                params={{ planId: group.from.id }}
                className="font-sans text-xs text-ash underline-offset-4 hover:underline"
              >
                From {group.from.name}
              </Link>
              <ul className="mt-2 border-t border-ink/10">
                {group.items.map((i) => (
                  <li key={i} className="body-copy-compact border-b border-ink/10 py-2.5 text-ink">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
