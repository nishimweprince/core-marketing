import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Download } from "lucide-react";
import {
  BRAND,
  COLORS,
  KIT_ZIP,
  DOWNLOADS,
  IMAGE_RULES,
  MISUSE,
  PRACTICES,
  SECTIONS,
  TRAITS,
  TYPE_ROLES,
  VOICE_RULES,
  VOICE_SAMPLES,
} from "@/lib/brand";
import { cn } from "@/lib/utils";
import { CoreLockup, CoreMark, CoreMarkConstruct, CoreWordmark } from "@/components/brand/mark";
import { MobileBar, ProgressBar, SideRail } from "@/components/brand/nav";
import { Chapter, CopyChip, Rule } from "@/components/brand/ui";
import { DownloadLink } from "@/components/brand/download-link";
import {
  BusinessCard,
  EmailSignature,
  Envelope,
  Letterhead,
  LinkedInBanner,
  SignagePlaque,
  SocialPost,
  SocialStory,
  TitleSlide,
  WebChrome,
} from "@/components/brand/mockups";

export function BrandBook() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
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
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? root.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <ProgressBar value={progress} />
      <SideRail active={active} onJump={jump} />
      <MobileBar open={open} onToggle={() => setOpen((v) => !v)} onJump={jump} />

      <div className="lg:pl-52">
        <Cover onOpen={() => jump("house")} />
        <House />
        <Position />
        <Mark />
        <Colour />
        <Type />
        <Voice />
        <Image />
        <Applications />
        <System />
      </div>
    </div>
  );
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <section
      id="cover"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-ink pt-14 lg:pt-0"
    >
      <div className="grid min-h-dvh lg:grid-cols-2">
        <div className="relative flex flex-col justify-between px-6 py-10 md:px-14 lg:px-16 lg:py-16">
          <div className="grid-construct pointer-events-none absolute inset-0 opacity-60" />
          <p className="rise label relative text-limestone">
            {BRAND.bookTitle}  ·  {BRAND.edition}
          </p>

          <div className="relative">
            <h1 className="sr-only">Core Marketing</h1>
            <div className="rise rise-1">
              <CoreLockup size="hero" />
            </div>
            <p className="rise rise-3 mt-8 font-sans text-[11px] font-medium tracking-label text-limestone uppercase">
              {BRAND.origin} · A marketing studio
            </p>
            <p className="rise rise-4 mt-6 max-w-md font-display text-4xl font-light tracking-display text-vellum italic md:text-5xl">
              Presence, made inevitable.
            </p>
          </div>

          <div className="rise rise-5 relative flex flex-wrap items-end justify-between gap-4">
            <p className="font-sans text-xs leading-relaxed text-ash">
              Established {BRAND.year}
              <br />
              {BRAND.origin} · By appointment
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <DownloadLink
                href="/brand/kit/05-brand-book/Core-Marketing-Brand-Book.pdf"
                file="Core-Marketing-Brand-Book.pdf"
                className="inline-flex min-h-11 items-center bg-vellum px-5 font-sans text-xs font-medium tracking-label text-ink uppercase transition-[opacity] duration-150 hover:opacity-90"
              >
                Download the brand book
              </DownloadLink>
              <DownloadLink
                href={KIT_ZIP.href}
                file={KIT_ZIP.file}
                className="inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-xs font-medium tracking-label text-vellum uppercase transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5"
              >
                Download the kit
              </DownloadLink>
              <button
                type="button"
                onClick={onOpen}
                className="inline-flex min-h-11 items-center border border-vellum/20 px-5 font-sans text-xs font-medium tracking-label text-vellum uppercase transition-[border-color,background-color] duration-150 hover:border-vellum/40 hover:bg-vellum/5"
              >
                Open the book
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[48vh] lg:block">
          <img
            src="/brand/aperture.jpg"
            alt="A circular aperture of light held in a dark opening — the core."
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/15" />
        </div>
      </div>
    </section>
  );
}

