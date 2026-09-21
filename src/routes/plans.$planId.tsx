import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { STUDIO_PLANS, type StudioPlan } from "@/lib/studio-content";
import { cn } from "@/lib/utils";
import { CoreLockup } from "@/components/brand/mark";
import { Footer } from "@/components/studio/footer";
import { useHomeJump } from "@/lib/home-nav";

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
  const jumpHome = useHomeJump();
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
      <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-vellum">
        <p className="font-display text-3xl font-light">There is no plan by that name.</p>
        <Link
          to="/"
          hash="plans"
          className="inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink"
        >
          Back to plans
        </Link>
      </div>
    );
  }

  const others = STUDIO_PLANS.filter((p) => p.id !== plan.id);
  const subject = encodeURIComponent(`Talk about ${plan.name} with Core`);

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

      <section className="px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            hash="plans"
            className="inline-flex w-fit items-center gap-2 font-sans text-[13px] text-vellum/85 transition-[color] duration-150 hover:text-vellum"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Plans
          </Link>
          <p className="mt-10 font-sans text-xs text-limestone tabular-nums">
            {plan.altitude.toLocaleString("en-GB")} m
          </p>
          <h1 className="display mt-4 text-vellum">{plan.name}</h1>
          <p className="mt-6 max-w-md font-display text-xl font-normal text-limestone md:text-2xl">
            {plan.means}. {plan.for}
          </p>
        </div>
      </section>

      <nav aria-label="On this page" className="sticky top-0 z-10 bg-ink/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 md:px-12 lg:px-16">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#plan-${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "inline-flex min-h-14 shrink-0 items-center font-sans text-[13px] transition-[color] duration-150",
                active === s.id ? "text-vellum" : "text-ash hover:text-limestone",
              )}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="plan-inside"
        className="scroll-mt-20 bg-vellum px-6 py-28 text-ink md:px-12 md:py-40 lg:px-16"
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
        className="scroll-mt-20 bg-vellum px-6 pb-28 text-ink md:px-12 md:pb-40 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="headline max-w-xl">Businesses on {plan.name}</h2>
          <p className="editorial mt-8 text-ash">
            The same package, in different hands. If you recognise your business here, the plan
            already fits.
          </p>
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {plan.suitedFor.map((entry) => (
              <li key={entry.business} className="rounded-md bg-ink/[0.04] p-8 md:p-10">
                <p className="font-display text-2xl font-normal">{entry.business}</p>
                <p className="body-copy-compact mt-4 text-ash">{entry.why}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="plan-others"
        className="scroll-mt-20 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="headline max-w-xl">A different altitude</h2>
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {others.map((other) => (
              <li key={other.id} className="plan-card rounded-lg bg-night p-8 md:p-10">
                <p className="font-sans text-xs text-limestone tabular-nums">
                  {other.altitude.toLocaleString("en-GB")} m
                </p>
                <p className="mt-6 font-display text-3xl font-light">{other.name}</p>
                <p className="body-copy-compact mt-4 text-limestone">{other.for}</p>
                <Link
                  to="/plans/$planId"
                  params={{ planId: other.id }}
                  className="mt-8 inline-flex hover:underline underline-offset-4 min-h-11 items-center gap-2 font-sans text-[13px] font-medium text-vellum transition-[opacity] duration-150 hover:opacity-70"
                >
                  See what {other.name} holds
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-24 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-md font-display text-2xl font-normal">
              Know your altitude? Tell us where you want to go.
            </p>
            <a
              href={`mailto:${BRAND.email}?subject=${subject}`}
              className="inline-flex min-h-12 items-center gap-2 bg-vellum px-6 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
            >
              Talk about {plan.name}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Footer onJump={jumpHome} />
    </div>
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
        <span className="font-display text-2xl font-normal md:text-[1.75rem]">{label}</span>
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
