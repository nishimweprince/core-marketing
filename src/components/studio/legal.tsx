import { BRAND } from "@/lib/brand";
import { SiteFrame } from "@/components/studio/frame";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <SiteFrame solid>
      <div className="bg-vellum px-6 pt-20 pb-28 text-ink md:px-12 md:pt-28 md:pb-40 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h1 className="headline">{title}</h1>
              <p className="editorial mt-8 text-ash">{intro}</p>
              <p className="mt-8 font-sans text-xs text-ash">Last updated {updated}</p>
              <nav aria-label="On this page" className="mt-10 hidden flex-col lg:flex">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="nav-link inline-flex min-h-10 items-center text-sm text-ash"
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-normal md:text-[1.75rem]">{s.heading}</h2>
                {s.paragraphs.map((text) => (
                  <p key={text.slice(0, 48)} className="editorial mt-6 text-ash">
                    {text}
                  </p>
                ))}
                <div className="h-16 md:h-20" aria-hidden="true" />
              </section>
            ))}
            <p className="font-sans text-sm leading-relaxed text-ash">
              Questions about any of this? Write to{" "}
              <a href={`mailto:${BRAND.email}`} className="link text-ink">
                {BRAND.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </SiteFrame>
  );
}
