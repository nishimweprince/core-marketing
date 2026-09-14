import { createFileRoute } from "@tanstack/react-router";
import { BrandBook } from "@/components/brand/book";

export const Route = createFileRoute("/book")({ component: BookPage });

function BookPage() {
  return <BrandBook />;
}
