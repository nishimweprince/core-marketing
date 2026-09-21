import { createFileRoute } from "@tanstack/react-router";
import { BrandBook } from "@/components/brand/book";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({ meta: [{ title: "The brand book · Core Marketing" }] }),
});

function BookPage() {
  return <BrandBook />;
}
