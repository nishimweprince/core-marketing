import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Menu, X } from "lucide-react";
import {
  BRAND,
  INSIGHT,
  MEASURES,
  PRACTICES,
  QUESTIONS,
  RETAINERS,
  ROOMS,
  SITE_NAV,
  STEPS,
  TRAITS,
  WORK,
} from "@/lib/brand";
import { cn } from "@/lib/utils";
import { CoreLockup } from "@/components/brand/mark";
import { Inquiry } from "@/components/studio/inquiry";

export function Studio() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["cover", "rooms", "work", "retainers", "house", "conversation"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.35] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
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
          className:
            "!bg-night !text-vellum !border-vellum/10 !font-sans !rounded-md !shadow-none",
        }}
      />
      <Header active={active} open={open} onToggle={() => setOpen((v) => !v)} onJump={jump} />
      <Hero onJump={jump} />
      <Measures />
      <Insight />
      <Rooms />
      <Work />
      <Practices />
      <Retainers onJump={jump} />
      <Approach />
      <House />
      <Questions />
      <Close onJump={jump} />
      <Conversation />
      <Footer onJump={jump} />
    </div>
  );
}

function Header({
  active,
  open,
  onToggle,
  onJump,
}: {
  active: string;
  open: boolean;
  onToggle: () => void;
  onJump: (id: string) => void;
}) {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-40 border-b border-vellum/8 bg-ink/95">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8">
          <button
            type="button"
            onClick={() => onJump("cover")}
            className="text-left text-vellum transition-[opacity] duration-150 hover:opacity-80"
            aria-label="Core Marketing, back to cover"
          >
            <CoreLockup size="sm" />
          </button>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Studio">
            {SITE_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onJump(item.id)}
                className={cn(
                  "inline-flex min-h-11 items-center px-3 font-sans text-xs transition-[color] duration-150",
                  active === item.id ? "text-vellum" : "text-ash hover:text-limestone",
                )}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/book"
              className="inline-flex min-h-11 items-center px-3 font-sans text-xs text-ash transition-[color] duration-150 hover:text-limestone"
            >
              The book
            </Link>
            <button
              type="button"
              onClick={() => onJump("conversation")}
              className="ml-2 inline-flex min-h-11 items-center bg-vellum px-4 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
            >
              Conversation
            </button>
          </nav>
          <button
            type="button"
            onClick={onToggle}
            className="flex size-11 items-center justify-center text-vellum lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pt-20 pb-12 lg:hidden">
          <p className="label text-limestone">Index</p>
          <nav className="mt-8 flex flex-col" aria-label="Studio">
            {SITE_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onJump(item.id)}
                className="flex min-h-14 items-center border-b border-vellum/8 text-left font-display text-2xl font-normal text-vellum"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/book"
              className="flex min-h-14 items-center border-b border-vellum/8 font-display text-2xl font-normal text-vellum"
              onClick={() => onToggle()}
            >
              The book
            </Link>
            <button
              type="button"
              onClick={() => onJump("conversation")}
              className="mt-8 inline-flex min-h-12 items-center justify-center bg-vellum font-sans text-[13px] font-medium text-ink"
            >
              Request a conversation
            </button>
          </nav>
        </div>
      ) : null}
    </>
  );
}

function Hero({ onJump }: { onJump: (id: string) => void }) {
  return (
    <section id="cover" className="relative bg-ink pt-14 md:pt-16">
      <div className="grid min-h-[calc(100dvh-3.5rem)] lg:min-h-dvh lg:grid-cols-2">
        <div className="relative order-2 flex flex-col justify-between px-6 py-10 md:px-12 lg:order-1 lg:px-16 lg:py-20">
          <p className="rise label relative text-limestone">
            {BRAND.origin} · By appointment
          </p>
          <div className="relative">
            <h1 className="sr-only">Core Marketing</h1>
            <p className="rise rise-2 max-w-lg font-display text-4xl font-light leading-[1.05] text-vellum md:text-6xl">
              Presence, made inevitable.
            </p>
            <p className="rise rise-3 mt-6 max-w-md text-sm leading-relaxed text-limestone md:text-base">
              A house of strategy, presence, content, and promotion, for hotels, villas, motor,
              and property that already sell at a premium.
            </p>
          </div>
          <div className="rise rise-5 relative flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onJump("conversation")}
              className="inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-[13px] font-medium text-ink transition-[opacity] duration-150 hover:opacity-90"
            >
              Request a conversation
            </button>
            <button
              type="button"
              onClick={() => onJump("work")}
              className="inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-[13px] font-medium text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5"
            >
              The work
            </button>
          </div>
        </div>
        <div className="relative order-1 min-h-[42vh] lg:order-2 lg:min-h-dvh">
          <img
            src="/brand/hotel.jpg"
            alt="A limestone hotel courtyard at blue hour, still water, one lantern."
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/20" />
        </div>
      </div>
    </section>
  );
}

