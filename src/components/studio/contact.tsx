import { BRAND } from "@/lib/brand";
import { CONTACT } from "@/lib/studio-content";
import { Inquiry } from "@/components/studio/inquiry";

export function Contact() {
  return (
    <section
      id="conversation"
      className="scroll-mt-14 bg-ink px-6 py-28 text-vellum md:px-12 md:py-40 lg:scroll-mt-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="headline">{CONTACT.title}</h2>
            {CONTACT.paragraphs.map((text) => (
              <p key={text} className="editorial mt-8 text-limestone">
                {text}
              </p>
            ))}
            <p className="mt-12 font-sans text-sm leading-relaxed text-ash">
              <a
                href={`mailto:${BRAND.email}`}
                className="text-limestone transition-[color] duration-150 hover:text-vellum"
              >
                {BRAND.email}
              </a>
              <br />
              {BRAND.origin} · Meetings by appointment
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