function House() {
  return (
    <Chapter
      id="house"
      num="01"
      kicker="The House"
      title="The work that remains."
      lede="Core is not a department and not a campaign. It is the structure a brand stands on when the noise is stripped away."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed md:text-xl">
            We partner with a small number of companies who already know they are not average —
            and who want their public presence to finally match that fact.
          </p>
          <p className="mt-6 leading-relaxed text-ash">
            Digital marketing, social, promotion, and content are usually bought as separate
            trades. That is how brands become loud in one place and absent in another. Core holds
            them as one architecture: the argument, the channels, the evidence, and the
            amplification. Structure first. Then signal. Then scale.
          </p>
          <p className="mt-6 leading-relaxed text-ash">
            We are a house, not a mill. Senior rooms. Retained partnerships. A standard that does
            not drop when the calendar gets full. Based in Kigali. Working wherever the work is
            serious.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src="/brand/studio.jpg"
            alt="A quiet studio at dusk — walnut desk, a single lamp, the city beyond."
            className="brand-photo aspect-[4/5] w-full rounded-md object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {TRAITS.map((t) => (
          <article key={t.name} className="bg-vellum px-6 py-8">
            <p className="font-display text-2xl font-light tracking-display">{t.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-ash">{t.body}</p>
          </article>
        ))}
      </div>
    </Chapter>
  );
}