function Measures() {
  return (
    <section className="border-t border-vellum/8 bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-vellum/8 md:grid-cols-4">
        {MEASURES.map((m) => (
          <article key={m.figure} className="bg-ink px-6 py-8 md:px-8 md:py-10">
            <p className="font-display text-3xl font-normal text-vellum md:text-4xl">
              {m.figure}
            </p>
            <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-ash">{m.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Insight() {
  return (
    <section className="bg-night px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label text-limestone">{INSIGHT.kicker}</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl">
            {INSIGHT.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-limestone">{INSIGHT.body}</p>
        </div>
        <aside className="border-t border-vellum/12 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <p className="font-display text-3xl font-normal text-vellum md:text-4xl">
            {INSIGHT.pull}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ash">
            We build attention. The house is already chosen.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Rooms() {
  const [hotels, motor, property] = ROOMS;
  return (
    <section id="rooms" className="scroll-mt-14 bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="label">The rooms we keep</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl">
          Hospitality. Motor. Property.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ash">
          Three rooms. One house. We take fewer partners so the work can go further.
        </p>

        <article className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-7">
            <img
              src={hotels.image}
              alt={hotels.alt}
              className="brand-photo aspect-video w-full rounded-lg object-cover"
            />
          </figure>
          <div className="lg:col-span-5">
            <p className="label">{hotels.kicker}</p>
            <h3 className="mt-3 font-display text-3xl font-normal">{hotels.name}</h3>
            <p className="mt-4 font-display text-xl font-normal">{hotels.lede}</p>
            <p className="mt-4 text-sm leading-relaxed text-ash">{hotels.body}</p>
          </div>
        </article>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {[motor, property].map((room) => (
            <article key={room.id}>
              <img
                src={room.image}
                alt={room.alt}
                className="brand-photo aspect-[3/2] w-full rounded-lg object-cover"
              />
              <p className="label mt-5">{room.kicker}</p>
              <h3 className="mt-2 font-display text-3xl font-normal">{room.name}</h3>
              <p className="mt-3 font-display text-xl font-normal">{room.lede}</p>
              <p className="mt-3 text-sm leading-relaxed text-ash">{room.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [featured, ...rest] = WORK;
  return (
    <section
      id="work"
      className="scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="label text-limestone">Work</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl">
          Selected plates.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-limestone">
          The rooms, unnamed. Percentages are a volume-agency habit. The work is shown as it is
          held.
        </p>

        <article className="mt-16 grid items-end gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-8">
            <img
              src={featured.image}
              alt={featured.alt}
              className="brand-photo aspect-[16/10] w-full rounded-lg object-cover"
            />
          </figure>
          <div className="lg:col-span-4">
            <p className="label text-limestone">
              {featured.room}
            </p>
            <h3 className="mt-3 font-display text-3xl font-normal">{featured.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ash">{featured.body}</p>
          </div>
        </article>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {rest.map((plate) => (
            <article key={plate.roman}>
              <img
                src={plate.image}
                alt={plate.alt}
                className="brand-photo aspect-[3/2] w-full rounded-lg object-cover"
              />
              <p className="label mt-5 text-limestone">
                {plate.room}
              </p>
              <h3 className="mt-2 font-display text-3xl font-normal">{plate.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{plate.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practices() {
  return (
    <section className="border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="label text-limestone">Practices</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl">
          Four trades. One architecture.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-limestone">
          Sold only together. A brand holds every room it keeps.
        </p>
        <div className="mt-14 grid gap-px bg-vellum/10 md:grid-cols-2">
          {PRACTICES.map((p) => (
            <article key={p.name} className="bg-ink p-8 md:p-10">
              <h3 className="mt-4 font-display text-3xl font-normal">{p.name}</h3>
              <p className="mt-1 text-sm text-ash">{p.subtitle}</p>
              <p className="mt-6 text-sm leading-relaxed text-limestone md:text-base">{p.body}</p>
              <ul className="mt-8">
                {p.holds.map((h) => (
                  <li
                    key={h}
                    className="border-t border-vellum/10 py-3 text-sm leading-relaxed text-vellum"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Retainers({ onJump }: { onJump: (id: string) => void }) {
  return (
    <section
      id="retainers"
      className="scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="label text-limestone">Retainers</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl">
          Prima. Altera. Summa.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-limestone">
          Named in Latin. The first, the second, the highest. Fees are discussed in conversation.
          Never published as a menu.
        </p>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {RETAINERS.map((r) => (
            <article
              key={r.id}
              className={cn(
                "flex flex-col rounded-lg p-7 md:p-8",
                r.featured ? "bg-vellum text-ink" : "bg-night text-vellum",
              )}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className={cn("label", r.featured ? "text-ash" : "text-limestone")}>
                  {r.means}
                </p>
                <p className="text-xs text-ash">{r.term}</p>
              </div>
              <h3 className="mt-6 font-display text-4xl font-normal">{r.latin}</h3>
              <p className={cn("mt-4 text-sm leading-relaxed", r.featured ? "text-ash" : "text-limestone")}>
                {r.for}
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {r.includes.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "border-t pt-3 text-sm leading-relaxed",
                      r.featured ? "border-ink/10 text-ink" : "border-vellum/12 text-vellum",
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-ash">{r.typical}</p>
              <button
                type="button"
                onClick={() => onJump("conversation")}
                className={cn(
                  "mt-8 inline-flex min-h-11 items-center justify-center px-5 font-sans text-[13px] font-medium transition-[opacity,background-color,border-color] duration-150",
                  r.featured
                    ? "bg-ink text-vellum hover:opacity-90"
                    : "border border-vellum/20 text-vellum hover:border-vellum/40 hover:bg-vellum/5",
                )}
              >
                Begin with {r.latin}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="label text-limestone">Approach</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-5xl">
          How an engagement is held.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.name}>
              <p className="font-display text-2xl text-limestone">{s.roman}</p>
              <h3 className="mt-3 font-display text-2xl font-normal">{s.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ash">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function House() {
  return (
    <section
      id="house"
      className="scroll-mt-14 bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label">The house</p>
            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">
              A studio, kept small.
            </h2>
            <p className="mt-6 text-base leading-relaxed">
              Core is the structure a brand stands on when the noise is stripped away. Based in
              Kigali. Working wherever the work is serious.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Digital marketing, social, promotion, and content are usually bought as separate
              trades. That is how brands become loud in one place and absent in another. We hold
              them as one architecture.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex min-h-11 items-center border border-ink/15 px-5 font-sans text-[13px] font-medium text-ink transition-[border-color,background-color] duration-150 hover:border-ink/30 hover:bg-ink/5"
            >
              Read the brand book
            </Link>
          </div>
          <figure className="lg:col-span-6">
            <img
              src="/brand/studio.jpg"
              alt="A quiet studio at dusk, walnut desk, a single lamp, the city beyond."
              className="brand-photo aspect-[3/2] w-full rounded-lg object-cover"
            />
          </figure>
        </div>
        <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {TRAITS.map((t) => (
            <article key={t.name} className="bg-vellum px-6 py-8">
              <p className="font-display text-2xl font-normal">{t.name}</p>
              <p className="mt-4 text-sm leading-relaxed text-ash">{t.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section
      id="questions"
      className="scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label text-limestone">Questions</p>
            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">
              Asked before the letter.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ash">
              The rest is discussed in conversation. Decks follow the first meeting.
            </p>
          </div>
          <div className="border-t border-vellum/10 lg:col-span-8">
            {QUESTIONS.map((item) => (
              <details key={item.id} className="faq-item group border-b border-vellum/10">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-5 text-left">
                  <span className="flex min-w-0 items-baseline gap-4">
                    <span className="font-display text-xl font-normal md:text-2xl">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className="shrink-0 font-display text-2xl leading-none text-limestone group-open:hidden"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span
                    className="hidden shrink-0 font-display text-2xl leading-none text-limestone group-open:inline"
                    aria-hidden="true"
                  >
                    −
                  </span>
                </summary>
                <p className="max-w-xl pb-6 text-sm leading-relaxed text-limestone">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Close({ onJump }: { onJump: (id: string) => void }) {
  return (
    <section className="bg-vellum px-6 py-20 text-ink md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="label">The house is open</p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-light md:text-6xl">
          Tell us the house.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ash">
          We will tell you whether the work can be done properly. Engagements begin by speaking.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onJump("conversation")}
            className="inline-flex min-h-11 items-center bg-ink px-5 font-sans text-[13px] font-medium text-vellum transition-[opacity] duration-150 hover:opacity-90"
          >
            Request a conversation
          </button>
          <button
            type="button"
            onClick={() => onJump("retainers")}
            className="inline-flex min-h-11 items-center border border-ink/15 px-5 font-sans text-[13px] font-medium text-ink transition-[border-color,background-color] duration-150 hover:border-ink/30 hover:bg-ink/5"
          >
            The retainers
          </button>
        </div>
      </div>
    </section>
  );
}

function Conversation() {
  return (
    <section
      id="conversation"
      className="scroll-mt-14 border-t border-vellum/8 bg-ink px-6 py-20 text-vellum md:px-12 md:py-28 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-limestone">Conversation</p>
            <h2 className="mt-5 font-display text-4xl font-light md:text-5xl">
              Engagements begin by speaking.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-limestone">
              Tell us the house. Tell us the room. We will tell you whether the work can be done
              properly.
            </p>
            <p className="mt-8 font-sans text-sm leading-relaxed text-ash">
              {BRAND.email}
              <br />
              {BRAND.web}
              <br />
              {BRAND.origin} · By appointment
            </p>
          </div>
          <div className="lg:col-span-7">
            <Inquiry />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onJump }: { onJump: (id: string) => void }) {
  return (
    <footer className="border-t border-vellum/8 bg-ink px-6 py-16 text-vellum md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <CoreLockup size="md" />
          <p className="mt-6 max-w-xs font-display text-2xl font-normal">
            {BRAND.tagline}
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="label text-limestone">House</p>
          <nav className="mt-5 flex flex-col gap-1" aria-label="Footer">
            {SITE_NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onJump(item.id)}
                className="inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/book"
              className="inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone"
            >
              The book
            </Link>
          </nav>
        </div>
        <div className="lg:col-span-3">
          <p className="label text-limestone">Rooms</p>
          <ul className="mt-5 flex flex-col gap-1">
            {ROOMS.map((room) => (
              <li key={room.id}>
                <button
                  type="button"
                  onClick={() => onJump("rooms")}
                  className="inline-flex min-h-11 items-center font-sans text-sm text-ash transition-[color] duration-150 hover:text-limestone"
                >
                  {room.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="label text-limestone">Correspondence</p>
          <p className="mt-5 text-sm leading-relaxed text-ash">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex min-h-11 items-center text-limestone transition-[color] duration-150 hover:text-vellum"
            >
              {BRAND.email}
            </a>
            <br />
            {BRAND.origin} · Est. {BRAND.year}
            <br />
            By appointment
          </p>
          <a
            href="/brand/kit/05-brand-book/Core-Marketing-Brand-Book.pdf"
            className="mt-4 inline-flex min-h-11 items-center font-sans text-[13px] text-ash transition-[color] duration-150 hover:text-limestone"
          >
            Brand book: PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
