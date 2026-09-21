import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/studio/legal";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy · Core Marketing" },
      {
        name: "description",
        content: "What Core Marketing collects when you write to us, and what happens to it.",
      },
    ],
  }),
});

const SECTIONS = [
  {
    id: "collect",
    heading: "What we collect",
    paragraphs: [
      "When you write to us through the contact form, we receive whatever you choose to send: your name, your email address, and the context you add about your project. Your message arrives as an email, because the form opens a draft addressed to the studio.",
      "Beyond that, this site keeps no accounts, runs no advertising trackers, and sets no marketing cookies. We do not buy, borrow, or assemble profiles about our visitors.",
    ],
  },
  {
    id: "use",
    heading: "How we use it",
    paragraphs: [
      "We use your note for one purpose: to reply, to understand whether Core is the right fit, and to discuss scope and fees in the first conversation. If the fit is not there, we say so and, where we can, point you somewhere better.",
      "We never sell your details, and we share them with no one except where the law requires it.",
    ],
  },
  {
    id: "keep",
    heading: "How long we keep it",
    paragraphs: [
      "Correspondence stays in our inbox as a normal business record for as long as it remains useful. If you would like your messages deleted, ask and we will remove what we hold, except anything the law obliges us to retain.",
    ],
  },
  {
    id: "rights",
    heading: "Your rights",
    paragraphs: [
      "You may ask at any time what we hold about you, ask us to correct it, or ask us to delete it. Write to the studio address below and we will answer plainly and act promptly.",
    ],
  },
] as const;

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="Short version: you write, we reply, and your details go nowhere else."
      updated="September 2026"
      sections={SECTIONS.map((s) => ({ ...s, paragraphs: [...s.paragraphs] }))}
    />
  );
}