function Position() {
  return (
    <Chapter
      id="position"
      num="02"
      kicker="Position"
      title="A house of record for ambitious brands."
      lede="High-ticket work requires a high-ticket standard. We do not rent attention. We build it."
      tone="ink"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-lg bg-night p-7">
          <p className="label text-limestone">For</p>
          <p className="mt-4 font-display text-2xl font-light tracking-display">
            Founders, houses, and professional practices that already sell at a premium.
          </p>
        </article>
        <article className="rounded-lg bg-night p-7">
          <p className="label text-limestone">Does</p>
          <p className="mt-4 font-display text-2xl font-light tracking-display">
            Architects digital presence — strategy through promotion — as a single system.
          </p>
        </article>
        <article className="rounded-lg bg-night p-7">
          <p className="label text-limestone">Unlike</p>
          <p className="mt-4 font-display text-2xl font-light tracking-display">
            Volume agencies, freelance scatter, and work that looks busy without becoming
            inevitable.
          </p>
        </article>
      </div>

      <div className="mt-20">
        <p className="label text-limestone">Practices</p>
        <div className="mt-8 divide-y divide-vellum/10 border-y border-vellum/10">
          {PRACTICES.map((p) => (
            <article key={p.name} className="grid gap-4 py-8 md:grid-cols-12 md:items-start">
              <p className="font-display text-2xl text-limestone md:col-span-1">{p.roman}</p>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl font-light tracking-display">{p.name}</h3>
                <p className="mt-1 text-sm text-ash">{p.subtitle}</p>
              </div>
              <p className="text-sm leading-relaxed text-limestone md:col-span-7 md:text-base">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-16 max-w-2xl font-display text-2xl font-light tracking-display text-vellum italic md:text-3xl">
        Engagements begin by conversation. We take the work that can be done properly, and we
        decline the rest.
      </p>
    </Chapter>
  );
}

function Mark() {
  const fields: { bg: string; label: string; field: "ink" | "vellum" | "mono" }[] = [
    { bg: "bg-ink text-vellum", label: "On Ink", field: "ink" },
    { bg: "bg-vellum text-ink", label: "On Vellum", field: "vellum" },
    { bg: "bg-night text-vellum", label: "On Night", field: "ink" },
    { bg: "bg-limestone text-ink", label: "Mono on Limestone", field: "mono" },
  ];

  return (
    <Chapter
      id="mark"
      num="03"
      kicker="The Mark"
      title="Ivory. Stone. Juniper."
      lede="The mark sits to the left of the name. CORE is the larger line — semibold, tracked. MARKETING sits beneath it, smaller, regular, in limestone."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-lg bg-ink text-vellum">
          <CoreMark className="w-2/5" />
        </div>
        <div className="flex aspect-square items-center justify-center rounded-lg bg-ink/5 text-ink">
          <CoreMarkConstruct className="w-2/5" />
        </div>
      </div>
      <div className="mt-6 flex min-h-44 items-center justify-center rounded-lg bg-ink px-8 py-12 text-vellum">
        <CoreLockup size="lg" />
      </div>
      <div className="mt-4 grid gap-4 text-sm text-ash md:grid-cols-2">
        <p>Primary mark — on ink. Ivory outer, stone inner, juniper nucleus. Use this digitally, in film, and on dark print.</p>
        <p>
          Construction. Clear space equals one core-diameter on every side. Minimum size: 20px
          digital, 8mm print. The nucleus is always Juniper, except in single-colour
          reproduction.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg bg-ink p-8 text-vellum">
          <p className="label text-limestone">Horizontal</p>
          <div className="mt-10">
            <CoreLockup size="md" />
          </div>
        </div>
        <div className="rounded-lg bg-ink p-8 text-vellum">
          <p className="label text-limestone">Stacked</p>
          <div className="mt-10">
            <CoreLockup stacked size="md" />
          </div>
        </div>
        <div className="rounded-lg bg-ink p-8 text-vellum">
          <p className="label text-limestone">Wordmark</p>
          <div className="mt-10">
            <CoreWordmark />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="label">Fields</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {fields.map((f) => (
            <div
              key={f.label}
              className={cn(
                "flex aspect-square flex-col items-center justify-center gap-6 rounded-md",
                f.bg,
              )}
            >
              <CoreMark className="w-1/3" field={f.field} />
              <p className="font-sans text-[10px] tracking-wide opacity-70">{f.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <p className="label">Misuse</p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {MISUSE.map((rule) => (
            <li
              key={rule}
              className="flex gap-3 rounded-md border border-ink/10 px-5 py-4 text-sm leading-relaxed"
            >
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-ink/40" />
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </Chapter>
  );
}

function Colour() {
  return (
    <Chapter
      id="colour"
      num="04"
      kicker="Colour"
      title="Six named colours. Juniper is used once."
      lede="The palette is a material specification, not a moodboard. Ink and Vellum do the work. Limestone is stone. Juniper is the nucleus — reserved for the mark."
      tone="ink"
    >
      <div className="grid gap-3">
        {COLORS.map((c) => (
          <article
            key={c.name}
            className={cn(
              "flex flex-col justify-between gap-8 rounded-lg p-6 md:min-h-44 md:flex-row md:items-end",
              c.swatch,
              c.tall && "min-h-56 md:min-h-64",
              c.invertChip && "ring-1 ring-vellum/12",
            )}
          >
            <div>
              <p className="font-display text-4xl font-light tracking-display md:text-5xl">
                {c.name}
              </p>
              <p
                className="mt-3 max-w-md text-sm leading-relaxed opacity-80"
              >
                {c.role}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <CopyChip label={c.name} value={c.hex} invert={c.invertChip} />
              <span className="font-sans text-xs tabular-nums opacity-70">RGB {c.rgb}</span>
              <span className="hidden font-sans text-xs tabular-nums opacity-70 sm:inline">
                CMYK {c.cmyk}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-3 md:grid-cols-3">
        <Combo a="Vellum" aBg="bg-vellum text-ink" b="Ink" note="Print, paper, light UI" />
        <Combo a="Ink" aBg="bg-ink text-vellum" b="Vellum" note="Digital, film, dark print" />
        <Combo
          a="Ink"
          aBg="bg-ink text-limestone"
          b="Limestone"
          note="Captions and hairlines on dark"
        />
      </div>
      <p className="mt-6 text-sm text-ash">
        Never set Limestone type on Vellum, or Ash type on Night. Contrast is part of the brand.
      </p>
    </Chapter>
  );
}

function Combo({
  a,
  aBg,
  b,
  note,
}: {
  a: string;
  aBg: string;
  b: string;
  note: string;
}) {
  return (
    <div className={cn("rounded-md p-6", aBg)}>
      <p className="font-display text-2xl font-light">
        {a} / {b}
      </p>
      <p className="mt-3 text-xs opacity-70">{note}</p>
    </div>
  );
}

function Type() {
  return (
    <Chapter
      id="type"
      num="05"
      kicker="Type"
      title="A serif for the name. A sans for the work."
      lede="Cormorant Garamond carries the voice — light, editorial, unhurried. Manrope carries the information. Two families. No substitutes."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="label">Display</p>
          <p className="mt-4 font-display text-6xl leading-none font-light tracking-display md:text-8xl">
            Aa
          </p>
          <p className="mt-6 font-display text-3xl font-light tracking-display">
            Cormorant Garamond
          </p>
          <p className="mt-4 font-display text-xl leading-snug">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            1234567890
          </p>
        </div>
        <div>
          <p className="label">Sans</p>
          <p className="mt-4 font-sans text-6xl leading-none font-medium md:text-8xl">Aa</p>
          <p className="mt-6 font-sans text-2xl font-medium">Manrope</p>
          <p className="mt-4 font-sans text-lg leading-snug">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            1234567890
          </p>
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-lg border border-ink/10">
        {TYPE_ROLES.map((t, i) => (
          <div
            key={t.role}
            className={cn("grid gap-4 p-6 md:grid-cols-12 md:items-baseline", i > 0 && "border-t border-ink/10")}
          >
            <p className="label md:col-span-2">{t.role}</p>
            <p
              className={cn(
                "md:col-span-7",
                t.role === "Display" &&
                  "font-display text-5xl leading-none font-light tracking-display md:text-6xl",
                t.role === "Headline" &&
                  "font-display text-3xl font-light tracking-display md:text-4xl",
                t.role === "Deck" && "text-base leading-relaxed",
                t.role === "Label" && "label text-ash",
              )}
            >
              {t.sample}
            </p>
            <p className="text-xs leading-relaxed text-ash md:col-span-3 md:text-right">
              {t.family}
              <br />
              {t.size}  ·  {t.tracking}
            </p>
          </div>
        ))}
      </div>

      <blockquote className="mt-16 border-l border-ink/15 pl-6 md:pl-10">
        <p className="font-display text-3xl font-light tracking-display italic md:text-5xl">
          Presence is not volume. It is the feeling that a brand was inevitable.
        </p>
        <p className="mt-6 label">Pull quote — Cormorant Italic</p>
      </blockquote>
    </Chapter>
  );
}

function Voice() {
  return (
    <Chapter
      id="voice"
      num="06"
      kicker="Voice"
      title="Write as if the room is already quiet."
      lede="We sound like a well-cut suit: considered, warm at close range, never performing. The work is described. It is never hyped."
    >
      <div className="grid gap-px bg-ink/10 md:grid-cols-2">
        {VOICE_RULES.map((r) => (
          <article key={r.do} className="grid gap-6 bg-vellum p-6 sm:grid-cols-2">
            <div>
              <p className="label">Do</p>
              <p className="mt-3 text-sm leading-relaxed">{r.do}</p>
            </div>
            <div>
              <p className="label">Do not</p>
              <p className="mt-3 text-sm leading-relaxed text-ash">{r.dont}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <p className="label">In practice</p>
        <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
          {VOICE_SAMPLES.map((s) => (
            <article key={s.label} className="grid gap-6 py-8 md:grid-cols-12">
              <p className="label md:col-span-2">{s.label}</p>
              <p className="text-sm leading-relaxed text-ash line-through decoration-ink/30 md:col-span-5">
                {s.wrong}
              </p>
              <p className="text-sm leading-relaxed md:col-span-5">{s.right}</p>
            </article>
          ))}
        </div>
      </div>
    </Chapter>
  );
}

function Image() {
  const photos = [
    {
      src: "/brand/gallery.jpg",
      alt: "A private gallery: limestone, oak, a shaft of afternoon light.",
      caption: "Rooms, not sets",
    },
    {
      src: "/brand/stationery.jpg",
      alt: "Cream cotton paper, a black fountain pen, linen ribbon on dark cloth.",
      caption: "Materials, close",
    },
    {
      src: "/brand/city.jpg",
      alt: "A stone and glass building at blue hour, one warm interior light.",
      caption: "The city, held",
    },
    {
      src: "/brand/desk.jpg",
      alt: "Envelope, letter, and a black seal on honed stone.",
      caption: "The correspondence",
    },
  ];

  return (
    <Chapter
      id="image"
      num="07"
      kicker="Image"
      title="Photograph toward the palette."
      lede="Imagery should feel collected, not produced. Architecture, paper, stone, cloth. One light. Plenty of air."
      tone="ink"
    >
      <div className="grid gap-3 md:grid-cols-2">
        {photos.map((p) => (
          <figure key={p.src} className="group">
            <img
              src={p.src}
              alt={p.alt}
              className="brand-photo aspect-[3/2] w-full rounded-md object-cover"
            />
            <figcaption className="mt-3 flex items-center justify-between">
              <span className="text-sm text-limestone">{p.caption}</span>
              <span className="label text-ash">Core · Image</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {IMAGE_RULES.map((r) => (
          <article key={r.title}>
            <p className="font-display text-2xl font-light tracking-display">{r.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ash">{r.body}</p>
          </article>
        ))}
      </div>
    </Chapter>
  );
}

function Applications() {
  return (
    <Chapter
      id="applications"
      num="08"
      kicker="Applications"
      title="How the brand occupies the world."
      lede="Stationery, screens, and spaces. Every surface should feel like the same house — not a campaign wearing a logo."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <figure>
          <BusinessCard side="front" />
          <figcaption className="mt-3 text-sm text-ash">Calling card — face. Ink field, reverse mark.</figcaption>
        </figure>
        <figure>
          <BusinessCard side="back" />
          <figcaption className="mt-3 text-sm text-ash">Calling card — reverse. Vellum, studio line.</figcaption>
        </figure>
      </div>

      <div className="mt-16 grid items-start gap-10 lg:grid-cols-12">
        <figure className="lg:col-span-5">
          <Letterhead />
          <figcaption className="mt-3 text-sm text-ash">Letterhead. A4. Quiet header, open field.</figcaption>
        </figure>
        <div className="flex flex-col gap-10 lg:col-span-7">
          <figure>
            <Envelope />
            <figcaption className="mt-3 text-sm text-ash">Envelope. Mark at the corner; address as a whisper.</figcaption>
          </figure>
          <figure>
            <EmailSignature />
            <figcaption className="mt-3 text-sm text-ash">Email signature. Name in serif, details in sans.</figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-16">
        <p className="label">Social</p>
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <figure className="md:col-span-4">
            <SocialPost />
            <figcaption className="mt-3 text-sm text-ash">Feed — 4:5. One idea. No collage.</figcaption>
          </figure>
          <figure className="md:col-span-3">
            <SocialStory />
            <figcaption className="mt-3 text-sm text-ash">Story — 9:16. Image as architecture.</figcaption>
          </figure>
          <figure className="md:col-span-5 flex flex-col gap-6">
            <LinkedInBanner />
            <p className="text-sm text-ash">LinkedIn cover. Lockup, left. Photography, held back.</p>
            <TitleSlide />
            <p className="text-sm text-ash">Presentation title. 16:9. Confidential by default.</p>
          </figure>
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <figure>
          <WebChrome />
          <figcaption className="mt-3 text-sm text-ash">Digital presence. The site is a room, not a funnel graphic.</figcaption>
        </figure>
        <figure>
          <SignagePlaque />
          <figcaption className="mt-3 text-sm text-ash">Plaque. Mark only. Limestone field, Ink plate.</figcaption>
        </figure>
      </div>

      <div
        className="relative mt-16 overflow-hidden rounded-lg"
      >
        <img
          src="/brand/reception.jpg"
          alt="A dark plaster reception with a recessed niche, ready for the mark."
          className="brand-photo aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/20" />
        <p className="absolute bottom-6 left-6 label text-vellum">Environmental — niche, waiting</p>
      </div>
    </Chapter>
  );
}

function System() {
  return (
    <section id="system" className="relative scroll-mt-14 bg-ink text-vellum lg:scroll-mt-0">
      <div className="px-6 py-20 md:px-14 md:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="label text-limestone">09  —  System</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-display md:text-6xl">
            Rules that keep the house standing.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-limestone md:text-lg">
            Spacing, files, and the closing note. This is the kit — not a mood, a specification.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg bg-night p-7">
              <p className="label text-limestone">Grid</p>
              <p className="mt-4 font-display text-2xl font-light tracking-display">
                Twelve columns on desktop. Four on mobile. Margins generous.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ash">
                Align to the spine. Do not invent a second grid for campaigns.
              </p>
            </article>
            <article className="rounded-lg bg-night p-7">
              <p className="label text-limestone">Space</p>
              <p className="mt-4 font-display text-2xl font-light tracking-display">
                4, 8, 12, 16, 24, 32, 48, 64. Air is a brand colour.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ash">
                If a layout feels busy, remove an element before you add a rule.
              </p>
            </article>
            <article className="rounded-lg bg-night p-7">
              <p className="label text-limestone">Motion</p>
              <p className="mt-4 font-display text-2xl font-light tracking-display">
                150–250ms. Ease out. Opacity and transform only.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ash">
                No bounce, no parallax theatre, no animation that delays the work.
              </p>
            </article>
          </div>

          <div className="mt-20">
            <p className="label text-limestone">Downloads</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash">
              The book as a 16-page A4 PDF — send this to stakeholders. The mark
              alone. The lockup with words. Editable business cards (open the SVG,
              change the name). Letterhead and envelope. Or take the full kit.
            </p>
            <DownloadLink
              href={KIT_ZIP.href}
              file={KIT_ZIP.file}
              className="mt-8 flex min-h-16 w-full items-center justify-between gap-4 rounded-md bg-vellum px-6 text-left text-ink transition-[opacity] duration-150 hover:opacity-90"
            >
              <span>
                <span className="block font-sans text-sm font-semibold tracking-brand uppercase">
                  {KIT_ZIP.label}
                </span>
                <span className="mt-1 block font-sans text-[10px] tracking-label text-ash uppercase">
                  Logos, lockups, cards, stationery, book, tokens
                </span>
              </span>
              <Download className="size-5 shrink-0" />
            </DownloadLink>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {DOWNLOADS.map((g) => (
                <div key={g.group}>
                  <p className="label text-limestone">{g.group}</p>
                  <div className="mt-4 grid gap-2">
                    {g.items.map((d) => (
                      <DownloadLink
                        key={d.file}
                        href={d.href}
                        file={d.file}
                        className="flex min-h-12 w-full items-center justify-between gap-3 rounded-md border border-vellum/10 bg-night px-4 text-left text-sm text-vellum transition-[border-color,background-color] duration-150 hover:border-vellum/25 hover:bg-vellum/5"
                      >
                        <span>{d.label}</span>
                        <Download className="size-4 shrink-0 text-limestone" />
                      </DownloadLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Rule invert className="mt-20" />

          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <CoreLockup size="lg" />
              <p className="mt-10 max-w-md font-display text-3xl font-light tracking-display italic">
                {BRAND.tagline}
              </p>
            </div>
            <div className="lg:text-right">
              <p className="font-sans text-sm leading-relaxed text-limestone">
                {BRAND.email}
                <br />
                {BRAND.web}
                <br />
                {BRAND.origin} · By appointment
              </p>
              <p className="mt-8 text-xs tracking-label text-ash uppercase">
                Est. {BRAND.year}  ·  {BRAND.edition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
